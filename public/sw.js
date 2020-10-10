self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installing Service Worker ... ', e);
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Activating Service Worker ... ', e);
  return self.clients.claim();
});
