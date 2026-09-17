self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('workout-v1').then((cache) => cache.addAll([
      './',
      './index.html',
      './manifest.json',
      'https://cdn.jsdelivr.net/npm/chart.js'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
