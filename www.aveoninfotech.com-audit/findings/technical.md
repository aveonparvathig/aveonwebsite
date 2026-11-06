# Technical SEO — findings

**Score: 90/100**

## Crawlability & indexability
- `robots.txt`: `Allow: /`; disallows only `/api/`, `/studio/`. Deliberate groups for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, Bingbot, Amazonbot, meta-externalagent, CCBot. `Host` + `Sitemap` declared.
- `sitemap.xml`: 59 URLs, submitted to GSC 2026-11-03, `warnings: 0`, `errors: 0`.
- URL Inspection API (sampled): `/products/college-erp`, `/solutions/college-erp-tamil-nadu`, `/blog/what-is-campus-erp`, `/products/iqac-naac-nba/naac` → **PASS / "Submitted and indexed"**, `robots_txt_state: ALLOWED`, `page_fetch_state: SUCCESSFUL`, canonical match = true, crawled as MOBILE.
- Server-rendered: 2,019 words present without JavaScript (agentic check), `js_shell_marker: false`.

## Redirects (migration)
All legacy PHP URLs return **308** to new routes:
- `/college-erp.php → /products/college-erp`
- `/school-erp.php → /products/school-erp`
- `/careers.php → /careers`
- `/contact.php → /contact`
- `/our-company.php → /about`
- `/our-team.php → /about/team`
- `/index.php → /`

## Security headers (curl -I)
Present: `Strict-Transport-Security: max-age=63072000`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`. Server: Vercel.
**Missing:** `Content-Security-Policy`.

## Findings
| Severity | Finding | Fix |
|---|---|---|
| Medium | `/college-erp.php` (1,479 imp, pos 4.7) still out-ranks target `/products/college-erp` (427 imp, pos 6.9); equity not fully consolidated | Keep 308s, resubmit via Indexing API, audit internal links to new paths, monitor until legacy drops |
| Low | No CSP header | Add report-only CSP via `next.config` headers() |
| Low | App subdomain `messtoken.aveoninfotech.com` in SERPs | Confirm `noindex` where appropriate |
