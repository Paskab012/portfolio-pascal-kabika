const selectAll = document.querySelector("body");
const menuLinks = document.querySelectorAll(".menuTog");
const mobileMenu = document.querySelector(".menu");

console.log(menuLinks);
// Display Mobile Menu

function mobileMenuT() {
  mobileMenu.classList.toggle("display-non");
  menuLinks[0].classList.toggle("display-non");
  menuLinks[1].classList.toggle("display-non");
}

menuLinks[0].addEventListener("click", mobileMenuT);
menuLinks[1].addEventListener("click", mobileMenuT);

const navLink = document.querySelectorAll(".navigate");

navLink.forEach((e) => e.addEventListener("click", mobileMenuT));

// object 

const projectsData = {
  project1 : {},
}




const projectsSection = document.getElementById('first-card-section');
const card1 = document.createElement('div');
card1.classList.add('all-components');
const firstImage = document.createElement('div');
firstImage.classList.add('first-image');
card1.appendChild(firstImage);

const card1Image = document.createElement('img');
card1Image.setAttribute('src', './asset/nature.png');
card1Image.setAttribute('alt', '');
card1.appendChild(card1Image);
const project1Heading = document.createElement('h1');
project1Heading.innerText = "Tonic";
firstImage.appendChild(project1Heading);
projectsSection.appendChild(card1);