// Hygiene check for client CMS portals before enabling the "Powered by
// Aveon" link. For each hostname it compares what a browser and Googlebot
// receive and flags cloaking, missing TLS, missing SEO basics and whether
// the attribution link is present in the raw HTML.
//
//   node scripts/portal-check.mjs portals.txt
//   (one hostname per line, e.g. cms.example.ac.in)
import { readFileSync } from "node:fs";

const file = process.argv[2];
if (!file) {
  console.error("usage: node scripts/portal-check.mjs <hostnames.txt>");
  process.exit(1);
}
const hosts = readFileSync(file, "utf8")
  .split(/\r?\n/)
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith("#"));

const UA = {
  browser: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
  googlebot: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
};

async function fetchAs(url, ua) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), 20000);
  try {
    const res = await fetch(url, { headers: { "User-Agent": ua }, redirect: "follow", signal: ctl.signal });
    const html = await res.text();
    return { ok: true, status: res.status, html, finalUrl: res.url };
  } catch (e) {
    return { ok: false, error: e.cause?.code || e.name || String(e) };
  } finally {
    clearTimeout(t);
  }
}

const title = (h) => (h.match(/<title[^>]*>([^<]*)/i)?.[1] || "").trim();
const words = (h) =>
  h
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
const links = (h) => (h.match(/<a\s[^>]*href=/gi) || []).length;

const rows = [];
for (const host of hosts) {
  const url = `https://${host}/`;
  const [b, g] = await Promise.all([fetchAs(url, UA.browser), fetchAs(url, UA.googlebot)]);
  const row = { host, flags: [] };

  if (!b.ok) {
    row.flags.push(`UNREACHABLE (${b.error})`);
    if (b.error === "CERT_HAS_EXPIRED" || /CERT|SSL|TLS/i.test(b.error || "")) row.flags.push("TLS INVALID");
    rows.push(row);
    continue;
  }
  row.status = b.status;
  row.title = title(b.html);
  row.words = words(b.html);
  row.links = links(b.html);
  row.aveonLink = /aveoninfotech\.com/i.test(b.html);

  if (g.ok) {
    const sizeDelta = Math.abs(g.html.length - b.html.length);
    const titleDiff = title(g.html) !== row.title;
    if (titleDiff || sizeDelta > 5000 || Math.abs(links(g.html) - row.links) > 10) {
      row.flags.push(`CLOAKING? googlebot title="${title(g.html)}" links=${links(g.html)} vs browser links=${row.links}`);
    }
  }
  if (/IIS Windows Server|Apache2 Ubuntu Default|Welcome to nginx/i.test(row.title)) row.flags.push("DEFAULT SERVER PAGE (app not bound)");
  if (!row.title || /^CMS$/i.test(row.title)) row.flags.push("NO/GENERIC TITLE");
  if (!/<meta\s+name="description"/i.test(b.html)) row.flags.push("NO META DESCRIPTION");
  if (row.words < 30) row.flags.push("EMPTY SHELL (client-rendered)");
  if (!row.aveonLink) row.flags.push("NO ATTRIBUTION LINK");
  if (/href="http:\/\/www\.aveoninfotech\.com/i.test(b.html)) row.flags.push("ATTRIBUTION USES HTTP");
  if (/rel="[^"]*nofollow/i.test(b.html) && row.aveonLink) row.flags.push("ATTRIBUTION NOFOLLOW");
  rows.push(row);
}

for (const r of rows) {
  const ok = r.flags.length === 0;
  console.log(`${ok ? "OK  " : "FLAG"} ${r.host} ${r.status ?? ""} "${r.title ?? ""}" words=${r.words ?? "-"} links=${r.links ?? "-"} aveon=${r.aveonLink ?? "-"}`);
  for (const f of r.flags) console.log(`      - ${f}`);
}
console.log(`\n${rows.filter((r) => r.flags.length === 0).length}/${rows.length} portals ready for the attribution link.`);
