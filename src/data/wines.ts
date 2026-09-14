export type WineFamily = 'Firma della maison' | 'Rosé' | 'Millesimato' | 'Prestige' | 'Parcella' | 'Stile libero';

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
];

export const winesForMaison = (producer: string) => catalogWines.filter((wine) => wine.producer === producer);
