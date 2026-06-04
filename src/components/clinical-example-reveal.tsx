"use client";

import Image from "next/image";
import { useState } from "react";

type RevealMode = "closed" | "confirming" | "open";

type ClinicalExample = {
  src: string;
  alt: string;
  title: string;
};

type ClinicalExampleRevealProps = {
  examples: ClinicalExample[];
};

export function ClinicalExampleReveal({
  examples,
}: ClinicalExampleRevealProps) {
  const [mode, setMode] = useState<RevealMode>("closed");
  const isConfirming = mode === "confirming";
  const isOpen = mode === "open";

  return (
    <section
      id="klinik-ornek"
      className="scroll-mt-36 rounded-[2rem] border border-sky-100 bg-white/92 p-6 text-slate-950 shadow-sm sm:p-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Before / After
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Clinical examples from the treatment process
          </h2>
        </div>
        <span className="w-fit rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
          Click to view
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-[1.8rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-white shadow-[0_18px_50px_rgba(59,130,246,0.08)]">
        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="text-lg font-semibold text-slate-950">
              Sensitive clinical image content
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Click the button to view the clinical examples. Results may vary
              depending on disease stage, body area and treatment plan.
            </p>
          </div>
          <button
            type="button"
            aria-expanded={isOpen}
            onClick={() =>
              setMode((currentMode) =>
                currentMode === "closed" ? "confirming" : "closed",
              )
            }
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#e50914] px-6 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(229,9,20,0.18)] transition hover:-translate-y-0.5 hover:bg-[#d90812]"
          >
            {mode === "closed" ? "View images" : "Close"}
          </button>
        </div>

        {isConfirming ? (
          <div className="mx-5 mb-5 rounded-[1.4rem] border border-sky-100 bg-white p-5 shadow-sm sm:mx-6 sm:mb-6">
            <p className="text-lg font-semibold text-slate-950">
              Are you 18 years or older?
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
              This section includes sensitive clinical before/after imagery.
              Please confirm your age before viewing.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setMode("open")}
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#e50914] px-6 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(229,9,20,0.18)] transition hover:-translate-y-0.5 hover:bg-[#d90812]"
              >
                Yes, I am 18 or older
              </button>
              <button
                type="button"
                onClick={() => setMode("closed")}
                className="inline-flex h-12 items-center justify-center rounded-full border border-sky-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50"
              >
                No, close
              </button>
            </div>
          </div>
        ) : null}

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="border-t border-sky-100 bg-white p-3 sm:p-5">
              <div className="grid gap-4 lg:grid-cols-2">
                {examples.map((example) => (
                  <figure
                    key={example.src}
                    className="overflow-hidden rounded-[1.4rem] border border-sky-100 bg-slate-50 shadow-sm"
                  >
                    <Image
                      src={example.src}
                      alt={example.alt}
                      width={1536}
                      height={1024}
                      className="h-auto w-full"
                      sizes="(max-width: 1024px) 100vw, 560px"
                    />
                    <figcaption className="border-t border-sky-100 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                      {example.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
