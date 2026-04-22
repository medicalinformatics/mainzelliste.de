"use client";

import React, { useEffect, useRef, useState } from "react";

interface UseCase {
  title: string;
  from: string;
  to: string;
  description: string;
  icon: React.ReactNode;
}

const USE_CASES: UseCase[] = [
  {
    title: "IDAT to Pseudonym",
    from: "Identifying Data (IDAT)",
    to: "Pseudonym (PID)",
    description:
      "Submit patient-identifying attributes such as name, date of birth, and address. Mainzelliste creates a globally unique pseudonym using probabilistic record linkage — even with incomplete or noisy data.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-16 w-16" aria-hidden="true">
        <rect x="2" y="8" width="16" height="32" rx="3" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
        <path d="M6 16h8M6 21h8M6 26h5" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 24h8" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M25 20l4 4-4 4" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="30" y="19" width="16" height="10" rx="2" className="fill-primary" />
        <text x="32" y="27" fontSize="6" fill="white" fontFamily="monospace">PID</text>
      </svg>
    ),
  },
  {
    title: "Pseudonym to Pseudonym",
    from: "Local Pseudonym",
    to: "Cross-Site Pseudonym",
    description:
      "Translate a pseudonym issued by one site or study into a pseudonym valid in another context. Enables privacy-preserving data linkage across institutions without ever exposing identifying attributes.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-16 w-16" aria-hidden="true">
        <rect x="2" y="17" width="13" height="14" rx="2" className="fill-primary" />
        <text x="4.5" y="27" fontSize="6" fill="white" fontFamily="monospace">PID</text>
        <path d="M16 24h16" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 20l4 4-4 4" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="33" y="17" width="13" height="14" rx="2" className="fill-primary/20 stroke-primary" strokeWidth="1.5" />
        <text x="35.5" y="27" fontSize="6" className="fill-primary" fontFamily="monospace">PID</text>
      </svg>
    ),
  },
  {
    title: "Pseudonym to IDAT",
    from: "Pseudonym (PID)",
    to: "Identifying Data (IDAT)",
    description:
      "Authorised parties can resolve a pseudonym back to the original identifying attributes via a token-secured callback. Full audit trails ensure traceability and GDPR compliance.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-16 w-16" aria-hidden="true">
        <rect x="30" y="8" width="16" height="32" rx="3" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
        <path d="M34 16h8M34 21h8M34 26h5" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 24H10" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 20l-4 4 4 4" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="7" width="16" height="10" rx="2" className="fill-primary" />
        <text x="4" y="15" fontSize="6" fill="white" fontFamily="monospace">PID</text>
      </svg>
    ),
  },
  {
    title: "Pseudonym to Consent",
    from: "Pseudonym (PID)",
    to: "Consent Status",
    description:
      "Query whether a patient has given consent for a specific study or data use purpose using only the pseudonym. Integrates with broad-consent infrastructure such as gICS without revealing IDAT.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-16 w-16" aria-hidden="true">
        <rect x="2" y="7" width="16" height="10" rx="2" className="fill-primary" />
        <text x="4" y="15" fontSize="6" fill="white" fontFamily="monospace">PID</text>
        <path d="M20 24h8" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M25 20l4 4-4 4" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="30" y="10" width="16" height="28" rx="3" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
        <path d="M34 24l4 4 6-7" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function UseCaseCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = USE_CASES.length;

  const goto = (index: number) => setActive((index + total) % total);

  useEffect(() => {
    if (!paused) {
      timerRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % total);
      }, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, total]);

  const uc = USE_CASES[active];

  return (
    <section
      id="usecases"
      className="py-16 md:py-20 lg:py-28"
      aria-label="Use case carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[40px]">
            Use Cases
          </h2>
          <p className="text-base text-body-color">
            Mainzelliste supports a range of pseudonymisation workflows
          </p>
        </div>

        <div className="mx-auto flex max-w-4xl items-center gap-4">
          {/* Left arrow */}
          <button
            onClick={() => { setPaused(true); goto(active - 1); }}
            aria-label="Previous use case"
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-stroke bg-white text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-stroke-dark dark:bg-dark dark:text-body-color-dark"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Card */}
          <div
            key={active}
            className="flex-1 rounded-xl border border-stroke bg-white p-8 shadow-two transition-all dark:border-stroke-dark dark:bg-dark dark:shadow-none"
            style={{ animation: "fadeSlideIn 0.3s ease both" }}
          >
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
              <div className="flex-shrink-0">{uc.icon}</div>
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    {uc.from}
                  </span>
                  <svg viewBox="0 0 20 6" className="h-2 w-5 text-body-color" fill="none" aria-hidden="true">
                    <path d="M0 3h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M13 1l3 2-3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    {uc.to}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  {uc.title}
                </h3>
                <p className="text-base leading-relaxed text-body-color">
                  {uc.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => { setPaused(true); goto(active + 1); }}
            aria-label="Next use case"
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-stroke bg-white text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-stroke-dark dark:bg-dark dark:text-body-color-dark"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div
          role="tablist"
          aria-label="Select use case"
          className="mt-6 flex items-center justify-center gap-3"
        >
          {USE_CASES.map((u, i) => (
            <button
              key={u.title}
              role="tab"
              aria-selected={i === active}
              aria-label={u.title}
              onClick={() => { setPaused(true); goto(i); }}
              className={`h-2.5 w-2.5 rounded-full border transition-all duration-200 ${
                i === active
                  ? "scale-125 border-primary bg-primary"
                  : "border-primary bg-transparent hover:bg-primary/20"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>
    </section>
  );
}
