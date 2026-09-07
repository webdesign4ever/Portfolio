import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let input: { name?: unknown; email?: unknown; message?: unknown };
  try { input = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10 || name.length > 100 || message.length > 5000) return NextResponse.json({ error: "Please provide a valid name, email, and message." }, { status: 400 });
  const key = process.env.RESEND_API_KEY; const from = process.env.RESEND_FROM_EMAIL; const recipient = process.env.CONTACT_TO_EMAIL || "rajamoazzam789@gmail.com";
  if (!key || !from) return NextResponse.json({ error: "Email is not configured yet. Please use the direct email link instead." }, { status: 503 });
  const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: [recipient], reply_to: email, subject: `Portfolio message from ${name}`, text: `${message}\n\nFrom: ${name} <${email}>` }) });
  if (!response.ok) {
    const payload = await response.json().catch(() => null) as { message?: unknown; error?: unknown } | null;
    const providerMessage = typeof payload?.message === "string" ? payload.message : typeof payload?.error === "string" ? payload.error : "The email service could not send your message. Please try the direct email link.";
    // Preserve client-correctable Resend errors (such as an unverified sender
    // domain) instead of masking every provider response as a generic 502.
    return NextResponse.json({ error: providerMessage }, { status: response.status >= 400 && response.status < 500 ? response.status : 502 });
  }
  return NextResponse.json({ ok: true });
}
