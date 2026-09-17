import { getStore } from '@netlify/blobs';
import { getUser, verifyRequestOrigin } from '@netlify/identity';
import { aromaIds } from '../../src/data/aromas';
import { maisonSlug, maisons } from '../../src/data/maisons';

type SensoryProfile = { body: number; tannin: number; sweetness: number; acidity: number };
type ExperienceProfile = { maturity: number; structure: number; tension: number; complexity: number };
type Tasting = {
  id: string; wine: string; drunkAt: string; place: string; price?: number; rating: number; notes?: string;
  aromas: string[]; sensory: SensoryProfile; photo?: { id: string; mime: string };
  experience?: ExperienceProfile; wouldRepurchase?: boolean;
  shared?: { id: string; companions: string[] };
  author: { id: string; name: string }; createdAt: string; updatedAt?: string;
};
type TastingIndex = { id: string; producerSlug: string; createdAt: string };
type PublicTasting = Tasting & { averageRating: number; ratingCount: number; averageSensory: SensoryProfile };
type CommunityMember = { id: string; handle: string };
type SharedParticipant = { id: string; handle: string; state: 'pending' | 'accepted' | 'declined' };
type SharedTasting = {
  id: string; producerSlug: string; producerName: string; wine: string; drunkAt: string; place: string; price?: number;
  photo?: { id: string; mime: string }; owner: { id: string; handle: string }; participants: SharedParticipant[]; createdAt: string;
};

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'private, no-store' } });
const slugFromRequest = (request: Request) => {
  const parts = new URL(request.url).pathname.split('/').filter(Boolean);
  return parts[1] === 'cantine' && parts[3] === 'bevute' ? parts[2] : undefined;
};
const wineKey = (wine: string) => wine.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
const boundedNumber = (value: unknown, min: number, max: number) => {
  const number = Number(value);
  return Number.isFinite(number) && number >= min && number <= max ? number : undefined;
};
const dataUrlToImage = (dataUrl: string) => {
  const match = /^data:(image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+/=]+)$/.exec(dataUrl);
  if (!match) return undefined;
  const bytes = Uint8Array.from(atob(match[2]), (character) => character.charCodeAt(0));
  return bytes.byteLength <= 5 * 1024 * 1024 ? { bytes, mime: match[1] } : undefined;
};
const cleanAromas = (value: unknown) => Array.isArray(value)
  ? [...new Set(value.filter((item): item is string => typeof item === 'string' && aromaIds.has(item)))].slice(0, 20)
  : [];

const withHistoricalAverages = (tastings: Tasting[]): PublicTasting[] => {
  const grouped = new Map<string, Tasting[]>();
  tastings.forEach((tasting) => {
    const key = wineKey(tasting.wine);
    grouped.set(key, [...(grouped.get(key) || []), tasting]);
  });
  return tastings.map((tasting) => {
    const sameWine = grouped.get(wineKey(tasting.wine)) || [tasting];
    const average = (field: keyof SensoryProfile) => sameWine.reduce((sum, item) => sum + item.sensory[field], 0) / sameWine.length;
    return { ...tasting, averageRating: sameWine.reduce((sum, item) => sum + item.rating, 0) / sameWine.length, ratingCount: sameWine.length,
      averageSensory: { body: average('body'), tannin: average('tannin'), sweetness: average('sweetness'), acidity: average('acidity') } };
  });
};

const parsePayload = (payload: Record<string, unknown>) => {
  const wine = typeof payload.wine === 'string' ? payload.wine.trim().slice(0, 160) : '';
  const place = typeof payload.place === 'string' ? payload.place.trim().slice(0, 160) : '';
  const drunkAt = typeof payload.drunkAt === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(payload.drunkAt) ? payload.drunkAt : '';
  const rating = boundedNumber(payload.rating, 0.5, 5);
  const rawSensory = payload.sensory as Record<string, unknown> | undefined;
  const sensory: SensoryProfile = {
    body: boundedNumber(rawSensory?.body, 0, 100) ?? 50, tannin: boundedNumber(rawSensory?.tannin, 0, 100) ?? 50,
    sweetness: boundedNumber(rawSensory?.sweetness, 0, 100) ?? 50, acidity: boundedNumber(rawSensory?.acidity, 0, 100) ?? 50,
  };
  const rawExperience = payload.experience as Record<string, unknown> | undefined;
  const experience = rawExperience ? {
    maturity: boundedNumber(rawExperience.maturity, 0, 100) ?? 50,
    structure: boundedNumber(rawExperience.structure, 0, 100) ?? 50,
    tension: boundedNumber(rawExperience.tension, 0, 100) ?? 50,
    complexity: boundedNumber(rawExperience.complexity, 0, 100) ?? 50,
  } satisfies ExperienceProfile : undefined;
  return { wine, place, drunkAt, rating, sensory, aromas: cleanAromas(payload.aromas),
    experience, wouldRepurchase: typeof payload.wouldRepurchase === 'boolean' ? payload.wouldRepurchase : undefined,
    price: payload.price === null || payload.price === '' || payload.price === undefined ? undefined : boundedNumber(payload.price, 0, 100000),
    notes: typeof payload.notes === 'string' ? payload.notes.trim().slice(0, 3000) : undefined };
};

export default async (request: Request) => {
  const slug = slugFromRequest(request);
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) return json({ error: 'Cantina non valida.' }, 400);
  const user = await getUser();
  if (!user) return json({ error: 'Accedi con il tuo account per consultare le degustazioni.' }, 401);
  const store = getStore({ name: 'champagne-tasting-notes', consistency: 'strong' });
  const key = `producers/${slug}.json`;
  const indexKey = `users/${user.id}.json`;

  if (request.method === 'GET') {
    const tastings = (await store.get(key, { type: 'json' }) || []) as Tasting[];
    return json({ tastings: withHistoricalAverages(tastings) });
  }
  if (!['POST', 'PATCH', 'DELETE'].includes(request.method)) return json({ error: 'Metodo non supportato.' }, 405);
  try {
    verifyRequestOrigin(request);
    const current = (await store.get(key, { type: 'json' }) || []) as Tasting[];
    const url = new URL(request.url);
    if (request.method === 'DELETE') {
      const id = url.searchParams.get('id') || '';
      const target = current.find((item) => item.id === id);
      if (!target) return json({ error: 'Annotazione non trovata.' }, 404);
      if (target.author.id !== user.id) return json({ error: 'Puoi eliminare soltanto le tue annotazioni.' }, 403);
      await store.setJSON(key, current.filter((item) => item.id !== id));
      const index = (await store.get(indexKey, { type: 'json' }) || []) as TastingIndex[];
      await store.setJSON(indexKey, index.filter((item) => !(item.id === id && item.producerSlug === slug)));
      if (target.shared?.id) {
        const shared = await store.get(`shared-tastings/${target.shared.id}.json`, { type: 'json' }) as SharedTasting | null;
        if (shared?.owner.id === user.id) await store.delete(`shared-tastings/${target.shared.id}.json`);
      }
      // Una foto condivisa può essere già presente nei taccuini degli amici: non va eliminata
      // insieme alla sola annotazione del proprietario.
      if (target.photo && !target.shared) await store.delete(`photos/${target.photo.id}`);
      return json({ ok: true });
    }

    const payload = await request.json() as Record<string, unknown>;
    let parsed = parsePayload(payload);
    if (!parsed.wine || !parsed.place || !parsed.drunkAt || parsed.rating === undefined) return json({ error: 'Completa nome, data, luogo e voto.' }, 422);
    const rating = parsed.rating;
    const sharedId = typeof payload.sharedTastingId === 'string' && /^[a-f0-9-]{36}$/i.test(payload.sharedTastingId) ? payload.sharedTastingId : undefined;
    let sharedEvent: SharedTasting | undefined;
    if (request.method === 'POST' && sharedId) {
      const candidate = await store.get(`shared-tastings/${sharedId}.json`, { type: 'json' }) as SharedTasting | null;
      const participant = candidate?.participants.find((item) => item.id === user.id);
      if (!candidate || candidate.producerSlug !== slug || !participant) return json({ error: 'Questa degustazione condivisa non è disponibile.' }, 404);
      if (participant.state !== 'pending') return json({ error: 'Hai già gestito questa degustazione condivisa.' }, 409);
      participant.state = 'accepted';
      sharedEvent = candidate;
      parsed = { ...parsed, wine: candidate.wine, drunkAt: candidate.drunkAt, place: candidate.place, price: candidate.price };
    }
    let photo: Tasting['photo'];
    if (sharedEvent?.photo) {
      photo = sharedEvent.photo;
    } else if (typeof payload.photo === 'string' && payload.photo) {
      const image = dataUrlToImage(payload.photo);
      if (!image) return json({ error: 'La foto deve essere JPG, PNG o WebP e non superare 5 MB.' }, 422);
      const extension = image.mime === 'image/jpeg' ? 'jpg' : image.mime.split('/')[1];
      const imageId = `${crypto.randomUUID()}.${extension}`;
      await store.set(`photos/${imageId}`, new Blob([image.bytes], { type: image.mime }), { metadata: { mime: image.mime } });
      photo = { id: imageId, mime: image.mime };
    }
    if (request.method === 'PATCH') {
      const id = typeof payload.id === 'string' ? payload.id : '';
      const target = current.find((item) => item.id === id);
      if (!target) return json({ error: 'Annotazione non trovata.' }, 404);
      if (target.author.id !== user.id) return json({ error: 'Puoi modificare soltanto le tue annotazioni.' }, 403);
      const updated: Tasting = { ...target, ...parsed, rating, photo: photo || target.photo, updatedAt: new Date().toISOString() };
      const replacement = current.map((item) => item.id === id ? updated : item);
      await store.setJSON(key, replacement);
      if (photo && target.photo) await store.delete(`photos/${target.photo.id}`);
      return json({ tasting: withHistoricalAverages(replacement).find((item) => item.id === id) });
    }
    const authorName = user.name || (typeof user.userMetadata?.full_name === 'string' ? user.userMetadata.full_name : 'Membro');
    let outboundShared: SharedTasting | undefined;
    let shared: Tasting['shared'];
    if (!sharedEvent && request.method === 'POST' && Array.isArray(payload.sharedWith)) {
      const requestedHandles = [...new Set(payload.sharedWith.filter((value): value is string => typeof value === 'string')
        .map((value) => value.trim().toLowerCase().replace(/[^a-z0-9._-]/g, '').slice(0, 32)).filter(Boolean))].slice(0, 12);
      if (requestedHandles.length) {
        const community = (await store.get('community/participants.json', { type: 'json' }) || []) as CommunityMember[];
        const participants = community.filter((member) => member.id !== user.id && requestedHandles.includes(member.handle))
          .map((member) => ({ id: member.id, handle: member.handle, state: 'pending' as const }));
        if (participants.length) {
          const id = crypto.randomUUID();
          const ownerHandle = typeof user.userMetadata?.handle === 'string' ? user.userMetadata.handle : authorName;
          const producerName = maisons.find((maison) => maisonSlug(maison.name) === slug)?.name || slug.replace(/-/g, ' ');
          outboundShared = { id, producerSlug: slug, producerName, wine: parsed.wine, drunkAt: parsed.drunkAt, place: parsed.place, price: parsed.price, photo, owner: { id: user.id, handle: ownerHandle }, participants, createdAt: new Date().toISOString() };
          shared = { id, companions: participants.map((participant) => participant.handle) };
        }
      }
    }
    if (sharedEvent) {
      shared = { id: sharedEvent.id, companions: [sharedEvent.owner.handle, ...sharedEvent.participants.filter((participant) => participant.id !== user.id && participant.state !== 'declined').map((participant) => participant.handle)] };
    }
    const tasting: Tasting = {
      id: crypto.randomUUID(), ...parsed, rating, photo,
      shared,
      author: { id: user.id, name: authorName }, createdAt: new Date().toISOString(),
    };
    const index = (await store.get(indexKey, { type: 'json' }) || []) as TastingIndex[];
    await Promise.all([
      store.setJSON(key, [tasting, ...current]),
      store.setJSON(indexKey, [{ id: tasting.id, producerSlug: slug, createdAt: tasting.createdAt }, ...index]),
      outboundShared ? store.setJSON(`shared-tastings/${outboundShared.id}.json`, outboundShared) : Promise.resolve(),
      sharedEvent ? store.setJSON(`shared-tastings/${sharedEvent.id}.json`, sharedEvent) : Promise.resolve(),
    ]);
    return json({ tasting: withHistoricalAverages([tasting])[0] }, 201);
  } catch {
    return json({ error: 'Non è stato possibile salvare la bevuta.' }, 400);
  }
};

export const config = { path: '/api/cantine/:slug/bevute', method: ['GET', 'POST', 'PATCH', 'DELETE'] };
