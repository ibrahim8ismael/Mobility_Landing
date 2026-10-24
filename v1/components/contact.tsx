"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  FlaskConical,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";

import { SectionHeading } from "@/components/section-heading";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

const fieldLabelClass = "text-xs font-semibold uppercase tracking-[0.1em] text-slate-500";

export function Contact({ locale, dict }: { locale: Locale; dict: Dictionary["contact"] }) {
  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("fullName") ?? "").trim();

    // Demo only: connect this handler to the CRM or email endpoint before launch.
    setPending(true);
    window.setTimeout(() => {
      setSubmittedName(name.split(" ")[0] || "");
      setPending(false);
      setSubmitted(true);
    }, 700);
  }

  function resetForm() {
    setSubmitted(false);
    setSubmittedName("");
  }

  const successTitle = submittedName
    ? dict.successTitle.replace("{name}", submittedName)
    : dict.successTitleNoName;

  return (
    <section id="contact" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-mobil-deep px-6 py-10 sm:rounded-[2.5rem] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
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

          <div className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
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

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs text-white/45">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="size-4" aria-hidden="true" />
                  {dict.trustDetails}
                </span>
                <span className="inline-flex items-center gap-2">
                  <PhoneCall className="size-4" aria-hidden="true" />
                  {dict.trustVisit}
                </span>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)] sm:p-7">
              <AnimatePresence mode="wait" initial={false}>
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="flex min-h-[430px] flex-col items-center justify-center px-3 py-10 text-center"
                  >
                    <span className="grid size-14 place-items-center rounded-full bg-blue-50 text-mobil">
                      <CheckCircle2 className="size-7" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
                      {successTitle}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
                      {dict.successBody}
                    </p>
                    <Button
                      variant="outline"
                      onPress={resetForm}
                      className="mt-7 h-10 rounded-full border-slate-300 px-5 text-sm font-semibold text-ink"
                    >
                      {dict.reset}
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-display text-lg font-semibold tracking-[-0.015em] text-ink">
                          {dict.formTitle}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">{dict.requiredNote}</p>
                      </div>
                      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-mobil">
                        <FlaskConical className="size-4" aria-hidden="true" />
                      </span>
                    </div>

                    <Form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <TextField
                          isRequired
                          name="fullName"
                          className="w-full"
                          validate={(value) => (value.trim() ? null : dict.errors.fullName)}
                        >
                          <Label className={fieldLabelClass}>{dict.labels.fullName}</Label>
                          <Input placeholder={dict.placeholders.fullName} autoComplete="name" />
                          <FieldError />
                        </TextField>

                        <TextField
                          isRequired
                          name="company"
                          className="w-full"
                          validate={(value) => (value.trim() ? null : dict.errors.company)}
                        >
                          <Label className={fieldLabelClass}>{dict.labels.company}</Label>
                          <Input
                            placeholder={dict.placeholders.company}
                            autoComplete="organization"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <TextField
                          name="email"
                          type="email"
                          className="w-full"
                          validate={(value) =>
                            !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                              ? null
                              : dict.errors.email
                          }
                        >
                          <Label className={fieldLabelClass}>{dict.labels.email}</Label>
                          <Input
                            dir="ltr"
                            placeholder={dict.placeholders.email}
                            autoComplete="email"
                          />
                          <FieldError />
                        </TextField>

                        <TextField
                          isRequired
                          name="phone"
                          type="tel"
                          className="w-full"
                          validate={(value) => (value.trim() ? null : dict.errors.phone)}
                        >
                          <Label className={fieldLabelClass}>{dict.labels.phone}</Label>
                          <Input
                            dir="ltr"
                            placeholder={dict.placeholders.phone}
                            autoComplete="tel"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <Select
                          isRequired
                          name="sector"
                          placeholder={dict.placeholders.sector}
                          className="w-full"
                          validate={(value) => (value ? null : dict.errors.sector)}
                        >
                          <Label className={fieldLabelClass}>{dict.labels.sector}</Label>
                          <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                          </Select.Trigger>
                          <Select.Popover>
                            <ListBox>
                              {dict.sectors.map((sector) => (
                                <ListBox.Item key={sector} id={sector} textValue={sector}>
                                  {sector}
                                  <ListBox.ItemIndicator />
                                </ListBox.Item>
                              ))}
                            </ListBox>
                          </Select.Popover>
                          <FieldError />
                        </Select>

                        <TextField name="location" className="w-full">
                          <Label className={fieldLabelClass}>{dict.labels.location}</Label>
                          <Input
                            placeholder={dict.placeholders.location}
                            autoComplete="address-level2"
                          />
                        </TextField>
                      </div>

                      <Select
                        name="interest"
                        placeholder={dict.placeholders.interest}
                        className="w-full"
                      >
                        <Label className={fieldLabelClass}>{dict.labels.interest}</Label>
                        <Select.Trigger>
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            {dict.interests.map((interest) => (
                              <ListBox.Item key={interest} id={interest} textValue={interest}>
                                {interest}
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            ))}
                          </ListBox>
                        </Select.Popover>
                      </Select>

                      <TextField name="message" className="w-full">
                        <Label className={fieldLabelClass}>{dict.labels.message}</Label>
                        <TextArea rows={3} placeholder={dict.placeholders.message} />
                        <Description className="text-xs text-slate-500">
                          {dict.messageNote}
                        </Description>
                      </TextField>

                      <Button
                        type="submit"
                        fullWidth
                        isPending={pending}
                        className="mt-1 h-12 rounded-full bg-mobil text-sm font-semibold text-white data-[hovered=true]:bg-mobil-deep"
                      >
                        {pending ? dict.pending : dict.submit}
                        {!pending ? (
                          <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
                        ) : null}
                      </Button>

                      <p className="text-center text-[0.68rem] leading-relaxed text-slate-500">
                        {dict.consent}
                      </p>
                    </Form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
