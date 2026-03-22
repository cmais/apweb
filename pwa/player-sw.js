// Player de Vídeo — Service Worker mínimo
const VERSION = 'player-sw-v1';

self.addEventListener('install', e => {
    e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', e => {
    e.waitUntil(self.clients.claim());
});
