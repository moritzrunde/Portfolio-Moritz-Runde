document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".youtube-thumbnail");

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
      const url = thumbnail.dataset.url;
      window.open(url, "_blank");
    });
  });
});
