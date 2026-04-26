import { navigate } from "./router.js";

document.addEventListener("DOMContentLoaded", () => {
  navigate("/");

  document.querySelectorAll("a[data-link]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      navigate(e.target.getAttribute("href"));
    });
  });
});





const items = document.querySelectorAll(".scroll-item");

// Assign alternating directions
items.forEach((item, index) => {
  item.classList.add(index % 2 === 0 ? "from-left" : "from-right");
});

// Scroll reveal observer
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

items.forEach(item => revealObserver.observe(item));

// Parallax effect
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  items.forEach((item) => {
    const speed = item.dataset.speed || 0.2; // default parallax speed
    const offset = scrollY * speed;

    // Only apply parallax BEFORE reveal
    if (!item.classList.contains("show")) {
      item.style.transform += ` translateY(${offset}px)`;
    }
  });
});
