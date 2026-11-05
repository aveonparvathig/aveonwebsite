# Keyword analysis — seven product areas (5 Nov 2026)

Sources: Search Console Search Analytics API (7 Oct – 1 Nov 2026, web, India-weighted, 521 query×page rows); Google autocomplete (India, English) for 20 seed terms; live SERP fetches (India). No paid volume source is connected, so demand is read from Search Console impressions (which only exist where the site already ranks in the top 100) plus autocomplete breadth. Companion to KEYWORD_ANALYSIS_NOV2026.md and the College ERP competitor file.

## Summary of reads

| Area | Non-brand footprint today | Verdict |
|---|---|---|
| School management | 1 query, pos 193 | Invisible despite a rich page. Retune title/H1 toward "school management software"; biggest latent gap. |
| Controller of Examination / exams | 52 impr, brand-led | "controller of examination software" is a low-volume job-title query; lead the cluster on "examination management system" and "online examination software". |
| NAAC | 10 impr (blog ranks 5–7) | Low commercial volume, informational demand owned by the blog. Deepen the product page for "naac accreditation software" + AEO. |
| NBA | 4 impr | Thin. "NBA" is ambiguous (basketball) — always use the full phrase "NBA accreditation software". |
| Canteen management | 105 impr, pos 48–52 | Real demand, page is thin (generic grid). Depth is the whole gap. |
| Grievance management | 13 impr, pos 32–51 | Winnable: weak SERP (govt/academic/project). Education-focused. |
| Software development | 11 impr, "…coimbatore" on homepage | Local-pack SERP; Aveon is in Coimbatore with a GBP. Local play. |

Decisions taken with the user (5 Nov 2026): software development → **local push**; grievance → **education-focused** (no ticket/helpdesk market).

## 1. School management

- **GSC**: "school management erp software" — 1 impr, position 193, landing on the homepage. The /products/school-erp page earns only branded "aveon student erp" traffic. Effectively unranked for the category.
- **Autocomplete**: `school management software` → …free, …india, **…price**, **…price in india**, …erp; `school erp software` → …price, …india, **…companies**; heavy project/github/source-code noise on "school management system".
- **SERP (school management software, India)**: Zoho, schoollog.in, vidyalayaschoolsoftware, elitemindz, edunext, edusap, entrar, edumerge. Dedicated SaaS products, winnable with a properly-titled page (Aveon already has the rich `SchoolERPContent` component).

| Keyword | Intent | Demand | Winnability | Target |
|---|---|---|---|---|
| school management software | commercial | high (price/india variants) | medium | /products/school-erp |
| school erp software | commercial | medium | medium | /products/school-erp |
| school fee management software | commercial | medium | medium-high | /products/school-erp |
| student management system | commercial/mixed | medium | medium | /products/school-erp |
| school management software price in india | commercial, bottom-funnel | low-medium | high | pricing FAQ on the page |
| school management system | mixed (project noise) | high but noisy | low | not primary |

## 2. Controller of Examination / examinations

- **GSC**: "examination infotech" (brand) pos 9.4 on /products/online-examination; "coe", "$coe", "exam" (brand-ish) on /products/coe; "online examination platform for colleges" pos 71.
- **Autocomplete**: `controller of examination software` barely autocompletes — mostly "controller test software" (unrelated hardware) and "duties of controller of examination" (informational). The phrase is a **job-title query, low commercial volume**. `examination management system` → project/er-diagram noise but real. `online examination software` → …india, **…for schools**, …demo, **…price**, **…for jr colleges** (commercial).
- Read: keep COE as the deep product page (it matches an exact RFP phrase for autonomous colleges), but the cluster's search volume lives in "examination management system" and "online examination software for colleges".

| Keyword | Intent | Demand | Target |
|---|---|---|---|
| controller of examination software | commercial, exact product | low volume, high match | /products/coe |
| examination management system | commercial | medium (noisy) | /products/coe |
| online examination software for colleges | commercial | medium | /products/online-examination |
| university examination software | commercial | low-medium | /products/coe |
| exam automation software | commercial | low | /products/coe |

## 3. NAAC

- **GSC**: "naac accreditation software" pos 52 (/products/iqac-naac-nba); "naac compliance" pos 5, "naac official website" pos 7, "naac criteria" pos 43 — all on /blog/naac-accreditation-checklist. The **blog owns NAAC informational intent**.
- **Autocomplete**: `naac software` / `naac accreditation software` (+ …free); otherwise informational ("what is naac", "does naac accreditation matter"). `iqac software` → "iqac files list", "role of iqac".
- Read: modest commercial volume. Product page (currently 0 H2s, 7-vs-10 criteria mismatch, no FAQ) should be deepened for "naac accreditation software" + AEO; the blog keeps the informational queries.

| Keyword | Intent | Demand | Target |
|---|---|---|---|
| naac accreditation software | commercial | low-medium | /products/iqac-naac-nba/naac |
| iqac software | commercial | low | /products/iqac-naac-nba (hub) |
| naac ssr software / aqar software | commercial, specific | low | /products/iqac-naac-nba/naac |
| naac criteria / naac compliance | informational | medium | blog (already ranks) |

## 4. NBA (National Board of Accreditation)

- **GSC**: "nba compliance report" pos 5, "nba documents" pos 11 (/products/iqac-naac-nba); 4 impressions total.
- **Autocomplete**: `nba accreditation software` exists but the space is dominated by informational ("nba accreditation process/means/full form") and the basketball brand collides on the bare term. Always use **"NBA accreditation software"** / "NBA accreditation" in full.
- **OBE** is the adjacent commercial term: "obe software" pos 35 on the blog; autocomplete thin.

| Keyword | Intent | Demand | Target |
|---|---|---|---|
| nba accreditation software | commercial | low | /products/iqac-naac-nba/nba |
| obe software / outcome based education software | commercial | low-medium | /products/iqac-naac-nba/nba + blog |
| sar preparation software | commercial, specific | low | /products/iqac-naac-nba/nba |

## 5. Canteen management

- **GSC**: "canteen management system" 62 impr pos 52, "canteen management software" 15 impr pos 48, "canteen management" pos 66, "canteen inventory management system software" pos 37, "ecanteen" pos 50 — all on /products/canteen-management. 105 impressions, all stuck on page 5.
- **Autocomplete**: `canteen management software` → …free download, …open source, **cafeteria management software**, …system; `cashless canteen system` → cashless catering for schools. Factory/tata-steel/project noise.
- Read: the page is thin (generic 6-item grid, no FAQ). Demand is proven at 105 impressions; **depth alone should move it from page 5 toward page 1–2.**

| Keyword | Intent | Demand | Target |
|---|---|---|---|
| canteen management system | commercial | medium (proven) | /products/canteen-management |
| canteen management software | commercial | medium | /products/canteen-management |
| cashless canteen system | commercial | low-medium | /products/canteen-management |
| cafeteria management software | commercial | low-medium | /products/canteen-management |
| college canteen management / RFID canteen | commercial, on-brand | low | /products/canteen-management |

## 6. Grievance management (education-focused)

- **GSC**: "grievance redressal management tool" pos 47, "grievance software" pos 47, "college grievance management system" pos 32.7, "grievance tracking software" pos 51 — all on /products/grievance-management. 13 impressions, page 4–5.
- **Autocomplete**: `grievance management software` → complaint management software, …india, …free; the broad market is `complaint management system` / `ticket management system` / `helpdesk software` (large, off-brand).
- **SERP (college grievance management system)**: github, UGC Samadhaan (govt portal), researchgate, scribd, academiaerp — a **weak, non-commercial SERP**. An education vendor page can win it.
- Decision: education-focused only. Angle = the UGC Students' Grievance Redressal mandate every college must comply with (grievance cell, anti-ragging, online redressal, time-bound escalation).

| Keyword | Intent | Demand | Winnability | Target |
|---|---|---|---|---|
| college grievance management system | commercial, on-brand | low | high (weak SERP) | /products/grievance-management |
| student grievance redressal software | commercial | low | high | /products/grievance-management |
| grievance management software | commercial | low-medium | medium | /products/grievance-management |
| online grievance system for colleges | commercial | low | high | /products/grievance-management |
| complaint/ticket/helpdesk | broad | high | low, off-brand | **not targeted (user decision)** |

## 7. Software development (local push)

- **GSC**: "software development company in coimbatore" 3 impr pos 73 (landing on the **homepage**, not /services); "software companies in coimbatore" pos 41; "software company near me" pos 10.
- **Autocomplete**: `software development company` → the top suggestion is literally **"…in coimbatore"**, then chennai/bangalore/madurai/trichy; `custom software development` → …services, …company in india, **…cost in india**, …cost; `software development company in coimbatore` → best/top/custom/ai variants.
- **SERP (software development company in coimbatore)**: webnox, sparkout, icore, samantha, azusystech, inklidox + Justdial/TechBehemoths directories + a **local map pack**. Local-intent SERP; Aveon is in Coimbatore with a verified "Software company" GBP.
- Read: a local play. The deep `/services/custom-software-development` page already exists; the thin `/services` hub has a **title mismatch** ("Campus ERP Services & Implementation" on a software-dev page). Fix the hub, lean on local signals.

| Keyword | Intent | Demand | Target |
|---|---|---|---|
| software development company in coimbatore | commercial, local | medium (local) | /services |
| custom software development | commercial | medium-high | /services/custom-software-development |
| custom software development cost in india | commercial, bottom-funnel | low-medium | pricing section/FAQ |
| software development services in coimbatore | commercial, local | low-medium | /services |

## Priority (impact × effort)

1. Canteen — promote thin→rich (proven 105 impr at pos 52; depth = the gap).
2. School — retune title/H1 to "school management software" (pos 193, rich component already there).
3. Grievance — promote thin→rich, education-focused (winnable SERP).
4. Software development — fix /services hub + local signals (Aveon is in Coimbatore).
5. Exams — COE keyword H1 + online-examination retune + cross-link.
6. NAAC / NBA — deepen + FAQ + fix the 7-vs-10 criteria bug (modest commercial ROI, helps AEO).

Tracking: `/seo google gsc` monthly; success = each theme's landing page becomes the product page and non-brand position drops under 30 within 2–6 weeks. New phrases will read as "zero demand" in GSC until the page ranks — judge those by autocomplete and SERP strength, not by impressions.
