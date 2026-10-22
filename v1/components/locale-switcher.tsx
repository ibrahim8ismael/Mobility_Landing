import { localeNames, locales, localeShortNames, type Locale } from "@/i18n/config";

type LocaleSwitcherProps = {
  locale: Locale;
  label: string;
  className?: string;
};

export function LocaleSwitcher({ locale, label, className = "" }: LocaleSwitcherProps) {
  return (
    <div
      dir="ltr"
      role="group"
      aria-label={label}
      className={`inline-flex items-center rounded-full border border-slate-200 bg-white/70 p-0.5 ${className}`}
    >
      {locales.map((code) => {
        const isActive = code === locale;

        return (
          <a
            key={code}
            href={`/${code}`}
            hrefLang={code}
            lang={code}
            aria-label={`${label}: ${localeNames[code]}`}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-2.5 py-1 text-[0.68rem] font-semibold transition-colors ${
              isActive
                ? "bg-mobil text-white shadow-[0_4px_10px_-6px_rgba(22,75,152,0.9)]"
                : "text-slate-500 hover:text-ink"
            }`}
          >
            {localeShortNames[code]}
          </a>
        );
      })}
    </div>
  );
}
