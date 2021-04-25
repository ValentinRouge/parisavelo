document.addEventListener('DOMContentLoaded', function() {
    const menuBTN = document.querySelector("#menuBTN");
    const navBar = document.querySelector("#navbar");
    const icon = document.querySelector("#icon");
    const legendePOPUP = document.querySelector("#legendePOPUP")
    const legendeBTN = document.querySelector("#legendeBTN")
    const closeBTN_legendePOPUP = document.querySelector("#closeBTN_legendePOPUP")


    legendeBTN.addEventListener('click', () => {
        console.log("test")

        legendePOPUP.classList.remove("hidden")


    })

    closeBTN_legendePOPUP.addEventListener('click', () => {
        legendePOPUP.classList.add("hidden")
    })

    menuBTN.addEventListener('click', () => {
        navBar.classList.toggle("hidden");
        icon.classList.toggle("transition");
        icon.classList.toggle("transform");
        icon.classList.toggle("-rotate-90");
    })
})