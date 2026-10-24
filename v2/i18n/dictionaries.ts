import en from "@/messages/en.json";
import type { Locale } from "@/i18n/config";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: async () => en,
  ar: async () => (await import("@/messages/ar.json")).default,
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
