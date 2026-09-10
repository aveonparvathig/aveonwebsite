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
  /** Optional outline icon path for top-level menu items */
  icon?: string;
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
  {
    label: "Home",
    href: "/",
    icon: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8m0 0v-4m0 4H17m-6 4a9 9 0 1 0 0-18"
  },
  {
    label: "Products",
    href: "/products",
    icon: "M20.25 7.5h.375c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-15c-.621 0-1.125-.504-1.125-1.125V8.625c0-.621.504-1.125 1.125-1.125h.375M9 11.25h6M9 15h6m6-12H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125H21c.621 0 1.125-.504 1.125-1.125V8.625c0-.621-.504-1.125-1.125-1.125",
    groups: [
      { title: "Education ERP", items: byCategory("erp") },
      { title: "Learning", items: byCategory("lms") },
      { title: "Campus Management", items: byCategory("management") },
    ],
    promo: {
      eyebrow: "All Products",
      title: "Twelve products, one database",
      text: "Start with one module and add the rest later — no migration in between.",
      cta: "Browse all",
      href: "/products",
    },
  },
  {
    label: "Services",
    href: "/services",
    icon: "M14.828 14.828a4 4 0 0 1-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    groups: [
      {
        title: "Build",
        items: services.slice(0, 3).map((s) => ({
          label: s.title,
          href: s.slug === "process-automation" ? "/services/ai-process-automation" : `/services/${s.slug}`,
          description: "Software Development",
          icon: s.icon,
        })),
      },
      {
        title: "Operations",
        items: services.slice(3).map((s) => ({
          label: s.title,
          href: s.slug === "process-automation" ? "/services/ai-process-automation" : `/services/${s.slug}`,
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
    icon: "M12.75 15.75H7.5v-7.5H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    groups: [
      {
        title: "By Institution",
        items: [
          { label: "For Universities", href: "/solutions", description: "4 products", icon: "M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V2.25A2.25 2.25 0 0 0 20.25 0h-16.5A2.25 2.25 0 0 0 1.5 2.25v16.5A2.25 2.25 0 0 0 3.75 21Z" },
          { label: "For Colleges", href: "/solutions", description: "4 products", icon: "M12 21v-8.25M15.75 5.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" },
        ],
      },
      {
        title: "By Scale",
        items: [
          { label: "For Schools", href: "/solutions", description: "3 products", icon: "M12 21v-8.25M15.75 5.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" },
          { label: "For Group Institutions", href: "/solutions", description: "4 products", icon: "M18 18.75H6v-12h12v12ZM9.75 9.75h.01M12.75 9.75h.01M15.75 9.75h.01M9.75 12.75h.01M12.75 12.75h.01M15.75 12.75h.01" },
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
    icon: "M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V2.25A2.25 2.25 0 0 0 20.25 0h-16.5A2.25 2.25 0 0 0 1.5 2.25v16.5A2.25 2.25 0 0 0 3.75 21Z",
    groups: [
      {
        title: "Company",
        items: [
          { label: "Our Company", href: "/about", description: "Who we are", icon: "M3.75 21h16.5A2.25 2.25 0 0 0 20.25 0h-16.5A2.25 2.25 0 0 0 1.5 2.25v16.5A2.25 2.25 0 0 0 3.75 21Z" },
          { label: "Careers", href: "/careers", description: "Open positions", icon: "M20.25 14.15v4.75A2.25 2.25 0 0 1 18 21H6a2.25 2.25 0 0 1-2.25-2.25v-4.75m18 0a2.25 2.25 0 0 0-2.25-2.25H4.5A2.25 2.25 0 0 0 2.25 16.5m18 0v-6a2.25 2.25 0 0 0-2.25-2.25H4.5A2.25 2.25 0 0 0 2.25 10.5V16.5" },
          { label: "Partners", href: "/partners", description: "Work with us", icon: "M18 9.75H9m12 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm0 0c0 1.657-.895 3.09-2.25 3.85M9 19.5a9 9 0 1 1 0-18" },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Blog", href: "/blog", description: "Notes & updates", icon: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h4.5m0 0H21m-4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
          { label: "Aveon Academy", href: "/academy", description: "Training", icon: "M12 6.042A8.967 8.967 0 0 0 6.042 12M12 6.042l5.958 5.958M12 6.042V3m9.958 9.958L12 12m0 0v3.958M12 12l5.958-5.958M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z" },
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
  {
    label: "Contact",
    href: "/contact",
    icon: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.97.904l-8.4 5.6a2.25 2.25 0 0 1-2.46 0l-8.4-5.6a2.25 2.25 0 0 1-.97-.904V6.75"
  },
];
