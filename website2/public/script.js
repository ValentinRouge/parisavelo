const menuBTN = document.querySelector("#menuBTN");
const navBar = document.querySelector("#navbar");
const icon = document.querySelector("#icon");

menuBTN.addEventListener('click', () => {
    navBar.classList.toggle("hidden")
    icon.classList.toggle("transition")
    icon.classList.toggle("transform")
    icon.classList.toggle("-rotate-90")
})
