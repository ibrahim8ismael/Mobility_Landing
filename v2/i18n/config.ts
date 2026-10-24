export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

export const localeShortNames: Record<Locale, string> = {
  en: "EN",
  ar: "عربي",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "ar" : "en";
}
