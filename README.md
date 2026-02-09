# BFF Bilder - Ausmalbilder Web-App

Eine einfache Web-App zum Durchsuchen und Herunterladen von Ausmalbildern (PDFs).

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

Diese App kann direkt auf GitHub Pages gehostet werden:

1. Repository auf GitHub hochladen
2. GitHub Pages aktivieren
3. **Wichtig:** Vor dem Commit `npm run list-pdfs` ausführen, damit `pdfs.json` aktualisiert wird
4. `pdfs.json` sollte NICHT in `.gitignore` sein (wird für GitHub Pages benötigt)

## 📝 Hinweise

- Alle PDF-Dateien müssen im `pdfs/` Ordner liegen
- Der Dateiname (ohne .pdf) wird als Anzeigename verwendet
- PDFs werden automatisch alphabetisch sortiert
