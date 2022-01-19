
const snake = document.querySelector(".head__snake");
const vector = document.querySelector(".head__logo");
const name = document.querySelector(".head__name");
const text = document.querySelector(".head__menu");

window.addEventListener("scroll", function() {
    checkScroll();
})

document.addEventListener("DOMContentLoaded", function (){
    checkScroll();
});

function checkScroll() {
    let scrollPos = window.scrollY;

    if (scrollPos > 0) {
        snake.classList.add('head__fixedMenu');
        vector.classList.add('head__logo-small');
        name.classList.add('head__name-small');
        text.classList.add('head__menu-small');
    } else {
        snake.classList.remove('head__fixedMenu');
        vector.classList.remove('head__logo-small');
        name.classList.remove('head__name-small');
        text.classList.remove('head__menu-small');
    }
}