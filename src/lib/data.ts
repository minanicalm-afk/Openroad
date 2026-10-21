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
  outcome: string;
  bestFor: string[];
  notFor: string;
  investment: string;
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
    outcome: "Replace spreadsheets and scattered WhatsApp follow-ups with one system your whole team actually uses.",
    bestFor: ["Businesses outgrowing spreadsheets and manual follow-ups", "Teams that need customer portals, dashboards or internal tools"],
    notFor: "You only need people to find and contact you — a portfolio website will serve you better, faster and for less.",
    investment: "KSh 120,000 – 300,000",
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
    outcome: "Turn searches and referrals into enquiries with a site that proves you're credible before the first call.",
    bestFor: ["Founders, professionals and companies whose work sells on trust", "Businesses that need enquiries, bookings or quote requests"],
    notFor: "Customers need to log in, pay or manage data — that's a web application, not a portfolio site.",
    investment: "KSh 50,000 – 150,000",
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
    outcome: "Launch a subscription product customers can pay for — built so you never have to rebuild it when you grow.",
    bestFor: ["Founders validating a paid product with real subscribers", "Businesses turning a repeated service into a product"],
    notFor: "You're still checking whether anyone wants the idea — validate first with a focused page and real conversations.",
    investment: "KSh 180,000 – 300,000",
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
    outcome: "Put your service in your customer's pocket — one app for iOS and Android, from a single codebase.",
    bestFor: ["Services customers use repeatedly or on the move", "Field teams that need data captured where the work happens"],
    notFor: "You mainly need to be found and contacted — a fast website does that job for less.",
    investment: "KSh 150,000 – 300,000",
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
  url?: string;
};

export const projects: Project[] = [
  {
    title: "Ridgeform Construction",
    category: "Portfolio",
    year: "2026",
    description: "A full company website for a Nairobi construction firm — selected work across four counties, four service lines, a transparent four-step process, and verified credentials (NCA registration, insurance) up front.",
    image: "/images/projects/ridgeform.jpg",
    tags: ["Company Website", "Project Register", "Quote Requests"],
    result: "Quote requests via WhatsApp, call or form — one tap from any page",
    gradient: "from-amber-500/80 to-orange-600/80",
    url: "https://ridgeform-one.vercel.app/",
  },
  {
    title: "RayMombasa",
    category: "SaaS Product",
    year: "2026",
    description: "A multi-branch SaaS platform for a phone distribution business — daily stock, sales and cash tracking across Mombasa and Nyandarua, with role-based views for sales agents, team leads and admins, plus suppliers, reports and a full audit log.",
    image: "/images/projects/ray-v2.jpg",
    tags: ["SaaS Dashboard", "Role-based Access", "Reports & Audit Log"],
    result: "Two branches, one live view of stock, sales & cash",
    gradient: "from-violet-500/80 to-indigo-600/80",
    url: "https://ray-three-wheat.vercel.app/dashboard",
  },
  {
    title: "Chokaa Works",
    category: "Portfolio",
    year: "2026",
    description: "A contractor website where every job in the register shows its scope, contract band and duration — no slogans. Five service pages, a four-step programme with durations, client proof and an insights journal.",
    image: "/images/projects/chokaa.jpg",
    tags: ["Company Website", "Work Register", "Insights Blog"],
    result: "Every project lists scope, contract band & duration — trust before contact",
    gradient: "from-emerald-500/80 to-teal-600/80",
    url: "https://chokaa.vercel.app/",
  },
  {
    title: "TrailMate",
    category: "Mobile Application",
    year: "2025",
    description: "Hiking companion app with offline trail maps, route recording and community challenges for 40k outdoor lovers.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1400&auto=format&fit=crop",
    tags: ["React Native", "Offline Maps", "Expo"],
    result: "4.9\u2605 across both app stores",
    gradient: "from-emerald-500/80 to-teal-600/80",
  },
  {
    title: "Plinth Construction",
    category: "Portfolio",
    year: "2026",
    description: "A contractor website with a filterable project gallery spanning 12 counties, five service lines, the studio story, team and client testimonials — with office hours and quote requests kept one tap away.",
    image: "/images/projects/plinth.jpg",
    tags: ["Company Website", "Filterable Gallery", "Testimonials"],
    result: "Projects, team & testimonials across 12 counties in one clear register",
    gradient: "from-cyan-500/80 to-sky-600/80",
    url: "https://plinth-lyart.vercel.app/",
  },
  {
    title: "Kalimoni Nails & Beauty",
    category: "Web Application",
    year: "2026",
    description: "A salon website for a nail & beauty studio in Kalimoni, Juja — services with prices and durations up front, appointment booking, a take-home shop (nail kits, fragrance, jewelry, skin oils), recent-work gallery and client reviews.",
    image: "/images/projects/kalimoni.jpg",
    tags: ["Business Website", "Online Booking", "Shop"],
    result: "Services, booking & shop in one site — rated 4.9 by 500+ clients",
    gradient: "from-rose-500/80 to-pink-600/80",
    url: "https://kalimoni-nails.vercel.app/",
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
