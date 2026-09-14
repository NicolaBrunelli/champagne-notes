import { getStore } from '@netlify/blobs';
import { getUser } from '@netlify/identity';
import { maisons, maisonSlug } from '../../src/data/maisons';
import { catalogWines } from '../../src/data/wines';
import { champagneMetadataFor, normalizeWineKey, type ChampagneMetadata } from '../../src/data/champagne-profile';

type Sensory = { body: number; tannin: number; sweetness: number; acidity: number };
type Experience = { maturity: number; structure: number; tension: number; complexity: number };
type Tasting = { id: string; wine: string; drunkAt: string; place: string; rating: number; notes?: string; aromas?: string[]; sensory?: Sensory; experience?: Experience; wouldRepurchase?: boolean; author: { id: string }; createdAt: string };
type TastingIndex = { id: string; producerSlug: string; createdAt: string };
type CellarBottle = { id: string; producer: string; wine: string; vintage?: string; quantity: number; createdAt: string };
type WishlistItem = { id: string; producer: string; producerSlug?: string; wine: string; createdAt: string };
type PersonalTasting = Tasting & { producer: { slug: string; name: string }; metadata: ChampagneMetadata };

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'private, no-store' } });
const nameFor = (slug: string) => maisons.find((maison) => maisonSlug(maison.name) === slug)?.name || slug.replace(/-/g, ' ');
const average = (values: number[]) => values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : undefined;
const mostFrequent = (values: string[]) => {
  const counts = new Map<string, number>(); values.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
};

const personalTastings = async (store: ReturnType<typeof getStore>, userId: string) => {
  const index = (await store.get(`users/${userId}.json`, { type: 'json' }) || []) as TastingIndex[];
  const grouped = new Map<string, TastingIndex[]>();
  index.forEach((item) => grouped.set(item.producerSlug, [...(grouped.get(item.producerSlug) || []), item]));
  const lists = await Promise.all([...grouped.entries()].map(async ([slug, entries]) => {
    const all = (await store.get(`producers/${slug}.json`, { type: 'json' }) || []) as Tasting[];
    return entries.map((entry) => {
      const tasting = all.find((item) => item.id === entry.id && item.author.id === userId);
      return tasting ? { ...tasting, producer: { slug, name: nameFor(slug) }, metadata: champagneMetadataFor(nameFor(slug), tasting.wine) } satisfies PersonalTasting : undefined;
    });
  }));
  return lists.flat().filter((item): item is PersonalTasting => Boolean(item)).sort((a, b) => b.drunkAt.localeCompare(a.drunkAt));
};

const profileFor = (tastings: PersonalTasting[]) => {
  const enough = tastings.length >= 3;
  const styles = tastings.flatMap((tasting) => tasting.metadata.styles || []);
  const grapes = tastings.flatMap((tasting) => tasting.metadata.grapes || []);
  const dosages = tastings.flatMap((tasting) => tasting.metadata.dosage ? [tasting.metadata.dosage] : []);
  const exactOrPartial = tastings.filter((tasting) => ['exact', 'partial'].includes(tasting.metadata.territorialPrecision || 'unknown'));
  const areas = tastings.filter((tasting) => ['exact', 'partial', 'region'].includes(tasting.metadata.territorialPrecision || 'unknown')).flatMap((tasting) => tasting.metadata.areas || []);
  const crus = exactOrPartial.flatMap((tasting) => tasting.metadata.crus || []);
  const repurchase = tastings.filter((tasting) => typeof tasting.wouldRepurchase === 'boolean');
  const experience = tastings.map((tasting) => tasting.experience).filter((value): value is Experience => Boolean(value));
  const rated = [...tastings].sort((a, b) => b.rating - a.rating);
  const producerAverages = new Map<string, number[]>();
  tastings.forEach((tasting) => producerAverages.set(tasting.producer.name, [...(producerAverages.get(tasting.producer.name) || []), tasting.rating]));
  const favoriteProducers = [...producerAverages.entries()].filter(([, ratings]) => ratings.length >= 2).map(([producer, ratings]) => ({ producer, rating: average(ratings)! })).sort((a, b) => b.rating - a.rating).slice(0, 3);
  const description: string[] = [];
  const dimensions = [
    [average(experience.map((item) => item.structure)), 'strutturati'],
    [average(experience.map((item) => item.tension)), 'tesi'],
    [average(experience.map((item) => item.complexity)), 'complessi'],
    [average(experience.map((item) => item.maturity)), 'maturi'],
  ] as const;
  dimensions.forEach(([value, word]) => { if (value !== undefined && value >= 62) description.push(word); });
  return {
    enough,
    sampleSize: tastings.length,
    styles: { favorite: enough && styles.length >= 3 ? mostFrequent(styles) : undefined, covered: styles.length },
    grapes: { favorite: enough && grapes.length >= 3 ? mostFrequent(grapes) : undefined, covered: grapes.length },
    dosage: { favorite: enough && dosages.length >= 3 ? mostFrequent(dosages) : undefined, covered: dosages.length },
    producers: favoriteProducers,
    territory: { areas: [...new Set(areas)], crus: [...new Set(crus)], preciseTastings: exactOrPartial.length },
    repurchase: repurchase.length >= 3 ? { yes: repurchase.filter((tasting) => tasting.wouldRepurchase).length, total: repurchase.length, percent: Math.round((repurchase.filter((tasting) => tasting.wouldRepurchase).length / repurchase.length) * 100) } : undefined,
    experience: experience.length >= 3 ? { count: experience.length, description } : undefined,
    recentFavorites: rated.slice(0, 3).map((tasting) => ({ producer: tasting.producer.name, wine: tasting.wine, rating: tasting.rating })),
  };
};

const suggestionsFor = (tastings: PersonalTasting[], wishlist: WishlistItem[], profile: ReturnType<typeof profileFor>) => {
  const tasted = new Set(tastings.map((tasting) => normalizeWineKey(`${tasting.producer.name}|${tasting.wine}`)));
  const candidate = (predicate: (wine: typeof catalogWines[number]) => boolean) => catalogWines.find((wine) => predicate(wine) && !tasted.has(normalizeWineKey(`${wine.producer}|${wine.name}`)));
  const suggestions: { title: string; reason: string; producer?: string; wine?: string }[] = [];
  if (wishlist.length) suggestions.push({ title: 'Una bottiglia già nel tuo atlante', reason: 'È nella tua wishlist: quando la degusterai, aiuterà a rendere il profilo più personale.', producer: wishlist[0].producer, wine: wishlist[0].wine });
  if (profile.enough && profile.styles.favorite === 'Blanc de Noirs') {
    const wine = candidate((item) => item.family === 'Blanc de Noirs');
    if (wine) suggestions.push({ title: 'Continua sul filo del Pinot', reason: 'Hai registrato con più continuità Blanc de Noirs: questa cuvée può ampliare il confronto senza ripetere una bottiglia già provata.', producer: wine.producer, wine: wine.name });
  } else if (profile.enough && profile.styles.favorite === 'Blanc de Blancs') {
    const wine = candidate((item) => item.family === 'Blanc de Noirs');
    if (wine) suggestions.push({ title: 'Un contrappunto da esplorare', reason: 'Hai degustato soprattutto Blanc de Blancs: un Blanc de Noirs offre un confronto chiaro, spiegabile e utile al tuo percorso.', producer: wine.producer, wine: wine.name });
  } else if (tastings.length) {
    const wine = candidate((item) => item.family === 'Blanc de Blancs' || item.family === 'Blanc de Noirs');
    if (wine) suggestions.push({ title: 'Dai un riferimento al tuo atlante', reason: 'Una cuvée con stile dichiarato aiuterà a leggere meglio le tue prossime preferenze.', producer: wine.producer, wine: wine.name });
  }
  return suggestions.slice(0, 3);
};

export default async () => {
  const user = await getUser();
  if (!user) return json({ error: 'Accesso riservato agli utenti registrati.' }, 401);
  const store = getStore({ name: 'champagne-tasting-notes', consistency: 'strong' });
  const [tastings, cellar, wishlist] = await Promise.all([
    personalTastings(store, user.id),
    store.get(`cellars/${user.id}.json`, { type: 'json' }),
    store.get(`wishlists/${user.id}.json`, { type: 'json' }),
  ]);
  const bottles = (cellar || []) as CellarBottle[];
  const wishes = (wishlist || []) as WishlistItem[];
  const profile = profileFor(tastings);
  return json({
    tastings,
    cellar: bottles,
    wishlist: wishes,
    overview: {
      tasted: tastings.length,
      cellarBottles: bottles.reduce((sum, bottle) => sum + Number(bottle.quantity || 0), 0),
      wishlist: wishes.length,
      producers: new Set(tastings.map((tasting) => tasting.producer.name)).size,
      areas: profile.territory.areas.length,
      crus: profile.territory.crus.length,
    },
    profile,
    suggestions: suggestionsFor(tastings, wishes, profile),
  });
};

export const config = { path: '/api/my-champagne', method: ['GET'] };
