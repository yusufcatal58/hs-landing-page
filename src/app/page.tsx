import Image from "next/image";
import { ConversionLink } from "../components/conversion-link";
import { ContactForm } from "../components/contact-form";
import { VideoSection } from "../components/video-section";
import { GOOGLE_ADS_CONVERSIONS } from "../lib/google-ads";

const symptoms = [
  "Ağrılı nodüller",
  "Tekrarlayan apseler",
  "Akıntı ve kötü koku",
  "Tünel/fistül oluşumu",
  "İz ve sertleşme",
  "Hareket kısıtlılığı",
];

const treatmentCards = [
  {
    title: "Erken başvuru",
    text: "Koltuk altı ve kasıklarda, ya da vücudun herhangi bir yerinde ağrılı nodüller olursa erken dönemde doktora başvurulmalı.",
  },
  {
    title: "Birlikte planlama",
    text: "Tanı konulur konulmaz erken evrelerde tıbbi takip ile cerrahi planlama birlikte yapılmalı.",
  },
  {
    title: "İleri evre cerrahi",
    text: "İlerleyen evrelerde cerrahi yaklaşım öne çıkar.",
  },
];

const videoCards = [
  {
    title: "Hidradenitis Suppurativa ve Beslenme İlişkisi",
    videoId: "3Aril8rIe9A",
  },
  {
    title: "Okula Dönüş Hikayesi | HS Hastasının Gerçek Hikayesi",
    videoId: "tSKRAVkez88",
  },
  {
    title: "“İnsan Görmek İstemiyordum” | HS Hastasının Değişimi",
    videoId: "U0Dd_7dE3y8",
  },
  {
    title: "İlk Defa 7 Aydır Rahatım | HS Sonrası Değişim",
    videoId: "nH1KwQyWKag",
  },
  {
    title: "“Arabaya Bile Oturamıyordum” | HS Hastasının İyileşme Hikayesi",
    videoId: "Oobqr8RWPwo",
  },
  {
    title: "6 Yıl Acı Çekti, Şimdi Çok Mutlu | Hidradenitis Suppurativa Sonrası Şevval’in Hikâyesi",
    videoId: "oMiq6k3zV6M",
  },
  {
    title: "Bitmeyen Ağrılardan Kurtuldu: Hidradenitis Suppurativa Sonrası Gerçek Hasta Yorumu",
    videoId: "16lBh53XDA8",
  },
  {
    title: "Hidradenitis Suppurativa - Hastamız Anlatıyor #hidradenitissuppurativa",
    videoId: "5V8UWcTzPEI",
  },
  {
    title: "“Hayatımdan Vazgeçmiştim” – İsrafil Bey’in Hidradenitis Suppurativa Sonrası Yeni Hayatı #hidradenitissuppurativa",
    videoId: "fQU_RauIEBU",
  },
  {
    title: "HS ile 5 Yıllık Mücadele: Estonya’dan Mr. Şahin’in İyileşme Hikâyesi",
    videoId: "XxO1M4OjrWo",
  },
  {
    title: "Ozan Bey’in Hidradenitis Suppurativa Yolculuğu",
    videoId: "tn4FaDbzcYw",
  },
  {
    title: "Hidradenitis Suppurativa ile Mücadele: Belirtiler ve Destek Yöntemleri",
    videoId: "hPwxl9pisFs",
  },
  {
    title: "Hidradenitis Suppurativa - Çaresi Mümkün",
    videoId: "NhRPMghHapQ",
  },
  {
    title: "Köpek Memesi Hastalığı",
    videoId: "LtQf94fnevI",
  },
  {
    title: "Hidradenitis Suppurativa - Köpek Memesi Hastalığı",
    videoId: "qEFskZUwdMM",
  },
  {
    title: "Hidradenitis Suppurativa - Köpek Memesi Hastalığı",
    videoId: "Vbf2ZJNa7Gs",
  },
];

const shortCards = [
  { title: "Hidradenitis Suppurativa ve beslenme", videoId: "eRjHGX_XbkM" },
  { title: "İyileşme sonrası iz kalır mı?", videoId: "Vjxn-0o-J7I" },
  { title: "Hidradenitis Suppurativa sürecini kim takip eder?", videoId: "ObNFUhmESC4" },
  { title: "Hidradenitis Suppurativa kendiliğinden geçer mi?", videoId: "vsejevqozgY" },
  { title: "Hidradenitis Suppurativa akne midir?", videoId: "Jld2uFJVykE" },
  { title: "Hidradenitis Suppurativa genetik midir?", videoId: "EOLWFiegxN0" },
  { title: "Destek yöntemleri faydalı olur mu?", videoId: "nn9LAkxMyxY" },
  { title: "Cerrahi ne zaman gerekir?", videoId: "IXTJntmusvs" },
  { title: "Ameliyat sonrası hasta yorumu", videoId: "5V8UWcTzPEI" },
  { title: "Ameliyat sonrası iz kalır mı?", videoId: "8bBG6qx59C4" },
  { title: "Koltuk altı uygulamaları faydalı mı?", videoId: "zfrqT02m7Zs" },
  { title: "Hidradenitis Suppurativa kadınlara özgü mü?", videoId: "jS0cHvToDuM" },
  { title: "Hayatımdan vazgeçmiştim", videoId: "fQU_RauIEBU" },
  { title: "İyileşmede ağrı kaçınılmaz mı?", videoId: "e9__Q99lXb8" },
  { title: "Sadece koltuk altında mı olur?", videoId: "3gpTBmyXJ5A" },
  { title: "Cilt grefti tek seçenek mi?", videoId: "a3JbEMMnQoo" },
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
    quote: "Hidradenitis Suppurativa süreci net anlatıldı; açıklamalar sakin ve anlaşılırdı.",
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

const faqItems = [
  {
    question: "Hidradenitis Suppurativa nedir?",
    answer:
      "Hidradenitis Suppurativa, ter bezleri ve kıl kökleriyle ilişkili bölgelerde ortaya çıkan kronik ve tekrarlayıcı bir cilt hastalığıdır. Koltuk altı, kasık, meme altı, kalça ve iç bacak gibi sürtünmeye açık alanlarda ağrılı nodüller, apseler, akıntı ve zamanla deri altında tünel benzeri yapılar görülebilir. Hastalık basit bir sivilce ya da geçici çıban gibi düşünülmemelidir; uzun süreli takip ve doğru klinik değerlendirme gerektirebilir.",
  },
  {
    question: "Hidradenitis Suppurativa bulaşıcı veya genetik bir hastalık mıdır?",
    answer:
      "Hidradenitis Suppurativa bulaşıcı değildir; temasla, doğumla ya da emzirme yoluyla başka bir kişiye geçmez. Kesin nedeni tam olarak bilinmese de genetik yatkınlık önemli faktörlerden biridir. Ailede benzer şikayetleri olan kişilerde görülme ihtimali artabilir. Bunun yanında hormonlar, kilo, sigara kullanımı, sürtünme, terleme ve stres gibi faktörler hastalığın seyrini etkileyebilir.",
  },
  {
    question: "En çok hangi bölgelerde görülür?",
    answer:
      "Hidradenitis Suppurativa en sık koltuk altı, kasık, meme altı, kalça arası, iç bacak, göbek çevresi ve genital bölge gibi terleme ve sürtünmenin yoğun olduğu alanlarda görülür. Bu bölgelerde tekrarlayan ağrılı şişlikler, akıntılı yaralar, kötü koku, sertleşme ve iz dokusu gelişebilir. Aynı bölgede tekrar eden lezyonlar hastalığın önemli uyarı işaretlerinden biridir.",
  },
  {
    question: "İlk belirtileri nelerdir ve başka hastalıklarla karışır mı?",
    answer:
      "İlk belirtiler genellikle cilt altında ağrılı, hassas, küçük nodüller veya şişlikler şeklinde başlar. Zamanla bu alanlar akıntılı apselere, iyileşmeyen yaralara, kalıcı izlere ve tünel oluşumuna dönüşebilir. Başlangıçta akne, çıban, folikülit veya basit enfeksiyonlarla karışabilir. Özellikle aynı bölgede sık tekrar eden, ağrılı ve iz bırakan lezyonlarda uzman değerlendirmesi önemlidir.",
  },
  {
    question: "HS kimlerde daha yaygındır ve hangi durumlar tetikleyebilir?",
    answer:
      "Hidradenitis Suppurativa çoğunlukla ergenlik sonrası dönemde başlar ve 20-40 yaş arasında daha sık görülür. Kadınlarda daha yaygın olabilir; ancak erkeklerde de ağır seyredebilir. Aile öyküsü, fazla kilo, sigara kullanımı, hormonal değişiklikler, aşırı terleme, cilt sürtünmesi, stres ve bazı metabolik sorunlar hastalığın alevlenmesini kolaylaştırabilir.",
  },
  {
    question: "Hidradenitis Suppurativa evreleri nelerdir?",
    answer:
      "Hastalığın şiddeti genellikle Hurley sınıflaması ile değerlendirilir. Hurley I evresinde sınırlı nodül veya apse görülür, tünel ve belirgin iz yoktur. Hurley II evresinde tekrarlayan apseler, sınırlı tüneller ve iz dokusu gelişebilir. Hurley III evresinde ise yaygın tutulum, birbirine bağlı tüneller, kronik akıntı ve belirgin skar dokusu görülebilir. Evreleme, sürecin nasıl yönetileceğini planlamak için önemlidir.",
  },
  {
    question: "Erken başvuru neden önemlidir?",
    answer:
      "Erken başvuru, hastalığın ilerlemesini ve kalıcı iz dokusu gelişmesini azaltmak açısından önemlidir. Koltuk altı, kasık veya vücudun başka bir bölgesinde ağrılı nodüller, tekrarlayan apseler veya akıntılı yaralar varsa gecikmeden doktora başvurulmalıdır. Erken dönemde yapılan değerlendirme, hastalığın yaygınlığını anlamaya ve daha doğru bir plan oluşturmaya yardımcı olur.",
  },
  {
    question: "Cerrahi müdahale ne zaman gündeme gelir?",
    answer:
      "Tekrarlayan apseler, deri altında tünel oluşumu, yaygın hastalıklı doku, sürekli akıntı, ağrı, hareket kısıtlılığı ve yaşam kalitesini ciddi şekilde etkileyen durumlarda cerrahi planlama gündeme gelebilir. Cerrahi yaklaşımda amaç hastalıklı dokunun temizlenmesi, bölgenin sağlıklı şekilde onarılması ve kişinin günlük hayatına daha rahat dönebilmesidir.",
  },
  {
    question: "Ameliyat kesin çözüm müdür, tekrarlar mı?",
    answer:
      "Hastalıklı bölge yeterli genişlikte çıkarıldığında aynı bölgede tekrar görülme ihtimali belirgin şekilde azalır. Ancak Hidradenitis Suppurativa vücudun farklı ter bezi bölgelerinde yeni odaklar oluşturabilir. Bu nedenle cerrahi sonrası takip, yara bakımı, risk faktörlerinin azaltılması ve yeni başlayan lezyonların erken değerlendirilmesi önemlidir.",
  },
  {
    question: "Ameliyat sonrası günlük hayata dönüş, ağrı ve iz süreci nasıldır?",
    answer:
      "İyileşme süreci hastalığın bulunduğu bölgeye, yaranın genişliğine, yapılan işlemin kapsamına ve kişinin genel durumuna göre değişir. Bazı hastalarda kısa sürede günlük yaşama dönüş mümkün olabilirken, geniş alanlarda daha dikkatli takip gerekir. Her cerrahi işlemden sonra belirli miktarda iz kalabilir; zaman içinde izlerin görünürlüğü azalabilir. Ağrı ise genellikle ilk günlerde daha belirgin olur ve hastane ortamında kontrol altına alınabilir.",
  },
];

const happyPatientImages = [
  { src: "/patients/happy-1.png", alt: "Mutlu hasta fotoğrafı 1" },
  { src: "/patients/happy-2.png", alt: "Mutlu hasta fotoğrafı 2" },
  { src: "/patients/happy-3.png", alt: "Mutlu hasta fotoğrafı 3" },
  { src: "/patients/happy-4.png", alt: "Mutlu hasta fotoğrafı 4" },
  { src: "/patients/happy-5.png", alt: "Mutlu hasta fotoğrafı 5" },
];

const guideFlowSteps = [
  {
    step: "1",
    title: "Ter bezlerinin tıkanması",
    text: "Ter bezleri tıkanır ve inflamasyon başlar.",
  },
  {
    step: "2",
    title: "Derinleşen atak",
    text: "Ağrılı nodüller ve apseler tekrar edebilir.",
  },
  {
    step: "3",
    title: "Tünel oluşumu",
    text: "Deri altında tünel oluşumu gelişebilir.",
  },
  {
    step: "4",
    title: "İz dokusu",
    text: "Ataklar sıklaşırsa iz ve sertleşme artar.",
  },
];

const guideProfileBars = [
  { label: "Ergenlik sonrası", width: 88 },
  { label: "20-40 yaş", width: 78 },
  { label: "Kadınlarda sık", width: 66 },
  { label: "Genetik yatkınlık", width: 54 },
  { label: "Sigara / obezite", width: 61 },
];

const hurleyCards = [
  {
    title: "Hurley I",
    tone: "from-emerald-50 to-white",
    accent: "text-emerald-700",
    points: ["Tekil veya sınırlı ataklar", "Tünel yok", "İz minimal olabilir"],
  },
  {
    title: "Hurley II",
    tone: "from-amber-50 to-white",
    accent: "text-amber-700",
    points: ["Tekrarlayan apseler", "Sınırlı tüneller", "Orta düzey iz dokusu"],
  },
  {
    title: "Hurley III",
    tone: "from-rose-50 to-white",
    accent: "text-rose-700",
    points: ["Yaygın hastalık", "Birbirine bağlı tüneller", "Belirgin skar ve inflamasyon"],
  },
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
  { label: "Rehber", href: "#rehber" },
  { label: "Hakkında", href: "#hs-hakkinda" },
  { label: "Belirtiler", href: "#belirtiler" },
  { label: "Yaklaşım", href: "#yaklasim" },
  { label: "Evreler", href: "#evreler" },
  { label: "Yorumlar", href: "#yorumlar" },
  { label: "Videolar", href: "#videolar" },
  { label: "İletişim", href: "#konum-iletisim" },
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

function ProfileIcon({ label }: { label: string }) {
  if (label.includes("Kadınlarda")) {
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-rose-600">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
          <path
            d="M12 4.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M12 13.5v6m-3-3h6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }

  if (label.includes("Sigara")) {
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
          <path
            d="M4 15h12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M16 11h2.5c1.1 0 2 .9 2 2v2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6 13v4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M18.5 8c.8.7 1 1.4 1 2.1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }

  if (label.includes("Genetik")) {
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-cyan-700">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
          <path
            d="M8 5c3 2 5 4.5 5 7.5S11 18 8 19.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M16 5c-3 2-5 4.5-5 7.5S13 18 16 19.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path d="M9 8h6M8 12h8M9 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
    );
  }

  if (label.includes("Ergenlik")) {
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-700">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
          <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </span>
    );
  }

  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-700">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
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
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(250px,auto)_1fr_auto] lg:items-center">
            <a href="#top" className="flex shrink-0 items-center gap-3 lg:min-w-[250px]">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-[1rem] bg-slate-950 text-white shadow-lg shadow-slate-950/10">
                <span className="absolute left-[11px] top-[9px] h-5 w-2.5 rotate-[28deg] rounded-full bg-white" />
                <span className="absolute right-[11px] top-[9px] h-5 w-2.5 -rotate-[28deg] rounded-full bg-white" />
              </span>
              <div className="leading-tight">
                <p className="whitespace-nowrap text-sm font-semibold tracking-[0.08em] text-slate-950 sm:text-base">
                  Prof. Dr. Bekir Atik
                </p>
                <p className="max-w-[230px] text-xs leading-snug text-slate-500 sm:max-w-none">
                  Estetik Plastik Rekonstrüktif Cerrahi Uzmanı
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
                  className="whitespace-nowrap rounded-full bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 xl:px-3.5 xl:text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#randevu"
              className="inline-flex w-full min-w-[150px] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-500 sm:w-auto lg:justify-self-end"
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

            <ConversionLink
              href="https://wa.me/905324615997"
              target="_blank"
              rel="noreferrer"
              sendTo={GOOGLE_ADS_CONVERSIONS.whatsappMessage}
              className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:bg-[#1fb85a]"
            >
              <WhatsAppMark />
              WhatsApp gönder
            </ConversionLink>
          </div>
        </div>
      </section>

      <VideoSection
        cards={videoCards.map(({ title, videoId }) => ({ title, videoId }))}
        shorts={shortCards}
      />

      <section id="icerik" className="mx-auto w-full max-w-7xl px-5 pb-28 sm:px-8 sm:pb-16 lg:px-12">
        <div className="space-y-6">
          <article
            id="rehber"
            className="scroll-mt-36 overflow-hidden rounded-[2.4rem] border border-sky-100 bg-white/92 shadow-sm"
          >
            <div className="grid gap-0 xl:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[560px] overflow-hidden bg-slate-950">
                <Image
                  src="/hero-hs.png"
                  alt="Ameliyathane arka planı"
                  fill
                  priority={false}
                  sizes="(max-width: 1280px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.18),rgba(15,23,42,0.42),rgba(2,132,199,0.55))]" />
                <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                  <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-100">
                      Uluslararası Hidradenitis Suppurativa Hasta Rehberi
                    </p>
                    <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      Hidradenitis Suppurativa nasıl başlar, nasıl ilerler, kimleri etkiler?
                    </h2>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {guideFlowSteps.map((item) => (
                      <div
                        key={item.step}
                        className="rounded-[1.35rem] border border-white/15 bg-white/12 p-4 text-white backdrop-blur-md"
                      >
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-slate-950 shadow-lg shadow-slate-950/10">
                            {item.step}
                          </span>
                          <div>
                            <p className="text-sm font-semibold">{item.title}</p>
                          </div>
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
                      Hidradenitis Suppurativa belirtileri
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {symptoms.slice(0, 6).map((item, index) => (
                        <div
                          key={item}
                          className="rounded-[1rem] border border-white bg-white p-3"
                        >
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
                      Hidradenitis Suppurativa kimlerde görülür?
                    </p>
                    <div className="mt-4 grid gap-4">
                      <div className="rounded-[1.25rem] bg-slate-950 p-4 text-white">
                        <p className="text-xs uppercase tracking-[0.2em] text-sky-200">
                          En sık başlangıç yaşı
                        </p>
                        <p className="mt-2 text-4xl font-semibold">20-40</p>
                        <p className="mt-2 text-sm text-slate-300">
                          Ergenlikten sonra başlayabilir ve tekrar eden ataklarla
                          sürebilir.
                        </p>
                      </div>
                      <div className="space-y-3">
                        {guideProfileBars.map((item) => (
                          <div key={item.label} className="space-y-1">
                            <div className="flex items-center justify-between text-sm">
                              <span className="font-medium text-slate-700">
                                {item.label}
                              </span>
                              <ProfileIcon label={item.label} />
                            </div>
                            <div className="h-2.5 rounded-full bg-slate-100">
                              <div
                                className="h-2.5 rounded-full bg-gradient-to-r from-sky-600 via-cyan-500 to-sky-300"
                                style={{ width: `${item.width}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>

              </div>
            </div>
          </article>

          <article
            id="hs-hakkinda"
            className="scroll-mt-36 rounded-[2rem] border border-sky-100 bg-white/85 p-6 shadow-sm sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Hidradenitis Suppurativa hakkında
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Hidradenitis Suppurativa kronik, tekrarlayıcı ve yaşam kalitesini
              etkileyebilen bir cilt hastalığıdır.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
              Hidradenitis Suppurativa&apos;nın sık görülen bölgeleri arasında
              koltuk altı, kasık, kalça, iç bacak ve meme altı gibi sürtünmeye
              açık alanlar öne çıkıyor. Hastalık ağrılı nodüller, apseler,
              akıntı, kötü koku ve zamanla tünel oluşumu ile ilerleyebilir.
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
                  kısıtlılığı artabilir.
                </p>
              </div>
            </div>
          </article>

          <article
            id="yaklasim"
            className="scroll-mt-36 rounded-[2rem] border border-sky-100 bg-gradient-to-b from-sky-50 to-white p-6 shadow-sm sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Klinik yaklaşım
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Hızlı Tanı Erken Müdahale
            </h2>
            <div className="mt-5 rounded-[1.5rem] border border-sky-100 bg-white/85 p-5 shadow-[0_12px_30px_rgba(59,130,246,0.06)] sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                Klinik çerçeve
              </p>
              <p className="mt-3 max-w-3xl text-lg font-semibold leading-8 text-slate-900">
                Koltuk altı ve kasıklarda başta olmak üzere vücudun herhangi bir
                yerinde ağrılı nodüller olursa erken dönemde doktora
                başvurulmalı. Tanı konulur konulmaz erken evrelerde tıbbi takip
                ile cerrahi planlama birlikte yapılmalı. İlerleyen evrelerde
                cerrahi yaklaşım öne çıkar.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-800">
                  Erken başvuru
                </span>
                <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-800">
                  Uzman değerlendirmesi
                </span>
                <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-800">
                  Cerrahi odak
                </span>
              </div>
            </div>

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
            id="evreler"
            className="scroll-mt-36 overflow-hidden rounded-[2.5rem] border border-sky-100 bg-[#eef7fd] shadow-sm"
          >
            <div className="flex flex-col gap-4 border-b border-sky-100 px-6 py-6 sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Hidradenitis Suppurativa evreleri
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2rem]">
                  Hurley sınıflaması süreci netleştirir
                </h2>
              </div>
              <span className="inline-flex w-fit items-center rounded-full border border-sky-300 bg-white px-5 py-2.5 text-sm font-semibold text-sky-700 shadow-sm">
                3 evre
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
            id="mutlu-hastalar"
            className="scroll-mt-36 rounded-[2rem] border border-sky-100 bg-white/85 p-6 text-slate-950 shadow-sm sm:p-8"
          >
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Mutlu hastalar
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                  İyileşme sonrası paylaşılan kareler
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
                      Google yorumları
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-700">
                      {card.quote}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </article>

          <article
            id="sik-sorulan-sorular"
            className="scroll-mt-36 rounded-[2rem] border border-sky-100 bg-white/92 p-6 text-slate-950 shadow-sm sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Sık sorulan sorular
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Hidradenitis Suppurativa hakkında merak edilenler
                </h2>
              </div>
              <span className="w-fit rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                10 soru
              </span>
            </div>

            <div className="mt-6 divide-y divide-sky-100 overflow-hidden rounded-[1.75rem] border border-sky-100 bg-sky-50/45">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group bg-white/70 open:bg-white"
                >
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
            id="konum-iletisim"
            className="scroll-mt-36 rounded-[2.4rem] border border-sky-100 bg-white/90 p-6 shadow-sm sm:p-8"
          >
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Konum ve iletişim
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                  Harita üzerinden bulun, formla ulaşın.
                </h2>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-stretch">
              <div className="overflow-hidden rounded-[2rem] border border-sky-100 bg-slate-100 shadow-[0_20px_50px_rgba(59,130,246,0.08)] lg:min-h-[720px]">
                <div className="h-full min-h-[360px] w-full lg:min-h-[720px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.7258932492573!2d29.15699147623869!3d40.92175562474773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac605b5d94175%3A0x2aae509ba9fb8afa!2sProf.%20Dr.%20Bekir%20Atik%20-%20Estetik%2C%20Plastik%20ve%20Rekonstr%C3%BCktif%20Uzman%C4%B1!5e0!3m2!1str!2sde!4v1778706919053!5m2!1str!2sde"
                    title="Prof. Dr. Bekir Atik konumu"
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
                      İletişim formu
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                      İletişime geçin
                    </h3>
                  </div>
                  <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                    Hızlı dönüş
                  </span>
                </div>

                <div className="mt-5 flex-1">
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>

          <article
            aria-label="Kurumsal logolar"
            className="rounded-[2rem] border border-sky-100 bg-white px-6 py-8 shadow-sm sm:px-8"
          >
            <div className="grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-5 sm:gap-x-8 sm:gap-y-10 lg:gap-x-10">
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
              <div className="flex justify-center">
                <Image
                  src="/logos/heart-of-health.svg"
                  alt="Heart of Health logosu"
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
        href="https://wa.me/905324615997"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile mesaj gönder"
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
