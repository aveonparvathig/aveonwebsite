"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/constants";
import type { Product } from "@/lib/data/products";
import TopBar from "./TopBar";
import ProductIcon from "@/components/ui/ProductIcon";

export default function Navigation({
  products,
}: {
  products?: Product[];
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // CMS-driven product entries keep the menu in sync with published content.
  const items = navigation.map((item) =>
    item.label === "Products" && products?.length
      ? {
          ...item,
          children: products.map((p) => ({
            label: p.title,
            href: `/products/${p.slug}`,
            description: p.tagline,
          })),
        }
      : item,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-[0_4px_24px_-8px_rgb(16_26_51_/_0.15)]" : ""
      }`}
    >
      <TopBar />
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Aveon Infotech home">
          <Image src="/images/aveon-logo-dark.svg" alt="Aveon Infotech" width={160} height={35} priority />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {items.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const isProducts = item.label === "Products";
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[15px] transition-colors ${
                    active
                      ? "font-semibold text-primary-600"
                      : "font-medium text-navy-800 hover:bg-navy-50 hover:text-primary-600"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                  {active && (
                    <span className="absolute -bottom-0.5 left-1/2 h-[3px] w-5 -translate-x-1/2 rounded-full bg-primary-600" />
                  )}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div
                    className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 ${
                      isProducts ? "w-[580px]" : "w-72"
                    }`}
                  >
                    <div className="animate-dropdown overflow-hidden rounded-2xl border border-navy-100 bg-white p-2.5 shadow-[0_20px_60px_-15px_rgb(16_26_51_/_0.25)]">
                      <div className={isProducts ? "grid grid-cols-2 gap-0.5" : ""}>
                        {item.children.map((child) => {
                          const slug = child.href.split("/").pop() ?? "";
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group/item flex items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-primary-50"
                            >
                              {isProducts ? (
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-colors group-hover/item:bg-primary-600 group-hover/item:text-white">
                                  <ProductIcon slug={slug} className="h-[18px] w-[18px]" />
                                </span>
                              ) : (
                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-navy-200 transition-colors group-hover/item:bg-primary-500" />
                              )}
                              <span className="min-w-0">
                                <span className="block truncate text-sm font-semibold text-navy-900 group-hover/item:text-primary-700">
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="block text-[11px] font-medium uppercase tracking-wide text-navy-400">
                                    {child.description}
                                  </span>
                                )}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                      {isProducts && (
                        <Link
                          href="/products"
                          className="mt-1.5 flex items-center justify-center gap-1.5 rounded-xl bg-navy-50 px-4 py-2.5 text-sm font-semibold text-primary-600 transition-colors hover:bg-primary-600 hover:text-white"
                        >
                          View all products
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact#demo"
            className="group inline-flex items-center gap-2 rounded-full bg-accent-500 py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgb(249_115_22_/_0.5)] transition-all hover:bg-accent-600 hover:shadow-[0_8px_24px_-4px_rgb(249_115_22_/_0.6)]"
          >
            Get a DEMO
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-navy-900 hover:bg-navy-50 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="animate-dropdown max-h-[calc(100vh-120px)] overflow-y-auto border-t border-navy-100 bg-white px-4 pb-6 pt-2 lg:hidden">
          {items.map((item) => (
            <div key={item.label} className="border-b border-navy-50 last:border-0">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={() => !item.children && setMobileOpen(false)}
                  className="block flex-1 py-3 font-medium text-navy-900"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label} submenu`}
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    className="rounded-lg p-2.5 hover:bg-navy-50"
                  >
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                )}
              </div>
              {item.children && openDropdown === item.label && (
                <div className="animate-dropdown mb-2 space-y-0.5 rounded-xl bg-navy-50/60 p-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-700 hover:bg-white hover:text-primary-600"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact#demo"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white"
          >
            Get a DEMO →
          </Link>
        </div>
      )}
    </header>
  );
}
