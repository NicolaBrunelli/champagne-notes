import { admin, verifyRequestOrigin } from '@netlify/identity';
import { getStore } from '@netlify/blobs';
import { cleanCode, hashCode, json, listInvites, saveInvite } from './_shared/invites';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cleanHandle = (value: unknown) => typeof value === 'string'
  ? value.trim().toLowerCase().replace(/[^a-z0-9._-]/g, '').slice(0, 32)
  : '';
type CommunityMember = { id: string; handle: string };

export default async (request: Request) => {
  if (request.method !== 'POST') return json({ error: 'Metodo non supportato.' }, 405);
  try {
    verifyRequestOrigin(request);
    const body = await request.json() as Record<string, unknown>;
    const code = cleanCode(body.code);
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase().slice(0, 254) : '';
    const handle = cleanHandle(body.handle);
    const password = typeof body.password === 'string' ? body.password : '';
    if (code.length !== 20 || !emailPattern.test(email) || handle.length < 3 || password.length < 8) {
      return json({ error: 'Controlla codice, email, username e password (almeno 8 caratteri).' }, 422);
    }

    const targetHash = await hashCode(code);
    const matches = (await listInvites()).filter((record) => record.codeHash === targetHash);
    const current = matches[0];
    if (!current || current.redeemedAt || new Date(current.expiresAt).getTime() <= Date.now()) {
      return json({ error: 'Il codice non è valido, è scaduto o è già stato utilizzato.' }, 422);
    }

    const users = await admin.listUsers({ perPage: 1000 });
    const handleTaken = users.some((user) => String(user.userMetadata?.handle || '').toLowerCase() === handle);
    if (handleTaken) return json({ error: 'Questo username è già in uso.' }, 409);

    const user = await admin.createUser({
      email,
      password,
      data: { user_metadata: { full_name: handle, handle, invite_id: current.id } },
    });
    current.redeemedAt = new Date().toISOString();
    current.redeemedBy = user.id;
    const community = getStore({ name: 'champagne-tasting-notes', consistency: 'strong' });
    const existing = (await community.get('community/participants.json', { type: 'json' }) || []) as CommunityMember[];
    const withoutDuplicate = existing.filter((member) => member?.id && member.id !== user.id && member.handle !== handle);
    await Promise.all([saveInvite(current), community.setJSON('community/participants.json', [...withoutDuplicate, { id: user.id, handle }])]);
    return json({ email, handle }, 201);
  } catch (error) {
    const message = error instanceof Error && /already exists|already registered/i.test(error.message)
      ? 'Esiste già un account associato a questa email.'
      : 'Non è stato possibile creare l’account.';
    return json({ error: message }, 400);
  }
};

export const config = { path: '/api/accesso/codice', method: ['POST'] };
