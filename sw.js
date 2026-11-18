// old address: drop the old app cache and unregister so the redirect page is always served fresh
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(k => Promise.all(k.map(x => caches.delete(x)))).then(() => self.registration.unregister())));
