import Link from "next/link";
import Image from "next/image";
import { navigation, siteConfig } from "@/lib/constants";
import { products as fallbackProducts, type Product } from "@/lib/data/products";
import SocialIcon from "@/components/ui/SocialIcons";

export default function Footer({
  products = fallbackProducts,
}: {
  products?: Product[];
}) {
  const year = new Date().getFullYear();
  const company = navigation.filter((n) =>
    ["About Us", "Solutions", "Blog", "Careers", "Partners", "Contact"].includes(n.label),
  );

  return (
    <footer className="border-t border-navy-100 bg-navy-50/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src="/images/aveon-logo-dark.svg" alt="Aveon Infotech" width={150} height={32} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-600">
              Aveon Infotech builds comprehensive ERP solutions for
              universities, colleges and schools — trusted by institutions to
              run academics, administration and everything in between.
            </p>
            <div className="mt-5 flex gap-2.5">
              {Object.entries(siteConfig.social).map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-600 transition-colors hover:border-primary-600 hover:bg-primary-600 hover:text-white"
                >
                  <SocialIcon name={key} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy-900">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-navy-600 transition-colors hover:text-primary-600"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy-900">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {company.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-navy-600 transition-colors hover:text-primary-600"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/academy"
                  className="text-navy-600 transition-colors hover:text-primary-600"
                >
                  Aveon Academy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy-900">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-600">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-primary-600"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-primary-600"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.address}</li>
            </ul>
            <Link
              href="/contact#demo"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Book a Demo →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-200/70 pt-7 text-sm text-navy-500 sm:flex-row">
          <p>© {year} Aveon Infotech Private Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-primary-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-primary-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
