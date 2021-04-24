if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('sw.js', { scope: '' })
        .then(function(registration) {
            console.log('Service Worker enregistré');
        });

    navigator.serviceWorker
        .ready
        .then(function(registration) {
            console.log('Service Worker prêt');
        });
}

document.addEventListener('DOMContentLoaded', function() {

    var btnPopup = document.getElementById('btnPopup');
    var overlay = document.getElementById('overlay');
    var btnClose = document.getElementById('btnClose');
    var IOSpopup = document.getElementById('IOSpopup');
    var IOSbtnClose = document.getElementById('IOSbtnClose')

    if (btnPopup){
        btnPopup.addEventListener('click', openPop);
    }
    if (btnClose){
        btnClose.addEventListener('click',closePop);
    }

    if (IOSbtnClose){
        IOSbtnClose.addEventListener('click',closeIOSpop)
    }

    function openPop(){
        overlay.style.display='block';
    }
    function closePop(){
        overlay.style.display='none';
    }
    function closeIOSpop(){
        IOSpopup.style.display='none';
    }

    function myFunction() {
        var popup = document.getElementById("myPopupTEST");
        popup.classList.toggle("show");
      }

    // Detects if device is on iOS 
    const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test( userAgent );
    }
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
        this.setState(IOSpopup.style.display='block');
    }
})


  