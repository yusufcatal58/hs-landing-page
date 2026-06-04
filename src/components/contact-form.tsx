"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import {
  GOOGLE_ADS_CONVERSIONS,
  trackGoogleAdsConversion,
} from "../lib/google-ads";
import { ConversionLink } from "./conversion-link";

const DEFAULT_AREA_OPTIONS = [
  "Koltuk altı",
  "Kasık",
  "Kalça",
  "Meme altı",
  "İç bacak",
  "Genital bölge",
  "Göbek çevresi",
];

type ContactFormLabels = {
  name: string;
  namePlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  duration: string;
  durationPlaceholder: string;
  areas: string;
  areaPlaceholder: string;
  areaSelect: string;
  areaDone: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  call: string;
  success: string;
  errors: {
    name: string;
    phone: string;
    duration: string;
    areas: string;
    submit: string;
    unknown: string;
  };
};

const DEFAULT_LABELS: ContactFormLabels = {
  name: "Ad Soyad *",
  namePlaceholder: "Adınız",
  phone: "Telefon *",
  phonePlaceholder: "+90...",
  email: "Mail",
  emailPlaceholder: "ornek@mail.com",
  duration: "Kaç yıldır bu hastalığı yaşıyor *",
  durationPlaceholder: "Örn. 3 yıldır",
  areas: "Vücudun hangi bölgelerinde var *",
  areaPlaceholder: "Bölge seçin",
  areaSelect: "Seç",
  areaDone: "Tamam",
  message: "Açıklama",
  messagePlaceholder: "Kısa bir açıklama yazın...",
  submit: "Gönder",
  sending: "Gönderiliyor...",
  call: "Direkt ara",
  success: "Formunuz bize ulaştı. En kısa sürede dönüş yapılacak.",
  errors: {
    name: "Lütfen ad soyad alanını doldurun.",
    phone: "Lütfen telefon alanını doldurun.",
    duration: "Lütfen hastalığı kaç yıldır yaşadığınızı yazın.",
    areas: "Lütfen en az bir bölge seçin.",
    submit: "Form gönderilemedi.",
    unknown: "Form gönderilemedi. Lütfen daha sonra tekrar deneyin.",
  },
};

type ContactFormProps = {
  areaOptions?: string[];
  labels?: Partial<Omit<ContactFormLabels, "errors">> & {
    errors?: Partial<ContactFormLabels["errors"]>;
  };
  language?: "tr" | "en";
};

function FieldLabel({ label }: { label: string }) {
  const trimmed = label.trim();
  const isRequired = trimmed.endsWith("*");
  const text = isRequired ? trimmed.slice(0, -1).trim() : trimmed;

  return (
    <span className="text-sm font-semibold leading-6 text-slate-800">
      {text}
      {isRequired ? <span className="text-sky-700">*</span> : null}
    </span>
  );
}

const fieldClassName =
  "w-full rounded-[1.15rem] border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100";

export function ContactForm({
  areaOptions = DEFAULT_AREA_OPTIONS,
  labels,
  language = "tr",
}: ContactFormProps = {}) {
  const copy = {
    ...DEFAULT_LABELS,
    ...labels,
    errors: {
      ...DEFAULT_LABELS.errors,
      ...labels?.errors,
    },
  };
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

  function validateRequiredFields() {
    if (!name.trim()) {
      return copy.errors.name;
    }

    if (!phone.trim()) {
      return copy.errors.phone;
    }

    if (!duration.trim()) {
      return copy.errors.duration;
    }

    if (selectedAreas.length === 0) {
      return copy.errors.areas;
    }

    return "";
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationMessage = validateRequiredFields();

    if (validationMessage) {
      setSubmitState("error");
      setFeedback(validationMessage);
      return;
    }

    setSubmitState("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email,
          duration: duration.trim(),
          areas: selectedAreas,
          message,
          language,
        }),
      });

      const data: { message?: string } = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || copy.errors.submit);
      }

      trackGoogleAdsConversion(GOOGLE_ADS_CONVERSIONS.contactForm);
      setSubmitState("success");
      setFeedback(copy.success);
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
          : copy.errors.unknown,
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <FieldLabel label={copy.name} />
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            aria-required="true"
            autoComplete="name"
            className={fieldClassName}
            placeholder={copy.namePlaceholder}
          />
        </label>
        <label className="space-y-2">
          <FieldLabel label={copy.phone} />
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
            aria-required="true"
            autoComplete="tel"
            inputMode="tel"
            className={fieldClassName}
            placeholder={copy.phonePlaceholder}
          />
        </label>
      </div>

      <label className="space-y-2 block">
        <FieldLabel label={copy.email} />
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          autoComplete="email"
          className={fieldClassName}
          placeholder={copy.emailPlaceholder}
        />
      </label>

      <label className="space-y-2 block">
        <FieldLabel label={copy.duration} />
        <input
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
          required
          aria-required="true"
          className={fieldClassName}
          placeholder={copy.durationPlaceholder}
        />
      </label>

      <div className="space-y-2">
        <FieldLabel label={copy.areas} />
        <button
          type="button"
          onClick={() => setIsAreaPickerOpen((current) => !current)}
          className="flex min-h-[52px] w-full items-center justify-between gap-3 rounded-[1.15rem] border border-slate-200 bg-white px-4 py-3 text-left text-slate-950 outline-none transition hover:border-sky-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
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
              <span className="text-slate-400">{copy.areaPlaceholder}</span>
            )}
          </span>
          <span className="shrink-0 text-sm font-semibold text-sky-700">
            {copy.areaSelect}
          </span>
        </button>

        {isAreaPickerOpen && (
          <div className="rounded-[1.2rem] border border-slate-200 bg-white p-3 shadow-[0_12px_28px_rgba(15,23,42,0.06)]">
            <div className="flex flex-wrap gap-3">
              {areaOptions.map((area) => {
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
                        : "border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50"
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
              {copy.areaDone}
            </button>
          </div>
        )}
      </div>

      <label className="space-y-2 block">
        <FieldLabel label={copy.message} />
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${fieldClassName} min-h-[120px] resize-none`}
          placeholder={copy.messagePlaceholder}
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={submitState === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
        >
          {submitState === "sending" ? copy.sending : copy.submit}
        </button>
        <ConversionLink
          href="tel:+905324615997"
          sendTo={GOOGLE_ADS_CONVERSIONS.phoneCall}
          className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-sky-900 transition hover:bg-sky-100"
        >
          {copy.call}
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
