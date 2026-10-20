import type { Metadata } from "next";
import { PageHero } from "@/components/Shared";
import ProjectsGallery from "./ProjectsGallery";

export const metadata: Metadata = {
  title: "Project Gallery — Our Work",
  description: "Browse Openroad's project gallery: web applications, portfolio websites, SaaS products and mobile apps we've designed, built and launched.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Project gallery" title="Work we're proud to" highlight="put our name on." text="A selection of web applications, portfolios, SaaS products and mobile apps we've shipped — and the measurable results they delivered. Every one of them started as a single conversation, then took the same open road: a senior team, a transparent plan, and weekly demos all the way to launch." dashes={false} media="orbit" />
      <section className="mx-auto max-w-[1440px] px-5 py-16 pb-24 sm:px-6">
        <ProjectsGallery />
      </section>
    </>
  );
}
