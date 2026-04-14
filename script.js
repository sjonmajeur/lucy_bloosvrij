/*
 * Basisscript voor Bloosvrij Leven.
 * Dit script initialiseert eventuele interactieve componenten, zoals een
 * vertalingsfunctie. Voor eenvoudige websites volstaat de logging.
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('Bloosvrij Leven: JavaScript geladen.');
});

/*
 * Voorbeeld van een eenvoudige taalwisselaar.
 * Om een Engelse versie te ondersteunen kun je elementen voorzien van
 * data‑attribuut `data‑key` en de vertalingen hieronder invullen.  
 * Gebruik setLanguage('en') of setLanguage('nl') om de taal te wisselen.
 */

const translations = {
  en: {
    siteTitle: 'Blush‑Free Life',
    heroHeading: 'Overcome your fear of blushing and live freely',
    heroParagraph: 'Learn step by step how to break the vicious cycle of blushing. Discover practical techniques, weekly themes and a community that understands you.',
    discoverButton: 'Discover the 10‑week journey',
    // Voeg hier andere vertalingen toe.
  },
  nl: {
    siteTitle: 'Bloosvrij Leven',
    heroHeading: 'Overwin je bloosangst en leef vrijer',
    heroParagraph: 'Leer in kleine stappen hoe je de vicieuze cirkel van blozen doorbreekt. Ontdek praktische technieken, wekelijkse thema’s en een community die je begrijpt.',
    discoverButton: 'Ontdek de 10‑weekse reis',
  },
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.nl;
  // Voor elk element met een data‑key: pas de tekst aan.
  document.querySelectorAll('[data‑key]').forEach(el => {
    const key = el.getAttribute('data‑key');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

// Indien gewenst kun je automatisch de taal instellen op basis van de
// browserinstelling. Schakel dit uit als je alleen Nederlands gebruikt.
// setLanguage(navigator.language.startsWith('en') ? 'en' : 'nl');