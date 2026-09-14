import { readFile, writeFile } from 'node:fs/promises';

const source = await readFile(new URL('../src/data/maisons.ts', import.meta.url), 'utf8');
const records = [...source.matchAll(/"name":\s*"([^"]+)"\s*,\s*"area":\s*"([^"]+)"\s*,\s*"website":\s*"([^"]*)"\s*,\s*"logo":\s*"([^"]*)"/g)].map(([, name, area, website, logo]) => ({ name, area, website, logo }));

const inspect = async (url, kind) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);
  try {
    const response = await fetch(url, {
      redirect: 'follow', signal: controller.signal,
      headers: { 'User-Agent': 'ChampagneNotesLinkAudit/1.0', Range: 'bytes=0-1024', Accept: kind === 'logo' ? 'image/avif,image/webp,image/svg+xml,image/*,*/*;q=.8' : 'text/html,application/xhtml+xml,*/*;q=.8' },
    });
    const contentType = response.headers.get('content-type') || '';
    const validType = kind === 'website' || /^image\//i.test(contentType) || /svg|octet-stream/i.test(contentType);
    await response.body?.cancel();
    return { ok: response.status >= 200 && response.status < 400 && validType, status: response.status, type: contentType, finalUrl: response.url };
  } catch (error) {
    return { ok: false, status: 0, type: error instanceof Error ? error.name : 'network error', finalUrl: '' };
  } finally { clearTimeout(timeout); }
};

const queue = async (items, work, concurrency = 12) => {
  const output = []; let cursor = 0;
  await Promise.all(Array.from({ length: concurrency }, async () => {
    while (cursor < items.length) { const current = items[cursor++]; output.push(await work(current)); }
  }));
  return output;
};

const websiteChecks = await queue(records, async (record) => ({ ...record, kind: 'website', ...(await inspect(record.website, 'website')) }), 24);
const logoChecks = await queue(records, async (record) => ({ ...record, kind: 'logo', ...(await inspect(record.logo, 'logo')) }), 24);
const failures = [...websiteChecks, ...logoChecks].filter((result) => !result.ok).map(({ name, area, kind, status, type, finalUrl }) => ({ name, area, kind, status, type, finalUrl }));
const redirects = [...websiteChecks, ...logoChecks].filter((result) => result.ok && result.finalUrl && result.finalUrl !== result.website && result.finalUrl !== result.logo).map(({ name, kind, finalUrl }) => ({ name, kind, finalUrl }));
const report = { totalMaisons: records.length, checks: websiteChecks.length + logoChecks.length, valid: websiteChecks.filter((r) => r.ok).length + logoChecks.filter((r) => r.ok).length, failures, redirects };
await writeFile(new URL('../tmp-maison-audit.json', import.meta.url), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ totalMaisons: report.totalMaisons, checks: report.checks, valid: report.valid, failures: report.failures.length, redirects: report.redirects.length }, null, 2));
