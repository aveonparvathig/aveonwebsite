# Action Plan — www.aveoninfotech.com

Ordered by priority. The health score is 84, but **off-site authority is the real bottleneck** — Phase 1 is where the growth is.

---

## 🔴 CRITICAL — fix immediately

### 1. Build off-site authority (the #1 lever)
*Why: 2 referring hosts, PageRank rank ~52M, 98% branded traffic, zero non-branded clicks. Nothing else moves non-branded rankings until this does.*
- Claim & complete **G2, Capterra, SoftwareSuggest, TrustRadius** profiles (do-follow links + buyer-intent citations).
- List in **Indian edtech / SaaS directories** and Coimbatore local directories with *consistent NAP*.
- Convert existing clients into **case-study backlinks** (link from their sites, joint press releases).
- Pitch **3–5 guest articles / expert quotes** in Indian education & edtech media (HARO-style).
- **KPI:** 20–30 quality referring domains within 2–3 months.

> Blockers from prior work (per project memory): off-site/link work and case-study consent are gated on the user. This phase is mostly off-platform and needs a decision to resource it.

---

## 🟠 HIGH — within 1 week

### 2. Strengthen E-E-A-T
- Add named **Person** authors (bio, role, `sameAs` LinkedIn) to every blog `Article` schema **and** visible author boxes on-page.
- Add legitimate **`AggregateRating` / `Review`** schema reflecting the 4.2★ / 54 Google reviews; add an on-site testimonials section.

### 3. Concentrate authority with internal linking
- Build a **topic-cluster model**: product pages = money pages; blog guides link up with exact/partial-match anchors on non-branded terms (college erp software, campus management system, university erp system).

---

## 🟡 MEDIUM — within 1 month

### 4. Fix thin content
- ✅ **Done (2026-11-06):** `/partners` expanded with per-model detail, why-partner, process and FAQ (+ FAQ/breadcrumb schema).
- *Correction:* `/academy` and `/solutions/by-state` were flagged by an unreliable automated count but are actually substantial — no action needed. `/solutions/coimbatore` is short but acceptable; optionally add named local institutions later.

### 5. Standardise schema
- Breadcrumb on **every** deep page; FAQ + SoftwareApplication on `/solutions/*` and the NAAC/NBA/AICTE sub-pages that currently lack them.

### 6. Content depth & competitor capture
- Add original data / screenshots / client proof to the batch-published guides.
- Publish **comparison / alternatives pages** ("best college ERP software in India", "X alternative") to capture competitor-term demand.

### 7. INP performance
- Reduce unused JavaScript (~450 ms flagged) and defer non-critical scripts to pull **INP under 200 ms** in the field.

---

## 🟢 LOW — backlog

- Add a **Content-Security-Policy** header (report-only first) — the one missing security header.
- Remove the deprecated `meta keywords` tag.
- Publish **`/llms.txt`**; optionally add `Content-Signal` lines to robots groups.
- Confirm app subdomains (`messtoken.*`) are `noindex` where appropriate.
- Monitor legacy `.php → new URL` consolidation in GSC; resubmit new URLs via the Indexing API.

---

## North-star KPIs to track monthly
1. **Referring domains** (target: +20–30 in 90 days) — the leading indicator.
2. **Non-branded clicks & impressions** in GSC (currently ~0 non-branded clicks).
3. **Non-branded average position** for the money terms.
4. Organic sessions in GA4 (currently ~43 / 28 days, almost all branded).
