"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/lib/contact";

/* Floating WhatsApp chat — a green bubble fixed to the bottom-right of
   every page. Tapping it opens a small welcome panel (like a chat
   widget); the panel's button and the bubble's open state both lead to
   wa.me with a pre-filled draft message. */
export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open ]);

  return (
    <div className="fixed right-5 bottom-5 z-[70] flex flex-col items-end gap-4 sm:right-6 sm:bottom-6">
      {open && (
        <section
          aria-label="Chat with Openroad on WhatsApp"
          className="w-[min(92vw,380px)] origin-bottom-right rounded-[28px] border border-primary/10 bg-elevated p-6 shadow-2xl shadow-primary/25"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#25D366] text-white shadow-lg shadow-[#25D366]/35">
                <FaWhatsapp className="h-8 w-8" aria-hidden />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full border-2 border-elevated bg-[#25D366]" aria-hidden />
              </span>
              <div>
                <p className="font-[family-name:var(--font-sora)] text-lg leading-tight font-bold text-primary">Openroad Software</p>
                <p className="mt-1 text-[11px] font-bold tracking-[0.18em] text-accent uppercase">Typically responds within 24 hours</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp chat panel"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/15 text-primary/60 transition hover:border-primary/40 hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <p className="mt-5 leading-relaxed text-primary/65">
            Tell us about the software you want to build. We&apos;ll scope it, write the brief, and get you a clear proposal — all from a quick WhatsApp conversation.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-4 font-bold text-white shadow-xl shadow-[#25D366]/30 transition hover:bg-[#1eb85a]"
          >
            <FaWhatsapp className="h-6 w-6" aria-hidden /> Start Chat on WhatsApp
          </a>
{""}
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        className="relative grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition hover:scale-105 hover:bg-[#1eb85a]"
      >
        {open ? <X className="h-8 w-8" aria-hidden /> : <FaWhatsapp className="h-9 w-9" aria-hidden />}
        {!open && <span className="absolute top-0.5 right-0.5 h-4 w-4 rounded-full border-2 border-base bg-[#25D366]" aria-hidden />}
      </button>
    </div>
  );
}
