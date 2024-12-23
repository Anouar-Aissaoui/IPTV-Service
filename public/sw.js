const CACHE_NAME = 'iptv-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/index.css',
  '/iptv-subscription.png',
  // Cache images
  '/lovable-uploads/00c90df3-a23d-47e3-b967-8806209cd5b1.png',
  '/lovable-uploads/62b3cd9e-1589-432c-b117-d855ac8f0b81.png',
  '/lovable-uploads/68c06c7a-d842-491a-a970-14726b960bc0.png',
  '/lovable-uploads/74cadd1d-7f11-4677-9cfc-3342545d312f.png',
  '/lovable-uploads/eb41a9e5-0a89-4fbb-9995-ac1735cd4aaf.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          (response) => {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
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
  const cacheWhitelist = [CACHE_NAME];
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