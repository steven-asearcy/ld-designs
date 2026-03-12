import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schemas/contact";
import { verifyTurnstileToken } from "@/lib/turnstile";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter: max 5 requests per IP per 15 minutes
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  try {
    // Rate limiting by IP
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot check — if the hidden field has a value, it's a bot
    if (body.website) {
      // Return success to avoid tipping off bots
      return NextResponse.json({ success: true });
    }

    // Verify Turnstile token
    const turnstile = await verifyTurnstileToken(body.turnstileToken, ip);
    if (!turnstile.success) {
      return NextResponse.json(
        { error: turnstile.error },
        { status: 403 }
      );
    }

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = result.data;

    // Sanitize: strip any HTML tags from user input
    const sanitize = (str: string) => str.replace(/<[^>]*>/g, "");

    const emailLines = [
      `Name: ${sanitize(name)}`,
      `Email: ${email}`,
    ];
    if (phone) emailLines.push(`Phone: ${sanitize(phone)}`);
    emailLines.push("", "Message:", sanitize(message));

    await resend.emails.send({
      from: "Lisa Dinkins Designs <noreply@lisadinkinsdesigns.com>",
      to: ["Support@lisadinkinsdesigns.com", "searcy.stevena@gmail.com"],
      replyTo: email,
      subject: `New Contact Form Message from ${sanitize(name)}`,
      text: emailLines.join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch {
    console.error("Contact form error");
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
