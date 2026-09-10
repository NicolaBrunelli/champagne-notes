import { getStore } from '@netlify/blobs';
import { getUser } from '@netlify/identity';

const isOwner = async () => {
  const user = await getUser();
  const runtime = globalThis as unknown as { Netlify: { env: { get: (key: string) => string | undefined } } };
  const ownerEmail = runtime.Netlify.env.get('OWNER_EMAIL')?.trim().toLowerCase();
  return Boolean(ownerEmail && user?.email?.toLowerCase() === ownerEmail);
};

export default async (request: Request) => {
  if (!(await isOwner())) return new Response('Accesso riservato.', { status: 403, headers: { 'Cache-Control': 'private, no-store' } });
  const id = new URL(request.url).pathname.split('/').filter(Boolean)[2];
  if (!id || !/^[a-f0-9-]+\.(?:jpg|png|webp)$/.test(id)) return new Response('Foto non valida.', { status: 400 });
  const store = getStore({ name: 'champagne-tasting-notes', consistency: 'strong' });
  const image = await store.getWithMetadata(`photos/${id}`, { type: 'arrayBuffer' });
  if (!image) return new Response('Foto non trovata.', { status: 404 });
  const mime = typeof image.metadata?.mime === 'string' ? image.metadata.mime : 'application/octet-stream';
  return new Response(image.data, { headers: { 'Content-Type': mime, 'Cache-Control': 'private, no-store' } });
};

export const config = { path: '/api/foto/:id' };
