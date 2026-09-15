import { getUser, verifyRequestOrigin } from '@netlify/identity';
import { createCode, deleteInvite, getInvite, hashCode, json, listInvites, saveInvite } from './_shared/invites';
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
  if (!['POST', 'PATCH', 'DELETE'].includes(request.method)) return json({ error: 'Metodo non supportato.' }, 405);

  try {
    verifyRequestOrigin(request);
    if (request.method === 'DELETE') {
      const id = new URL(request.url).searchParams.get('id') || '';
      if (!id || !(await getInvite(id))) return json({ error: 'Invito non trovato.' }, 404);
      await deleteInvite(id);
      return json({ ok: true });
    }
    const body = await request.json() as Record<string, unknown>;
    const label = typeof body.label === 'string' ? body.label.trim().slice(0, 80) : '';
    const days = Number(body.days);
    if (!label || !Number.isInteger(days) || days < 1 || days > 30) {
      return json({ error: 'Inserisci un riferimento e una scadenza tra 1 e 30 giorni.' }, 422);
    }
    const now = new Date();
    if (request.method === 'PATCH') {
      const id = typeof body.id === 'string' ? body.id : '';
      const existing = id ? await getInvite(id) : null;
      if (!existing) return json({ error: 'Invito non trovato.' }, 404);
      if (existing.redeemedAt) return json({ error: 'Un invito già utilizzato non può essere modificato.' }, 409);
      const updated: InviteRecord = { ...existing, label, expiresAt: new Date(now.getTime() + days * 86_400_000).toISOString() };
      await saveInvite(updated);
      return json({ invite: publicInvite(updated) });
    }
    const code = createCode();
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

export const config = { path: '/api/admin/inviti', method: ['GET', 'POST', 'PATCH', 'DELETE'] };
