# Action Plan — www.aveoninfotech.com (16 Nov 2026)

Owner key: **[C]** = can be done in code here · **[U]** = needs the owner (accounts, facts, consent)

## Critical — this week
1. **[U] Start building off-site authority.** Claim and complete G2, Capterra/GetApp, SoftwareSuggest and Techjockey listings; ask 5–10 happy clients for reviews there. Create a Wikidata item. Target 20–30 referring domains by Feb 2027.
2. **[U] Check the Google Ads prepay balance** — paid sessions fell to 1 on Sat 15 Nov.

## High — within 1 week
3. **[U→C] Confirm or remove doubtful claims:** the Symbiosis case study on `/solutions/multi-campus-management`; the "ISO 9001 certified process" line on `/services/custom-software-development`; the "1 March 2024" publish dates on five guides (if the guides weren't live in 2024, change to their real dates).
4. **[C] Fix contradictory stats** on `/solutions/by-state` (16+ years, 12 modules, 24/7, regional teams), `/solutions/coimbatore` (12+ years, 50,000+ students) and `/blog/integrated-erp-vs-point-solutions` ("nine products") — read from `siteConfig.stats`.
5. **[C] Delete** `public/ai-search.json`, `public/ai-search-instructions.txt`, `public/ai-crawl-metadata.json`.
6. **[C] Get the comparison pages discovered:** add them to `llms.txt`; link them from `/pricing`, the college/university product pages and the footer; then **[C/U]** resubmit the sitemap in GSC and request indexing (start with aveon-vs-mastersoft).
7. **[C] Fix orphans and the broken image:** link `/resources/college-erp-buyers-guide`, `/solutions/coimbatore`, `/about/team`; fix `app/(site)/solutions/coimbatore/page.tsx:75` (missing `/products/college-erp-team.webp`).
8. **[U] Mark GA4 key events** (`demo_request`, `form_submit`, `phone_click`, `whatsapp_click`) and fix campaign tagging so paid sessions stop showing "(organic)".
9. **[C] Ad landing pages:** per-variant proof (no college logo wall on School/Hostel), a lighter second offer ("Get a price estimate" / brochure on WhatsApp), one line on how pricing works, a product visual, and a `/get-started/naac` variant. Use only the two offers the owner confirmed.

## Medium — within 1 month
10. **[C] Retarget `/products` at "campus management system"** (H1, explainer, product chooser, CollectionPage/ItemList schema).
11. **[C] NAAC page:** H1 with "software", SoftwareApplication + breadcrumb schema; **[U]** cleaned SSR/AQAR screenshots.
12. **[C] Schema:** BreadcrumbList + SoftwareApplication on every product page; Service entity on `/solutions/coimbatore`; `datePublished` on comparison pages; **[U]** GBP URL and lat/long for LocalBusiness `geo`/`sameAs`/`hasMap`.
13. **[C] Titles:** use `title.absolute` for the five comparison pages and the other titles over 60 characters; put "alternative" into comparison titles.
14. **[C] Expand thin pages:** three old blog posts (132–196 words), fees-management / online-examination / lms-ai-chatbot (~250 words), `/solutions/coimbatore`.
15. **[C] INP under 200 ms:** reduce client JS on the homepage and college-erp page, defer third-party scripts.
16. **[C] `/contact` form:** associate labels with the five inputs.
17. **[C] Homepage:** one plain sentence on who Aveon is (education ERP, Coimbatore, since 2012, 200+ institutions); one wording for go-live time everywhere.
18. **[U] Citations:** confirm/create Justdial, Sulekha, Clutch, GoodFirms with exact GBP NAP; add street and phone on IndiaMART.

## Low — backlog
19. **[C]** Enforce a nonce-based CSP; noindex `messtoken.aveoninfotech.com` (infra); fix 404 page canonical/robots; drop meta keywords; descriptive client-logo alt text; clean image filenames; eager-load hero images on /about, /careers, /partners, /products; more OG images.
20. **[U]** Add a free Moz key and verify Bing Webmaster for real backlink data; re-run this audit in ~4 weeks.
21. **[C]** Re-baseline drift for `/products/college-erp` and `/services` after two weeks of GSC data.
22. **[U]** Named author with bio for the guides (raises E-E-A-T).
