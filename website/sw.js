const statiCacheName = 'site-static-007';
const dynamicCacheName = 'site-dynamic-007';
const now = new Date();
const DataCacheName = 'site-data-005'+now.getDate();

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
    '/images/fontaineNC.png',
    '/images/parkingNC.png',
    '/images/outilsNC.png',
    '/images/toilettesNC.png',
    '/images/fontaineTAS.png',
    '/images/parkingTAS.png',
    '/images/outilsTAS.png',
    '/images/toilettesTAS.png',
    '/images/logo.svg',
    '/images/loc.png',
    '/manifest.json', 
    '/map.js',
    'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css', 
    'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js',
    'https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js',
    'https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css'
];
const Dataassets = [
    '/data/fontainesPARIS.geojson',
    '/data/parkingIDF.json',
    '/data/pompesIDF.json',
    '/data/toilettesPARIS.geojson'
];

// install sw
self.addEventListener('install', (evt) => {
    evt.waitUntil(
        caches.open(statiCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
    evt.waitUntil(
        caches.open(DataCacheName).then(cache => {
            console.log('caching data assets');
            cache.addAll(Dataassets);
        })
    );
});
 // activate sw
self.addEventListener('activate', (evt) => {
    evt.waitUntil(
        caches.keys().then(keys =>{
            return Promise.all(keys
                .filter(key => key !== statiCacheName && key !== dynamicCacheName && key !== DataCacheName)
                .map(key => {
                    caches.delete(key)
                    console.log("suppression de "+key);
                } )    
            );
        })
    );
});

//fetch event 
self.addEventListener('fetch', (evt) => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    return fetchRes
                });
            });
        })
    );
});