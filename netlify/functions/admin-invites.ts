import { getUser, verifyRequestOrigin } from '@netlify/identity';
import { createCode, hashCode, json, listInvites, saveInvite } from './_shared/invites';
import type { InviteRecord } from './_shared/invites';

const isAdmin = async () => (await getUser())?.roles?.includes('admin') ?? false;
const publicInvite = (invite: InviteRecord) => ({
  id: invite.id,
  label: invite.label,
  createdAt: invite.createdAt,
  expiresAt: invite.expiresAt,
  redeemedAt: invite.redeemedAt,
});

export default async (request: Request) => {
  if (!(await isAdmin())) return json({ error: 'Accesso riservato all’amministratore.' }, 403);

  if (request.method === 'GET') return json({ invites: (await listInvites()).map(publicInvite) });
  if (request.method !== 'POST') return json({ error: 'Metodo non supportato.' }, 405);

  try {
    verifyRequestOrigin(request);
    const body = await request.json() as Record<string, unknown>;
    const label = typeof body.label === 'string' ? body.label.trim().slice(0, 80) : '';
    const days = Number(body.days);
    if (!label || !Number.isInteger(days) || days < 1 || days > 30) {
      return json({ error: 'Inserisci un riferimento e una scadenza tra 1 e 30 giorni.' }, 422);
    }
    const code = createCode();
    const now = new Date();
    const record: InviteRecord = {
      id: crypto.randomUUID(),
      codeHash: await hashCode(code),
      label,
      createdAt: now.toISOString(),
      expiresAt: new Date(now.getTime() + days * 86_400_000).toISOString(),
    };
    await saveInvite(record);
    return json({ invite: publicInvite(record), code }, 201);
  } catch {
    return json({ error: 'Non è stato possibile creare il codice.' }, 400);
  }
};

export const config = { path: '/api/admin/inviti', method: ['GET', 'POST'] };
