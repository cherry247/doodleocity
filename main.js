const navbar=document.querySelector(".nav-bar");
const navlink=document.querySelectorAll(".nav-link");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", mobileMenu);
navlink.forEach(n => n.addEventListener("click", closeMenu));
function mobileMenu() {
    hamburger.classList.toggle("active");
      navbar.classList.toggle("active");
}
function closeMenu() {
    hamburger.classList.remove("active");

    navbar.classList.remove("active");
}