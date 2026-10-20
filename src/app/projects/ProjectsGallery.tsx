"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { projects } from "@/lib/data";

/* Only offer filters for categories that actually have projects */
const filters = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

/* First row under "All": the showcases we lead with */
const priority = ["Ridgeform Construction", "Kalimoni Nails & Beauty", "FleetPay Go"];
const ordered = [...projects].sort((a, b) => {
  const ai = priority.indexOf(a.title);
  const bi = priority.indexOf(b.title);
  return (ai === -1 ? priority.length : ai) - (bi === -1 ? priority.length : bi);
});

export default function ProjectsGallery() {
  const [active, setActive] = useState<string>("All");
  const visible = active === "All" ? ordered : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
        {filters.map((f) => (
          <button key={f} role="tab" aria-selected={active === f} onClick={() => setActive(f)} className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${active === f ? "bg-accent text-onaccent" : "border border-primary/12 text-primary/60 hover:border-primary/40 hover:text-primary"}`}>
            {f} {f !== "All" && <span className="opacity-60">({projects.filter((p) => p.category === f).length})</span>}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <article key={p.title} className="card-hover group flex flex-col overflow-hidden rounded-[26px] border border-primary/8 bg-primary/[0.03] hover:border-primary/25">
            <div className="relative overflow-hidden">
              <Image src={p.image} alt={`${p.title} — ${p.category}`} width={900} height={620} className="h-60 w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className={`absolute top-4 left-4 rounded-full bg-gradient-to-r ${p.gradient} px-3.5 py-1.5 text-xs font-bold text-white shadow-lg`}>{p.category}</span>
              <span className="absolute right-4 bottom-4 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-accent text-onaccent opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"><ArrowUpRight className="h-5 w-5" /></span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-[family-name:var(--font-sora)] text-xl font-bold text-primary">{p.title}</h2>
                <span className="text-sm font-semibold text-primary/35">{p.year}</span>
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-primary/55">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="rounded-full bg-primary/6 px-3 py-1 text-xs font-medium text-primary/55">{t}</span>)}</div>
              <p className="mt-5 flex items-center gap-2 border-t border-primary/8 pt-4 text-sm font-bold text-accent"><BadgeCheck className="h-4 w-4 shrink-0" /> {p.result}</p>
              {p.url && (
                <a href={p.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 font-[family-name:var(--font-sora)] text-sm font-bold text-primary transition hover:text-accent">
                  Visit live site <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {visible.length === 0 && <p className="py-16 text-center text-primary/50">No projects in this category yet — yours could be the first.</p>}

      <div className="mt-16 rounded-[26px] border border-dashed border-accent/40 bg-accent/5 p-10 text-center">
        <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-primary">Your project belongs here.</h2>
        <p className="mx-auto mt-2 max-w-md text-primary/55">Every project above started with a single conversation. Let&apos;s start yours.</p>
        <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-button px-7 py-3.5 font-bold text-onbutton transition hover:bg-buttondark">Become our next case study <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
    </>
  );
}
