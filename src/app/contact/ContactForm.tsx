"use client";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { services } from "@/lib/data";
import { WHATSAPP_URL } from "@/lib/contact";
import { FaWhatsapp } from "react-icons/fa";

const budgets = ["KSh 50,000 – 100,000", "KSh 100,000 – 150,000", "KSh 150,000 – 200,000", "KSh 200,000 – 250,000", "KSh 250,000 – 300,000", "Not sure yet"];

export default function ContactForm({ initialService = "" }: { initialService?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending"); setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please email us instead.");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[26px] border border-emerald-400/30 bg-emerald-400/8 p-10 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-400" />
        <h2 className="mt-5 font-[family-name:var(--font-sora)] text-2xl font-bold text-primary">Message received — you&apos;re on the road! 🎉</h2>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-primary/60">Thanks for reaching out — your message has been emailed to our team. We&apos;ll reply within one business day with honest next steps and, if it&apos;s a fit, a time for a free discovery call.</p>
        <button onClick={() => setStatus("idle")} className="mt-7 rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary/50">Send another message</button>
      </div>
    );
  }

  const field = "w-full rounded-xl border border-primary/12 bg-primary/[0.04] px-4 py-3.5 text-primary placeholder:text-primary/30 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25";
  const label = "mb-2 block text-sm font-semibold text-primary/80";

  return (
    <form onSubmit={onSubmit} className="rounded-[26px] border border-primary/8 bg-primary/[0.03] p-7 sm:p-9" noValidate={false}>
      <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-primary">Tell us about your project</h2>
      <p className="mt-2 text-sm text-primary/50">Fields marked * are required. We reply within one business day.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="name" className={label}>Your name *</label><input id="name" name="name" required autoComplete="name" placeholder="Jane Smith" className={field} /></div>
        <div><label htmlFor="email" className={label}>Email *</label><input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={field} /></div>
        <div><label htmlFor="company" className={label}>Company / brand</label><input id="company" name="company" autoComplete="organization" placeholder="Company Inc. (optional)" className={field} /></div>
        <div>
          <label htmlFor="service" className={label}>What do you need? *</label>
          <select id="service" name="service" required defaultValue={initialService} className={`${field} [&>option]:bg-elevated`}>
            <option value="" disabled>Choose a service…</option>
            {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
            <option value="not-sure">Not sure yet — advise me</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={label}>Budget range</label>
          <select id="budget" name="budget" defaultValue="" className={`${field} [&>option]:bg-elevated`}>
            <option value="" disabled>Select a range…</option>
            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div><label htmlFor="timeline" className={label}>Ideal timeline</label><input id="timeline" name="timeline" placeholder="e.g. Launch by March" className={field} /></div>
        <div className="sm:col-span-2"><label htmlFor="message" className={label}>About your project *</label><textarea id="message" name="message" required rows={6} placeholder="What are you building, who is it for, and what does success look like?" className={`${field} resize-none`} /></div>
      </div>
      {status === "error" && <p role="alert" className="mt-5 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">{error}</p>}
      <button type="submit" disabled={status === "sending"} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-button px-7 py-4 font-bold text-onbutton transition hover:bg-buttondark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
        {status === "sending" ? <><Loader2 className="h-5 w-5 animate-spin" /> Sending…</> : <><Send className="h-5 w-5" /> Send message</>}
      </button>
      <p className="mt-4 text-xs text-primary/35">By sending, you agree to be contacted about your enquiry. We never share your details.</p>
      <p className="mt-4 border-t border-primary/8 pt-4 text-sm text-primary/50">
        Prefer to chat?{" "}
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-bold text-[#1eb85a] hover:underline">
          <FaWhatsapp className="h-4 w-4" /> Start a WhatsApp conversation
        </a>
      </p>
    </form>
  );
}
