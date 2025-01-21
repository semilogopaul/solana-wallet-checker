// Get DOM elements
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

// Toggle mobile menu
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
