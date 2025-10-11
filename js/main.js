

// ✅ Animate elements when they come into view
const animatedElements = document.querySelectorAll(
  ".animate-up, .animate-left, .animate-right, .animate-fade"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach((el) => observer.observe(el));

/* ================================
   Smooth scroll navigation
   ================================ */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // adjust for header height
        behavior: "smooth",
      });
    }
  });
});

/* ================================
   Optional: highlight current nav
   ================================ */
const navLinks = document.querySelectorAll(".nav a");
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 100;
  document.querySelectorAll("section[id]").forEach((section) => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((a) => a.classList.remove("active"));
      const current = document.querySelector(`.nav a[href="#${section.id}"]`);
      if (current) current.classList.add("active");
    }
  });
});

// ================================
// Sticky Header Scroll Effect
// ================================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
