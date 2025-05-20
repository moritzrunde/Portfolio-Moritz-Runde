document.addEventListener('DOMContentLoaded', () => {
  const introVideo = document.getElementById('intro-video');
  const body = document.body;

  const introShown = sessionStorage.getItem('introPlayed');

  // Falls Intro bereits gezeigt wurde → direkt Inhalt anzeigen
  if (!introVideo || introShown) {
    if (introVideo) introVideo.style.display = 'none';
    body.classList.remove('hide-content');
    body.classList.add('show-content');
    return;
  }

  // Andernfalls: Intro zeigen
  introVideo.play().catch(() => {
    // Wenn autoplay fehlschlägt → sofort weitermachen
    introVideo.style.display = 'none';
    body.classList.remove('hide-content');
    body.classList.add('show-content');
  });

  // Sobald das Video zu Ende ist
  introVideo.addEventListener('ended', () => {
    introVideo.classList.add('fade-out');
    setTimeout(() => {
      introVideo.style.display = 'none';
      body.classList.remove('hide-content');
      body.classList.add('show-content');
    }, 1200); // CSS-Transition-Dauer
    sessionStorage.setItem('introPlayed', 'true');
  });

  // Notfall-Fallback: Falls Video nie endet (z. B. bei Fehler)
  setTimeout(() => {
    if (!sessionStorage.getItem('introPlayed')) {
      introVideo.classList.add('fade-out');
      introVideo.style.display = 'none';
      body.classList.remove('hide-content');
      body.classList.add('show-content');
    }
  }, 8000); // 8 Sekunden, je nach Videolänge anpassen
});
