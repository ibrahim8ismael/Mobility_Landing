"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Cog, Droplet, Info, Truck } from "lucide-react";
import { Card, Chip, Tabs } from "@heroui/react";

import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n/dictionaries";

type Product = {
  name: string;
  category: string;
  description: string;
  tags: string[];
  icon: typeof Droplet;
};

const industrialIcons = [Droplet, Cog];
const fleetIcons = [Truck, Truck, Truck];

function ProductCard({ product, cta }: { product: Product; cta: string }) {
  const Icon = product.icon;

  return (
    <Card className="group relative h-full gap-0 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_2px_rgba(11,27,48,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_28px_56px_-30px_rgba(11,46,98,0.45)] sm:p-7">
      <div className="pointer-events-none absolute -end-16 -top-16 size-44 rounded-full bg-[radial-gradient(circle,rgba(22,75,152,0.08),transparent_68%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-4">
        <span className="grid size-11 place-items-center rounded-2xl bg-blue-50 text-mobil transition-colors group-hover:bg-mobil group-hover:text-white">
          <Icon className="size-5" strokeWidth={1.9} aria-hidden="true" />
        </span>
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
          {product.category}
        </span>
      </div>

      <Card.Header className="mt-6 gap-0">
        <Card.Title className="font-display text-[1.3rem] font-semibold leading-tight tracking-[-0.025em] text-ink">
          {product.name}
        </Card.Title>
      </Card.Header>

      <Card.Content className="mt-3 flex-1">
        <p className="text-sm leading-relaxed text-slate-600">{product.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <Chip
              key={tag}
              size="sm"
              variant="soft"
              className="border border-slate-200 bg-mist px-2.5 text-[0.66rem] font-medium text-slate-600"
            >
              <Chip.Label>{tag}</Chip.Label>
            </Chip>
          ))}
        </div>
      </Card.Content>

      <Card.Footer className="mt-6 border-t border-slate-100 pt-4">
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-mobil transition-colors hover:text-mobil-deep"
        >
          {cta}
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
        </a>
      </Card.Footer>
    </Card>
  );
}

export function Products({ dict }: { dict: Dictionary["products"] }) {
  const portfolios: Record<"industrial" | "fleet", Product[]> = {
    industrial: dict.portfolios.industrial.map((product, index) => ({
      ...product,
      icon: industrialIcons[index] ?? Droplet,
    })),
    fleet: dict.portfolios.fleet.map((product, index) => ({
      ...product,
      icon: fleetIcons[index] ?? Truck,
    })),
  };

  return (
    <section id="products" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
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
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-slate-600 lg:ms-auto">
              {dict.description}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <Tabs defaultSelectedKey="industrial" className="mt-11">
            <Tabs.ListContainer className="w-fit rounded-full border border-slate-200 bg-mist p-1">
              <Tabs.List aria-label={dict.tabsAria} className="gap-1 p-0">
                <Tabs.Tab
                  id="industrial"
                  className="h-9 whitespace-nowrap rounded-full px-5 text-sm font-semibold text-slate-500 data-[selected=true]:text-white"
                >
                  {dict.tabs.industrial}
                  <Tabs.Indicator className="rounded-full bg-mobil shadow-[0_8px_18px_-10px_rgba(22,75,152,0.9)]" />
                </Tabs.Tab>
                <Tabs.Tab
                  id="fleet"
                  className="h-9 whitespace-nowrap rounded-full px-5 text-sm font-semibold text-slate-500 data-[selected=true]:text-white"
                >
                  {dict.tabs.fleet}
                  <Tabs.Indicator className="rounded-full bg-mobil shadow-[0_8px_18px_-10px_rgba(22,75,152,0.9)]" />
                </Tabs.Tab>
              </Tabs.List>
            </Tabs.ListContainer>

            {(["industrial", "fleet"] as const).map((key) => (
              <Tabs.Panel key={key} id={key} className="pt-7">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className={`grid gap-4 ${
                    portfolios[key].length === 2 ? "md:grid-cols-2 xl:grid-cols-2" : "md:grid-cols-3"
                  }`}
                >
                  {portfolios[key].map((product) => (
                    <ProductCard key={product.name} product={product} cta={dict.cta} />
                  ))}
                </motion.div>
              </Tabs.Panel>
            ))}
          </Tabs>
        </Reveal>

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
      </div>
    </section>
  );
}
