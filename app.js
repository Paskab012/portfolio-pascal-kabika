const menuLinks = document.querySelectorAll('.menuTog');
const mobileMenu = document.querySelector('.menu');

function mobileMenuT() {
  mobileMenu.classList.toggle('display-non');
  menuLinks[0].classList.toggle('display-non');
  menuLinks[1].classList.toggle('display-non');
}

menuLinks[0].addEventListener('click', mobileMenuT);
menuLinks[1].addEventListener('click', mobileMenuT);

const navLink = document.querySelectorAll('.navigate');

navLink.forEach((e) => e.addEventListener('click', mobileMenuT));
