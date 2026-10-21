"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems } from "@/lib/nav";
import { WHATSAPP_URL } from "@/lib/contact";
import { FaWhatsapp } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Openroad Software Solution — home">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-accent to-accent2 shadow-lg shadow-accent/25">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
          <path d="M7 20 11 4h2l4 16" stroke="#06080f" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M12 17v-2M12 12V10M12 7V5.5" stroke="#06080f" strokeWidth="2" strokeLinecap="round" strokeDasharray="0.1 4" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block font-[family-name:var(--font-sora)] text-[17px] font-bold tracking-tight ${onDark ? "text-white" : "text-primary"}`}>
          OPEN<span className="text-accent">ROAD</span>
        </span>
        <span className={`mt-1 block text-[9px] font-semibold tracking-[0.28em] uppercase ${onDark ? "text-white/50" : "text-primary/50"}`}>Software Solution</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Header omits "Homepage" — the logo already links home.
  const headerItems = navItems.filter((i) => i.href !== "/");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-primary/10 bg-base/90 shadow-2xl shadow-primary/10 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-6" aria-label="Main navigation">
        <Logo />
        <ul className="hidden items-center gap-1 lg:flex">
          {headerItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link href={item.href} className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${active ? "text-primary" : "text-primary/60 hover:text-primary"}`}>
                  {item.label}
                  {active && <span className="absolute inset-x-4 -bottom-[3px] h-[2px] rounded-full bg-gradient-to-r from-accent to-accent2" />}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hidden items-center gap-1.5 rounded-full bg-button px-5 py-2.5 text-sm font-bold text-onbutton shadow-lg shadow-button/25 transition hover:bg-buttondark sm:inline-flex">
            <FaWhatsapp className="h-4 w-4" aria-hidden /> Start a project
          </a>
          <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-primary/15 text-primary lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          {/* Light / dark toggle — far right */}
          <ThemeToggle />
        </div>
      </nav>
      {open && (
        <div className="border-t border-primary/10 px-5 pt-3 pb-6 lg:hidden">
          <ul className="space-y-1">
            {headerItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOpen(false)} className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium ${active ? "bg-primary/10 text-primary" : "text-primary/65 hover:bg-primary/5"}`}>
                    {item.label} <ArrowUpRight className="h-4 w-4 opacity-50" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-button px-5 py-3.5 font-bold text-onbutton"><FaWhatsapp className="h-5 w-5" aria-hidden /> Start a project</a>
        </div>
      )}
    </header>
  );
}
