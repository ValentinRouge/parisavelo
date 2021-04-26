// install sw
self.addEventListener('install', (evt) => {
    console.log('sw has been installed')
})
 // activate sw
self.addEventListener('activate', (evt) => {
    console.log('sw has been activated')
})

//fetch event 
self.addEventListener('fetch', (evt) => {
    console.log('fetch event', evt)
})