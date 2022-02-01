
const snake = document.querySelector(".head__snake");
const vector = document.querySelector(".head__logo");
const name = document.querySelector(".head__name");
const text = document.querySelector(".head__menu");
let menuBtn = document.querySelector('.head__menu-btn');
let menu = document.querySelector('.head__menu');

window.addEventListener("scroll", function() {
    checkScroll();
})

document.addEventListener("DOMContentLoaded", function (){
    checkScroll();
});

function checkScroll() {
    let scrollPos = window.scrollY;

    if (scrollPos > 0) {
        // vector.remove('head__logo');
        // // name.remove('head__name');
        vector.classList.add('display');
    } else {

    }
}


