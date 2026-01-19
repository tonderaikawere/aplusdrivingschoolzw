import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type SubscribePayload = {
  email?: string;
  name?: string;
  source?: string;
};

const getEnv = (key: string) => process.env[key] ?? "";

const isEmailConfigured = () => {
  return Boolean(
    getEnv("EMAIL_HOST") &&
      getEnv("EMAIL_PORT") &&
      getEnv("EMAIL_USERNAME") &&
      getEnv("EMAIL_PASSWORD") &&
      getEnv("EMAIL_TO")
  );
};

const buildTransporter = () => {
  const port = Number(getEnv("EMAIL_PORT") || 465);
  const secure = getEnv("EMAIL_SECURE")
    ? getEnv("EMAIL_SECURE") === "true"
    : port === 465;

  return nodemailer.createTransport({
    host: getEnv("EMAIL_HOST"),
    port,
    secure,
    auth: {
      user: getEnv("EMAIL_USERNAME"),
      pass: getEnv("EMAIL_PASSWORD"),
    },
  });
};

const buildWhatsAppUrl = (message: string) => {
  const phoneNumberE164 = getEnv("WHATSAPP_NUMBER") || "+263772462823";
  const phone = phoneNumberE164.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as SubscribePayload;
    const email = (body.email || "").trim();
    const name = (body.name || "").trim();
    const source = (body.source || "footer").trim();

    if (!email) {
      return NextResponse.json({ ok: false, message: "Email is required." }, { status: 400 });
    }

    const whatsappUrl = buildWhatsAppUrl(
      [
        "Hi A Plus Driving School, please subscribe me for updates.",
        name ? `Name: ${name}` : null,
        email ? `Email: ${email}` : null,
        source ? `Source: ${source}` : null,
      ]
        .filter(Boolean)
        .join("\n")
    );

    if (!isEmailConfigured()) {
      return NextResponse.json(
        {
          ok: true,
          emailSent: false,
          whatsappUrl,
          message:
            "Subscription received. Email delivery is not configured on this server yet. You can also subscribe via WhatsApp.",
        },
        { status: 200 }
      );
    }

    const transporter = buildTransporter();
    const to = getEnv("EMAIL_TO")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const fromAddress = getEnv("EMAIL_FROM") || getEnv("EMAIL_USERNAME");

    await transporter.sendMail({
      from: fromAddress,
      replyTo: email,
      to,
      subject: "New website subscription",
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6">
          <h2 style="margin:0 0 12px 0">New subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Name:</strong> ${name || "N/A"}</p>
          <p><strong>Source:</strong> ${source}</p>
          <p style="margin:0"><strong>WhatsApp fallback link:</strong> <a href="${whatsappUrl}">${whatsappUrl}</a></p>
        </div>
      `,
    });

    await transporter.sendMail({
      from: fromAddress,
      to: email,
      subject: "Thanks for subscribing to A Plus Driving School updates",
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.7">
          <p>Hi${name ? ` ${name}` : ""},</p>
          <p>Thank you for subscribing to A Plus Driving School updates.</p>
          <p>We’ll notify you about important announcements, the upcoming site and app launch, and new learning features such as highway code study, provisional test practice, notes, and progress tracking.</p>
          <p>If you want to subscribe via WhatsApp or speak to an instructor, you can message us here:</p>
          <p><a href="${whatsappUrl}">${whatsappUrl}</a></p>
          <p>Warm regards,<br/>A Plus Driving School</p>
        </div>
      `,
    });

    return NextResponse.json(
      { ok: true, emailSent: true, whatsappUrl, message: "Subscribed successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ ok: false, message: "Failed to subscribe." }, { status: 500 });
  }
}
