import { getStore } from '@netlify/blobs';
import { getUser, verifyRequestOrigin } from '@netlify/identity';
import { maisons, maisonSlug } from '../../src/data/maisons';
import { catalogWines } from '../../src/data/wines';
import { champagneMetadataFor, normalizeWineKey, type ChampagneMetadata } from '../../src/data/champagne-profile';
import { passportStamps, type PassportStamp } from '../../src/data/passport-stamps';
import { leRecoltantMaisons } from '../../src/data/recoltant-vignerons';

type Sensory = { body: number; tannin: number; sweetness: number; acidity: number };
type Experience = { maturity: number; structure: number; tension: number; complexity: number };
type Tasting = { id: string; wine: string; drunkAt: string; place: string; price?: number; rating: number; notes?: string; aromas?: string[]; sensory?: Sensory; experience?: Experience; wouldRepurchase?: boolean; author: { id: string }; createdAt: string };
type TastingIndex = { id: string; producerSlug: string; createdAt: string };
type CellarBottle = { id: string; producer: string; wine: string; vintage?: string; quantity: number; createdAt: string };
type WishlistItem = { id: string; producer: string; producerSlug?: string; wine: string; createdAt: string };
type PersonalTasting = Tasting & { producer: { slug: string; name: string }; metadata: ChampagneMetadata };
type StoredStamp = { achievementId: string; unlockedAt: string; seenAt?: string };
type UnlockedStamp = Pick<PassportStamp, 'id' | 'name' | 'message' | 'stampVariant' | 'stampShape' | 'stampSize' | 'rotation' | 'visualMotif' | 'position'> & { unlockedAt: string; isNew: boolean };

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'private, no-store' } });
const nameFor = (slug: string) => maisons.find((maison) => maisonSlug(maison.name) === slug)?.name || slug.replace(/-/g, ' ');
const average = (values: number[]) => values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : undefined;
const mostFrequent = (values: string[]) => {
  const counts = new Map<string, number>(); values.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
};
const uniqueWineKey = (tasting: PersonalTasting) => normalizeWineKey(`${tasting.producer.name}|${tasting.wine}`);
const countDistinct = (tastings: PersonalTasting[], predicate: (tasting: PersonalTasting) => boolean) => new Set(tastings.filter(predicate).map(uniqueWineKey)).size;
const growerNames = new Set(leRecoltantMaisons.map((maison) => maison.name));

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

const unlockedByData = (evaluator: string, tastings: PersonalTasting[], bottles: CellarBottle[]) => {
  const unique = new Set(tastings.map(uniqueWineKey)).size;
  const withStyle = (style: string) => countDistinct(tastings, (tasting) => tasting.metadata.styles?.includes(style as never) || false);
  const withDosage = (dosage: string) => countDistinct(tastings, (tasting) => tasting.metadata.dosage === dosage);
  const trustedAreas = (area: string) => countDistinct(tastings, (tasting) => ['exact', 'partial', 'region'].includes(tasting.metadata.territorialPrecision || 'unknown') && Boolean(tasting.metadata.areas?.includes(area as never)));
  const distinctCellar = new Set(bottles.map((bottle) => normalizeWineKey(`${bottle.producer}|${bottle.wine}`))).size;
  const answersYes = tastings.filter((tasting) => tasting.wouldRepurchase === true).length;
  switch (evaluator) {
    case 'unique-1': return unique >= 1; case 'unique-5': return unique >= 5; case 'unique-10': return unique >= 10; case 'unique-25': return unique >= 25; case 'unique-50': return unique >= 50; case 'unique-100': return unique >= 100;
    case 'three-grapes': return ['Chardonnay', 'Pinot Noir', 'Meunier'].every((grape) => tastings.some((tasting) => tasting.metadata.grapes?.includes(grape)));
    case 'bdb-5': return withStyle('Blanc de Blancs') >= 5; case 'bdn-5': return withStyle('Blanc de Noirs') >= 5; case 'rose-5': return withStyle('Rosé') >= 5;
    case 'brut-nature-3': return withDosage('Brut Nature') >= 3; case 'extra-brut-5': return withDosage('Extra Brut') >= 5;
    case 'grower-10': return new Set(tastings.filter((tasting) => growerNames.has(tasting.producer.name)).map((tasting) => tasting.producer.name)).size >= 10;
    case 'producer-five': return [...new Map(tastings.map((tasting) => [tasting.producer.name, new Set<string>()])).entries()].some(([producer, wines]) => { tastings.filter((tasting) => tasting.producer.name === producer).forEach((tasting) => wines.add(uniqueWineKey(tasting))); return wines.size >= 5; });
    case 'tour-areas': return ['Montagne de Reims', 'Côte des Blancs', 'Vallée de la Marne', 'Côte des Bar'].every((area) => trustedAreas(area) >= 1);
    case 'area-montagne': return trustedAreas('Montagne de Reims') >= 3; case 'area-blancs': return trustedAreas('Côte des Blancs') >= 3; case 'area-marne': return trustedAreas('Vallée de la Marne') >= 3; case 'area-bar': return trustedAreas('Côte des Bar') >= 3;
    case 'cellar-1': return bottles.reduce((sum, bottle) => sum + Number(bottle.quantity || 0), 0) >= 1; case 'cellar-10': return distinctCellar >= 10;
    case 'repurchase-5': return answersYes >= 5;
    default: return false;
  }
};

const resolveStamps = async (store: ReturnType<typeof getStore>, userId: string, tastings: PersonalTasting[], bottles: CellarBottle[]) => {
  const key = `achievements/${userId}.json`;
  const existing = (await store.get(key, { type: 'json' }) || []) as StoredStamp[];
  const known = new Set(existing.map((item) => item.achievementId));
  const now = new Date().toISOString();
  const newStamps: StoredStamp[] = passportStamps.filter((stamp) => stamp.enabled && !known.has(stamp.id) && unlockedByData(stamp.evaluator, tastings, bottles)).map((stamp) => ({ achievementId: stamp.id, unlockedAt: now }));
  const stored = newStamps.length ? [...existing, ...newStamps] : existing;
  if (newStamps.length) await store.setJSON(key, stored);
  return stored.flatMap((item) => {
    const stamp = passportStamps.find((candidate) => candidate.id === item.achievementId);
    return stamp ? [{ id: stamp.id, name: stamp.name, message: stamp.message, stampVariant: stamp.stampVariant, stampShape: stamp.stampShape, stampSize: stamp.stampSize, rotation: stamp.rotation, visualMotif: stamp.visualMotif, position: stamp.position, unlockedAt: item.unlockedAt, isNew: !item.seenAt } satisfies UnlockedStamp] : [];
  });
};

export default async (request: Request) => {
  const user = await getUser();
  if (!user) return json({ error: 'Accesso riservato agli utenti registrati.' }, 401);
  const store = getStore({ name: 'champagne-tasting-notes', consistency: 'strong' });
  if (request.method === 'PATCH') {
    try {
      verifyRequestOrigin(request);
      const body = await request.json().catch(() => ({})) as { seenAchievementIds?: unknown };
      const seenIds = Array.isArray(body.seenAchievementIds) ? new Set(body.seenAchievementIds.filter((id): id is string => typeof id === 'string')) : new Set<string>();
      const key = `achievements/${user.id}.json`;
      const existing = (await store.get(key, { type: 'json' }) || []) as StoredStamp[];
      await store.setJSON(key, existing.map((item) => seenIds.has(item.achievementId) && !item.seenAt ? { ...item, seenAt: new Date().toISOString() } : item));
      return json({ ok: true });
    } catch {
      return json({ error: 'Non è stato possibile aggiornare il timbro.' }, 400);
    }
  }
  if (request.method !== 'GET') return json({ error: 'Metodo non supportato.' }, 405);
  const [tastings, cellar, wishlist] = await Promise.all([
    personalTastings(store, user.id),
    store.get(`cellars/${user.id}.json`, { type: 'json' }),
    store.get(`wishlists/${user.id}.json`, { type: 'json' }),
  ]);
  const bottles = (cellar || []) as CellarBottle[];
  const wishes = (wishlist || []) as WishlistItem[];
  const profile = profileFor(tastings);
  const stamps = await resolveStamps(store, user.id, tastings, bottles);
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
    stamps,
    suggestions: suggestionsFor(tastings, wishes, profile),
  });
};

export const config = { path: '/api/my-champagne', method: ['GET', 'PATCH'] };
