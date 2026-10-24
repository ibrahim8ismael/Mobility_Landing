import { Info, MapPin, Ship } from "lucide-react";

import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

const pinPositions = [
  { x: 259, y: 147, labelX: 180, labelY: 136, lineX: 244, lineY: 141 },
  { x: 336, y: 184, labelX: 455, labelY: 158, lineX: 370, lineY: 178 },
];

function EgyptMap({ dict, isRtl }: { dict: Dictionary["coverage"]["map"]; isRtl: boolean }) {
  return (
    <div className="relative h-[460px] overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[#eef3f9] shadow-[0_30px_60px_-40px_rgba(11,46,98,0.45)] sm:h-[540px] lg:h-[560px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11,46,98,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,46,98,0.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <svg
        viewBox="0 0 600 700"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label={dict.aria}
      >
        <defs>
          <linearGradient id="egypt-fill" x1="0" y1="0" x2="0.6" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e3ebf5" />
          </linearGradient>
          <filter id="pin-shadow" x="-80%" y="-80%" width="260%" height="260%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#0b2e62" floodOpacity="0.3" />
          </filter>
        </defs>

        <text
          x="300"
          y="100"
          textAnchor="middle"
          fill="#8aa3bf"
          fontSize={isRtl ? 12 : 10.5}
          fontWeight="600"
          letterSpacing={isRtl ? 0 : 3}
        >
          {dict.medSea}
        </text>

        <path
          d="M 481.2 223.2 L 468.9 242.9 L 459.5 279.9 L 447.6 305.5 L 437.4 314.0 L 422.8 298.2 L 403.0 276.3 L 371.8 206.0 L 367.3 210.5 L 385.4 262.2 L 412.3 311.5 L 445.4 387.9 L 461.5 414.6 L 475.6 442.3 L 514.9 496.5 L 506.2 505.1 L 507.6 536.9 L 558.6 581.0 L 566.2 591.0 L 392.6 591.0 L 222.8 591.0 L 46.9 591.0 L 46.9 410.4 L 46.9 236.1 L 33.8 196.6 L 45.0 166.3 L 38.3 145.3 L 54.1 121.8 L 112.3 121.0 L 154.4 134.0 L 197.9 148.5 L 218.2 156.1 L 251.9 140.6 L 269.9 126.5 L 308.5 122.5 L 339.6 128.7 L 351.5 153.0 L 361.7 137.0 L 396.8 148.5 L 430.9 151.3 L 452.4 139.0 L 481.2 223.2 Z"
          fill="url(#egypt-fill)"
          stroke="#b9c9dd"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />

        <path
          d="M 392.6 488 C 386 439 381 410 362 380 C 335 297 322 233 320 197"
          fill="none"
          stroke="#a8c4e4"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M 320 197 C 301 164 283 145 283 145"
          fill="none"
          stroke="#a8c4e4"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 320 197 C 344 160 362 150 362 150"
          fill="none"
          stroke="#a8c4e4"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <text
          x="285"
          y="390"
          textAnchor="middle"
          fill="#ccd9e8"
          fontSize={isRtl ? 56 : 52}
          fontWeight="700"
          letterSpacing={isRtl ? 0 : 8}
        >
          {dict.watermark}
        </text>

        <path
          d="M 265 151 C 290 163 310 173 330 181"
          fill="none"
          stroke="#164b98"
          strokeWidth="1.4"
          strokeDasharray="3 6"
          strokeLinecap="round"
          opacity="0.55"
        />

        {dict.pins.map((pin, index) => {
          const position = pinPositions[index] ?? pinPositions[0];

          return (
            <g key={pin.name}>
              <line
                x1={position.x}
                y1={position.y}
                x2={position.lineX}
                y2={position.lineY}
                stroke="#8aa3bf"
                strokeWidth="1"
                opacity="0.8"
              />
              <circle
                cx={position.x}
                cy={position.y}
                r="10"
                fill="#164b98"
                opacity="0.25"
                className="map-ping"
                style={{ animationDelay: `${index * 0.5}s` }}
              />
              <circle
                cx={position.x}
                cy={position.y}
                r="5.5"
                fill="#164b98"
                stroke="#ffffff"
                strokeWidth="2.2"
                filter="url(#pin-shadow)"
              />
              <text
                x={position.labelX}
                y={position.labelY}
                textAnchor="middle"
                fill="#0b2e62"
                fontSize={isRtl ? 15 : 14}
                fontWeight="600"
                paintOrder="stroke"
                stroke="#eef3f9"
                strokeWidth="4"
                strokeLinejoin="round"
              >
                <tspan x={position.labelX} dy="0">
                  {pin.name}
                </tspan>
                <tspan
                  x={position.labelX}
                  dy="15"
                  fontSize={isRtl ? 11.5 : 10.5}
                  fontWeight="500"
                  fill="#5b6b80"
                >
                  {pin.detail}
                </tspan>
              </text>
            </g>
          );
        })}

        <text
          x="505"
          y="390"
          fill="#8aa3bf"
          fontSize={isRtl ? 11 : 10}
          fontWeight="600"
          letterSpacing={isRtl ? 0 : 2.4}
          transform="rotate(55 505 390)"
        >
          {dict.redSea}
        </text>
      </svg>

      {dict.legendHub || dict.legendNote ? (
        <div className="absolute bottom-4 start-4 flex max-w-[calc(100%-2rem)] flex-wrap items-center gap-2 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-[0.6rem] font-medium text-slate-500 shadow-sm backdrop-blur">
          <span className="size-1.5 rounded-full bg-mobil" />
          {dict.legendHub}
          <span className="mx-1 h-3 w-px bg-slate-300" />
          {dict.legendNote}
        </div>
      ) : null}
    </div>
  );
}

export function Coverage({ locale, dict }: { locale: Locale; dict: Dictionary["coverage"] }) {
  const isRtl = locale === "ar";

  return (
    <section id="coverage" className="relative overflow-hidden bg-mist py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.05fr_0.95fr]">
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
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-slate-600 lg:ms-auto">
              {dict.description}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="space-y-4">
            {dict.groups.map((group, index) => (
              <Reveal key={group.region} delay={index * 0.08}>
                <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_2px_rgba(11,27,48,0.02)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                        {group.region}
                      </h3>
                      <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
                        {group.note}
                      </p>
                    </div>
                    <span className="grid size-9 place-items-center rounded-xl bg-blue-50 text-mobil">
                      <MapPin className="size-4" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {group.hubs.map((hub) => (
                      <div
                        key={hub}
                        className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-mist px-3 py-2.5 text-sm font-medium text-slate-700"
                      >
                        <span className="size-1.5 rounded-full bg-mobil-red" />
                        {hub}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

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
            <EgyptMap dict={dict.map} isRtl={isRtl} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
