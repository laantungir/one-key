const e=["/","/index.html","/style.css","/main.js","/music/nin.mp3","/manifest.json"];/* Start the service worker and cache all of the app's content */self.addEventListener("install",function(n){n.waitUntil(caches.open("HelloCache").then(function(n){return n.addAll(e)})),console.log("Service worker installed")}),// self.addEventListener('install', event => {
//   event.waitUntil(
//     console.log("Service worker installed")
//   )
// })
/* Serve cached content when offline */self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(n){return n||fetch(e.request)}))}),self.addEventListener("visibilitychange",function(){"visible"===document.visibilityState&&(console.log("APP resumed"),window.location.reload())}),self.addEventListener("activate",e=>{console.log("Service worker activated");// setInterval(async () => {
//   console.log(`Service Worker ${Math.floor(Date.now() / 1000)}`)
//   }, 2000)
});//# sourceMappingURL=sw.8c67663f.js.map

//# sourceMappingURL=sw.8c67663f.js.map
