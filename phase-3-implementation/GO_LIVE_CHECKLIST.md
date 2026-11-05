# Go-Live Checklist — Switch On the Growth Program

**Created:** 5 Nov 2026 · **For:** Ranjith / Aveon
Everything in Phases 1–3 is already on `main` and deploys safely **without** these set — each feature
just stays dormant until its env var exists. Work top-down: Tier 0 first (it's the one that loses leads).

> **Where env vars go:** Vercel → your project → **Settings → Environment Variables** → add to **Production**
> (and Preview if you want it on previews) → then **redeploy** (Deployments → ⋯ → Redeploy) so they take effect.
> All names below already exist in `.env.example`.

---

## Tier 0 — Stop losing leads (do this first) 🔴

- [ ] **Create a Sanity Editor token.** sanity.io/manage → your project (`jc3ht4hv`) → **API → Tokens →
      Add token → Editor**. Copy it.
  - Why: the current token is **read-only**, so leads can't be written to Studio (verified: `403 permission
    "create" required`). Until this is set, leads survive only in email + server logs.
  - [ ] Set on Vercel: `SANITY_API_WRITE_TOKEN=<token>` → redeploy.
  - [ ] **Verify:** submit the demo form on the live site → a **Lead** appears in Sanity Studio (`/studio`).

- [ ] **Turn on lead emails (Resend).** resend.com → create an API key.
  - [ ] Set `RESEND_API_KEY=<key>`.
  - [ ] Add & verify your domain in Resend (Domains → Add → add the DNS records), then set
        `RESEND_FROM="Aveon <hello@aveoninfotech.com>"`. Until the domain is verified, email only reaches the
        Resend account owner.
  - [ ] Optional: `CONTACT_NOTIFY_EMAIL=<inbox>` to route notifications somewhere other than contact@.
  - [ ] **Verify:** submit a form → notification email arrives **and** the visitor gets the auto-reply.

---

## Tier 1 — Turn on the paid channel 🟠

- [ ] **Create the Google Ads conversion action.** Google Ads → **Goals → Conversions → New** → *Submit lead
      form* → value ₹50, count *One*. Copy the **Conversion ID** (`AW-…`) and **label**.
  - [ ] Set `NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX` and `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL=<label>` → redeploy.
  - [ ] **Verify:** submit a test lead → Google Ads → Conversions → **Diagnostics** shows it within ~24h.
- [ ] **Meta Pixel (retargeting).** business.facebook.com → Events Manager → create a Pixel → copy the ID.
  - [ ] Set `NEXT_PUBLIC_META_PIXEL_ID=<id>` → redeploy.
  - [ ] **Verify:** Meta's *Pixel Helper* browser extension shows PageView + a Lead event on form submit.
- [ ] **Mark GA4 conversions.** GA4 (both properties) → Admin → **Events** → toggle `demo_request`,
      `form_submit`, `chatbot_lead_capture`, `qualified_lead` as **key events/conversions**.
- [ ] **Launch the campaign** using `GOOGLE_ADS_STARTER_KIT.md` (structure, keywords, negatives, ads, budget).
      Start with ad groups **A (College ERP)** + **D (Pricing)** at the ₹25k tier.

---

## Tier 2 — Reviews & referrals 🟡

- [ ] **Set the review link.** Google Business Profile → **Ask for reviews** → copy the link.
  - [ ] Set `NEXT_PUBLIC_GBP_REVIEW_URL=<link>` → redeploy. (Until then `/review` points at the Maps listing.)
  - [ ] **Verify:** open `/review` on the live site → lands on the Google "write a review" form.
- [ ] **Run the review drive** from `REVIEWS_AND_REFERRALS_PLAYBOOK.md` — 5 personalised asks/week, reply to
      all within 48h. Target **54 → 75+** reviews in 8 weeks.

---

## Tier 3 — Case studies (needs your go-ahead) 🟢

- [ ] Pick 1–2 happy clients and get **written consent** to use their name + a short quote.
- [ ] Send me: contact name & title, 2–3 sentence quote, modules used, one concrete outcome.
- [ ] I build `/customers/<slug>` from a template and link it from the homepage proof strip.
      Priority candidates (confirm consent first): CIET, PSG CAS, MCET, Kristu Jayanti.

---

## Set-and-forget verification (after Tier 0–1)

- [ ] Submit each form once on the live site; confirm: lead in Studio, notification email, auto-reply,
      GA4 DebugView shows the event, Google Ads/Meta register the conversion.
- [ ] Watch the first week of GA4 + Google Ads; use the kit's weekly optimisation checklist.

---

### Quick reference — every env var

| Var | Unlocks | Tier |
|---|---|---|
| `SANITY_API_WRITE_TOKEN` | Leads persist to Studio | 0 |
| `RESEND_API_KEY` + `RESEND_FROM` | Lead emails + auto-reply | 0 |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` + `_LEAD_LABEL` | Google Ads conversions | 1 |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta retargeting | 1 |
| `NEXT_PUBLIC_GBP_REVIEW_URL` | `/review` → review form | 2 |

All are optional at the code level and read with safe fallbacks — the site never breaks if one is missing.
