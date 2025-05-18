document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion-item");

  accordions.forEach(item => {
    const btn = item.querySelector(".accordion-btn");
    const content = item.querySelector(".accordion-content");

    btn.addEventListener("click", () => {
      // Schließen, wenn schon aktiv
      const isActive = item.classList.contains("active");

      // Alle schließen
      document.querySelectorAll(".accordion-item").forEach(i => {
        i.classList.remove("active");
        i.querySelector(".accordion-content").style.height = 0;
      });

      if (!isActive) {
        item.classList.add("active");
        content.style.height = content.scrollHeight + "px";
      }
    });
  });
});
