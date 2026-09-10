import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { siteConfig } from "@/lib/constants";
import { organizationJsonLd, localBusinessJsonLd } from "@/lib/structured-data";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AI-Powered Campus ERP & LMS | Aveon Infotech",
    template: "%s | Aveon Infotech",
  },
  description:
    "Unified AI-powered campus ERP & LMS for universities, colleges, and schools. Manage admissions, academics, fees, and operations on one platform. OBE-compliant, NAAC/AICTE ready. Serving 5000+ institutions.",
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
      "Unified platform for education management. AI-powered campus ERP for universities, colleges, and schools. NAAC/AICTE compliant.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Campus ERP & LMS | Aveon Infotech",
    description:
      "Unified AI-powered campus management platform serving 5000+ institutions.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <head>
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
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
