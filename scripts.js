const openMenuButton = document.querySelector('.open-menu');
const menuNavigation = document.querySelector('.menu-navigation');
const navigation = document.querySelector('.navigation-mobile');
let lastScrollTop = 0;

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("text");
  const originalText = textElement.textContent;
  const newText = "Óculos prontos em até 30 minutos";
  let isOriginalText = true;

  function toggleText() {
    textElement.textContent = isOriginalText ? newText : originalText;
    isOriginalText = !isOriginalText;
  }

  setInterval(toggleText, 3000); // Toggle every 3 seconds (adjust as needed)
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navigation.classList.add('navigation--scroll');
  } else {
    navigation.classList.remove('navigation--scroll');
  }
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
  var elem = document.querySelector('.tertiary-carousel');
  var flkty = new Flickity(elem, {
    freeScroll: true,
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
  });
});

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
  var elem = document.querySelector('.carousel-mobile');
  var flkty = new Flickity(elem, {
    freeScroll: false,
    contain: false,
    wrapAround: false,
    prevNextButtons: false,
    pageDots: false,
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elem = document.querySelector('.carousel-desktop');
  var flkty = new Flickity(elem, {
    freeScroll: false,
    contain: false,
    wrapAround: false,
    prevNextButtons: false,
    pageDots: false,
  });
});