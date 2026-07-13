const CACHE_NAME = 'java-practice-lab-v29-ui-basic-editorial';
const CORE_ASSETS = [
  './',
  './index.html',
  './404.html',
  './assets/icons/icon-192.png',
  './columns/index.html',
  './site/updates.html',
  './assets/css/styles.css',
  './assets/css/unified-ui.css',
  './assets/js/app.js',
  './data/questions.js',
  './data/questions/basic.js',
  './data/questions/bronze.js',
  './data/questions/silver.js',
  './data/questions/gold.js',
  './manifest.webmanifest'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./index.html'))));
});
