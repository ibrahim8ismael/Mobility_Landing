import type { Dictionary } from "@/i18n/dictionaries";

const SAMPLE_LOGOS = [
  { mark: "N", name: "NORTHLINE", descriptor: "FLEET & LOGISTICS", color: "text-mobil" },
  { mark: "R", name: "ROADWAY", descriptor: "TRANSPORT", color: "text-slate-700" },
  { mark: "F", name: "FLEETCORE", descriptor: "COMMERCIAL FLEET", color: "text-mobil-red" },
  { mark: "C", name: "CARGOWORKS", descriptor: "FREIGHT SERVICES", color: "text-mobil-deep" },
  { mark: "M", name: "MILESTONE", descriptor: "HEAVY HAULAGE", color: "text-slate-700" },
  { mark: "T", name: "TRANSITIQ", descriptor: "INDUSTRIAL MOVEMENT", color: "text-mobil" },
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
              {SAMPLE_LOGOS.map((logo) => (
                <li
                  key={logo.name}
                  className="flex h-[78px] w-[190px] shrink-0 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 shadow-[0_8px_24px_-20px_rgba(11,27,48,0.32)] sm:h-[88px] sm:w-[220px]"
                >
                  <span
                    aria-hidden="true"
                    className={`grid size-10 shrink-0 place-items-center rounded-xl bg-mist font-display text-xl font-bold ${logo.color}`}
                  >
                    {logo.mark}
                  </span>
                  <span className="flex min-w-0 flex-col leading-tight">
                    <span className="whitespace-nowrap font-display text-[0.92rem] font-bold tracking-[0.04em] text-ink">
                      {logo.name}
                    </span>
                    <span className="mt-1 whitespace-nowrap text-[0.56rem] font-semibold tracking-[0.12em] text-slate-400">
                      {logo.descriptor}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
