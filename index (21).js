# Crop Disease Detection Model

This service trains and serves a real image classifier for crop disease detection using the PlantVillage dataset and MobileNetV2 transfer learning.

## Dataset

Default source: TensorFlow Datasets `plant_village`.

PlantVillage contains labeled leaf images across crop and disease classes such as healthy leaves, blight, rust, leaf spot, mildew, and other plant conditions. The training script uses a deterministic split:

- Train: 70%
- Validation: 15%
- Test: 15%

You can also train from a Kaggle/manual folder export if your data is arranged like:

```text
data/plantvillage/
  Tomato___Late_blight/
  Tomato___healthy/
  Potato___Early_blight/
```

## Model Architecture

The model uses MobileNetV2 transfer learning:

- Input: RGB image, default `224x224`
- Data augmentation: random flip, rotation, zoom, contrast
- Backbone: ImageNet-pretrained MobileNetV2
- Head: global average pooling, dropout, dense softmax classifier
- Loss: sparse categorical cross entropy
- Optimizer: Adam
- Fine tuning: optional unfreezing of the last MobileNetV2 layers

This architecture is appropriate for a portfolio project because it is fast to train, deployable on modest infrastructure, and stronger than a small from-scratch CNN for limited agricultural datasets.

## Setup

```powershell
cd ml-models\crop-disease
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

## Train With TensorFlow Datasets

```powershell
python train.py --dataset-source tfds --epochs 12 --fine-tune-epochs 5 --savedmodel
```

## Train From Kaggle/Local Folder

Download PlantVillage from Kaggle, extract it into `data/plantvillage`, then run:

```powershell
python train.py --dataset-source directory --data-dir data\plantvillage --epochs 12 --fine-tune-epochs 5
```

## Outputs

Training writes artifacts to `artifacts/`:

- `model.h5` - trained Keras model
- `saved_model/` - optional TensorFlow SavedModel when `--savedmodel` is passed
- `labels.json` - class names and image size
- `metrics.json` - accuracy, precision, recall, F1
- `classification_report.json` - per-class metrics
- `confusion_matrix.csv` - confusion matrix
- `checkpoints/best_model.keras` - best validation checkpoint

`artifacts/` is ignored by git so large model files are not committed.

## Metrics

The script prints and saves:

- Accuracy
- Macro precision
- Macro recall
- Macro F1 score
- Weighted precision
- Weighted recall
- Weighted F1 score
- Confusion matrix

Expected metrics depend on split, epochs, hardware, and whether fine tuning is enabled. On a clean PlantVillage split, MobileNetV2 transfer learning commonly reaches strong validation/test performance. Record your actual run in this section after training:

```text
Accuracy: TBD
Macro Precision: TBD
Macro Recall: TBD
Macro F1: TBD
Weighted F1: TBD
```

## Run Inference API

After training:

```powershell
uvicorn app:app --host 0.0.0.0 --port 8001
```

To connect this model to the existing Node API, set this in `server/.env`:

```env
CROP_DISEASE_MODEL_URL=http://localhost:8001
```

Then the existing diagnosis flow can call the trained vision model first and fall back to advisory providers only when the model service is unavailable.

Health check:

```powershell
curl http://localhost:8001/health
```

Predict:

```powershell
curl -X POST http://localhost:8001/predict -F "file=@leaf.jpg"
```

Response:

```json
{
  "disease_name": "Tomato - Late blight",
  "confidence": 0.982341,
  "class_index": 27,
  "crop": "Tomato",
  "condition": "Late blight",
  "model_path": "artifacts/model.h5"
}
```

## Production Notes

- Validate image size and type before inference.
- Keep `model.h5`, `labels.json`, and metrics artifacts versioned in object storage or release artifacts, not git.
- For Docker deployment, copy trained `artifacts/model.h5` and `artifacts/labels.json` beside `app.py`, then build the included `Dockerfile`.
- Use a pinned Docker image for deployment.
- Add model monitoring: confidence distribution, top confused classes, and feedback from agronomy experts.
- PlantVillage images are cleaner than real field images, so validate on farmer-uploaded field photos before claiming field-grade disease detection.
