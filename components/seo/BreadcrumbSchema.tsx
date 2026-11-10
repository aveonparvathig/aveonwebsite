import { breadcrumbJsonLd } from "@/lib/structured-data";

/**
 * BreadcrumbList JSON-LD for a page. `trail` is the path below Home, in order;
 * Home is added automatically. Renders only a <script>, so it can sit anywhere
 * in a server component.
 */
export function BreadcrumbSchema({ trail }: { trail: { name: string; href: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", href: "/" }, ...trail])),
      }}
    />
  );
}
