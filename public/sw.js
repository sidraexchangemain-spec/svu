/*
 * Minimal service worker for SVU Developers Phase 1.
 * This project does not implement offline caching or background sync.
 * The file exists so any existing /sw.js registration resolves successfully.
 */
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Intentionally no fetch handler: requests continue through the normal network path.
