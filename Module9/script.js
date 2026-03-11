// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn?.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));

// Mode pills (Buy/Rent/Sell)
const modeBtns = Array.from(document.querySelectorAll(".modeBtn"));
modeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modeBtns.forEach((b) => {
      b.classList.remove("bg-white", "shadow-sm", "text-slate-900");
      b.classList.add("text-slate-700");
    });
    btn.classList.add("bg-white", "shadow-sm", "text-slate-900");
  });
});

// Hero search demo
const heroSearchBtn = document.getElementById("heroSearchBtn");
const heroMsg = document.getElementById("heroMsg");
heroSearchBtn?.addEventListener("click", () => {
  heroMsg.classList.remove("hidden");
  setTimeout(() => heroMsg.classList.add("hidden"), 1600);
});

// Bottom search demo
const bottomSearchBtn = document.getElementById("bottomSearchBtn");
const bottomMsg = document.getElementById("bottomMsg");
bottomSearchBtn?.addEventListener("click", () => {
  bottomMsg.classList.remove("hidden");
  setTimeout(() => bottomMsg.classList.add("hidden"), 1600);
});