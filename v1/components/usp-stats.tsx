"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type Usp = Dictionary["hero"]["usps"][number];
const EASE = [0.22, 1, 0.36, 1] as const;

function CountUp({ target, locale }: { target: number; locale: Locale }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      setCount(target);
      return;
    }

    const controls = animate(0, target, {
      duration: 1.5,
      ease: EASE,
      onUpdate: (latest) => setCount(Math.floor(latest)),
      onComplete: () => setCount(target),
    });

    return () => controls.stop();
  }, [isInView, shouldReduceMotion, target]);

  return (
    <span ref={ref}>
      {new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(count)}
    </span>
  );
}

export function UspStats({
  ariaLabel,
  items,
  locale,
}: {
  ariaLabel: string;
  items: Dictionary["hero"]["usps"];
  locale: Locale;
}) {
  return (
    <ul
      aria-label={ariaLabel}
      className="mt-4 grid grid-cols-2 gap-x-3 gap-y-8 border-t border-slate-200 bg-white px-2 py-8 sm:gap-x-1 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:py-12"
    >
      {items.map((item: Usp) => {
        const accessibleValue =
          item.count === null
            ? item.value
            : `${new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(item.count)}${item.suffixSpace ? " " : ""}${item.suffix}`;

        return (
          <li key={item.label} className="flex flex-col items-center justify-center px-1 text-center sm:px-2">
            <p
              className={`font-display font-light leading-none tracking-[-0.045em] ${
                item.count === null
                  ? "text-2xl text-mobil sm:text-3xl lg:text-3xl xl:text-[3rem] 2xl:text-[4rem]"
                  : "text-[2.5rem] sm:text-[3.1rem] lg:text-[3.5rem] xl:text-[4.35rem] 2xl:text-[5.75rem]"
              }`}
            >
              {item.count === null ? (
                <span>{item.value}</span>
              ) : (
                <>
                  <span
                    aria-hidden="true"
                    className="inline-flex items-baseline whitespace-nowrap"
                    dir="ltr"
                  >
                    <span style={{ color: "transparent", WebkitTextStroke: "1.25px #142033" }}>
                      <CountUp target={item.count} locale={locale} />
                    </span>
                    <span className={`font-medium text-mobil ${item.suffixSpace ? "ms-1" : ""}`}>
                      {item.suffix}
                    </span>
                  </span>
                  <span className="sr-only">{accessibleValue}</span>
                </>
              )}
            </p>
            <p className="mt-3 max-w-[15rem] font-display text-sm leading-relaxed text-ink sm:text-base">
              {item.label}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
