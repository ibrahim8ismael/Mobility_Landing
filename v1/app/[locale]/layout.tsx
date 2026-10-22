import type { Metadata } from "next";
import { Archivo, Cairo, IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import "../globals.css";
import { LocaleProvider } from "@/components/locale-provider";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dict = await getDictionary(locale);
  const isRtl = locale === "ar";

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.hero.body,
      type: "website",
      locale: isRtl ? "ar_EG" : "en_EG",
      alternateLocale: isRtl ? ["en_EG"] : ["ar_EG"],
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);
  const isRtl = locale === "ar";
  const fontClasses = isRtl
    ? `${cairo.variable} ${plexArabic.variable}`
    : `${archivo.variable} ${inter.variable}`;

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      data-theme="light"
      className={`${fontClasses} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-mobil focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          {dict.skipToContent}
        </a>
        <LocaleProvider locale={isRtl ? "ar-EG" : "en-EG"}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
