if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service.js').then(function (registration) {}).catch(function (error) {});
}
const cacheName = "v1"
const cachedFiles = ["index.html", "calculator.css", "math.js", "favicon.ico"]
self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(cachedFiles);
        }).then(() => self.skipWaiting())
    )
})
self.addEventListener("activate", () => {})
