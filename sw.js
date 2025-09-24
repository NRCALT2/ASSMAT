const CACHE = 'supermam-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/css/index.css',
  '/ideas.html',
  '/css/ideas.css',
  '/planning.html',
  '/css/planning.css'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r=>r || fetch(e.request)));
});
