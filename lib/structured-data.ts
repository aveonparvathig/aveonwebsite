import { siteConfig } from "./constants";
import type { Product } from "./data/products";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    description:
      "AI-powered campus ERP, learning management and accreditation software for universities, colleges and schools in India.",
    foundingDate: String(siteConfig.stats.foundedYear),
    logo: { "@type": "ImageObject", url: `${siteConfig.url}/images/logo.svg` },
    legalName: siteConfig.location.legalName,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: postalAddress(),
    sameAs: Object.values(siteConfig.social),
    knowsAbout: [
      "Campus Management",
      "Education ERP",
      "Student Information System",
      "Learning Management System",
      "AI Education Technology",
    ],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    image: `${siteConfig.url}/images/logo.svg`,
    description: "AI-powered campus ERP and learning management system for universities, colleges and schools.",
    parentOrganization: { "@id": `${siteConfig.url}/#organization` },
    address: postalAddress(),
    hasMap: siteConfig.location.mapUrl,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: siteConfig.location.hours.days,
      opens: siteConfig.location.hours.opens,
      closes: siteConfig.location.hours.closes,
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: siteConfig.url,
    areaServed: { "@type": "Country", name: "India" },
  };
}

function postalAddress() {
  const l = siteConfig.location;
  return {
    "@type": "PostalAddress",
    streetAddress: l.streetAddress,
    addressLocality: l.locality,
    addressRegion: l.region,
    postalCode: l.postalCode,
    addressCountry: l.country,
  };
}

export function productJsonLd(product: Product, imagePath?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.title,
    description: product.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${siteConfig.url}/products/${product.slug}`,
    ...(imagePath ? { image: `${siteConfig.url}${encodeURI(imagePath)}` } : {}),
    featureList: product.features,
    provider: organizationRef,
  };
}

// Inline name/url plus @id, so validators that don't merge the page graph
// still see a complete Organization while graph-aware ones link it.
const organizationRef = {
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
};

const publisher = {
  ...organizationRef,
  logo: { "@type": "ImageObject", url: `${siteConfig.url}/images/logo.svg` },
};

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-IN",
  };
}

export function articleJsonLd(post: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  dateModified: string;
  author: string;
}) {
  const url = `${siteConfig.url}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}/opengraph-image`,
    datePublished: post.publishedAt,
    dateModified: post.dateModified,
    author: { "@type": "Organization", name: post.author, url: `${siteConfig.url}/about` },
    publisher,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };
}

export function serviceJsonLd(service: {
  name: string;
  slug: string;
  serviceType: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    url: `${siteConfig.url}/services/${service.slug}`,
    provider: organizationRef,
    areaServed: { "@type": "Country", name: "India" },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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
