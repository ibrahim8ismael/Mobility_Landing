import { Droplet } from "lucide-react";

type BrandMarkProps = {
  className?: string;
  tone?: "dark" | "light";
  href?: string;
  tagline: string;
  homeLabel: string;
};

export function BrandMark({
  className = "",
  tone = "dark",
  href = "#top",
  tagline,
  homeLabel,
}: BrandMarkProps) {
  const titleColor = tone === "dark" ? "text-ink" : "text-white";
  const subColor = tone === "dark" ? "text-slate-500" : "text-white/55";

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label={homeLabel}
    >
      <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-mobil shadow-[0_8px_20px_-8px_rgba(22,75,152,0.7)]">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
        <Droplet className="relative size-5 text-white" strokeWidth={2.4} aria-hidden="true" />
        <span className="absolute end-1.5 top-1.5 size-1.5 rounded-full bg-mobil-red" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.15rem] font-bold tracking-tight ${titleColor}`}>
          Mobility
        </span>
        <span className={`mt-1 text-[0.6rem] font-medium uppercase tracking-[0.18em] ${subColor}`}>
          {tagline}
        </span>
      </span>
    </a>
  );
}
