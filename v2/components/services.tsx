"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n/dictionaries";

const serviceImages = [
  "/service-oil-analysis-factory.png",
  "/service-field-engineering-factory.png",
  "/service-tco-optimization-factory.png",
  "/service-truck-oil-filtration.jpg",
];
const mobilServName = "Mobil Serv℠";

function ServiceTitle({ title }: { title: string }) {
  const brandStart = title.indexOf(mobilServName);
  if (brandStart === -1) return title;

  return (
    <>
      {title.slice(0, brandStart)}
      <span dir="ltr" className="inline-block whitespace-nowrap">
        {mobilServName}
      </span>
      {title.slice(brandStart + mobilServName.length)}
    </>
  );
}

export function Services({ dict }: { dict: Dictionary["services"] }) {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SectionHeading
              eyebrow={dict.eyebrow}
              title={
                <>
                  {dict.titlePrefix} <span className="text-mobil">{dict.titleHighlight}</span>
                </>
              }
            />
          </Reveal>
          {dict.description ? (
            <Reveal delay={0.1}>
              <p className="max-w-md text-base leading-relaxed text-slate-600 lg:ms-auto">
                {dict.description}
              </p>
            </Reveal>
          ) : null}
        </div>

        <Stagger className="mt-12 grid items-start gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {dict.items.map((service, index) => (
            <StaggerItem key={service.title} className="self-start">
              <details className="group/details w-full">
                <summary className="block cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <article className="group relative isolate aspect-[0.62] overflow-hidden rounded-[1.75rem] bg-mobil-deep shadow-[0_16px_40px_-24px_rgba(11,27,48,0.42)]">
                    <Image
                      src={serviceImages[index]}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 280px, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/5 to-slate-950/95"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-5 sm:p-6">
                      <h3
                        dir="auto"
                        className="min-w-0 flex-1 text-end font-display text-[1.45rem] font-semibold leading-[1.16] tracking-[-0.025em] text-white sm:text-2xl"
                      >
                        <ServiceTitle title={service.title} />
                      </h3>
                      <span className="grid size-14 shrink-0 place-items-center rounded-full bg-mobil text-white shadow-[0_12px_24px_-12px_rgba(0,50,135,0.9)] transition-transform duration-200 group-hover/details:scale-105 group-open/details:rotate-90">
                        <ArrowLeft className="size-5" strokeWidth={2} aria-hidden="true" />
                      </span>
                    </div>
                  </article>
                </summary>

                <div className="service-details mt-4 rounded-2xl border border-slate-200/80 bg-white p-5 text-ink shadow-[0_8px_24px_-18px_rgba(11,27,48,0.32)] sm:p-6">
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-[0.92rem]">
                    {service.description}
                  </p>
                </div>
              </details>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
