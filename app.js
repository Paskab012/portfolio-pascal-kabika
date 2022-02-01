const selectAll = document.querySelector("body");
const menuLinks = document.getElementsByClassName("bars-icon");
console.log(selectAll);
console.log(menulinks);
// Display Mobile Menu
menuLinks.addEventListener("click", () => {
  selectAll.classList.toggle("menu-open");
});

const navLink = document.querySelectorAll(".navigate");

navLink.forEach((e) =>
  e.addEventListener("click", () => {
    selectAll.classList.remove("menu-open");
  })
);
