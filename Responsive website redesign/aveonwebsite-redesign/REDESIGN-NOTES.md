# v4 design port — aveonparvathig/aveonwebsite

These files translate the **Aveon Website v4** design into the existing Next.js + Tailwind v4
codebase. Copy them over the matching repo paths on a new branch.

## Path mapping

| File here | Repo path |
| --- | --- |
| `app/layout.tsx` | `app/layout.tsx` |
| `app/globals.css` | `app/globals.css` |
| `app/-site-/page.tsx` | `app/(site)/page.tsx` |
| `app/-site-/services/page.tsx` | `app/(site)/services/page.tsx` **(new)** |
| `lib/constants.ts` | `lib/constants.ts` |
| `lib/data/services.ts` | `lib/data/services.ts` **(new)** |
| `components/layout/Navigation.tsx` | same |
| `components/layout/TopBar.tsx` | same |
| `components/layout/Footer.tsx` | same |
| `components/sections/Hero.tsx` | same |
| `components/sections/Stats.tsx` | same |
| `components/sections/AboutSection.tsx` | same |
| `components/sections/ProductsGrid.tsx` | same |
| `components/sections/ServicesSection.tsx` | same **(new)** |
| `components/sections/Testimonials.tsx` | same |
| `components/sections/FAQ.tsx` | same |
| `components/sections/CTASection.tsx` | same |
| `components/sections/PageHero.tsx` | same |
| `public/images/s33-hero.png` etc. | `public/images/` **(new assets)** |

(The `-site-` folder name is a filesystem limitation here — rename it back to `(site)`.)

## What changed

- **Type**: Inter + Poppins replaced by a single **Plus Jakarta Sans** (`--font-jakarta`);
  `--font-sans` and `--font-heading` both point at it, headings get `-0.03em` tracking.
- **Menu**: 8 top-level links reduced to 6 (Home, Products, Services, Solutions, Company,
  Contact). Desktop nav is a full-height underline indicator (no pills), with a wide mega
  panel: three fixed product columns grouped by category plus a blue promo tile.
  Dropdown data now lives in `navigation[].groups` / `.promo` in `lib/constants.ts`.
  Desktop nav appears at `xl` (1280px); below that it's a right slide-in drawer with
  accordions and 48px touch targets.
- **Palette**: light and medium tones only — no near-black bands. Pale blue top bar,
  blue-gradient stats strip, tinted featured product card, light services band, light footer.
  Orange (`accent-500` / `accent-700`) is the accent on CTAs and eyebrows.
- **Hero**: single headline + one primary CTA (no full-bleed carousel); the three slide
  images crossfade inside an app-window frame. Images are **cropped** versions
  (`*-hero.png`, ~1.12:1) — the originals had ~54% flat tint on the left.
- **Products**: bento grid — University ERP as a wide featured card with its dashboard,
  the rest as lifting icon cards.
- **New**: `ServicesSection` + `/services` covering Process Automation, Mobile App
  Development, Custom Software Development, Order Management System, Warehouse Management
  System and Offshore Team. Copy in `lib/data/services.ts` is placeholder — replace with yours.
- `PageHero` recolored light, so About / Careers / Contact / Solutions / Blog match without
  editing those pages.

## Notes before merging

- `public/images/s11.png` and `s22.png` are **not in the repo** (only `s33.png`) — the three
  `*-hero.png` files here cover all slides, so no upstream originals are needed.
- Tailwind v4 arbitrary spacing like `py-3.5`/`h-12.5` is used in places; all valid in v4.
- `Navigation.tsx` keeps the CMS product sync (`products` prop still rebuilds the Products
  columns), so `app/(site)/layout.tsx` needs no change.
