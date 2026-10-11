
document.addEventListener("DOMContentLoaded", () => {
  // Bootstrap tooltip
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));

  // Use JavaScript to route navbar/menu items between pages.
  document.querySelectorAll("[data-route]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const target = el.getAttribute("data-route");
      if (target) window.location.href = target;
    });
  });

  // Simple search/filter for recommendation cards.
  const search = document.getElementById("songSearch");
  const cards = [...document.querySelectorAll("[data-song-card]")];
  if (search && cards.length) {
    search.addEventListener("input", () => {
      const q = search.value.toLowerCase().trim();
      cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.closest(".song-col").style.display = text.includes(q) ? "" : "none";
      });
    });
  }

  // Contact form demo
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("formAlert");
  if (form && alertBox) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alertBox.classList.remove("d-none");
      form.reset();
      window.scrollTo({top: alertBox.offsetTop - 120, behavior: "smooth"});
    });
  }
});
