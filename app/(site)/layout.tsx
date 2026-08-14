import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { fetchOrFallback } from "@/lib/sanity";
import { productsQuery } from "@/lib/queries";
import { products as fallbackProducts, type Product } from "@/lib/data/products";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetched once here so the menu and footer stay in sync with the CMS.
  const products = await fetchOrFallback<Product[]>(
    productsQuery,
    fallbackProducts,
  );

  return (
    <>
      <Navigation products={products} />
      <main className="flex-1">{children}</main>
      <Footer products={products} />
    </>
  );
}
