import { admin, getUser, verifyRequestOrigin } from '@netlify/identity';
import { getStore } from '@netlify/blobs';

type CommunityMember = { id: string; handle: string };
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'private, no-store' },
});
const cleanHandle = (value: unknown) => typeof value === 'string'
  ? value.trim().toLowerCase().replace(/[^a-z0-9._-]/g, '').slice(0, 32)
  : '';

export default async (request: Request) => {
  const viewer = await getUser();
  if (!viewer) return json({ error: 'Accesso riservato agli utenti registrati.' }, 401);
  if (request.method !== 'PATCH') return json({ error: 'Metodo non supportato.' }, 405);
  try {
    verifyRequestOrigin(request);
    const handle = cleanHandle((await request.json() as Record<string, unknown>).handle);
    if (handle.length < 3) return json({ error: 'Lo username deve contenere almeno 3 caratteri.' }, 422);
    const users = await admin.listUsers({ perPage: 1000 });
    const usedByAnotherUser = users.some((user) => user.id !== viewer.id && cleanHandle(user.userMetadata?.handle || user.name) === handle);
    if (usedByAnotherUser) return json({ error: 'Questo username è già in uso.' }, 409);
    const store = getStore({ name: 'champagne-tasting-notes', consistency: 'strong' });
    const existing = (await store.get('community/participants.json', { type: 'json' }) || []) as CommunityMember[];
    const withoutDuplicates = existing.filter((member) => member?.id && member.id !== viewer.id && member.handle !== handle);
    withoutDuplicates.push({ id: viewer.id, handle });
    await store.set('community/participants.json', JSON.stringify(withoutDuplicates));
    return json({ handle });
  } catch {
    return json({ error: 'Non è stato possibile aggiornare lo username.' }, 400);
  }
};

export const config = { path: '/api/profilo/username', method: ['PATCH'] };
