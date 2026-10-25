import { localeNames, otherLocale, type Locale } from "@/i18n/config";

type LocaleSwitcherProps = {
  locale: Locale;
  label: string;
  placement?: "header" | "menu";
  className?: string;
};

export function LocaleSwitcher({
  locale,
  label,
  placement = "header",
  className = "",
}: LocaleSwitcherProps) {
  const nextLocale = otherLocale(locale);
  const placementClassName =
    placement === "menu"
      ? "flex w-full items-center border-t border-slate-100 py-3.5 font-display text-base font-semibold text-ink transition-colors hover:text-mobil focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mobil"
      : "whitespace-nowrap rounded-full px-2 py-2 text-[0.78rem] font-semibold text-ink transition-colors hover:text-mobil focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mobil sm:px-2.5 sm:text-[0.86rem]";

  return (
    <a
      href={`/${nextLocale}`}
      hrefLang={nextLocale}
      lang={nextLocale}
      aria-label={`${label}: ${localeNames[nextLocale]}`}
      className={`${placementClassName} ${className}`}
    >
      {localeNames[nextLocale]}
    </a>
  );
}
