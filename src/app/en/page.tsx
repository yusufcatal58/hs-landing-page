import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "../../components/contact-form";
import { ConversionLink } from "../../components/conversion-link";
import { DocumentLanguage } from "../../components/document-language";
import { LanguageSwitch } from "../../components/language-switch";
import { VideoSection } from "../../components/video-section";
import { GOOGLE_ADS_CONVERSIONS } from "../../lib/google-ads";

export const metadata: Metadata = {
  title: "Hidradenitis Suppurativa Surgery in Türkiye | Prof. Dr. Bekir Atik",
  description:
    "Information for international patients considering Hidradenitis Suppurativa surgery in Türkiye, including specialist consultation, treatment planning, cost factors and recovery time.",
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
  { label: "Guide", href: "#treatment-journey" },
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

const approachCards = [
  {
    title: "Early assessment",
    text: "Painful nodules in the armpits, groin or any recurring body area should be assessed early through a specialist consultation.",
  },
  {
    title: "Combined planning",
    text: "In early stages, clinical follow-up and surgical planning can be considered together after diagnosis.",
  },
  {
    title: "Advanced-stage surgery",
    text: "In stage 3 or severe Hidradenitis Suppurativa, surgical management often becomes the main option for diseased tissue.",
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
    question: "How much does Hidradenitis Suppurativa surgery cost?",
    answer:
      "The cost of Hidradenitis Suppurativa surgery depends on the disease stage, affected body area, operation size, anesthesia needs, hospital stay and whether reconstruction such as a flap or skin graft is required. A clear treatment and cost plan can be prepared after medical evaluation.",
  },
  {
    question: "How long is recovery after Hidradenitis Suppurativa surgery?",
    answer:
      "Recovery time varies according to the operated area and the size of the procedure. Smaller procedures may need a shorter follow-up period, while wide excision, skin grafts or flap repairs may require longer wound care, movement precautions and remote follow-up after returning home.",
  },
  {
    question: "Can international patients travel to Türkiye for HS surgery?",
    answer:
      "Yes. International patients can share their medical history and affected-area photos before travel so the first assessment, possible treatment plan, expected stay and follow-up needs can be discussed in advance.",
  },
  {
    question: "Is surgery a permanent cure for Hidradenitis Suppurativa?",
    answer:
      "Surgery may provide strong long-term local control when diseased tissue is fully removed from the treated area. However, HS is a chronic condition and new lesions may still appear in other sweat-gland areas, so follow-up remains important.",
  },
  {
    question: "Do you treat severe or stage 3 Hidradenitis Suppurativa?",
    answer:
      "Advanced or stage 3 Hidradenitis Suppurativa may involve interconnected tunnels, chronic drainage and extensive scarring. These cases usually require careful surgical planning, removal of diseased tissue and reconstruction based on the body area involved.",
  },
  {
    question: "Who performs Hidradenitis Suppurativa surgery?",
    answer:
      "Hidradenitis Suppurativa surgery should be planned by an experienced surgical team familiar with excision, wound closure, skin grafts, flap repair and post-operative follow-up. Prof. Dr. Bekir Atik is a Plastic, Reconstructive and Aesthetic Surgery specialist.",
  },
  {
    question: "Can HS come back after surgery?",
    answer:
      "When the diseased tissue is removed adequately, recurrence in that exact area may be reduced. However, HS can still appear in other sweat-gland areas of the body, so follow-up and early evaluation of new lesions remain important.",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const journeyIntroCards = [
  {
    label: "Welcome",
    title: "Your treatment journey in Türkiye",
    text: "This guide helps international Hidradenitis Suppurativa patients understand consultation, treatment planning, travel, cost factors, surgery and recovery follow-up.",
  },
  {
    label: "What is Hidradenitis Suppurativa?",
    title: "A chronic inflammatory skin condition",
    text: "Hidradenitis Suppurativa may cause painful nodules, abscesses and tunnels in areas such as the armpits, groin, buttocks and under the breasts. In advanced cases, surgery can support long-term local control.",
  },
];

const onlineEvaluationItems = [
  "Medical history review",
  "Photo assessment of affected areas",
  "Review of previous treatments",
  "Online consultation planning",
  "Preliminary treatment plan",
];

const travelChecklist = [
  "Passport",
  "Previous test results",
  "Current treatment list",
  "Previous surgery reports, if any",
  "Regularly used medicines",
];

const firstConsultationItems = [
  "Detailed physical examination",
  "Disease stage assessment",
  "Surgical plan preparation",
  "Operation details explained",
  "Questions answered clearly",
];

const surgicalMethods = [
  "Wide surgical excision",
  "Partial excision",
  "Skin graft applications",
  "Local flap repairs",
  "Combined reconstructive methods",
  "Laser applications when suitable",
];

const hospitalStayOptions = [
  "Same-day discharge",
  "1-3 days hospital stay",
  "3-7 days hospital stay",
  "Special cases may need longer follow-up",
];

const recoveryItems = [
  "Pain controlled with prescribed pain relief",
  "Dressing and wound-care needs",
  "Temporary movement limitation",
  "Temporary swelling",
  "Detailed care instructions from the doctor",
];

const turkeyStayOptions = [
  "3-7 days for smaller procedures",
  "10-14 days for more extensive procedures",
  "The final duration depends on healing progress",
];

const returnHomeFollowUpItems = [
  "Photo-based wound checks",
  "Video consultations",
  "Healing progress follow-up",
  "Long-term result assessment",
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

export default function EnglishPage() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.22),_transparent_28%),linear-gradient(180deg,_#eff6ff_0%,_#ffffff_46%,_#e0f2fe_100%)] text-slate-950"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
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
            Hidradenitis Suppurativa surgery and specialist care in Türkiye.
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
                  Request a consultation
                </h2>
              </div>
              <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                International
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
          title: "Hidradenitis Suppurativa patient stories",
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
        </div>
      </section>

      <section
        id="treatment-journey"
        className="mx-auto w-full max-w-7xl scroll-mt-36 px-5 pb-8 sm:px-8 sm:pb-10 lg:px-12"
      >
        <article className="overflow-hidden rounded-[2.4rem] border border-sky-100 bg-white/94 shadow-sm">
          <div className="relative overflow-hidden border-b border-sky-100 bg-slate-950">
            <Image
              src="/journey/treatment-journey-turkey.png"
              alt="From Hidradenitis Suppurativa to healing treatment journey in Türkiye"
              width={1717}
              height={916}
              sizes="(min-width: 640px) 1280px, 0px"
              className="hidden h-auto w-full sm:block"
            />
            <Image
              src="/journey/treatment-journey-mobile.png"
              alt="From Hidradenitis Suppurativa to healing treatment journey in Türkiye"
              width={1122}
              height={1402}
              sizes="(max-width: 639px) 100vw, 0px"
              className="block h-auto w-full sm:hidden"
            />
          </div>

          <div className="space-y-6 p-5 sm:p-8">
            <div className="grid gap-4 lg:grid-cols-2">
              {journeyIntroCards.map((card) => (
                <section
                  key={card.label}
                  className="rounded-[1.7rem] border border-sky-100 bg-sky-50/70 p-5 shadow-[0_14px_35px_rgba(59,130,246,0.06)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                    {card.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {card.text}
                  </p>
                </section>
              ))}
            </div>

            <div className="grid gap-4 xl:grid-cols-[1fr_0.92fr]">
              <section className="rounded-[1.7rem] border border-sky-100 bg-white p-5 shadow-[0_14px_35px_rgba(15,23,42,0.04)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Online evaluation before treatment
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  Planning starts before you travel.
                </h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {onlineEvaluationItems.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-sky-50/70 p-3"
                    >
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-sky-700 shadow-sm">
                        {index + 1}
                      </span>
                      <span className="text-sm font-semibold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.7rem] border border-sky-100 bg-slate-950 p-5 text-white shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                  What to bring before coming to Türkiye
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Travel checklist
                </h3>
                <div className="mt-5 grid gap-3">
                  {travelChecklist.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 p-3"
                    >
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-300 text-xs font-black text-slate-950">
                        ✓
                      </span>
                      <span className="text-sm font-semibold text-slate-100">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <section className="rounded-[1.7rem] border border-sky-100 bg-white p-5 shadow-[0_14px_35px_rgba(15,23,42,0.04)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                  First consultation day
                </p>
                <ul className="mt-4 space-y-3">
                  {firstConsultationItems.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[1.7rem] border border-sky-100 bg-white p-5 shadow-[0_14px_35px_rgba(15,23,42,0.04)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Surgical treatment process
                </p>
                <ul className="mt-4 grid gap-3">
                  {surgicalMethods.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-sky-100 bg-sky-50/70 px-4 py-3 text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  The aim is to remove diseased tissue, improve comfort, reduce
                  infection burden and lower the risk of local recurrence.
                </p>
              </section>

              <section className="rounded-[1.7rem] border border-sky-100 bg-white p-5 shadow-[0_14px_35px_rgba(15,23,42,0.04)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Hospital stay duration
                </p>
                <div className="mt-4 space-y-3">
                  {hospitalStayOptions.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-sky-100 bg-sky-50/70 px-4 py-3 text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
              <section className="rounded-[1.7rem] border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-5 shadow-[0_14px_35px_rgba(15,23,42,0.04)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                  After surgery period
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  Recovery is followed step by step.
                </h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {recoveryItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid gap-4 md:grid-cols-2">
                <section className="rounded-[1.7rem] border border-sky-100 bg-white p-5 shadow-[0_14px_35px_rgba(15,23,42,0.04)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                    Recommended stay in Türkiye
                  </p>
                  <div className="mt-4 space-y-3">
                    {turkeyStayOptions.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-sky-100 bg-sky-50/70 px-4 py-3 text-sm font-semibold text-slate-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-[1.7rem] border border-sky-100 bg-white p-5 shadow-[0_14px_35px_rgba(15,23,42,0.04)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                    After returning to your country
                  </p>
                  <div className="mt-4 space-y-3">
                    {returnHomeFollowUpItems.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-sky-100 bg-sky-50/70 px-4 py-3 text-sm font-semibold text-slate-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            <section className="rounded-[1.8rem] border border-sky-200 bg-gradient-to-r from-sky-50 via-white to-cyan-50 p-5 shadow-[0_14px_35px_rgba(59,130,246,0.06)] sm:p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                    Pre-surgery document
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                    Patient Information Form
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                    Download the English pre-surgery patient information form
                    before your consultation.
                  </p>
                </div>
                <a
                  href="/forms/hidradenitis-suppurativa-pre-surgery-patient-information-form-en.pdf"
                  download
                  aria-label="Download pre-surgery patient information PDF"
                  className="inline-flex w-fit items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-[0_16px_35px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-sky-800"
                >
                  Download PDF
                </a>
              </div>
            </section>

          </div>
        </article>
      </section>

      <section id="content" className="mx-auto w-full max-w-7xl px-5 pb-28 sm:px-8 sm:pb-16 lg:px-12">
        <div className="space-y-6">
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
                  alt="Republic of Türkiye Ministry of Health"
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
