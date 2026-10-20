import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, message } = body ?? {};
    if (!name?.trim() || !email?.trim() || !service || !message?.trim()) {
      return NextResponse.json({ error: "Please fill in your name, email, service and project details." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    // TODO: Wire this to your inbox / CRM — e.g. Resend, Formspree, or an email service:
    // await resend.emails.send({ from: "website@openroadsoftware.com", to: "hello@openroadsoftware.com", subject: `New enquiry: ${service}`, ... })
    console.log("[Openroad] New contact enquiry:", { name, email, service, company: body.company, budget: body.budget, timeline: body.timeline, message });
    return NextResponse.json({ ok: true, message: "Thanks! We'll reply within one business day." });
  } catch {
    return NextResponse.json({ error: "Invalid request. Please try again or email hello@openroadsoftware.com." }, { status: 400 });
  }
}
