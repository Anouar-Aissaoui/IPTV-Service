const CACHE_NAME = 'iptv-cache-v1';
const RUNTIME_CACHE = 'runtime-cache';

const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/index.css',
  '/devices.png',
  '/iptv-subscription.png',
  '/lovable-uploads/00c90df3-a23d-47e3-b967-8806209cd5b1.png',
  '/lovable-uploads/62b3cd9e-1589-432c-b117-d855ac8f0b81.png',
  '/lovable-uploads/68c06c7a-d842-491a-a970-14726b960bc0.png',
  '/lovable-uploads/74cadd1d-7f11-4677-9cfc-3342545d312f.png',
  '/lovable-uploads/eb41a9e5-0a89-4fbb-9995-ac1735cd4aaf.png'
];

// Pre-cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  // Activate worker immediately
  self.skipWaiting();
});

// Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Claim clients immediately
      self.clients.claim()
    ])
  );
});

// Network-first strategy with cache fallback
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Use cache-first for static assets
  if (event.request.destination === 'image' || 
      event.request.destination === 'style' ||
      event.request.destination === 'script') {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          return fetchAndCache(event.request);
        })
    );
    return;
  }

  // Use network-first for other requests
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        return cacheResponse(event.request, response);
      })
      .catch(() => {
        return caches.match(event.request)
          .then((response) => {
            if (response) {
              return response;
            }
            // Return offline fallback for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            return new Response('Network error');
          });
      })
  );
});

// Helper function to cache response
async function cacheResponse(request, response) {
  const cache = await caches.open(RUNTIME_CACHE);
  cache.put(request, response.clone());
  return response;
}

// Helper function to fetch and cache
async function fetchAndCache(request) {
  const response = await fetch(request);
  if (!response || response.status !== 200 || response.type !== 'basic') {
    return response;
  }
  const cache = await caches.open(RUNTIME_CACHE);
  cache.put(request, response.clone());
  return response;
}

// Handle offline fallback
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match('/index.html');
        })
    );
  }
});