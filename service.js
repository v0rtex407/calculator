if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service.js').then(function(registration) {
      console.log('Service worker installato correttamente, ecco lo scope:', registration.scope);
    }).catch(function(error) {
      console.log('Installazione service worker fallita:', error);
    });
   }
const cacheName = "v1"
const cachedFiles = ["index.html", "calculator.css", "math.js", "favicon.ico"]
self.addEventListener("install", (e) => {
    console.log("Service Worker : Installed")
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log("cached");
            cache.addAll(cachedFiles);
        })
    ).then(() => self.skipWaiting());
});

self.addEventListener("activate", () => {
    console.log("Service Worker : Activated")
})
