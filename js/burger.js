document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger-toggle");
  const nav = document.getElementById("main-nav");
  const overlay = document.getElementById("offcanvas-overlay");

  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    nav.classList.toggle("show");
    overlay.classList.toggle("show");
  });

  overlay.addEventListener("click", function () {
    burger.classList.remove("active");
    nav.classList.remove("show");
    overlay.classList.remove("show");
  });
});
