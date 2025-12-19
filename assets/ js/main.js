/* =========================================================
   FoundryStack – Global JS (FINAL)
   Shared across all pages
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* ================= FOOTER YEAR ================= */

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ================= GRID GLOW (MOUSE FOLLOW) ================= */

  const glow = document.querySelector(".grid-glow");

  if (glow && !window.matchMedia("(pointer: coarse)").matches) {
    window.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty("--x", `${x}%`);
      document.documentElement.style.setProperty("--y", `${y}%`);
    });
  }

  /* ================= SCROLL ANIMATIONS ================= */

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target); // animate once
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".fade-up, .fade-in")
    .forEach((el) => observer.observe(el));

  /* ================= NAVBAR ACTIVE LINK ================= */

  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      link.style.color = "var(--text-main)";
    }
  });
});
