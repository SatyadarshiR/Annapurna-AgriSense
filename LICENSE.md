const CACHE_NAME = "krishisathi-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }
  if (event.request.url.includes("/api/")) {
    event.respondWith(
      fetch(event.request).then((response) => {
        const cache = caches.open(CACHE_NAME);
        cache.then((c) => c.put(event.request, response.clone()));
        return response;
      }).catch(() => {
        return caches.match(event.request).then((cachedResponse) => cachedResponse ?? new Response("Offline", { status: 503 }));
      })
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request).then((response2) => {
        if (!response2 || response2.status !== 200 || response2.type !== "basic") {
          return response2;
        }
        const responseToCache = response2.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response2;
      });
    })
  );
});
self.addEventListener("sync", ((event) => {
  if (event.tag === "sync-data") {
    event.waitUntil(syncData());
  }
}));
async function syncData() {
  try {
    const db = await openDatabase();
    const pendingRequests = await getPendingRequests(db);
    for (const request of pendingRequests) {
      try {
        const response = await fetch(request.url, {
          method: request.method,
          headers: request.headers,
          body: request.body
        });
        if (response.ok) {
          await removePendingRequest(db, request.id);
        }
      } catch (error) {
        console.error("Sync failed for:", request.url, error);
      }
    }
  } catch (error) {
    console.error("Background sync error:", error);
  }
}
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("KrishiSathi", 1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("pendingRequests")) {
        db.createObjectStore("pendingRequests", { keyPath: "id", autoIncrement: true });
      }
    };
  });
}
function getPendingRequests(db) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["pendingRequests"], "readonly");
    const store = transaction.objectStore("pendingRequests");
    const request = store.getAll();
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}
function removePendingRequest(db, id) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["pendingRequests"], "readwrite");
    const store = transaction.objectStore("pendingRequests");
    const request = store.delete(id);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(void 0);
  });
}
self.addEventListener("push", (event) => {
  let notificationData = {
    title: "KrishiSathi",
    body: "You have a new notification",
    icon: "/icon-192.png",
    badge: "/icon-192.png"
  };
  if (event.data) {
    try {
      notificationData = { ...notificationData, ...event.data.json() };
    } catch {
      notificationData.body = event.data.text();
    }
  }
  event.waitUntil(
    self.registration.showNotification(notificationData.title, {
      body: notificationData.body,
      icon: notificationData.icon,
      badge: notificationData.badge,
      tag: "krishisathi-notification"
    })
  );
});
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: "window" }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === "/" && "focus" in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow("/");
      }
    })
  );
});
