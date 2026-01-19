import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  phone?: string;
  cell?: string;
  message?: string;
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
    const body = (await request.json()) as ContactPayload;

    const fullName =
      body.name ||
      [body.firstName, body.lastName].filter(Boolean).join(" ") ||
      "";
    const email = (body.email || "").trim();
    const phone = (body.phone || body.cell || "").trim();
    const message = (body.message || "").trim();
    const source = (body.source || "website").trim();

    const whatsappMessage = [
      "Hi A Plus Driving School, I would like to contact you.",
      fullName ? `Name: ${fullName}` : null,
      phone ? `Phone: ${phone}` : null,
      email ? `Email: ${email}` : null,
      message ? `Message: ${message}` : null,
      source ? `Source: ${source}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

    if (!isEmailConfigured()) {
      return NextResponse.json(
        {
          ok: true,
          emailSent: false,
          whatsappUrl,
          message:
            "Email delivery is not configured on this server yet. You can still send the message via WhatsApp.",
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
      replyTo: email || undefined,
      to,
      subject: `New message from A Plus Driving School website`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6">
          <h2 style="margin:0 0 12px 0">New website message</h2>
          <p><strong>Name:</strong> ${fullName || "N/A"}</p>
          <p><strong>Email:</strong> ${email || "N/A"}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Source:</strong> ${source || "website"}</p>
          <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
          <p style="white-space:pre-wrap;margin:0">${message || "(no message provided)"}</p>
          <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
          <p style="margin:0"><strong>WhatsApp fallback link:</strong> <a href="${whatsappUrl}">${whatsappUrl}</a></p>
        </div>
      `,
    });

    if (email) {
      const replySubject = "Thanks for contacting A Plus Driving School";
      const replyHtml = `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.7">
          <p>Hi${fullName ? ` ${fullName}` : ""},</p>
          <p>Thank you for contacting A Plus Driving School. We have received your message and we will respond as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <p style="white-space:pre-wrap">${message || "(no message provided)"}</p>
          <p>If you need an immediate response, you can WhatsApp us here:</p>
          <p><a href="${whatsappUrl}">${whatsappUrl}</a></p>
          <p>Warm regards,<br/>A Plus Driving School</p>
        </div>
      `;

      await transporter.sendMail({
        from: fromAddress,
        to: email,
        subject: replySubject,
        html: replyHtml,
      });
    }

    return NextResponse.json(
      { ok: true, emailSent: true, whatsappUrl, message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Failed to send message." },
      { status: 500 }
    );
  }
}
