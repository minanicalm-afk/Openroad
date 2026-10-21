import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Clock3, Cloud, Code2, Compass, Globe, KeyRound, Layers, LifeBuoy, MonitorPlay, PenTool, Plus, ReceiptText, Rocket, Smartphone, Wallet, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero, SectionHeading } from "@/components/Shared";
import { processSteps, projects, services } from "@/lib/data";
import { whatsappUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Services — Web Apps, Portfolios, SaaS & Mobile",
  description: "Explore Openroad's services: web applications, portfolio websites, SaaS products and mobile applications. Transparent scoped proposals, senior teams, weekly demos.",
};

const icons = [Globe, Layers, Cloud, Smartphone];
const processIcons = [Compass, PenTool, Code2, Rocket];

/* “Which road?” — plain-language starting points that route each visitor
   to the service that matches their actual situation */
const chooser = [
  { slug: "portfolio-websites", need: "“People need to find us — and trust us.”", text: "Your work is good but invisible, or your current site undersells it. Start with a portfolio website." },
  { slug: "web-applications", need: "“Our team runs on spreadsheets and WhatsApp.”", text: "Stock, sales, bookings or follow-ups live in chats and Excel files. A web application puts them in one system." },
  { slug: "saas-products", need: "“We want customers paying us monthly.”", text: "You have a product idea or a service to productise. A SaaS build gets you to paying subscribers." },
  { slug: "mobile-applications", need: "“Our users are on their phones, in the field.”", text: "Customers or staff need you on the move, offline or with notifications. That's a mobile app." },
];

/* One real project standing behind each service */
const proofTitles: Record<string, string> = {
  "web-applications": "Kalimoni Nails & Beauty",
  "portfolio-websites": "Ridgeform Construction",
  "saas-products": "RayMombasa",
  "mobile-applications": "FleetPay Go",
};

const guarantees = [
  { icon: ReceiptText, title: "Itemised estimate, by phase", text: "Before any code, you see exactly what each phase costs and agree it in writing. Scope changes are priced and agreed first — never a surprise on the final invoice." },
  { icon: MonitorPlay, title: "Weekly live demos", text: "Every week you click through real progress on a live staging link and tell us what to adjust. No black boxes, no big-reveal surprises at the end." },
  { icon: KeyRound, title: "You own 100% of the IP", text: "Code, designs, domain and accounts are set up in your name from day one. You're never locked in to us — most clients simply choose to stay." },
  { icon: LifeBuoy, title: "30 days of support after launch", text: "Every project includes a month of post-launch fixes and fine-tuning. After that, an optional care plan covers updates, monitoring and small improvements." },
];

const faqs = [
  { q: "How much will my project cost?", a: "Use the investment guides on each service as a starting point. Your actual figure comes as a transparent, itemised estimate broken down by phase — agreed together before we build. If scope needs to change mid-project, we price and agree it in writing first." },
  { q: "How long will it take?", a: "Portfolios typically run 2–5 weeks, web applications 4–12, mobile apps 5–14 and SaaS products 6–16. Your proposal includes a realistic timeline with milestones, and weekly live demos mean you always know where things stand." },
  { q: "I'm not sure which service I need.", a: "That's normal — start from your situation in “Which road is yours?” above, or just message us on WhatsApp and describe the problem. If a cheaper option solves it, we'll tell you, even if that means a smaller project with us." },
  { q: "Can you improve or rebuild what we already have?", a: "Yes. We start with a short audit of your current site or system, keep what works, and only rebuild what doesn't. You get the findings in plain language before committing to anything." },
  { q: "What do you need from us to start?", a: "One conversation about your goals, users and must-haves — plus any brand assets you already have. From there we return a scoped proposal with timeline and itemised costs. No homework beyond that." },
  { q: "Who owns the code and accounts afterwards?", a: "You do — 100% of the IP, from day one. Code, designs, domains and hosting accounts are in your name, so your product is truly yours." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our services" title="Everything you need to" highlight="go further, faster." text="Four specialisms, one senior team. Every project includes strategy, design, development, launch and 30 days of post-launch support. Tell us where you're headed and we'll map the shortest route there — scoped transparently, estimated by phase, and agreed with you before a single line of code is written." dashes={false} media="orbit" />

      {/* Quick nav */}
      <div className="sticky top-[72px] z-30 border-b border-primary/8 bg-base/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] gap-2 overflow-x-auto px-5 py-3 sm:px-6">
          {services.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="shrink-0 rounded-full border border-primary/12 px-4 py-2 text-sm font-medium text-primary/65 transition hover:border-accent hover:text-accent">{s.shortTitle}</a>
          ))}
        </div>
      </div>

      {/* Which road? — help the visitor choose before they read details */}
      <section className="mx-auto max-w-[1440px] px-5 pt-16 sm:px-6">
        <SectionHeading eyebrow="Start here" title={<>Which road <span className="text-gradient">is yours?</span></>} text="Most people don't arrive knowing which service they need — they arrive with a situation. Find yours:" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {chooser.map((c, i) => (
            <Reveal key={c.slug} delay={i * 70} className="h-full">
              <a href={`#${c.slug}`} className="card-hover group flex h-full flex-col rounded-[26px] border border-primary/10 bg-elevated p-6 shadow-sm hover:border-accent/40">
                <p className="font-[family-name:var(--font-sora)] text-[17px] leading-snug font-bold text-primary">{c.need}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-primary/55">{c.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                  {services.find((s) => s.slug === c.slug)?.title} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Service decision cards */}
      <div className="mx-auto mt-10 max-w-[1440px] space-y-6 px-5 py-16 sm:px-6 lg:mt-14">
        {services.map((s, i) => {
          const Icon = icons[i];
          const proof = projects.find((p) => p.title === proofTitles[s.slug]);
          return (
            <Reveal key={s.slug}>
              <article id={s.slug} className="card-hover group relative scroll-mt-36 overflow-hidden rounded-[28px] border border-primary/10 bg-elevated shadow-sm hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10">
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
                    <p className="mt-3 max-w-2xl font-[family-name:var(--font-sora)] text-lg leading-snug font-semibold text-primary/85">{s.outcome}</p>
                    <p className="mt-3 max-w-2xl leading-relaxed text-primary/60">{s.description}</p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      <div>
                        <h3 className="text-xs font-bold tracking-[0.22em] text-primary/40 uppercase">Best for</h3>
                        <ul className="mt-3.5 space-y-2.5">
                          {s.bestFor.map((b) => (
                            <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-primary/70"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {b}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold tracking-[0.22em] text-primary/40 uppercase">Probably not for you if…</h3>
                        <p className="mt-3.5 flex gap-2.5 text-sm leading-relaxed text-primary/55"><X className="mt-0.5 h-4 w-4 shrink-0 text-primary/35" /> {s.notFor}</p>
                      </div>
                    </div>

                    <h3 className="mt-8 text-xs font-bold tracking-[0.22em] text-primary/40 uppercase">What&apos;s included</h3>
                    <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex gap-2.5 text-sm text-primary/70"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {d}</li>
                      ))}
                    </ul>
                  </div>

                  <aside className="relative flex flex-col gap-6 border-t border-primary/8 bg-gradient-to-b from-accent/[0.07] via-elevated/85 to-elevated/85 p-8 backdrop-blur sm:p-10 lg:border-t-0 lg:border-l">
                    <div className="relative -mt-1 h-40 overflow-hidden rounded-2xl shadow-lg">
                      <Image src={s.image} alt={`${s.title} at Openroad`} fill sizes="380px" className="object-cover transition duration-700 group-hover:scale-105" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${s.accentGradient} opacity-25 mix-blend-multiply`} aria-hidden />
                      <span className="absolute bottom-3 left-3 rounded-full bg-[#06080f]/80 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">{s.title}</span>
                    </div>

                    <dl className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-primary/10 bg-base/60 px-4 py-3.5">
                        <dt className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.16em] text-primary/40 uppercase"><Clock3 className="h-3.5 w-3.5 text-accent" /> Timeline</dt>
                        <dd className="mt-1.5 font-[family-name:var(--font-sora)] text-[15px] font-bold text-primary">{s.timeline}</dd>
                      </div>
                      <div className="rounded-2xl border border-primary/10 bg-base/60 px-4 py-3.5">
                        <dt className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.16em] text-primary/40 uppercase"><Wallet className="h-3.5 w-3.5 text-accent" /> Investment</dt>
                        <dd className="mt-1.5 font-[family-name:var(--font-sora)] text-[15px] font-bold text-primary">{s.investment}</dd>
                      </div>
                    </dl>

                    <div>
                      <p className="text-xs font-bold tracking-[0.2em] text-primary/40 uppercase">Built with</p>
                      <div className="mt-3 flex flex-wrap gap-2">{s.stack.map((t) => <span key={t} className="rounded-full border border-primary/12 px-3 py-1 text-xs font-medium text-primary/65">{t}</span>)}</div>
                    </div>

                    {proof && (
                      <div className="rounded-2xl border border-primary/10 bg-base/60 p-4">
                        <p className="text-xs font-bold tracking-[0.2em] text-primary/40 uppercase">Recent work</p>
                        <div className="mt-3 flex items-center gap-3.5">
                          <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                            <Image src={proof.image} alt={proof.title} fill sizes="56px" className="object-cover" />
                          </span>
                          <span className="min-w-0">
                            <span className="block truncate font-[family-name:var(--font-sora)] text-[15px] font-bold text-primary">{proof.title}</span>
                            <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-primary/50">{proof.result}</span>
                          </span>
                        </div>
                        {proof.url ? (
                          <a href={proof.url} target="_blank" rel="noreferrer" className="mt-3.5 inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:underline">Visit live site <ArrowUpRight className="h-4 w-4" /></a>
                        ) : (
                          <Link href="/projects" className="mt-3.5 inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:underline">See it in the gallery <ArrowRight className="h-4 w-4" /></Link>
                        )}
                      </div>
                    )}

                    <div className="mt-auto space-y-3">
                      <Link href={`/contact?service=${s.slug}`} className="flex items-center justify-center gap-2 rounded-full bg-button px-6 py-3.5 font-bold text-onbutton transition hover:bg-buttondark">Start with {s.shortTitle} <ArrowRight className="h-4 w-4" /></Link>
                      <a href={whatsappUrl(`Hi Openroad, I'm interested in a ${s.title} project. I'd like to tell you about what I'm building and explore how we can work together.`)} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full border border-[#25D366]/50 px-6 py-3.5 font-semibold text-primary transition hover:bg-[#25D366]/10">
                        <FaWhatsapp className="h-5 w-5 text-[#25D366]" /> Ask on WhatsApp
                      </a>
                      <p className="text-center text-xs leading-relaxed text-primary/40">Investment is a guide — your itemised estimate is agreed by phase before we build.</p>
                    </div>
                  </aside>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* How every engagement works — the risk-removers */}
      <section className="border-y border-primary/8 bg-surface">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-6">
          <SectionHeading eyebrow="Working with us" title={<>Clear terms, <span className="text-gradient">before you commit.</span></>} text="Whichever service you choose, every engagement runs on the same four commitments:" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((g, i) => (
              <Reveal key={g.title} delay={i * 80}>
                <div className="card-hover h-full rounded-3xl border border-primary/10 bg-elevated p-7 shadow-sm">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent2 text-white shadow-lg shadow-accent/25"><g.icon className="h-6 w-6" /></span>
                  <h3 className="mt-5 font-[family-name:var(--font-sora)] text-lg font-bold text-primary">{g.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary/55">{g.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14">
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
        </div>
      </section>

      {/* Service FAQs */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-6">
        <SectionHeading eyebrow="Before you decide" title={<>Questions, <span className="text-gradient">answered straight.</span></>} />
        <div className="mx-auto mt-12 max-w-5xl space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <details className="group rounded-[22px] border border-primary/10 bg-elevated px-6 py-5 shadow-md shadow-primary/5 transition open:border-accent/35 sm:px-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-[family-name:var(--font-sora)] font-bold text-primary [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent/10 text-accent transition duration-300 group-open:rotate-45 group-open:bg-accent group-open:text-white">
                    <Plus className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </summary>
                <p className="mt-3.5 leading-relaxed text-primary/60">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
