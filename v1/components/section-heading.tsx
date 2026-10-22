import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const titleColor = tone === "dark" ? "text-ink" : "text-white";
  const bodyColor = tone === "dark" ? "text-slate-600" : "text-white/65";
  const lineColor = tone === "dark" ? "bg-mobil" : "bg-white/60";
  const eyebrowColor = tone === "dark" ? "text-mobil" : "text-white/70";

  return (
    <div className={`${isCenter ? "mx-auto text-center" : ""} ${className}`}>
      <div
        className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""} ${eyebrowColor}`}
      >
        <span className={`h-px w-8 ${lineColor}`} />
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em]">{eyebrow}</span>
      </div>
      <h2
        className={`mt-5 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-4xl lg:text-[2.9rem] ${titleColor} ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-xl text-base leading-relaxed sm:text-[1.05rem] ${bodyColor} ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
