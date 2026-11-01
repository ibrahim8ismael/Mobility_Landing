import { ArrowUpRight, MessageCircle, PhoneCall, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n/dictionaries";

// Temporary Twilio WhatsApp Sandbox number for the V2 demo. Replace with Mobility's number.
const WHATSAPP_NUMBER = "14155238886";

export function Contact({ dict }: { dict: Dictionary["contact"] }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(dict.whatsappMessage)}`;

  return (
    <section id="contact" className="relative bg-white py-12 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-mobil-deep px-4 py-8 sm:rounded-[2.5rem] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
              maskImage: "radial-gradient(ellipse 70% 80% at 20% 0%, black, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 20% 0%, black, transparent 80%)",
            }}
          />
          <div className="pointer-events-none absolute -left-32 top-0 size-[460px] rounded-full bg-[radial-gradient(circle,rgba(52,120,214,0.35),transparent_65%)]" />
          <div className="pointer-events-none absolute -bottom-40 right-10 size-[380px] rounded-full bg-[radial-gradient(circle,rgba(227,27,52,0.14),transparent_65%)]" />

          <div className="relative grid min-w-0 gap-6 sm:gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <div className="lg:pt-2">
              <SectionHeading
                eyebrow={dict.eyebrow}
                tone="light"
                title={
                  <>
                    {dict.titlePrefix}{" "}
                    <span className="text-white/55">{dict.titleHighlight}</span>
                  </>
                }
              />

              {(dict.trustDetails || dict.trustVisit) && (
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs text-white/45">
                  {dict.trustDetails ? (
                    <span className="inline-flex items-center gap-2">
                      <ShieldCheck className="size-4" aria-hidden="true" />
                      {dict.trustDetails}
                    </span>
                  ) : null}
                  {dict.trustVisit ? (
                    <span className="inline-flex items-center gap-2">
                      <PhoneCall className="size-4" aria-hidden="true" />
                      {dict.trustVisit}
                    </span>
                  ) : null}
                </div>
              )}
            </div>

            <div className="min-w-0 w-full rounded-3xl bg-white p-4 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)] sm:p-7">
              <div className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white">
                  <MessageCircle className="size-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold tracking-[-0.015em] text-ink">
                    {dict.whatsappTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {dict.whatsappDescription}
                  </p>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1eae54] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#25D366]"
              >
                {dict.whatsappCta}
                <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
