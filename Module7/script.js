// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn?.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));

// Toggle "For Sell" / "For Rent" like dropdown button (simple demo)
const modeBtn = document.getElementById("modeBtn");
let mode = "sell";

modeBtn?.addEventListener("click", () => {
  mode = mode === "sell" ? "rent" : "sell";
  modeBtn.firstChild.textContent = mode === "sell" ? "For Sell" : "For Rent";
});

// Fake search submit
const heroMsg = document.getElementById("heroMsg");
const searchInput = document.getElementById("searchInput");

searchInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    heroMsg.classList.remove("hidden");
    setTimeout(() => heroMsg.classList.add("hidden"), 1600);
  }
});

// Filter strip active state
const filterBtns = document.querySelectorAll(".filterBtn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => {
      b.classList.remove("bg-blue-600", "text-white");
      b.classList.add("text-slate-700");
    });
    btn.classList.add("bg-blue-600", "text-white");
    btn.classList.remove("text-slate-700");
  });
});