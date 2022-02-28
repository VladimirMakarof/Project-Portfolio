const iconMenu = document.querySelector('.header-burger');
const menuBody = document.querySelector('.header__navigation-items');
const overlay = document.querySelector('.overlay');
const link = document.querySelectorAll('.header__navigation-link');

iconMenu.addEventListener('click', closeMenu);
link.forEach(l => l.addEventListener('click', closeMenu));
overlay.addEventListener('click', closeMenu);

function closeMenu(event) {
    menuBody.classList.toggle('active');
    iconMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('lock');
}