// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Search demo
const searchNow = document.getElementById("searchNow");
const searchMsg = document.getElementById("searchMsg");

searchNow?.addEventListener("click", () => {
  searchMsg.classList.remove("hidden");
  setTimeout(() => searchMsg.classList.add("hidden"), 2000);
});