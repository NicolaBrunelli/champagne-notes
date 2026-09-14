export type WineFamily = 'Firma della maison' | 'Rosé' | 'Millesimato' | 'Prestige' | 'Parcella' | 'Stile libero' | 'Extra Brut' | 'Blanc de Blancs' | 'Blanc de Noirs' | 'Demi-Sec' | 'Bio';

export type CatalogWine = {
  producer: string;
  name: string;
  family: WineFamily;
};

/**
 * Archivio editoriale delle cuvée. È separato dalle degustazioni degli utenti:
 * una stessa referenza può quindi raccogliere nel tempo molte annotazioni.
 * La prima selezione riunisce le Maison già verificate; le annate specifiche
 * vengono aggiunte solo quando indicate dal produttore.
 */
export const catalogWines: CatalogWine[] = [
  { producer: 'Moët & Chandon', name: 'Brut Impérial', family: 'Firma della maison' },
  { producer: 'Moët & Chandon', name: 'Rosé Impérial', family: 'Rosé' },
  { producer: 'Moët & Chandon', name: 'Ice Impérial', family: 'Stile libero' },
  { producer: 'Moët & Chandon', name: 'Ice Impérial Rosé', family: 'Rosé' },
  { producer: 'Moët & Chandon', name: 'Nectar Impérial', family: 'Stile libero' },
  { producer: 'Moët & Chandon', name: 'Nectar Impérial Rosé', family: 'Rosé' },
  { producer: 'Moët & Chandon', name: 'Grand Vintage', family: 'Millesimato' },
  { producer: 'Moët & Chandon', name: 'Grand Vintage Rosé', family: 'Rosé' },
  { producer: 'Moët & Chandon', name: 'Collection Impériale Création N°1', family: 'Prestige' },

  { producer: 'Veuve Clicquot', name: 'Brut Yellow Label', family: 'Firma della maison' },
  { producer: 'Veuve Clicquot', name: 'Brut Rosé', family: 'Rosé' },
  { producer: 'Veuve Clicquot', name: 'Vintage', family: 'Millesimato' },
  { producer: 'Veuve Clicquot', name: 'La Grande Dame', family: 'Prestige' },
  { producer: 'Veuve Clicquot', name: 'La Grande Dame Rosé', family: 'Rosé' },

  { producer: 'Krug', name: 'Grande Cuvée', family: 'Firma della maison' },
  { producer: 'Krug', name: 'Rosé', family: 'Rosé' },
  { producer: 'Krug', name: 'Vintage', family: 'Millesimato' },
  { producer: 'Krug', name: 'Clos du Mesnil', family: 'Parcella' },
  { producer: 'Krug', name: 'Clos d’Ambonnay', family: 'Parcella' },

  { producer: 'Ruinart', name: 'R de Ruinart', family: 'Firma della maison' },
  { producer: 'Ruinart', name: 'Blanc de Blancs', family: 'Firma della maison' },
  { producer: 'Ruinart', name: 'Rosé', family: 'Rosé' },
  { producer: 'Ruinart', name: 'Blanc Singulier', family: 'Millesimato' },
  { producer: 'Ruinart', name: 'Dom Ruinart Blanc de Blancs', family: 'Prestige' },
  { producer: 'Ruinart', name: 'Dom Ruinart Rosé', family: 'Rosé' },

  { producer: 'Taittinger', name: 'Brut Réserve', family: 'Firma della maison' },
  { producer: 'Taittinger', name: 'Prestige Rosé', family: 'Rosé' },
  { producer: 'Taittinger', name: 'Prélude Grands Crus', family: 'Prestige' },
  { producer: 'Taittinger', name: 'Les Folies de la Marquetterie', family: 'Parcella' },
  { producer: 'Taittinger', name: 'Nocturne', family: 'Stile libero' },
  { producer: 'Taittinger', name: 'Comtes de Champagne Blanc de Blancs', family: 'Prestige' },
  { producer: 'Taittinger', name: 'Comtes de Champagne Rosé', family: 'Rosé' },

  { producer: 'Bollinger', name: 'Special Cuvée', family: 'Firma della maison' },
  { producer: 'Bollinger', name: 'Bollinger Rosé', family: 'Rosé' },
  { producer: 'Bollinger', name: 'Bollinger PN', family: 'Millesimato' },
  { producer: 'Bollinger', name: 'La Grande Année', family: 'Millesimato' },
  { producer: 'Bollinger', name: 'La Grande Année Rosé', family: 'Rosé' },
  { producer: 'Bollinger', name: 'Bollinger R.D.', family: 'Prestige' },
  { producer: 'Bollinger', name: 'Vieilles Vignes Françaises', family: 'Prestige' },
  { producer: 'Bollinger', name: 'La Côte aux Enfants Champagne', family: 'Parcella' },

  { producer: 'Louis Roederer', name: 'Collection', family: 'Firma della maison' },
  { producer: 'Louis Roederer', name: 'Blanc de Blancs', family: 'Millesimato' },
  { producer: 'Louis Roederer', name: 'Brut Nature', family: 'Stile libero' },
  { producer: 'Louis Roederer', name: 'Rosé', family: 'Rosé' },
  { producer: 'Louis Roederer', name: 'Vintage', family: 'Millesimato' },
  { producer: 'Louis Roederer', name: 'Cristal', family: 'Prestige' },
  { producer: 'Louis Roederer', name: 'Cristal Rosé', family: 'Rosé' },

  { producer: 'Charles Heidsieck', name: 'Brut Réserve', family: 'Firma della maison' },
  { producer: 'Charles Heidsieck', name: 'Rosé Réserve', family: 'Rosé' },
  { producer: 'Charles Heidsieck', name: 'Blanc de Blancs', family: 'Blanc de Blancs' },
  { producer: 'Charles Heidsieck', name: 'Brut Millésimé', family: 'Millesimato' },
  { producer: 'Charles Heidsieck', name: 'Blanc des Millénaires', family: 'Prestige' },
  { producer: 'Charles Heidsieck', name: 'Champagne Charlie', family: 'Prestige' },

  { producer: 'Piper-Heidsieck', name: 'Cuvée Brut', family: 'Firma della maison' },
  { producer: 'Piper-Heidsieck', name: 'Rosé Sauvage', family: 'Rosé' },
  { producer: 'Piper-Heidsieck', name: 'Essentiel Extra Brut', family: 'Extra Brut' },
  { producer: 'Piper-Heidsieck', name: 'Essentiel Blanc de Blancs', family: 'Blanc de Blancs' },
  { producer: 'Piper-Heidsieck', name: 'Rare', family: 'Prestige' },
  { producer: 'Piper-Heidsieck', name: 'Rare Rosé Millésime', family: 'Rosé' },

  { producer: 'Billecart-Salmon', name: 'Le Réserve', family: 'Firma della maison' },
  { producer: 'Billecart-Salmon', name: 'Le Rosé', family: 'Rosé' },
  { producer: 'Billecart-Salmon', name: 'Le Blanc de Blancs', family: 'Blanc de Blancs' },
  { producer: 'Billecart-Salmon', name: 'Brut Nature', family: 'Extra Brut' },
  { producer: 'Billecart-Salmon', name: 'Le Sous Bois', family: 'Parcella' },
  { producer: 'Billecart-Salmon', name: 'Vintage', family: 'Millesimato' },
  { producer: 'Billecart-Salmon', name: 'Cuvée Nicolas François', family: 'Prestige' },
  { producer: 'Billecart-Salmon', name: 'Élisabeth Salmon', family: 'Rosé' },
  { producer: 'Billecart-Salmon', name: 'Louis Salmon', family: 'Blanc de Blancs' },
  { producer: 'Billecart-Salmon', name: 'Clos Saint-Hilaire', family: 'Parcella' },

  { producer: 'Pol Roger', name: 'Brut Réserve', family: 'Firma della maison' },
  { producer: 'Pol Roger', name: 'Pure Extra Brut', family: 'Extra Brut' },
  { producer: 'Pol Roger', name: 'Rich Demi-Sec', family: 'Demi-Sec' },
  { producer: 'Pol Roger', name: 'Brut Vintage', family: 'Millesimato' },
  { producer: 'Pol Roger', name: 'Blanc de Blancs Vintage', family: 'Blanc de Blancs' },
  { producer: 'Pol Roger', name: 'Rosé Vintage', family: 'Rosé' },
  { producer: 'Pol Roger', name: 'Cuvée Sir Winston Churchill', family: 'Prestige' },

  { producer: 'Deutz', name: 'Brut Classic', family: 'Firma della maison' },
  { producer: 'Deutz', name: 'Brut Rosé', family: 'Rosé' },
  { producer: 'Deutz', name: 'Brut Millésimé', family: 'Millesimato' },
  { producer: 'Deutz', name: 'Brut Millésimé Rosé', family: 'Rosé' },
  { producer: 'Deutz', name: 'Blanc de Blancs', family: 'Blanc de Blancs' },
  { producer: 'Deutz', name: 'Hommage à William Deutz – Côte Glacière', family: 'Parcella' },
  { producer: 'Deutz', name: 'Hommage à William Deutz – Meurtet', family: 'Parcella' },
  { producer: 'Deutz', name: 'William Deutz', family: 'Prestige' },
  { producer: 'Deutz', name: 'Amour de Deutz', family: 'Prestige' },
  { producer: 'Deutz', name: 'Amour de Deutz Rosé', family: 'Rosé' },

  { producer: 'Ayala', name: 'Brut Majeur', family: 'Firma della maison' },
  { producer: 'Ayala', name: 'Brut Nature', family: 'Extra Brut' },
  { producer: 'Ayala', name: 'Rosé Majeur', family: 'Rosé' },
  { producer: 'Ayala', name: 'Le Blanc de Blancs', family: 'Blanc de Blancs' },

  { producer: 'Gosset', name: 'Grande Réserve', family: 'Firma della maison' },
  { producer: 'Gosset', name: 'Zéro Dosage', family: 'Extra Brut' },
  { producer: 'Gosset', name: 'Grand Rosé', family: 'Rosé' },
  { producer: 'Gosset', name: 'Grand Blanc de Blancs', family: 'Blanc de Blancs' },
  { producer: 'Gosset', name: 'Petite Douceur Rosé', family: 'Demi-Sec' },
  { producer: 'Gosset', name: 'Grand Millésime', family: 'Millesimato' },
  { producer: 'Gosset', name: 'Celebris Blanc de Blancs', family: 'Prestige' },
  { producer: 'Gosset', name: 'Celebris Vintage', family: 'Prestige' },
  { producer: 'Gosset', name: 'Celebris Rosé', family: 'Rosé' },

  { producer: 'Philipponnat', name: 'Royale Réserve Brut', family: 'Firma della maison' },
  { producer: 'Philipponnat', name: 'Royale Réserve Non Dosé', family: 'Extra Brut' },
  { producer: 'Philipponnat', name: 'Royale Réserve Rosé', family: 'Rosé' },
  { producer: 'Philipponnat', name: 'Blanc de Noirs', family: 'Blanc de Noirs' },
  { producer: 'Philipponnat', name: 'Grand Blanc', family: 'Blanc de Blancs' },
  { producer: 'Philipponnat', name: 'Clos des Goisses', family: 'Parcella' },
  { producer: 'Philipponnat', name: 'Clos des Goisses Juste Rosé', family: 'Rosé' },

  { producer: 'Lanson', name: 'Le Black Création', family: 'Firma della maison' },
  { producer: 'Lanson', name: 'Le Rosé Création', family: 'Rosé' },
  { producer: 'Lanson', name: 'Le Blanc de Blancs', family: 'Blanc de Blancs' },
  { producer: 'Lanson', name: 'Le Green Bio-Organic', family: 'Bio' },
  { producer: 'Lanson', name: 'Le White Label Sec', family: 'Demi-Sec' },
  { producer: 'Lanson', name: 'Le Vintage', family: 'Millesimato' },
  { producer: 'Lanson', name: 'Le Réserve Extra Brut', family: 'Extra Brut' },
  { producer: 'Lanson', name: 'Le Clos Lanson', family: 'Parcella' },
  { producer: 'Lanson', name: 'Noble Champagne', family: 'Prestige' },
  { producer: 'Lanson', name: 'Noble Champagne Blanc de Blancs', family: 'Prestige' },

  { producer: 'Pommery', name: 'Brut Royal', family: 'Firma della maison' },
  { producer: 'Pommery', name: 'Brut Royal Rosé', family: 'Rosé' },
  { producer: 'Pommery', name: 'POP Extra Dry', family: 'Demi-Sec' },
  { producer: 'Pommery', name: 'POP Rosé', family: 'Rosé' },
  { producer: 'Pommery', name: 'Apanage Blanc de Blancs', family: 'Blanc de Blancs' },
  { producer: 'Pommery', name: 'Apanage Brut', family: 'Millesimato' },
  { producer: 'Pommery', name: 'Apanage Rosé', family: 'Rosé' },
  { producer: 'Pommery', name: 'Apanage 1874', family: 'Prestige' },
  { producer: 'Pommery', name: 'Cuvée Louise', family: 'Prestige' },
  { producer: 'Pommery', name: 'Cuvée Louise Rosé', family: 'Rosé' },
  { producer: 'Pommery', name: 'Clos Pompadour', family: 'Parcella' },
];

export const winesForMaison = (producer: string) => catalogWines.filter((wine) => wine.producer === producer);
