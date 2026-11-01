import Image from "next/image";

import type { Dictionary } from "@/i18n/dictionaries";

export function Recognition({ dict }: { dict: Dictionary["recognition"] }) {
  return (
    <section
      id="recognition"
      aria-labelledby="recognition-title"
      className="border-y border-slate-100 bg-mist py-20 sm:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-9 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-mobil-deep shadow-[0_24px_56px_-32px_rgba(6,23,41,0.48)] lg:aspect-[0.88/1]">
          <Image
            src="/circle-of-excellence-2025.jpg"
            alt={dict.imageAlt}
            fill
            sizes="(min-width: 1280px) 40vw, (min-width: 640px) 48vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <h2
            id="recognition-title"
            className="font-display text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[2.9rem]"
          >
            {dict.title}
          </h2>
          <p className="mt-4 text-lg font-medium leading-relaxed text-mobil sm:text-xl">
            {dict.subtitle}
          </p>

          <ol className="mt-8 space-y-6">
            {dict.points.map((point, index) => (
              <li
                key={point.title}
                className="flex gap-4 border-t border-slate-200 pt-6 first:border-t-0 first:pt-0"
              >
                <span
                  dir="ltr"
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-blue-50 font-display text-sm font-bold text-mobil"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
