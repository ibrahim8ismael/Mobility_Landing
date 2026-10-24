"use client";

import { ClipboardCheck, Filter, FlaskConical, TrendingDown } from "lucide-react";
import { Card, Chip } from "@heroui/react";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n/dictionaries";

const icons = [FlaskConical, ClipboardCheck, TrendingDown, Filter];

export function Services({ dict }: { dict: Dictionary["services"] }) {
  return (
    <section id="services" className="relative overflow-hidden bg-mobil-deep py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 75% 70% at 50% 0%, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 50% 0%, black, transparent 80%)",
        }}
      />
      <div className="pointer-events-none absolute -right-40 top-10 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(52,120,214,0.35),transparent_65%)]" />
      <div className="pointer-events-none absolute -bottom-52 -left-32 size-[480px] rounded-full bg-[radial-gradient(circle,rgba(227,27,52,0.12),transparent_65%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SectionHeading
              eyebrow={dict.eyebrow}
              tone="light"
              title={
                <>
                  {dict.titlePrefix} <span className="text-white/60">{dict.titleHighlight}</span>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-white/65 lg:ms-auto">
              {dict.description}
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
          {dict.items.map((service, index) => {
            const Icon = icons[index] ?? FlaskConical;

            return (
              <StaggerItem key={service.title} className="h-full">
                <Card
                  variant="transparent"
                  className="group relative h-full gap-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] sm:p-7"
                >
                  <span className="absolute end-6 top-6 font-display text-[0.68rem] font-semibold tracking-[0.16em] text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="grid size-11 place-items-center rounded-2xl bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-mobil-deep">
                    <Icon className="size-5" strokeWidth={1.9} aria-hidden="true" />
                  </span>

                  <Card.Header className="mt-6 gap-0">
                    <Card.Title className="font-display text-[1.2rem] font-semibold leading-snug tracking-[-0.015em] text-white">
                      {service.title}
                    </Card.Title>
                  </Card.Header>

                  <Card.Content className="mt-3 flex-1">
                    <p className="text-sm leading-relaxed text-white/60">{service.description}</p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <Chip
                          key={tag}
                          size="sm"
                          variant="soft"
                          className="border border-white/10 bg-white/5 px-2.5 text-[0.66rem] font-medium text-white/60"
                        >
                          <Chip.Label>{tag}</Chip.Label>
                        </Chip>
                      ))}
                    </div>
                  </Card.Content>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-8 text-xs leading-relaxed text-white/40">{dict.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
