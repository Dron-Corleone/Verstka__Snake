
const vector = document.querySelector(".head__logo");
const name = document.querySelector(".head__name");
let menuBtn = document.querySelector('.head__menu-btn');
let menu = document.querySelector('.head__menu');
let list = document.querySelector('.head__list');
let link = document.querySelectorAll('.head__link');


window.addEventListener("scroll", function() {
    checkScroll();
})

document.addEventListener("DOMContentLoaded", function (){
    checkScroll();
});

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

function checkScroll() {
    let scrollPos = window.scrollY;

    if (scrollPos > 0) {
        vector.classList.add('head__display');
        name.classList.add('head__display');
        menu.classList.add('head__menu-right');
        menuBtn.classList.add('head__menu-btnRight');
        list.classList.add('head__list-block');

        for (let i = 0; i <= link.length; i++) {
            link[i].classList.add('head__link-block');
        }
    } else {
        vector.classList.remove('head__display');
        name.classList.remove('head__display');
        menu.classList.remove('head__menu-right');
        menuBtn.classList.remove('head__menu-btnRight');
        list.classList.remove('head__list-block');
        link.classList.remove('head__link-block');
    }
}



