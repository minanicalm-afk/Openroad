import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Cloud, Code2, Compass, Globe, Layers, PenTool, Rocket, Smartphone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero, SectionHeading } from "@/components/Shared";
import { processSteps, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — Web Apps, Portfolios, SaaS & Mobile",
  description: "Explore Openroad's services: web applications, portfolio websites, SaaS products and mobile applications. Transparent scoped proposals, senior teams, weekly demos.",
};

const icons = [Globe, Layers, Cloud, Smartphone];
const processIcons = [Compass, PenTool, Code2, Rocket];
export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our services" title="Everything you need to" highlight="go further, faster." text="Four specialisms, one senior team. Every project includes strategy, design, development, launch and 30 days of post-launch support. Tell us where you're headed and we'll map the shortest route there — scoped transparently, estimated by phase, and agreed with you before a single line of code is written." dashes={false} />

      {/* Quick nav */}
      <div className="sticky top-[72px] z-30 border-b border-primary/8 bg-base/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] gap-2 overflow-x-auto px-5 py-3 sm:px-6">
          {services.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="shrink-0 rounded-full border border-primary/12 px-4 py-2 text-sm font-medium text-primary/65 transition hover:border-accent hover:text-accent">{s.shortTitle}</a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1440px] space-y-6 px-5 py-16 sm:px-6 lg:mt-14">
        {services.map((s, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={s.slug}>
              <article id={s.slug} className="card-hover group relative scroll-mt-36 overflow-hidden rounded-[28px] border border-primary/10 bg-elevated shadow-sm hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10">
                {/* Subtle service photo washed across the whole card */}
                <Image src={s.image} alt="" fill sizes="1200px" className="object-cover opacity-[0.09] transition duration-700 group-hover:scale-[1.03] group-hover:opacity-[0.15]" aria-hidden />
                <div className="absolute inset-0 bg-gradient-to-r from-elevated via-elevated/90 to-elevated/50" aria-hidden />
                <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-accent/12 blur-3xl" aria-hidden />
                <span className="pointer-events-none absolute -top-3 right-5 font-[family-name:var(--font-sora)] text-[110px] leading-none font-bold text-primary/[0.045] select-none" aria-hidden>{s.index}</span>
                <div className="relative grid lg:grid-cols-[1fr_380px]">
                  <div className="p-8 sm:p-11">
                    <div className="flex items-center gap-4">
                      <span className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.accentGradient} text-white shadow-lg shadow-accent/30 transition duration-500 group-hover:scale-105 group-hover:rotate-3`}><Icon className="h-7 w-7" /></span>
                      <span className="font-[family-name:var(--font-sora)] text-sm font-bold text-primary/25">SERVICE {s.index}</span>
                    </div>
                    <h2 className="mt-6 font-[family-name:var(--font-sora)] text-3xl font-bold text-primary sm:text-4xl">{s.title}</h2>
                    <p className="mt-2 text-lg font-medium text-accent">{s.tagline}</p>
                    <p className="mt-4 max-w-2xl leading-relaxed text-primary/60">{s.description}</p>
                    <h3 className="mt-8 text-xs font-bold tracking-[0.22em] text-primary/40 uppercase">What&apos;s included</h3>
                    <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex gap-2.5 text-sm text-primary/70"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {d}</li>
                      ))}
                    </ul>
                  </div>
                  <aside className="relative flex flex-col justify-between gap-8 border-t border-primary/8 bg-gradient-to-b from-accent/[0.07] via-elevated/85 to-elevated/85 p-8 backdrop-blur sm:p-10 lg:border-t-0 lg:border-l">
                    <div className="space-y-6">
                      <div className="relative -mt-1 h-40 overflow-hidden rounded-2xl shadow-lg">
                        <Image src={s.image} alt={`${s.title} at Openroad`} fill sizes="380px" className="object-cover transition duration-700 group-hover:scale-105" />
                        <div className={`absolute inset-0 bg-gradient-to-t ${s.accentGradient} opacity-25 mix-blend-multiply`} aria-hidden />
                        <span className="absolute bottom-3 left-3 rounded-full bg-[#06080f]/80 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">{s.title}</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-[0.2em] text-primary/40 uppercase">Built with</p>
                        <div className="mt-3 flex flex-wrap gap-2">{s.stack.map((t) => <span key={t} className="rounded-full border border-primary/12 px-3 py-1 text-xs font-medium text-primary/65">{t}</span>)}</div>
                      </div>
                    </div>
                    <Link href={`/contact?service=${s.slug}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-button px-6 py-3.5 font-bold text-onbutton transition hover:bg-buttondark">Start with {s.shortTitle} <ArrowRight className="h-4 w-4" /></Link>
                  </aside>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Process strip */}
      <section className="border-y border-primary/8 bg-surface">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-6">
          <SectionHeading eyebrow="The process" title={<>Same road, <span className="text-gradient">every project.</span></>} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p, i) => (
              <Reveal key={p.step} delay={i * 80}>
                <div className="card-hover h-full rounded-3xl border border-primary/10 bg-elevated p-7 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent2 text-white shadow-lg shadow-accent/25">{(() => { const Icon = processIcons[i]; return <Icon className="h-6 w-6" />; })()}</span>
                    <p className="font-[family-name:var(--font-sora)] text-3xl font-bold text-accent/25">{p.step}</p>
                  </div>
                  <h3 className="mt-3 font-[family-name:var(--font-sora)] text-lg font-bold text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary/55">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      <CtaBand />
    </>
  );
}
