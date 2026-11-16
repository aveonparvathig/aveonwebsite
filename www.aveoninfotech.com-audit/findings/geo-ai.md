# AI Search Readiness (GEO): findings

**Re-audited 16 Nov 2026** (previous version 6 Nov 2026, score 80/100)

## Score: 71/100

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| Citability | 25% | 85 | 21.3 |
| Structural readability | 20% | 85 | 17.0 |
| Multi-modal content | 15% | 45 | 6.8 |
| Authority and brand signals | 20% | 40 | 8.0 |
| Technical accessibility | 20% | 92 | 18.4 |
| **Total** | | | **71** |

**Why the score is lower than 6 Nov when nothing got worse:** the 6 Nov score of 80 mostly measured crawl mechanics. This one uses the full five-dimension GEO weighting, which counts thin off-site authority and the lack of video or original images against the site. On-site citability went up because of the comparison pages. Measured the same way, 6 Nov would have come out at about 66.

### Platform readiness
| Platform | Score | Basis |
|---|---|---|
| Bing Copilot | 72 | 164 citations in Bing AI Performance (5 Nov). Bing indexes the site well and IndexNow works. About 46 citations still point to legacy .php URLs |
| Google AI Overviews | 62 | SSR, clean schema, answer-first guides. Comparison pages are 3 days old and probably not in AIO candidate sets yet. AIO follows Googlebot indexing |
| ChatGPT Search | 45 | OAI-SearchBot allowed and served 200. Not measured live. Third-party corroboration that ChatGPT uses for "best X" answers is thin |
| Perplexity | 35 | PerplexityBot allowed and served 200, but Aveon was absent for "best campus ERP Coimbatore" on 5 Nov, where Perplexity named Mastersoft, MyLeading Campus and Acube |

## Changes since 6 Nov

| 6 Nov item | Status 16 Nov |
|---|---|
| AI crawler groups in robots.txt | **Unchanged (good).** 15 named agents, all `Allow: /`, only /api/ and /studio/ disallowed |
| "No llms.txt" (Low) | **The 6 Nov finding was wrong.** /llms.txt is live (7,740 bytes, 200 text/plain) and was already there on 5 Nov. Status now: present and well-formed, with one gap (see F4) |
| Content-Signal / Markdown delivery | **Unchanged.** Neither is offered. /llms-full.txt is 404, .md variants are 404 and `Accept: text/markdown` returns HTML. All optional |
| No off-site corroboration (High) | **Unchanged.** No Wikidata item, no Wikipedia article, sameAs lists only LinkedIn, Instagram, X and Facebook (all resolve 200). No YouTube channel found (@aveoninfotech is 404). No directory or review profiles linked. Off-site authority was 2 referring hosts in Common Crawl on 6 Nov |
| **New:** /comparisons hub and five /comparisons/aveon-vs-* pages | Live, SSR, each 1,330-1,530 words. See "What works" |
| **New:** stale legacy AI files contradict confirmed facts | F2 |
| **New:** inconsistent implementation-time claim | F5 |
| **New:** homepage lacks a plain entity statement | F3 |

## AI crawler access (live robots.txt, 16 Nov)

| Crawler | Governs | Status |
|---|---|---|
| OAI-SearchBot | ChatGPT Search citations | Allowed |
| ChatGPT-User | User-initiated ChatGPT fetches | Allowed |
| GPTBot | OpenAI training only | Allowed |
| Claude-SearchBot | Claude search citations | Allowed |
| Claude-User | User-initiated Claude fetches | Allowed |
| ClaudeBot, anthropic-ai | Anthropic training only | Allowed |
| PerplexityBot / Perplexity-User | Perplexity index and fetches | Allowed |
| Googlebot (via `*`) | Google Search and AI Overviews | Allowed |
| Google-Extended | Gemini/Vertex training and grounding. Has no effect on AIO inclusion | Allowed |
| Bingbot | Bing and Copilot | Allowed |
| Applebot-Extended | Apple Intelligence training only | Allowed |
| CCBot, Amazonbot, meta-externalagent | Training and other | Allowed |

These user agents (PerplexityBot, OAI-SearchBot, Claude-SearchBot, GPTBot and ClaudeBot) each got HTTP 200 with the full 151 KB HTML of /comparisons/aveon-vs-mastersoft. The test ran from this machine's IP, not from each bot's own IP ranges. All 9 pages audited are server-rendered (`is_spa: false`). The full text is in the initial HTML.

## What works

- **The comparison pages are highly citable.** Each one opens with a 60-70 word verdict that stands on its own ("MasterSoft is ... Aveon is ... it suits ..."). It then shows a visible "Last reviewed 13 November 2026 · Written by the Aveon Editorial Team" line, a 14-row criterion table, "Choose X if / Choose Aveon if" lists, and 4 question-phrased FAQs whose answers start with the answer ("No. As of November 2026 ..."). They end with a "How we compared" disclosure and dated source links to the competitor's own site. Schema: WebPage with dateModified, SoftwareApplication, FAQPage and BreadcrumbList. Engines tend to lift fair, sourced head-to-heads for "X vs Y" and "alternative to X" prompts, and these pages name Mastersoft, the vendor Perplexity currently recommends.
- **/blog/what-is-campus-erp is close to an ideal definitional source.** The first sentence under "Campus ERP, defined" is a complete 70-word definition. It has an SIS vs LMS vs point-solutions table, question H2s ("What modules does a campus ERP include?") and 6 FAQs. Article schema carries datePublished/dateModified (3 Nov).
- **/products/college-erp** has 16 question headings, FAQPage + SoftwareApplication schema and a direct "What is a College ERP?" answer.
- **/comparisons hub** has a weighted 12-criterion scorecard table and a five-year cost template, which are original, quotable frameworks.
- Claim numbers are consistent across the rendered HTML pages (200+, 1M+, 2012, 14 products), and Organization schema matches them (foundingDate 2012, legalName "Aveon Infotech Private Limited").
- llms.txt has a clear summary, products, pricing, guides and state pages, each with a one-line description.

## Findings

| # | Severity | Finding | Evidence | Fix | Effort |
|---|---|---|---|---|---|
| F1 | **High** | Off-site entity and authority are missing, so non-Bing engines have no third party to corroborate Aveon | Wikidata search for "Aveon Infotech": 0 results. Wikipedia: 0 hits. sameAs lists only 4 social profiles. No YouTube channel found. No G2, Capterra, SoftwareSuggest, Techjockey or GoodFirms profile linked. 2 referring hosts (CC, 6 Nov). Perplexity names 3 competitors and not Aveon | (1) Create a Wikidata item (instance of business, country India, HQ Coimbatore, inception 2012, official website, LinkedIn ID) and add it to sameAs. (2) Claim SoftwareSuggest, Techjockey, G2 and Capterra listings, ask 5-10 clients for reviews, and add the profile URLs to sameAs. (3) Start a YouTube channel with 3-5 short demos (OBE attainment, COE, NAAC export) and link it from sameAs. YouTube mentions correlate most strongly with AI citation. (4) Get named in Indian "best college ERP" roundups and on client or university sites, for example via the "Powered by Aveon" flag on hosts that pass the portal checker | High. Weeks of ongoing work, needs the user |
| F2 | **Medium** | Stale legacy AI files publish facts that contradict the confirmed claims | `/ai-search-instructions.txt` says "50,000+ students on platform (verified)" and "12+ years in business (since 2014)", and lists folded state pages (telangana, maharashtra, delhi) as HIGH priority. `/ai-search.json` and `/ai-crawl-metadata.json` have `studentsOnPlatform: 50000`, `yearsInBusiness: 12` and `lastUpdated 2026-10-06`. Confirmed facts are 1M+ students and founded 2012. The files are in `public/` and nothing in the app references them | Delete `public/ai-search.json`, `public/ai-search-instructions.txt` and `public/ai-crawl-metadata.json`. llms.txt already does their job, and they serve contradictory numbers to any engine that fetches them. If you keep them, regenerate them from `siteConfig.stats` | 10 min |
| F3 | **Medium** | The homepage has no plain "who is Aveon" sentence. The cited About passage is generic | Homepage is Copilot's most-cited URL (110). Hero: "The Connected Campus Starts Here." About block: "Aveon Infotech delivers innovative technology solutions that simplify business operations ...", which says nothing about education, Coimbatore or 2012. The entity statement exists only in meta/schema | Replace the About paragraph with a factual 40-60 word entity block, e.g. "Aveon Infotech Private Limited is a Coimbatore-based company, founded in 2012, that builds campus ERP, LMS and NAAC/NBA accreditation software for 200+ colleges, universities and schools in India." Mirror it as the first line of /about | 30 min |
| F4 | **Medium** | The five head-to-head pages are not in llms.txt, and Perplexity's named competitors are only partly covered | llms.txt lists only `/comparisons` (Guides section). Perplexity's 5 Nov answer named Mastersoft, MyLeading Campus and Acube. Only Mastersoft has a page | Add a "Comparisons" section to `public/llms.txt` with the five aveon-vs-* URLs and one-line descriptions. Build aveon-vs-myleadingcampus and aveon-vs-acube using the same sourcing rules (vendor's own site, "not stated", no ratings). Submit all of them via IndexNow and GSC URL inspection | 2-4 h |
| F5 | **Low** | Implementation time is stated three different ways | Home FAQ: "about 30 days ... week four". College ERP: "about 30 working days" (about 6 weeks) next to "the same four-week plan". Comparisons: "four-week playbook". Guide title: "Going Live in 30 Days" | Pick one wording, e.g. "four weeks (about 20 working days) for a single campus; 6-10 weeks multi-campus", and use it everywhere. Engines that see conflicting numbers may hedge or skip the claim | 20 min |
| F6 | **Low** | No video and few original images on the citable pages | Comparison and guide pages: 2 `<img>` each (logo and OG), 0 video. College ERP: 4 images. Home has 83 images, mostly client logos | Add 1-2 annotated product screenshots (with descriptive alt text and captions) to the guide and to each comparison page's "Where Aveon differs" section. Embed the YouTube demos from F1 | 1 day |
| F7 | **Low** | Authorship is an organization, not a person | "Written by the Aveon Editorial Team". Article and WebPage have no Person author or reviewedBy | When the user names a reviewer (product head or founder), add a Person with a bio, LinkedIn sameAs and `reviewedBy`. Do not invent one | Blocked on the user |
| F8 | **Low** | Small schema gaps | The /comparisons hub has a visible FAQ but no FAQPage and no dateModified. Comparison WebPage has dateModified but no datePublished or author. LocalBusiness has no sameAs (GBP URL) | Add FAQPage and dateModified to the hub, `datePublished: 2026-11-13` and `author: {@id org}` to the comparison WebPage, and the GBP/Maps CID URL to LocalBusiness sameAs | 30 min |
| F9 | Info | Optional machine-readable layers are absent | No Content-Signal in robots.txt, no /llms-full.txt, no Markdown variants | Optional. None of these is a confirmed ranking or citation factor. A `Content-Signal: search=yes, ai-input=yes` line costs nothing | 10 min |

## Top 5 actions by impact

1. **F1. Off-site entity:** Wikidata, software directories with reviews, YouTube demos, roundup mentions. This is the only lever for Perplexity and ChatGPT. *High effort, needs the user.*
2. **F2. Delete the three stale `public/ai-*` files.** They contradict 1M+ and 2012. *10 min.*
3. **F4. Add the comparison URLs to llms.txt and build aveon-vs-myleadingcampus and aveon-vs-acube**, then submit to IndexNow and GSC. *2-4 h.*
4. **F3. Add a factual entity sentence to the homepage About block**, since the homepage is the page Copilot cites most. *30 min.*
5. **F5 + F8. Unify the implementation-time claim and close the schema gaps.** *1 h.*

## Platform-specific advice

- **Google AI Overviews:** inclusion follows Googlebot indexing and ranking, not Google-Extended. Request indexing for the five comparison pages in GSC. Keep the answer-first opening paragraphs. Earn links to /blog/what-is-campus-erp, which is the strongest AIO candidate for "what is campus ERP".
- **ChatGPT Search:** it uses Bing-backed retrieval plus OAI-SearchBot. Bing indexing is already good, so the gap is corroboration. Directory profiles and reviews (G2/Capterra) and Wikidata matter most. Use the DataForSEO ChatGPT scraper or a logged-in manual check to get a baseline for "best college ERP India" and "Mastersoft alternative".
- **Perplexity:** it favours sources it sees cited elsewhere (iitms.co.in led its 5 Nov answer) and fresh comparison or listicle content. The aveon-vs-* pages are the right format. Add MyLeading Campus and Acube, and get Aveon listed on the Indian directories Perplexity cites (SoftwareSuggest, Techjockey). Reddit and Quora threads about college ERP choices in r/Indian_Academia-type communities are also cited sources. Engage only with genuine, disclosed answers.
- **Bing Copilot:** keep IndexNow pushes on every content change. Re-submit coe.php and hostel-mess.php so Copilot's about 46 legacy-URL citations move to /products/coe and /products/hostel-mess.

## Brand-mention signals (16 Nov)

| Source | Status |
|---|---|
| Wikipedia | None (0 search hits) |
| Wikidata | None (0 entities) |
| YouTube | No channel found. youtube.com/@aveoninfotech returns 404 |
| Reddit | Not verifiable. Reddit blocks unauthenticated search. No known threads |
| LinkedIn | Company page live (in sameAs) |
| Directories and reviews | None linked from the site. GBP exists (4.2 stars, 54 reviews) but is not in sameAs |

**Bottom line:** on-site GEO is now strong. The comparison pages and the campus-ERP guide are good citation material, and every AI crawler can reach the SSR HTML. The score is held back by missing off-site entity and authority (no Wikidata, directories, YouTube or roundup mentions). That gap explains why Copilot cites Aveon and Perplexity does not. The cheapest fix this week is deleting the stale `public/ai-*` files that contradict the site's own numbers.
