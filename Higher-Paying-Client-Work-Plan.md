# Higher-Paying Client Work — 12-Week Skill Expansion Plan

**Goal:** Move from selling websites/apps by the hour to selling business systems at 2–3× current rates.
**Time budget:** 6 hours/day
**Core idea:** Clients don't pay more for more code. They pay more for less risk and more business impact. This plan is half technical depth, half positioning.

---

## 1. The Niche Decision

Don't sell "websites and apps" to everyone. Focus on businesses that:

- Have money
- Have painful manual operations
- You've already touched (RayMombasa is the proof)

**Target niche: Business systems for operations-heavy SMEs**

- Distributors & wholesalers
- Logistics companies
- Clinics
- Schools
- SACCOs
- Real estate agencies

These businesses lose money daily on stock errors, cash leakage, and WhatsApp chaos. A system that fixes that is worth KSh 500k–1.5M to them — not 50k.

**Positioning statement (end goal):**

> "I build stock, sales and WhatsApp ordering systems for distribution businesses — here's one running two branches live."

---

## 2. Daily Structure (6 Hours)

Do this every working day:

| Block | Time | What |
|---|---|---|
| Build | 3 hrs | Always building the one flagship project — never tutorial-hopping |
| Learn | 1.5 hrs | Structured learning tied directly to what you're building this week |
| Proof | 1 hr | Documenting: case study notes, screenshots, short demo videos |
| Outreach | 30 min | One conversation with a potential client or partner |

**Rules:**

- [ ] Nothing learned without a shipped artifact
- [ ] Every 2 weeks ends with something a client can click
- [ ] Demo-able beats impressive (a working M-Pesa prompt on a real phone closes deals; an architecture diagram doesn't)

---

## 3. The 12-Week Sprint

### Weeks 1–2: Backend Authority

**Learn:**
- [ ] PostgreSQL schema design (relations, foreign keys, indexes)
- [ ] Transactions — when and why they matter (stock + cash must never half-save)
- [ ] Prisma or Drizzle ORM, migrations
- [ ] Auth done properly (sessions/JWT, hashing, password reset)
- [ ] Role-based access control: admin / team lead / agent views
- [ ] Audit logs — who did what, when

**Build:**
- [ ] Multi-branch business dashboard: branches, stock, sales, cash
- [ ] Role-based views (each role sees only what it should)
- [ ] Audit log page
- [ ] Seed data that tells a realistic story for demos

**Deliverable:** A polished multi-branch business dashboard you can demo live in a client meeting.

---

### Weeks 3–4: Money Integrations

**Learn:**
- [ ] M-Pesa Daraja API: OAuth tokens, STK Push flow
- [ ] Callback handling & payment reconciliation (matching payments to orders)
- [ ] Stripe checkout + webhooks (for card/international payments)
- [ ] Webhook security: verifying signatures, idempotency (never record a payment twice)

**Build:**
- [ ] Working M-Pesa STK Push checkout in the dashboard
- [ ] Payments list with status (pending / completed / failed)
- [ ] Automatic reconciliation: payment → order marked paid
- [ ] Daily cash summary per branch

**Deliverable:** A client can pay on their phone and watch it appear in the dashboard. This sentence wins contracts: *"I integrate M-Pesa properly, with reconciliation."*

---

### Weeks 5–6: WhatsApp Business API

**Learn:**
- [ ] WhatsApp Cloud API (Meta) setup: app, phone number, tokens
- [ ] Template messages (order confirmations, payment receipts, stock alerts)
- [ ] Receiving messages: webhooks, parsing, replying
- [ ] Session (24-hour) window rules and pricing model

**Build:**
- [ ] Business takes orders / stock requests via WhatsApp into the dashboard
- [ ] Automatic order confirmation messages
- [ ] Low-stock alerts to the owner via WhatsApp
- [ ] Two-way chat view inside the dashboard

**Deliverable:** A business running orders through WhatsApp into one dashboard. Every SME owner lives on WhatsApp — this is the easiest sale you'll ever make.

---

### Weeks 7–8: Applied AI

**Learn:**
- [ ] LLM APIs (Claude / OpenAI): messages, streaming, structured outputs
- [ ] Embeddings & vector search (pgvector or a hosted vector DB)
- [ ] RAG pattern: chunk → embed → retrieve → answer with sources
- [ ] Guardrails: keeping the bot answering only from the business's data

**Build:**
- [ ] Support bot that answers from a business's own price list / documents
- [ ] Bot lives in WhatsApp and/or the dashboard
- [ ] Fallback to a human when confidence is low
- [ ] Log of unanswered questions (shows the owner what customers ask)

**Deliverable:** A demo you can show on your phone in a client meeting. This is your premium-pricing headline feature.

---

### Weeks 9–10: Reliability (Why Corporates Pay More)

**Learn:**
- [ ] Testing: unit (Vitest), end-to-end (Playwright) for critical flows
- [ ] Error monitoring (Sentry) and structured logging
- [ ] Backups: automated database backups, restore drill
- [ ] CI/CD: checks on every push, safe deploys, environment variables
- [ ] Security basics: OWASP top 10, rate limiting, input validation, secrets handling

**Build:**
- [ ] Tests covering payments and stock movements in the flagship
- [ ] Monitoring + alerts wired up
- [ ] One real backup → restore rehearsal
- [ ] Deployment checklist document (reusable per client)

**Deliverable:** You can say, with a straight face: *"It's tested, backed up, monitored, and I can prove it."* This is what separates KSh 100k freelancers from KSh 800k consultants.

---

### Weeks 11–12: Package and Sell

**Build the offers (fixed, outcome-based — not hourly):**
- [ ] Offer 1: "Stock & Sales System" — multi-branch dashboard, roles, reports
- [ ] Offer 2: "WhatsApp Ordering System" — orders via WhatsApp into the dashboard, M-Pesa
- [ ] Offer 3: "AI Support Assistant" — RAG bot on their documents, WhatsApp + web

For each offer, write:
- [ ] The business outcome in one sentence
- [ ] What's included / what's not
- [ ] Timeline
- [ ] Price anchor

**Case study (use RayMombasa):**
- [ ] Problem: two branches, no live view of stock, sales & cash
- [ ] System: what was built (roles, suppliers, reports, audit log)
- [ ] Result: "Two branches, one live view of stock, sales & cash"
- [ ] Screenshots + a 2-minute demo video

**Pricing move:**
- [ ] Current ceiling is KSh 300k — after this sprint, 300k becomes the *starting* conversation
- [ ] Every new client quotes ~20% higher than the last; let the market tell you when to stop

**Outreach:**
- [ ] List 20 operations-heavy businesses you can reach
- [ ] Show the phone demo first, talk tech never
- [ ] One conversation per day (already in the daily structure)

---

## 4. Weekly Review (30 min, end of each week)

- [ ] What shipped this week that a client could click?
- [ ] What did I document (screenshot, video, case-study note)?
- [ ] How many client conversations did I have?
- [ ] What is the ONE deliverable for the next 2-week block?
- [ ] Am I building, or am I tutorial-hopping?

---

## 5. What Success Looks Like at Week 12

You stop introducing yourself as "a developer who builds websites" and start saying:

> "I build stock, sales and WhatsApp ordering systems for distribution businesses — here's one running two branches live."

Same coding skills at the core. Completely different price bracket.

**Proof assets you should own by then:**

- [ ] 1 flagship demo system (dashboard + M-Pesa + WhatsApp + AI bot)
- [ ] 1 written case study (RayMombasa)
- [ ] 3 fixed outcome-based offers
- [ ] 1 demo video (under 3 minutes, on your phone)
- [ ] A reusable deployment & reliability checklist

---

## 6. Key Resources (official docs first)

- M-Pesa: Safaricom Daraja API documentation (developer.safaricom.co.ke)
- WhatsApp: Meta WhatsApp Cloud API documentation (developers.facebook.com)
- Payments (cards): Stripe documentation (docs.stripe.com)
- Database: PostgreSQL documentation + Prisma/Drizzle docs
- AI: Anthropic Claude API docs / OpenAI API docs; pgvector for embeddings storage
- Testing: Vitest and Playwright documentation
- Monitoring: Sentry documentation

---

*Plan created: October 2026. Review and adjust at the end of each 2-week block — the deliverables matter more than the schedule.*
