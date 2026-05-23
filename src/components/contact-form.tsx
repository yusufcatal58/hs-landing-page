"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import {
  GOOGLE_ADS_CONVERSIONS,
  trackGoogleAdsConversion,
} from "../lib/google-ads";
import { ConversionLink } from "./conversion-link";

const AREA_OPTIONS = [
  "Koltuk altı",
  "Kasık",
  "Kalça",
  "Meme altı",
  "İç bacak",
  "Genital bölge",
  "Göbek çevresi",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [isAreaPickerOpen, setIsAreaPickerOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function toggleArea(area: string) {
    setSelectedAreas((current) =>
      current.includes(area)
        ? current.filter((item) => item !== area)
        : [...current, area],
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitState("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          duration,
          areas: selectedAreas,
          message,
        }),
      });

      const data: { message?: string } = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Form gönderilemedi.");
      }

      trackGoogleAdsConversion(GOOGLE_ADS_CONVERSIONS.contactForm);
      setSubmitState("success");
      setFeedback("Formunuz bize ulaştı. En kısa sürede dönüş yapılacak.");
      setName("");
      setPhone("");
      setEmail("");
      setDuration("");
      setSelectedAreas([]);
      setMessage("");
      setIsAreaPickerOpen(false);
    } catch (error) {
      setSubmitState("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Form gönderilemedi. Lütfen daha sonra tekrar deneyin.",
      );
    }
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

      <div className="space-y-2">
        <span className="text-sm font-medium text-slate-800">
          Vücudun hangi bölgelerinde var
        </span>
        <button
          type="button"
          onClick={() => setIsAreaPickerOpen((current) => !current)}
          className="flex min-h-[54px] w-full items-center justify-between gap-3 rounded-2xl border border-sky-200 bg-white px-4 py-3 text-left text-slate-950 outline-none transition hover:border-sky-300 focus:border-sky-400"
          aria-expanded={isAreaPickerOpen}
        >
          <span className="flex flex-wrap gap-2">
            {selectedAreas.length > 0 ? (
              selectedAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-900"
                >
                  {area}
                </span>
              ))
            ) : (
              <span className="text-slate-400">Bölge seçin</span>
            )}
          </span>
          <span className="shrink-0 text-sm font-semibold text-sky-700">
            Seç
          </span>
        </button>

        {isAreaPickerOpen && (
          <div className="rounded-[1.5rem] border border-sky-200 bg-white p-4 shadow-[0_18px_42px_rgba(59,130,246,0.12)]">
            <div className="flex flex-wrap gap-3">
              {AREA_OPTIONS.map((area) => {
                const isSelected = selectedAreas.includes(area);

                return (
                  <button
                    key={area}
                    type="button"
                    onClick={() => toggleArea(area)}
                    aria-pressed={isSelected}
                    className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                      isSelected
                        ? "border-sky-600 bg-sky-700 text-white shadow-sm"
                        : "border-sky-200 bg-sky-50 text-sky-900 hover:border-sky-300 hover:bg-sky-100"
                    }`}
                  >
                    {area}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setIsAreaPickerOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
            >
              Tamam
            </button>
          </div>
        )}
      </div>

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
          disabled={submitState === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
        >
          {submitState === "sending" ? "Gönderiliyor..." : "Gönder"}
        </button>
        <ConversionLink
          href="tel:+905324615997"
          sendTo={GOOGLE_ADS_CONVERSIONS.phoneCall}
          className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-sky-900 transition hover:bg-sky-100"
        >
          Direkt ara
        </ConversionLink>
      </div>

      {feedback ? (
        <p
          className={`text-sm font-medium ${submitState === "success" ? "text-emerald-700" : "text-rose-700"}`}
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
