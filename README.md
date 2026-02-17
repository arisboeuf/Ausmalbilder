# BFF Bilder - Ausmalbilder Web-App

Eine einfache Web-App zum Durchsuchen und Herunterladen von Ausmalbildern (PDFs).

**🌐 [Web-App öffnen](https://arisboeuf.github.io/Ausmalbilder/)**

## 📁 Projektstruktur

```
Ausmalbilder Git/
├── pdfs/              # Hier alle PDF-Dateien ablegen
│   └── BFF.pdf
├── index.html         # Hauptseite
├── list-pdfs.js       # Skript zum automatischen Finden von PDFs
├── pdfs.json          # Automatisch generierte Liste der PDFs
├── package.json
└── README.md
```

## 🚀 Verwendung

### Entwicklung starten

```bash
npm run dev
```

Das Skript findet automatisch alle PDFs im `pdfs/` Ordner und startet den Server.

### PDFs hinzufügen

**Super einfach!** Einfach die PDF-Datei in den `pdfs/` Ordner legen:

1. PDF-Datei in den `pdfs/` Ordner kopieren
2. `npm run list-pdfs` ausführen (oder `npm run dev` - macht es automatisch)
3. Fertig! Die PDF erscheint automatisch auf der Webseite

Die PDFs werden alphabetisch sortiert angezeigt.

## 🌐 GitHub Pages Deployment

Diese App ist automatisch für GitHub Pages eingerichtet:

1. **GitHub Pages aktivieren:**
   - Gehe zu Repository Settings > Pages
   - Source: "GitHub Actions" auswählen
   - Die App wird automatisch bei jedem Push auf `master` deployed

2. **Automatisches Deployment:**
   - Der GitHub Actions Workflow (`.github/workflows/deploy.yml`) aktualisiert automatisch die PDF-Liste
   - Keine manuellen Schritte nötig!

3. **PDFs hinzufügen:**
   - PDFs in den `pdfs/` Ordner legen
   - Commit und Push → GitHub Actions erledigt den Rest

## 📝 Hinweise

- Alle PDF-Dateien müssen im `pdfs/` Ordner liegen
- Der Dateiname (ohne .pdf) wird als Anzeigename verwendet
- PDFs werden automatisch alphabetisch sortiert
