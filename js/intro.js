document.addEventListener('DOMContentLoaded', () => {
  const logoContainer = document.getElementById('intro-logo-container');
  const body = document.body;

  // Seite beginnt mit verstecktem Content
  body.classList.add('hide-content');

  // Warte 1 Sekunde, dann animiere das Logo
  setTimeout(() => {
    logoContainer.classList.add('show');

    // Nach 2 Sekunden: fade-out des Logos
    setTimeout(() => {
      logoContainer.classList.add('fadeout');
    }, 2000);

    // Nach 3 Sekunden: zeige den Seiteninhalt
    setTimeout(() => {
      body.classList.remove('hide-content');
      body.classList.add('show-content');
    }, 3000);
  }, 1000); // Delay vor dem Logo-Erscheinen
});
