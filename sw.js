// Service Worker — Poulailler Ste-Marie (PWA 100% hors-ligne)
// Stratégie : "network-first" pour la page (l'app se met à jour dès qu'internet revient)
//             puis repli sur le cache hors-ligne. "stale-while-revalidate" pour les assets.
const CACHE_VERSION = 'v3';
const CACHE_NAME = `poulailler-stemarie-${CACHE_VERSION}`;
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];
const OFFLINE_FALLBACKS = ['./index.html', './'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      // On met en cache chaque ressource séparément : une erreur ne casse pas l'installation.
      Promise.all(
        APP_SHELL.map((url) =>
          cache.add(new Request(url, { cache: 'reload' })).catch(() => null)
        )
      )
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  } catch (err) {
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;
    for (const fallback of OFFLINE_FALLBACKS) {
      const page = await cache.match(fallback);
      if (page) return page;
    }
    return new Response(
      '<!doctype html><meta charset="utf-8"><title>Hors-ligne</title>' +
      '<body style="font-family:sans-serif;padding:32px"><h1>Hors-ligne</h1>' +
      '<p>La page n\'est pas encore disponible dans le cache. Reconnectez-vous une fois pour la télécharger.</p></body>',
      { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((response) => {
      if (response && response.ok && response.type === 'basic') {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);
  return cached || (await network) || Response.error();
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // on ne touche pas aux domaines externes

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
    return;
  }
  event.respondWith(staleWhileRevalidate(request));
});
