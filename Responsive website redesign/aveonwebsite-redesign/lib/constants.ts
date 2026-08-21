import { products } from "./data/products";
import { services } from "./data/services";

export const siteConfig = {
  name: "Aveon Infotech",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.aveoninfotech.com",
  phone: "+91 87540 06483",
  email: "contact@aveoninfotech.com",
  address: "Coimbatore, Tamil Nadu, India",
  social: {
    linkedin: "https://www.linkedin.com/company/aveon-infotech/",
    instagram: "https://www.instagram.com/aveoninfotech/",
    twitter: "https://x.com/aveoninfotech",
    facebook: "https://www.facebook.com/aveoninfotech/",
  },
};

export type NavChild = {
  label: string;
  href: string;
  description?: string;
  /** Optional outline icon path for mega-menu items */
  icon?: string;
};

export type NavPromo = {
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  /** Grouped columns for the mega menu */
  groups?: { title: string; items: NavChild[] }[];
  promo?: NavPromo;
};

const byCategory = (category: string) =>
  products
    .filter((p) => p.category === category)
    .map((p) => ({
      label: p.title,
      href: `/products/${p.slug}`,
      description: p.tagline,
    }));

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    groups: [
      { title: "Education ERP", items: byCategory("erp") },
      { title: "Learning", items: byCategory("lms") },
      { title: "Campus Management", items: byCategory("management") },
    ],
    promo: {
      eyebrow: "All Products",
      title: "Nine products, one database",
      text: "Start with one module and add the rest later — no migration in between.",
      cta: "Browse all",
      href: "/products",
    },
  },
  {
    label: "Services",
    href: "/services",
    groups: [
      {
        title: "Build",
        items: services.slice(0, 3).map((s) => ({
          label: s.title,
          href: "/services",
          description: "Software Development",
          icon: s.icon,
        })),
      },
      {
        title: "Operations",
        items: services.slice(3).map((s) => ({
          label: s.title,
          href: "/services",
          description: "Software Development",
          icon: s.icon,
        })),
      },
    ],
    promo: {
      eyebrow: "Beyond ERP",
      title: "Software built around your workflow",
      text: "Automation, apps and dedicated teams for organisations outside campus too.",
      cta: "See services",
      href: "/services",
    },
  },
  {
    label: "Solutions",
    href: "/solutions",
    groups: [
      {
        title: "By Institution",
        items: [
          { label: "For Universities", href: "/solutions", description: "4 products" },
          { label: "For Colleges", href: "/solutions", description: "4 products" },
        ],
      },
      {
        title: "By Scale",
        items: [
          { label: "For Schools", href: "/solutions", description: "3 products" },
          { label: "For Group Institutions", href: "/solutions", description: "4 products" },
        ],
      },
    ],
    promo: {
      eyebrow: "Not sure where to start?",
      title: "Tell us how your campus runs",
      text: "We map your academic structure to the right modules in a 30-minute call.",
      cta: "Book a demo",
      href: "/contact#demo",
    },
  },
  {
    label: "Company",
    href: "/about",
    groups: [
      {
        title: "Company",
        items: [
          { label: "Our Company", href: "/about", description: "Who we are" },
          { label: "Careers", href: "/careers", description: "Open positions" },
          { label: "Partners", href: "/partners", description: "Work with us" },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Blog", href: "/blog", description: "Notes & updates" },
          { label: "Aveon Academy", href: "/academy", description: "Training" },
        ],
      },
    ],
    promo: {
      eyebrow: "We're hiring",
      title: "Build EdTech in Coimbatore",
      text: "Four open roles across engineering, implementation and sales.",
      cta: "See openings",
      href: "/careers",
    },
  },
  { label: "Contact", href: "/contact" },
];
