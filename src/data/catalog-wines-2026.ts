import type { WineFamily } from './wines';

export type CatalogSupplementWine = {
  producer: string;
  name: string;
  family: WineFamily;
};

/** Cuvée aggiuntive, disponibili nelle rispettive schede dei produttori. */
export const catalogSupplementWines: CatalogSupplementWine[] = [
  {
    "producer": "Erick Schreiber",
    "name": "Initial Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Erick Schreiber",
    "name": "Initial Rosé Brut",
    "family": "Rosé"
  },
  {
    "producer": "Erick Schreiber",
    "name": "Essentiel Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Erick Schreiber",
    "name": "Terre d’Origine Extra",
    "family": "Firma della maison"
  },
  {
    "producer": "Erick Schreiber",
    "name": "Blanc de Blancs “MK -157-20” Extra-Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Erick Schreiber",
    "name": "Blanc de Noirs “MK -157-20” Extra-Brut",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Morel Père & Fils",
    "name": "Cuvée Réserve Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Morel Père & Fils",
    "name": "“Pur Rosé” Brut",
    "family": "Rosé"
  },
  {
    "producer": "Morel Père & Fils",
    "name": "Cuvée Gabriel Blanc de Blanc Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Morel Père & Fils",
    "name": "Histoire de Rosé Brut",
    "family": "Rosé"
  },
  {
    "producer": "Stéphane Breton",
    "name": "Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Stéphane Breton",
    "name": "Brut Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Stéphane Breton",
    "name": "Brut Millesimato",
    "family": "Millesimato"
  },
  {
    "producer": "Amaury Beaufort",
    "name": "Blanc de Noir",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Amaury Beaufort",
    "name": "Jardinot",
    "family": "Firma della maison"
  },
  {
    "producer": "Amaury Beaufort",
    "name": "De Quoi Te Meles Tu?",
    "family": "Firma della maison"
  },
  {
    "producer": "Fumey-Tassin",
    "name": "Passè Composè",
    "family": "Firma della maison"
  },
  {
    "producer": "Fumey-Tassin",
    "name": "Futur Anterieur",
    "family": "Firma della maison"
  },
  {
    "producer": "Fumey-Tassin",
    "name": "Provocation Rosee",
    "family": "Rosé"
  },
  {
    "producer": "Fumey-Tassin",
    "name": "Contrastes",
    "family": "Firma della maison"
  },
  {
    "producer": "Fumey-Tassin",
    "name": "Emotion Blanche",
    "family": "Firma della maison"
  },
  {
    "producer": "Fumey-Tassin",
    "name": "Plus Que Parfait",
    "family": "Firma della maison"
  },
  {
    "producer": "Chassenay D’Arce",
    "name": "Cuvée Première",
    "family": "Firma della maison"
  },
  {
    "producer": "Chassenay D’Arce",
    "name": "Cuvée Expression",
    "family": "Firma della maison"
  },
  {
    "producer": "Chassenay D’Arce",
    "name": "Audance",
    "family": "Firma della maison"
  },
  {
    "producer": "Chassenay D’Arce",
    "name": "Origine",
    "family": "Firma della maison"
  },
  {
    "producer": "Chassenay D’Arce",
    "name": "Blanc de Noirs",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Chassenay D’Arce",
    "name": "Confidences",
    "family": "Firma della maison"
  },
  {
    "producer": "Chassenay D’Arce",
    "name": "Confidences Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Alexandre Bonnet",
    "name": "Extra Brut Blanc de Noir",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Alexandre Bonnet",
    "name": "Extra Brut Blanc de Noir Les Vignes Blanches",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Alexandre Bonnet",
    "name": "Extra Brut Blanc de Noir Hardy",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Alexandre Bonnet",
    "name": "Extra Brut Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Fleury",
    "name": "Blanc de Noirs",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Fleury",
    "name": "Fleur de l’Europe Nature",
    "family": "Extra Brut"
  },
  {
    "producer": "Devaux",
    "name": "Cuvèe D Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Devaux",
    "name": "Ultra D Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Devaux",
    "name": "D Rosé Brut",
    "family": "Rosé"
  },
  {
    "producer": "Devaux",
    "name": "D Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Devaux",
    "name": "Sténopé Millésimé Brut",
    "family": "Millesimato"
  },
  {
    "producer": "Devaux",
    "name": "Coeur des Bar Blanc de Noirs Brut",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Jean Velut",
    "name": "Premier Temps Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Jean Velut",
    "name": "Lumiere et Craie Brut Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Jean Velut",
    "name": "Noir de Craie Brut Blanc de Noirs",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Jean Velut",
    "name": "Témoignage Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Jean Velut",
    "name": "L’Oubliée Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Cottet-Dubreuil",
    "name": "Tradition",
    "family": "Firma della maison"
  },
  {
    "producer": "Cottet-Dubreuil",
    "name": "Millesime",
    "family": "Millesimato"
  },
  {
    "producer": "Cottet-Dubreuil",
    "name": "Charles René",
    "family": "Firma della maison"
  },
  {
    "producer": "Rémi Leroy",
    "name": "Blanc de Noirs Extra-Brut",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Rémi Leroy",
    "name": "Brut Nature",
    "family": "Extra Brut"
  },
  {
    "producer": "Rémi Leroy",
    "name": "NV Rosé Brut",
    "family": "Rosé"
  },
  {
    "producer": "Rémi Leroy",
    "name": "Blanc de Noirs Extra Brut Millesimato",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Rémi Leroy",
    "name": "Blanc de Blancs “Sous Larrey”",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Michel Nicaise",
    "name": "Brut Tradition Grand Cru Aÿ",
    "family": "Firma della maison"
  },
  {
    "producer": "Michel Nicaise",
    "name": "Cuvée Spéciale Grand Cru Aÿ",
    "family": "Firma della maison"
  },
  {
    "producer": "Michel Nicaise",
    "name": "Rosé Brut Grand Cru Aÿ",
    "family": "Rosé"
  },
  {
    "producer": "Michel Nicaise",
    "name": "Cru Aÿ – Blanc de Blancs – Pas Dosé",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Michel Nicaise",
    "name": "Cru Aÿ – Blanc de Noirs – Pas Dosé",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Pierre Mignon",
    "name": "Grande Reserve Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Pierre Mignon",
    "name": "Prestige Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Pierre Mignon",
    "name": "Rosé Brut",
    "family": "Rosé"
  },
  {
    "producer": "Pierre Mignon",
    "name": "Cuvee Pure Zero Dosage",
    "family": "Extra Brut"
  },
  {
    "producer": "Pierre Mignon",
    "name": "Blanc de Blancs Grand Cru Non Dosé",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Pierre Mignon",
    "name": "Annee de Madame Grand Vintage 2016",
    "family": "Millesimato"
  },
  {
    "producer": "Pierre Mignon",
    "name": "Clos des Graviers 2011",
    "family": "Millesimato"
  },
  {
    "producer": "Roulot-Fournier",
    "name": "Blanc de Meunier Brut Nature",
    "family": "Extra Brut"
  },
  {
    "producer": "Roulot-Fournier",
    "name": "Pur Instinct Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Roulot-Fournier",
    "name": "Cuvée Brut Millesimato 2012",
    "family": "Millesimato"
  },
  {
    "producer": "Régis Poissinet",
    "name": "L’Émergente Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Régis Poissinet",
    "name": "Terre d’Irizée Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Régis Poissinet",
    "name": "Terre de Rosé Extra- Brut",
    "family": "Rosé"
  },
  {
    "producer": "Régis Poissinet",
    "name": "Cuvée Irizée Meunier Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Moussé",
    "name": "L’Esquisse Blanc de Noirs Extra-Brut",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Moussé",
    "name": "L’Esquisse Blanc de Blancs Extra-Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Moussé",
    "name": "Eugène Extra-Brut Blanc de Noirs",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Moussé",
    "name": "Eugène Extra-Brut Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Moussé",
    "name": "Village Brut Nature Blanc de Noirs",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Pascal Lejeune",
    "name": "Cuvée Métonymie Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Pascal Lejeune",
    "name": "Cuvée Oxymore Premier Cru Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Pascal Lejeune",
    "name": "Cuvée Syllepse Extra-Brut Millésimé",
    "family": "Extra Brut"
  },
  {
    "producer": "Pascal Lejeune",
    "name": "de Blancs Premier Cru Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Pascal Lejeune",
    "name": "Premier Cru Zero Dosage",
    "family": "Extra Brut"
  },
  {
    "producer": "Jacquesson",
    "name": "Grande Vallée Extra- Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Jacquesson",
    "name": "de Blancs Premier Cru - Extra-Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Jacquesson",
    "name": "Rosé Premier Cru - Extra Brut",
    "family": "Rosé"
  },
  {
    "producer": "Jacquesson",
    "name": "Cru Mareuil sur Aÿ - Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Jacquesson",
    "name": "Cru Mareuil sur Aÿ - Brut Nature",
    "family": "Extra Brut"
  },
  {
    "producer": "R. Pouillon & Fils",
    "name": "Cuvée n° 749 Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "R. Pouillon & Fils",
    "name": "Dégorgement Tardif Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "R. Pouillon & Fils",
    "name": "Champ Caïn Avize Grand Cru",
    "family": "Firma della maison"
  },
  {
    "producer": "Francis Orban",
    "name": "Brut Réserve Vieilles Vignes",
    "family": "Firma della maison"
  },
  {
    "producer": "Francis Orban",
    "name": "Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Francis Orban",
    "name": "Rosé Brut",
    "family": "Rosé"
  },
  {
    "producer": "Francis Orban",
    "name": "Brut Prestige",
    "family": "Firma della maison"
  },
  {
    "producer": "Francis Orban",
    "name": "Les Taillardes Extra- Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Collard-Picard",
    "name": "Perpétuelle Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Collard-Picard",
    "name": "Racines Meunier Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Collard-Picard",
    "name": "Merveilles Rosé 1er Cru Extra Brut",
    "family": "Rosé"
  },
  {
    "producer": "Collard-Picard",
    "name": "Blancs Grand Cru Extra Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Collard-Picard",
    "name": "Essentiel Millésimé Zero Dosage",
    "family": "Extra Brut"
  },
  {
    "producer": "Collard-Picard",
    "name": "ADN Blanc de Noirs Extra Brut",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Collard-Picard",
    "name": "ADN Rosé Extra Brut",
    "family": "Rosé"
  },
  {
    "producer": "O. Belin",
    "name": "Bel Instant",
    "family": "Firma della maison"
  },
  {
    "producer": "O. Belin",
    "name": "Rosé des Fables",
    "family": "Rosé"
  },
  {
    "producer": "H. Goutorbe",
    "name": "Tradition Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "H. Goutorbe",
    "name": "1er cru Prestige",
    "family": "Firma della maison"
  },
  {
    "producer": "H. Goutorbe",
    "name": "Rosé Grand cru",
    "family": "Rosé"
  },
  {
    "producer": "H. Goutorbe",
    "name": "Millesime 2014",
    "family": "Millesimato"
  },
  {
    "producer": "Françoise Bedel",
    "name": "Extra Brut Cuvèe “Dis, Vin Secret”",
    "family": "Extra Brut"
  },
  {
    "producer": "Françoise Bedel",
    "name": "Brut Cuvée “Entre Ciel et Terre”",
    "family": "Firma della maison"
  },
  {
    "producer": "Apollonis Michel Loriot",
    "name": "Meunier",
    "family": "Firma della maison"
  },
  {
    "producer": "Apollonis Michel Loriot",
    "name": "Palmyre",
    "family": "Firma della maison"
  },
  {
    "producer": "Apollonis Michel Loriot",
    "name": "Composition Rose",
    "family": "Rosé"
  },
  {
    "producer": "Apollonis Michel Loriot",
    "name": "Souces du Flagot Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Apollonis Michel Loriot",
    "name": "Monodie",
    "family": "Firma della maison"
  },
  {
    "producer": "Demière",
    "name": "Allégory Or Blanc de Noirs Brut",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Demière",
    "name": "Es’Sens Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Demière",
    "name": "Es’Sens Brut Nature",
    "family": "Extra Brut"
  },
  {
    "producer": "Demière",
    "name": "Confiden’S assemblage Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Demière",
    "name": "Lysandre Millésime 2013 Premier Cru",
    "family": "Millesimato"
  },
  {
    "producer": "Demière",
    "name": "Lysandre Millésime 2009",
    "family": "Millesimato"
  },
  {
    "producer": "Francis Boulard & Fille",
    "name": "Les Murgiers Brut Nature",
    "family": "Extra Brut"
  },
  {
    "producer": "Francis Boulard & Fille",
    "name": "Les Rachais",
    "family": "Firma della maison"
  },
  {
    "producer": "Francis Boulard & Fille",
    "name": "Petraea V",
    "family": "Firma della maison"
  },
  {
    "producer": "Francis Boulard & Fille",
    "name": "Mailly Grand Cru",
    "family": "Firma della maison"
  },
  {
    "producer": "Francis Boulard & Fille",
    "name": "Blanc de Blancs Vieilles Vigne",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Jeaunaux-Robin",
    "name": "Eclats de Meulier Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Jeaunaux-Robin",
    "name": "Le Talus de Saint Prix Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Jeaunaux-Robin",
    "name": "Rosé de Saignee Extra Brut",
    "family": "Rosé"
  },
  {
    "producer": "Jeaunaux-Robin",
    "name": "Les Marnes Blanches Nature",
    "family": "Extra Brut"
  },
  {
    "producer": "Jeaunaux-Robin",
    "name": "Fil de Brume Brut Nature",
    "family": "Extra Brut"
  },
  {
    "producer": "Jeaunaux-Robin",
    "name": "Instinct Meunier",
    "family": "Firma della maison"
  },
  {
    "producer": "Durdon Bouval",
    "name": "Vinicella",
    "family": "Firma della maison"
  },
  {
    "producer": "Durdon Bouval",
    "name": "Les Sablons",
    "family": "Firma della maison"
  },
  {
    "producer": "Durdon Bouval",
    "name": "Candide",
    "family": "Firma della maison"
  },
  {
    "producer": "Durdon Bouval",
    "name": "Les Clos",
    "family": "Firma della maison"
  },
  {
    "producer": "Tribaut Schloesser",
    "name": "8 Terroirs Origine",
    "family": "Firma della maison"
  },
  {
    "producer": "Tribaut Schloesser",
    "name": "8 Terroirs Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Tribaut Schloesser",
    "name": "Terroirs Premier Cru",
    "family": "Firma della maison"
  },
  {
    "producer": "Tribaut Schloesser",
    "name": "Vallée du Brunet Blanc de Noirs",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Tribaut Schloesser",
    "name": "8 Terroirs Vintage 2015",
    "family": "Millesimato"
  },
  {
    "producer": "Tribaut Schloesser",
    "name": "Vallée du Brunet Blanc de Chardonnay",
    "family": "Firma della maison"
  },
  {
    "producer": "Tribaut Schloesser",
    "name": "Cuvée René",
    "family": "Firma della maison"
  },
  {
    "producer": "Villa Bon Accueil",
    "name": "Les Danaïdes",
    "family": "Firma della maison"
  },
  {
    "producer": "Villa Bon Accueil",
    "name": "Les Songes",
    "family": "Firma della maison"
  },
  {
    "producer": "Villa Bon Accueil",
    "name": "Les Parages",
    "family": "Firma della maison"
  },
  {
    "producer": "Paul Berthelot",
    "name": "Brut Cuvée de Reserve",
    "family": "Firma della maison"
  },
  {
    "producer": "Paul Berthelot",
    "name": "Extra-Brut Cuvée 1er Cru",
    "family": "Extra Brut"
  },
  {
    "producer": "Paul Berthelot",
    "name": "Brut Cuvée Blason D’or - Grand Cru",
    "family": "Firma della maison"
  },
  {
    "producer": "Paul Berthelot",
    "name": "Brut Cuvée Blanc de Noirs 1er Cru",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Paul Berthelot",
    "name": "Brut Nature Cuvée La Marquise",
    "family": "Extra Brut"
  },
  {
    "producer": "Autréau-Lasnot",
    "name": "Brut I.",
    "family": "Firma della maison"
  },
  {
    "producer": "Autréau-Lasnot",
    "name": "Blanc de Noirs III. Non dosè",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Autréau-Lasnot",
    "name": "Rosé V.",
    "family": "Rosé"
  },
  {
    "producer": "Autréau-Lasnot",
    "name": "Meunier VIII.",
    "family": "Firma della maison"
  },
  {
    "producer": "Dom Caudron",
    "name": "Réserve Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Dom Caudron",
    "name": "Rèserve Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Dom Caudron",
    "name": "Réserve de la Terre",
    "family": "Firma della maison"
  },
  {
    "producer": "Telmont",
    "name": "Brut “Prediction”",
    "family": "Firma della maison"
  },
  {
    "producer": "Telmont",
    "name": "Brut “Nature”",
    "family": "Extra Brut"
  },
  {
    "producer": "Telmont",
    "name": "Demi-Sec",
    "family": "Demi-Sec"
  },
  {
    "producer": "Telmont",
    "name": "Brut “Epicurienne” Vieilles Vignes",
    "family": "Firma della maison"
  },
  {
    "producer": "Telmont",
    "name": "Brut Cornalyne",
    "family": "Firma della maison"
  },
  {
    "producer": "Telmont",
    "name": "Brut “Sublimitè MPC” Coeur de Cuvee",
    "family": "Firma della maison"
  },
  {
    "producer": "Geoffroy",
    "name": "Expression",
    "family": "Firma della maison"
  },
  {
    "producer": "Geoffroy",
    "name": "Empreinte",
    "family": "Firma della maison"
  },
  {
    "producer": "Geoffroy",
    "name": "Rosé de Saignée",
    "family": "Rosé"
  },
  {
    "producer": "Henri Giraud",
    "name": "Esprit “G” Nature",
    "family": "Extra Brut"
  },
  {
    "producer": "Henri Giraud",
    "name": "Hommage au Pinot Noir",
    "family": "Firma della maison"
  },
  {
    "producer": "Henri Giraud",
    "name": "Blanc de Craie Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Julien Chopin",
    "name": "Carte Noire",
    "family": "Firma della maison"
  },
  {
    "producer": "Julien Chopin",
    "name": "Blanc de Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Julien Chopin",
    "name": "Blanc & Meuniers",
    "family": "Firma della maison"
  },
  {
    "producer": "Julien Chopin",
    "name": "Blanc de Noirs",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Julien Chopin",
    "name": "Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Julien Chopin",
    "name": "Grand Millésime",
    "family": "Millesimato"
  },
  {
    "producer": "Gonet Sulcova",
    "name": "Expression Initiale Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Gonet Sulcova",
    "name": "Expression de Montgueux Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Gonet Sulcova",
    "name": "Expression Chardonnay (Extra) Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Gonet Sulcova",
    "name": "Expression Oishi (Extra) Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Gonet Sulcova",
    "name": "Expression du Mesnil Grand Cru Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Gonet Sulcova",
    "name": "Grand Cru Brut Millésimé",
    "family": "Millesimato"
  },
  {
    "producer": "Gonet Sulcova",
    "name": "Grand Cru Extra Brut – Vieilles Vignes",
    "family": "Extra Brut"
  },
  {
    "producer": "Gonet Sulcova",
    "name": "Grand Cru Brut Millésimé",
    "family": "Millesimato"
  },
  {
    "producer": "Legras & Haas",
    "name": "Intuition",
    "family": "Firma della maison"
  },
  {
    "producer": "Legras & Haas",
    "name": "Intuition Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Legras & Haas",
    "name": "Les Visions Blanc des Blancs Grand Cru",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Legras & Haas",
    "name": "L’Evidence Blanc des Blancs Grand Cru",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Legras & Haas",
    "name": "Millésime Blanc des Blancs Grand Cru",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Legras & Haas",
    "name": "Les Sillons",
    "family": "Firma della maison"
  },
  {
    "producer": "Legras & Haas",
    "name": "Exigence N°11",
    "family": "Firma della maison"
  },
  {
    "producer": "Pascal Agrapart",
    "name": "7 Crus - Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Pascal Agrapart",
    "name": "Terroirs Blanc de Blancs Grand Cru - Extra Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Pascal Agrapart",
    "name": "Mineral Blanc de Blancs Grand Cru - Extra Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Guiborat",
    "name": "Grand Cru Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Guiborat",
    "name": "Brut Grand Cru Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Guiborat",
    "name": "Brut Grand Cru Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Guiborat",
    "name": "Extra Brut Grand Cru - Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Veuve Fourny & Fils",
    "name": "Blanc de Blancs Extra-Brut 1er Cru",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Veuve Fourny & Fils",
    "name": "Cuvée “R” Extra-Brut 1er Cru",
    "family": "Extra Brut"
  },
  {
    "producer": "Veuve Fourny & Fils",
    "name": "de Blancs Extra-Brut Premier Cru",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Veuve Fourny & Fils",
    "name": "Blancs Extra-Brut Premier Cru",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Veuve Fourny & Fils",
    "name": "Rosé Brut 1er Cru",
    "family": "Rosé"
  },
  {
    "producer": "Claude Cazals",
    "name": "Brut Carte Or Grand Cru",
    "family": "Firma della maison"
  },
  {
    "producer": "Claude Cazals",
    "name": "Brut Cuvee Rosé Grand Cru",
    "family": "Rosé"
  },
  {
    "producer": "Claude Cazals",
    "name": "Extra Brut Cuvee Vive Grand Cru",
    "family": "Extra Brut"
  },
  {
    "producer": "Claude Cazals",
    "name": "Extra Brut Millesimè Grand Cru",
    "family": "Extra Brut"
  },
  {
    "producer": "Claude Cazals",
    "name": "Extra Brut Cuvee Solera Grand Cru",
    "family": "Extra Brut"
  },
  {
    "producer": "Claude Cazals",
    "name": "Extra Brut Le Chapelle Du Clos Grand Cru",
    "family": "Extra Brut"
  },
  {
    "producer": "Albert Lebrun",
    "name": "1683 Origine",
    "family": "Firma della maison"
  },
  {
    "producer": "Albert Lebrun",
    "name": "1683",
    "family": "Firma della maison"
  },
  {
    "producer": "Albert Lebrun",
    "name": "1683 Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Albert Lebrun",
    "name": "CDB Grand Cru",
    "family": "Firma della maison"
  },
  {
    "producer": "Crété Chamberlin",
    "name": "Blanc de Noirs Extra Brut",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Crété Chamberlin",
    "name": "Premier Cru Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Crété Chamberlin",
    "name": "Grand Cru Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Crété Chamberlin",
    "name": "Bio Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Mallol",
    "name": "Brut Grand Cru Blanc de Blancs Infini",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Mallol",
    "name": "Cru Blanc de Blancs Amplitude",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Mallol",
    "name": "Extra Brut Grand Cru Les Gouttes D’or",
    "family": "Extra Brut"
  },
  {
    "producer": "Mallol",
    "name": "Blanc de Blancs Intégral Millésime",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Mallol",
    "name": "Blanc de Blancs Le Mont Aigu Millésime",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Mallol",
    "name": "Brut Rosé Grand Cru Coeur de Craie",
    "family": "Rosé"
  },
  {
    "producer": "Pierre Legras",
    "name": "Coste Beert Blanc de Blancs Grand Cru Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Pierre Legras",
    "name": "Monographie Blanc de Blancs Grand Cru Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Pierre Legras",
    "name": "Blancs Grand Cru Brut Nature",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Pierre Legras",
    "name": "Déa Matra Rosé Grand Cru Brut",
    "family": "Rosé"
  },
  {
    "producer": "Pierre Legras",
    "name": "Black Jackets Blanc de Noirs Millésimé",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Bolieu",
    "name": "Pépin de Vigne Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Bolieu",
    "name": "Cordon de Rosé Brut",
    "family": "Rosé"
  },
  {
    "producer": "Bolieu",
    "name": "Fleur de Craie Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Bolieu",
    "name": "Carnet de Léone Extra- Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Bolieu",
    "name": "L’Instant B Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Guy Charlemagne",
    "name": "Brut Classique",
    "family": "Firma della maison"
  },
  {
    "producer": "Guy Charlemagne",
    "name": "Blanc de Blancs Grande Réserve",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Guy Charlemagne",
    "name": "Blancs Grand Cru Extra- Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Colin",
    "name": "Alliance Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Colin",
    "name": "Castille Premier Cru Blanc de Blancs Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Colin",
    "name": "Castille Premier Cru Rosé Extra-Brut",
    "family": "Rosé"
  },
  {
    "producer": "Colin",
    "name": "Blanc de Blancs Extra- Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Colin",
    "name": "Brut Blanc de Blancs Millesimé",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Demière-Ansiot",
    "name": "Blanc de Blancs Grand Cru Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Demière-Ansiot",
    "name": "Blanc de Blancs Grand Cru Millésimé Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Demière-Ansiot",
    "name": "Grand Cru Millésimé Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Alberto Massucco",
    "name": "AMC 00",
    "family": "Firma della maison"
  },
  {
    "producer": "Alberto Massucco",
    "name": "AMC 02",
    "family": "Firma della maison"
  },
  {
    "producer": "Alberto Massucco",
    "name": "Alberto 2020",
    "family": "Millesimato"
  },
  {
    "producer": "Alberto Massucco",
    "name": "100%",
    "family": "Firma della maison"
  },
  {
    "producer": "Alberto Massucco",
    "name": "Le Mesnil",
    "family": "Firma della maison"
  },
  {
    "producer": "R&L Legras",
    "name": "Grand Cru Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "R&L Legras",
    "name": "Grand Cru Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "R&L Legras",
    "name": "Rosé Brut",
    "family": "Rosé"
  },
  {
    "producer": "R&L Legras",
    "name": "Presidence Vieilles Vignes",
    "family": "Firma della maison"
  },
  {
    "producer": "Louis Massing",
    "name": "Mineralis BdB Grand Cru Facon Nature",
    "family": "Extra Brut"
  },
  {
    "producer": "Louis Massing",
    "name": "Operis BdB Grand Cru Facon Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Louis Massing",
    "name": "Ornescence Rosé Premier Cru Facon Brut",
    "family": "Rosé"
  },
  {
    "producer": "Louis Massing",
    "name": "Arcanae BdB Grand Cru Brut Facon Solera",
    "family": "Firma della maison"
  },
  {
    "producer": "Encry Veuve Blanche Estelle",
    "name": "By the Glass Brut Grand Cru Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Encry Veuve Blanche Estelle",
    "name": "Naissance Brut Grand Cru Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Encry Veuve Blanche Estelle",
    "name": "Grand Cru Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Encry Veuve Blanche Estelle",
    "name": "Éclataire Grand Rosé Extra Brut Grand Cru",
    "family": "Rosé"
  },
  {
    "producer": "Encry Veuve Blanche Estelle",
    "name": "2017 Blanc de Blancs Zero Dosage",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Encry Veuve Blanche Estelle",
    "name": "Grand Cru Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Encry Veuve Blanche Estelle",
    "name": "Grand Cru Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Encry Veuve Blanche Estelle",
    "name": "Nuances Grand Rosé Brut Grand Cru",
    "family": "Rosé"
  },
  {
    "producer": "Encry Veuve Blanche Estelle",
    "name": "Rêverie Blanc et Noir Grand Cru",
    "family": "Firma della maison"
  },
  {
    "producer": "Nicolas Feuillatte",
    "name": "Limited edition 50th Celebration with box",
    "family": "Firma della maison"
  },
  {
    "producer": "Nicolas Feuillatte",
    "name": "Limited edition 50th Celebration without box",
    "family": "Firma della maison"
  },
  {
    "producer": "Nicolas Feuillatte",
    "name": "Réserve Exclusive Premier Cru Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Nicolas Feuillatte",
    "name": "Réserve Exclusive Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Nicolas Feuillatte",
    "name": "Millesimè Brut 2018",
    "family": "Millesimato"
  },
  {
    "producer": "Nicolas Feuillatte",
    "name": "Grand Cru - Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Nicolas Feuillatte",
    "name": "Grand Cru - Blanc de Noir",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Nicolas Feuillatte",
    "name": "Palmes D’Or Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "De Sousa",
    "name": "Brut “Tradition”",
    "family": "Firma della maison"
  },
  {
    "producer": "De Sousa",
    "name": "Blancs Grand Cru “Réserve”",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "De Sousa",
    "name": "Brut Rosé “Petite Mousse”",
    "family": "Rosé"
  },
  {
    "producer": "De Sousa",
    "name": "Extra Brut Grand Cru Cuvée “3A”",
    "family": "Extra Brut"
  },
  {
    "producer": "Pierre Gimonnet & Fils",
    "name": "Cuis Brut 1er Cru Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Pierre Gimonnet & Fils",
    "name": "Brut Extra 1er Cru",
    "family": "Firma della maison"
  },
  {
    "producer": "Pierre Gimonnet & Fils",
    "name": "Rosé de Blancs Brut 1er Cru",
    "family": "Rosé"
  },
  {
    "producer": "Pierre Gimonnet & Fils",
    "name": "Brut Gastronome 1er Cru 2020",
    "family": "Millesimato"
  },
  {
    "producer": "Pierre Gimonnet & Fils",
    "name": "Brut Nature 1er Cru 2020",
    "family": "Extra Brut"
  },
  {
    "producer": "Pierre Gimonnet & Fils",
    "name": "Oger Grand Cru",
    "family": "Firma della maison"
  },
  {
    "producer": "Bonnaire",
    "name": "Les Versants Réserve",
    "family": "Firma della maison"
  },
  {
    "producer": "Bonnaire",
    "name": "Terroirs Grand Cru Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Bonnaire",
    "name": "Cramant Vintage Grand Cru Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Bonnaire",
    "name": "‘Les Harengs’ Premier Cru Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Bonnaire",
    "name": "Grand Cru Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Paul Goerg",
    "name": "Blanc de Blanc Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Paul Goerg",
    "name": "Tradition Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Paul Goerg",
    "name": "Absolu Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Paul Goerg",
    "name": "Rosé Brut",
    "family": "Rosé"
  },
  {
    "producer": "Paul Goerg",
    "name": "Vintage",
    "family": "Firma della maison"
  },
  {
    "producer": "André Jacquart",
    "name": "Vertus Expérience Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "André Jacquart",
    "name": "Rosé Expérience Premier Cru Extra Brut",
    "family": "Rosé"
  },
  {
    "producer": "André Jacquart",
    "name": "Mesnil Expérience Blanc de Blancs - Extra Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "André Jacquart",
    "name": "Mesnil Expérience Blanc de Blancs - Brut Nature",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "André Jacquart",
    "name": "Solera Premier Brut Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "A. Bergère",
    "name": "Cuvèe Origine",
    "family": "Firma della maison"
  },
  {
    "producer": "A. Bergère",
    "name": "Cuvèe Terres Blanches",
    "family": "Firma della maison"
  },
  {
    "producer": "A. Bergère",
    "name": "Cuvèe Solera",
    "family": "Firma della maison"
  },
  {
    "producer": "A. Bergère",
    "name": "Cuvèe Rose",
    "family": "Rosé"
  },
  {
    "producer": "Larmandier-Bernier",
    "name": "Longitude Blanc de Blancs 1er Cru",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Franck Bonville",
    "name": "Brut Grand Cru Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Franck Bonville",
    "name": "Unisson Brut Grand Cru Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Franck Bonville",
    "name": "Grand Cru Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Franck Bonville",
    "name": "Millésimé Grand Cru Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Rodez",
    "name": "Les Crayeres",
    "family": "Firma della maison"
  },
  {
    "producer": "Rodez",
    "name": "Blanc de Noirs",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Rodez",
    "name": "Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Rodez",
    "name": "Rose Maceration",
    "family": "Rosé"
  },
  {
    "producer": "Rodez",
    "name": "Grands Vintages",
    "family": "Firma della maison"
  },
  {
    "producer": "Barnaut",
    "name": "Le Chemin de Goësses – Extra Brut Premier Cru",
    "family": "Extra Brut"
  },
  {
    "producer": "Barnaut",
    "name": "Grande Réserve – Brut Grand Cru",
    "family": "Firma della maison"
  },
  {
    "producer": "Barnaut",
    "name": "Blanc de Noirs – Brut Grand Cru",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Barnaut",
    "name": "Sélection – Brut Nature Grand Cru",
    "family": "Extra Brut"
  },
  {
    "producer": "Barnaut",
    "name": "Authentique Rosé – Brut Grand Cru",
    "family": "Rosé"
  },
  {
    "producer": "Barnaut",
    "name": "Millésime – Brut Grand Cru",
    "family": "Millesimato"
  },
  {
    "producer": "Paul Clouet",
    "name": "Selection Grand Reserve Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Paul Clouet",
    "name": "Rose Assemblage Brut",
    "family": "Rosé"
  },
  {
    "producer": "Paul Clouet",
    "name": "Cru Blanc de Noirs Extra Brut",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Crucifix Père & Fils",
    "name": "La Grande Reserve 1er Cru Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Crucifix Père & Fils",
    "name": "L’Incandescente Rosé 1er Cru Extra Brut",
    "family": "Rosé"
  },
  {
    "producer": "Crucifix Père & Fils",
    "name": "Stéréographe Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Crucifix Père & Fils",
    "name": "Blanc de Noirs Extra Brut",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Bertrand-Delespierre",
    "name": "LPM",
    "family": "Firma della maison"
  },
  {
    "producer": "Bertrand-Delespierre",
    "name": "Cuvee H",
    "family": "Firma della maison"
  },
  {
    "producer": "Bertrand-Delespierre",
    "name": "Cuvee M",
    "family": "Firma della maison"
  },
  {
    "producer": "Bertrand-Delespierre",
    "name": "NR Non Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Ullens - Domaine de Marzilly",
    "name": "Enfant de la Montagne",
    "family": "Firma della maison"
  },
  {
    "producer": "Ullens - Domaine de Marzilly",
    "name": "Enfant de la Montagne Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Ullens - Domaine de Marzilly",
    "name": "L’Âme 3 Cepages",
    "family": "Firma della maison"
  },
  {
    "producer": "Ullens - Domaine de Marzilly",
    "name": "Origine Croisées Millésimèe",
    "family": "Millesimato"
  },
  {
    "producer": "Ullens - Domaine de Marzilly",
    "name": "Saignée des Terres Amoureuses",
    "family": "Firma della maison"
  },
  {
    "producer": "Roger Coulon",
    "name": "Vindemia Premier Cru Brut Nature",
    "family": "Extra Brut"
  },
  {
    "producer": "Roger Coulon",
    "name": "Heri-Hodie Premier Cru Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Roger Coulon",
    "name": "L’Hommée Premier Cru Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Roger Coulon",
    "name": "Millésime Blanc de Noirs Extra-Brut",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Domaine Lagille",
    "name": "L’Inattendue Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Domaine Lagille",
    "name": "Fleur de Meunier Rosé Extra-Brut",
    "family": "Rosé"
  },
  {
    "producer": "Domaine Lagille",
    "name": "Ardys Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Domaine Lagille",
    "name": "Grande Réserve Extra- Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Coustheur-Bonnard",
    "name": "3 Cep’Ages Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Coustheur-Bonnard",
    "name": "Blanc de Blancs Extra- Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Coustheur-Bonnard",
    "name": "Blanc de Blancs Millésimé Extra-Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Huré Frères",
    "name": "Invitation Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Huré Frères",
    "name": "Insouciance Rosé Extra-Brut",
    "family": "Rosé"
  },
  {
    "producer": "Huré Frères",
    "name": "Instantanée Blanc de Noirs Extra-Brut",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Huré Frères",
    "name": "Inattendue Blanc de Blancs Extra-Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Delavenne",
    "name": "Original 60/40 Grand Cru Brut Tradition",
    "family": "Firma della maison"
  },
  {
    "producer": "Delavenne",
    "name": "Dom Basle Grand Cru Brut Réserve",
    "family": "Firma della maison"
  },
  {
    "producer": "Delavenne",
    "name": "Nature Grand Cru non Dosé",
    "family": "Extra Brut"
  },
  {
    "producer": "Delavenne",
    "name": "Rosé Marne Grand Cru Brut",
    "family": "Rosé"
  },
  {
    "producer": "Delavenne",
    "name": "Lumière Blanc de Blancs Grand Cru Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Delavenne",
    "name": "Balbiacus Grand Cru Blanc de Noirs Millésimé",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Jacques Rousseaux",
    "name": "Tradition Grand Cru Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Jacques Rousseaux",
    "name": "Rosé de Saignée Grand Cru Extra-Brut",
    "family": "Rosé"
  },
  {
    "producer": "Jacques Rousseaux",
    "name": "Cuvée de Réserve Grand Cru Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Jacques Rousseaux",
    "name": "Noir de Vigne Grand Cru Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Jacques Rousseaux",
    "name": "L’Autre R Grand Cru Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Secondé-Simon",
    "name": "Cuvée Anna Giulia",
    "family": "Firma della maison"
  },
  {
    "producer": "Secondé-Simon",
    "name": "Cuvée Emilia Maria",
    "family": "Firma della maison"
  },
  {
    "producer": "Secondé-Simon",
    "name": "Cuvée Eve Angeline",
    "family": "Firma della maison"
  },
  {
    "producer": "Perondé",
    "name": "Nuance Grand Cru Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Perondé",
    "name": "Variation Grand Cru Rosé Brut",
    "family": "Rosé"
  },
  {
    "producer": "Perondé",
    "name": "Mélodie Grand Cru Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Perondé",
    "name": "Euphonie Grand Cru Millésimé Brut",
    "family": "Millesimato"
  },
  {
    "producer": "Perondé",
    "name": "Arabesque Grand Cru Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Sylvie Moreau",
    "name": "Racines",
    "family": "Firma della maison"
  },
  {
    "producer": "Sylvie Moreau",
    "name": "Carrè Or Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Sylvie Moreau",
    "name": "Colection Terroir Meunier",
    "family": "Firma della maison"
  },
  {
    "producer": "Sylvie Moreau",
    "name": "Edition n°6 Collection privée",
    "family": "Firma della maison"
  },
  {
    "producer": "Louis Brochet",
    "name": "Héritage Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Louis Brochet",
    "name": "Héritage Brut Nature",
    "family": "Extra Brut"
  },
  {
    "producer": "Louis Brochet",
    "name": "Héritage Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Louis Brochet",
    "name": "Alain",
    "family": "Firma della maison"
  },
  {
    "producer": "Louis Brochet",
    "name": "Les Plantes",
    "family": "Firma della maison"
  },
  {
    "producer": "Louis Brochet",
    "name": "La Jacquessonne",
    "family": "Firma della maison"
  },
  {
    "producer": "Louis Brochet",
    "name": "Les Chaillots",
    "family": "Firma della maison"
  },
  {
    "producer": "Louis Brochet",
    "name": "HBH",
    "family": "Firma della maison"
  },
  {
    "producer": "Bonnevie Bocart",
    "name": "Meunier",
    "family": "Firma della maison"
  },
  {
    "producer": "Bonnevie Bocart",
    "name": "Millèsime 2012",
    "family": "Millesimato"
  },
  {
    "producer": "Bonnevie Bocart",
    "name": "Rosé de Saignée",
    "family": "Rosé"
  },
  {
    "producer": "Bonnevie Bocart",
    "name": "Fut de Chene 2012",
    "family": "Millesimato"
  },
  {
    "producer": "Jean Philippe Trousset",
    "name": "Crème",
    "family": "Firma della maison"
  },
  {
    "producer": "Jean Philippe Trousset",
    "name": "Le Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Jean Philippe Trousset",
    "name": "Millésime 2016",
    "family": "Millesimato"
  },
  {
    "producer": "Jean Philippe Trousset",
    "name": "Absolu",
    "family": "Firma della maison"
  },
  {
    "producer": "Jean Philippe Trousset",
    "name": "Nuit Blanche",
    "family": "Firma della maison"
  },
  {
    "producer": "Alain Vesselle",
    "name": "Cuvée Brut Tradition",
    "family": "Firma della maison"
  },
  {
    "producer": "Alain Vesselle",
    "name": "Cuvée Antoine Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Alain Vesselle",
    "name": "Cuvée Guillaume Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Alain Vesselle",
    "name": "Cuvée St Éloi Grand Cru",
    "family": "Firma della maison"
  },
  {
    "producer": "Alain Vesselle",
    "name": "Rosé St Eloi Grand Cru",
    "family": "Rosé"
  },
  {
    "producer": "Mailly Grand Cru",
    "name": "L’Intemporelle Millésimé Grand Cru",
    "family": "Millesimato"
  },
  {
    "producer": "Mailly Grand Cru",
    "name": "L’Intemporelle Millésimé Grand Cru",
    "family": "Millesimato"
  },
  {
    "producer": "Mailly Grand Cru",
    "name": "Blanc de Pinot Noir",
    "family": "Firma della maison"
  },
  {
    "producer": "Mailly Grand Cru",
    "name": "Brut Réserve",
    "family": "Firma della maison"
  },
  {
    "producer": "Mailly Grand Cru",
    "name": "Rosé de Mailly",
    "family": "Rosé"
  },
  {
    "producer": "Mailly Grand Cru",
    "name": "Extra Brut Millésimé",
    "family": "Extra Brut"
  },
  {
    "producer": "Mailly Grand Cru",
    "name": "Extra Brut Millésimé",
    "family": "Extra Brut"
  },
  {
    "producer": "Mailly Grand Cru",
    "name": "Les Échansons",
    "family": "Firma della maison"
  },
  {
    "producer": "Maxime Blin",
    "name": "Carte Blanche",
    "family": "Firma della maison"
  },
  {
    "producer": "Maxime Blin",
    "name": "Son Naturel Optimiste",
    "family": "Extra Brut"
  },
  {
    "producer": "Maxime Blin",
    "name": "Grande Tradition",
    "family": "Firma della maison"
  },
  {
    "producer": "Maxime Blin",
    "name": "Evanescence",
    "family": "Firma della maison"
  },
  {
    "producer": "Maxime Blin",
    "name": "Cuvée le Present",
    "family": "Firma della maison"
  },
  {
    "producer": "Autréau de Champillon",
    "name": "Premier Cru Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Autréau de Champillon",
    "name": "Grand Cru Blanc de Blancs Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Autréau de Champillon",
    "name": "Gran Cru Brut Réserve",
    "family": "Firma della maison"
  },
  {
    "producer": "Alexandre Penet e Penet-Chardonnet",
    "name": "Lieu Dit Blanc de Noir Grand Cru",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Alexandre Penet e Penet-Chardonnet",
    "name": "Millesime 2018 Grand Cru",
    "family": "Millesimato"
  },
  {
    "producer": "Alexandre Penet e Penet-Chardonnet",
    "name": "Nature Grand Cru",
    "family": "Extra Brut"
  },
  {
    "producer": "Alexandre Penet e Penet-Chardonnet",
    "name": "Vielle Reserve Grand Cru",
    "family": "Firma della maison"
  },
  {
    "producer": "Marie Angèle",
    "name": "Grand Cru Réserve Extra Brut Hypothesis",
    "family": "Extra Brut"
  },
  {
    "producer": "Marie Angèle",
    "name": "Noirs Brut Nature Hypothesis",
    "family": "Extra Brut"
  },
  {
    "producer": "Marie Angèle",
    "name": "Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Lafalise Froissart",
    "name": "Brut Tradition",
    "family": "Firma della maison"
  },
  {
    "producer": "Lafalise Froissart",
    "name": "Grand Cru Verzenay",
    "family": "Firma della maison"
  },
  {
    "producer": "Lafalise Froissart",
    "name": "791 1er Cru Dizy “Terres Rouges”",
    "family": "Firma della maison"
  },
  {
    "producer": "Lafalise Froissart",
    "name": "Cuvée Extra-Brut 045",
    "family": "Extra Brut"
  },
  {
    "producer": "Bonvalet",
    "name": "Épopée Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Bonvalet",
    "name": "Kosmos",
    "family": "Firma della maison"
  },
  {
    "producer": "Bonvalet",
    "name": "Marpésia",
    "family": "Firma della maison"
  },
  {
    "producer": "Bonvalet",
    "name": "Brut Supreme",
    "family": "Firma della maison"
  },
  {
    "producer": "Bonvalet",
    "name": "Blanc Supreme",
    "family": "Firma della maison"
  },
  {
    "producer": "Bonvalet",
    "name": "Amas Stellaire 2023",
    "family": "Millesimato"
  },
  {
    "producer": "Paul Bara",
    "name": "Tradition",
    "family": "Firma della maison"
  },
  {
    "producer": "Paul Bara",
    "name": "Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Paul Bara",
    "name": "Grande Réserve",
    "family": "Firma della maison"
  },
  {
    "producer": "Paul Bara",
    "name": "Vintage 2018",
    "family": "Millesimato"
  },
  {
    "producer": "Martin des Orsyn",
    "name": "Brut Reserve Grand Cru",
    "family": "Firma della maison"
  },
  {
    "producer": "Martin des Orsyn",
    "name": "Grand Rosé de Bouzy Grand Cru",
    "family": "Rosé"
  },
  {
    "producer": "Martin des Orsyn",
    "name": "Brut Millésime Grand Cru",
    "family": "Millesimato"
  },
  {
    "producer": "Martin des Orsyn",
    "name": "Extra Brut Grand Cru",
    "family": "Extra Brut"
  },
  {
    "producer": "Martin des Orsyn",
    "name": "Special Club Grand Cru",
    "family": "Firma della maison"
  },
  {
    "producer": "Martin des Orsyn",
    "name": "Comtesse Marie de France",
    "family": "Firma della maison"
  },
  {
    "producer": "Gonet-Medeville",
    "name": "Brut Tradition 1er Cru",
    "family": "Firma della maison"
  },
  {
    "producer": "Gonet-Medeville",
    "name": "Brut Blanc de Noirs 1er Cru",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Gonet-Medeville",
    "name": "Extra-Brut Rosé Grand Cru",
    "family": "Rosé"
  },
  {
    "producer": "Gonet-Medeville",
    "name": "Ambonnay Grand Cru Rouge",
    "family": "Firma della maison"
  },
  {
    "producer": "De Vilmont",
    "name": "Brut Grande Réserve Premier Cru",
    "family": "Firma della maison"
  },
  {
    "producer": "De Vilmont",
    "name": "Brut Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "De Vilmont",
    "name": "Cuvée Prestige Brut Millésime",
    "family": "Millesimato"
  },
  {
    "producer": "De Vilmont",
    "name": "Cuvée Prestige Brut Rosé Millésime",
    "family": "Rosé"
  },
  {
    "producer": "De Vilmont",
    "name": "Cuvée Prestige Brut Rosé Millésime Magnum",
    "family": "Rosé"
  },
  {
    "producer": "De Vilmont",
    "name": "Brut Grande Réserve Magnum",
    "family": "Firma della maison"
  },
  {
    "producer": "Monmarthe",
    "name": "Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Monmarthe",
    "name": "Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Heidsieck Héritage",
    "name": "Brut Secret de Famille 1er Cru",
    "family": "Firma della maison"
  },
  {
    "producer": "Heidsieck Héritage",
    "name": "Brut Les Grimpants Blanc de Noirs 1er Cru",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Heidsieck Héritage",
    "name": "Extra-Brut Le Nid d'Agace 1er Cru",
    "family": "Extra Brut"
  },
  {
    "producer": "Heidsieck Héritage",
    "name": "le Moulin à Vent Millesime 1er Cru",
    "family": "Millesimato"
  },
  {
    "producer": "G.H. Mumm",
    "name": "Cuvée 4.5",
    "family": "Firma della maison"
  },
  {
    "producer": "G.H. Mumm",
    "name": "Blanc de Noir",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "G.H. Mumm",
    "name": "Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "G.H. Mumm",
    "name": "Rosè Foujita",
    "family": "Rosé"
  },
  {
    "producer": "Deutz",
    "name": "Collection 246",
    "family": "Firma della maison"
  },
  {
    "producer": "Deutz",
    "name": "Rose 2018",
    "family": "Rosé"
  },
  {
    "producer": "Deutz",
    "name": "Blanc de Blancs 2019",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Deutz",
    "name": "Vintage 2018",
    "family": "Millesimato"
  },
  {
    "producer": "Louis Roederer",
    "name": "Brut Classic",
    "family": "Firma della maison"
  },
  {
    "producer": "Louis Roederer",
    "name": "Brut Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Louis Roederer",
    "name": "Brut Vintage 2019",
    "family": "Millesimato"
  },
  {
    "producer": "Louis Roederer",
    "name": "Brut Rosé Vintage 2019",
    "family": "Rosé"
  },
  {
    "producer": "Louis Roederer",
    "name": "Blanc de Blancs 2020",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Bruno Paillard",
    "name": "Extra Brut Première Cuvée",
    "family": "Extra Brut"
  },
  {
    "producer": "Bruno Paillard",
    "name": "Extra-Brut Rosé Première Cuvée",
    "family": "Rosé"
  },
  {
    "producer": "Bruno Paillard",
    "name": "Extra Brut Blanc de Blancs Grand Cru",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Bruno Paillard",
    "name": "Dosage: Zero",
    "family": "Firma della maison"
  },
  {
    "producer": "Mandois",
    "name": "Brut Origine",
    "family": "Firma della maison"
  },
  {
    "producer": "Mandois",
    "name": "Non Dosé Origine",
    "family": "Firma della maison"
  },
  {
    "producer": "Mandois",
    "name": "Brut Blanc de Blancs Millésime",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Mandois",
    "name": "Brut Victor Rosé Millésime",
    "family": "Rosé"
  },
  {
    "producer": "Joseph Perrier",
    "name": "Cuvèe Royale Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Joseph Perrier",
    "name": "Cuvèe Royale Brut Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Joseph Perrier",
    "name": "Cuvée Royale Brut Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Joseph Perrier",
    "name": "Cuvèe Royale Brut Nature",
    "family": "Extra Brut"
  },
  {
    "producer": "Joseph Perrier",
    "name": "Cuvée Royale Vintage",
    "family": "Firma della maison"
  },
  {
    "producer": "Joseph Perrier",
    "name": "Cote à Bras Blanc de Noirs Brut Nature",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Joseph Perrier",
    "name": "Le Ciergelot Blanc de Noirs Brut Nature",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Joseph Perrier",
    "name": "Cuvèe Josephine",
    "family": "Firma della maison"
  },
  {
    "producer": "Joseph Perrier",
    "name": "Les Chalmonts Blanc de Blancs Extra Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Piper-Heidsieck",
    "name": "Essentiel Cuvée Réservée",
    "family": "Firma della maison"
  },
  {
    "producer": "Piper-Heidsieck",
    "name": "Essentiel Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Piper-Heidsieck",
    "name": "Essentiel Blancs de Noir",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Piper-Heidsieck",
    "name": "Brut Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Piper-Heidsieck",
    "name": "Vintage 2018",
    "family": "Millesimato"
  },
  {
    "producer": "Taittinger",
    "name": "Brut Prestige",
    "family": "Firma della maison"
  },
  {
    "producer": "Taittinger",
    "name": "Prestige Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Virginie T.",
    "name": "Brut Transmission",
    "family": "Firma della maison"
  },
  {
    "producer": "Virginie T.",
    "name": "Extra Brut Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Virginie T.",
    "name": "Brut Nature Vintage",
    "family": "Extra Brut"
  },
  {
    "producer": "Virginie T.",
    "name": "Extra Brut Blanc de Noirs",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Ayala",
    "name": "Brut Majeur",
    "family": "Firma della maison"
  },
  {
    "producer": "Ayala",
    "name": "Rosé Majeur",
    "family": "Rosé"
  },
  {
    "producer": "Ayala",
    "name": "Brut Nature",
    "family": "Extra Brut"
  },
  {
    "producer": "Ayala",
    "name": "Le Blanc de Blancs A/19",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Ayala",
    "name": "Collection N°18",
    "family": "Firma della maison"
  },
  {
    "producer": "Abelé 1757",
    "name": "Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Abelé 1757",
    "name": "Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Abelé 1757",
    "name": "Brut Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Bollinger",
    "name": "Special Cuvée",
    "family": "Firma della maison"
  },
  {
    "producer": "Bollinger",
    "name": "La Grande Année",
    "family": "Firma della maison"
  },
  {
    "producer": "Bollinger",
    "name": "La Grande Année Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Bollinger",
    "name": "PN AYC21",
    "family": "Firma della maison"
  },
  {
    "producer": "Bollinger",
    "name": "B16",
    "family": "Firma della maison"
  },
  {
    "producer": "Leclerc Briant",
    "name": "Reserve",
    "family": "Firma della maison"
  },
  {
    "producer": "Leclerc Briant",
    "name": "Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Leclerc Briant",
    "name": "Millesime",
    "family": "Millesimato"
  },
  {
    "producer": "Leclerc Briant",
    "name": "Les Trois Clochers",
    "family": "Firma della maison"
  },
  {
    "producer": "Leclerc Briant",
    "name": "Cuvee Abyss",
    "family": "Firma della maison"
  },
  {
    "producer": "de Venoge",
    "name": "Cordon Bleu Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "de Venoge",
    "name": "Cordon Bleu Rosé Brut",
    "family": "Rosé"
  },
  {
    "producer": "de Venoge",
    "name": "Princes Brut 4th edition",
    "family": "Firma della maison"
  },
  {
    "producer": "de Venoge",
    "name": "Princes Blanc de Blancs Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "de Venoge",
    "name": "Princes Blanc de Noirs Brut",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "de Venoge",
    "name": "Princes Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "de Venoge",
    "name": "Princesse Rosé Brut",
    "family": "Rosé"
  },
  {
    "producer": "Palmer & Co",
    "name": "La Réserve",
    "family": "Firma della maison"
  },
  {
    "producer": "Palmer & Co",
    "name": "La Réserve Nature",
    "family": "Extra Brut"
  },
  {
    "producer": "Palmer & Co",
    "name": "Rosé Solera",
    "family": "Rosé"
  },
  {
    "producer": "Palmer & Co",
    "name": "Blancs de Blancs 2018",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Palmer & Co",
    "name": "Grands Terroirs",
    "family": "Firma della maison"
  },
  {
    "producer": "Jacquart",
    "name": "Mosaique Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Jacquart",
    "name": "Signanture Extra-Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Jacquart",
    "name": "Signature Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Jacquart",
    "name": "Signauture Rosè",
    "family": "Rosé"
  },
  {
    "producer": "Jacquart",
    "name": "Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Jacquart",
    "name": "Alpha Blanc",
    "family": "Firma della maison"
  },
  {
    "producer": "Jacquart",
    "name": "Alpha Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Besserat de Bellefon",
    "name": "Bleu Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Besserat de Bellefon",
    "name": "Rosé Brut",
    "family": "Rosé"
  },
  {
    "producer": "Besserat de Bellefon",
    "name": "Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Besserat de Bellefon",
    "name": "Blanc de Noirs GC",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Besserat de Bellefon",
    "name": "Triple B",
    "family": "Firma della maison"
  },
  {
    "producer": "Besserat de Bellefon",
    "name": "Cuveè des Moines",
    "family": "Firma della maison"
  },
  {
    "producer": "Collet",
    "name": "Art decò Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Collet",
    "name": "Esprit Couture",
    "family": "Firma della maison"
  },
  {
    "producer": "Collet",
    "name": "Art Decò Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Collet",
    "name": "Blanc de Blancs Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Collet",
    "name": "Rosé Brut",
    "family": "Rosé"
  },
  {
    "producer": "Collet",
    "name": "Blanc de Noirs Brut",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Collet",
    "name": "Origine Demi-Sec",
    "family": "Demi-Sec"
  },
  {
    "producer": "Collet",
    "name": "Millèsime",
    "family": "Millesimato"
  },
  {
    "producer": "Collet",
    "name": "Aÿ Grand Cru",
    "family": "Firma della maison"
  },
  {
    "producer": "Collet",
    "name": "Origine Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Henriot",
    "name": "Brut Souverain",
    "family": "Firma della maison"
  },
  {
    "producer": "Henriot",
    "name": "Blanc Souverain",
    "family": "Firma della maison"
  },
  {
    "producer": "Henriot",
    "name": "Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Henriot",
    "name": "Millésime 2015",
    "family": "Millesimato"
  },
  {
    "producer": "Henriot",
    "name": "L’Inattendue 2018",
    "family": "Millesimato"
  },
  {
    "producer": "Henriot",
    "name": "Cuvée des Enchanteleurs 2015",
    "family": "Millesimato"
  },
  {
    "producer": "Vollereaux",
    "name": "Brut Réserve",
    "family": "Firma della maison"
  },
  {
    "producer": "Vollereaux",
    "name": "Blanc de Blanc Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Vollereaux",
    "name": "Rosé de Saignee Brut",
    "family": "Rosé"
  },
  {
    "producer": "Vollereaux",
    "name": "Brut Nature",
    "family": "Extra Brut"
  },
  {
    "producer": "Pannier",
    "name": "Sélection Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Pannier",
    "name": "Exact Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Pannier",
    "name": "Rosé Brut",
    "family": "Rosé"
  },
  {
    "producer": "Pannier",
    "name": "Vintage Brut 2018",
    "family": "Millesimato"
  },
  {
    "producer": "Pannier",
    "name": "Blanc de Noirs Brut",
    "family": "Blanc de Noirs"
  },
  {
    "producer": "Pannier",
    "name": "Blanc de Blancs Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Pannier",
    "name": "Egérie Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Pannier",
    "name": "L’Ode au Meunier Venteuil Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Pannier",
    "name": "L’Ode au Meunier Leuvrigny Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Pannier",
    "name": "Blanc Velours Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Pol Roger",
    "name": "Brut Réserve",
    "family": "Firma della maison"
  },
  {
    "producer": "Pol Roger",
    "name": "Rosé Réserve Brut",
    "family": "Rosé"
  },
  {
    "producer": "Pol Roger",
    "name": "Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Pol Roger",
    "name": "Brut Millesimé",
    "family": "Millesimato"
  },
  {
    "producer": "Pol Roger",
    "name": "Blanc des Millénaires",
    "family": "Firma della maison"
  },
  {
    "producer": "Charles Heidsieck",
    "name": "Brut Réserve",
    "family": "Firma della maison"
  },
  {
    "producer": "Charles Heidsieck",
    "name": "Pure",
    "family": "Firma della maison"
  },
  {
    "producer": "Charles Heidsieck",
    "name": "Brut Vintage",
    "family": "Firma della maison"
  },
  {
    "producer": "Château de Bligny",
    "name": "Brut Grande Réserve",
    "family": "Firma della maison"
  },
  {
    "producer": "Château de Bligny",
    "name": "Brut Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Château de Bligny",
    "name": "Grand Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Château de Bligny",
    "name": "Clos du Chateau “7 cepages”",
    "family": "Firma della maison"
  },
  {
    "producer": "Tsarine",
    "name": "Brut",
    "family": "Firma della maison"
  },
  {
    "producer": "Tsarine",
    "name": "Rosé",
    "family": "Rosé"
  },
  {
    "producer": "Tsarine",
    "name": "Extra Brut",
    "family": "Extra Brut"
  },
  {
    "producer": "Tsarine",
    "name": "Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Billecart-Salmon",
    "name": "Les Grands Blancs Extra Brut",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Billecart-Salmon",
    "name": "Réserve Perpétuelle",
    "family": "Firma della maison"
  },
  {
    "producer": "Billecart-Salmon",
    "name": "Mesnil Millésime",
    "family": "Millesimato"
  },
  {
    "producer": "Billecart-Salmon",
    "name": "Rosé Les Romarines",
    "family": "Rosé"
  },
  {
    "producer": "Robert Moncuit",
    "name": "Le Reserve",
    "family": "Firma della maison"
  },
  {
    "producer": "Robert Moncuit",
    "name": "Le Rose",
    "family": "Rosé"
  },
  {
    "producer": "Robert Moncuit",
    "name": "Le Blanc de Blancs",
    "family": "Blanc de Blancs"
  },
  {
    "producer": "Robert Moncuit",
    "name": "Charles Le Bel Brut Inspiration 1818",
    "family": "Firma della maison"
  }
];
