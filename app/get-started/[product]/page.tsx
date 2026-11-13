import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/components/landing/LandingPage";
import { getProductVariant, productVariants } from "@/components/landing/variants";

// Paid-ad landing pages for single products (School ERP, Hostel, Fees). Same
// layout as /get-started, with the headline, proof points and the form's
// product matched to the ad the visitor clicked. Not indexed.

// Only the listed variants exist; anything else under /get-started is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return productVariants.map((v) => ({ product: v.path }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}): Promise<Metadata> {
  const { product } = await params;
  const variant = getProductVariant(product);
  if (!variant) return {};
  return {
    // absolute: the root layout's title template would append the brand again.
    title: { absolute: variant.metaTitle },
    description: variant.metaDescription,
    robots: { index: false, follow: false },
    alternates: { canonical: `/get-started/${variant.path}` },
  };
}

export default async function ProductLandingPage({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const variant = getProductVariant(product);
  if (!variant) notFound();
  return <LandingPage variant={variant} />;
}
