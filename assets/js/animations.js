
document.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".grid-glow");
  if (glow) {
    glow.style.setProperty("--glow-x", `${e.clientX}px`);
    glow.style.setProperty("--glow-y", `${e.clientY}px`);
  }
});
