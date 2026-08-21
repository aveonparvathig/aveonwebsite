import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the Aveon Infotech website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-6 leading-relaxed text-navy-700">
          <p>
            By using this website you agree to use it for lawful purposes only.
            All content, trademarks and product names on this site are the
            property of Aveon Infotech Private Limited.
          </p>
          <p>
            Product information on this website is provided for general
            guidance; commercial terms for ERP licensing and implementation are
            governed by individual agreements with each institution.
          </p>
          <p>
            Questions about these terms? Contact{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-primary-600">
              {siteConfig.email}
            </a>
            .
          </p>
          <p className="text-sm text-navy-500">
            Note: This is placeholder terms text for the new website build —
            replace with your legal team&apos;s approved terms before launch.
          </p>
        </div>
      </section>
    </>
  );
}
