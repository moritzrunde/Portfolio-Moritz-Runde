const feedUrl = "https://letterboxd.com/Jim_Millow/rss/";

fetch("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(feedUrl))
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("letterboxd-feed");
    if (!data.items || data.items.length === 0) {
      container.innerHTML = "<p>Keine Einträge gefunden.</p>";
      return;
    }

    const entries = data.items.slice(0, 5);
    entries.forEach((entry) => {
      const item = document.createElement("div");
      item.className = "diary-entry";

      // Versuche, das Posterbild aus der description zu extrahieren
      const description = entry.description;
      const posterUrlMatch = description.match(/<img.*?src=["'](.*?)["']/);  // Regex um das Bild zu extrahieren
      const posterUrl = posterUrlMatch ? posterUrlMatch[1] : "path/to/default-poster.jpg";  // Standardbild, wenn kein Poster gefunden wird

      item.innerHTML = `
        <div class="poster">
          <a href="${entry.link}" target="_blank">
            <img src="${posterUrl}" alt="Poster zu ${entry.title}">
          </a>
        </div>
        <div class="diary-info">
          <h4><a href="${entry.link}" target="_blank">${entry.title}</a></h4>
          <p>${new Date(entry.pubDate).toLocaleDateString("de-DE")}</p>
        </div>
      `;

      container.appendChild(item);
    });
  })
  .catch((error) => {
    console.error("Fehler beim Laden des Feeds:", error);
  });
