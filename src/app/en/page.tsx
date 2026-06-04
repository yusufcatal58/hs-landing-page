import type { Metadata } from "next";
import Image from "next/image";
import { ClinicalExampleReveal } from "../../components/clinical-example-reveal";
import { ContactForm } from "../../components/contact-form";
import { ConversionLink } from "../../components/conversion-link";
import { DocumentLanguage } from "../../components/document-language";
import { LanguageSwitch } from "../../components/language-switch";
import { VideoSection } from "../../components/video-section";
import { GOOGLE_ADS_CONVERSIONS } from "../../lib/google-ads";

export const metadata: Metadata = {
  title: "Hidradenitis Suppurativa Care in Turkey | Prof. Dr. Bekir Atik",
  description:
    "English landing page for international Hidradenitis Suppurativa patients seeking an expert surgical consultation in Turkey.",
  alternates: {
    canonical: "/en",
    languages: {
      tr: "/",
      en: "/en",
    },
  },
};

const phoneNumber = "+90 532 461 59 97";
const whatsappUrl = "https://wa.me/905324615997";

const navItems = [
  { label: "Guide", href: "#guide" },
  { label: "About", href: "#about" },
  { label: "Symptoms", href: "#symptoms" },
  { label: "Approach", href: "#approach" },
  { label: "Stages", href: "#stages" },
  { label: "Stories", href: "#videolar" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#location-contact" },
];

const areaOptions = [
  "Armpits",
  "Groin",
  "Buttocks",
  "Under breasts",
  "Inner thighs",
  "Genital area",
  "Around belly button",
];

const symptoms = [
  "Painful nodules",
  "Recurring abscesses",
  "Drainage and odor",
  "Tunnel formation",
  "Scarring and firmness",
  "Movement limitation",
];

const flowSteps = [
  {
    step: "1",
    title: "Sweat gland blockage",
    text: "Blocked sweat-gland areas may trigger local inflammation.",
  },
  {
    step: "2",
    title: "Recurring flare-ups",
    text: "Painful nodules and abscesses may appear in the same area.",
  },
  {
    step: "3",
    title: "Tunnels under the skin",
    text: "Persistent inflammation may create sinus tracts beneath the skin.",
  },
  {
    step: "4",
    title: "Scarring",
    text: "Repeated flare-ups can lead to firmness, scars and restricted movement.",
  },
];

const profileItems = [
  { label: "Often starts after puberty", icon: "clock" },
  { label: "Common between 20 and 40", icon: "calendar" },
  { label: "More frequent in women", icon: "female" },
  { label: "Family history may matter", icon: "dna" },
  { label: "Smoking and weight can worsen it", icon: "risk" },
];

const approachCards = [
  {
    title: "Early assessment",
    text: "Painful nodules in the armpits, groin or any recurring body area should be assessed early by a specialist.",
  },
  {
    title: "Combined planning",
    text: "In early stages, clinical follow-up and surgical planning can be considered together after diagnosis.",
  },
  {
    title: "Advanced-stage surgery",
    text: "In advanced stages, surgical management often becomes the main option for diseased tissue.",
  },
];

const hurleyCards = [
  {
    title: "Hurley I",
    tone: "from-emerald-50 to-white",
    accent: "text-emerald-700",
    points: ["Single or limited abscesses", "No tunnels", "Minimal scarring may occur"],
  },
  {
    title: "Hurley II",
    tone: "from-amber-50 to-white",
    accent: "text-amber-700",
    points: ["Recurring abscesses", "Limited tunnels", "Moderate scarring"],
  },
  {
    title: "Hurley III",
    tone: "from-rose-50 to-white",
    accent: "text-rose-700",
    points: ["Widespread disease", "Connected tunnels", "Marked scarring and inflammation"],
  },
];

const videoCards = [
  { title: "Hidradenitis Suppurativa and nutrition", videoId: "3Aril8rIe9A" },
  { title: "A real patient story after years of pain", videoId: "tSKRAVkez88" },
  { title: "A patient shares life after surgery", videoId: "U0Dd_7dE3y8" },
  { title: "Seven months of relief after HS care", videoId: "nH1KwQyWKag" },
  { title: "A patient who could not sit in a car", videoId: "Oobqr8RWPwo" },
  { title: "Six years of pain, now much happier", videoId: "oMiq6k3zV6M" },
  { title: "Long-lasting pain improved after care", videoId: "16lBh53XDA8" },
  { title: "A Hidradenitis Suppurativa patient explains", videoId: "5V8UWcTzPEI" },
  { title: "Israil Bey shares his recovery journey", videoId: "fQU_RauIEBU" },
  { title: "Mr. Sahin from Estonia shares his story", videoId: "XxO1M4OjrWo" },
  { title: "Ozan Bey's Hidradenitis Suppurativa journey", videoId: "tn4FaDbzcYw" },
  { title: "Symptoms and support methods in HS", videoId: "hPwxl9pisFs" },
  { title: "Hidradenitis Suppurativa - relief is possible", videoId: "NhRPMghHapQ" },
  { title: "Hidradenitis Suppurativa explained", videoId: "LtQf94fnevI" },
  { title: "Hidradenitis Suppurativa patient conversation", videoId: "qEFskZUwdMM" },
  { title: "Hidradenitis Suppurativa patient experience", videoId: "Vbf2ZJNa7Gs" },
];

const shortCards = [
  { title: "HS and nutrition", videoId: "eRjHGX_XbkM" },
  { title: "Will scars remain after surgery?", videoId: "Vjxn-0o-J7I" },
  { title: "Who follows the HS process?", videoId: "ObNFUhmESC4" },
  { title: "Can HS go away by itself?", videoId: "vsejevqozgY" },
  { title: "Is HS the same as acne?", videoId: "Jld2uFJVykE" },
  { title: "Is HS genetic?", videoId: "EOLWFiegxN0" },
  { title: "Can support methods help?", videoId: "nn9LAkxMyxY" },
  { title: "When is surgery considered?", videoId: "IXTJntmusvs" },
  { title: "Patient comment after surgery", videoId: "5V8UWcTzPEI" },
  { title: "Do scars remain?", videoId: "8bBG6qx59C4" },
  { title: "Can armpit applications help?", videoId: "zfrqT02m7Zs" },
  { title: "Does HS affect only women?", videoId: "jS0cHvToDuM" },
  { title: "I had almost given up", videoId: "fQU_RauIEBU" },
  { title: "Is pain unavoidable?", videoId: "e9__Q99lXb8" },
  { title: "Does HS only occur in the armpit?", videoId: "3gpTBmyXJ5A" },
  { title: "Is skin grafting the only option?", videoId: "a3JbEMMnQoo" },
];

const reviewCards = [
  {
    name: "Deni bar",
    role: "Local Guide",
    date: "2 months ago",
    quote: "The consultation felt reassuring, the team was attentive and the process was calm.",
  },
  {
    name: "Arda Aktugan",
    role: "6 reviews",
    date: "4 months ago",
    quote: "The Hidradenitis Suppurativa process was explained clearly and step by step.",
  },
  {
    name: "Sudenaz Guler",
    role: "3 reviews",
    date: "4 months ago",
    quote: "The medical knowledge and patient approach gave real confidence.",
  },
  {
    name: "Deni bar",
    role: "Local Guide",
    date: "2 months ago",
    quote: "Communication was fast, the team was organized and everything was clear.",
  },
  {
    name: "Arda Aktugan",
    role: "6 reviews",
    date: "4 months ago",
    quote: "It was a reassuring consultation and the whole process was explained carefully.",
  },
];

const faqItems = [
  {
    question: "What is Hidradenitis Suppurativa?",
    answer:
      "Hidradenitis Suppurativa is a chronic, recurring inflammatory skin condition. It often appears in areas exposed to friction, such as the armpits, groin, under the breasts, buttocks and inner thighs. It may cause painful nodules, abscesses, drainage, odor, scarring and tunnel-like tracts under the skin.",
  },
  {
    question: "Is HS contagious?",
    answer:
      "No. HS is not contagious and it is not caused by poor hygiene. It cannot be passed to another person through touch, birth or breastfeeding. Family history, hormones, weight, smoking, friction and sweating may influence the course of the disease.",
  },
  {
    question: "When should a patient seek medical advice?",
    answer:
      "Early assessment is important when painful lumps, recurring abscesses or draining wounds appear in the same area. Repeated lesions in the armpits, groin or other friction zones should not be treated as a simple boil without specialist evaluation.",
  },
  {
    question: "What are the stages of HS?",
    answer:
      "The Hurley classification is commonly used. Stage I includes limited abscesses without tunnels. Stage II includes recurring abscesses with limited tunnels and scarring. Stage III includes widespread disease with interconnected tunnels, chronic drainage and marked scarring.",
  },
  {
    question: "When is surgery considered?",
    answer:
      "Surgical planning may be considered when recurrent abscesses, sinus tracts, chronic drainage, scar tissue, pain or movement limitation affect daily life. The aim is to remove diseased tissue and restore the area as safely as possible.",
  },
  {
    question: "Can HS come back after surgery?",
    answer:
      "When the diseased tissue is removed adequately, recurrence in that exact area may be reduced. However, HS can still appear in other sweat-gland areas of the body, so follow-up and early evaluation of new lesions remain important.",
  },
];

function WhatsAppMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M12 3.25c-4.83 0-8.75 3.82-8.75 8.53 0 1.67.5 3.29 1.45 4.66L4 20.75l4.42-1.16a8.82 8.82 0 0 0 3.58.75c4.83 0 8.75-3.82 8.75-8.53S16.83 3.25 12 3.25Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M10.2 8.2c-.2-.45-.4-.47-.58-.48h-.5c-.18 0-.47.07-.72.35-.25.28-.95.93-.95 2.27s.97 2.63 1.11 2.82c.14.19 1.92 3.02 4.71 4.12 2.32.91 2.8.73 3.3.68.5-.05 1.63-.67 1.86-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.52-.33l-1.1-.55c-.27-.13-.44-.19-.62.13-.18.33-.68 1.05-.83 1.24-.15.19-.3.21-.56.08-.27-.13-1.11-.41-2.11-1.31-.78-.69-1.31-1.55-1.46-1.81-.15-.26-.02-.4.11-.54.12-.12.27-.32.41-.48.14-.16.18-.27.28-.45.1-.18.05-.34-.02-.48l-.57-1.39Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SmallIcon({ type }: { type: string }) {
  const icon = type === "female" ? "♀" : type === "dna" ? "DNA" : type === "risk" ? "!" : "•";

  return (
    <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-sky-50 px-2 text-xs font-black text-sky-700">
      {icon}
    </span>
  );
}

export default function EnglishPage() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.22),_transparent_28%),linear-gradient(180deg,_#eff6ff_0%,_#ffffff_46%,_#e0f2fe_100%)] text-slate-950"
    >
      <DocumentLanguage lang="en" />
      <section className="mx-auto w-full max-w-7xl px-5 pb-3 pt-5 sm:px-8 lg:px-12">
        <header className="rounded-[1.75rem] border border-white/70 bg-white/88 px-4 py-3 shadow-[0_20px_60px_rgba(59,130,246,0.08)] backdrop-blur-md sm:px-5">
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(210px,auto)_minmax(0,1fr)_max-content] lg:items-center">
            <a href="#top" className="flex min-w-0 shrink-0 items-center gap-3 lg:min-w-[210px]">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-[1rem] bg-slate-950 text-white shadow-lg shadow-slate-950/10">
                <span className="absolute left-[11px] top-[9px] h-5 w-2.5 rotate-[28deg] rounded-full bg-white" />
                <span className="absolute right-[11px] top-[9px] h-5 w-2.5 -rotate-[28deg] rounded-full bg-white" />
              </span>
              <div className="leading-tight">
                <p className="whitespace-nowrap text-sm font-semibold tracking-[0.08em] text-slate-950 sm:text-base">
                  Prof. Dr. Bekir Atik
                </p>
                <p className="max-w-[230px] text-xs leading-snug text-slate-500 sm:max-w-none">
                  Aesthetic, Plastic and Reconstructive Surgeon
                </p>
              </div>
            </a>

            <nav
              aria-label="English page menu"
              className="hidden min-w-0 flex-wrap gap-1.5 lg:flex lg:justify-center xl:gap-2"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap rounded-full bg-slate-50 px-2.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 xl:px-3 xl:text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex w-full max-w-full items-center justify-end gap-1.5 sm:w-auto lg:justify-self-end">
              <LanguageSwitch
                href="/"
                label="Turkish"
                ariaLabel="Switch to Turkish"
                flag="tr"
                showLabel={false}
              />
              <a
                href="#appointment"
                className="inline-flex h-10 min-w-[96px] flex-1 shrink-0 items-center justify-center whitespace-nowrap rounded-[0.95rem] bg-[#e50914] px-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(229,9,20,0.18)] transition hover:-translate-y-0.5 hover:bg-[#d90812] sm:flex-none"
              >
                Book now
              </a>
            </div>
          </div>
        </header>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-7xl px-5 pb-12 pt-10 sm:px-8 lg:px-12"
      >
        <div className="mb-6 rounded-[2.4rem] border border-white/70 bg-white/82 px-6 py-5 shadow-[0_20px_60px_rgba(59,130,246,0.08)] backdrop-blur-sm sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            Hidradenitis Suppurativa
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Relief is possible with an experienced surgical team in Turkey.
          </h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
          <div className="overflow-hidden rounded-[2.4rem] border border-white/70 bg-slate-100 shadow-[0_24px_70px_rgba(37,99,235,0.14)]">
            <Image
              src="/doctor-portrait.png"
              alt="Prof. Dr. Bekir Atik portrait"
              width={1200}
              height={1200}
              priority
              className="h-full min-h-[340px] w-full object-cover object-center"
            />
          </div>

          <div className="rounded-[2.4rem] border border-sky-100 bg-white/92 p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Appointment
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                  Send your details and our team will contact you.
                </h2>
              </div>
              <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                International patients
              </span>
            </div>

            <div id="appointment" className="mt-6 scroll-mt-36">
              <ContactForm
                areaOptions={areaOptions}
                language="en"
                labels={{
                  name: "Full name *",
                  namePlaceholder: "Your full name",
                  phone: "Phone *",
                  phonePlaceholder: "+44...",
                  email: "Email",
                  emailPlaceholder: "name@example.com",
                  duration: "How long have you had this condition? *",
                  durationPlaceholder: "For example, 3 years",
                  areas: "Which body areas are affected? *",
                  areaPlaceholder: "Choose areas",
                  areaSelect: "Select",
                  areaDone: "Done",
                  message: "Message",
                  messagePlaceholder: "Briefly describe your concern...",
                  submit: "Send",
                  sending: "Sending...",
                  call: "Call directly",
                  success: "Your form has reached us. Our team will contact you soon.",
                  errors: {
                    name: "Please enter your full name.",
                    phone: "Please enter your phone number.",
                    duration: "Please enter how long you have had this condition.",
                    areas: "Please choose at least one affected area.",
                    submit: "The form could not be sent.",
                    unknown: "The form could not be sent. Please try again later.",
                  },
                }}
              />
            </div>

            <ConversionLink
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              sendTo={GOOGLE_ADS_CONVERSIONS.whatsappMessage}
              className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:bg-[#1fb85a]"
            >
              <WhatsAppMark />
              Send WhatsApp message
            </ConversionLink>
          </div>
        </div>
      </section>

      <VideoSection
        cards={videoCards}
        showShorts={false}
        copy={{
          eyebrow: "Patient experiences",
          title: "Patient stories",
          channelCta: "Open channel",
          shortsEyebrow: "Questions and answers",
          shortsTitle: "Short answers with video",
          shortsBadge: "Short videos",
          close: "Close",
          closeAria: "Close video",
        }}
      />

      <section className="mx-auto w-full max-w-7xl px-5 pt-6 pb-8 sm:px-8 sm:pb-10 lg:px-12">
        <div className="space-y-6">
          <VideoSection
            sectionId="question-answer-videos"
            shorts={shortCards}
            showCards={false}
            copy={{
              shortsEyebrow: "Questions and answers",
              shortsTitle: "Short answers with video",
              shortsBadge: "Short videos",
              close: "Close",
              closeAria: "Close video",
            }}
          />

          <ClinicalExampleReveal
            examples={[
              {
                src: "/clinical-examples/hs-1.png",
                alt: "Hidradenitis Suppurativa surgery before and after clinical example",
                title: "Clinical example 1",
              },
              {
                src: "/clinical-examples/hs-2.png",
                alt: "Hidradenitis Suppurativa surgery before and after clinical example with corrected before and after placement",
                title: "Clinical example 2",
              },
              {
                src: "/clinical-examples/hs-3.png",
                alt: "Hidradenitis Suppurativa surgery before and after clinical example in genital and perianal area",
                title: "Clinical example 3",
              },
              {
                src: "/clinical-examples/hs-4.png",
                alt: "Hidradenitis Suppurativa surgery before and after clinical example in the armpit area",
                title: "Clinical example 4",
              },
            ]}
          />
        </div>
      </section>

      <section id="content" className="mx-auto w-full max-w-7xl px-5 pb-28 sm:px-8 sm:pb-16 lg:px-12">
        <div className="space-y-6">
          <article
            id="guide"
            className="scroll-mt-36 overflow-hidden rounded-[2.4rem] border border-sky-100 bg-white/92 shadow-sm"
          >
            <div className="grid gap-0 xl:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[560px] overflow-hidden bg-slate-950">
                <Image
                  src="/hero-hs.png"
                  alt="Surgical background"
                  fill
                  sizes="(max-width: 1280px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.18),rgba(15,23,42,0.42),rgba(2,132,199,0.55))]" />
                <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                  <div className="max-w-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-100">
                      International Hidradenitis Suppurativa patient guide
                    </p>
                    <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      How HS starts, progresses and affects daily life.
                    </h2>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {flowSteps.map((item) => (
                      <div
                        key={item.step}
                        className="rounded-[1.35rem] border border-white/15 bg-white/12 p-4 text-white backdrop-blur-md"
                      >
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-slate-950 shadow-lg shadow-slate-950/10">
                            {item.step}
                          </span>
                          <p className="text-sm font-semibold">{item.title}</p>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-100/95">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5 p-6 sm:p-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <article className="rounded-[1.5rem] border border-sky-100 bg-sky-50 p-5 shadow-[0_12px_30px_rgba(59,130,246,0.06)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                      Common symptoms
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {symptoms.map((item, index) => (
                        <div key={item} className="rounded-[1rem] border border-white bg-white p-3">
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-sm font-semibold text-slate-950">
                              {item}
                            </span>
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-[11px] font-black text-sky-700">
                              {index + 1}
                            </span>
                          </div>
                          <div className="mt-3 h-2 rounded-full bg-sky-100">
                            <div
                              className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400"
                              style={{ width: `${62 + index * 4}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="rounded-[1.5rem] border border-sky-100 bg-white p-5 shadow-[0_12px_30px_rgba(59,130,246,0.06)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                      Who is affected?
                    </p>
                    <div className="mt-4 rounded-[1.25rem] bg-slate-950 p-4 text-white">
                      <p className="text-xs uppercase tracking-[0.2em] text-sky-200">
                        Common onset range
                      </p>
                      <p className="mt-2 text-4xl font-semibold">20-40</p>
                      <p className="mt-2 text-sm text-slate-300">
                        HS often begins after puberty and may continue with recurring flare-ups.
                      </p>
                    </div>
                    <div className="mt-4 space-y-3">
                      {profileItems.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between gap-3 rounded-2xl border border-sky-100 bg-sky-50/70 px-4 py-3"
                        >
                          <span className="text-sm font-medium text-slate-700">
                            {item.label}
                          </span>
                          <SmallIcon type={item.icon} />
                        </div>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </article>

          <article
            id="about"
            className="scroll-mt-36 rounded-[2rem] border border-sky-100 bg-white/85 p-6 shadow-sm sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              About Hidradenitis Suppurativa
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              HS is a chronic and recurring skin condition that can affect quality of life.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
              It commonly appears in friction-prone areas such as the armpits,
              groin, buttocks, inner thighs and under the breasts. Painful
              nodules, abscesses, drainage, odor and tunnel formation may develop
              over time.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {areaOptions.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-900"
                >
                  {chip}
                </span>
              ))}
            </div>
          </article>

          <article
            id="symptoms"
            className="scroll-mt-36 rounded-[2rem] border border-sky-100 bg-white/85 p-6 shadow-sm sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Symptoms
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-950">What may be seen?</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  {symptoms.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[1.5rem] border border-sky-100 bg-sky-50 p-5">
                <p className="text-sm font-semibold text-sky-950">Why early assessment matters</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  When repeated flare-ups are left unassessed, scarring, sinus
                  tracts and movement limitation may become more significant.
                </p>
              </div>
            </div>
          </article>

          <article
            id="approach"
            className="scroll-mt-36 rounded-[2rem] border border-sky-100 bg-gradient-to-b from-sky-50 to-white p-6 shadow-sm sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Clinical approach
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Fast assessment. Early intervention.
            </h2>
            <div className="mt-5 rounded-[1.5rem] border border-sky-100 bg-white/85 p-5 shadow-[0_12px_30px_rgba(59,130,246,0.06)] sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                Clinical frame
              </p>
              <p className="mt-3 max-w-3xl text-lg font-semibold leading-8 text-slate-900">
                If painful nodules appear in the armpits, groin or any recurring
                body area, early specialist assessment is recommended. Once HS is
                diagnosed, early-stage care may involve clinical follow-up and
                surgical planning together. In advanced stages, surgical
                management often becomes the primary option.
              </p>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {approachCards.map((card) => (
                <div key={card.title} className="rounded-[1.5rem] border border-white bg-white p-5 shadow-sm">
                  <p className="font-semibold text-slate-950">{card.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{card.text}</p>
                </div>
              ))}
            </div>
          </article>

          <article
            id="stages"
            className="scroll-mt-36 overflow-hidden rounded-[2.5rem] border border-sky-100 bg-[#eef7fd] shadow-sm"
          >
            <div className="flex flex-col gap-4 border-b border-sky-100 px-6 py-6 sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Hidradenitis Suppurativa stages
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2rem]">
                  Hurley classification helps clarify severity.
                </h2>
              </div>
              <span className="inline-flex w-fit items-center rounded-full border border-sky-300 bg-white px-5 py-2.5 text-sm font-semibold text-sky-700 shadow-sm">
                3 stages
              </span>
            </div>

            <div className="grid gap-5 px-6 py-6 sm:px-8 sm:py-8 lg:grid-cols-3">
              {hurleyCards.map((card, index) => (
                <article
                  key={card.title}
                  className={`rounded-[2rem] border border-sky-100 bg-gradient-to-b ${card.tone} p-6 shadow-[0_12px_32px_rgba(15,23,42,0.04)]`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className={`text-[0.95rem] font-bold uppercase tracking-[0.32em] ${card.accent}`}>
                      {card.title.toUpperCase()}
                    </p>
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl font-black text-slate-950 shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
                      {index + 1}
                    </span>
                  </div>
                  <ul className="mt-8 space-y-6 text-[1.05rem] leading-8 text-slate-700">
                    {card.points.map((point) => (
                      <li key={point} className="flex gap-4">
                        <span className="mt-3 h-3 w-3 shrink-0 rounded-full bg-sky-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </article>

          <article
            id="reviews"
            className="scroll-mt-36 rounded-[2rem] border border-sky-100 bg-gradient-to-b from-white to-sky-50 p-6 text-slate-950 shadow-sm sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-200 bg-white shadow-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[conic-gradient(from_0deg,#4285F4_0_25%,#34A853_25%_50%,#FBBC05_50%_75%,#EA4335_75%_100%)] text-[11px] font-black text-white shadow-[inset_0_0_0_3px_rgba(255,255,255,0.9)]">
                  G
                </span>
              </span>
              <h2 className="text-3xl font-semibold tracking-tight">Patient reviews</h2>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 px-4 py-4">
              <div className="review-marquee">
                {[...reviewCards, ...reviewCards].map((card, index) => (
                  <article
                    key={`${card.name}-${card.date}-${index}`}
                    className="mr-4 w-[340px] shrink-0 rounded-[1.5rem] border border-sky-100 bg-white p-5 shadow-[0_12px_30px_rgba(59,130,246,0.08)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-950">{card.name}</p>
                        <p className="text-xs text-slate-500">
                          {card.role} · {card.date}
                        </p>
                      </div>
                      <span className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700">
                        5 ★
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-amber-500">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-700">{card.quote}</p>
                  </article>
                ))}
              </div>
            </div>
          </article>

          <article
            id="faq"
            className="scroll-mt-36 rounded-[2rem] border border-sky-100 bg-white/92 p-6 text-slate-950 shadow-sm sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Frequently asked questions
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Key questions for international patients
                </h2>
              </div>
            </div>

            <div className="mt-6 divide-y divide-sky-100 overflow-hidden rounded-[1.75rem] border border-sky-100 bg-sky-50/45">
              {faqItems.map((item) => (
                <details key={item.question} className="group bg-white/70 open:bg-white">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 text-left transition hover:bg-sky-50 sm:px-6">
                    <span className="text-base font-semibold leading-7 text-slate-950 sm:text-lg">
                      {item.question}
                    </span>
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-white text-lg font-semibold text-sky-700 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-[0.95rem] leading-8 text-slate-700 sm:px-6 sm:text-base">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </article>

          <section
            id="location-contact"
            className="scroll-mt-36 rounded-[2.4rem] border border-sky-100 bg-white/90 p-6 shadow-sm sm:p-8"
          >
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Location and contact
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                  Visit the clinic location or send your form.
                </h2>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-stretch">
              <div className="overflow-hidden rounded-[2rem] border border-sky-100 bg-slate-100 shadow-[0_20px_50px_rgba(59,130,246,0.08)] lg:min-h-[720px]">
                <div className="h-full min-h-[360px] w-full lg:min-h-[720px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.7258932492573!2d29.15699147623869!3d40.92175562474773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac605b5d94175%3A0x2aae509ba9fb8afa!2sProf.%20Dr.%20Bekir%20Atik%20-%20Estetik%2C%20Plastik%20ve%20Rekonstr%C3%BCktif%20Uzman%C4%B1!5e0!3m2!1str!2sde!4v1778706919053!5m2!1str!2sde"
                    title="Prof. Dr. Bekir Atik clinic location"
                    className="h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="flex h-full flex-col rounded-[2rem] border border-sky-100 bg-white p-5 shadow-[0_20px_50px_rgba(59,130,246,0.06)] sm:p-6 lg:min-h-[720px]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                      Contact form
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                      Contact the clinic
                    </h3>
                  </div>
                  <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                    {phoneNumber}
                  </span>
                </div>

                <div className="mt-5 flex-1">
                  <ContactForm
                    areaOptions={areaOptions}
                    language="en"
                    labels={{
                      name: "Full name *",
                      namePlaceholder: "Your full name",
                      phone: "Phone *",
                      phonePlaceholder: "+44...",
                      email: "Email",
                      emailPlaceholder: "name@example.com",
                      duration: "How long have you had this condition? *",
                      durationPlaceholder: "For example, 3 years",
                      areas: "Which body areas are affected? *",
                      areaPlaceholder: "Choose areas",
                      areaSelect: "Select",
                      areaDone: "Done",
                      message: "Message",
                      messagePlaceholder: "Briefly describe your concern...",
                      submit: "Send",
                      sending: "Sending...",
                      call: "Call directly",
                      success: "Your form has reached us. Our team will contact you soon.",
                      errors: {
                        name: "Please enter your full name.",
                        phone: "Please enter your phone number.",
                        duration: "Please enter how long you have had this condition.",
                        areas: "Please choose at least one affected area.",
                        submit: "The form could not be sent.",
                        unknown: "The form could not be sent. Please try again later.",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          <article
            aria-label="Institutional logos"
            className="rounded-[2rem] border border-sky-100 bg-white px-6 py-8 shadow-sm sm:px-8"
          >
            <div className="grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-5 sm:gap-x-8 sm:gap-y-10 lg:gap-x-10">
              <div className="flex justify-center">
                <Image
                  src="/logos/bekiratik-logo.png"
                  alt="Bekir Atik signature logo"
                  width={300}
                  height={60}
                  className="h-9 w-auto object-contain sm:h-11 lg:h-12"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/logos/saglik-bakanligi-logo2.png"
                  alt="Republic of Turkey Ministry of Health"
                  width={135}
                  height={135}
                  className="h-10 w-auto object-contain sm:h-12 lg:h-14"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/logos/istabip-logo-clean2.png"
                  alt="Istanbul Medical Chamber"
                  width={160}
                  height={270}
                  className="h-10 w-auto object-contain sm:h-12 lg:h-14"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/logos/asps-logo-clean3.png"
                  alt="American Society of Plastic Surgeons"
                  width={520}
                  height={380}
                  className="h-10 w-auto object-contain sm:h-12 lg:h-14"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/logos/heart-of-health.svg"
                  alt="Heart of Health logo"
                  width={300}
                  height={170}
                  className="h-12 w-auto object-contain sm:h-14 lg:h-16"
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      <ConversionLink
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Send WhatsApp message"
        sendTo={GOOGLE_ADS_CONVERSIONS.whatsappMessage}
        className="fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_50px_rgba(37,211,102,0.35)] transition hover:scale-[1.03] hover:bg-[#1fb85a] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
          <WhatsAppMark />
        </span>
      </ConversionLink>
    </main>
  );
}
