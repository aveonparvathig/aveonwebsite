import { products } from "./data/products";

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

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Company", href: "/about" },
      { label: "Our Team", href: "/about/team" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: products.map((p) => ({
      label: p.title,
      href: `/products/${p.slug}`,
      description: p.tagline,
    })),
  },
  { label: "Solutions", href: "/solutions" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];
