


const cacheName = `HelloCache`
const filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  '/music/nin.mp3',
  '/manifest.json'
]


/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  console.log("Service worker installed");
})


// self.addEventListener('install', event => {
//   event.waitUntil(
//     console.log("Service worker installed")
//   )
// })


/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  )
})

self.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
      console.log('APP resumed');
      window.location.reload();
  }
});



self.addEventListener('activate', event => {

  console.log("Service worker activated")

  // setInterval(async () => {
  //   console.log(`Service Worker ${Math.floor(Date.now() / 1000)}`)
  //   }, 2000)

})