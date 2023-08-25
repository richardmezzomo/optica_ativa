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