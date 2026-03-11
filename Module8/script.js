// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn?.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));

// Watch video demo
const watchBtn = document.getElementById("watchBtn");
const watchMsg = document.getElementById("watchMsg");
watchBtn?.addEventListener("click", () => {
  watchMsg.classList.remove("hidden");
  setTimeout(() => watchMsg.classList.add("hidden"), 1600);
});

// Simple ticker animation
const ticker = document.querySelector(".ticker");
let x = 0;
function tick() {
  x -= 0.5;
  if (x < -600) x = 0;
  ticker.style.transform = `translateX(${x}px)`;
  requestAnimationFrame(tick);
}
tick();