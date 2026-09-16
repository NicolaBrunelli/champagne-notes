const CACHE = 'champagne-notes-v2';
const PUBLIC_SHELL = ['/', '/cantine-e-vini', '/storia-e-metodo', '/territorio', '/articoli', '/offline.html', '/manifest.webmanifest', '/app-icon-192.png', '/app-icon-512.png'];
const neverCache = (path) => path.startsWith('/api/') || path.startsWith('/accesso') || path.startsWith('/account') || path.startsWith('/admin') || path.startsWith('/amici');

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PUBLIC_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || neverCache(url.pathname)) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then((response) => {
      if (response.ok) caches.open(CACHE).then((cache) => cache.put(request, response.clone()));
      return response;
    }).catch(async () => (await caches.match(request)) || (await caches.match('/offline.html'))));
    return;
  }
  // The shell and navigations are already cached above. Caching every asset
  // here could race with Chromium's response stream and produced noisy
  // "Response body is already used" errors on mobile.
  event.respondWith(caches.match(request).then((cached) => cached || fetch(request)));
});
