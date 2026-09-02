// KineProtocol — Service Worker
// Cacht alle app-bestanden voor offline gebruik (cache-first strategie)

importScripts('./version.js'); // definieert APP_VERSION — enige plek waar de versie staat
const CACHE = 'kineprotocol-v' + APP_VERSION;

// Alleen wat de app écht nodig heeft om te draaien.
const ESSENTIEEL = [
  './',
  './index.html',
  './version.js',
  './app.js',
  './patients.js',
  './protocols.js',
];

// Nice-to-have: iconen, achtergrond, lettertypes. Deze mogen falen zonder
// de installatie te blokkeren — een externe font-URL of een ontbrekend icoon
// mag nooit verhinderen dat een nieuwe versie geïnstalleerd wordt.
const OPTIONEEL = [
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

// Install: essentiële bestanden moeten slagen, de rest is best-effort.
// cache.addAll() is alles-of-niets: één mislukte request (bv. de externe
// fonts-URL op een haperend netwerk) liet vroeger de hele installatie falen,
// waardoor het toestel voor onbepaalde tijd op de oude versie bleef hangen.
// cache:'reload' omzeilt de HTTP-cache van de browser. Zonder dat kan een nog
// niet vervallen kopie uit die cache teruggegeven worden, waardoor een nieuwe
// versie bestanden van verschillende releases mengt (bv. nieuwe app.js met
// oude protocols.js) — de app draait dan half bijgewerkt.
const versLaden = u => new Request(u, { cache: 'reload' });

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(async cache => {
        await cache.addAll(ESSENTIEEL.map(versLaden));
        await Promise.allSettled(OPTIONEEL.map(u => cache.add(versLaden(u)).catch(() => {})));
      })
      .then(() => self.skipWaiting())
  );
});

// Activate: verwijder oude caches, claim clients en laat open vensters herladen
// (app.js luistert naar SW_UPDATED — zonder dit bericht blijft een open PWA
// op de oude versie hangen tot de gebruiker zelf ververst)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then(clients => clients.forEach(c => c.postMessage({ type: 'SW_UPDATED' })))
  );
});

// Fetch: network-first voor HTML/JS, cache-first voor de rest
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Externe API's (fonts): altijd netwerk, nooit cachen
  // Als netwerk faalt → geef lege 503 terug (nooit null/undefined)
  if (url.includes('googleapis.com/css')) {
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
      // Ook hier de HTTP-cache omzeilen: anders kan een oude kopie van
      // protocols.js of app.js blijven terugkomen zolang die niet vervallen is.
      fetch(event.request.mode === 'navigate' ? event.request : versLaden(url)).then(response => {
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
