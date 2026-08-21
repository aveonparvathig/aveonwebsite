import { siteConfig } from "./constants";
import type { Product } from "./data/products";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.svg`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    sameAs: Object.values(siteConfig.social),
  };
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.title,
    description: product.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${siteConfig.url}/products/${product.slug}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}
