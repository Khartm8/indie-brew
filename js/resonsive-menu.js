// burger menu

(function showMenu() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    burger.onclick = function() {
        menu.classList.toggle('menu__active');
    }
}())