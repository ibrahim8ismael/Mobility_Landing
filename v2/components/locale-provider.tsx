"use client";

import { I18nProvider } from "@heroui/react";
import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

type LocaleProviderProps = {
  locale: string;
  children: ReactNode;
};

export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  return (
    <MotionConfig reducedMotion="user">
      <I18nProvider locale={locale}>{children}</I18nProvider>
    </MotionConfig>
  );
}
