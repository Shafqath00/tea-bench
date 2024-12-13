
var ham = document.getElementById("ham");
var mob_nav = document.getElementById("mob-nav");
var icon = document.getElementById("icon");

ham.addEventListener('click', () => {
    mob_nav.classList.toggle("nav-mob-active");
    icon.classList.toggle("fa-xmark");
})