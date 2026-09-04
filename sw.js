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
        // Alleen de eigen app-bestanden houden de installatie op.
        await cache.addAll(ESSENTIEEL.map(versLaden));
        // De rest wordt op de achtergrond opgehaald en wordt NIET afgewacht.
        // Een trage of geblokkeerde externe request (lettertypen) liet de
        // installatie anders eindeloos hangen: de nieuwe versie activeerde dan
        // nooit en het toestel bleef de oude bedienen. Wat hier misgaat, wordt
        // later alsnog door de fetch-handler gecachet zodra het nodig is.
        OPTIONEEL.forEach(u => { cache.add(versLaden(u)).catch(() => {}); });
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

  // KRITIEK: altijd zoeken in de cache van DEZE versie, nooit met het globale
  // caches.match(). Dat laatste doorzoekt álle caches, dus zolang de cache van
  // de vorige versie nog bestond kwamen daar bestanden uit — de app bleef dan
  // op de oude versie draaien terwijl de nieuwe al binnen was.
  const uitEigenCache = verzoek =>
    caches.open(CACHE).then(c => c.match(verzoek, { ignoreSearch: true }));

  // Externe lettertypen mogen de weergave NOOIT ophouden. De stylesheet van
  // Google is render-blokkerend: hangt dat verzoek (tracker-blokker, trage of
  // afgesloten verbinding), dan blijft het scherm leeg tot de browser opgeeft —
  // in de praktijk tientallen seconden. Uit de cache indien mogelijk, anders
  // hooguit twee seconden op het netwerk wachten en daarna een lege stylesheet
  // teruggeven, zodat de app meteen doorrendert met het systeemlettertype.
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    const legeStijl = () => new Response('', { status: 200, headers: { 'Content-Type': 'text/css' } });
    event.respondWith(
      uitEigenCache(req).then(hit => hit || Promise.race([
        fetch(req).then(res => {
          if (res && res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(req, clone)).catch(() => {});
          }
          return res;
        }).catch(legeStijl),
        new Promise(r => setTimeout(() => r(legeStijl()), 2000)),
      ])).catch(legeStijl)
    );
    return;
  }

  // Navigatie: de gecachte index.html van deze versie, ongeacht querystring.
  // Zonder ignoreSearch matcht ?v=... niets en volgde een leeg 503: wit scherm.
  if (req.mode === 'navigate') {
    event.respondWith(
      uitEigenCache('./index.html')
        .then(hit => hit || fetch(req))
        .catch(() => uitEigenCache('./index.html')
          .then(hit => hit || new Response('', { status: 503, statusText: 'Offline' })))
    );
    return;
  }

  event.respondWith(
    uitEigenCache(req).then(hit => {
      if (hit) return hit;
      // Niet in deze cache: ophalen en bewaren, zodat het de volgende keer
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
