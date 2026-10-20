import Link from "next/link";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { Logo } from "./Navbar";
import { navItems } from "@/lib/nav";
import { services } from "@/lib/data";
import Year from "./Year";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-primary/10 bg-surface">
      <div className="road-dashes absolute inset-x-0 top-0 h-[3px] opacity-70" aria-hidden />
      <div className="mx-auto max-w-[1440px] px-5 pt-16 pb-8 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary/55">
              Openroad Software Solution builds web applications, portfolio websites, SaaS products and mobile apps for ambitious brands — on the open road to what&apos;s next.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Twitter, label: "Openroad on X / Twitter" },
                { icon: Linkedin, label: "Openroad on LinkedIn" },
                { icon: Instagram, label: "Openroad on Instagram" },
                { icon: Github, label: "Openroad on GitHub" },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-primary/15 text-primary/60 transition hover:border-accent hover:text-accent">
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-bold tracking-[0.24em] text-primary/40 uppercase">Explore</h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((i) => (
                <li key={i.href}><Link href={i.href} className="text-sm text-primary/65 transition hover:text-accent">{i.label}</Link></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Services navigation">
            <h3 className="text-xs font-bold tracking-[0.24em] text-primary/40 uppercase">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}><Link href={`/services#${s.slug}`} className="text-sm text-primary/65 transition hover:text-accent">{s.title}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-xs font-bold tracking-[0.24em] text-primary/40 uppercase">Reach us</h3>
            <ul className="mt-5 space-y-3 text-sm text-primary/65">
              <li className="flex gap-2.5"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><a href="mailto:hello@openroadsoftware.com" className="hover:text-accent">hello@openroadsoftware.com</a></li>
              <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />Working remotely, worldwide</li>
            </ul>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-button/60 px-5 py-2.5 text-sm font-semibold text-button transition hover:bg-button hover:text-onbutton">
              Tell us your idea <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-primary/10 pt-6 text-xs text-primary/35 sm:flex-row">
          <p>© <Year /> Openroad Software Solution. All rights reserved.</p>
          <p>Built with care — on the open road. 🛣️</p>
        </div>
      </div>
    </footer>
  );
}
