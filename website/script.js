/*service worker*/

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then((reg) => console.log('service worker register', reg))
    .catch((err) => console.log('service worker not register', err))
}

document.addEventListener('DOMContentLoaded', function() {
    const menuBTN = document.querySelector("#menuBTN");
    const navBar = document.querySelector("#navbar");
    const icon = document.querySelector("#icon");
    const legendePOPUP = document.querySelector("#legendePOPUP");
    const legendeBTN = document.querySelector("#legendeBTN");
    const PClegendeBTN = document.querySelector("#PClegendeBTN");
    const closeBTN_legendePOPUP = document.querySelector("#closeBTN_legendePOPUP");
    const aproposPOPUP = document.querySelector("#aproposPOPUP");
    const aproposBTN = document.querySelector("#aproposBTN");
    const PCaproposBTN = document.querySelector("#PCaproposBTN");
    const closeBTN_aproposPOPUP = document.querySelector("#closeBTN_aproposPOPUP");


    PClegendeBTN.addEventListener('click', () => {
        legendePOPUP.classList.remove("hidden");
    });

    legendeBTN.addEventListener('click', () => {
        legendePOPUP.classList.remove("hidden");
    });

    closeBTN_legendePOPUP.addEventListener('click', () => {
        legendePOPUP.classList.add("hidden");
    });


    PCaproposBTN.addEventListener('click', () => {
        aproposPOPUP.classList.remove("hidden");
    });

    aproposBTN.addEventListener('click', () => {
        aproposPOPUP.classList.remove("hidden");
    });

    closeBTN_aproposPOPUP.addEventListener('click', () => {
        aproposPOPUP.classList.add("hidden");
    });

    menuBTN.addEventListener('click', () => {
        navBar.classList.toggle("hidden");
        icon.classList.toggle("transition");
        icon.classList.toggle("transform");
        icon.classList.toggle("-rotate-90"); 
    });


});

