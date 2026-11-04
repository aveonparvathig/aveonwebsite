import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/constants";
import { organizationJsonLd, localBusinessJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { GA_ID, GA_IDS } from "@/lib/analytics";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  // "./" resolves against each page's own pathname, so every route gets a
  // self-referencing canonical instead of all pointing at the homepage.
  alternates: {
    canonical: "./",
  },
  title: {
    default: "AI-Powered Campus ERP & LMS | Aveon Infotech",
    template: "%s | Aveon Infotech",
  },
  description: `Unified AI-powered campus ERP & LMS for universities, colleges and schools. Manage admissions, academics, fees and operations on one platform. OBE-compliant, NAAC/AICTE ready. Serving ${siteConfig.stats.institutions} institutions.`,
  keywords: [
    "AI-powered campus ERP",
    "university ERP",
    "college ERP",
    "school ERP",
    "learning management system",
    "student information system",
    "outcome-based education",
    "campus management software",
    "AI education technology",
    "HRM & Payroll",
    "Aveon Infotech",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "AI-Powered Campus ERP & LMS | Aveon Infotech",
    description:
      "Unified platform for education management. AI-powered campus ERP for universities, colleges and schools. NAAC/AICTE compliant.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Campus ERP & LMS | Aveon Infotech",
    description: `Unified AI-powered campus management platform serving ${siteConfig.stats.institutions} institutions.`,
  },
};

// Explicit viewport config: keeps Next's default responsive meta tag, adds
// viewportFit "cover" so env(safe-area-inset-*) resolves on notched/rounded
// iPhones (fixed header, chat widget, mobile nav drawer all rely on it).
// Zoom is intentionally left enabled (no maximumScale/userScalable) for accessibility.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1d6ff2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <head>
        {/* Google Analytics 4 */}
        {/* Loaders are deferred to idle so ~300KB of tag JS doesn't compete
            with the LCP image; dataLayer queues events until they arrive. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="lazyOnload"
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${GA_IDS.map(
                (id) => `gtag('config', '${id}', { page_path: window.location.pathname });`,
              ).join("\n              ")}
            `,
          }}
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
