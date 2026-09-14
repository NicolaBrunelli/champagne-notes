import { getStore } from '@netlify/blobs';
import { getUser } from '@netlify/identity';
import { maisonSlug, maisons } from '../../src/data/maisons';

type SensoryProfile = { body: number; tannin: number; sweetness: number; acidity: number };
type Tasting = {
  id: string; wine: string; drunkAt: string; place: string; price?: number; rating: number; notes?: string;
  aromas?: string[]; sensory: SensoryProfile; photo?: { id: string; mime: string };
  author: { id: string; name: string }; createdAt: string;
};
type TastingIndex = { id: string; producerSlug: string; createdAt: string };
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'private, no-store' } });
const wineKey = (wine: string) => wine.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
const titleFor = (slug: string) => maisons.find((maison) => maisonSlug(maison.name) === slug)?.name || slug.replace(/-/g, ' ');

export default async () => {
  const user = await getUser();
  if (!user) return json({ error: 'Accesso riservato agli utenti registrati.' }, 401);
  const store = getStore({ name: 'champagne-tasting-notes', consistency: 'strong' });
  const index = (await store.get(`users/${user.id}.json`, { type: 'json' }) || []) as TastingIndex[];
  const grouped = new Map<string, TastingIndex[]>();
  index.forEach((item) => grouped.set(item.producerSlug, [...(grouped.get(item.producerSlug) || []), item]));
  const entries = await Promise.all([...grouped.entries()].map(async ([producerSlug, items]) => {
    const all = (await store.get(`producers/${producerSlug}.json`, { type: 'json' }) || []) as Tasting[];
    return items.map((item) => {
      const tasting = all.find((candidate) => candidate.id === item.id);
      if (!tasting || tasting.author.id !== user.id) return undefined;
      const sameWine = all.filter((candidate) => wineKey(candidate.wine) === wineKey(tasting.wine));
      const average = (field: keyof SensoryProfile) => sameWine.reduce((sum, candidate) => sum + candidate.sensory[field], 0) / sameWine.length;
      return { ...tasting, producer: { slug: producerSlug, name: titleFor(producerSlug) },
        averageRating: sameWine.reduce((sum, candidate) => sum + candidate.rating, 0) / sameWine.length,
        ratingCount: sameWine.length,
        averageSensory: { body: average('body'), tannin: average('tannin'), sweetness: average('sweetness'), acidity: average('acidity') } };
    });
  }));
  return json({ tastings: entries.flat().filter(Boolean).sort((a, b) => String(b?.createdAt).localeCompare(String(a?.createdAt))) });
};

export const config = { path: '/api/account/bevute', method: ['GET'] };
