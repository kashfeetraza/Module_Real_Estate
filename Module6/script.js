// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn?.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));

// "More" dropdown (desktop)
const moreBtn = document.getElementById("moreBtn");
const moreMenu = document.getElementById("moreMenu");
const moreChevron = document.getElementById("moreChevron");

moreBtn?.addEventListener("click", () => {
  moreMenu.classList.toggle("hidden");
  moreChevron.classList.toggle("rotate-180");
  moreChevron.classList.toggle("transition");
});

// Hero mini slider (switches images + dot active)
const heroImg = document.getElementById("heroImg");
const dots = Array.from(document.querySelectorAll(".dot"));

const slides = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
];

let current = 0;

function setActiveDot(i) {
  dots.forEach((d, idx) => {
    d.classList.toggle("bg-white/60", idx === i);
    d.classList.toggle("bg-white/30", idx !== i);
  });
}

function goTo(i) {
  current = i;
  heroImg.src = slides[i];
  setActiveDot(i);
}

dots.forEach((d) => {
  d.addEventListener("click", () => goTo(Number(d.dataset.index)));
});

// autoplay
setInterval(() => {
  goTo((current + 1) % slides.length);
}, 4500);