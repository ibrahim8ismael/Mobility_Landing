import Image from "next/image";
import { Info, MapPin, Ship } from "lucide-react";

import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n/dictionaries";

const mapMarkers = [
  { left: "19%", top: "58%", tone: "red" },
  { left: "37%", top: "58%", tone: "blue" },
  { left: "68%", top: "32%", tone: "blue" },
  { left: "82%", top: "32%", tone: "red" },
];

function EgyptMap({ ariaLabel }: { ariaLabel: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[#f5f9ff] shadow-[0_30px_60px_-40px_rgba(11,46,98,0.45)]">
      <Image
        src="/coverage-map-illustration.jpg"
        alt={ariaLabel}
        fill
        sizes="(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw"
        className="object-cover"
      />

      {mapMarkers.map((marker, index) => (
        <span
          key={`${marker.left}-${marker.top}`}
          className="absolute z-10 -translate-x-1/2 -translate-y-[92%] drop-shadow-[0_5px_8px_rgba(11,46,98,0.3)]"
          style={{ left: marker.left, top: marker.top }}
          aria-hidden="true"
        >
          <MapPin
            className={marker.tone === "red" ? "size-9 fill-mobil-red text-white" : "size-9 fill-mobil text-white"}
            strokeWidth={2.25}
          />
        </span>
      ))}
    </div>
  );
}

export function Coverage({ dict }: { dict: Dictionary["coverage"] }) {
  return (
    <section id="coverage" className="relative overflow-hidden bg-mist py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div>
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
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="space-y-4">
            <Reveal>
              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_2px_rgba(11,27,48,0.02)] sm:p-7">
                {dict.groups.map((group, index) => (
                  <div
                    key={group.region}
                    className={index > 0 ? "mt-5 border-t border-slate-100 pt-5" : ""}
                  >
                    <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                      {group.region}
                    </h3>
                    <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {group.note}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.hubs.map((hub) => (
                        <span
                          key={hub}
                          className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-mist px-3 py-2 text-sm font-medium text-slate-700"
                        >
                          <MapPin className="size-3.5 shrink-0 text-mobil-red" aria-hidden="true" />
                          {hub}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {dict.marine.title || dict.marine.description ? (
              <Reveal delay={0.16}>
                <div className="flex items-start gap-3 rounded-3xl border border-blue-100 bg-blue-50/60 p-5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white text-mobil">
                    <Ship className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{dict.marine.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {dict.marine.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ) : null}

            {dict.footnote ? (
              <Reveal delay={0.2}>
                <p className="flex items-start gap-2 px-1 text-xs leading-relaxed text-slate-500">
                  <Info className="mt-0.5 size-3.5 shrink-0 text-slate-400" aria-hidden="true" />
                  {dict.footnote}
                </p>
              </Reveal>
            ) : null}
          </div>

          <Reveal delay={0.12}>
            <EgyptMap ariaLabel={dict.map.aria} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
