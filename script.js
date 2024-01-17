let spy = new Gumshoe(".nav-links a");

let nav = document.querySelector("nav");
let burguerMenu = document.querySelector(".burguer-menu");

let burguerMenuOpen = document.querySelector(".burguer-menu-open");
let burguerMenuClose = document.querySelector(".burguer-menu-close");

let navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  if (scrollY > 2) {
    nav.classList.add("sticky");
  }

  if (scrollY <= 2) {
    nav.classList.remove("sticky");
  }
});

burguerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  burguerMenuOpen.classList.toggle("open");
  burguerMenuClose.classList.toggle("close");
});
