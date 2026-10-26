"use client";

import { Cog, Droplet, Info, Truck } from "lucide-react";
import { Card } from "@heroui/react";
import Image from "next/image";

import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n/dictionaries";

type Product = {
  name: string;
  category: string;
  icon: typeof Droplet;
};

const industrialIcons = [Droplet, Cog];
const fleetIcons = [Truck, Truck, Truck];

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;

  return (
    <Card className="group relative gap-0 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-0 shadow-[0_2px_2px_rgba(11,27,48,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_28px_56px_-30px_rgba(11,46,98,0.45)]">
      <div className="pointer-events-none absolute -end-16 -top-16 size-44 rounded-full bg-[radial-gradient(circle,rgba(22,75,152,0.08),transparent_68%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f7fa]">
        <Image
          src="/mobil-dte-20-ultra-series-fs-square-md.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-4 mix-blend-multiply sm:p-5"
        />
      </div>

      <div className="relative p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="grid size-11 place-items-center rounded-2xl bg-blue-50 text-mobil transition-colors group-hover:bg-mobil group-hover:text-white">
            <Icon className="size-5" strokeWidth={1.9} aria-hidden="true" />
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {product.category}
          </span>
        </div>

        <Card.Header className="mt-6 gap-0">
          <Card.Title className="font-display text-[1.3rem] font-semibold leading-tight tracking-[-0.025em] text-ink">
            {product.name}
          </Card.Title>
        </Card.Header>

      </div>
    </Card>
  );
}

export function Products({ dict }: { dict: Dictionary["products"] }) {
  const products: Product[] = [
    ...dict.portfolios.industrial.map((product, index) => ({
      ...product,
      icon: industrialIcons[index] ?? Droplet,
    })),
    ...dict.portfolios.fleet.map((product, index) => ({
      ...product,
      icon: fleetIcons[index] ?? Truck,
    })),
  ];

  return (
    <section id="products" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div
          className={`grid items-end gap-8 ${
            dict.description ? "lg:grid-cols-[1.1fr_0.9fr]" : ""
          }`}
        >
          <Reveal>
            <SectionHeading
              eyebrow={dict.eyebrow}
              title={
                <>
                  {dict.titlePrefix} <span className="text-mobil">{dict.titleHighlight}</span>
                </>
              }
            />
          </Reveal>
          {dict.description ? (
            <Reveal delay={0.1}>
              <p className="max-w-md text-base leading-relaxed text-slate-600 lg:ms-auto">
                {dict.description}
              </p>
            </Reveal>
          ) : null}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-11 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </Reveal>

        {dict.note && dict.noteLink ? (
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-mist px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-start gap-2.5 text-sm text-slate-600">
                <Info className="mt-0.5 size-4 shrink-0 text-mobil" aria-hidden="true" />
                {dict.note}
              </p>
              <a
                href="#contact"
                className="shrink-0 text-sm font-semibold text-mobil hover:text-mobil-deep"
              >
                {dict.noteLink}
              </a>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
