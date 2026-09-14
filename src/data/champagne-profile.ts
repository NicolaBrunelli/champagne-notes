import type { MaisonArea } from './maisons';
import { catalogWines, type CatalogWine } from './wines';

/**
 * Editorial metadata used by the personal atlas. Fields are deliberately
 * optional: an absent datum is never replaced with the producer's address.
 */
export type TerritorialPrecision = 'exact' | 'partial' | 'region' | 'unknown';
export type ChampagneStyle = 'Blanc de Blancs' | 'Blanc de Noirs' | 'Rosé' | 'Millesimato';

export type ChampagneMetadata = {
  styles?: ChampagneStyle[];
  dosage?: 'Brut Nature' | 'Extra Brut' | 'Brut' | 'Extra Dry' | 'Demi-Sec';
  grapes?: string[];
  territorialPrecision?: TerritorialPrecision;
  areas?: MaisonArea[];
  crus?: string[];
};

const keyOf = (producer: string, wine: string) => `${producer}|${wine}`.normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();

/* Only facts explicit in a cuvée's identity are kept here. This is intentionally
   small: it is preferable to have an incomplete atlas than a fictional one. */
const verified: Record<string, ChampagneMetadata> = {
  [keyOf('Krug', 'Clos du Mesnil')]: { styles: ['Blanc de Blancs', 'Millesimato'], grapes: ['Chardonnay'], territorialPrecision: 'exact', areas: ['Côte des Blancs'], crus: ['Le Mesnil-sur-Oger'] },
  [keyOf('Krug', 'Clos d’Ambonnay')]: { styles: ['Blanc de Noirs', 'Millesimato'], grapes: ['Pinot Noir'], territorialPrecision: 'exact', areas: ['Montagne de Reims'], crus: ['Ambonnay'] },
  [keyOf('Salon', 'Salon Le Mesnil')]: { styles: ['Blanc de Blancs', 'Millesimato'], grapes: ['Chardonnay'], territorialPrecision: 'exact', areas: ['Côte des Blancs'], crus: ['Le Mesnil-sur-Oger'] },
  [keyOf('Pierre Péters', 'Cuvée Spéciale Les Chétillons')]: { styles: ['Blanc de Blancs'], grapes: ['Chardonnay'], territorialPrecision: 'exact', areas: ['Côte des Blancs'], crus: ['Le Mesnil-sur-Oger'] },
  [keyOf('Aurore Casanova', 'Les Petites Vignes Pinot Noir')]: { grapes: ['Pinot Noir'], territorialPrecision: 'exact', areas: ['Montagne de Reims'], crus: ['Puisieulx'] },
  [keyOf('Élise Bougy', 'Le Mont-Chainqueux')]: { styles: ['Blanc de Noirs'], territorialPrecision: 'exact', areas: ['Montagne de Reims'], crus: ['Les Mesneux'] },
  [keyOf('Élise Bougy', 'Les Coullemets')]: { styles: ['Blanc de Blancs'], territorialPrecision: 'exact', areas: ['Côte des Blancs'], crus: ['Le Mesnil-sur-Oger'] },
};

const inferredStyle = (wine: CatalogWine): ChampagneStyle[] => {
  const name = wine.name.toLowerCase();
  const styles: ChampagneStyle[] = [];
  if (wine.family === 'Blanc de Blancs' || name.includes('blanc de blancs')) styles.push('Blanc de Blancs');
  if (wine.family === 'Blanc de Noirs' || name.includes('blanc de noirs')) styles.push('Blanc de Noirs');
  if (wine.family === 'Rosé' || name.includes('rosé') || name.includes('rose')) styles.push('Rosé');
  if (wine.family === 'Millesimato' || name.includes('vintage') || name.includes('millesim')) styles.push('Millesimato');
  return styles;
};

export const champagneMetadataFor = (producer: string, wine: string): ChampagneMetadata => {
  const exact = verified[keyOf(producer, wine)];
  if (exact) return exact;
  const catalog = catalogWines.find((item) => keyOf(item.producer, item.name) === keyOf(producer, wine));
  if (!catalog) return { territorialPrecision: 'unknown' };
  const name = catalog.name.toLowerCase();
  const dosage = name.includes('brut nature') ? 'Brut Nature'
    : name.includes('extra brut') ? 'Extra Brut'
      : name.includes('extra dry') ? 'Extra Dry'
        : name.includes('demi-sec') || name.includes('demi sec') ? 'Demi-Sec'
          : undefined;
  return { styles: inferredStyle(catalog), dosage, territorialPrecision: 'unknown' };
};

export const normalizeWineKey = (value: string) => value.normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
