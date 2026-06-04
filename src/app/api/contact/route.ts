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

function formatAreas(areas: string[] | undefined) {
  return Array.isArray(areas) && areas.length > 0 ? areas.join(", ") : "-";
}

function normalizeText(value: string | undefined) {
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(payload: {
  name?: string;
  phone?: string;
  duration?: string;
  areas?: string[];
}) {
  if (!normalizeText(payload.name)) {
    return "Ad soyad alanı zorunludur.";
  }

  if (!normalizeText(payload.phone)) {
    return "Telefon alanı zorunludur.";
  }

  if (!normalizeText(payload.duration)) {
    return "Hastalık süresi alanı zorunludur.";
  }

  if (!Array.isArray(payload.areas) || payload.areas.length === 0) {
    return "En az bir bölge seçilmelidir.";
  }

  return "";
}

async function sendToMezesoft(payload: {
  name?: string;
  phone?: string;
  email?: string;
  duration?: string;
  areas?: string[];
  message?: string;
  language?: string;
}) {
  const apiUrl =
    process.env.MEZESOFT_API_URL || "https://medical.mezesoft.com/api/form";
  const landingId = Number(process.env.MEZESOFT_LANDING_ID || "180");
  const landingName =
    process.env.MEZESOFT_LANDING_NAME || "Hidradenitis Suppurativa-Yusuf";
  const landingUrl =
    process.env.MEZESOFT_LANDING_URL ||
    "https://hidradenitis-suppurativa.bekiratik.com/";
  const token = process.env.MEZESOFT_TOKEN || "";

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(token ? { "X-Token": token } : {}),
        ...(token ? { "X-Landing-Token": token } : {}),
      },
      body: JSON.stringify({
        name: payload.name || "",
        phone: payload.phone || "",
        email: payload.email || "",
        duration: payload.duration || "",
        areas: formatAreas(payload.areas),
        areas_list: Array.isArray(payload.areas) ? payload.areas : [],
        message: payload.message || "",
        language: payload.language || "tr",
        landing_id: landingId,
        landing_name: landingName,
        landing_url: landingUrl,
        token: token || undefined,
      }),
      signal: controller.signal,
    });

    const responseText = await response.text();

    if (!response.ok) {
      throw new Error(
        `Mezesoft CRM yanıt vermedi (${response.status}). ${responseText}`,
      );
    }
  } finally {
    clearTimeout(timeout);
  }
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
      language?: string;
    };

    const validationMessage = validatePayload(payload);

    if (validationMessage) {
      return NextResponse.json({ message: validationMessage }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;
    const destinationEmail =
      process.env.CONTACT_TO_EMAIL || "info@bekiratik.com";

    await sendToMezesoft(payload);

    const areas = Array.isArray(payload.areas) ? payload.areas : [];
    const subject = "Hidradenitis Suppurativa - Yeni iletişim formu";
    const text = [
      `Ad Soyad: ${normalizeText(payload.name)}`,
      `Telefon: ${normalizeText(payload.phone)}`,
      `Mail: ${normalizeText(payload.email) || "-"}`,
      `Dil: ${normalizeText(payload.language) || "tr"}`,
      `Kaç yıldır yaşıyor: ${normalizeText(payload.duration)}`,
      `Vücutta hangi bölgelerde: ${areas.join(", ") || "-"}`,
      `Açıklama: ${normalizeText(payload.message) || "-"}`,
    ].join("\n");

    if (smtpHost && smtpUser && smtpPass && smtpFrom) {
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
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send failed", error);
    const message =
      error instanceof Error ? error.message : "Bilinmeyen hata";
    return NextResponse.json({ message }, { status: 500 });
  }
}
