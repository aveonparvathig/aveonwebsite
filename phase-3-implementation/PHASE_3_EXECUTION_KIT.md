# Phase 3 Execution Kit — Link Building for aveoninfotech.com

**Prepared:** 3 Nov 2026 · **Owner:** Aveon marketing · **Baseline:** DA ~24, ~228 referring domains, ~106 spam links (SEOptimer, Oct 2026), 1 .edu/.gov link.

This replaces the US-centric target lists in the earlier Phase 3 documents. Aveon sells campus ERP to **Indian** colleges; links from Stanford, EDUCAUSE or NACUBO are unrealistic and off-topic. Every target below is reachable by an Indian B2B education vendor and relevant to the queries we want to rank for.

Everything you need to paste is in **Section 2**. Do the items in Section 1 first; they take under two hours and remove risk before you build anything.

---

## 1. Week 1 — remove risk (do first)

### 1.1 Disavow the pharmaceutical spam (45 min)
1. Google Search Console → `www.aveoninfotech.com` property → **Links** → *External links* → **Export external links → More sample links** (CSV).
2. Open the CSV; sort by *Target page* and *Linking page*. Flag every linking domain whose anchor or URL contains pharmacy, casino, loan, escort, adult or random-keyword patterns. (The Oct 2026 audit counted ~106 such links; most will come from a few dozen domains.)
3. Paste the domains into `phase-3-implementation/disavow.txt` as `domain:example.com`, one per line. Do **not** list legitimate directories or client portals.
4. Google Search Console → `https://search.google.com/search-console/disavow-links` → choose the property → upload `disavow.txt`. Keep the confirmation screenshot.
5. **Check for an injection.** Pharma anchors pointing at your site often mean a hacked page *on your old site* once hosted the spam. In GSC, inspect the *Target page* column: if targets are URLs that no longer exist (old PHP/WordPress paths), they already 404 and the problem is historical. If any target is a live page, open it and search its HTML for hidden links.

**How you'll know it worked:** in 4–8 weeks the pharma anchors drop out of GSC → Links → *Top linking text*.

### 1.2 Placeholder client list — no action needed now
`lib/data/customers.ts` still contains sample names ("Sunrise University", "Green Valley College"), but the only consumer, `components/sections/Customers.tsx`, is not rendered on any page, so nothing fake is live. Replace the sample data with the real list in Section 2.5 (or delete both files) before anyone wires that section in.

### 1.3 Claim the two listings that drive reviews (30 min)
Reviews are what make a future rating markup legitimate, and both of these rank for "college ERP software India":
- **SoftwareSuggest** → https://www.softwaresuggest.com/vendors (Add your software → Education ERP). Free listing, dofollow profile link.
- **G2** → https://sell.g2.com/ (Claim profile → category *Higher Education Student Information Systems*). Free.

Use the NAP block and 250-word description from Section 2.

---

## 2. Paste-ready assets

### 2.1 NAP block — use this everywhere, character for character
```
Aveon Infotech
Coimbatore, Tamil Nadu 641001, India
+91 87540 06483
contact@aveoninfotech.com
https://www.aveoninfotech.com
Founded 2010 · 14 integrated products · 200+ institutions · 1M+ students
```
Social: https://www.linkedin.com/company/aveon-infotech/ · https://x.com/aveoninfotech · https://www.facebook.com/aveoninfotech/ · https://www.instagram.com/aveoninfotech/

Categories to select (pick the closest available): *Education ERP · College Management Software · Student Information System · Learning Management System · Accreditation Management (NAAC/NBA) · HR & Payroll · Custom Software Development*.

Logo files: `public/images/aveon-logo.svg` (light), `public/images/aveon-logo-dark.svg` (dark). Export a 512×512 PNG for directories that reject SVG.

### 2.2 Descriptions

**Tagline (60 chars):** AI-powered campus ERP & LMS for Indian universities and colleges

**50 words:**
Aveon Infotech builds AI-powered campus ERP and learning management software for universities, colleges and schools in India. Fourteen integrated modules cover admissions, academics, OBE, examinations, fees, hostel, library, HR and NAAC/NBA/AICTE accreditation reporting on one database. Founded in Coimbatore in 2010, Aveon serves 200+ institutions and over a million students.

**100 words:**
Aveon Infotech is a Coimbatore-based education technology company founded in 2010. Its campus ERP connects the entire institution on one database: admissions, student records, curriculum and timetable, Outcome-Based Education (CO/PO attainment), Controller of Examinations, fees, hostel and mess, library, inventory, HR and payroll, placement and alumni. An LMS with an AI assistant answers student queries from live ERP data. The accreditation module maps institutional data to NAAC's seven criteria, NBA, AICTE and NIRF formats so the Self Study Report becomes a report rather than a project. Aveon serves 200+ universities, colleges and schools across India, with on-site implementation and support from Coimbatore.

**250 words:**
Aveon Infotech develops campus ERP, learning management and accreditation software for higher education and K-12 institutions in India. The company was founded in Coimbatore, Tamil Nadu, in 2010 and today serves more than 200 universities, colleges and schools with over a million students on its platform.

The Aveon platform is built as fourteen integrated products that share one database and one login. University ERP, College ERP and School ERP manage the student lifecycle from enquiry and admission to alumni. Academic modules handle curriculum, CBCS, timetables, attendance and Outcome-Based Education with automated CO, PO and PSO attainment. The Controller of Examinations module runs scheduling, hall allocation, evaluation, revaluation and results; a separate Online Examination module supports secure digital assessments. Operations modules cover fees and collections, hostel and mess, library (with OPAC), inventory and stores, canteen, grievance redressal, and HR and payroll with biometric and face-recognition attendance.

Aveon's LMS includes an AI assistant trained on the institution's own ERP data, so students get answers about fees, attendance and certificates without visiting the office. The IQAC / NAAC / NBA module maps institutional records to accreditation metrics, keeps supporting documents attached to each record and generates data templates for NAAC's seven criteria, NBA SAR, AICTE and NIRF submissions.

Beyond education, Aveon's engineering team delivers custom software development, mobile apps, AI process automation, order and warehouse management systems, and dedicated offshore development teams.

Implementation follows a fixed four-week playbook — data migration, configuration, role-based training through Aveon Academy, and supervised go-live — with support from the Coimbatore team.

### 2.3 Press release — "Aveon publishes free NAAC and OBE guides"
*(Honest, newsworthy angle: the two guides published 3 Nov 2026. Replace the quote attribution with a real spokesperson.)*

```
FOR IMMEDIATE RELEASE

Aveon Infotech Publishes Free NAAC Accreditation Checklist and OBE Implementation
Guide for Indian Colleges

Coimbatore, India — [date] — Aveon Infotech, a campus ERP provider serving 200+
institutions across India, today published two free, in-depth guides for college
and university quality teams: a NAAC Accreditation Checklist covering all seven
criteria, their weightages, the IIQA–SSR–DVV–peer-team process and a 12-month
preparation timeline; and an Outcome-Based Education Implementation Guide that
walks through the PEO–PO–PSO–CO hierarchy, CO-PO mapping, attainment calculation
and a ten-step rollout plan.

"Most of the pain in accreditation is retrospective — assembling five years of
records from registers and spreadsheets weeks before a visit," said [Name],
[Title] at Aveon Infotech. "We wrote these guides so IQAC coordinators and
department heads have the whole process, and the evidence they need for every
metric, in one place."

The guides are free to read, require no registration, and are available at:
https://www.aveoninfotech.com/blog/naac-accreditation-checklist
https://www.aveoninfotech.com/blog/obe-implementation-guide

About Aveon Infotech
Founded in Coimbatore in 2010, Aveon Infotech builds AI-powered campus ERP,
learning management and accreditation software for universities, colleges and
schools in India. Its fourteen integrated modules run admissions, academics,
examinations, fees, hostel, library, HR and NAAC/NBA/AICTE reporting on a
single database for more than 200 institutions and over a million students.
https://www.aveoninfotech.com

Media contact: [Name] · contact@aveoninfotech.com · +91 87540 06483
```
Distribute free via PRLog (prlog.org) and PRUnderground; paid via PRWeb (~$150) if budget allows. Post the same text on LinkedIn as a company update.

### 2.4 Outreach email — Indian education press and blogs
```
Subject: Free NAAC seven-criteria checklist for your readers (no sign-up)

Hi [First name],

I read your [recent piece on NAAC / accreditation / college administration] on
[Publication] and thought this might be useful to your readers.

We've just published a free NAAC Accreditation Checklist — the seven criteria
with weightages for colleges and universities, the IIQA → SSR → DVV → peer-team
process, a grading table, a 12-month preparation timeline and the documents to
keep ready for each criterion. No registration, no gate:
https://www.aveoninfotech.com/blog/naac-accreditation-checklist

If it's helpful, a mention or link in a future article or resource list would
be great. Happy to provide a short expert comment on accreditation or OBE if
you're working on something related.

[Name]
[Title], Aveon Infotech · Coimbatore
+91 87540 06483
```

### 2.5 Real client list (for directories, case studies and the portal-link rollout)
From the site's logo carousel and testimonials — verify spelling with the accounts team:
CIET (Coimbatore Institute of Engineering and Technology) · PSG College of Arts & Science (PSGCAS) · PSG iTech · Dr. Mahalingam College of Engineering & Technology (MCET) · E.G.S. Pillay Engineering College · Dhanalakshmi Srinivasan Engineering College · Shri Nehru Maha Vidyalaya (SNMV) · Vanavarayar Institute of Agriculture · Kovai Kalaimagal College · Nandha · Sankara · SNR · SRCS · SSR · Aalim · Annai Mera · GRG · GTN · JSB · KOCAS · KSG · SAN · SPC · Vidya Vikas · VMKVMCH · Viveganandha Global Academy · Kirstu Janti University.

---

## 3. Target list — India-first (replaces the US lists)

### 3.1 Directories and review sites (free, 1–2 weeks, 10–14 links)
| Site | Why | Link type |
|---|---|---|
| SoftwareSuggest | Ranks for "college ERP software India"; Indian buyers use it | Dofollow profile |
| G2 | Global authority; reviews feed future rating markup | Nofollow profile, high trust |
| Capterra / GetApp (India) | Appear in NAAC-software SERPs | Nofollow, citations |
| Techjockey | Indian SMB software marketplace | Dofollow |
| GoodFirms | Dofollow company profile; ranks "software development company Coimbatore" | Dofollow |
| Clutch | Dev-services authority (for the services line) | Nofollow, high trust |
| IndiaMART, JustDial, Sulekha, TradeIndia | NAP citations; IndiaMART listings already rank for college-ERP pricing queries | Mixed |
| Crunchbase | Entity record for AI search; sameAs target | Nofollow |
| Startup India / Startup TN (if registered) | .gov.in citation | Nofollow |

### 3.2 Editorial — Indian education and tech press (pitch Section 2.4)
EdTechReview · Higher Education Digest · Digital Learning (Elets) · BW Education · EducationWorld · Education Times (TOI) · The Hindu EducationPlus · India Today Education · YourStory / Inc42 (Coimbatore startup angle) · The Better India (only if a social-impact client story exists).

### 3.3 Associations and local bodies (membership = directory link)
CODISSIA (Coimbatore industrial association) · Indian Chamber of Commerce and Industry, Coimbatore · NASSCOM (member directory) · CII Tamil Nadu · STPI Coimbatore (if registered).

### 3.4 Client portals — the "Powered by Aveon" link (highest value, needs care)
**What exists today.** The Aveon CMS front-end shipped to every client already contains a login-page footer "Powered by Aveon" and a sidebar "Developed by Aveon Infotech Pvt Ltd" link. Both render only when the client's system config **General → "Show Developer Information" = Y**. Most clients have it off (e.g. cms.nia.ac.in). The links point at `http://www.aveoninfotech.com` (one redirect hop) with no `rel`.

**Why it matters.** Each client portal is a distinct `.ac.in` / `.edu.in` domain — exactly the referring domains the profile lacks. Sitewide footer links are counted roughly once per domain, so the value is the number of client domains, not pages.

**Why it must be done carefully.** Google's spam policy treats widely distributed, keyword-rich footer links as link spam. Branded attribution ("Powered by Aveon Infotech") is standard and tolerated; "best college ERP software" is not.

**Product-level change (one release, then every client benefits):**
- href → `https://www.aveoninfotech.com/products/college-erp` (https, no redirect)
- anchor → `Powered by Aveon Infotech` (brand only; never a keyword)
- keep `target="_blank"`, add `rel="noopener"`; do **not** add `nofollow` or `sponsored` — this is vendor attribution, not a paid link
- make the login page server-renderable or at least give it a `<title>` and meta description per client ("[College] Student Portal — Aveon CMS"); today it is an empty client-rendered shell with nothing for Google to index, so the link carries nothing

**Rollout:** enable "Show Developer Information" for 5 clients per week, with the client admin's consent, starting with portals that already have Google-indexed pages. Log each in `BACKLINK_TRACKING_TEMPLATE.csv`. Stop and review if GSC shows a manual action notice (it will not for branded attribution, but check).

### 3.5 Content that earns links on its own (Phase 4 overlap)
The two guides are the first linkable assets. Next, in order of link potential: a "What is campus ERP?" definitional guide; a downloadable NAAC data-template pack (xlsx) gated by email; a yearly "State of NAAC readiness" survey of client IQACs. Each gets the Section 2.4 outreach.

---

## 4. Two-week calendar

| Day | Action | Output |
|---|---|---|
| 1 | GSC export → populate and upload `disavow.txt`; check for injected pages | Disavow submitted |
| 1 | Fix/remove placeholder customer list | Trust fix deployed |
| 2 | SoftwareSuggest + G2 profiles with NAP block and 250-word description | 2 profiles live |
| 3 | GoodFirms, Techjockey, Capterra, Clutch | 4 profiles submitted |
| 4 | IndiaMART, JustDial, Sulekha, Crunchbase | 4 citations |
| 5 | Press release via PRLog + PRUnderground + LinkedIn | 2–4 links |
| 6–7 | Ask 5 happy clients (from 2.5) for a G2/SoftwareSuggest review | Reviews started |
| 8 | Email 10 editors from 3.2 with the Section 2.4 template | 10 pitches |
| 9 | Product team: schedule the footer-link change for the next CMS release | Ticket filed |
| 10 | Enable "Show Developer Information" on first 5 consenting client portals | 5 referring domains |
| 11–12 | Apply to CODISSIA / NASSCOM; add Crunchbase + Wikidata to `siteConfig.social` | Entity signals |
| 13–14 | Follow up on pitches; log everything in the tracking CSV | Updated tracker |

**Expected after 30 days:** 20–30 new referring domains (directories, press, first portal batch), spam anchors fading, first third-party reviews. **Leading indicators:** GSC → Links → *Top linking sites* count; *Top linking text* losing pharma terms; SoftwareSuggest/G2 review counts.
