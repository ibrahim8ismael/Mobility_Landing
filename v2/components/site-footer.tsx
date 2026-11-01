import { BrandMark } from "@/components/brand-mark";
import type { Dictionary } from "@/i18n/dictionaries";

type SiteFooterProps = {
  brand: Dictionary["brand"];
  dict: Dictionary["footer"];
};

export function SiteFooter({ brand, dict }: SiteFooterProps) {
  const columns = [
    {
      title: dict.columns.products,
      links: dict.productLinks.map((label) => ({ label, href: "#products" })),
    },
    {
      title: dict.columns.services,
      links: dict.serviceLinks.map((label) => ({ label, href: "#services" })),
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-mobil-dark text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr] lg:gap-16">
          <div>
            <BrandMark homeLabel={brand.homeLabel} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              {dict.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/35">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
