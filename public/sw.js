const CACHE_NAME = 'iptv-cache-v1';
const IMAGE_CACHE = 'iptv-images-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/index.css',
];

const imageUrls = [
  '/devices.png',
  '/iptv-subscription.png',
  '/lovable-uploads/00c90df3-a23d-47e3-b967-8806209cd5b1.png',
  '/lovable-uploads/62b3cd9e-1589-432c-b117-d855ac8f0b81.png',
  '/lovable-uploads/68c06c7a-d842-491a-a970-14726b960bc0.png',
  '/lovable-uploads/74cadd1d-7f11-4677-9cfc-3342545d312f.png',
  '/lovable-uploads/eb41a9e5-0a89-4fbb-9995-ac1735cd4aaf.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME)
        .then((cache) => cache.addAll(urlsToCache)),
      caches.open(IMAGE_CACHE)
        .then((cache) => cache.addAll(imageUrls))
    ])
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Handle image requests
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request)
            .then((fetchResponse) => {
              const responseClone = fetchResponse.clone();
              caches.open(IMAGE_CACHE)
                .then((cache) => {
                  cache.put(event.request, responseClone);
                });
              return fetchResponse;
            });
        })
    );
    return;
  }
  
  // Handle other requests
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          (response) => {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME, IMAGE_CACHE];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Handle image optimization
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});