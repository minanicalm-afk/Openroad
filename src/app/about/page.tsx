import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Gem, Handshake, KeyRound, LifeBuoy, Lightbulb, Linkedin, Mail, Map, MessagesSquare, MonitorPlay, Quote, ReceiptText, Route, UserCheck } from "lucide-react";
import LiveCanvas from "@/components/LiveCanvas";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/Shared";
import { services, stats } from "@/lib/data";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "About — The Openroad Story",
  description: "Meet Openroad Software Solution: a senior, remote-first software studio building web apps, SaaS products, portfolios and mobile apps worldwide.",
};

const values = [
  { icon: Compass, title: "Direction before code", text: "We start with where you're going — your users, your market, your numbers — then choose the shortest, safest route to get there." },
  { icon: Gem, title: "Craft is non-negotiable", text: "Exquisite isn't a style, it's a standard. If it ships with our name on it, it has to be something we're proud to show." },
  { icon: Handshake, title: "Honest, always", text: "Transparent estimates, plain language, weekly demos. If something isn't worth building, we'll tell you — and suggest what is." },
  { icon: Route, title: "Built for the long road", text: "Clean code, mainstream technology, full IP ownership. What we build today should still serve you in five years." },
];

{/* Replace the name, photo and bio below with the real founder's details */}
const founder = {
  name: "Calm Minani",
  role: "Founder & CEO",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1600&auto=format&fit=crop",
  bio: [
    "I kept seeing the same problem: good ideas dying in translation — passed between sales teams, account managers and developers who never spoke to the client. Projects dragged, budgets bloated, and businesses ended up with software that solved the wrong problem.",
    "So I founded Openroad in 2021 to meet that need properly: a small, senior team where you talk directly to the people building your product. We start with the problem you're solving, agree a transparent plan before any code, then show you real progress every week — software that meets the actual need, not just the brief.",
  ],
  quote: "When you hire Openroad, you get my number — not a ticket queue.",
};

const coFounder = {
  name: "Peter Rague",
  role: "Co-Founder",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
  bio: [
    "Peter Rague is a Co-Founder of Openroad Software Solution, working alongside Calm Minani to help lead the studio and the work it delivers.",
    "Together, the founders keep Openroad deliberately small and senior: clear direction, direct communication and personal accountability on every project, from the first conversation through launch and beyond.",
  ],
  focus: ["Studio direction", "Client partnership", "Personal accountability"],
};

const whyUs = [
  { icon: UserCheck, title: "Senior team only", text: "No hand-offs and no juniors learning on your budget. The people you meet are the people who design and build your product." },
  { icon: MessagesSquare, title: "Direct conversation", text: "You talk straight to the builders — plain language, honest answers, and one point of contact from first call to launch." },
  { icon: ReceiptText, title: "Transparent pricing", text: "A clear, itemised estimate broken down by phase, agreed together before we build. Any change in scope is agreed in writing first." },
  { icon: MonitorPlay, title: "Weekly live demos", text: "Every week you click through real progress on a live staging link — no black boxes, no \"big reveal\" surprises at the end." },
  { icon: KeyRound, title: "You own 100% of the IP", text: "Code, designs and accounts are yours from day one. No lock-in, no hostage situations — your product is truly your product." },
  { icon: LifeBuoy, title: "Support after launch", text: "Every project includes 30 days of post-launch support, and most clients stay with us on a care plan long after that." },
];

const team = [
  { name: "Calm Minani", role: "Founder & Lead Engineer", initials: "CM", bio: "Full-stack architect who has shipped products across fintech, logistics and education. Sets the technical direction on every project." },
  { name: "Amara Diallo", role: "Design Lead", initials: "AD", bio: "Turns complex workflows into interfaces that feel effortless. Obsessed with typography, motion and the last 4 pixels." },
  { name: "Jonas Weber", role: "Product Engineer", initials: "JW", bio: "SaaS and mobile specialist. Builds the billing, onboarding and analytics engines that turn products into businesses." },
  { name: "Priya Nair", role: "Client Partner", initials: "PN", bio: "Your single point of contact. Keeps every project on schedule, on budget and communicated in plain, friendly language." },
];

const milestones = [
  { year: "2021", title: "The road begins", text: "Openroad is founded with a simple belief: small, senior teams build better software than big, layered agencies." },
  { year: "2022", title: "First 15 launches", text: "Portfolios and web apps for founders across 4 countries — every single client arrives by referral." },
  { year: "2023", title: "SaaS & mobile practice", text: "We launch our first subscription SaaS products and React Native apps, growing into full product partnerships." },
  { year: "2025", title: "48+ products shipped", text: "Logistics platforms, learning SaaS, payment apps and more — with a 98% client-return rate we're quietly proud of." },
  { year: "2026", title: "Where to next?", text: "Maybe your project is the next milestone on this road. We'd love to hear where you're headed." },
];

export default function AboutPage() {
  return (
    <>

      {/* Founder + Co-founder — one leadership section: overlapping
          portrait treatments on the left, each profile on the right */}
      <section className="relative overflow-hidden pt-[72px]" aria-labelledby="founders-heading">
        {/* Subtle Live treatment (same as Reach Us): a real-time particle
            network drifting quietly behind the leadership hero */}
        <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black_70%,transparent_99%)]" aria-hidden>
          <LiveCanvas />
        </div>
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="pointer-events-none absolute top-[-140px] right-[-100px] h-[440px] w-[440px] rounded-full bg-accent/12 blur-[120px]" aria-hidden />
        <div className="pointer-events-none absolute bottom-[-160px] left-[32%] h-[380px] w-[380px] rounded-full bg-accent2/10 blur-[120px]" aria-hidden />

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-14 px-5 pt-12 pb-20 sm:px-6 lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:gap-10 lg:pt-16 lg:pb-24">
          {/* Overlapping image composition */}
          <Reveal className="relative mx-auto w-full max-w-[620px]">
            <div className="relative h-[500px] sm:h-[580px] lg:h-[680px]" aria-label="Founder and co-founder portraits">
              {/* Founder portrait */}
              <div className="absolute top-0 left-0 h-[74%] w-[76%] overflow-hidden rounded-[34px] border border-primary/10 bg-elevated shadow-2xl shadow-primary/20">
                <Image src={founder.image} alt={`${founder.name}, ${founder.role} of Openroad Software Solution`} fill priority sizes="(min-width:1024px) 44vw, 76vw" className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/72 via-transparent to-transparent" aria-hidden />
                <div className="absolute top-5 left-5 max-w-[calc(100%-2.5rem)] rounded-2xl border border-white/25 bg-black/25 px-4 py-3 shadow-2xl backdrop-blur-md sm:px-5 sm:py-4">
                  <p className="font-[family-name:var(--font-sora)] text-base leading-tight font-bold text-white sm:text-lg">{founder.name}</p>
                  <p className="mt-1 text-[10px] font-bold tracking-[0.18em] text-white/70 uppercase sm:text-[11px] sm:tracking-[0.2em]">{founder.role} · Est. 2021</p>
                </div>
              </div>

              {/* Co-founder portrait, layered over the founder image */}
              <div className="absolute right-0 bottom-0 z-[5] h-[56%] w-[64%] overflow-hidden rounded-[34px] border border-accent/25 bg-elevated shadow-2xl shadow-accent/15 ring-8 ring-base/60">
                <Image src={coFounder.image} alt={`${coFounder.name}, ${coFounder.role} of Openroad Software Solution`} fill sizes="(min-width:1024px) 30vw, 64vw" className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/72 via-transparent to-transparent" aria-hidden />
                <div className="absolute bottom-5 left-5 max-w-[calc(100%-2.5rem)] rounded-2xl border border-white/25 bg-black/25 px-4 py-3 shadow-2xl backdrop-blur-md sm:px-5 sm:py-4">
                  <p className="font-[family-name:var(--font-sora)] text-base leading-tight font-bold text-white sm:text-lg">{coFounder.name}</p>
                  <p className="mt-1 text-[10px] font-bold tracking-[0.18em] text-white/70 uppercase sm:text-[11px] sm:tracking-[0.2em]">{coFounder.role}</p>
                </div>
              </div>

              {/* Joining badge where the two portraits overlap */}
              <div className="absolute top-[44%] left-[36%] z-10 hidden -translate-x-1/2 -translate-y-1/2 sm:block" aria-hidden>
                <span className="grid h-16 w-16 place-items-center rounded-full border border-white/30 bg-gradient-to-br from-accent to-accent2 font-[family-name:var(--font-sora)] text-sm font-bold text-white shadow-2xl shadow-accent/30">
                  CM + PR
                </span>
              </div>
            </div>
          </Reveal>

          {/* Founder and co-founder profiles */}
          <div className="relative z-10 min-w-0">
            <Reveal className="max-w-3xl">
              <h1 id="founders-heading" className="font-[family-name:var(--font-sora)] text-[42px] leading-[1.05] font-bold tracking-tight text-primary sm:text-6xl">
                The people behind <span className="text-gradient">the wheel.</span>
              </h1>

              <div className="mt-8 divide-y divide-primary/10">
                <article className="pb-8">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-primary">{founder.name}</h2>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-accent uppercase">{founder.role}</span>
                  </div>
                  <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-primary/60">
                    {founder.bio.map((paragraph) => (<p key={paragraph.slice(0, 24)}>{paragraph}</p>))}
                  </div>
                  <figure className="mt-5 border-l-2 border-accent pl-5">
                    <Quote className="h-5 w-5 text-accent" aria-hidden />
                    <blockquote className="mt-2 leading-relaxed font-medium text-primary/80 italic">“{founder.quote}”</blockquote>
                  </figure>
                </article>

                <article className="pt-8">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-primary">{coFounder.name}</h2>
                    <span className="rounded-full bg-accent2/10 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-accent uppercase">{coFounder.role}</span>
                  </div>
                  <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-primary/60">
                    {coFounder.bio.map((paragraph) => (<p key={paragraph.slice(0, 24)}>{paragraph}</p>))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {coFounder.focus.map((item) => (
                      <span key={item} className="rounded-full border border-accent/25 bg-accent/8 px-4 py-1.5 text-[13px] font-semibold text-accent">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-button px-7 py-3.5 font-bold text-onbutton shadow-xl shadow-button/25 transition hover:bg-buttondark">
                  Talk to our team <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="Openroad leadership on LinkedIn" className="grid h-12 w-12 place-items-center rounded-full border border-primary/15 text-primary transition hover:border-primary/40 hover:bg-primary/5"><Linkedin className="h-5 w-5" /></a>
                <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email Openroad" className="grid h-12 w-12 place-items-center rounded-full border border-primary/15 text-primary transition hover:border-primary/40 hover:bg-primary/5"><Mail className="h-5 w-5" /></a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-44 bg-gradient-to-t from-base via-base/65 to-transparent" aria-hidden />
      </section>

      {/* Bridge — a stats bar sitting just below the hero with clear
          breathing room, easing the eye from founder to story */}
      <div className="relative z-20 mx-auto max-w-[1440px] px-5 sm:px-6">
        <Reveal>
          <div className="relative mt-12 lg:mt-16">
            <div className="absolute inset-x-8 top-0 z-10 h-[3px] rounded-full bg-gradient-to-r from-accent to-accent2" aria-hidden />
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[26px] border border-primary/10 bg-primary/10 shadow-2xl shadow-primary/10 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-elevated px-6 py-6 sm:px-8">
                  <dd className="text-gradient font-[family-name:var(--font-sora)] text-[32px] leading-none font-bold">{s.value}</dd>
                  <dt className="mt-2 text-[13px] font-medium text-primary/55">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>

      {/* Story */}
      <section className="mx-auto max-w-[1440px] px-5 pt-16 pb-24 sm:px-6 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              {/* Offset outline frame peeking from behind the photo */}
              <div className="absolute -top-4 -right-4 h-full w-full rounded-[28px] border border-accent/30" aria-hidden />
              <div className="relative overflow-hidden rounded-[28px] border border-primary/10 shadow-2xl shadow-primary/15">
                <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop" alt="The Openroad team collaborating" width={1200} height={900} className="h-[420px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080f]/70 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-[13px] font-semibold text-white backdrop-blur-md"><Map className="h-4 w-4 text-accent2" /> Remote-first · Working worldwide</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="flex items-center gap-2 text-xs font-bold tracking-[0.24em] text-accent uppercase"><span className="h-px w-8 bg-accent" /> Our story</p>
            <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-bold tracking-tight text-primary sm:text-4xl">Why “Openroad”?</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-primary/60">
              <p>Because that&apos;s what great software should feel like. Not a maze of dead ends and toll booths — an open road: clear direction, room to accelerate, and a view worth enjoying along the way.</p>
              <p>We started Openroad after years inside agencies where projects disappeared into layers of account managers and hand-offs. We wanted the opposite: you talk directly to the people designing and building your product, every week, on a live demo you can click.</p>
              <p>Today we partner with founders, professionals and growing companies across nine countries — building the web applications, SaaS products, mobile apps and portfolio websites that carry their businesses forward.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {services.map((s) => (
                <span key={s.slug} className="rounded-full border border-accent/25 bg-accent/8 px-4 py-1.5 text-[13px] font-semibold text-accent">{s.title}</span>
              ))}
            </div>
            <Link href="/services" className="group mt-7 inline-flex items-center gap-2 font-[family-name:var(--font-sora)] text-[15px] font-bold text-primary transition hover:text-accent">
              See what we build <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-primary/8 bg-surface">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-6">
          <SectionHeading eyebrow="Why choose us" title={<>Why teams choose <span className="text-gradient">the Openroad way.</span></>} text="There are plenty of studios who can write code. Here's what clients tell us actually made the difference." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 80}>
                <div className="card-hover group h-full rounded-[26px] border border-primary/8 bg-elevated p-7 hover:border-accent/40">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent2 text-white shadow-lg shadow-accent/25 transition duration-500 group-hover:scale-110 group-hover:-rotate-6"><w.icon className="h-6 w-6" /></span>
                    <span className="font-[family-name:var(--font-sora)] text-sm font-bold text-primary/20">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-sora)] text-lg font-bold text-primary">{w.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-primary/55">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-6">
          <SectionHeading eyebrow="What guides us" title={<>The rules of <span className="text-gradient">our road.</span></>} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card-hover h-full rounded-[26px] border border-primary/8 bg-elevated p-7 shadow-sm hover:border-accent/40">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent/25 to-accent2/15 text-accent"><v.icon className="h-6 w-6" /></span>
                  <h3 className="mt-5 font-[family-name:var(--font-sora)] text-lg font-bold text-primary">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-primary/55">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-6">
        <SectionHeading eyebrow="Milestones" title={<>The journey <span className="text-gradient">so far.</span></>} />
        <div className="relative mt-14">
          {/* The road itself — a gradient line down the centre on desktop */}
          <div className="absolute top-2 bottom-2 left-[11px] w-[2px] rounded-full bg-gradient-to-b from-accent via-accent/35 to-accent2 lg:left-1/2 lg:-translate-x-1/2" aria-hidden />
          {milestones.map((m, i) => {
            const leftSide = i % 2 === 0;
            return (
              <Reveal key={m.year} delay={i * 60} className={`relative pb-8 pl-12 last:pb-0 lg:w-1/2 lg:pl-0 lg:pb-10 ${leftSide ? "lg:pr-14" : "lg:ml-auto lg:pl-14"}`}>
                <span className={`absolute top-7 left-0 grid h-6 w-6 place-items-center rounded-full border-2 border-accent bg-elevated lg:top-8 ${leftSide ? "lg:left-auto lg:-right-3" : "lg:-left-3"}`} aria-hidden>
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-accent to-accent2" />
                </span>
                <div className="card-hover rounded-[24px] border border-primary/8 bg-elevated p-6 shadow-sm hover:border-accent/40">
                  <p className="inline-flex rounded-full bg-accent/10 px-3 py-1 font-[family-name:var(--font-sora)] text-xs font-bold tracking-[0.18em] text-accent">{m.year}</p>
                  <h3 className="mt-3 font-[family-name:var(--font-sora)] text-xl font-bold text-primary">{m.title}</h3>
                  <p className="mt-2 leading-relaxed text-primary/55">{m.text}</p>
                  {m.year === "2026" && (
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="group mt-4 inline-flex items-center gap-2 font-[family-name:var(--font-sora)] text-sm font-bold text-accent">
                      Start your project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-primary/8 bg-surface">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-6">
          <SectionHeading eyebrow="The people" title={<>Small team. <span className="text-gradient">Senior hands.</span></>} text="No hand-offs, no juniors learning on your budget. These are the people you'll actually work with." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="card-hover h-full rounded-[26px] border border-primary/8 bg-elevated p-7 text-center shadow-sm hover:border-accent/40">
                  <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 font-[family-name:var(--font-sora)] text-2xl font-bold text-onaccent">{t.initials}</span>
                  <h3 className="mt-5 font-[family-name:var(--font-sora)] text-lg font-bold text-primary">{t.name}</h3>
                  <p className="mt-1 flex items-center justify-center gap-1.5 text-xs font-bold tracking-wider text-accent uppercase"><Lightbulb className="h-3.5 w-3.5" /> {t.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-primary/55">{t.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
