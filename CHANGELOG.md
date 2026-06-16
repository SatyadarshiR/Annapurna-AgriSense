"""Train a PlantVillage crop disease classifier.

Default dataset source is TensorFlow Datasets:
    python train.py --dataset-source tfds --epochs 12

Alternative folder layout:
    data/
      Tomato___Late_blight/
      Tomato___healthy/
      ...
    python train.py --dataset-source directory --data-dir ./data
"""

from __future__ import annotations

import argparse
import json
import os
import random
from pathlib import Path

import numpy as np
import pandas as pd
import tensorflow as tf
import tensorflow_datasets as tfds
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix,
    f1_score,
    precision_score,
    recall_score,
)


AUTOTUNE = tf.data.AUTOTUNE


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Train MobileNetV2 on PlantVillage.")
    parser.add_argument("--dataset-source", choices=["tfds", "directory"], default="tfds")
    parser.add_argument("--data-dir", type=Path, default=Path("data/plantvillage"))
    parser.add_argument("--output-dir", type=Path, default=Path("artifacts"))
    parser.add_argument("--image-size", type=int, default=224)
    parser.add_argument("--batch-size", type=int, default=32)
    parser.add_argument("--epochs", type=int, default=12)
    parser.add_argument("--fine-tune-epochs", type=int, default=5)
    parser.add_argument("--learning-rate", type=float, default=1e-3)
    parser.add_argument("--fine-tune-learning-rate", type=float, default=1e-5)
    parser.add_argument("--validation-split", type=float, default=0.15)
    parser.add_argument("--test-split", type=float, default=0.15)
    parser.add_argument("--seed", type=int, default=42)
    parser.add_argument("--savedmodel", action="store_true", help="Also export TensorFlow SavedModel.")
    return parser.parse_args()


def set_reproducibility(seed: int) -> None:
    os.environ["PYTHONHASHSEED"] = str(seed)
    random.seed(seed)
    np.random.seed(seed)
    tf.random.set_seed(seed)


def normalize_label(label: str) -> str:
    return label.replace("___", " - ").replace("_", " ")


def preprocess(image: tf.Tensor, label: tf.Tensor, image_size: int) -> tuple[tf.Tensor, tf.Tensor]:
    image = tf.image.resize(image, (image_size, image_size), antialias=True)
    image = tf.cast(image, tf.float32)
    return image, label


def prepare_dataset(dataset: tf.data.Dataset, image_size: int, batch_size: int, training: bool) -> tf.data.Dataset:
    dataset = dataset.map(lambda image, label: preprocess(image, label, image_size), num_parallel_calls=AUTOTUNE)
    if training:
        dataset = dataset.shuffle(batch_size * 16, reshuffle_each_iteration=True)
    return dataset.batch(batch_size).prefetch(AUTOTUNE)


def load_tfds(args: argparse.Namespace) -> tuple[tf.data.Dataset, tf.data.Dataset, tf.data.Dataset, list[str]]:
    train_pct = 100 - int((args.validation_split + args.test_split) * 100)
    validation_pct = int(args.validation_split * 100)
    splits = [
        f"train[:{train_pct}%]",
        f"train[{train_pct}%:{train_pct + validation_pct}%]",
        f"train[{train_pct + validation_pct}%:]",
    ]
    datasets, info = tfds.load(
        "plant_village",
        split=splits,
        as_supervised=True,
        with_info=True,
        shuffle_files=True,
    )
    labels = [normalize_label(label) for label in info.features["label"].names]
    return datasets[0], datasets[1], datasets[2], labels


def load_directory(args: argparse.Namespace) -> tuple[tf.data.Dataset, tf.data.Dataset, tf.data.Dataset, list[str]]:
    if not args.data_dir.exists():
        raise FileNotFoundError(f"Dataset directory not found: {args.data_dir}")

    train_ds = tf.keras.utils.image_dataset_from_directory(
        args.data_dir,
        validation_split=args.validation_split + args.test_split,
        subset="training",
        seed=args.seed,
        image_size=(args.image_size, args.image_size),
        batch_size=None,
    )
    holdout_ds = tf.keras.utils.image_dataset_from_directory(
        args.data_dir,
        validation_split=args.validation_split + args.test_split,
        subset="validation",
        seed=args.seed,
        image_size=(args.image_size, args.image_size),
        batch_size=None,
    )
    labels = [normalize_label(label) for label in train_ds.class_names]

    holdout_count = tf.data.experimental.cardinality(holdout_ds).numpy()
    validation_count = max(1, int(holdout_count * args.validation_split / (args.validation_split + args.test_split)))
    validation_ds = holdout_ds.take(validation_count)
    test_ds = holdout_ds.skip(validation_count)
    return train_ds, validation_ds, test_ds, labels


def build_model(num_classes: int, image_size: int, learning_rate: float) -> tf.keras.Model:
    inputs = tf.keras.Input(shape=(image_size, image_size, 3), name="image")
    augmentation = tf.keras.Sequential(
        [
            tf.keras.layers.RandomFlip("horizontal"),
            tf.keras.layers.RandomRotation(0.08),
            tf.keras.layers.RandomZoom(0.12),
            tf.keras.layers.RandomContrast(0.12),
        ],
        name="augmentation",
    )
    base_model = tf.keras.applications.MobileNetV2(
        input_shape=(image_size, image_size, 3),
        include_top=False,
        weights="imagenet",
    )
    base_model.trainable = False

    x = augmentation(inputs)
    x = tf.keras.applications.mobilenet_v2.preprocess_input(x)
    x = base_model(x, training=False)
    x = tf.keras.layers.GlobalAveragePooling2D()(x)
    x = tf.keras.layers.Dropout(0.25)(x)
    outputs = tf.keras.layers.Dense(num_classes, activation="softmax", name="disease_probability")(x)

    model = tf.keras.Model(inputs, outputs, name="plantvillage_mobilenetv2")
    model.compile(
        optimizer=tf.keras.optimizers.Adam(learning_rate=learning_rate),
        loss="sparse_categorical_crossentropy",
        metrics=["accuracy"],
    )
    return model


def fine_tune_model(model: tf.keras.Model, learning_rate: float) -> None:
    base_model = next(
        layer for layer in model.layers if isinstance(layer, tf.keras.Model) and layer.name.startswith("mobilenetv2")
    )
    base_model.trainable = True

    for layer in base_model.layers[:-30]:
        layer.trainable = False

    model.compile(
        optimizer=tf.keras.optimizers.Adam(learning_rate=learning_rate),
        loss="sparse_categorical_crossentropy",
        metrics=["accuracy"],
    )


def evaluate_model(model: tf.keras.Model, test_ds: tf.data.Dataset, labels: list[str], output_dir: Path) -> dict:
    y_true: list[int] = []
    y_pred: list[int] = []

    for batch_images, batch_labels in test_ds:
        probabilities = model.predict(batch_images, verbose=0)
        y_true.extend(batch_labels.numpy().astype(int).tolist())
        y_pred.extend(np.argmax(probabilities, axis=1).astype(int).tolist())

    metrics = {
        "accuracy": accuracy_score(y_true, y_pred),
        "precision_macro": precision_score(y_true, y_pred, average="macro", zero_division=0),
        "recall_macro": recall_score(y_true, y_pred, average="macro", zero_division=0),
        "f1_macro": f1_score(y_true, y_pred, average="macro", zero_division=0),
        "precision_weighted": precision_score(y_true, y_pred, average="weighted", zero_division=0),
        "recall_weighted": recall_score(y_true, y_pred, average="weighted", zero_division=0),
        "f1_weighted": f1_score(y_true, y_pred, average="weighted", zero_division=0),
    }

    matrix = confusion_matrix(y_true, y_pred, labels=list(range(len(labels))))
    report = classification_report(y_true, y_pred, target_names=labels, zero_division=0, output_dict=True)

    output_dir.mkdir(parents=True, exist_ok=True)
    pd.DataFrame(matrix, index=labels, columns=labels).to_csv(output_dir / "confusion_matrix.csv")
    with (output_dir / "metrics.json").open("w", encoding="utf-8") as file:
        json.dump(metrics, file, indent=2)
    with (output_dir / "classification_report.json").open("w", encoding="utf-8") as file:
        json.dump(report, file, indent=2)

    print(json.dumps(metrics, indent=2))
    print("Confusion matrix saved to", output_dir / "confusion_matrix.csv")
    return metrics


def save_artifacts(model: tf.keras.Model, labels: list[str], args: argparse.Namespace) -> None:
    args.output_dir.mkdir(parents=True, exist_ok=True)

    model.save(args.output_dir / "model.h5")
    with (args.output_dir / "labels.json").open("w", encoding="utf-8") as file:
        json.dump({"labels": labels, "image_size": args.image_size}, file, indent=2)

    if args.savedmodel:
        saved_model_dir = args.output_dir / "saved_model"
        model.export(saved_model_dir)

    print("Saved model to", args.output_dir / "model.h5")
    print("Saved labels to", args.output_dir / "labels.json")


def main() -> None:
    args = parse_args()
    set_reproducibility(args.seed)

    if args.dataset_source == "tfds":
        train_raw, validation_raw, test_raw, labels = load_tfds(args)
    else:
        train_raw, validation_raw, test_raw, labels = load_directory(args)

    train_ds = prepare_dataset(train_raw, args.image_size, args.batch_size, training=True)
    validation_ds = prepare_dataset(validation_raw, args.image_size, args.batch_size, training=False)
    test_ds = prepare_dataset(test_raw, args.image_size, args.batch_size, training=False)

    model = build_model(len(labels), args.image_size, args.learning_rate)
    args.output_dir.mkdir(parents=True, exist_ok=True)
    callbacks = [
        tf.keras.callbacks.ModelCheckpoint(
            filepath=args.output_dir / "checkpoints" / "best_model.keras",
            monitor="val_accuracy",
            mode="max",
            save_best_only=True,
        ),
        tf.keras.callbacks.EarlyStopping(monitor="val_accuracy", patience=4, restore_best_weights=True),
        tf.keras.callbacks.ReduceLROnPlateau(monitor="val_loss", factor=0.3, patience=2),
    ]

    model.fit(train_ds, validation_data=validation_ds, epochs=args.epochs, callbacks=callbacks)

    if args.fine_tune_epochs > 0:
        fine_tune_model(model, args.fine_tune_learning_rate)
        model.fit(
            train_ds,
            validation_data=validation_ds,
            epochs=args.fine_tune_epochs,
            callbacks=callbacks,
        )

    evaluate_model(model, test_ds, labels, args.output_dir)
    save_artifacts(model, labels, args)


if __name__ == "__main__":
    main()
