import { NextResponse } from "next/server";
import { Resend } from "resend";
import { services } from "@/lib/data";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY } from "@/lib/contact";

const serviceLabels: Record<string, string> = {
  ...Object.fromEntries(services.map((s) => [s.slug, s.title])),
  "not-sure": "Not sure yet — advise me",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function clean(value: unknown, max = 5000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: `Invalid request. Please try again, email ${CONTACT_EMAIL}, or WhatsApp ${WHATSAPP_DISPLAY}.` },
      { status: 400 },
    );
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 254);
  const service = clean(body.service, 80);
  const message = clean(body.message);
  const company = clean(body.company, 160);
  const budget = clean(body.budget, 80);
  const timeline = clean(body.timeline, 120);

  if (!name || !email || !service || !message) {
    return NextResponse.json({ error: "Please fill in your name, email, service and project details." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Never pretend an enquiry was delivered when email isn't configured.
    console.error("[Openroad] RESEND_API_KEY is not configured; contact enquiry could not be emailed.", { name, email, service });
    return NextResponse.json(
      { error: `Our form email isn't configured yet. Please email ${CONTACT_EMAIL} or WhatsApp us on ${WHATSAPP_DISPLAY} and we'll help right away.` },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL || "Openroad Website <onboarding@resend.dev>";
  const serviceLabel = serviceLabels[service] || service;

  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Email", email],
    ["Company / brand", company || "—"],
    ["Service needed", serviceLabel],
    ["Budget range", budget || "—"],
    ["Ideal timeline", timeline || "—"],
  ];

  const text = [
    "New project enquiry from the Openroad website",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "About the project:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#0A1B33;line-height:1.6;max-width:640px">
      <h1 style="font-size:22px;margin:0 0 16px">New project enquiry from the Openroad website</h1>
      <table style="border-collapse:collapse;width:100%;margin-bottom:20px">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="border:1px solid #dbe5f0;padding:9px 12px;font-weight:bold;background:#f3f7fb;width:170px">${escapeHtml(label)}</td>
            <td style="border:1px solid #dbe5f0;padding:9px 12px">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <h2 style="font-size:16px;margin:0 0 8px">About the project</h2>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
    </div>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New project enquiry — ${serviceLabel} (${name})`,
      text,
      html,
    });

    if (error) {
      console.error("[Openroad] Resend failed to send contact enquiry:", error);
      return NextResponse.json(
        { error: `We couldn't send your message just now. Please email ${CONTACT_EMAIL} or WhatsApp us on ${WHATSAPP_DISPLAY}.` },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, message: "Thanks! Your message has been emailed to us — we'll reply within one business day." });
  } catch (err) {
    console.error("[Openroad] Contact email error:", err);
    return NextResponse.json(
      { error: `We couldn't send your message just now. Please email ${CONTACT_EMAIL} or WhatsApp us on ${WHATSAPP_DISPLAY}.` },
      { status: 502 },
    );
  }
}
