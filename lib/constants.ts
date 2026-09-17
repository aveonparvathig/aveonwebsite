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
          { label: "Our Company", href: "/about", description: "Who we are", icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" },
          { label: "Careers", href: "/careers", description: "Open positions", icon: "M20.25 14.25v.108c0 1.006-.634 1.909-1.582 2.253l-3.727 1.244a4.5 4.5 0 0 1-1.582.282h-2.318a4.5 4.5 0 0 1-1.582-.282l-3.727-1.244a2.375 2.375 0 0 1-1.582-2.253v-.108M20.25 14.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25M20.25 14.25v-4.5a2.25 2.25 0 0 0-2.25-2.25H15M3.75 14.25v-4.5a2.25 2.25 0 0 1 2.25-2.25H9m6 0V6a2.25 2.25 0 0 0-2.25-2.25h-1.5A2.25 2.25 0 0 0 9 6v1.5m6 0H9" },
          { label: "Partners", href: "/partners", description: "Work with us", icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Blog", href: "/blog", description: "Notes & updates", icon: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" },
          { label: "Aveon Academy", href: "/academy", description: "Training", icon: "M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" },
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
