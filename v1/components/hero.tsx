import { getImageProps } from "next/image";
import { ArrowRight } from "lucide-react";

import { UspStats } from "@/components/usp-stats";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Hero({ dict, locale }: { dict: Dictionary["hero"]; locale: Locale }) {
  const commonImageProps = {
    alt: dict.imageAlt,
    sizes: "100vw",
    quality: 75,
  };
  const { props: desktopImageProps } = getImageProps({
    ...commonImageProps,
    src: "/factory-maintenance-hero.png",
    width: 1672,
    height: 941,
  });
  const { props: mobileImageProps } = getImageProps({
    ...commonImageProps,
    src: "/factory-maintenance-hero-mobile.png",
    width: 1024,
    height: 1536,
  });

  return (
    <section
      id="top"
      className="relative bg-[#f1f2f4] px-3 pb-5 pt-[94px] sm:px-5 sm:pb-7 sm:pt-[120px] lg:px-8"
    >
      <div className="hero-stage relative isolate overflow-hidden rounded-[1.35rem] bg-mobil-dark shadow-[0_24px_60px_-32px_rgba(6,23,41,0.55)] sm:rounded-[1.55rem]">
        <picture className="absolute inset-0">
          <source
            media="(max-width: 639px)"
            srcSet={mobileImageProps.srcSet}
            sizes={mobileImageProps.sizes}
          />
          <img
            {...desktopImageProps}
            fetchPriority="high"
            className="h-full w-full object-cover object-[68%_center] sm:object-[53%_center]"
          />
        </picture>
        <div className="hero-image-shade absolute inset-0" aria-hidden="true" />

        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end px-5 pb-8 pt-16 sm:inset-y-0 sm:inset-x-auto sm:start-0 sm:w-full sm:max-w-[54rem] sm:justify-center sm:px-10 sm:py-14 lg:px-16 lg:py-20">
          <h1 className="max-w-[700px] font-display text-[2.45rem] font-bold leading-[1.12] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4.35rem]">
            {dict.titlePrefix}{" "}
            <span className="text-white">{dict.titleBrand}</span> {dict.titleSuffix}
          </h1>

          <div className="my-4 h-px w-full max-w-[620px] bg-white/45 sm:my-5" aria-hidden="true" />

          <p className="max-w-[640px] font-display text-[1.05rem] font-semibold leading-relaxed text-white sm:text-xl">
            {dict.lead}
          </p>
          <p className="mt-3 max-w-[600px] text-sm leading-6 text-white/85 sm:mt-4 sm:text-base sm:leading-7">
            {dict.body}
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex min-h-11 w-fit items-center justify-center gap-2.5 rounded-full bg-mobil px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0d3d82] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white sm:mt-6 sm:min-h-12 sm:px-7"
          >
            {dict.ctaPrimary}
            <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
          </a>
        </div>
      </div>

      <UspStats ariaLabel={dict.uspAriaLabel} items={dict.usps} locale={locale} />
    </section>
  );
}
