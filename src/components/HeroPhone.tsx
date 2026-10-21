"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCheck, Mic, Phone, Video } from "lucide-react";

/* Illustrative WhatsApp conversation for the hero phone: a client whose
   two-branch stock problem became one live system. Green = the client,
   white = Openroad, exactly as it reads on the client's own phone.
   The thread auto-scrolls: hold at the top, scroll slowly through the
   whole story to the successful handover and the client's happy
   feedback, hold there, then fade back to the top and replay. */
const heroChat: Array<{ from: "openroad" | "client" | "divider"; text: string; time?: string; kind?: "link" }> = [
  // 1 — the client arrives with our standard WhatsApp opener
  { from: "client", text: "Hi Openroad, I'm interested in discussing a software project. I'd like to tell you about what I'm building and explore how we can work together.", time: "9:02 AM" },
  { from: "openroad", text: "Welcome, Mary 🙌 Asante for reaching out. Tell us about the business — what should this software do for you?", time: "9:03 AM" },
  { from: "client", text: "I distribute phones from Mombasa and Nyandarua. Our stock never matches between branches and Fridays disappear into reconciling 😩", time: "9:05 AM" },

  // 2 — choosing the service
  { from: "openroad", text: "That helps. Which of these sounds closest?\n🌐 Web Application — an internal system for your team\n🛍️ Portfolio Website — be found & trusted online\n☁️ SaaS Product — customers subscribe & pay monthly\n📱 Mobile App — your service on phones", time: "9:06 AM" },
  { from: "client", text: "The SaaS one — I need stock, sales & cash for both branches in one place, and my agents should only see their branch.", time: "9:08 AM" },
  { from: "openroad", text: "Perfect fit. We'll build one live dashboard: both branches, role-based views for agents, leads & admins, suppliers, reports and an audit log.", time: "9:09 AM" },

  // 3 — duration
  { from: "client", text: "How long would that take?", time: "9:10 AM" },
  { from: "openroad", text: "6–8 weeks: design in week 1, then we build in phases with a live demo every Friday — you watch it grow, nothing is a surprise.", time: "9:11 AM" },

  // 4 — price negotiation
  { from: "client", text: "And the price?", time: "9:12 AM" },
  { from: "openroad", text: "For both branches + M-Pesa reconciliation, the guide is KSh 240,000 — itemised by phase before we start, so you see exactly what each part costs.", time: "9:13 AM" },
  { from: "client", text: "Hmm, I had planned around 180k 😅", time: "9:14 AM" },
  { from: "openroad", text: "We can meet you there: Phase 1 at 180k covers core stock, sales & cash. Reports and suppliers follow in Phase 2 — same system, built in stages.", time: "9:15 AM" },
  { from: "client", text: "Deal. Let's start 🤝", time: "9:16 AM" },

  // 5 — build starts
  { from: "divider", text: "Build starts — Week 1" },
  { from: "openroad", text: "Kickoff done ✅ Scope and itemised estimate agreed in writing, staging link is live. First demo this Friday.", time: "10:02 AM" },

  // 6 — mid-build confirmations
  { from: "divider", text: "Week 3 — Friday demo" },
  { from: "openroad", text: "This week's demo is ready 🚀 Branch dashboards and agent views are in — have a click and tell us what to adjust.", time: "2:30 PM" },
  { from: "client", text: "Just checked on my phone. The branch totals are exactly what we needed 👌", time: "2:41 PM" },
  { from: "openroad", text: "Noted and locked. Next: M-Pesa connection so payments reconcile themselves.", time: "2:43 PM" },

  // 7 — conclusion: the live project interface
  { from: "divider", text: "Launch day 🎉" },
  { from: "openroad", kind: "link", text: "Your system is live — this is your interface, have a look:", time: "10:15 AM" },
  { from: "openroad", text: "Handover complete 🙌 Your team is trained, admin access is yours, and support is covered for the next 30 days.", time: "10:17 AM" },

  // 8 — the happy client
  { from: "client", text: "We just approved today's sales from the dashboard — stock finally matches in both branches! 🎉", time: "10:24 AM" },
  { from: "client", text: "Best decision we made this year. Thank you, Openroad!", time: "10:25 AM" },
];

/* Auto-scroll timeline (ms) */
const HOLD_TOP = 1600;
const SCROLL_DURATION = 24000;
const HOLD_BOTTOM = 3400;
const FADE_DURATION = 500;
const CYCLE = HOLD_TOP + SCROLL_DURATION + HOLD_BOTTOM + FADE_DURATION;

export default function HeroPhone() {
  const chatRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = chatRef.current;
    if (!el) return;

    /* Reduced motion: no auto-scroll — rest at the happy ending */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.scrollTop = el.scrollHeight;
      return;
    }

    let raf = 0;
    let visible = true;
    let elapsed = 0;
    let last = performance.now();

    const loop = (now: number) => {
      const dt = now - last;
      last = now;
      if (!pausedRef.current && visible) elapsed += dt;

      const max = el.scrollHeight - el.clientHeight;
      if (max > 0) {
        const t = elapsed % CYCLE;
        let scroll = 0;
        let opacity = 1;
        if (t < 350) {
          opacity = t / 350; // fade back in at the top
        } else if (t < HOLD_TOP) {
          scroll = 0;
        } else if (t < HOLD_TOP + SCROLL_DURATION) {
          const p = (t - HOLD_TOP) / SCROLL_DURATION;
          scroll = max * p;
        } else if (t < HOLD_TOP + SCROLL_DURATION + HOLD_BOTTOM) {
          scroll = max;
        } else {
          const p = (t - HOLD_TOP - SCROLL_DURATION - HOLD_BOTTOM) / FADE_DURATION;
          scroll = max;
          opacity = 1 - p;
        }
        el.scrollTop = scroll;
        el.style.opacity = String(opacity);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0.15 });
    observer.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="animate-float relative motion-reduce:animate-none"
      role="img"
      aria-label="A phone showing a WhatsApp conversation: a client asks Openroad about a software project, chooses a SaaS system for stock, sales and cash across two branches, agrees the timeline and a phased price, follows weekly build demos, receives the live project link and handover, and replies that it was the best decision they made this year."
      onPointerEnter={() => { pausedRef.current = true; }}
      onPointerLeave={() => { pausedRef.current = false; }}
    >
      <div className="pointer-events-none absolute top-10 -left-10 h-52 w-52 rounded-full bg-accent/25 blur-[70px]" aria-hidden />
      <div className="pointer-events-none absolute -right-8 bottom-16 h-52 w-52 rounded-full bg-[#25D366]/25 blur-[70px]" aria-hidden />

      {/* Phone frame */}
      <div className="relative h-[620px] rounded-[46px] border border-white/25 bg-[#0B141A] p-[10px] shadow-[0_40px_90px_-20px_rgba(2,20,40,0.65)] sm:h-[660px]" aria-hidden>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[38px] bg-[#ECE5DD]">
          {/* Dynamic island */}
          <div className="absolute top-2 left-1/2 z-20 h-[22px] w-24 -translate-x-1/2 rounded-full bg-black" />

          {/* WhatsApp header */}
          <div className="relative bg-[#075E54] px-4 pt-10 pb-3 text-white">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#38BDF8] to-[#2DD4BF]">
                {/* Same road mark as the Openroad logo */}
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                  <path d="M7 20 11 4h2l4 16" stroke="#06080f" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M12 17v-2M12 12V10M12 7V5.5" stroke="#06080f" strokeWidth="2" strokeLinecap="round" strokeDasharray="0.1 4" />
                </svg>
              </span>
              <span className="min-w-0 flex-1 leading-tight">
                <span className="block truncate font-[family-name:var(--font-sora)] text-[15px] font-bold">Openroad Software</span>
                <span className="block text-xs text-white/75">online</span>
              </span>
              <Video className="h-5 w-5 shrink-0 opacity-90" />
              <Phone className="h-[18px] w-[18px] shrink-0 opacity-90" />
            </div>
          </div>

          {/* Chat thread — auto-scrolls through the whole story */}
          <div ref={chatRef} className="min-h-0 flex-1 overflow-y-auto px-3 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="space-y-1.5">
              <p className="mx-auto w-fit rounded-lg bg-white/85 px-2.5 py-1 text-[10px] font-semibold text-[#54656F] shadow-sm">Project kickoff</p>
              {heroChat.map((m, i) =>
                m.from === "divider" ? (
                  <p key={i} className="mx-auto w-fit rounded-lg bg-[#FDF3C6] px-2.5 py-1 text-[10px] font-semibold text-[#54656F] shadow-sm">{m.text}</p>
                ) : (
                  <div key={i} className={`max-w-[88%] rounded-xl px-2.5 pt-2 pb-1.5 shadow-sm ${m.from === "client" ? "ml-auto rounded-tr-sm bg-[#D9FDD3]" : "rounded-tl-sm bg-white"}`}>
                    {m.kind === "link" && (
                      <a href="https://ray-three-wheat.vercel.app/dashboard" target="_blank" rel="noreferrer" tabIndex={-1} className="mb-2 block overflow-hidden rounded-lg bg-[#F0F2F5]">
                        <Image src="/images/projects/ray-v2.jpg" alt="" width={480} height={300} priority className="h-28 w-full object-cover object-top" />
                        <span className="block px-2.5 py-2">
                          <span className="block font-[family-name:var(--font-sora)] text-[11px] font-bold text-[#111B21]">RayMombasa — Stock, Sales &amp; Cash Dashboard</span>
                          <span className="mt-0.5 block truncate text-[10px] font-medium text-[#027EB5]">ray-three-wheat.vercel.app/dashboard</span>
                        </span>
                      </a>
                    )}
                    <p className="text-[12px] leading-[1.35] whitespace-pre-line text-[#111B21]">{m.text}</p>
                    <p className="mt-1 flex items-center justify-end gap-1 text-[9.5px] text-[#667781]">
                      {m.time}
                      {m.from === "client" && <CheckCheck className="h-3.5 w-3.5 text-[#53BDEB]" />}
                    </p>
                  </div>
                ),
              )}
              {/* End-of-chat confirmation, the last thing the scroll lands on */}
              <p className="mx-auto flex w-fit items-center gap-1.5 rounded-full bg-[#075E54] px-3 py-1.5 text-[10px] font-bold text-white shadow-sm">
                <CheckCheck className="h-3.5 w-3.5" /> Project delivered — client happy 🎉
              </p>
            </div>
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-2 px-3 pb-5">
            <div className="flex flex-1 items-center rounded-full bg-white px-4 py-2.5 text-[12.5px] text-[#8696A0] shadow-sm">Message</div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#00A884] text-white shadow"><Mic className="h-5 w-5" /></span>
          </div>
          <div className="absolute bottom-1.5 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-black/50" />
        </div>
      </div>
    </div>
  );
}
