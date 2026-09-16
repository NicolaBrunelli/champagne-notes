import { getStore } from '@netlify/blobs';
import { getUser, verifyRequestOrigin } from '@netlify/identity';

type AvatarMetadata = { mime: string };
const avatarKey = (id: string) => `avatars/${id}`;
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'private, no-store' } });
const validId = (value: string | null) => Boolean(value && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value));
const imageFromDataUrl = (value: unknown) => {
  if (typeof value !== 'string') return undefined;
  const match = /^data:(image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+/=]+)$/.exec(value);
  if (!match) return undefined;
  const bytes = Uint8Array.from(atob(match[2]), (character) => character.charCodeAt(0));
  return bytes.byteLength <= 2 * 1024 * 1024 ? { bytes, mime: match[1] } : undefined;
};

export default async (request: Request) => {
  const viewer = await getUser();
  if (!viewer) return new Response('Accesso riservato agli utenti registrati.', { status: 401, headers: { 'Cache-Control': 'private, no-store' } });
  const store = getStore({ name: 'champagne-tasting-notes', consistency: 'strong' });
  if (request.method === 'GET') {
    const requestedId = new URL(request.url).searchParams.get('id');
    if (requestedId && !validId(requestedId)) return new Response('Profilo non trovato.', { status: 404 });
    const id = requestedId || viewer.id;
    const [image, details] = await Promise.all([
      store.get(avatarKey(id), { type: 'arrayBuffer' }),
      store.getMetadata(avatarKey(id)),
    ]);
    // A missing image is a normal state for a new passport, not an error. A
    // tiny neutral placeholder avoids a noisy 404 in the console while the UI
    // still shows the member's textual initial where appropriate.
    if (!image) return new Response('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" role="img" aria-label="Foto profilo non impostata"><rect width="80" height="80" fill="#f6f2e9"/><circle cx="40" cy="40" r="39" fill="none" stroke="#b58b46"/><circle cx="40" cy="31" r="10" fill="#d8cfbb"/><path d="M20 65c3-13 13-19 20-19s17 6 20 19" fill="#d8cfbb"/></svg>', { headers: { 'Content-Type': 'image/svg+xml; charset=utf-8', 'Cache-Control': 'private, no-store' } });
    const mime = typeof details?.metadata?.mime === 'string' ? details.metadata.mime : 'image/jpeg';
    return new Response(image, { headers: { 'Content-Type': mime, 'Cache-Control': 'private, no-store' } });
  }
  if (request.method !== 'POST') return json({ error: 'Metodo non supportato.' }, 405);
  try {
    verifyRequestOrigin(request);
    const photo = imageFromDataUrl((await request.json() as Record<string, unknown>).photo);
    if (!photo) return json({ error: 'La foto deve essere JPG, PNG o WebP e non superare 2 MB.' }, 422);
    await store.set(avatarKey(viewer.id), new Blob([photo.bytes], { type: photo.mime }), { metadata: { mime: photo.mime, updatedAt: new Date().toISOString() } as AvatarMetadata & { updatedAt: string } });
    return json({ ok: true }, 201);
  } catch {
    return json({ error: 'Non è stato possibile salvare la foto profilo.' }, 400);
  }
};

export const config = { path: '/api/profilo/avatar', method: ['GET', 'POST'] };
