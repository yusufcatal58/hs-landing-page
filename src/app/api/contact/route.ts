import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as {
      name?: string;
      phone?: string;
      email?: string;
      duration?: string;
      areas?: string[];
      message?: string;
    };

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;
    const destinationEmail =
      process.env.CONTACT_TO_EMAIL || "info@bekiratik.com";

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
      return NextResponse.json(
        {
          message:
            "Mail ayarı eksik. SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS ve SMTP_FROM tanımlanmalı.",
        },
        { status: 500 },
      );
    }

    const areas = Array.isArray(payload.areas) ? payload.areas : [];
    const subject = "Hidradenitis Suppurativa - Yeni iletişim formu";
    const text = [
      `Ad Soyad: ${payload.name || "-"}`,
      `Telefon: ${payload.phone || "-"}`,
      `Mail: ${payload.email || "-"}`,
      `Kaç yıldır yaşıyor: ${payload.duration || "-"}`,
      `Vücutta hangi bölgelerde: ${areas.join(", ") || "-"}`,
      `Açıklama: ${payload.message || "-"}`,
    ].join("\n");

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      authMethod: "LOGIN",
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
      requireTLS: true,
      tls: {
        minVersion: "TLSv1.2",
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: smtpFrom,
      to: destinationEmail,
      replyTo: payload.email || smtpFrom,
      subject,
      text,
      html: text
        .split("\n")
        .map((line) => `<p>${escapeHtml(line)}</p>`)
        .join(""),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send failed", error);
    const message =
      error instanceof Error ? error.message : "Bilinmeyen hata";
    return NextResponse.json({ message }, { status: 500 });
  }
}
