// service-worker.ts
// This empty export marks the file as a module
export {};

// Type-safe service worker implementation
const sw = self as unknown as ServiceWorkerGlobalScope;

sw.addEventListener('install', (event: ExtendableEvent) => {
  const promiseChain = caches.open('my-app-cache')
    .then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/static/css/main.css',
        '/static/js/main.js',
      ]);
    });

  event.waitUntil(promiseChain);
});

sw.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
  );
});