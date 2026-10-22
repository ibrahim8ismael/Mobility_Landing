"use client";

import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Check,
  Droplet,
  FlaskConical,
  MapPin,
} from "lucide-react";
import { Button, Chip } from "@heroui/react";

import type { Dictionary } from "@/i18n/dictionaries";

const EASE = [0.22, 1, 0.36, 1] as const;

const panelIcons = [Droplet, Activity, MapPin];

function HeroVisual({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        className="relative overflow-hidden rounded-[2rem] bg-mobil-deep p-6 text-white shadow-[0_40px_80px_-40px_rgba(11,46,98,0.65)] sm:p-8"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(52,120,214,0.55),transparent_65%)]" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 size-[360px] rounded-full bg-[radial-gradient(circle,rgba(227,27,52,0.18),transparent_65%)]" />

        <svg
          aria-hidden="true"
          viewBox="0 0 400 400"
          className="spin-slow pointer-events-none absolute -right-20 -top-24 size-[430px] opacity-[0.18]"
        >
          <circle cx="200" cy="200" r="198" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="200" cy="200" r="152" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="200" cy="200" r="106" fill="none" stroke="white" strokeWidth="1" />
          <path d="M200 2v396M2 200h396" stroke="white" strokeWidth="0.6" />
        </svg>

        <div className="relative flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-white/60">
            <span className="size-1.5 rounded-full bg-mobil-red" />
            {dict.panel.topLeft}
          </span>
          <span className="hidden text-[0.62rem] font-medium uppercase tracking-[0.22em] text-white/40 sm:inline">
            {dict.panel.topRight}
          </span>
        </div>

        <div className="relative mt-14 sm:mt-20">
          <p className="font-display text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-[2.7rem]">
            {dict.panel.title}
            <br />
            <span className="text-white/50">{dict.panel.titleMuted}</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{dict.panel.body}</p>
        </div>

        <div className="relative mt-9 space-y-2.5">
          {dict.panel.rows.map((row, index) => {
            const Icon = panelIcons[index] ?? Droplet;

            return (
              <div
                key={row.title}
                className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3.5 backdrop-blur-sm"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 text-white">
                  <Icon className="size-4.5" strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-white">
                    {row.title}
                  </span>
                  <span className="mt-0.5 block truncate text-[0.7rem] text-white/50">
                    {row.detail}
                  </span>
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 text-white/30 rtl:-scale-x-100"
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>

        <div className="relative mt-8 flex items-end justify-between gap-6 border-t border-white/10 pt-5">
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/40">
              {dict.panel.bottomLabel}
            </p>
            <p className="mt-1.5 text-sm font-medium text-white/85">{dict.panel.bottomValue}</p>
          </div>
          <div className="flex h-9 items-end gap-1" aria-hidden="true">
            {[38, 58, 46, 72, 60, 88, 76].map((height, index) => (
              <span
                key={index}
                className={`w-1.5 rounded-full ${index === 5 ? "bg-mobil-red" : "bg-white/30"}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Hero({ dict }: { dict: Dictionary["hero"] }) {
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(75%_55%_at_72%_5%,#e9f0fa_0%,transparent_62%)]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11,46,98,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,46,98,0.055) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
          maskImage: "radial-gradient(ellipse 80% 65% at 55% 0%, black, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 65% at 55% 0%, black, transparent 78%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-14">
        <div className="max-w-2xl">
          <motion.div {...fadeUp(0.05)}>
            <Chip
              size="sm"
              variant="soft"
              className="border border-blue-100 bg-blue-50/80 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-mobil"
            >
              <span className="size-1.5 rounded-full bg-mobil-red" />
              <Chip.Label>{dict.eyebrow}</Chip.Label>
            </Chip>
          </motion.div>

          <motion.h1
            {...fadeUp(0.12)}
            className="mt-6 font-display text-[2.65rem] font-semibold leading-[0.98] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.1rem]"
          >
            {dict.titlePrefix}{" "}
            <span className="text-mobil">{dict.titleBrand}</span> {dict.titleSuffix}
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-7 font-display text-xl font-medium leading-snug tracking-[-0.01em] text-ink/80 sm:text-2xl"
          >
            {dict.lead}
          </motion.p>

          <motion.p
            {...fadeUp(0.26)}
            className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-[1.05rem]"
          >
            {dict.body}
          </motion.p>

          <motion.div {...fadeUp(0.34)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              onPress={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="h-12 rounded-full bg-mobil px-6 text-sm font-semibold text-white shadow-[0_18px_36px_-18px_rgba(22,75,152,0.95)] data-[hovered=true]:bg-mobil-deep"
            >
              {dict.ctaPrimary}
              <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onPress={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="h-12 rounded-full border-slate-300 bg-white/70 px-6 text-sm font-semibold text-ink data-[hovered=true]:border-mobil data-[hovered=true]:text-mobil"
            >
              {dict.ctaSecondary}
            </Button>
          </motion.div>

          <motion.ul {...fadeUp(0.42)} className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5">
            {dict.proof.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-slate-600">
                <span className="grid size-4.5 place-items-center rounded-full bg-blue-50 text-mobil">
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </motion.ul>

          <motion.p {...fadeUp(0.5)} className="mt-7 text-sm text-slate-500">
            {dict.supportLine}
          </motion.p>
        </div>

        <HeroVisual dict={dict} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mx-auto mt-16 flex w-full max-w-7xl items-center gap-3 px-5 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-slate-400 sm:mt-20 sm:px-8"
      >
        <FlaskConical className="size-3.5 text-mobil" aria-hidden="true" />
        {dict.note}
      </motion.div>
    </section>
  );
}
