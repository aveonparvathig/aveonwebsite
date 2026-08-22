"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation, type NavItem } from "@/lib/constants";
import type { Product } from "@/lib/data/products";
import TopBar from "./TopBar";
import ProductIcon from "@/components/ui/ProductIcon";

const ArrowRight = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.6}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export default function Navigation({ products }: { products?: Product[] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Portal target is only available after mount (avoids SSR/document errors).
  useEffect(() => setMounted(true), []);

  // Lock background scroll while the mobile drawer is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  // CMS-driven product entries keep the Products mega menu in sync.
  const items: NavItem[] = navigation.map((item) => {
    if (item.label !== "Products" || !products?.length || !item.groups) return item;
    const byCategory = (category: string) =>
      products
        .filter((p) => p.category === category)
        .map((p) => ({
          label: p.title,
          href: `/products/${p.slug}`,
          description: p.tagline,
        }));
    return {
      ...item,
      groups: [
        { title: "Education ERP", items: byCategory("erp") },
        { title: "Learning", items: byCategory("lms") },
        { title: "Campus Management", items: byCategory("management") },
      ],
    };
  });

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setExpanded(null);
  }, [pathname]);

  const isActive = (item: NavItem) =>
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

  const openItem = items.find((i) => i.label === openMenu && i.groups);

  return (
    <header
      onMouseLeave={() => setOpenMenu(null)}
      className="sticky top-0 z-50 border-b border-navy-900/10 bg-white/90 backdrop-blur-xl"
    >
      <TopBar />

      <nav className="mx-auto flex h-20 max-w-[1320px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Aveon Infotech home">
          <Image src="/images/aveon-logo-dark.svg" alt="Aveon Infotech" width={160} height={34} priority className="h-8 w-auto" />
        </Link>

        {/* Desktop nav — underline indicator */}
        <div className="hidden h-full items-stretch xl:flex">
          {items.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={() => setOpenMenu(item.groups ? item.label : null)}
                className={`flex items-center gap-1.5 px-4 text-[15px] font-semibold transition-colors ${
                  active
                    ? "text-primary-600 shadow-[inset_0_-3px_0_var(--color-primary-600)]"
                    : "text-navy-700 shadow-[inset_0_-3px_0_transparent] hover:text-primary-600 hover:shadow-[inset_0_-3px_0_var(--color-primary-200)]"
                }`}
              >
                {item.label}
                {item.groups && <Chevron open={openMenu === item.label} />}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact#demo"
          className="group hidden shrink-0 items-center gap-2.5 rounded-full bg-accent-500 py-1.5 pl-6 pr-2 text-sm font-bold text-white shadow-[0_12px_28px_-10px_rgb(249_115_22_/_0.75)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-12px_rgb(249_115_22_/_0.85)] xl:inline-flex"
        >
          Get a DEMO
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/25">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>

        {/* Mobile controls */}
        <div className="flex items-center gap-2.5 xl:hidden">
          <Link
            href="/contact#demo"
            className="inline-flex min-h-11 items-center rounded-full bg-accent-500 px-4 text-[13px] font-bold text-white shadow-[0_10px_22px_-10px_rgb(249_115_22_/_0.8)]"
          >
            Demo
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-navy-900/10 bg-navy-50 text-navy-900"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mega panel */}
      {openItem?.groups && (
        <div className="absolute inset-x-0 top-full hidden px-4 pb-6 sm:px-6 lg:px-10 xl:block">
          <div className="animate-dropdown mx-auto flex max-w-[1320px] flex-wrap gap-4 overflow-y-auto rounded-3xl border border-navy-900/8 bg-white p-5 shadow-[0_40px_90px_-30px_rgb(16_26_51_/_0.35)] [max-height:calc(100vh-130px)]">
            <div className="grid min-w-0 flex-1 basis-[560px] grid-cols-3 content-start gap-x-3 gap-y-2.5">
              {openItem.groups.map((group) => (
                <div key={group.title}>
                  <p className="px-2 pb-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-navy-400">
                    {group.title}
                  </p>
                  {group.items.map((child) => {
                    const slug = child.href.split("/").pop() ?? "";
                    return (
                      <Link
                        key={`${child.href}-${child.label}`}
                        href={child.href}
                        className="flex items-center gap-2.5 rounded-2xl px-2 py-2 transition-colors hover:bg-primary-50"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600">
                          {child.icon ? (
                            <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                              <path strokeLinecap="round" strokeLinejoin="round" d={child.icon} />
                            </svg>
                          ) : (
                            <ProductIcon slug={slug} className="h-[18px] w-[18px]" />
                          )}
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-[15px] font-bold text-navy-900">{child.label}</span>
                          {child.description && (
                            <span className="block truncate text-[12.5px] text-navy-600">{child.description}</span>
                          )}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              ))}
            </div>

            {openItem.promo && (
              <div className="flex min-w-[190px] shrink basis-[210px] flex-col gap-4 self-start rounded-3xl bg-gradient-to-br from-primary-600 to-primary-700 p-5">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white">
                    {openItem.promo.eyebrow}
                  </p>
                  <p className="mt-3 text-lg font-bold leading-snug text-white">{openItem.promo.title}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-primary-50">{openItem.promo.text}</p>
                </div>
                <Link
                  href={openItem.promo.href}
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13.5px] font-bold text-navy-900 transition-colors hover:bg-accent-500 hover:text-white"
                >
                  {openItem.promo.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile drawer — portaled to <body> so `fixed` covers the viewport
          instead of being trapped by the header's backdrop-filter containing block. */}
      {mounted && mobileOpen &&
        createPortal(
          <div className="fixed inset-0 z-[60] flex justify-end xl:hidden">
          <div
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-navy-900/50 backdrop-blur-sm"
            aria-hidden
          />
          <aside className="relative flex h-full w-[min(380px,90vw)] flex-col rounded-l-[28px] bg-white shadow-[-30px_0_70px_-20px_rgb(16_26_51_/_0.45)] [animation:drawerIn_260ms_cubic-bezier(0.22,0.61,0.36,1)]">
            <div className="flex items-center justify-between border-b border-navy-900/8 px-5 py-4">
              <Image src="/images/aveon-logo-dark.svg" alt="Aveon Infotech" width={140} height={29} className="h-7 w-auto" />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-navy-900/10 bg-navy-50 text-navy-900"
              >
                <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pb-7 pt-3">
              {items.map((item) => {
                const active = isActive(item);
                const flat = item.groups?.flatMap((g) => g.items) ?? [];
                return (
                  <div key={item.label} className="mb-1.5">
                    <div className={`flex items-center justify-between gap-2 rounded-2xl pl-3.5 ${active ? "bg-primary-50" : ""}`}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex min-h-12 flex-1 items-center py-3.5 text-[16.5px] font-bold ${active ? "text-primary-600" : "text-navy-900"}`}
                      >
                        {item.label}
                      </Link>
                      {flat.length > 0 && (
                        <button
                          type="button"
                          aria-label={`Toggle ${item.label} submenu`}
                          onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                          className="flex h-12 w-12 items-center justify-center rounded-2xl text-navy-600"
                        >
                          <Chevron open={expanded === item.label} />
                        </button>
                      )}
                    </div>

                    {expanded === item.label && flat.length > 0 && (
                      <div className="animate-dropdown mb-2.5 mt-1.5 flex flex-col gap-0.5 rounded-3xl bg-navy-50 p-2">
                        {flat.map((child) => {
                          const slug = child.href.split("/").pop() ?? "";
                          return (
                            <Link
                              key={`${child.href}-${child.label}`}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex min-h-12 items-center gap-3 rounded-xl px-2.5 py-2.5 hover:bg-white"
                            >
                              <span className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 text-primary-600">
                                {child.icon ? (
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d={child.icon} />
                                  </svg>
                                ) : (
                                  <ProductIcon slug={slug} className="h-4 w-4" />
                                )}
                              </span>
                              <span className="text-[15px] font-semibold text-navy-800">{child.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                href="/contact#demo"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-accent-500 px-5 text-[15px] font-bold text-white shadow-[0_14px_30px_-12px_rgb(249_115_22_/_0.8)]"
              >
                Get a DEMO →
              </Link>

              <div className="mt-6 flex flex-col gap-2 text-sm text-navy-600">
                <a href={`tel:${"+918754006483"}`}>+91 87540 06483</a>
                <a href="mailto:contact@aveoninfotech.com">contact@aveoninfotech.com</a>
              </div>
            </div>
          </aside>
        </div>,
          document.body,
        )}
    </header>
  );
}
