import { getStore } from '@netlify/blobs';
import { getUser, verifyRequestOrigin } from '@netlify/identity';

type WishlistItem = { id: string; producer: string; producerSlug?: string; wine: string; createdAt: string };
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'private, no-store' } });
const text = (value: unknown, length: number) => typeof value === 'string' ? value.trim().slice(0, length) : '';

export default async (request: Request) => {
  const user = await getUser();
  if (!user) return json({ error: 'Accesso riservato agli utenti registrati.' }, 401);
  const store = getStore({ name: 'champagne-tasting-notes', consistency: 'strong' });
  const key = `wishlists/${user.id}.json`;
  const current = () => store.get(key, { type: 'json' }) as Promise<WishlistItem[] | null>;
  if (request.method === 'GET') return json({ items: (await current()) || [] });
  if (!['POST', 'DELETE'].includes(request.method)) return json({ error: 'Metodo non supportato.' }, 405);
  try {
    verifyRequestOrigin(request);
    const items = (await current()) || [];
    if (request.method === 'DELETE') {
      const id = new URL(request.url).searchParams.get('id') || '';
      if (!items.some((item) => item.id === id)) return json({ error: 'Champagne non trovato nella wishlist.' }, 404);
      await store.setJSON(key, items.filter((item) => item.id !== id));
      return json({ ok: true });
    }
    const body = await request.json() as Record<string, unknown>;
    const producer = text(body.producer, 120);
    const wine = text(body.wine, 160);
    const producerSlug = text(body.producerSlug, 100);
    if (!producer || !wine) return json({ error: 'Indica produttore e Champagne.' }, 422);
    const duplicate = items.find((item) => item.producer.toLowerCase() === producer.toLowerCase() && item.wine.toLowerCase() === wine.toLowerCase());
    if (duplicate) return json({ item: duplicate, alreadyThere: true });
    const item: WishlistItem = { id: crypto.randomUUID(), producer, producerSlug: producerSlug || undefined, wine, createdAt: new Date().toISOString() };
    await store.setJSON(key, [item, ...items]);
    return json({ item }, 201);
  } catch {
    return json({ error: 'Non è stato possibile aggiornare la wishlist.' }, 400);
  }
};

export const config = { path: '/api/wishlist', method: ['GET', 'POST', 'DELETE'] };
