// KineProtocol — Service Worker
// Cacht alle app-bestanden voor offline gebruik (cache-first strategie)

const CACHE = 'kineprotocol-v26';

const PRECACHE = [
  './',
  './index.html',
  './app.js',
  './auth.js',
  './patients.js',
  './protocols.js',
  './manifest.json',
  './bg.webp',
  './icon-72x72.png',
  './icon-96x96.png',
  './icon-128x128.png',
  './icon-144x144.png',
  './icon-152x152.png',
  './icon-192x192.png',
  './icon-384x384.png',
  './icon-512x512.png',
  'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist+Mono:wght@300;400;500;600&family=Geist:wght@300;400;500;600;700&display=swap',
];

// Install: precache alles
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

// Activate: verwijder oude caches, claim clients en stuur reload-signaal
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({type: 'window', includeUncontrolled: true}))
      .then(clients => clients.forEach(c => c.navigate(c.url)))
  );
});

// Fetch: network-first voor HTML/JS, cache-first voor de rest
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Supabase + externe API's: altijd netwerk
  if (url.includes('supabase.co') || url.includes('googleapis.com/css')) {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
    return;
  }

  // YouTube: netwerk only
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return;
  }

  // HTML en JS: network-first zodat updates direct zichtbaar zijn
  const isAppFile = /\.(html|js)$/.test(url) || url.endsWith('/') || url.includes('?v=');
  if (isAppFile) {
    event.respondWith(
      fetch(event.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(event.request, clone));
        }
        return response;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  // Afbeeldingen, fonts etc.: cache-first
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') return response;
        const clone = response.clone();
        caches.open(CACHE).then(c => c.put(event.request, clone));
        return response;
      });
    })
  );
});
