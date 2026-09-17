import { getStore } from '@netlify/blobs';
import { getUser, verifyRequestOrigin } from '@netlify/identity';

type Participant = { id: string; handle: string; state: 'pending' | 'accepted' | 'declined' };
type SharedTasting = {
  id: string;
  producerSlug: string;
  producerName: string;
  wine: string;
  drunkAt: string;
  place: string;
  price?: number;
  photo?: { id: string; mime: string };
  owner: { id: string; handle: string };
  participants: Participant[];
  createdAt: string;
};

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'private, no-store' },
});

const visibleTo = (tasting: SharedTasting, userId: string) => tasting.owner.id === userId || tasting.participants.some((participant) => participant.id === userId);

export default async (request: Request) => {
  const user = await getUser();
  if (!user) return json({ error: 'Accesso riservato agli utenti registrati.' }, 401);
  const store = getStore({ name: 'champagne-tasting-notes', consistency: 'strong' });
  const id = new URL(request.url).searchParams.get('id') || '';

  if (request.method === 'GET') {
    if (id) {
      const tasting = await store.get(`shared-tastings/${id}.json`, { type: 'json' }) as SharedTasting | null;
      if (!tasting || !visibleTo(tasting, user.id)) return json({ error: 'Degustazione condivisa non trovata.' }, 404);
      return json({ tasting });
    }
    const { blobs } = await store.list({ prefix: 'shared-tastings/' });
    const events = (await Promise.all(blobs.map(async (blob) => store.get(blob.key, { type: 'json' }) as Promise<SharedTasting | null>)))
      .filter((tasting): tasting is SharedTasting => Boolean(tasting && visibleTo(tasting, user.id)))
      .filter((tasting) => tasting.owner.id !== user.id && tasting.participants.some((participant) => participant.id === user.id && participant.state === 'pending'))
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    return json({ invitations: events });
  }

  if (request.method !== 'DELETE') return json({ error: 'Metodo non supportato.' }, 405);
  try {
    verifyRequestOrigin(request);
    const tasting = await store.get(`shared-tastings/${id}.json`, { type: 'json' }) as SharedTasting | null;
    if (!tasting) return json({ error: 'Degustazione condivisa non trovata.' }, 404);
    const participant = tasting.participants.find((item) => item.id === user.id);
    if (!participant || participant.state !== 'pending') return json({ error: 'Questo invito non è più disponibile.' }, 409);
    participant.state = 'declined';
    await store.setJSON(`shared-tastings/${id}.json`, tasting);
    return json({ ok: true });
  } catch {
    return json({ error: 'Non è stato possibile aggiornare l’invito.' }, 400);
  }
};

export const config = { path: '/api/degustazioni-condivise', method: ['GET', 'DELETE'] };
