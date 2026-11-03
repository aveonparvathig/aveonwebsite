import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  // Image optimization for performance
  images: {
    remotePatterns: [
      // Sanity's image CDN, used once the CMS hosts media.
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
    // Enable modern formats and aggressive optimization
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year for immutable images
  },

  // Optimize package imports
  experimental: {
    optimizePackageImports: ["@heroicons/react", "@radix-ui/*"],
  },

  async redirects() {
    // State pages exist only where there are verifiable clients; the rest
    // fold into the by-state hub until a deployment exists there.
    const foldedStates = ["telangana", "maharashtra", "delhi", "haryana", "punjab", "west-bengal", "rajasthan", "gujarat"];
    return [
      { source: "/index", destination: "/", permanent: true },
      ...foldedStates.map((s) => ({
        source: `/solutions/college-erp-${s}`,
        destination: "/solutions/by-state",
        permanent: true,
      })),
    ];
  },

  // Cache headers for optimal performance
  async headers() {
    return [
      // Security headers for all routes
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Aggressive caching for static assets
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Image files only; the bare pattern also matched the product HTML pages.
      {
        source:
          "/products/:file(.*\\.webp|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg|.*\\.avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache HTML pages with shorter TTL
      {
        source: "/:path*.html",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400",
          },
        ],
      },
      // Cache API responses
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=60, s-maxage=600",
          },
        ],
      },
    ];
  },

  // Optimize builds
  productionBrowserSourceMaps: false,
};

export default nextConfig;
