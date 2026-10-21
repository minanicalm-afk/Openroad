import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, BadgeCheck, Cloud, Code2, Compass, Globe, Layers, PenTool, Quote, Rocket, ShieldCheck, Smartphone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { CtaBand, SectionHeading } from "@/components/Shared";
import { heroImage, processSteps, projects, services, stats } from "@/lib/data";
import { WHATSAPP_URL } from "@/lib/contact";
import { FaWhatsapp } from "react-icons/fa";
import HeroPhone from "@/components/HeroPhone";

const serviceIcons = [Globe, Layers, Cloud, Smartphone];
const processIcons = [Compass, PenTool, Code2, Rocket];

/* Moving pills under the hero — only the services we actually offer */
const capabilities = [
  { icon: Globe, title: "Web Applications", sub: "Next.js / React" },
  { icon: Layers, title: "Portfolio Websites", sub: "CMS / SEO" },
  { icon: Cloud, title: "SaaS Products", sub: "Stripe / Multi-tenant" },
  { icon: Smartphone, title: "Mobile Applications", sub: "iOS / Android" },
];

const testimonials = [
  { quote: "Openroad rebuilt our dispatch platform and our team finally breathes. Fast, honest, and the design is gorgeous.", name: "Daniel Okafor", role: "COO, Northline Logistics", initials: "DO" },
  { quote: "My portfolio went from a PDF I emailed around to a site that brings clients to me. Best money I've spent on my practice.", name: "Maya Chen", role: "Founder, Maya Chen Architecture", initials: "MC" },
  { quote: "They took PulseBoard from idea to 1,200 paying teams. It never felt like hiring an agency — it felt like gaining co-founders.", name: "Sara Lindqvist", role: "CEO, PulseBoard", initials: "SL" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-[72px]">
        {/* Background image — Abstract Navy (Earth at night), washed with
            the theme colour so the left-aligned headline stays readable */}
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center saturate-[1.15]"
          aria-hidden
        />
        {/* Hero film — "the digital open road" (chosen treatment): light
            streaming down a glowing road toward a network constellation.
            Self-hosted in /public/videos (8s seamless loop, ~250KB, muted
            + inline so it autoplays everywhere). Sits over the still
            image, which remains as the fallback for reduced-motion. */}
        <video
          className="absolute inset-0 h-full w-full object-cover saturate-[1.15] motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-road-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero-road.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-base/80 via-base/50 to-base/15" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-base/40 via-transparent to-base" aria-hidden />
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="pointer-events-none absolute top-0 right-[-180px] h-[560px] w-[560px] rounded-full bg-accent2/20 blur-[130px]" aria-hidden />
        <div className="pointer-events-none absolute bottom-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full bg-accent/18 blur-[110px]" aria-hidden />
        <div className="pointer-events-none absolute top-[38%] left-[38%] h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]" aria-hidden />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 pt-8 pb-12 sm:px-6 sm:pt-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-8 lg:pt-10">
          <Reveal className="max-w-3xl min-w-0 lg:mt-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/12 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary/70">
              <span className="animate-glow h-2 w-2 rounded-full bg-micro" /> Now accepting new projects for 2026
            </p>
            <h1 className="mt-7 font-[family-name:var(--font-sora)] text-[42px] leading-[1.02] font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl">
              We build software for the <span className="text-gradient">open road</span> ahead.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary/60">
              Openroad Software Solution designs and builds web applications, portfolio websites, SaaS products and mobile apps — exquisite, fast, and made to take your business further.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-button px-7 py-3.5 font-bold text-onbutton shadow-xl shadow-button/25 transition hover:bg-buttondark">
                <FaWhatsapp className="h-5 w-5" aria-hidden /> Start your project
              </a>
              <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-primary/15 px-7 py-3.5 font-semibold text-primary transition hover:border-primary/40 hover:bg-primary/5">
                View project gallery <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          {/* Phone — a successful WhatsApp conversation with a client,
              from first problem to launch day. Sits lower than the copy
              and auto-scrolls through the whole story (HeroPhone).
              Desktop only: hidden on mobile/tablet so the small-screen
              hero stays focused on the headline and CTAs. */}
          <Reveal delay={160} className="relative mx-auto mt-4 hidden w-full max-w-[320px] min-w-0 lg:mt-10 lg:block">
            <HeroPhone />
          </Reveal>
        </div>
      </section>

      {/* MOVING CAPABILITY PILLS */}
      <div className="overflow-hidden border-b border-primary/8 py-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]" aria-hidden>
        <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex gap-4 pr-4">
              {[...capabilities, ...capabilities].map((c, ci) => (
                <span key={`${c.title}-${ci}`} className="flex shrink-0 items-center gap-3.5 rounded-full border border-primary/10 bg-elevated py-2.5 pr-7 pl-3 shadow-sm">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/[0.07] text-primary/60">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-[family-name:var(--font-sora)] text-[15px] leading-tight font-bold whitespace-nowrap text-primary">{c.title}</span>
                    <span className="mt-0.5 block text-[10px] tracking-[0.18em] whitespace-nowrap text-primary/40 uppercase">{c.sub}</span>
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="rounded-3xl border border-primary/8 bg-primary/[0.03] p-7 text-center">
                <p className="font-[family-name:var(--font-sora)] text-4xl font-bold text-primary">{s.value}</p>
                <p className="mt-2 text-sm text-primary/50">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-[1440px] px-5 pb-24 sm:px-6">
        <SectionHeading eyebrow="What we do" title={<>Four roads. <span className="text-gradient">One destination: growth.</span></>} text="Every engagement is senior-led, transparently scoped and design-first. Pick your road — or let us help you choose." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <Reveal key={s.slug} delay={i * 70} className="h-full">
                <Link href={`/services#${s.slug}`} className="card-hover group relative block h-full overflow-hidden rounded-[28px] border border-primary/10 bg-elevated hover:border-primary/25">
                  {/* Subtle service photo washed across the whole card */}
                  <Image src={s.image} alt="" fill sizes="(min-width:1024px) 700px, 100vw" className="object-cover opacity-[0.08] transition duration-700 group-hover:scale-[1.03] group-hover:opacity-[0.14]" aria-hidden />
                  <div className="absolute inset-0 bg-gradient-to-r from-elevated via-elevated/88 to-elevated/35" aria-hidden />
                  <span className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b ${s.accentGradient}`} aria-hidden />

                  <div className="relative flex flex-col sm:flex-row">
                    <div className="min-w-0 flex-1 p-6 sm:p-7">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${s.accentGradient} text-white shadow-lg shadow-accent/25`}><Icon className="h-6 w-6" /></span>
                        <span className="ml-auto font-[family-name:var(--font-sora)] text-sm font-bold text-primary/25">{s.index} / 04</span>
                      </div>
                      <h3 className="mt-5 font-[family-name:var(--font-sora)] text-2xl font-bold text-primary">{s.title}</h3>
                      <p className="mt-3 line-clamp-3 max-w-xl leading-relaxed text-primary/60">{s.description}</p>
                      <div className="mt-7 flex flex-wrap items-center gap-2">
                        {s.stack.slice(0, 3).map((tech) => (
                          <span key={tech} className="rounded-full border border-primary/15 bg-base/60 px-3.5 py-1.5 text-xs font-semibold text-primary/65 backdrop-blur">{tech}</span>
                        ))}
                        <span className={`ml-auto inline-flex items-center gap-2 pt-1 text-sm font-bold sm:pt-0 ${s.accentText}`}>Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" /></span>
                      </div>
                    </div>

                    {/* Service photo, right side — wide, short card */}
                    <div className="relative shrink-0 px-6 pb-6 sm:w-[220px] sm:py-6 sm:pr-6 sm:pl-0">
                      <div className="relative h-48 overflow-hidden rounded-[20px] shadow-xl sm:h-full sm:min-h-[200px]">
                        <Image src={s.image} alt={`${s.title} at Openroad`} fill sizes="240px" className="object-cover transition duration-700 group-hover:scale-105" />
                        <div className={`absolute inset-0 bg-gradient-to-t ${s.accentGradient} opacity-25 mix-blend-multiply`} aria-hidden />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="border-y border-primary/8 bg-surface">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading align="left" eyebrow="Project gallery" title={<>Recent journeys, <span className="text-gradient">real results.</span></>} />
            <Reveal><Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-primary/15 px-6 py-3 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent">All projects <ArrowRight className="h-4 w-4" /></Link></Reveal>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <Link href="/projects" className="card-hover group block overflow-hidden rounded-[26px] border border-primary/8 bg-primary/[0.03] hover:border-primary/25">
                  <div className="relative overflow-hidden">
                    <Image src={p.image} alt={p.title} width={900} height={600} className="h-56 w-full object-cover transition duration-700 group-hover:scale-105" />
                    <span className={`absolute top-4 left-4 rounded-full bg-gradient-to-r ${p.gradient} px-3.5 py-1.5 text-xs font-bold text-white`}>{p.category}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-primary">{p.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-primary/55">{p.description}</p>
                    <p className="mt-4 flex items-center gap-2 text-sm font-bold text-accent"><BadgeCheck className="h-4 w-4" /> {p.result}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-6">
        <SectionHeading eyebrow="How we work" title={<>A clear road from <span className="text-gradient">idea to launch.</span></>} text="No black boxes. You always know where your project is, what is next, and where things stand." />

        {/* Timeline — icon nodes on a line, like a route being charted */}
        <div className="relative mt-16 hidden lg:block" aria-hidden>
          <div className="absolute top-7 right-[6%] left-[6%] border-t border-primary/15" />
          <div className="relative grid grid-cols-4">
            {processSteps.map((p, i) => {
              const Icon = processIcons[i];
              return (
                <div key={p.step} className="relative flex justify-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-primary/12 bg-elevated text-accent shadow-lg shadow-primary/8">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className={`absolute top-[68px] h-2 w-2 rounded-full bg-accent ${i % 2 ? "opacity-45" : ""}`} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <Reveal key={p.step} delay={i * 90} className="h-full">
              <div className="card-hover h-full rounded-[26px] border border-primary/10 bg-elevated p-7 shadow-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.22em] text-accent uppercase">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/15 lg:hidden">
                    {(() => { const Icon = processIcons[i]; return <Icon className="h-3 w-3" />; })()}
                  </span>
                  Phase {p.step}
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-sora)] text-xl font-bold text-primary">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-primary/55">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="inline-flex flex-wrap items-center justify-center gap-2 text-sm text-primary/50">
            <Code2 className="h-4 w-4 text-accent" /> Clean, tested code <span className="text-primary/20">·</span>
            <Rocket className="h-4 w-4 text-accent" /> Weekly live demos <span className="text-primary/20">·</span>
            <ShieldCheck className="h-4 w-4 text-accent" /> You own 100% of the IP
          </p>
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-primary/8 bg-surface">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-6">
          <SectionHeading eyebrow="Kind words" title={<>Clients who took <span className="text-gradient">the road with us.</span></>} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="flex h-full flex-col rounded-[26px] border border-primary/8 bg-primary/[0.03] p-7">
                  <Quote className="h-7 w-7 text-accent" />
                  <blockquote className="mt-4 flex-1 leading-relaxed text-primary/70">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-primary/8 pt-5">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 font-[family-name:var(--font-sora)] text-sm font-bold text-onaccent">{t.initials}</span>
                    <span><span className="block font-semibold text-primary">{t.name}</span><span className="block text-xs text-primary/45">{t.role}</span></span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-24"><CtaBand /></div>
    </>
  );
}
