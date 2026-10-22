"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@heroui/react";

import { BrandMark } from "@/components/brand-mark";
import { LocaleSwitcher } from "@/components/locale-switcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type SiteHeaderProps = {
  locale: Locale;
  dict: Dictionary["nav"];
  brand: Dictionary["brand"];
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteHeader({ locale, dict, brand }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#why", label: dict.why },
    { href: "#products", label: dict.products },
    { href: "#services", label: dict.services },
    { href: "#coverage", label: dict.coverage },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-slate-200/80 bg-white/85 py-2.5 shadow-[0_8px_30px_-24px_rgba(11,27,48,0.45)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <BrandMark tagline={brand.tagline} homeLabel={brand.homeLabel} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label={dict.primaryAria}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LocaleSwitcher locale={locale} label={dict.switchLanguage} />
          <a
            href="#contact"
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-mobil"
          >
            {dict.talkToSales}
          </a>
          <Button
            size="md"
            onPress={() => scrollTo("contact")}
            className="h-10 rounded-full bg-mobil px-5 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(22,75,152,0.9)] data-[hovered=true]:bg-mobil-deep"
          >
            {dict.requestQuote}
            <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? dict.closeMenu : dict.openMenu}
          className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-ink transition-colors hover:bg-slate-50 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mx-auto w-full max-w-7xl px-5 pb-6 pt-4 sm:px-8">
              <nav className="flex flex-col" aria-label={dict.mobileAria}>
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-slate-100 py-3.5 font-display text-lg font-semibold text-ink"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="border-b border-slate-100 py-3.5 font-display text-lg font-semibold text-ink"
                >
                  {dict.contact}
                </a>
              </nav>

              <div className="mt-5 flex items-center justify-between gap-4">
                <LocaleSwitcher locale={locale} label={dict.switchLanguage} />
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-mobil"
                >
                  {dict.talkToSales}
                </a>
              </div>

              <Button
                fullWidth
                size="lg"
                onPress={() => {
                  setOpen(false);
                  scrollTo("contact");
                }}
                className="mt-5 rounded-full bg-mobil text-sm font-semibold text-white"
              >
                {dict.requestQuote}
                <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
