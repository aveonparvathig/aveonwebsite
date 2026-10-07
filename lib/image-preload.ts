/**
 * Image preloading utility for LCP optimization
 * Preloads critical images to improve Largest Contentful Paint (LCP)
 */

export function preloadImage(
  src: string,
  options?: {
    as?: "image";
    imageSrcSet?: string;
    imageSizes?: string;
    type?: string;
  }
) {
  if (typeof window === "undefined") return;

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = options?.as || "image";
  link.href = src;

  if (options?.imageSrcSet) {
    link.setAttribute("imagesrcset", options.imageSrcSet);
  }
  if (options?.imageSizes) {
    link.setAttribute("imagesizes", options.imageSizes);
  }
  if (options?.type) {
    link.type = options.type;
  }

  document.head.appendChild(link);
}

/**
 * Preload multiple critical images at once
 */
export function preloadImages(
  images: Array<{ src: string; options?: any }>
) {
  images.forEach(({ src, options }) => preloadImage(src, options));
}

/**
 * Critical images for homepage - preload these
 */
export const CRITICAL_IMAGES = {
  homepage: {
    hero: "/products/hero-home.webp",
    section1: "/products/s11-hero.png",
    section2: "/products/s22-hero.png",
    section3: "/products/s33-hero.png",
  },
  contact: {
    hero: "/products/contact-hero2.webp",
  },
  about: {
    hero: "/products/about-hero.webp",
  },
  blog: {
    hero: "/products/blog-hero.webp",
  },
  academy: {
    hero: "/products/academy-hero.webp",
  },
};
