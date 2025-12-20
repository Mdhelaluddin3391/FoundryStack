/* =========================================================
   Firmarch – Core JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // 1. Dynamic Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Optimized Grid Glow
  const glow = document.querySelector(".grid-glow");
  if (glow && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", (e) => {
      requestAnimationFrame(() => {
        glow.style.setProperty("--glow-x", `${e.clientX}px`);
        glow.style.setProperty("--glow-y", `${e.clientY}px`);
      });
    });
  }

  // 3. Scroll Reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".card, section").forEach(el => observer.observe(el));

  // 4. Active Link
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === path) link.classList.add("active");
  });

  // 5. Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

});