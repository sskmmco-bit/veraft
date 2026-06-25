import { NextResponse } from "next/server";
import { contactSchema, toFieldErrors } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: toFieldErrors(parsed.error) },
      { status: 400 },
    );
  }

  // Honeypot tripped — pretend success so bots don't learn anything.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  // TODO: deliver the message. Wire this to a real destination, e.g.:
  //   - Resend / Postmark / SendGrid email to hello@veraft.com
  //   - a CRM or ticketing webhook
  //   - a database row
  // For now we log on the server and return success. No email is actually sent.
  const { name, email, company, message } = parsed.data;
  console.info("[contact] new submission", {
    name,
    email,
    company: company || "—",
    length: message.length,
  });

  return NextResponse.json({ ok: true });
}
