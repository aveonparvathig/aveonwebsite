import Image from "next/image";
import { fetchOrFallback } from "@/lib/sanity";
import { customersQuery } from "@/lib/queries";
import { customers as fallbackCustomers, type Customer } from "@/lib/data/customers";

/** "Trusted by" strip — a gentle auto-scrolling marquee of customer names/logos. */
export default async function Customers() {
  const customers = await fetchOrFallback<Customer[]>(customersQuery, fallbackCustomers);
  if (!customers?.length) return null;

  // Duplicate the list so the marquee (translateX -50%) loops seamlessly.
  const track = [...customers, ...customers];

  return (
    <section className="border-y border-navy-900/8 bg-white">
      <div className="mx-auto max-w-[1320px] px-4 py-10 sm:px-6 lg:px-10">
        <p className="text-center text-[11.5px] font-extrabold uppercase tracking-[0.2em] text-navy-400">
          Trusted by institutions across the country
        </p>

        <div className="group relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_7%,#000_93%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {track.map((c, i) => (
              <span key={`${c.name}-${i}`} className="flex shrink-0 items-center" aria-hidden={i >= customers.length}>
                {c.logo ? (
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={140}
                    height={44}
                    className="h-9 w-auto opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                ) : (
                  <span className="whitespace-nowrap text-[17px] font-bold text-navy-300 transition-colors duration-300 hover:text-navy-700">
                    {c.name}
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
