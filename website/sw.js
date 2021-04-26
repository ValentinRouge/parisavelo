const statiCacheName = 'site-static'
const dynamicCacheName = 'site-dynamic'
const assets = [
    '/', 
    '/index.html',
    '/script.js',
    '/styles.css',
    '/logo/32.png',
    '/logo/120.png',
    '/logo/152.png',
    '/logo/167.png',
    '/logo/180.png',
    '/logo/192.png',
    '/logo/512.png',
    '/logo/512.ico',
    '/images/logo_fontaine.png',
    '/images/logo_parking.png',
    '/images/logo_reparation.png',
    '/images/logo_toilettes.png',
    '/images/logo_velib.png',
    '/images/logo.svg',
    '/manifest.json'
]

// install sw
self.addEventListener('install', (evt) => {
    evt.waitUntil(
        caches.open(statiCacheName).then(cache => {
            console.log('caching shell assets')
            cache.addAll(assets)
        })
    );
})
 // activate sw
self.addEventListener('activate', (evt) => {
    evt.waitUntil(
        caches.keys().then(keys =>{
            return Promise.all(keys
                .filter(key => key !== statiCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))    
            )
        })
    )
})

//fetch event 
self.addEventListener('fetch', (evt) => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    return fetchRes
                })
            });
        })
    );

});