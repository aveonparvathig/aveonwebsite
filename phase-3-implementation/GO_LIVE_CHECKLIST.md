# Go-Live Checklist — Switch On the Growth Program

**Created:** 5 Nov 2026 · **For:** Ranjith / Aveon
Everything in Phases 1–3 is already on `main` and deploys safely **without** these set — each feature
just stays dormant until its env var exists. Work top-down: Tier 0 first (it's the one that loses leads).

> **Where env vars go:** Vercel → your project → **Settings → Environment Variables** → add to **Production**
> (and Preview if you want it on previews) → then **redeploy** (Deployments → ⋯ → Redeploy) so they take effect.
> All names below already exist in `.env.example`.

---

## Tier 0 — Stop losing leads (do this first) 🔴

> Updated 10 Nov 2026: the Sanity lead inbox was removed (leads are email-only), so the old
> "Sanity Editor token" step is gone. Lead email was verified delivering on 6 Nov 2026.

- [x] **Turn on lead emails (Resend).** resend.com → create an API key.
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
  - [ ] **Calls & WhatsApp (optional but recommended).** Create a second conversion action *Contact* (category
        *Contact*, count *One*, mark it **Secondary**) → set `NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL=<label>` → redeploy.
        Every tap on a phone number or WhatsApp button then reports to it. Promote it to Primary only once
        you've confirmed those calls are real buyers.
  - [ ] **Check the lead email shows the ad click.** Open the site with `?gclid=TEST123&utm_source=google` on the
        end of the URL, submit the demo form → the notification email lists `Ad: gclid`, `Ad: utm_source` and
        `Ad: landing_page`. Keep these with the lead: they let you tell Google which keywords produced customers.
- [ ] **Meta Pixel (retargeting).** business.facebook.com → Events Manager → create a Pixel → copy the ID.
  - [ ] Set `NEXT_PUBLIC_META_PIXEL_ID=<id>` → redeploy.
  - [ ] **Verify:** Meta's *Pixel Helper* browser extension shows PageView + a Lead event on form submit.
- [ ] **Mark GA4 conversions.** GA4 (both properties) → Admin → **Events** → toggle `demo_request`,
      `form_submit`, `chatbot_lead_capture`, `qualified_lead` as **key events/conversions**.
- [ ] **Launch the campaign** using `GOOGLE_ADS_STARTER_KIT.md` (structure, keywords, negatives, ads, budget).
      Start with ad groups **A (College ERP)** + **D (Pricing)** at the ₹25k tier.

### Ads launch sequence (do in this order)
1. **Tracking first** (above) — Google Ads conversion + Meta Pixel env vars set & verified. Ads are blind without it.
2. **Google Search** — primary, ~70–80% of budget, from `GOOGLE_ADS_STARTER_KIT.md`. Runs day 1.
3. **Meta retargeting** — ~20–30% of budget, from `META_RETARGETING_KIT.md`. **Start ~1–2 weeks after Google**, once the Pixel audience is >1,000. The site already fires PageView + ViewContent (`/pricing`, `/get-started`) + Lead for the audiences.
   - Shift budget weekly toward whichever channel has the lower cost-per-lead.

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

- [ ] Submit each form once on the live site; confirm: notification email, auto-reply,
      GA4 DebugView shows the event, Google Ads/Meta register the conversion.
- [ ] Watch the first week of GA4 + Google Ads; use the kit's weekly optimisation checklist.

---

### Quick reference — every env var

| Var | Unlocks | Tier |
|---|---|---|
| `RESEND_API_KEY` + `RESEND_FROM` | Lead emails + auto-reply | 0 |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` + `_LEAD_LABEL` | Google Ads conversions | 1 |
| `NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL` | Phone / WhatsApp click conversions | 1 |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta retargeting | 1 |
| `NEXT_PUBLIC_GBP_REVIEW_URL` | `/review` → review form | 2 |

All are optional at the code level and read with safe fallbacks — the site never breaks if one is missing.
