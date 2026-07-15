const CACHE_NAME = 'guess-the-country-v2';
const ASSETS = [
  './index.html',
  './style.css',
  './app.js',
  './svg-data.js',
  './manifest.json',
  './icon.jpg'
];

// Install Event - Caching assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching app shell assets');
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Cleaning old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Cache-First Strategy
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(e.request).then((networkResponse) => {
        // Cache dynamic assets if needed
        return networkResponse;
      });
    }).catch(() => {
      // Fallback offline handler
      if (e.request.mode === 'navigate') {
        return caches.match('./index.html');
      }
    })
  );
});
