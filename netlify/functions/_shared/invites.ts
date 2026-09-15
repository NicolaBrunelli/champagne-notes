import { getStore } from '@netlify/blobs';

export type InviteRecord = {
  id: string;
  codeHash: string;
  label: string;
  createdAt: string;
  expiresAt: string;
  redeemedAt?: string;
  redeemedBy?: string;
};

const store = () => getStore({ name: 'champagne-invites', consistency: 'strong' });
const keyFor = (id: string) => `invites/${id}.json`;

export const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'private, no-store' },
});

export const cleanCode = (value: unknown) => typeof value === 'string'
  ? value.toUpperCase().replace(/[^A-Z0-9]/g, '')
  : '';

export const createCode = () => {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const bytes = crypto.getRandomValues(new Uint8Array(15));
  const raw = Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join('');
  return `CRAIE-${raw.slice(0, 5)}-${raw.slice(5, 10)}-${raw.slice(10)}`;
};

export const hashCode = async (code: string) => {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(cleanCode(code)));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
};

export const listInvites = async () => {
  const entries = (await store().list({ prefix: 'invites/' })).blobs;
  const records = await Promise.all(entries.map(async ({ key }) => store().get(key, { type: 'json' }) as Promise<InviteRecord | null>));
  return records.filter((record): record is InviteRecord => Boolean(record)).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
};

export const saveInvite = (record: InviteRecord) => store().setJSON(keyFor(record.id), record);
export const getInvite = (id: string) => store().get(keyFor(id), { type: 'json' }) as Promise<InviteRecord | null>;
export const deleteInvite = (id: string) => store().delete(keyFor(id));
