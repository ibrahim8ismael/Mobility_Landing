import Image from "next/image";

import type { Dictionary } from "@/i18n/dictionaries";

const CUSTOMER_LOGOS = [
  { name: "KAMA For Metal Industries", src: "/customer-logos/kama-metal-industries.png" },
  { name: "Kandil Glass", src: "/customer-logos/kandil-glass.png" },
  { name: "Fourtex Textile", src: "/customer-logos/fourtex-textile.png" },
  { name: "Misr El Nour", src: "/customer-logos/misr-el-nour.png" },
  { name: "Safir Plastic Industries", src: "/customer-logos/safir-plastics.png" },
  { name: "Elsewedy Cables", src: "/customer-logos/elsewedy-cables.png" },
  { name: "SIDPEC", src: "/customer-logos/sidpec.png" },
  { name: "ANRPC", src: "/customer-logos/anrpc.png" },
  { name: "Qena Paper Industry", src: "/customer-logos/qena-paper-industry.png" },
  { name: "United Paper Mill", src: "/customer-logos/united-paper-mill.png" },
  { name: "Granito Ceramic", src: "/customer-logos/granito-ceramic.png" },
  { name: "REDCON Construction", src: "/customer-logos/redcon-construction.png" },
  { name: "Abou El Wafa Ready Mix Concrete", src: "/customer-logos/abou-el-wafa-ready-mix.png" },
  { name: "Orient Ceramics", src: "/customer-logos/orient-ceramics.png" },
  { name: "Petrojet", src: "/customer-logos/petrojet.png" },
  { name: "Petromaint", src: "/customer-logos/petromaint.png" },
  { name: "Mediterranean Shipping Company (MSC)", src: "/customer-logos/msc.png" },
  { name: "MES Shipping", src: "/customer-logos/mes-shipping.png" },
];

export function CustomerLogos({
  dict,
}: {
  dict: Dictionary["customers"];
}) {
  return (
    <section
      aria-labelledby="customer-logos-title"
      className="overflow-hidden border-y border-slate-100 bg-mist py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mb-8 flex justify-center text-center sm:mb-10">
          <h2
            id="customer-logos-title"
            className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-3xl"
          >
            {dict.title}
          </h2>
        </div>
      </div>

      <div
        className="customer-marquee focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mobil"
        role="region"
        aria-label={dict.ariaLabel}
        tabIndex={0}
        dir="ltr"
      >
        <div className="customer-marquee-track flex w-max" dir="ltr">
          {[false, true].map((isDuplicate) => (
            <ul
              key={String(isDuplicate)}
              className="customer-marquee-group flex w-max shrink-0 items-stretch gap-4 px-2 sm:gap-5 sm:px-3"
              aria-hidden={isDuplicate}
            >
              {CUSTOMER_LOGOS.map((logo) => (
                <li
                  key={logo.name}
                  className="h-[78px] w-[190px] shrink-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_24px_-20px_rgba(11,27,48,0.32)] sm:h-[88px] sm:w-[220px]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={240}
                    height={92}
                    sizes="(min-width: 640px) 220px, 190px"
                    className="h-full w-full object-contain"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
