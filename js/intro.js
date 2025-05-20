document.addEventListener('DOMContentLoaded', () => {
  const introVideo = document.getElementById('intro-video');
  const body = document.body;

  const introShown = sessionStorage.getItem('introPlayed');

  if (introVideo && !introShown) {
    introVideo.play();

    introVideo.addEventListener('ended', () => {
      // Fade-Out-Klasse hinzufügen
      introVideo.classList.add('fade-out');

      // Nach der Transition das Video ausblenden und Inhalt zeigen
      setTimeout(() => {
        introVideo.style.display = 'none';
        body.classList.remove('hide-content');
        body.classList.add('show-content');
      }, 1200); // entspricht der CSS-Transition-Dauer
      sessionStorage.setItem('introPlayed', 'true');
    });
  } else {
    if (introVideo) introVideo.style.display = 'none';
    body.classList.remove('hide-content');
    body.classList.add('show-content');
  }
});
