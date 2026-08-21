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
    ["Services", "Solutions", "Contact"].includes(n.label),
  );

  return (
    <footer className="border-t border-navy-900/8 bg-navy-50">
      <div className="mx-auto max-w-[1320px] px-4 py-13 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-11">
          <div>
            <Image src="/images/aveon-logo-dark.svg" alt="Aveon Infotech" width={150} height={30} className="h-7.5 w-auto" />
            <p className="mt-4.5 max-w-[320px] text-[14.5px] leading-[1.7] text-navy-700">
              Aveon Infotech builds comprehensive ERP solutions for universities, colleges and
              schools trusted by institutions to run academics, administration and everything
              in between.
            </p>
            <div className="mt-5.5 flex gap-2.5">
              {Object.entries(siteConfig.social).map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="flex h-9.5 w-9.5 items-center justify-center rounded-full border border-navy-900/10 bg-white text-navy-700 transition-colors hover:border-primary-600 hover:bg-primary-600 hover:text-white"
                >
                  <SocialIcon name={key} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10.5px] font-extrabold uppercase tracking-[0.2em] text-accent-700">
              Products
            </h3>
            <ul className="mt-4.5 flex flex-col gap-2.75 text-[14.5px]">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="text-navy-700 transition-colors hover:text-primary-600">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10.5px] font-extrabold uppercase tracking-[0.2em] text-accent-700">
              Company
            </h3>
            <ul className="mt-4.5 flex flex-col gap-2.75 text-[14.5px]">
              <li>
                <Link href="/about" className="text-navy-700 transition-colors hover:text-primary-600">
                  About Us
                </Link>
              </li>
              {company.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-navy-700 transition-colors hover:text-primary-600">
                    {n.label === "Services" ? "Software Services" : n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-navy-700 transition-colors hover:text-primary-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-navy-700 transition-colors hover:text-primary-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-navy-700 transition-colors hover:text-primary-600">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/academy" className="text-navy-700 transition-colors hover:text-primary-600">
                  Aveon Academy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10.5px] font-extrabold uppercase tracking-[0.2em] text-accent-700">
              Get in Touch
            </h3>
            <ul className="mt-4.5 flex flex-col gap-3 text-[14.5px] text-navy-700">
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-primary-600">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-primary-600">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.address}</li>
            </ul>
            <Link
              href="/contact#demo"
              className="mt-5.5 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-500"
            >
              Book a Demo →
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3.5 border-t border-navy-900/12 pt-6 text-[13.5px] text-navy-600 sm:flex-row">
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
