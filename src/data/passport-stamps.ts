export type StampShape = 'round' | 'oval' | 'visa' | 'seal' | 'date' | 'shield' | 'hex' | 'open';
export type StampSize = 'small' | 'medium' | 'large' | 'hero';
export type StampPosition = { x: number; y: number; mobileX: number; mobileY: number };

export type PassportStamp = {
  id: string; name: string; message: string; evaluator: string; enabled: boolean;
  stampVariant: number; stampShape: StampShape; stampSize: StampSize; rotation: number; visualMotif: string; position: StampPosition;
};

const stamp = (id: string, name: string, message: string, evaluator: string, stampVariant: number, stampShape: StampShape, stampSize: StampSize, rotation: number, visualMotif: string, position: StampPosition, enabled = true): PassportStamp => ({ id, name, message, evaluator, enabled, stampVariant, stampShape, stampSize, rotation, visualMotif, position });

/* Registry kept server-side: the client receives only unlocked impressions, never the evaluator. */
export const passportStamps: readonly PassportStamp[] = [
  stamp('premier-bouchon', 'Premier Bouchon', 'La prima bottiglia è entrata nel tuo taccuino.', 'unique-1', 1, 'round', 'small', -7, '⌾', { x: 14, y: 12, mobileX: 16, mobileY: 14 }),
  stamp('bienvenue', 'Bienvenue en Champagne', 'Il viaggio ha iniziato a prendere il suo ritmo.', 'unique-5', 2, 'visa', 'medium', 3, 'ENTRÉE', { x: 52, y: 9, mobileX: 62, mobileY: 12 }),
  stamp('carnet-degustation', 'Carnet de Dégustation', 'Le tue annotazioni stanno diventando un vero carnet.', 'unique-10', 3, 'visa', 'medium', -3, '≋', { x: 80, y: 18, mobileX: 82, mobileY: 25 }),
  stamp('connaisseur', 'Le Connaisseur', 'Hai dato profondità e continuità alla tua esplorazione.', 'unique-25', 4, 'seal', 'medium', 4, '❦', { x: 25, y: 32, mobileX: 26, mobileY: 34 }),
  stamp('grande-collection', 'La Grande Collection', 'La tua raccolta di assaggi ha acquistato ampiezza.', 'unique-50', 5, 'shield', 'large', -2, '50', { x: 61, y: 35, mobileX: 60, mobileY: 37 }),
  stamp('centenaire', 'Centenaire', 'Cento Champagne hanno lasciato una traccia nel tuo passaporto.', 'unique-100', 6, 'seal', 'hero', 2, '100', { x: 82, y: 51, mobileX: 81, mobileY: 48 }),
  stamp('trois-cepages', 'Les Trois Cépages', 'Il tuo viaggio ha incontrato le tre anime principali della Champagne.', 'three-grapes', 7, 'round', 'medium', -5, '●●●', { x: 13, y: 60, mobileX: 15, mobileY: 58 }),
  stamp('blanc-sur-blanc', 'Blanc sur Blanc', 'Hai seguito il filo luminoso dello Chardonnay.', 'bdb-5', 8, 'oval', 'medium', 2, '◇', { x: 48, y: 57, mobileX: 46, mobileY: 56 }),
  stamp('noir-sur-noir', 'Noir sur Noir', 'Hai esplorato la profondità dei Blanc de Noirs.', 'bdn-5', 9, 'seal', 'medium', -4, '◉', { x: 72, y: 68, mobileX: 73, mobileY: 68 }),
  stamp('vie-en-rose', 'La Vie en Rose', 'Hai raccolto cinque interpretazioni rosé.', 'rose-5', 10, 'oval', 'small', 6, '✿', { x: 25, y: 79, mobileX: 25, mobileY: 76 }),
  stamp('sans-sucre', "Sans Sucre, S'il Vous Plaît", 'Hai riconosciuto la precisione nuda del Brut Nature.', 'brut-nature-3', 11, 'round', 'small', 1, '0', { x: 55, y: 78, mobileX: 58, mobileY: 79 }),
  stamp('extra-extra-brut', 'Extra, Extra Brut', 'Il tuo percorso ha incontrato una tensione più asciutta.', 'extra-brut-5', 12, 'date', 'medium', -1, 'EXTRA', { x: 83, y: 84, mobileX: 83, mobileY: 84 }),
  stamp('voyage-temps', 'Voyage dans le Temps', 'Hai attraversato annate e tempi diversi.', 'vintages-5', 13, 'date', 'medium', 4, 'ANNÉES', { x: 45, y: 84, mobileX: 44, mobileY: 86 }, false),
  stamp('maison-vigneron', 'Maison & Vigneron', 'Hai incontrato entrambe le anime della Champagne.', 'maison-grower-5', 14, 'visa', 'large', -2, 'M / V', { x: 15, y: 84, mobileX: 16, mobileY: 86 }, false),
  stamp('grower-hunter', 'Grower Hunter', 'Hai seguito dieci vigneron diversi, da vicino.', 'grower-10', 15, 'shield', 'medium', 5, '✂', { x: 70, y: 88, mobileX: 70, mobileY: 88 }),
  stamp('grandes-maisons', 'Les Grandes Maisons', 'Hai attraversato dieci grandi firme della regione.', 'maison-10', 16, 'hex', 'medium', -3, '⌂', { x: 18, y: 11, mobileX: 18, mobileY: 11 }, false),
  stamp('fidele-maison', 'Fidèle à la Maison', 'Cinque cuvée di una stessa casa raccontano una fedeltà scelta.', 'producer-five', 17, 'round', 'medium', 3, '↻', { x: 56, y: 13, mobileX: 58, mobileY: 13 }),
  stamp('tour-champagne', 'Tour de Champagne', 'Hai attraversato le quattro grandi aree con dati territoriali affidabili.', 'tour-areas', 18, 'oval', 'large', -4, '⌁', { x: 81, y: 20, mobileX: 80, mobileY: 23 }),
  stamp('montagne-reims', 'Montagne de Reims', 'I pendii della Montagne de Reims sono entrati nel tuo viaggio.', 'area-montagne', 19, 'open', 'medium', 2, '⌁', { x: 29, y: 32, mobileX: 27, mobileY: 34 }),
  stamp('cote-blancs', 'Côte des Blancs', 'Il paesaggio gessoso della Côte des Blancs ha lasciato il suo segno.', 'area-blancs', 20, 'visa', 'medium', -5, '║', { x: 57, y: 36, mobileX: 58, mobileY: 38 }),
  stamp('vallee-marne', 'Vallée de la Marne', 'Hai seguito il corso sinuoso della Marna tra le vigne.', 'area-marne', 21, 'open', 'medium', 4, '〰', { x: 83, y: 44, mobileX: 82, mobileY: 46 }),
  stamp('cote-bar', 'Côte des Bar', 'Hai raggiunto il paesaggio meridionale dell’Aube.', 'area-bar', 22, 'hex', 'medium', -2, '△', { x: 14, y: 56, mobileX: 16, mobileY: 57 }),
  stamp('grand-cru', 'Grand Cru Explorer', 'Hai incontrato cinque Grand Cru con provenienza dichiarata.', 'grand-cru-5', 23, 'seal', 'large', 1, 'GRAND CRU', { x: 48, y: 58, mobileX: 47, mobileY: 60 }, false),
  stamp('a-la-cave', 'À la Cave', 'La prima bottiglia è entrata nella tua cantina.', 'cellar-1', 24, 'visa', 'small', 3, 'CAVE', { x: 80, y: 61, mobileX: 80, mobileY: 64 }),
  stamp('collectionneur', 'Le Collectionneur', 'Hai custodito dieci Champagne diversi nello stesso momento.', 'cellar-10', 25, 'date', 'medium', -4, 'N° 10', { x: 23, y: 78, mobileX: 23, mobileY: 79 }),
  stamp('patience', 'Patience', 'Una bottiglia ha saputo aspettare nella tua cantina.', 'patience', 26, 'round', 'medium', 4, '⌛', { x: 57, y: 77, mobileX: 58, mobileY: 79 }, false),
  stamp('coup-coeur', 'Coup de Cœur', 'Cinque volte hai scelto di tornare a una bottiglia.', 'repurchase-5', 27, 'seal', 'medium', -3, '♡', { x: 82, y: 82, mobileX: 81, mobileY: 84 }),
  stamp('esprit-ouvert', 'Esprit Ouvert', 'Hai dato spazio a stili molto diversi tra loro.', 'styles-five', 28, 'open', 'large', 5, '✣', { x: 16, y: 90, mobileX: 17, mobileY: 89 }, false),
  stamp('hors-sentiers', 'Hors des Sentiers Battus', 'Hai scelto più volte una strada lontana dalle tue abitudini.', 'outliers-five', 29, 'open', 'medium', -9, '↗', { x: 48, y: 88, mobileX: 48, mobileY: 89 }, false),
  stamp('mon-champagne', 'Mon Champagne', 'Il passaporto ha abbastanza tracce per riconoscere il tuo gusto.', 'complete-profile', 30, 'shield', 'hero', 1, 'CH', { x: 76, y: 91, mobileX: 76, mobileY: 90 }, false),
];

export const stampForId = (id: string) => passportStamps.find((stamp) => stamp.id === id);
