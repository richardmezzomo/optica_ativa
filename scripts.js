const openMenuButton = document.querySelector('.open-menu');
const menuNavigation = document.querySelector('.menu-navigation');
const navigation = document.querySelector('.navigation-mobile');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navigation.classList.add('navigation--scroll');
  } else {
    navigation.classList.remove('navigation--scroll');
  }
});


let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  // Verifica a direção do scroll
  if (scrollTop > lastScrollTop) {
    // Rolagem para baixo
    header.classList.add('header-hidden');
    navigation.classList.add('navigation-mobile-hidden');
  } else {
    // Rolagem para cima
    header.classList.remove('header-hidden');
    navigation.classList.remove('navigation-mobile-hidden');
  }

  lastScrollTop = scrollTop;
});




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

document.addEventListener('DOMContentLoaded', function() {
  var elem = document.querySelector('.about-carousel');
  var flkty = new Flickity(elem, {
    freeScroll: true,
    contain: false,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    autoPlay: true,
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elem = document.querySelector('.teste-carousel');
  var flkty = new Flickity(elem, {
    freeScroll: false,
    contain: false,
    wrapAround: false,
    prevNextButtons: false,
    pageDots: false,
  });
});