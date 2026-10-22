"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { LocaleSwitcher } from "@/components/locale-switcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type SiteHeaderProps = {
  locale: Locale;
  dict: Dictionary["nav"];
  brand: Dictionary["brand"];
};

export function SiteHeader({ locale, dict, brand }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#why", label: dict.why },
    { href: "#products", label: dict.products },
    { href: "#services", label: dict.services },
    { href: "#coverage", label: dict.coverage },
    { href: "#contact", label: dict.contact },
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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5 lg:px-8">
      <div className="mx-auto w-full max-w-[1650px]">
        <div
          className={`relative flex min-h-[62px] items-center justify-between gap-3 rounded-[1.45rem] border border-white/80 bg-white px-4 py-2.5 transition-shadow duration-300 sm:min-h-[74px] sm:gap-5 sm:rounded-[1.7rem] sm:px-6 ${
            scrolled || open
              ? "shadow-[0_14px_40px_-24px_rgba(11,27,48,0.38)]"
              : "shadow-[0_5px_24px_-18px_rgba(11,27,48,0.24)]"
          }`}
        >
          <a
            href="#top"
            aria-label={brand.homeLabel}
            dir="ltr"
            className="group flex shrink-0 items-center gap-2.5"
          >
            <span className="relative flex size-8 shrink-0 items-center justify-center sm:size-9">
              <span className="absolute inset-0 rounded-xl bg-mobil" />
              <span className="relative block h-4 w-4 rotate-45 rounded-[0.3rem] border-[2.5px] border-white sm:h-[18px] sm:w-[18px]" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.08rem] font-extrabold tracking-[-0.045em] text-ink sm:text-[1.28rem]">
                {brand.name}
              </span>
              <span dir="auto" className="mt-1 hidden max-w-[128px] truncate text-[0.56rem] font-semibold text-slate-500 sm:block sm:max-w-none sm:text-[0.62rem]">
                {brand.tagline}
              </span>
            </span>
            <span className="mx-0.5 h-7 w-px shrink-0 bg-slate-200 sm:mx-1 sm:h-8" aria-hidden="true" />
            <span className="relative block h-8 w-[68px] shrink-0 overflow-hidden sm:h-9 sm:w-[82px]" aria-hidden="true">
              <Image
                src="/mobil-wordmark.png"
                alt=""
                fill
                sizes="(min-width: 640px) 82px, 68px"
                className="object-cover"
                priority
              />
            </span>
          </a>

          <nav className="hidden min-w-0 items-center justify-center lg:flex" aria-label={dict.primaryAria}>
            {links.map((link, index) => (
              <span key={link.href} className="flex items-center gap-2.5 xl:gap-3.5">
                <a
                  href={link.href}
                  className="whitespace-nowrap rounded-full px-1 py-2 text-[0.82rem] font-semibold text-ink transition-colors hover:text-mobil xl:px-1.5 xl:text-[0.9rem]"
                >
                  {link.label}
                </a>
                {index < links.length - 1 ? (
                  <span className="select-none text-[1.2rem] leading-none text-mobil" aria-hidden="true">
                    •
                  </span>
                ) : null}
              </span>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <LocaleSwitcher locale={locale} label={dict.switchLanguage} />
            <a
              href="#contact"
              aria-label={dict.talkToSales}
              className="grid size-9 shrink-0 place-items-center rounded-full bg-mobil text-white transition-colors hover:bg-mobil-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mobil sm:size-10"
            >
              <MessageCircle className="size-[17px] sm:size-[18px]" strokeWidth={2.2} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? dict.closeMenu : dict.openMenu}
              className="grid size-9 place-items-center rounded-full border border-slate-200 bg-white text-ink transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mobil lg:hidden sm:size-10"
            >
              {open ? <X className="size-[18px]" /> : <Menu className="size-[18px]" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 overflow-hidden rounded-[1.45rem] border border-slate-200/80 bg-white shadow-[0_14px_40px_-24px_rgba(11,27,48,0.38)] lg:hidden"
            >
              <nav className="flex flex-col px-5 py-2" aria-label={dict.mobileAria}>
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-slate-100 py-3.5 font-display text-base font-semibold text-ink last:border-b-0"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
