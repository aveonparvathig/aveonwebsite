import Link from "next/link";
import Image from "next/image";
import { navigation, siteConfig } from "@/lib/constants";
import { products } from "@/lib/data/products";
import SocialIcon from "@/components/ui/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  const company = navigation.filter((n) =>
    ["About Us", "Solutions", "Careers", "Partners", "Contact"].includes(n.label),
  );

  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="rounded-lg bg-white px-3 py-2 inline-block">
              <Image src="/images/aveon-logo.svg" alt="Aveon Infotech" width={140} height={30} />
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Aveon Infotech builds comprehensive ERP solutions for universities,
              colleges and schools — trusted by institutions to run academics,
              administration and everything in between.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="hover:text-white">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {company.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/academy" className="hover:text-white">
                  Aveon Academy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.address}</li>
            </ul>
            <div className="mt-5 flex gap-3">
              {Object.entries(siteConfig.social).map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary-600 hover:text-white"
                >
                  <SocialIcon name={key} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row">
          <p>© {year} Aveon Infotech Private Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
