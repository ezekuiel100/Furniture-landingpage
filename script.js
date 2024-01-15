let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  if (scrollY > 2) {
    nav.classList.add("sticky");
    console.log(scrollY);
  }

  if (scrollY <= 2) {
    nav.classList.remove("sticky");
  }
});
