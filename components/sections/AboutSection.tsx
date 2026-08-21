import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* LEFT — About Content */}
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-primary-600">
            About Aveon
          </p>

          <h2 className="mt-3 max-w-xl font-heading text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
            Building Technology That Works for Business
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-navy-600 sm:text-base">
            Aveon InfoTech delivers innovative technology solutions that
            simplify business operations, improve efficiency, and help
            organizations grow. We build reliable digital solutions that
            solve real-world challenges for modern organizations.
          </p>

          <Link
            href="/about"
            className="mt-6 inline-flex items-center rounded-md bg-primary-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-700 hover:shadow-lg"
          >
            About Aveon
          </Link>
        </div>

        {/* RIGHT — Image */}
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src="/images/erp1.jpg"
            alt="Aveon team working together"
            width={900}
            height={600}
            className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[400px]"
          />
        </div>

      </div>
    </section>
  );
}