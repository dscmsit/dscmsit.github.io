var filesToCache = [
  "/",
  "/index.html",
  "/team.html",
  "./css/index.css",
  "./css/team.css",
  "./css/svg.css",
  "./js/team.js",
  "./js/index.js",
  "./images/after-landing.svg",
  "./images/after-landing-dark.svg",
  "./images/dsc-logo-square.svg",
  "./images/Facebook.svg",
  "./images/Github.svg",
  "./images/Instagram.svg",
  "./images/landing.svg",
  "./images/Linkedin.svg",
  "./images/Twitter.svg",
  "./images/Youtube.svg",
  "./images/team.svg",
  "./images/board19/abhishek.jpg",
  "./images/board19/Lakshita.jpg",
  "./images/board19/Mukul.jpg",
  "./images/board19/MukulKumar.jpg",
  "./images/board19/Rahul.jpg",
  "./images/board19/Sourabh.jpg",
  "./images/board19/Tushar.jpg",
  "./images/board19/TusharRatwal.jpg",
  "./images/board19/Urvi.jpg",
  "./images/board19/Vachali.jpg",
  "./images/board19/Vaibhav.jpg",
  "./images/board19/VipinJoshi.jpg",
  "./images/board19/Vivek.jpg",
  "./images/board19/Yash.jpg",
  "./images/board19/yukti.jpg",
  "./icons/icon-512x512.png",
  "./icons/favicons/favicon.ico",
  "./images/notification_icons/recruitments_blog.png"
];

self.addEventListener("install", function(e) {
  console.log("[ServiceWorker] Install");
  e.waitUntil(
    caches.open("dscvit").then(function(cache) {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      return response || fetch(event.request);
    })
  );
});
