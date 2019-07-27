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

self.addEventListener("activate", (e) => {
    console.log("Service Worker : Activated")
})
