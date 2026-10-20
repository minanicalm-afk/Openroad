/**
 * The one hero background used on every page (homepage + inner PageHeroes):
 * Earth at night from orbit. Deep-navy and abstract, it matches the Navy
 * Horizon theme exactly, suggests the global networks our software runs
 * on, and its dark, even tones give clean negative space for headlines
 * in both light and dark mode.
 */
export const heroImage =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop";

export type Service = {
  slug: string;
  image: string;
  accentGradient: string;
  accentSoft: string;
  accentText: string;
  index: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  deliverables: string[];
  stack: string[];
  timeline: string;
};

export const services: Service[] = [
  {
    slug: "web-applications",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop",
    accentGradient: "from-accent to-accent2",
    accentSoft: "bg-accent/12 text-accent",
    accentText: "text-accent",
    index: "01",
    title: "Web Applications",
    shortTitle: "Web Apps",
    tagline: "Powerful platforms that run your business, right in the browser.",
    description:
      "Custom dashboards, portals, marketplaces and internal tools — engineered for speed, security and scale. We turn complex workflows into interfaces your team and customers genuinely love to use.",
    deliverables: ["Product strategy & UX design", "Custom dashboards & admin panels", "Customer portals & marketplaces", "API development & integrations", "Authentication, roles & payments", "Performance, SEO & analytics"],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    timeline: "4 – 12 weeks",
  },
  {
    slug: "portfolio-websites",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    accentGradient: "from-accent to-accent2",
    accentSoft: "bg-accent/12 text-accent",
    accentText: "text-accent",
    index: "02",
    title: "Portfolio Websites",
    shortTitle: "Portfolios",
    tagline: "A first impression so good, clients reach out before you pitch.",
    description:
      "For founders, creators, agencies and professionals who need to be remembered. Editorial layouts, cinematic motion and razor-sharp copy structure — built to convert visitors into enquiries.",
    deliverables: ["Art direction & personal branding", "Portfolio & case-study systems", "CMS so you can update it yourself", "Booking / enquiry flows", "Copy polish & image direction", "Launch, SEO & social previews"],
    stack: ["Next.js", "Sanity / CMS", "Framer Motion", "Tailwind CSS", "Vercel"],
    timeline: "2 – 5 weeks",
  },
  {
    slug: "saas-products",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    accentGradient: "from-accent to-accent2",
    accentSoft: "bg-accent/12 text-accent",
    accentText: "text-accent",
    index: "03",
    title: "SaaS Products",
    shortTitle: "SaaS",
    tagline: "From napkin sketch to paying subscribers — we build the whole road.",
    description:
      "End-to-end SaaS development: MVP scoping, multi-tenant architecture, subscriptions, billing and the analytics you need to grow. Launch lean, learn fast, scale without rewrites.",
    deliverables: ["MVP scoping & roadmap", "Multi-tenant architecture", "Subscriptions & billing (Stripe)", "Onboarding & email flows", "Admin, analytics & reporting", "Scale, security & DevOps"],
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "AWS / Vercel"],
    timeline: "6 – 16 weeks",
  },
  {
    slug: "mobile-applications",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1200&auto=format&fit=crop",
    accentGradient: "from-accent to-accent2",
    accentSoft: "bg-accent/12 text-accent",
    accentText: "text-accent",
    index: "04",
    title: "Mobile Applications",
    shortTitle: "Mobile Apps",
    tagline: "Native-feel apps for iOS & Android, from a single codebase.",
    description:
      "Consumer apps, companion apps and on-the-go tools that feel fast and look beautiful. One codebase, both stores — with push, offline support and app-store launch handled for you.",
    deliverables: ["UX & UI design for mobile", "iOS & Android (one codebase)", "Push notifications & offline mode", "Payments & in-app purchases", "Backend APIs & admin panel", "App Store & Play Store launch"],
    stack: ["React Native", "Expo", "TypeScript", "Node.js", "Firebase", "PostgreSQL"],
    timeline: "5 – 14 weeks",
  },
];

export type Project = {
  title: string;
  category: "Web Application" | "Portfolio" | "SaaS Product" | "Mobile Application";
  year: string;
  description: string;
  image: string;
  tags: string[];
  result: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    title: "Northline Logistics",
    category: "Web Application",
    year: "2025",
    description: "Fleet-tracking and dispatch platform for a regional logistics company — live maps, driver workflows and customer tracking links.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1400&auto=format&fit=crop",
    tags: ["Next.js", "Maps API", "PostgreSQL"],
    result: "38% fewer dispatch calls",
    gradient: "from-amber-500/80 to-orange-600/80",
  },
  {
    title: "Maya Chen — Architect",
    category: "Portfolio",
    year: "2025",
    description: "Editorial portfolio for an award-winning architect, with immersive project stories and a press-ready press kit.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1400&auto=format&fit=crop",
    tags: ["Next.js", "CMS", "Motion"],
    result: "3× more enquiries in 60 days",
    gradient: "from-stone-400/80 to-zinc-600/80",
  },
  {
    title: "PulseBoard",
    category: "SaaS Product",
    year: "2024",
    description: "Team analytics SaaS that turns scattered metrics into one live board. Subscriptions, teams and Stripe billing built in.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
    tags: ["SaaS", "Stripe", "TypeScript"],
    result: "1,200+ paying teams in year one",
    gradient: "from-violet-500/80 to-indigo-600/80",
  },
  {
    title: "TrailMate",
    category: "Mobile Application",
    year: "2025",
    description: "Hiking companion app with offline trail maps, route recording and community challenges for 40k outdoor lovers.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1400&auto=format&fit=crop",
    tags: ["React Native", "Offline Maps", "Expo"],
    result: "4.9★ across both app stores",
    gradient: "from-emerald-500/80 to-teal-600/80",
  },
  {
    title: "Harbour & Finch",
    category: "Web Application",
    year: "2024",
    description: "Booking and client-management platform for a boutique legal practice — intake forms, scheduling and secure document sharing.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",
    tags: ["Next.js", "Scheduling", "Auth"],
    result: "12 hrs saved per week, per lawyer",
    gradient: "from-sky-500/80 to-blue-600/80",
  },
  {
    title: "Studio Ora",
    category: "Portfolio",
    year: "2024",
    description: "A cinematic portfolio for a photography studio — full-bleed galleries, client proofing and print-shop checkout.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1400&auto=format&fit=crop",
    tags: ["Portfolio", "E-commerce", "CMS"],
    result: "Print sales up 64% post-launch",
    gradient: "from-rose-500/80 to-pink-600/80",
  },
  {
    title: "FleetPay Go",
    category: "Mobile Application",
    year: "2024",
    description: "Driver payments app letting courier teams request, approve and reconcile payouts on the road, in real time.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1400&auto=format&fit=crop",
    tags: ["React Native", "Payments", "Firebase"],
    result: "Same-day payouts, zero spreadsheets",
    gradient: "from-cyan-500/80 to-sky-600/80",
  },
  {
    title: "LearnLoop",
    category: "SaaS Product",
    year: "2023",
    description: "Micro-learning SaaS for corporate training teams — course builder, cohorts and completion analytics.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1400&auto=format&fit=crop",
    tags: ["SaaS", "Next.js", "Analytics"],
    result: "92% average course completion",
    gradient: "from-fuchsia-500/80 to-purple-600/80",
  },
  {
    title: "Atlas Realty Group",
    category: "Web Application",
    year: "2023",
    description: "Property search and CRM platform with map search, saved homes and agent lead-routing for a growing brokerage.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop",
    tags: ["Next.js", "Maps", "CRM"],
    result: "2.4× qualified leads month one",
    gradient: "from-orange-500/80 to-red-600/80",
  },
];

export const stats = [
  { value: "48+", label: "Products shipped" },
  { value: "31", label: "Happy clients worldwide" },
  { value: "9", label: "Countries served" },
  { value: "98%", label: "Clients who return" },
];

export const processSteps = [
  { step: "01", title: "Chart the Route", text: "We map your goals, users and must-haves. You get a clear scope, a realistic timeline and a transparent, itemised estimate — agreed together before we build." },
  { step: "02", title: "Design the Journey", text: "Wireframes to polished UI. You review real designs, not promises, and we refine until it feels unmistakably yours." },
  { step: "03", title: "Build & Refine", text: "Weekly demos on a live staging link. Clean, tested code — built to be fast, secure and easy to grow." },
  { step: "04", title: "Launch & Grow", text: "We ship, monitor and support. Then we help you measure, learn and keep improving long after launch day." },
];
