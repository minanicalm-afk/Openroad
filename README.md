# Openroad Software Solution — Company Website

An exquisite Next.js website for **Openroad Software Solution**, a software studio offering
Web Applications, Portfolio Websites, SaaS Products, and Mobile Applications.

## Pages (Navbar)

| Navbar item | Route |
|---|---|
| Homepage | `/` |
| Services | `/services` |
| Project Gallery | `/projects` |
| About | `/about` |
| Reach Us | `/contact` |

## Run it

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
```

## Make it yours (quick edits)

- **Services, projects, stats** — all content lives in `src/lib/data.ts`
- **Contact email** — search for `hello@openroadsoftware.com` (Footer, Reach Us page, API route)
- **Team members** — edit the `team` array in `src/app/about/page.tsx` (first entry is a placeholder for the founder)
- **Contact form delivery** — `src/app/api/contact/route.ts` currently logs enquiries to the server console.
  Add [Resend](https://resend.com) or Formspree there (one commented snippet included) to receive them by email.
- **Images** — project/hero photos load from Unsplash; replace URLs in `src/lib/data.ts` and page files with your own screenshots.

## Colour theme — Navy Horizon (permanent)

The brand theme is locked to **Navy Horizon**; only the ☀️/🌙 light-dark toggle
remains in the navbar (far right). Navy Horizon pairs a deep navy base (`#0A1B33`
light-mode text, `#050D1F` dark base, card `#0B213F`) with a bright blue →
teal primary (`#0284C7` → `#14B8A6`; `#38BDF8` → `#2DD4BF` in dark) and plenty of
white space (`#FAFCFF` base, surface `#EAF0F8`). Buttons use the theme colour
itself via the `--c-button` tokens (`bg-button`, `hover:bg-buttondark`,
`text-onbutton`), which mirror the accent. Theme values are CSS variables in
`src/app/globals.css` (`--c-accent`, `--c-accent-2`, `--c-accent-strong`,
`--c-accent-soft`, `--c-on-accent`, `--c-button`, `--c-micro`, plus
base/surface/elevated/text), exposed to Tailwind as `bg-accent`,
`text-accent`, `hover:bg-accentdark`, `from-accent`, etc.

## Theme (white / dark)

Use the **☀️ / 🌙 button at the far right of the navbar** to switch themes. **White/light
is the default**; the choice is remembered (`localStorage` key `openroad-theme`).
The homepage hero is a left-aligned headline over the **Abstract Navy** background,
followed by a moving row of service pills (icon + title + subtitle, `capabilities`
in `src/app/page.tsx` — only the four offered services). Homepage service cards are
wide, short horizontal cards (photo right), all using the single Navy theme accent
(`from-accent` / `text-accent` in `src/lib/data.ts`). Page containers are
`max-w-[1440px]`; the header omits a "Homepage" link (logo links home). Pricing is
scope-based: copy talks about transparent, itemised estimates — never fixed prices.
(Earth at night from orbit) — `heroImage` in `src/lib/data.ts`, also used by
every inner page's `PageHero`; swap that one URL to change it everywhere.
Theme colors are CSS variables in `src/app/globals.css` (`--c-base`, `--c-surface`,
`--c-elevated`, `--c-text`), exposed to Tailwind as `bg-base`, `bg-surface`, `bg-elevated`
and `text-primary` / `border-primary` etc. The footer follows the theme too
(`bg-surface` with `text-primary` opacities), light in light mode and navy in dark.

## Tech

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Lucide icons
# Openroad
