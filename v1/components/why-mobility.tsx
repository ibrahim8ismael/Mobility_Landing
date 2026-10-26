import { ArrowUpRight, Handshake, Ship, Truck, Warehouse } from "lucide-react";
import { Card } from "@heroui/react";
import Image from "next/image";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n/dictionaries";

const icons = [Warehouse, Ship, Handshake, Truck];
const cardImages = [
  "/why-warehouse.jpg",
  "/why-alexandria-logistics.jpg",
  "/why-commercial-flexibility.jpg",
  "/why-multi-hub-dispatch-v2.jpg",
];

export function WhyMobility({ dict }: { dict: Dictionary["why"] }) {
  return (
    <section id="why" className="relative overflow-hidden bg-mist py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.05fr_0.95fr]">
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
            {dict.description ? (
              <p className="max-w-md text-base leading-relaxed text-slate-600 lg:ms-auto">
                {dict.description}
              </p>
            ) : null}
            {dict.link ? (
              <div className={`${dict.description ? "mt-5 " : ""}lg:text-end`}>
                <a
                  href="#services"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-mobil"
                >
                  {dict.link}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
                </a>
              </div>
            ) : null}
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.cards.map((card, index) => {
            const Icon = icons[index] ?? Warehouse;

            return (
              <StaggerItem key={card.title} className="h-full">
                <Card
                  className="group relative h-full gap-0 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-0 shadow-[0_2px_2px_rgba(11,27,48,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_48px_-28px_rgba(11,46,98,0.4)]"
                  variant="default"
                >
                  <div className="relative h-52 overflow-hidden bg-slate-100 sm:h-60">
                    <Image
                      src={cardImages[index]}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 280px, (min-width: 1024px) 22vw, (min-width: 640px) 44vw, calc(100vw - 2.5rem)"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-slate-950/10"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="grid size-11 place-items-center rounded-2xl bg-blue-50 text-mobil transition-colors group-hover:bg-mobil group-hover:text-white">
                      <Icon className="size-5" strokeWidth={1.9} aria-hidden="true" />
                    </span>

                    <Card.Header className="mt-5 gap-0">
                      <Card.Title className="font-display text-[1.05rem] font-semibold leading-snug tracking-[-0.01em] text-ink">
                        {card.title}
                      </Card.Title>
                    </Card.Header>

                    <Card.Content className="mt-3 flex-1">
                      <p className="text-sm leading-relaxed text-slate-600">{card.description}</p>
                    </Card.Content>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
