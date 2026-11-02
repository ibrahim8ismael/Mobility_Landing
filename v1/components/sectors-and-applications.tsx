import Image from "next/image";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import type { Dictionary } from "@/i18n/dictionaries";

type CategoryTile = {
  title: string;
  imageAlt: string;
  imageSrc: string;
};

function CategoryGrid({ items }: { items: CategoryTile[] }) {
  return (
    <Stagger className="mt-9 grid grid-cols-1 gap-3 sm:mt-11 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
      {items.map((item, index) => (
        <StaggerItem key={item.title} className="h-full">
          <figure className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-mobil-dark">
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              fill
              loading={index === 0 ? "eager" : "lazy"}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-3 text-right sm:p-5">
              <span className="max-w-full font-display text-lg font-bold leading-snug text-white sm:text-2xl">
                {item.title}
              </span>
            </figcaption>
          </figure>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function SectorsAndApplications({
  sectors,
  applications,
}: {
  sectors: Dictionary["sectors"];
  applications: Dictionary["applications"];
}) {
  return (
    <>
      <section
        id="sectors"
        aria-labelledby="sectors-title"
        className="bg-mist py-20 sm:py-28"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <h2
                id="sectors-title"
                className="font-display text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[2.9rem]"
              >
                {sectors.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                {sectors.description}
              </p>
            </div>
          </Reveal>
          <CategoryGrid items={sectors.items} />
        </div>
      </section>

      <section
        id="applications"
        aria-labelledby="applications-title"
        className="bg-mobil-deep py-20 sm:py-28"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <h2
                id="applications-title"
                className="font-display text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.9rem]"
              >
                {applications.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {applications.description}
              </p>
            </div>
          </Reveal>
          <CategoryGrid items={applications.items} />
        </div>
      </section>
    </>
  );
}
