"use client";

import Image from "next/image";

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
  { name: "Vethathiri", src: "/products/client  logos/vethathiri.png" },
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

export default function ClientLogosCarousel() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white py-16 sm:py-20 lg:py-24">
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

        {/* Dual Row Scrolling Carousel */}
        <div className="space-y-6">
          {/* Top Row - Scroll Right to Left */}
          <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-6 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
              {[...topRowLogos, ...topRowLogos].map((logo, i) => (
                <div
                  key={`top-${i}`}
                  className="flex shrink-0 items-center justify-center rounded-[20px] bg-white p-6 shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105"
                  style={{ width: "160px", height: "120px" }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={120}
                    height={100}
                    className="h-auto w-auto max-h-20 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Scroll Left to Right */}
          <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)]">
            <div className="flex w-max animate-marquee-reverse items-center gap-6 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
              {[...bottomRowLogos, ...bottomRowLogos].map((logo, i) => (
                <div
                  key={`bottom-${i}`}
                  className="flex shrink-0 items-center justify-center rounded-[20px] bg-white p-6 shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105"
                  style={{ width: "160px", height: "120px" }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={120}
                    height={100}
                    className="h-auto w-auto max-h-20 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
