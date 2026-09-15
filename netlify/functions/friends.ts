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
type CellarBottle = { id: string; producer: string; wine: string; vintage?: string; quantity: number; createdAt: string };
type CommunityMember = { id: string; handle: string };
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'private, no-store' } });
const handleFor = (user: { userMetadata?: Record<string, unknown>; name?: string | null }) => {
  const value = user.userMetadata?.handle || user.name;
  return typeof value === 'string' ? value.trim().toLowerCase().replace(/[^a-z0-9._-]/g, '').slice(0, 32) : '';
};
const nameFor = (slug: string) => maisons.find((maison) => maisonSlug(maison.name) === slug)?.name || slug.replace(/-/g, ' ');
const wineKey = (wine: string) => wine.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();

const tastingsFor = async (store: ReturnType<typeof getStore>, userId: string) => {
  const index = (await store.get(`users/${userId}.json`, { type: 'json' }) || []) as TastingIndex[];
  const producerIds = [...new Set(index.map((item) => item.producerSlug))];
  const groups = new Map(await Promise.all(producerIds.map(async (slug) => [slug, (await store.get(`producers/${slug}.json`, { type: 'json' }) || []) as Tasting[]] as const)));
  return index.map((item) => {
    const all = groups.get(item.producerSlug) || [];
    const tasting = all.find((candidate) => candidate.id === item.id);
    if (!tasting || tasting.author.id !== userId) return undefined;
    const sameWine = all.filter((candidate) => wineKey(candidate.wine) === wineKey(tasting.wine));
    const averageSensory = (field: keyof SensoryProfile) => sameWine.reduce((sum, candidate) => sum + candidate.sensory[field], 0) / sameWine.length;
    return { ...tasting, producer: { slug: item.producerSlug, name: nameFor(item.producerSlug) },
      averageRating: sameWine.reduce((sum, candidate) => sum + candidate.rating, 0) / sameWine.length,
      ratingCount: sameWine.length,
      averageSensory: {
        body: averageSensory('body'), tannin: averageSensory('tannin'), sweetness: averageSensory('sweetness'), acidity: averageSensory('acidity'),
      } };
  }).filter(Boolean).sort((a, b) => String(b?.createdAt).localeCompare(String(a?.createdAt)));
};

export default async (request: Request) => {
  const viewer = await getUser();
  if (!viewer) return json({ error: 'Accesso riservato agli utenti registrati.' }, 401);
  const store = getStore({ name: 'champagne-tasting-notes', consistency: 'strong' });
  const viewerHandle = handleFor(viewer);
  const storedCommunity = (await store.get('community/participants.json', { type: 'json' }) || []) as CommunityMember[];
  const community = storedCommunity.filter((member): member is CommunityMember => Boolean(member?.id && member?.handle));
  if (viewerHandle && !community.some((member) => member.id === viewer.id)) {
    community.push({ id: viewer.id, handle: viewerHandle });
    await store.set('community/participants.json', JSON.stringify(community));
  }
  const handle = new URL(request.url).searchParams.get('utente')?.trim().toLowerCase();
  if (handle) {
    const user = community.find((candidate) => candidate.handle === handle);
    if (!user) return json({ error: 'Profilo non trovato.' }, 404);
    const [tastings, cellar, avatar] = await Promise.all([
      tastingsFor(store, user.id),
      store.get(`cellars/${user.id}.json`, { type: 'json' }),
      store.getMetadata(`avatars/${user.id}`),
    ]);
    return json({ profile: { handle: user.handle, avatar: Boolean(avatar), isSelf: user.id === viewer.id }, tastings, cellar: (cellar || []) as CellarBottle[] });
  }
  const friends = (await Promise.all(community.map(async (user) => {
    const [tastingIndex, cellar, avatar] = await Promise.all([
      store.get(`users/${user.id}.json`, { type: 'json' }), store.get(`cellars/${user.id}.json`, { type: 'json' }), store.getMetadata(`avatars/${user.id}`),
    ]);
    return { handle: user.handle, avatar: Boolean(avatar), tastingCount: Array.isArray(tastingIndex) ? tastingIndex.length : 0, cellarCount: Array.isArray(cellar) ? cellar.reduce((sum, bottle) => sum + Number(bottle?.quantity || 0), 0) : 0 };
  }))).filter(Boolean).sort((a, b) => String(a?.handle).localeCompare(String(b?.handle)));
  return json({ friends });
};

export const config = { path: '/api/amici', method: ['GET'] };
