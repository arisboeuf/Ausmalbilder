const fs = require('fs');
const path = require('path');

// PDFs Ordner
const pdfsDir = path.join(__dirname, 'pdfs');

// Alle PDF-Dateien im Ordner finden
function listPDFs() {
    try {
        const files = fs.readdirSync(pdfsDir);
        const pdfs = files
            .filter(file => file.toLowerCase().endsWith('.pdf'))
            .map(file => {
                const name = path.basename(file, '.pdf');
                return {
                    name: name,
                    file: `pdfs/${file}`
                };
            })
            .sort((a, b) => a.name.localeCompare(b.name)); // Alphabetisch sortieren

        // JSON-Datei erstellen
        const jsonPath = path.join(__dirname, 'pdfs.json');
        fs.writeFileSync(jsonPath, JSON.stringify(pdfs, null, 2), 'utf8');
        
        console.log(`✅ ${pdfs.length} PDF(s) gefunden und in pdfs.json gespeichert:`);
        pdfs.forEach(pdf => console.log(`   - ${pdf.name}`));
        
        return pdfs;
    } catch (error) {
        console.error('❌ Fehler beim Lesen des pdfs-Ordners:', error.message);
        // Leere Liste zurückgeben, falls Ordner nicht existiert
        const jsonPath = path.join(__dirname, 'pdfs.json');
        fs.writeFileSync(jsonPath, JSON.stringify([], null, 2), 'utf8');
        return [];
    }
}

// Beim direkten Aufruf ausführen
if (require.main === module) {
    listPDFs();
}

module.exports = listPDFs;
