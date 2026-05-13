"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const DESTINATION_EMAIL = "info@bekiratik.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duration, setDuration] = useState("");
  const [areas, setAreas] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      "Hidradenitis Suppurativa - Yeni İletişim Formu",
    );
    const body = encodeURIComponent(
      [
      `Ad Soyad: ${name || "-"}`,
      `Telefon: ${phone || "-"}`,
      `Mail: ${email || "-"}`,
      `Kaç yıldır yaşıyor: ${duration || "-"}`,
      `Vücutta hangi bölgelerde: ${areas || "-"}`,
      `Açıklama: ${message || "-"}`,
      ].join("\n"),
    );

    window.location.href = `mailto:${DESTINATION_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-[1.75rem] border border-sky-100 bg-sky-50/70 p-5"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-800">Ad Soyad</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-2xl border border-sky-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400"
            placeholder="Adınız"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-800">Telefon</span>
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="w-full rounded-2xl border border-sky-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400"
            placeholder="+90..."
          />
        </label>
      </div>

      <label className="space-y-2 block">
        <span className="text-sm font-medium text-slate-800">Mail</span>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-2xl border border-sky-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400"
          placeholder="ornek@mail.com"
        />
      </label>

      <label className="space-y-2 block">
        <span className="text-sm font-medium text-slate-800">
          Kaç yıldır bu hastalığı yaşıyor
        </span>
        <input
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
          className="w-full rounded-2xl border border-sky-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400"
          placeholder="Örn. 3 yıldır"
        />
      </label>

      <label className="space-y-2 block">
        <span className="text-sm font-medium text-slate-800">
          Vücudun hangi bölgelerinde var
        </span>
        <input
          value={areas}
          onChange={(event) => setAreas(event.target.value)}
          className="w-full rounded-2xl border border-sky-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400"
          placeholder="Örn. koltuk altı, kasık"
        />
      </label>

      <label className="space-y-2 block">
        <span className="text-sm font-medium text-slate-800">Açıklama</span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="min-h-[140px] w-full rounded-2xl border border-sky-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400"
          placeholder="Kısa bir açıklama yazın..."
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
        >
          Gönder
        </button>
        <a
          href="tel:+905324615997"
          className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-sky-900 transition hover:bg-sky-100"
        >
          Direkt ara
        </a>
      </div>
    </form>
  );
}
