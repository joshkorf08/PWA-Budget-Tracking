const FILES_TO_CACHE = [
    "/public"
];

const CACHE_NAME = "static-chace-v1";
const DATA_CACHE_NAME = "data-cache-v1";

self.addEventListner("install", (evt) => {
    evt.waitUntil(caches.open(CACHE_NAME).then((cache) => {
       return cache.addAll(FILES_TO_CACHE); 
    }));
    self.skipWaiting();
});
self.addEventListner("activate", (evt) => {
    evt.waitUntil(caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
            if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                return caches.delete(key);
            }
        }));
    }))
});

