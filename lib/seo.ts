import { siteConfig } from "./constants";

/**
 * Open Graph fields every page should carry. Next merges metadata shallowly,
 * so a page that sets its own `openGraph` drops everything the root layout
 * set, including the file-based /opengraph-image. Spread this into any
 * page-level `openGraph` to keep the share image, site name and locale.
 * Title, description and URL are left out on purpose: Next fills og:title and
 * og:description from the page's own title and description.
 */
export const baseOpenGraph = {
  type: "website" as const,
  locale: "en_IN",
  siteName: siteConfig.name,
  images: [
    {
      url: "/opengraph-image",
      width: 1200,
      height: 630,
      alt: "Aveon Infotech: Education ERP Solutions",
    },
  ],
};
