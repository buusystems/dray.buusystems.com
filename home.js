// Fade sections in as they scroll into view. The page works without it.
(() => {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }, { threshold: 0.08 });
  document.querySelectorAll(".rise").forEach((el) => io.observe(el));
})();
