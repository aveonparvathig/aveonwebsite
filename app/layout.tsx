import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { siteConfig } from "@/lib/constants";
import { organizationJsonLd } from "@/lib/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Aveon Infotech — University, College & School ERP Solutions",
    template: "%s | Aveon Infotech",
  },
  description:
    "Aveon Infotech builds ERP solutions for education — University ERP, College ERP, School ERP, LMS with AI Chatbot, HRM & Payroll, and more.",
  keywords: [
    "University ERP",
    "College ERP",
    "School ERP",
    "Education ERP",
    "LMS",
    "AI Chatbot",
    "HRM Payroll",
    "Aveon Infotech",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Aveon Infotech — Education ERP Solutions",
    description:
      "Comprehensive ERP solutions for universities, colleges and schools.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aveon Infotech — Education ERP Solutions",
    description:
      "Comprehensive ERP solutions for universities, colleges and schools.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
