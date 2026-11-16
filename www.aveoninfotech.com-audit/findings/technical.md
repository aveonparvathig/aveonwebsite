# Technical SEO - findings (audit of 16 Nov 2026; previous 6 Nov 2026)

**Score: 93/100** (previous 90)

## What works
- All 66 sitemap URLs return 200 directly (no redirects, no 4xx/5xx). Sitemap valid (urlset, validated by sitemap_discovery.py), declared in robots.txt, 66 loc entries, no /get-started* URLs in it.
- Every sitemap page: self-referencing canonical equal to the sitemap URL, no robots meta, no X-Robots-Tag, viewport present, exactly one H1, JSON-LD present, lang="en". No duplicate titles.
- robots.txt: Allow /, disallows /api/ and /studio/ only; explicit allow groups for 15 AI/search bots; Host and Sitemap declared.
- Redirects: all 7 legacy .php URLs 308 to the new paths in one hop. http to https, apex to www and trailing slash all 308 in one hop. Unknown URL returns a real 404.
- /get-started is noindex,nofollow with a self canonical and is absent from the sitemap, which is consistent. /get-started/college-erp returns 404 (sub-path not a live route).
- Security headers: HSTS (max-age=63072000), nosniff, X-Frame-Options SAMEORIGIN, Referrer-Policy, Permissions-Policy, and now a Content-Security-Policy-Report-Only.
- Server rendered, HTML 373 KB for the home page, Vercel prerender (X-Nextjs-Prerender). No JS rendering dependency for content.
- IndexNow key file live: /cb696e7d7768116a23334e12bc86313e.txt returns 200 with matching key; scripts/indexnow.mjs exists.
- New comparison pages (5) all 200, in sitemap (lastmod 13 Nov), self canonical, FAQPage, BreadcrumbList, WebPage, SoftwareApplication schema.
- hreflang: none on any page. Fine for a single-language en site (optional en-IN).

## Status vs 6 Nov audit
| Item | Status |
|---|---|
| No CSP header | Partly fixed: CSP now sent in Report-Only mode; not yet enforced |
| Sitemap 59 URLs | Now 66 (+5 comparisons, +2 others); lastmod fresh, no warnings |
| Legacy .php 308s | Unchanged (working) |
| college-erp.php outranking /products/college-erp (GSC) | Not re-measured here; still monitor |
| messtoken subdomain indexable | Unchanged: still `index, follow`, 200 |

## Findings
| Severity | Finding | Evidence | Fix |
|---|---|---|---|
| Medium | 3 of the 8 state slugs do not 308: /solutions/college-erp-kerala, -andhra-pradesh, -uttar-pradesh return 404. maharashtra, telangana, gujarat, delhi, west-bengal 308 to /solutions/by-state. tamil-nadu and karnataka are live 200 pages (in sitemap). Only applies if the 404 slugs were meant to be redirected, and if they were ever indexed or linked | curl status codes | Confirm intent. If those URLs ever had links/impressions, add them to the redirect list in next.config (line ~104) |
| Medium | Drift regressions on /products/college-erp: H1 changed ("College Management System" to "College ERP Software for Affiliated and Autonomous Colleges", CRITICAL by rule, similarity 38%), title and meta description rewritten, schema modified | drift_compare vs 3 Nov baselines | Intentional keyword retargeting by the look of it; keep, monitor CTR/position in GSC for 2 weeks, then re-baseline |
| Medium | /services drift: title changed from "Campus ERP Services & Implementation" to "Software Development Company in Coimbatore", description and schema changed, H2s 7 to 9 | drift_compare | Intentional repositioning; confirm that campus ERP implementation intent is covered elsewhere (e.g. /products or /services/*); re-baseline |
| Low | Drift on / and /blog/naac-accreditation-checklist: schema modified, content changed, blog meta description reworded (WARNING/INFO only; canonical, robots and schema presence unchanged) | drift_compare | Validate schema once, then re-baseline all four |
| Low | CSP is Report-Only and uses 'unsafe-inline' and 'unsafe-eval' in script-src | response header | Collect reports, move to nonce-based CSP, then enforce |
| Low | messtoken.aveoninfotech.com is indexable (`index, follow`), a client/app subdomain that can dilute brand SERPs | meta robots | Set noindex if it is an app, or leave if intended |
| Low | Titles over 60 characters on about 18 pages (e.g. /, /products, school-erp, 5 comparisons, several blog posts, 61-70 chars); /comparisons/aveon-vs-universityerp description 161 chars; /privacy and /terms descriptions short (64, 54) | per-page scan | Trim to 60 / 160; low impact (truncation only) |
| Low | Thin pages: /privacy 248, /terms 241, /about/team 265, /careers 295, /blog/ai-chatbot-for-students 292 words | per-page scan | Legal pages fine; add copy to team, careers and the blog post |
| Low | 404 page canonical points to /_not-found and has two robots metas (noindex; noindex, follow) | /zz-nope, /get-started/college-erp | Cosmetic; status code is correct 404 |
| Info | Sitemap uses changefreq/priority (ignored by Google) and lastmod values are rounded to midnight, 39 URLs share 2026-11-10 | sitemap.xml | Use true per-page modification dates so lastmod stays trusted |

## Not run
Core Web Vitals lab/field data (drift run with --skip-cwv), crawl of internal links.
