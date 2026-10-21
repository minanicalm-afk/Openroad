import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import { Check, Clock3, Mail, MapPin, MessageCircle, MousePointerClick, Plus, ShieldCheck, Sparkles } from "lucide-react";
import LiveCanvas from "@/components/LiveCanvas";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/Shared";
import ContactForm from "./ContactForm";
import { services } from "@/lib/data";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/contact";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Reach Us — Start Your Project",
  description: "Reach Openroad Software Solution. Tell us about your web app, portfolio, SaaS or mobile project — we reply within one business day.",
};

/* Bright aerial shoreline — navy/teal like the brand, lots of calm negative
   space, and washed right back so it tints the page instead of fighting it */
const contactBg = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2400&auto=format&fit=crop";

const replyTips = [
  "What you're building & who for",
  "Your ideal timeline",
  "A rough budget range",
  "Links to sites you like",
];

const expectations = [
  { icon: Clock3, title: "Reply within 24 hours", text: "A real human from our small team replies within one business day — often much sooner." },
  { icon: MessageCircle, title: "Free discovery call", text: "30 minutes, no sales script. We listen, ask sharp questions and tell you honestly if we're the right fit." },
  { icon: Sparkles, title: "Clear, itemised proposal", text: "Within a few days you get the scope, timeline and a detailed estimate broken down by phase — so you know exactly what you are paying for." },
  { icon: ShieldCheck, title: "No obligation, ever", text: "If we're not right for each other, we'll say so — and point you toward someone who is." },
];

const faqs = [
  { q: "How quickly will I hear back?", a: "Within one business day — usually much sooner. Your reply comes from a real person on our team, not an autoresponder. If we're mid-launch for another client it may take the full day, but never longer." },
  { q: "What happens after I send this form?", a: "Three simple steps: a free 30-minute discovery call to understand your goals, then a clear, itemised proposal within a few days covering scope, timeline and cost by phase. If it feels right, we agree everything in writing and start building — with a live demo to review every week." },
  { q: "How much will my project cost?", a: "Every project is different, so we don't sell one-size-fits-all packages. Instead you get a transparent estimate broken down by phase, agreed together before we build. If the scope ever needs to change, we agree the cost in writing first — no surprises on the final invoice." },
  { q: "How long will my project take?", a: "It depends on scope — a focused portfolio and a multi-tenant SaaS are very different journeys. Your proposal includes a realistic timeline with milestones, and weekly live demos mean you always know exactly where things stand and what's coming next." },
  { q: "Who owns the code, designs and accounts?", a: "You do — 100% of the IP, from day one. Code, designs, domains and hosting accounts are set up in your name, so you're never locked in to us (though most clients choose to stay)." },
  { q: "We're in a different country and time zone. Can we still work together?", a: "Absolutely — we're a remote-first studio working with clients in 9 countries. Async updates, recorded walkthroughs and calls scheduled at sane hours for you keep everything moving without anyone working at 3am." },
  { q: "Do you support the product after launch?", a: "Yes. Every project includes 30 days of post-launch support for fixes and fine-tuning. After that, most clients move to a flexible care plan covering updates, monitoring and small improvements — but it's entirely optional." },
];

async function ContactFormWithService({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  const valid = services.some((s) => s.slug === service) ? (service as string) : "";
  return <ContactForm initialService={valid} />;
}

export default function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  return (
    <div className="relative overflow-hidden">
      {/* Different backdrop: bright shoreline, heavily washed with the theme
          colour so it reads as a soft tint, strongest at the top */}
      <Image src={contactBg} alt="" fill priority sizes="100vw" className="object-cover object-center" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-base/78 via-base/90 to-base" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-base/50 via-transparent to-base/50" aria-hidden />
      <div className="bg-grid absolute inset-x-0 top-0 h-[480px] [mask-image:linear-gradient(to_bottom,black_25%,transparent_95%)]" aria-hidden />
      <div className="pointer-events-none absolute top-[-120px] left-1/2 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" aria-hidden />
      {/* Live treatment: real-time particle network drifting over the top
          hero zone, fading out before the form */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] [mask-image:linear-gradient(to_bottom,black_55%,transparent_98%)]" aria-hidden>
        <LiveCanvas />
      </div>

      <div className="relative">
        {/* Centred header */}
        <header className="mx-auto max-w-3xl px-5 pt-[124px] text-center sm:pt-[152px]">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-elevated/70 px-4 py-1.5 text-xs font-bold tracking-[0.22em] text-accent uppercase">
              <span className="h-1.5 w-1.5 animate-glow rounded-full bg-accent2" /> Reach us
            </p>
            <h1 className="mt-6 font-[family-name:var(--font-sora)] text-[42px] leading-[1.05] font-bold tracking-tight text-primary sm:text-6xl">
              Let&apos;s talk about <span className="text-gradient">where you&apos;re headed.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary/65">
              Tell us about your project, or email us directly. Either way, you&apos;ll hear back within one business day — with honest next steps, not a sales pitch.
            </p>
{""}
          </Reveal>
        </header>

        {/* Info rail left, form right (form first on mobile) */}
        <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6">
          <div className="grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="order-2 space-y-6 lg:order-1">
              {/* Get a sharper reply */}
              <Reveal>
                <div className="rounded-[26px] border border-primary/10 bg-elevated px-7 py-6 shadow-lg shadow-primary/5">
                  <div className="flex items-center gap-3.5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent2 text-white shadow-lg shadow-accent/25"><MousePointerClick className="h-5 w-5" /></span>
                    <div>
                      <h2 className="font-[family-name:var(--font-sora)] text-xl font-bold text-primary">Get a sharper reply</h2>
                      <p className="text-sm text-primary/50">Four things that help us help you</p>
                    </div>
                  </div>
                  <ul className="mt-5 grid gap-x-5 gap-y-3 sm:grid-cols-2">
                    {replyTips.map((tip) => (
                      <li key={tip} className="flex items-start gap-3 text-primary/70">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/12 text-accent"><Check className="h-3 w-3" strokeWidth={3} /></span>
                        <span className="text-[15px] leading-snug">{tip}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-primary/55">Short on time? Two sentences is fine — we&apos;ll ask the rest on the call.</p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 border-t border-primary/8 pt-3.5 text-[13px]">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 font-semibold text-primary transition hover:text-accent"><Mail className="h-4 w-4 shrink-0 text-accent" /> {CONTACT_EMAIL}</a>
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-primary transition hover:text-accent"><FaWhatsapp className="h-4 w-4 shrink-0 text-[#25D366]" /> WhatsApp · {WHATSAPP_DISPLAY}</a>
                    <span className="inline-flex items-center gap-2 text-primary/55"><Clock3 className="h-4 w-4 shrink-0 text-accent" /> Replies within 1 business day</span>
                    <span className="inline-flex items-center gap-2 text-primary/55"><MapPin className="h-4 w-4 shrink-0 text-accent" /> Remote-first · 9 countries</span>
                  </div>
                </div>
              </Reveal>

              {/* What happens next */}
              <Reveal delay={120}>
                <div className="rounded-[26px] border border-primary/10 bg-elevated p-7 shadow-lg shadow-primary/5">
                  <h2 className="font-[family-name:var(--font-sora)] text-xl font-bold text-primary">What happens next?</h2>
                  <ol className="mt-6">
                    {expectations.map((e, i) => (
                      <li key={e.title} className="relative flex gap-4 pb-7 last:pb-0">
                        {i < expectations.length - 1 && <span className="absolute top-12 left-[21px] h-[calc(100%-44px)] border-l-2 border-dashed border-accent/25" aria-hidden />}
                        <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 font-[family-name:var(--font-sora)] text-sm font-bold text-white shadow-lg shadow-accent/25">{i + 1}</span>
                        <span className="pt-1">
                          <span className="flex items-center gap-2 font-semibold text-primary"><e.icon className="h-4 w-4 text-accent" /> {e.title}</span>
                          <span className="mt-1 block text-sm leading-relaxed text-primary/55">{e.text}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={80} className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-[28px] bg-elevated shadow-2xl shadow-primary/10 ring-1 ring-primary/10">
                <Suspense fallback={<div className="p-10 text-primary/50">Loading the form…</div>}>
                  <ContactFormWithService searchParams={searchParams} />
                </Suspense>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ — centred single column */}
        <section className="mx-auto max-w-[1440px] px-5 pb-24 sm:px-6">
          <div className="rounded-[32px] border border-primary/10 bg-surface/85 px-5 py-14 shadow-xl shadow-primary/5 sm:px-10">
            <SectionHeading eyebrow="Before you ask" title={<>Questions, <span className="text-gradient">answered straight.</span></>} text="The things founders and teams usually want to know before starting a project with us." />
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
            <p className="mt-10 text-center text-primary/60">
              Something else on your mind?{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-1.5 font-bold text-accent hover:underline">
                <Mail className="h-4 w-4" /> Ask us anything
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
