import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  href?: string;
  homeLabel: string;
};

export function BrandMark({
  className = "",
  href = "#top",
  homeLabel,
}: BrandMarkProps) {
  return (
    <a
      href={href}
      className={`group inline-flex w-fit items-center ${className}`}
      aria-label={homeLabel}
    >
      <Image
        src="/mobility-wordmark.png"
        alt=""
        aria-hidden="true"
        width={2144}
        height={733}
        sizes="(min-width: 640px) 164px, 140px"
        className="h-14 w-auto object-contain sm:h-16"
      />
    </a>
  );
}
