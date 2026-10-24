import { notFound } from "next/navigation";

import { Contact } from "@/components/contact";
import { Coverage } from "@/components/coverage";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhyMobility } from "@/components/why-mobility";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return (
    <>
      <SiteHeader locale={locale} dict={dict.nav} brand={dict.brand} />
      <main id="main" className="flex-1">
        <Hero dict={dict.hero} locale={locale} />
        <WhyMobility dict={dict.why} />
        <Products dict={dict.products} />
        <Services dict={dict.services} />
        <Coverage dict={dict.coverage} />
        <Contact locale={locale} dict={dict.contact} />
      </main>
      <SiteFooter brand={dict.brand} dict={dict.footer} />
    </>
  );
}
