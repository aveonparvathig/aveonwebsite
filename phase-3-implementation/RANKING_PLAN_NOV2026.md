# Ranking plan — November 2026 to January 2027

Goal: move Aveon from brand-only traffic (7 non-brand clicks a month) to page one for the regional and product keywords, and to page two for the national "college ERP software" cluster, within 12 weeks. Inputs: KEYWORD_ANALYSIS_NOV2026.md, COLLEGE_ERP_COMPETITOR_KEYWORD_ANALYSIS.md, GOOGLE-API-REPORT-aveoninfotech.com.md.

Legend: **[C]** Claude does it in the repo or through your Chrome. **[U]** needs you (approval, assets, people, money).

## Week 1 (4–10 Nov): finish the page-level targeting

| # | Task | Keyword(s) | Owner | Output |
|---|---|---|---|---|
| 1.1 | Rewrite /products/inventory-management for colleges and universities: title "Inventory Management Software for Colleges & Universities", stores/purchase/asset sections for higher-ed, lab and hostel inventory use cases, FAQs in query wording | higher education inventory management (698 impr, pos 74) | [C] | page, 1,500+ words |
| 1.2 | University ERP page: same structure as the College ERP rewrite (affiliating/examining university workflows, multi-campus, pricing model, 30-day plan, FAQs) | university erp (pos 12.7), university erp software | [C] | page |
| 1.3 | Canteen page: title/H1 "Canteen Management System for Colleges", cashless/RFID/ID-card, GST billing, parent top-up, hostel mess tie-in | canteen management system/software (pos 48–52) | [C] | page |
| 1.4 | LMS page: title/H1 "AI LMS: Learning Management System with AI Chatbot", how the assistant is trained, OBE outcomes | ai lms, ai learning management system (pos 71) | [C] | page |
| 1.5 | HR page wording: add "HRMS" to title/H1/intro | hrms with payroll (pos 58–68) | [C] | 10-minute edit |
| 1.6 | Request indexing in Search Console for each rewritten URL | — | [C] | done same day |
| 1.7 | Confirm the two CIET quotes with Dr. Chinnaraju; send a photo | — | [U] | text + jpg |

Checkpoint: all five pages live, each with the exact target phrase in title, H1 and first paragraph.

## Week 2 (11–17 Nov): capture the traffic that already exists

| # | Task | Keyword(s) | Owner | Output |
|---|---|---|---|---|
| 2.1 | Build `/login`: "Find your institution's Aveon portal" page listing each client portal by college (links only to portals that pass scripts/portal-check.mjs) | ~700 impr/month of ciet/snmv/sankara/egs/rajasthan login queries | [C] after [U] supplies the hostname list | page |
| 2.2 | Consolidate the two campus-ERP guides into one "Campus ERP System: what it is and how to implement it" with a 301 from the merged one | campus erp system/implementation (pos 28–46) | [C] | guide |
| 2.3 | Add "College ERP in Tamil Nadu" and "Products" to the footer; add "college ERP software" link in the main nav product menu description | college erp in tamil nadu, college erp software | [C] | nav edit |
| 2.4 | Products hub: title "Education ERP Software: 14 Integrated Products", one paragraph per product with the keyword anchor | education erp software | [C] | hub page |
| 2.5 | Decide on the roundup page "Best College ERP Software in India (2026)": every competitor line sourced and linked, Aveon disclosed | best erp software for colleges in india | [U] decision → [C] build | page |

Checkpoint: Search Console landing page for "college erp" queries is /products/college-erp, not the homepage.

## Weeks 3–4 (18 Nov – 1 Dec): start the off-site work (this decides the national terms)

| # | Task | Owner | Output |
|---|---|---|---|
| 3.1 | Directory profiles with the exact NAP and product URL: SoftwareSuggest, G2, GoodFirms, Capterra, Clutch | [U] creates accounts (I draft every field from the GBP pack) | 5 referring domains |
| 3.2 | Wikidata item + Crunchbase profile (also fixes the missing Knowledge Graph entity) | [U] accounts, [C] drafts | 2 domains + entity |
| 3.3 | Client portal "Powered by Aveon" links: enable only on portals that pass the hygiene check; NIA and SNMV stay off until the spam cleanup is done | [U] server access; [C] runs the checker | .ac.in links |
| 3.4 | First guest article: pitch the NAAC checklist or the ERP migration playbook to one education publication (Higher Education Review, EdTechReview, Digital Learning) | [U] outreach from a company mailbox; [C] writes the pitch and the article | 1 link/month |
| 3.5 | Ask the five happiest clients (the testimonial principals) for a Google review mentioning "college ERP" | [U] | reviews |
| 3.6 | Monthly GBP post #2 (Tamil Nadu reference) from the pack | [C] | post |

Checkpoint: at least 5 new referring domains; Knowledge Graph check (`/seo google entity "Aveon Infotech"`) returns an entity.

## Weeks 5–8 (Dec): content depth and measurement

| # | Task | Owner | Output |
|---|---|---|---|
| 4.1 | School ERP page: same treatment as college/university | [C] | page |
| 4.2 | Two new guides targeting autocomplete phrases with no competition on our side: "College ERP full form and meaning" (captures "erp college meaning", "college erp full form") and "College management software price in India: how vendors charge" (captures "…price") | [C] | 2 guides |
| 4.3 | NAAC product page rebuild once SSR/AQAR/DVV screenshots arrive | [U] screenshots → [C] | page |
| 4.4 | Fix mobile INP (261 ms): add web-vitals attribution to GA4, identify the slow handler, defer it | [C] | CWV pass |
| 4.5 | Second guest article; second batch of directories (Software Advice, SaaSworthy, TechJockey) | [U]/[C] | links |
| 4.6 | Mid-point review: re-run `/seo google gsc` and `/seo google inspect-batch`; compare against the November theme table | [C] | report |

## Weeks 9–12 (Jan): compound

| # | Task | Owner |
|---|---|---|
| 5.1 | Third guest article; client case study page with a named college (quotes approved) | [U]/[C] |
| 5.2 | Karnataka page: add a second named client if one exists; otherwise leave | [U] |
| 5.3 | Review roundup page performance; add vendors or update pricing lines | [C] |
| 5.4 | Full re-audit: `/seo audit`, Health Score vs 77 baseline | [C] |

## What you are responsible for, in one list

1. CIET quote confirmation and photo (week 1).
2. Client portal hostname list (week 2) and the NIA/SNMV server cleanup (any time; blocks the best links).
3. Yes/no on the roundup page (week 2).
4. Directory and profile accounts: SoftwareSuggest, G2, GoodFirms, Capterra, Clutch, Wikidata, Crunchbase (weeks 3–4). I fill in every field; you create the accounts and press submit.
5. One guest-article pitch sent from a company mailbox per month.
6. Review requests to five principals.
7. NAAC screenshots when available.

## Targets and how we check

| When | Metric | Target | Check |
|---|---|---|---|
| 2 weeks | GSC landing page for "college erp" | /products/college-erp | `/seo google gsc` |
| 6 weeks | Non-brand clicks/month | ≥ 25 (from 7) | `/seo google gsc` |
| 8 weeks | "university erp", "higher education inventory management" | position ≤ 20 | `/seo google gsc` |
| 8 weeks | Referring domains | ≥ 10 (from ~0) | `/seo backlinks` |
| 12 weeks | "college erp software" | page 2 (≤ 20) | `/seo google gsc` |
| 12 weeks | "college erp tamil nadu", "college erp coimbatore" | page 1 with impressions > 20/month | `/seo google gsc` |
| 12 weeks | Mobile INP | ≤ 200 ms | `/seo google crux` |

If by week 8 referring domains are still under 5, the national targets slip by a quarter; the regional and product targets do not depend on links and should hold.
