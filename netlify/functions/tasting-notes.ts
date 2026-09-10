import { getStore } from '@netlify/blobs';
import { getUser } from '@netlify/identity';

type SensoryProfile = { body: number; tannin: number; sweetness: number; acidity: number };
type Tasting = {
  id: string;
  wine: string;
  drunkAt: string;
  place: string;
  price?: number;
  rating: number;
  notes?: string;
  sensory: SensoryProfile;
  photo?: { id: string; mime: string };
  createdAt: string;
};

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'private, no-store' },
});

const slugFromRequest = (request: Request) => {
  const parts = new URL(request.url).pathname.split('/').filter(Boolean);
  return parts[2] === 'cantine' && parts[4] === 'bevute' ? parts[3] : undefined;
};

const isOwner = async () => {
  const user = await getUser();
  const runtime = globalThis as unknown as { Netlify: { env: { get: (key: string) => string | undefined } } };
  const ownerEmail = runtime.Netlify.env.get('OWNER_EMAIL')?.trim().toLowerCase();
  return Boolean(ownerEmail && user?.email?.toLowerCase() === ownerEmail);
};

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

export default async (request: Request) => {
  const slug = slugFromRequest(request);
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) return json({ error: 'Cantina non valida.' }, 400);
  if (!(await isOwner())) return json({ error: 'Accesso riservato.' }, 403);

  const store = getStore({ name: 'champagne-tasting-notes', consistency: 'strong' });
  const key = `producers/${slug}.json`;

  if (request.method === 'GET') {
    const tastings = (await store.get(key, { type: 'json' }) || []) as Tasting[];
    return json({ tastings });
  }

  if (request.method !== 'POST') return json({ error: 'Metodo non supportato.' }, 405);

  try {
    const payload = await request.json() as Record<string, unknown>;
    const wine = typeof payload.wine === 'string' ? payload.wine.trim().slice(0, 160) : '';
    const place = typeof payload.place === 'string' ? payload.place.trim().slice(0, 160) : '';
    const drunkAt = typeof payload.drunkAt === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(payload.drunkAt) ? payload.drunkAt : '';
    const rating = boundedNumber(payload.rating, 0.5, 5);
    const price = payload.price === undefined ? undefined : boundedNumber(payload.price, 0, 100000);
    const rawSensory = payload.sensory as Record<string, unknown> | undefined;
    const sensory: SensoryProfile = {
      body: boundedNumber(rawSensory?.body, 0, 100) ?? 50,
      tannin: boundedNumber(rawSensory?.tannin, 0, 100) ?? 50,
      sweetness: boundedNumber(rawSensory?.sweetness, 0, 100) ?? 50,
      acidity: boundedNumber(rawSensory?.acidity, 0, 100) ?? 50,
    };
    if (!wine || !place || !drunkAt || rating === undefined) return json({ error: 'Completa nome, data, luogo e voto.' }, 422);

    const tasting: Tasting = {
      id: crypto.randomUUID(), wine, place, drunkAt, rating, price, sensory,
      notes: typeof payload.notes === 'string' ? payload.notes.trim().slice(0, 3000) : undefined,
      createdAt: new Date().toISOString(),
    };

    if (typeof payload.photo === 'string' && payload.photo) {
      const image = dataUrlToImage(payload.photo);
      if (!image) return json({ error: 'La foto deve essere JPG, PNG o WebP e non superare 5 MB.' }, 422);
      const extension = image.mime === 'image/jpeg' ? 'jpg' : image.mime.split('/')[1];
      const imageId = `${crypto.randomUUID()}.${extension}`;
      await store.set(`photos/${imageId}`, new Blob([image.bytes], { type: image.mime }), { metadata: { mime: image.mime } });
      tasting.photo = { id: imageId, mime: image.mime };
    }

    const current = (await store.get(key, { type: 'json' }) || []) as Tasting[];
    await store.setJSON(key, [tasting, ...current]);
    return json({ tasting }, 201);
  } catch {
    return json({ error: 'Non è stato possibile salvare la bevuta.' }, 400);
  }
};

export const config = { path: '/api/cantine/:slug/bevute' };
