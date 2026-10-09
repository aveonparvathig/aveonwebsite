"use client";

import { OptimizedImage } from "@/components/ui/OptimizedImage";

interface ClientLogo {
  name: string;
  src: string;
}

const logos: ClientLogo[] = [
  { name: "Kovai Kalaimagal College", src: "/products/client  logos/kovai-kalaimagal-college.png" },
  { name: "CIET", src: "/products/client  logos/ciet.png" },
  { name: "Sankara", src: "/products/client  logos/sankara.png" },
  { name: "Nandha", src: "/products/client  logos/nandha.png" },
  { name: "VMKVMCH", src: "/products/client  logos/VMKVMCH-logo2 1.png" },
  { name: "SRCS", src: "/products/client  logos/srcs.png" },
  { name: "Viveganandha Global Academy", src: "/products/client  logos/Viveganandha-Global-Academy.png" },
  { name: "SNR", src: "/products/client  logos/SNR.png 1.png" },
  { name: "SNMV", src: "/products/client  logos/snmv-logo-ad-page-scaled 1.png" },
  { name: "SSR", src: "/products/client  logos/ssr.png" },
  { name: "MCET", src: "/products/client  logos/mcet.png" },
  { name: "EGS", src: "/products/client  logos/egs.png" },
  { name: "GRG", src: "/products/client  logos/grg.png" },
  { name: "PSG CAS", src: "/products/client  logos/psg cas.png" },
  { name: "Aalim", src: "/products/client  logos/aalim.png" },
  { name: "GTN", src: "/products/client  logos/gtn (2).png" },
  { name: "SAN", src: "/products/client  logos/san.png" },
  { name: "KSG", src: "/products/client  logos/ksg.png" },
  { name: "KOCAS", src: "/products/client  logos/kocas.png" },
  { name: "SPC", src: "/products/client  logos/SPCLOGO 1.png" },
  { name: "Vidya Vikas", src: "/products/client  logos/vidya vikas.png" },
  { name: "Vanavarayar", src: "/products/client  logos/vanavarayar.png" },
  { name: "Kirstu Janti University", src: "/products/client  logos/kirstu janti university.png" },
  { name: "GTN", src: "/products/client  logos/gtn.png" },
  { name: "PSGITA", src: "/products/client  logos/psgitarlogo 1.png" },
  { name: "JSB", src: "/products/client  logos/JSB-website-baner-1 1.png" },
  { name: "VMKVMCH", src: "/products/client  logos/VMKVMCH-.png" },
  { name: "Annai Mera", src: "/products/client  logos/annai mera.png" },
];

// Split logos into two rows for alternating scrolling
const midpoint = Math.ceil(logos.length / 2);
const topRowLogos = logos.slice(0, midpoint);
const bottomRowLogos = logos.slice(midpoint);

// Spacing lives inside each item (padding, not flex gap) so the duplicated track is exactly 2x one set
// and the -50% loop lands with no jump.
function LogoRow({
  logos,
  rowKey,
  durationSeconds,
  moveRight = false,
}: {
  logos: ClientLogo[];
  rowKey: string;
  durationSeconds: number;
  moveRight?: boolean;
}) {
  return (
    <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] sm:[mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)]">
      <div
        className="flex w-max animate-marquee items-center py-2 [will-change:transform] group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ "--marquee-duration": `${durationSeconds}s`, animationDirection: moveRight ? "reverse" : "normal" } as React.CSSProperties}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${rowKey}-${i}`}
            aria-hidden={i >= logos.length}
            className="flex h-20 w-[180px] shrink-0 items-center justify-center px-4 sm:h-24 sm:w-[230px] sm:px-6 lg:h-28 lg:w-[260px] lg:px-8"
          >
            <OptimizedImage
              src={logo.src}
              alt={i >= logos.length ? "" : logo.name}
              width={240}
              height={120}
              quality={80}
              containerClassName="flex items-center justify-center"
              className="h-auto w-auto max-h-16 max-w-[148px] object-contain mix-blend-multiply transition-transform duration-300 hover:scale-110 sm:max-h-20 sm:max-w-[182px] lg:max-h-24 lg:max-w-[196px]"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .animate-marquee {
          animation: marquee var(--marquee-duration, 45s) linear infinite;
        }
      `}</style>
    </div>
  );
}

export default function ClientLogosCarousel() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12">
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/3 h-80 w-80 rounded-full bg-primary-200/20 blur-[100px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-primary-100/15 blur-[120px]" />

      <div className="relative mx-auto max-w-full px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-[11.5px] font-extrabold uppercase tracking-[0.2em] text-primary-500">
            Trusted by Institutions Across the Country
          </p>
          <h2 className="mt-4 text-[clamp(28px,4vw,42px)] font-extrabold text-navy-900">
            Our Clients
          </h2>
        </div>

        {/* Dual-row logo carousel: top row glides right to left, bottom row left to right; hover or touch-hold pauses */}
        <div className="space-y-4 sm:space-y-6">
          <LogoRow logos={topRowLogos} rowKey="top" durationSeconds={58} />
          <LogoRow logos={bottomRowLogos} rowKey="bottom" durationSeconds={68} moveRight />
        </div>
      </div>
    </section>
  );
}
