// KineProtocol — Service Worker
// Cacht alle app-bestanden voor offline gebruik (cache-first strategie)

const CACHE = 'kineprotocol-v35';

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

// Activate: verwijder oude caches en claim clients
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Fetch: network-first voor HTML/JS, cache-first voor de rest
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Supabase + externe API's: altijd netwerk, nooit cachen
  // Als netwerk faalt → geef lege 503 terug (nooit null/undefined)
  if (url.includes('supabase.co') || url.includes('googleapis.com/css')) {
    event.respondWith(
      fetch(event.request).catch(() =>
        new Response('', { status: 503, statusText: 'Service Unavailable' })
      )
    );
    return;
  }

  // YouTube: netwerk only, SW doet niets
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
      }).catch(() => caches.match(event.request).then(r => r || new Response('', { status: 503 })))
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
      }).catch(() => new Response('', { status: 503 }));
    })
  );
});
