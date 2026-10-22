import { ClipboardList, LineChart, MapPinned, Truck } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n/dictionaries";

const icons = [MapPinned, ClipboardList, Truck, LineChart];

export function Process({ dict }: { dict: Dictionary["process"] }) {
  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={dict.eyebrow}
            align="center"
            title={
              <>
                {dict.titlePrefix} <span className="text-mobil">{dict.titleHighlight}</span>
              </>
            }
            description={dict.description}
          />
        </Reveal>

        <Stagger className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            className="pointer-events-none absolute inset-x-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block"
            aria-hidden="true"
          />
          {dict.steps.map((step, index) => {
            const Icon = icons[index] ?? MapPinned;

            return (
              <StaggerItem key={step.title} className="relative">
                <div className="relative">
                  <span className="relative z-10 grid size-12 place-items-center rounded-2xl border border-slate-200 bg-white text-mobil shadow-[0_8px_20px_-14px_rgba(11,46,98,0.5)]">
                    <Icon className="size-5" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <span className="mt-5 block font-display text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {dict.stepLabel} {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1.5 font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
