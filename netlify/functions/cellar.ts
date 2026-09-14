import { getStore } from '@netlify/blobs';
import { getUser, verifyRequestOrigin } from '@netlify/identity';

type CellarBottle = { id: string; producer: string; wine: string; vintage?: string; quantity: number; createdAt: string };
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'private, no-store' } });

export default async (request: Request) => {
  const user = await getUser();
  if (!user) return json({ error: 'Accesso riservato agli utenti registrati.' }, 401);
  const store = getStore({ name: 'champagne-tasting-notes', consistency: 'strong' });
  const key = `cellars/${user.id}.json`;
  if (request.method === 'GET') return json({ bottles: (await store.get(key, { type: 'json' }) || []) as CellarBottle[] });
  if (!['POST', 'DELETE'].includes(request.method)) return json({ error: 'Metodo non supportato.' }, 405);
  try {
    verifyRequestOrigin(request);
    const current = (await store.get(key, { type: 'json' }) || []) as CellarBottle[];
    if (request.method === 'DELETE') {
      const id = new URL(request.url).searchParams.get('id') || '';
      if (!current.some((bottle) => bottle.id === id)) return json({ error: 'Bottiglia non trovata.' }, 404);
      await store.setJSON(key, current.filter((bottle) => bottle.id !== id));
      return json({ ok: true });
    }
    const body = await request.json() as Record<string, unknown>;
    const producer = typeof body.producer === 'string' ? body.producer.trim().slice(0, 120) : '';
    const wine = typeof body.wine === 'string' ? body.wine.trim().slice(0, 160) : '';
    const vintage = typeof body.vintage === 'string' ? body.vintage.trim().slice(0, 12) : '';
    const quantity = Number(body.quantity);
    if (!producer || !wine || !Number.isInteger(quantity) || quantity < 1 || quantity > 99) return json({ error: 'Indica cantina, vino e quantità.' }, 422);
    const bottle: CellarBottle = { id: crypto.randomUUID(), producer, wine, vintage: vintage || undefined, quantity, createdAt: new Date().toISOString() };
    await store.setJSON(key, [bottle, ...current]);
    return json({ bottle }, 201);
  } catch {
    return json({ error: 'Non è stato possibile aggiornare la cantina.' }, 400);
  }
};

export const config = { path: '/api/cantina-personale', method: ['GET', 'POST', 'DELETE'] };
