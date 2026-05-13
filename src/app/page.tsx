import Image from "next/image";
import { ContactForm } from "../components/contact-form";
import { VideoSection } from "../components/video-section";

const symptoms = [
  "Ağrılı nodüller",
  "Tekrarlayan apseler",
  "Akıntı ve kötü koku",
  "Tünel/fistül oluşumu",
  "İz ve sertleşme",
  "Hareket kısıtlılığı",
];

const stages = [
  {
    stage: "Evre 1",
    title: "Sınırlı başlangıç",
    text: "Tek tek ya da sınırlı bölgelerde ağrılı şişlikler görülebilir. Bu dönemde erken değerlendirme önemlidir.",
  },
  {
    stage: "Evre 2",
    title: "Tekrarlayan ataklar",
    text: "Aynı bölgede tekrar eden apseler ve sınırlı tünel oluşumları ortaya çıkabilir.",
  },
  {
    stage: "Evre 3",
    title: "Yaygın ve ileri hastalık",
    text: "Birbirine bağlanan tüneller, yaygın inflamasyon ve belirgin iz dokusu görülebilir.",
  },
];

const treatmentCards = [
  {
    title: "Medikal yaklaşım",
    text: "Erken tanıda ilaç tedavileri, bakım önerileri ve yaşam tarzı düzenlemeleri ile ilerleme yavaşlatılabilir.",
  },
  {
    title: "Cerrahi seçenekler",
    text: "İleri veya tekrarlayan olgularda, hastalıklı dokunun çıkarılması ve bölgenin temizlenmesi etkili bir seçenek olabilir.",
  },
  {
    title: "Kombine plan",
    text: "Bazı hastalarda ilaç, bakım, takip ve cerrahi birlikte planlanarak daha güçlü bir kontrol hedeflenir.",
  },
];

const videoCards = [
  {
    title: "6 Yıl Acı Çekti, Şimdi Çok Mutlu",
    text: "Ameliyat sonrası hasta hikayesi.",
    href: "https://www.youtube.com/watch?v=oMiq6k3zV6M",
    videoId: "oMiq6k3zV6M",
  },
  {
    title: "Bitmeyen Ağrılardan Kurtuldu",
    text: "Gerçek hasta yorumu ve tedavi süreci.",
    href: "https://www.youtube.com/watch?v=16lBh53XDA8",
    videoId: "16lBh53XDA8",
  },
  {
    title: "Hidradenitis Suppurativa - Çaresi Mümkün",
    text: "Hastalığın tedavi yaklaşımını anlatan video.",
    href: "https://www.youtube.com/watch?v=NhRPMghHapQ",
    videoId: "NhRPMghHapQ",
  },
  {
    title: "KÖPEK MEMESİ TEDAVİSİ",
    text: "HS için cerrahi ve takip odaklı içerik.",
    href: "https://www.youtube.com/watch?v=LtQf94fnevI",
    videoId: "LtQf94fnevI",
  },
  {
    title: "HİDRADENİTİS SUPPURATİVA TEDAVİSİ",
    text: "Köpek memesi hastalığı için tedavi anlatımı.",
    href: "https://www.youtube.com/watch?v=qEFskZUwdMM",
    videoId: "qEFskZUwdMM",
  },
  {
    title: "Hidradenitis Suppurativa Tedavisi",
    text: "Köpek memesi hastalığı üzerine kısa içerik.",
    href: "https://www.youtube.com/watch?v=Vbf2ZJNa7Gs",
    videoId: "Vbf2ZJNa7Gs",
  },
];

const reviewCards = [
  {
    name: "Deni bar",
    role: "Yerel Rehber",
    date: "2 ay önce",
    quote: "Görüşme güven vericiydi, ekip ilgiliydi ve süreç sakindi.",
  },
  {
    name: "Arda Aktugan",
    role: "6 yorum",
    date: "4 ay önce",
    quote: "HS süreci net anlatıldı; açıklamalar sakin ve anlaşılırdı.",
  },
  {
    name: "Sudenaz Güler",
    role: "3 yorum",
    date: "4 ay önce",
    quote: "Mesleki bilgi ve hasta yaklaşımı gerçekten güven verdi.",
  },
  {
    name: "Deni bar",
    role: "Yerel Rehber",
    date: "2 ay önce",
    quote: "İletişim hızlıydı, ekip düzenliydi ve her şey net ilerledi.",
  },
  {
    name: "Arda Aktugan",
    role: "6 yorum",
    date: "4 ay önce",
    quote: "Güven verici bir görüşmeydi, süreç adım adım anlatıldı.",
  },
];

const happyPatientImages = [
  { src: "/patients/happy-1.png", alt: "Mutlu hasta fotoğrafı 1" },
  { src: "/patients/happy-2.png", alt: "Mutlu hasta fotoğrafı 2" },
  { src: "/patients/happy-3.png", alt: "Mutlu hasta fotoğrafı 3" },
  { src: "/patients/happy-4.png", alt: "Mutlu hasta fotoğrafı 4" },
  { src: "/patients/happy-5.png", alt: "Mutlu hasta fotoğrafı 5" },
];

const areaChips = [
  "Koltuk altı",
  "Kasık",
  "Kalça",
  "Meme altı",
  "İç bacak",
  "Genital bölge",
  "Göbek çevresi",
];

const navItems = [
  { label: "HS hakkında", href: "#hs-hakkinda" },
  { label: "Belirtiler", href: "#belirtiler" },
  { label: "Evreler", href: "#evreler" },
  { label: "Tedavi", href: "#tedavi" },
  { label: "Yorumlar", href: "#yorumlar" },
  { label: "Videolar", href: "#videolar" },
  { label: "İletişim", href: "#iletisim" },
];

function WhatsAppMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
    >
      <path
        d="M12 3.25c-4.83 0-8.75 3.82-8.75 8.53 0 1.67.5 3.29 1.45 4.66L4 20.75l4.42-1.16a8.82 8.82 0 0 0 3.58.75c4.83 0 8.75-3.82 8.75-8.53S16.83 3.25 12 3.25Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 8.2c-.2-.45-.4-.47-.58-.48h-.5c-.18 0-.47.07-.72.35-.25.28-.95.93-.95 2.27s.97 2.63 1.11 2.82c.14.19 1.92 3.02 4.71 4.12 2.32.91 2.8.73 3.3.68.5-.05 1.63-.67 1.86-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.52-.33l-1.1-.55c-.27-.13-.44-.19-.62.13-.18.33-.68 1.05-.83 1.24-.15.19-.3.21-.56.08-.27-.13-1.11-.41-2.11-1.31-.78-.69-1.31-1.55-1.46-1.81-.15-.26-.02-.4.11-.54.12-.12.27-.32.41-.48.14-.16.18-.27.28-.45.1-.18.05-.34-.02-.48l-.57-1.39Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.22),_transparent_28%),linear-gradient(180deg,_#eff6ff_0%,_#ffffff_46%,_#e0f2fe_100%)] text-slate-950"
    >
      <section className="mx-auto w-full max-w-7xl px-5 pt-5 pb-3 sm:px-8 lg:px-12">
        <header className="rounded-[1.75rem] border border-white/70 bg-white/88 px-4 py-3 shadow-[0_20px_60px_rgba(59,130,246,0.08)] backdrop-blur-md sm:px-5">
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <a href="#top" className="flex items-center gap-3 shrink-0">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-[1rem] bg-slate-950 text-white shadow-lg shadow-slate-950/10">
                <span className="absolute left-[11px] top-[9px] h-5 w-2.5 rotate-[28deg] rounded-full bg-white" />
                <span className="absolute right-[11px] top-[9px] h-5 w-2.5 -rotate-[28deg] rounded-full bg-white" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-[0.18em] text-slate-950">
                  BEKİR ATİK
                </p>
                <p className="text-xs text-slate-500">
                  Hidradenitis suppurativa
                </p>
              </div>
            </a>

            <nav
              aria-label="Sayfa menüsü"
              className="hidden flex-wrap gap-2 lg:flex lg:flex-nowrap lg:justify-center"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap rounded-full bg-slate-50 px-3.5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 sm:text-sm text-xs"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#randevu"
              className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-500 sm:w-auto"
            >
              Randevu al
            </a>
          </div>
        </header>
      </section>

      <section
        id="iletisim"
        className="mx-auto w-full max-w-7xl px-5 pb-12 pt-10 sm:px-8 lg:px-12"
      >
        <div className="mb-6 rounded-[2.4rem] border border-white/70 bg-white/82 px-6 py-5 shadow-[0_20px_60px_rgba(59,130,246,0.08)] backdrop-blur-sm sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            Hidradenitis Suppurativa
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Hidradenitis Suppurativa&apos;da kurtuluş mümkün.
          </h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
          <div className="overflow-hidden rounded-[2.4rem] border border-white/70 bg-slate-100 shadow-[0_24px_70px_rgba(37,99,235,0.14)]">
            <Image
              src="/doctor-portrait.png"
              alt="Prof. Dr. Bekir Atik portre"
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
                  Randevu
                </p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                  Formu doldurun, dönüş yapalım.
                </h1>
              </div>
              <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                Hızlı dönüş
              </span>
            </div>

            <div id="randevu" className="scroll-mt-36 mt-6">
              <ContactForm />
            </div>

            <a
              href="https://wa.me/905324615997"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:bg-[#1fb85a]"
            >
              <WhatsAppMark />
              WhatsApp gönder
            </a>
          </div>
        </div>
      </section>

      <section id="icerik" className="mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 lg:px-12">
        <div className="space-y-6">
          <article
            id="hs-hakkinda"
            className="scroll-mt-36 rounded-[2rem] border border-sky-100 bg-white/85 p-6 shadow-sm sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              HS hakkında
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Hidradenitis suppurativa kronik, tekrarlayıcı ve yaşam kalitesini
              etkileyebilen bir cilt hastalığıdır.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
              Referans içeriklerde HS’nin sık görülen bölgeleri arasında koltuk
              altı, kasık, kalça, iç bacak ve meme altı gibi sürtünmeye açık
              alanlar öne çıkıyor. Hastalık ağrılı nodüller, apseler, akıntı,
              kötü koku ve zamanla tünel oluşumu ile ilerleyebilir.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {areaChips.map((chip) => (
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
            id="belirtiler"
            className="scroll-mt-36 rounded-[2rem] border border-sky-100 bg-white/85 p-6 shadow-sm sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Belirtiler
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-950">Neler görülebilir?</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  {symptoms.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[1.5rem] border border-sky-100 bg-sky-50 p-5">
                <p className="text-sm font-semibold text-sky-950">Neden önemlidir?</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Erken fark edilmezse iz dokusu, tekrarlayan ataklar ve hareket
                  kısıtlılığı artabilir. Bu yüzden sayfa, ziyaretçiyi doğru
                  yönlendirmeye odaklanır.
                </p>
              </div>
            </div>
          </article>

          <article
            id="evreler"
            className="scroll-mt-36 rounded-[2rem] border border-sky-100 bg-white/85 p-6 shadow-sm sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Evreler
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Hurley evrelerine göre basit bir açıklama
            </h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {stages.map((stage) => (
                <article
                  key={stage.stage}
                  className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                    {stage.stage}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-950">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {stage.text}
                  </p>
                </article>
              ))}
            </div>
          </article>

          <article
            id="tedavi"
            className="scroll-mt-36 rounded-[2rem] border border-sky-100 bg-gradient-to-b from-sky-50 to-white p-6 shadow-sm sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Tedavi yaklaşımı
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Erken dönemde medikal takip, ileri dönemde cerrahi seçenekler
              konuşulabilir.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
              Kaynak sayfalarda erken tanıda ilaç tedavilerinin ilerlemeyi
              yavaşlatabildiği, ileri ve yaygın olgularda ise cerrahi yaklaşımın
              güçlü bir seçenek olabildiği vurgulanıyor. Biz de bu alanı güven
              veren ama abartısız bir dil ile kuruyoruz.
            </p>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {treatmentCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.5rem] border border-white bg-white p-5 shadow-sm"
                >
                  <p className="font-semibold text-slate-950">{card.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article
            id="mutlu-hastalar"
            className="scroll-mt-36 rounded-[2rem] border border-sky-100 bg-white/85 p-6 text-slate-950 shadow-sm sm:p-8"
          >
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Mutlu hastalar
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                  Tedavi sonrası paylaşılan kareler
                </h2>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.75rem]">
              <div className="review-marquee gap-5 py-1">
                {[...happyPatientImages, ...happyPatientImages].map(
                  (image, index) => (
                    <article
                      key={`${image.src}-${index}`}
                      className="relative h-[380px] w-[280px] shrink-0 overflow-hidden rounded-[1.75rem] border border-sky-100 bg-sky-50 shadow-[0_16px_40px_rgba(59,130,246,0.12)] sm:h-[420px] sm:w-[320px]"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 280px, 320px"
                        className="object-cover"
                      />
                    </article>
                  ),
                )}
              </div>
            </div>
          </article>

          <article
            id="yorumlar"
            className="scroll-mt-36 rounded-[2rem] border border-sky-100 bg-gradient-to-b from-white to-sky-50 p-6 text-slate-950 shadow-sm sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-200 bg-white shadow-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[conic-gradient(from_0deg,#4285F4_0_25%,#34A853_25%_50%,#FBBC05_50%_75%,#EA4335_75%_100%)] text-[11px] font-black text-white shadow-[inset_0_0_0_3px_rgba(255,255,255,0.9)]">
                  G
                </span>
              </span>
              <h2 className="text-3xl font-semibold tracking-tight">
                Hasta yorumları
              </h2>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 px-4 py-4">
              <div className="review-marquee">
                {[...reviewCards, ...reviewCards].map((card, index) => (
                  <article
                    key={`${card.name}-${card.date}-${index}`}
                    className="mr-4 w-[340px] shrink-0 rounded-[1.5rem] border border-sky-100 bg-white p-5 shadow-[0_12px_30px_rgba(59,130,246,0.08)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-slate-950">
                          {card.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")
                            .slice(0, 2)}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-slate-950">
                            {card.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {card.role} · {card.date}
                          </p>
                        </div>
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
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-black text-slate-950">
                        G
                      </span>
                      Google Maps
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-700">
                      {card.quote}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </article>

          <VideoSection
            cards={videoCards.map(({ title, videoId }) => ({ title, videoId }))}
          />

          <article
            aria-label="Kurumsal logolar"
            className="rounded-[2rem] border border-sky-100 bg-white px-6 py-8 shadow-sm sm:px-8"
          >
            <div className="grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-4 sm:gap-x-10 sm:gap-y-10 lg:gap-x-12">
              <div className="flex justify-center">
                <Image
                  src="/logos/bekiratik-logo.png"
                  alt="Bekir Atik imza logosu"
                  width={300}
                  height={60}
                  className="h-9 w-auto object-contain sm:h-11 lg:h-12"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/logos/saglik-bakanligi-logo2.png"
                  alt="T.C. Sağlık Bakanlığı"
                  width={135}
                  height={135}
                  className="h-10 w-auto object-contain sm:h-12 lg:h-14"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/logos/istabip-logo-clean2.png"
                  alt="İstanbul Tabip Odası"
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
            </div>
          </article>
        </div>
      </section>

      <a
        href="https://wa.me/905324615997"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile mesaj gönder"
        className="fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_50px_rgba(37,211,102,0.35)] transition hover:scale-[1.03] hover:bg-[#1fb85a] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
          <WhatsAppMark />
        </span>
      </a>
    </main>
  );
}
