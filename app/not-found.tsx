import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="font-heading text-7xl font-extrabold text-primary-600">404</p>
      <h1 className="mt-4 text-2xl font-bold text-navy-900 sm:text-3xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-3 max-w-md text-navy-600">
        The page you&apos;re looking for may have moved. Try the homepage or
        browse our products.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white hover:bg-primary-700"
        >
          Go Home
        </Link>
        <Link
          href="/products"
          className="rounded-full border border-navy-200 px-7 py-3 text-sm font-semibold text-navy-900 hover:border-primary-400 hover:text-primary-600"
        >
          View Products
        </Link>
      </div>
      </section>
      <Footer />
    </>
  );
}
