// MAKE BURGER APPEAR
const hamburger = document.querySelector('.hamburger');

function changeBurger () {
  hamburger.classList.toggle('is-active');
}

hamburger.addEventListener('click', changeBurger);


// MAKE SIDE MENU POP OUT
const menuShow = document.querySelector('.menuFromBurger')
function toggleMenu () {
  menuShow.classList.toggle('menuShowOnClick');
}

hamburger.addEventListener('click', toggleMenu);
