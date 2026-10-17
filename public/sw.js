// N. Dhushyandh Portfolio — Progressive Web App Service Worker
const CACHE_NAME = 'dhushyandh-pwa-v2';
const PRECACHE_URLS = [
  '/',
  '/resume',
  '/certificates',
  '/manifest.json',
  '/favicon.png',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/icon-maskable-192x192.png',
  '/icons/icon-maskable-512x512.png',
  '/screenshots/desktop-1280x720.png',
  '/screenshots/mobile-750x1334.png',
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

// Background Sync API support
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-portfolio-data') {
    event.waitUntil(Promise.resolve());
  }
});

// Periodic Background Sync API support
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'update-portfolio-cache') {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(['/']);
      })
    );
  }
});

// Web Push Notifications API support
self.addEventListener('push', (event) => {
  let data = { title: 'N. Dhushyandh Portfolio', body: 'New updates available.' };
  try {
    if (event.data) {
      data = event.data.json ? event.data.json() : { ...data, body: event.data.text() };
    }
  } catch {
    // fallback to default
  }

  const options = {
    body: data.body,
    icon: '/icons/icon-192x192.png',
    badge: '/favicon.png',
    data: { url: '/' }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (const client of windowClients) {
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});
