import { getStore } from '@netlify/blobs';
import { getUser } from '@netlify/identity';

export default async (request: Request) => {
  if (!(await getUser())) return new Response('Accesso riservato agli utenti registrati.', { status: 401, headers: { 'Cache-Control': 'private, no-store' } });
  const id = new URL(request.url).pathname.split('/').filter(Boolean)[2];
  if (!id || !/^[a-f0-9-]+\.(?:jpg|png|webp)$/.test(id)) return new Response('Foto non valida.', { status: 400 });
  const store = getStore({ name: 'champagne-tasting-notes', consistency: 'strong' });
  const image = await store.getWithMetadata(`photos/${id}`, { type: 'arrayBuffer' });
  if (!image) return new Response('Foto non trovata.', { status: 404 });
  const mime = typeof image.metadata?.mime === 'string' ? image.metadata.mime : 'application/octet-stream';
  return new Response(image.data, { headers: { 'Content-Type': mime, 'Cache-Control': 'private, no-store' } });
};

export const config = { path: '/api/foto/:id' };
