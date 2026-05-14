"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type VideoCard = {
  title: string;
  videoId: string;
};

type VideoSectionProps = {
  cards: VideoCard[];
  shorts: VideoCard[];
};

export function VideoSection({ cards, shorts }: VideoSectionProps) {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveVideoId(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const activeCard = [...cards, ...shorts].find(
    (card) => card.videoId === activeVideoId,
  );

  return (
    <>
      <article
        id="videolar"
        className="scroll-mt-36 rounded-[2rem] border border-sky-100 bg-gradient-to-b from-white to-sky-50 p-6 text-slate-950 shadow-sm sm:p-8"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Hasta tecrübeleri
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Hasta hikayeleri
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@HidradenitisSuppurativaIstanbu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-700 shadow-sm transition hover:border-red-300 hover:bg-red-50"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white">
              ▶
            </span>
            Kanala git
          </a>
        </div>

        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 xl:grid-cols-4 md:overflow-visible md:pb-0">
          {cards.map((card) => (
            <button
              key={card.videoId}
              type="button"
              onClick={() => setActiveVideoId(card.videoId)}
              className="group w-[82vw] max-w-[320px] shrink-0 snap-start overflow-hidden rounded-[1.75rem] border border-sky-100 bg-white text-left shadow-[0_12px_32px_rgba(59,130,246,0.09)] transition hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(59,130,246,0.14)] md:w-auto md:max-w-none"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-200">
                <Image
                  src={`https://i.ytimg.com/vi/${card.videoId}/hqdefault.jpg`}
                  alt={card.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 82vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.05),rgba(15,23,42,0.28))]" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="max-w-[88%] rounded-2xl bg-slate-950/70 p-4 backdrop-blur-sm">
                    <p className="text-sm font-semibold leading-6 text-white">
                      {card.title}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Soru cevaplar
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              Kısa videolarla hızlı yanıtlar
            </h3>
          </div>
          <span className="hidden rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-sky-700 md:inline-flex">
            Kısa videolar
          </span>
        </div>

        <div className="mt-6 overflow-hidden rounded-[1.75rem]">
          <div className="short-marquee gap-4 py-2">
            {[...shorts, ...shorts].map((card, index) => (
              <button
                key={`${card.videoId}-${index}`}
                type="button"
                onClick={() => setActiveVideoId(card.videoId)}
                className="group mr-4 w-[260px] shrink-0 overflow-hidden rounded-[1.75rem] border border-sky-100 bg-white text-left shadow-[0_12px_32px_rgba(59,130,246,0.09)] transition hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(59,130,246,0.14)]"
              >
                <div className="relative aspect-[9/16] overflow-hidden bg-slate-200">
                  <Image
                    src={`https://i.ytimg.com/vi/${card.videoId}/hqdefault.jpg`}
                    alt={card.title}
                    fill
                    unoptimized
                    sizes="260px"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.34))]" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="rounded-2xl bg-slate-950/75 p-4 backdrop-blur-sm">
                      <p className="text-sm font-semibold leading-6 text-white">
                        {card.title}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </article>

      {activeCard ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm">
          <button
            type="button"
            aria-label="Videoyu kapat"
            className="absolute inset-0 cursor-default"
            onClick={() => setActiveVideoId(null)}
          />
          <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[1.75rem] bg-black shadow-[0_24px_80px_rgba(15,23,42,0.45)]">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 text-white">
              <p className="text-sm font-semibold">{activeCard.title}</p>
              <button
                type="button"
                onClick={() => setActiveVideoId(null)}
                className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Kapat
              </button>
            </div>
            <div className="relative aspect-video bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeCard.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={activeCard.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
