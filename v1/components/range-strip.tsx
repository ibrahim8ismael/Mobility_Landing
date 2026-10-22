import { Droplet, FlaskConical, Gauge, Truck } from "lucide-react";

import { Reveal } from "@/components/motion";
import type { Dictionary } from "@/i18n/dictionaries";

const icons = [Droplet, Gauge, Truck, FlaskConical];

export function RangeStrip({ dict }: { dict: Dictionary["range"] }) {
  return (
    <section aria-label={dict.aria} className="border-y border-slate-200/80 bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {dict.items.map((item, index) => {
              const Icon = icons[index] ?? Droplet;

              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 py-6 ${
                    index < 2 ? "border-b border-slate-200/80 lg:border-b-0" : ""
                  } ${
                    index % 2 === 1
                      ? "border-s border-slate-200/80 ps-5 lg:ps-7"
                      : "pe-5 lg:pe-7"
                  } ${index === 0 ? "lg:ps-0" : ""} ${index === 3 ? "lg:pe-0" : ""}`}
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-mobil">
                    <Icon className="size-4" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {item.label}
                    </span>
                    <span className="mt-1 block font-display text-sm font-semibold leading-snug text-ink">
                      {item.value}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
