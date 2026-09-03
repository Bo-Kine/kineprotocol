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
  './exercise-images.json',
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

// Fetch: cache-first uit de versiegebonden cache.
//
// De cachenaam bevat de versie en wordt bij install in één keer volledig gevuld
// met verse kopieën (cache:'reload'). Daardoor komt álles uit dezelfde release —
// bestanden van verschillende versies kunnen niet meer gemengd worden — én hoeft
// er bij het opstarten niets opnieuw over het netwerk (voorheen ~1 MB per start).
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = req.url;

  // YouTube: netwerk only, SW bemoeit zich er niet mee
  if (url.includes('youtube.com') || url.includes('youtu.be')) return;

  // Navigatie: altijd de gecachte index.html, ongeacht querystring.
  // Zonder ignoreSearch matcht ?u=... of ?v=... niets en kreeg de gebruiker
  // een leeg 503-antwoord — een wit scherm.
  if (req.mode === 'navigate') {
    event.respondWith(
      caches.match('./index.html', { ignoreSearch: true })
        .then(hit => hit || fetch(req))
        .catch(() => caches.match('./index.html', { ignoreSearch: true }))
    );
    return;
  }

  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => {
      if (hit) return hit;
      // Niet in de cache: ophalen en bewaren, zodat het de volgende keer
      // ook offline beschikbaar is (o.a. oefenafbeeldingen).
      return fetch(req).then(res => {
        if (res && res.status === 200 && res.type !== 'opaque') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(req, clone)).catch(() => {});
        }
        return res;
      }).catch(() => new Response('', { status: 503, statusText: 'Offline' }));
    })
  );
});
