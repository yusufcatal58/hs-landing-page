import Link from "next/link";

type LanguageSwitchProps = {
  href: string;
  label?: string;
  ariaLabel: string;
  flag: "tr" | "en";
  showLabel?: boolean;
};

function TurkishFlag() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 900 600"
      className="h-7 w-10 overflow-hidden rounded-[0.45rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28)]"
    >
      <rect width="900" height="600" fill="#E30A17" />
      <circle cx="330" cy="300" r="155" fill="#fff" />
      <circle cx="386" cy="300" r="124" fill="#E30A17" />
      <polygon
        points="570,222 588.8,274.1 644.2,275.9 600.4,309.9 615.8,363.1 570,332 524.2,363.1 539.6,309.9 495.8,275.9 551.2,274.1"
        fill="#fff"
      />
    </svg>
  );
}

function EnglishFlag() {
  return (
    <span className="relative block h-6 w-8 overflow-hidden rounded-[0.45rem] bg-[#012169] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.22)]">
      <span className="absolute left-1/2 top-0 h-full w-1.5 -translate-x-1/2 bg-white" />
      <span className="absolute left-0 top-1/2 h-1.5 w-full -translate-y-1/2 bg-white" />
      <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[#c8102e]" />
      <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-[#c8102e]" />
      <span className="absolute -left-1 top-1/2 h-0.5 w-11 -translate-y-1/2 rotate-[34deg] bg-white" />
      <span className="absolute -left-1 top-1/2 h-0.5 w-11 -translate-y-1/2 -rotate-[34deg] bg-white" />
    </span>
  );
}

export function LanguageSwitch({
  href,
  label,
  ariaLabel,
  flag,
  showLabel = true,
}: LanguageSwitchProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-[0.95rem] border border-sky-100 bg-white text-sm font-semibold text-sky-900 shadow-[0_8px_20px_rgba(59,130,246,0.06)] transition hover:border-sky-300 hover:bg-sky-50 ${
        showLabel ? "px-2.5 sm:px-3" : "w-14 px-0"
      }`}
    >
      {flag === "tr" ? <TurkishFlag /> : <EnglishFlag />}
      {showLabel && label ? <span className="hidden xl:inline">{label}</span> : null}
    </Link>
  );
}
