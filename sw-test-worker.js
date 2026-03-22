const CACHE = 'sw-test-v1';

self.addEventListener('install', e => {
    console.log('[SW] instalado');
    e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', e => {
    console.log('[SW] ativado');
    e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
    // Apenas observa — não intercepta nada
});
