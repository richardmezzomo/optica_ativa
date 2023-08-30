const openMenuButton = document.querySelector('.open-menu');
const menuNavigation = document.querySelector('.menu-navigation');

openMenuButton.addEventListener('click', () => {
  openMenuButton.classList.toggle('open');
  menuNavigation.classList.toggle('show');
  menuNavigation.classList.toggle('open');
});

function closeMenu() {
  openMenuButton.classList.remove('open');
  menuNavigation.classList.remove('open');
  menuNavigation.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function() {
  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity(elem, {
    freeScroll: true,
    contain: false,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elem = document.querySelector('.secondary-carousel');
  var flkty = new Flickity(elem, {
    freeScroll: true,
    contain: false,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
  });
});