importScripts("/precache-manifest.18932efba5fb40953433c75f503350f4.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.setConfig({ debug: true });

workbox.core.setCacheNameDetails({ prefix: "fundocs" });

workbox.core.skipWaiting();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("index.html"));
workbox.routing.registerRoute(new RegExp('https://fundocs.net/api/.+'), new workbox.strategies.NetworkFirst())
workbox.routing.registerRoute(new RegExp('https://fundocs.net/.+'), new workbox.strategies.StaleWhileRevalidate())

workbox.routing.registerRoute(new RegExp('https://fundocs.net/api/.+'), new workbox.strategies.NetworkFirst())
workbox.routing.registerRoute(new RegExp('https://fundocs.net/.+'), new workbox.strategies.StaleWhileRevalidate())
