// N. Dhushyandh Portfolio — Progressive Web App Service Worker
const CACHE_NAME = 'dhushyandh-pwa-v1';
const PRECACHE_URLS = [
  '/',
  '/resume',
  '/certificates',
  '/manifest.json',
  '/favicon.png',
  '/assets/logo.png',
  '/assets/Dhushyandh_Resume.pdf'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS).catch((err) => {
        console.warn('[PWA SW] Precache warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle GET requests
  if (req.method !== 'GET') return;

  // Do not intercept third-party chat widgets or external CDNs that require dynamic host validation
  if (url.origin !== self.location.origin) {
    // Optionally cache Google Fonts
    if (url.origin.includes('fonts.googleapis.com') || url.origin.includes('fonts.gstatic.com')) {
      event.respondWith(
        caches.match(req).then((cached) => {
          if (cached) return cached;
          return fetch(req).then((response) => {
            if (response.status === 200) {
              const resClone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
            }
            return response;
          }).catch(() => cached);
        })
      );
    }
    return;
  }

  // HTML navigation requests: Network first, fallback to cache
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((response) => {
          if (response.status === 200) {
            const resClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(req);
          if (cached) return cached;
          const fallback = await caches.match('/');
          return fallback || new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
        })
    );
    return;
  }

  // Static assets (images, scripts, styles): Cache first, fallback to network
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const resClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
        }
        return response;
      });
    })
  );
});
