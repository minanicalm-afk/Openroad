import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check, Mail, MessagesSquare } from "lucide-react";
import Reveal from "./Reveal";
import { heroImage } from "@/lib/data";

export function PageHero({ eyebrow, title, highlight, text, children, dashes = true }: { eyebrow: string; title: string; highlight: string; text: string; children?: ReactNode; dashes?: boolean }) {
  return (
    <section className="relative overflow-hidden pt-[72px]">
      {/* Same open-road hero image as the homepage, on every page — see the
          note above `heroImage` in src/lib/data.ts for why it was chosen. */}
      <Image src={heroImage} alt="" fill sizes="100vw" className="object-cover object-center saturate-[1.2]" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-base/78 via-base/40 to-base/10" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-base/45 via-transparent to-base" aria-hidden />
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-accent/12 blur-[120px]" aria-hidden />
      {/* Same min-height + centering as the homepage hero, so every page
          opens with an identical hero height */}
      <div className="relative mx-auto flex min-h-[560px] max-w-[1440px] flex-col justify-center px-5 py-20 sm:min-h-[648px] sm:px-6">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/8 px-4 py-1.5 text-xs font-bold tracking-[0.22em] text-accent uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {eyebrow}
          </p>
          <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-sora)] text-4xl leading-[1.05] font-bold tracking-tight text-primary sm:text-6xl">
            {title} <span className="text-gradient">{highlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary/60">{text}</p>
          {children}
        </Reveal>
      </div>
      {dashes && <div className="road-dashes absolute inset-x-0 bottom-0 h-[3px] w-full opacity-60" aria-hidden />}
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text, align = "center" }: { eyebrow: string; title: ReactNode; text?: string; align?: "center" | "left" }) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`flex items-center gap-2 text-xs font-bold tracking-[0.24em] text-accent uppercase ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-accent" /> {eyebrow} {align === "center" && <span className="h-px w-8 bg-accent" />}
      </p>
      <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-bold tracking-tight text-primary sm:text-[42px] sm:leading-[1.1]">{title}</h2>
      {text && <p className="mt-4 leading-relaxed text-primary/55">{text}</p>}
    </Reveal>
  );
}

const ctaPoints = ["Reply within 1 business day", "Transparent, itemised estimate", "No obligation, ever"];

export function CtaBand() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 pt-16 pb-24 sm:px-6 sm:pt-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] border border-primary/10 bg-surface shadow-xl shadow-primary/5">
          {/* Theme-token decoration: gradient hairline, grid + soft accent glow */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent2 to-accent" aria-hidden />
          <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
          <div className="pointer-events-none absolute -top-32 right-[8%] h-72 w-72 rounded-full bg-accent/15 blur-[100px]" aria-hidden />
          <div className="pointer-events-none absolute -bottom-36 left-[-60px] h-72 w-72 rounded-full bg-accent2/12 blur-[100px]" aria-hidden />

          <div className="relative grid items-center gap-10 px-7 py-12 sm:px-11 sm:py-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/8 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
                <span className="h-1.5 w-1.5 animate-glow rounded-full bg-accent2" /> Start a project
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-sora)] text-3xl leading-tight font-bold tracking-tight text-primary sm:text-[40px]">
                Have an idea? Let&apos;s put it <span className="text-gradient">on the road.</span>
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-primary/60">
                Tell us where you want to go. We&apos;ll reply within one business day with honest next steps — no pressure, no jargon.
              </p>
              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
                {ctaPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm font-semibold text-primary/70">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/12 text-accent"><Check className="h-3 w-3" strokeWidth={3} /></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action card — the buttons live here, like a mini conversation starter */}
            <div className="relative rounded-[26px] border border-primary/10 bg-elevated p-6 shadow-2xl shadow-primary/10 sm:p-7 lg:-rotate-1 lg:transition-transform lg:duration-500 lg:hover:rotate-0">
              <div className="flex items-center gap-3.5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent2 text-white shadow-lg shadow-accent/25">
                  <MessagesSquare className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-[family-name:var(--font-sora)] font-bold text-primary">Start the conversation</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs font-semibold text-primary/50">
                    <span className="h-1.5 w-1.5 animate-glow rounded-full bg-accent2" /> Typically replies within 24 hours
                  </p>
                </div>
              </div>
              <Link href="/contact" className="mt-6 flex items-center justify-center gap-2 rounded-full bg-button px-7 py-3.5 font-bold text-onbutton shadow-xl shadow-button/25 transition hover:bg-buttondark">
                Reach us <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="mailto:hello@openroadsoftware.com" className="mt-3 flex items-center justify-center gap-2 rounded-full border border-primary/15 px-7 py-3.5 font-semibold text-primary transition hover:border-primary/40 hover:bg-primary/5">
                <Mail className="h-4 w-4 text-accent" /> hello@openroadsoftware.com
              </a>
              <p className="mt-5 text-center text-sm text-primary/50">
                Not ready yet?{" "}
                <Link href="/projects" className="inline-flex items-center gap-1 font-bold text-accent hover:underline">
                  See our work <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
