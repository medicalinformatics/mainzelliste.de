"use client";

import React, { useEffect, useRef, useState } from "react";

interface UseCase {
  title: string;
  from: string;
  to: string;
  description: string;
  icon: React.ReactNode;
}

const idatToPseudonym = (
  <svg viewBox="0 0 300 200" className="h-full w-full" aria-hidden="true">
    <defs>
      <marker id="uc1-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </marker>
    </defs>
    <rect x="10" y="20" width="100" height="160" rx="10" fill="#E6F1FB" stroke="#185FA5" strokeWidth="0.5"/>
    <text x="60" y="42" textAnchor="middle" fontSize="11" fontWeight="500" fill="#0C447C">IDAT</text>
    <line x1="18" y1="54" x2="102" y2="54" stroke="#185FA5" strokeWidth="0.5" opacity=".4"/>
    <rect x="18" y="62" width="84" height="14" rx="3" fill="#B5D4F4" opacity=".7"/>
    <text x="60" y="73" textAnchor="middle" fontSize="9" fill="#0C447C">Name</text>
    <rect x="18" y="80" width="84" height="14" rx="3" fill="#B5D4F4" opacity=".5"/>
    <text x="60" y="91" textAnchor="middle" fontSize="9" fill="#0C447C">Birth date</text>
    <rect x="18" y="98" width="84" height="14" rx="3" fill="#B5D4F4" opacity=".5"/>
    <text x="60" y="109" textAnchor="middle" fontSize="9" fill="#0C447C">Address</text>
    <rect x="18" y="116" width="84" height="14" rx="3" fill="#B5D4F4" opacity=".3"/>
    <text x="60" y="127" textAnchor="middle" fontSize="9" fill="#0C447C">Gender</text>
    <rect x="18" y="134" width="84" height="14" rx="3" fill="#B5D4F4" opacity=".2"/>
    <text x="60" y="145" textAnchor="middle" fontSize="9" fill="#0C447C">...</text>
    <rect x="115" y="60" width="80" height="30" rx="6" fill="#185FA5"/>
    <text x="155" y="72" textAnchor="middle" fontSize="9" fontWeight="500" fill="#E6F1FB">Record</text>
    <text x="155" y="84" textAnchor="middle" fontSize="9" fill="#B5D4F4">linkage</text>
    <text x="155" y="108" textAnchor="middle" fontSize="8" fill="#185FA5">pseudonymise</text>
    <line x1="110" y1="116" x2="198" y2="116" stroke="#185FA5" strokeWidth="1.5" markerEnd="url(#uc1-arrow)"/>
    <rect x="115" y="130" width="76" height="16" rx="4" fill="#0C447C" opacity=".15"/>
    <rect x="115" y="150" width="76" height="16" rx="4" fill="#0C447C" opacity=".1"/>
    <text x="153" y="141" textAnchor="middle" fontSize="8" fill="#0C447C">Match threshold</text>
    <text x="153" y="161" textAnchor="middle" fontSize="8" fill="#0C447C">Deduplication</text>
    <rect x="200" y="20" width="90" height="160" rx="10" fill="#E1F5EE" stroke="#0F6E56" strokeWidth="0.5"/>
    <text x="245" y="42" textAnchor="middle" fontSize="11" fontWeight="500" fill="#085041">PID</text>
    <line x1="208" y1="54" x2="282" y2="54" stroke="#0F6E56" strokeWidth="0.5" opacity=".4"/>
    <rect x="208" y="64" width="74" height="34" rx="4" fill="#9FE1CB" opacity=".7"/>
    <text x="245" y="77" textAnchor="middle" fontSize="10" fontWeight="500" fill="#085041">A5</text>
    <text x="245" y="91" textAnchor="middle" fontSize="10" fontWeight="500" fill="#085041">8DK76C</text>
    <rect x="208" y="104" width="74" height="34" rx="4" fill="#9FE1CB" opacity=".5"/>
    <text x="245" y="117" textAnchor="middle" fontSize="10" fontWeight="500" fill="#085041">FZ</text>
    <text x="245" y="131" textAnchor="middle" fontSize="10" fontWeight="500" fill="#085041">93G2TP</text>
    <rect x="208" y="144" width="74" height="28" rx="4" fill="#9FE1CB" opacity=".3"/>
    <text x="245" y="162" textAnchor="middle" fontSize="9" fill="#085041">...</text>
  </svg>
);

const pseudonymToPseudonym = (
  <svg viewBox="0 0 300 200" className="h-full w-full" aria-hidden="true">
    <defs>
      <marker id="uc2-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </marker>
    </defs>
    <rect x="10" y="30" width="78" height="140" rx="10" fill="#E1F5EE" stroke="#0F6E56" strokeWidth="0.5"/>
    <text x="49" y="50" textAnchor="middle" fontSize="10" fontWeight="500" fill="#085041">Site A</text>
    <line x1="18" y1="58" x2="80" y2="58" stroke="#0F6E56" strokeWidth="0.5" opacity=".4"/>
    <rect x="18" y="66" width="62" height="28" rx="4" fill="#9FE1CB" opacity=".8"/>
    <text x="49" y="77" textAnchor="middle" fontSize="9" fontWeight="500" fill="#085041">PID-A</text>
    <text x="49" y="88" textAnchor="middle" fontSize="8" fill="#085041">A58DK76C</text>
    <rect x="18" y="100" width="62" height="28" rx="4" fill="#9FE1CB" opacity=".5"/>
    <text x="49" y="111" textAnchor="middle" fontSize="9" fontWeight="500" fill="#085041">PID-A</text>
    <text x="49" y="122" textAnchor="middle" fontSize="8" fill="#085041">FZ93G2TP</text>
    <rect x="18" y="134" width="62" height="24" rx="4" fill="#9FE1CB" opacity=".25"/>
    <text x="49" y="150" textAnchor="middle" fontSize="9" fill="#085041">...</text>
    <rect x="111" y="72" width="78" height="56" rx="8" fill="#185FA5"/>
    <text x="150" y="91" textAnchor="middle" fontSize="9" fontWeight="500" fill="#E6F1FB">Mainzelliste</text>
    <text x="150" y="104" textAnchor="middle" fontSize="8" fill="#B5D4F4">ID translation</text>
    <text x="150" y="117" textAnchor="middle" fontSize="8" fill="#85B7EB">service</text>
    <path d="M88 90 L109 100" stroke="#0F6E56" strokeWidth="1.5" fill="none" markerEnd="url(#uc2-arrow)"/>
    <path d="M88 114 L109 110" stroke="#0F6E56" strokeWidth="1" fill="none" opacity=".5" markerEnd="url(#uc2-arrow)"/>
    <path d="M191 94 L212 84" stroke="#7F77DD" strokeWidth="1.5" fill="none" markerEnd="url(#uc2-arrow)"/>
    <path d="M191 110 L212 116" stroke="#7F77DD" strokeWidth="1" fill="none" opacity=".5" markerEnd="url(#uc2-arrow)"/>
    <rect x="212" y="30" width="78" height="140" rx="10" fill="#EEEDFE" stroke="#534AB7" strokeWidth="0.5"/>
    <text x="251" y="50" textAnchor="middle" fontSize="10" fontWeight="500" fill="#26215C">Site B</text>
    <line x1="220" y1="58" x2="282" y2="58" stroke="#534AB7" strokeWidth="0.5" opacity=".4"/>
    <rect x="220" y="66" width="62" height="28" rx="4" fill="#CECBF6" opacity=".8"/>
    <text x="251" y="77" textAnchor="middle" fontSize="9" fontWeight="500" fill="#26215C">PID-B</text>
    <text x="251" y="88" textAnchor="middle" fontSize="8" fill="#26215C">X9JM24KR</text>
    <rect x="220" y="100" width="62" height="28" rx="4" fill="#CECBF6" opacity=".5"/>
    <text x="251" y="111" textAnchor="middle" fontSize="9" fontWeight="500" fill="#26215C">PID-B</text>
    <text x="251" y="122" textAnchor="middle" fontSize="8" fill="#26215C">WB71LP08</text>
    <rect x="220" y="134" width="62" height="24" rx="4" fill="#CECBF6" opacity=".25"/>
    <text x="251" y="150" textAnchor="middle" fontSize="9" fill="#26215C">...</text>
  </svg>
);

const pseudonymToIdat = (
  <svg viewBox="0 0 300 200" className="h-full w-full" aria-hidden="true">
    <defs>
      <marker id="uc3-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </marker>
    </defs>
    <rect x="10" y="20" width="82" height="160" rx="10" fill="#E1F5EE" stroke="#0F6E56" strokeWidth="0.5"/>
    <text x="51" y="40" textAnchor="middle" fontSize="10" fontWeight="500" fill="#085041">PID</text>
    <line x1="18" y1="50" x2="84" y2="50" stroke="#0F6E56" strokeWidth="0.5" opacity=".4"/>
    <rect x="18" y="60" width="66" height="28" rx="4" fill="#9FE1CB" opacity=".8"/>
    <text x="51" y="78" textAnchor="middle" fontSize="10" fontWeight="500" fill="#085041">A58DK76C</text>
    <rect x="36" y="100" width="30" height="16" rx="4" fill="#0F6E56" opacity=".2"/>
    <text x="51" y="112" textAnchor="middle" fontSize="8" fill="#085041">token</text>
    <path d="M51 118 L51 134" stroke="#0F6E56" strokeWidth="1" fill="none" markerEnd="url(#uc3-arrow)" opacity=".7"/>
    <rect x="20" y="136" width="62" height="18" rx="4" fill="#0F6E56"/>
    <text x="51" y="149" textAnchor="middle" fontSize="8" fill="#E1F5EE">authorised</text>
    <rect x="103" y="75" width="94" height="50" rx="8" fill="#185FA5"/>
    <text x="150" y="93" textAnchor="middle" fontSize="9" fontWeight="500" fill="#E6F1FB">Mainzelliste</text>
    <text x="150" y="106" textAnchor="middle" fontSize="8" fill="#B5D4F4">resolve + audit</text>
    <line x1="92" y1="100" x2="101" y2="100" stroke="#0F6E56" strokeWidth="1.5" fill="none" markerEnd="url(#uc3-arrow)"/>
    <line x1="199" y1="100" x2="207" y2="100" stroke="#378ADD" strokeWidth="1.5" fill="none" markerEnd="url(#uc3-arrow)"/>
    <rect x="207" y="20" width="83" height="160" rx="10" fill="#E6F1FB" stroke="#185FA5" strokeWidth="0.5"/>
    <text x="248" y="40" textAnchor="middle" fontSize="10" fontWeight="500" fill="#0C447C">IDAT</text>
    <line x1="215" y1="50" x2="282" y2="50" stroke="#185FA5" strokeWidth="0.5" opacity=".4"/>
    <rect x="215" y="60" width="67" height="13" rx="3" fill="#B5D4F4" opacity=".7"/>
    <text x="222" y="70" fontSize="8" fill="#0C447C">Müller, Josef</text>
    <rect x="215" y="77" width="67" height="13" rx="3" fill="#B5D4F4" opacity=".5"/>
    <text x="222" y="87" fontSize="8" fill="#0C447C">1968-04-12</text>
    <rect x="215" y="94" width="67" height="13" rx="3" fill="#B5D4F4" opacity=".5"/>
    <text x="222" y="104" fontSize="8" fill="#0C447C">Mainz, 55131</text>
    <rect x="215" y="111" width="67" height="13" rx="3" fill="#B5D4F4" opacity=".3"/>
    <text x="222" y="121" fontSize="8" fill="#0C447C">male</text>
    <rect x="215" y="128" width="67" height="13" rx="3" fill="#B5D4F4" opacity=".2"/>
    <text x="222" y="138" fontSize="8" fill="#0C447C">...</text>
    <rect x="214" y="152" width="68" height="16" rx="4" fill="#185FA5" opacity=".15"/>
    <text x="248" y="163" textAnchor="middle" fontSize="8" fill="#0C447C">audit logged</text>
  </svg>
);

const pseudonymToConsent = (
  <svg viewBox="0 0 300 200" className="h-full w-full" aria-hidden="true">
    <defs>
      <marker id="uc4-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </marker>
    </defs>
    <rect x="10" y="24" width="72" height="152" rx="10" fill="#E1F5EE" stroke="#0F6E56" strokeWidth="0.5"/>
    <text x="46" y="44" textAnchor="middle" fontSize="10" fontWeight="500" fill="#085041">PID</text>
    <line x1="18" y1="52" x2="74" y2="52" stroke="#0F6E56" strokeWidth="0.5" opacity=".4"/>
    <rect x="18" y="62" width="56" height="24" rx="4" fill="#9FE1CB" opacity=".8"/>
    <text x="46" y="77" textAnchor="middle" fontSize="9" fontWeight="500" fill="#085041">A58DK76C</text>
    <rect x="18" y="92" width="56" height="16" rx="4" fill="#0F6E56" opacity=".15"/>
    <text x="46" y="103" textAnchor="middle" fontSize="8" fill="#085041">study scope</text>
    <line x1="84" y1="100" x2="110" y2="100" stroke="#0F6E56" strokeWidth="1.5" fill="none" markerEnd="url(#uc4-arrow)"/>
    <rect x="110" y="72" width="80" height="56" rx="8" fill="#185FA5"/>
    <text x="150" y="91" textAnchor="middle" fontSize="9" fontWeight="500" fill="#E6F1FB">Mainzelliste</text>
    <text x="150" y="104" textAnchor="middle" fontSize="8" fill="#B5D4F4">consent lookup</text>
    <text x="150" y="116" textAnchor="middle" fontSize="8" fill="#85B7EB">via FHIR API</text>
    <line x1="192" y1="100" x2="216" y2="100" stroke="#378ADD" strokeWidth="1.5" fill="none" markerEnd="url(#uc4-arrow)"/>
    <rect x="218" y="12" width="72" height="176" rx="10" fill="#FAEEDA" stroke="#854F0B" strokeWidth="0.5"/>
    <text x="254" y="32" textAnchor="middle" fontSize="10" fontWeight="500" fill="#412402">Consent</text>
    <line x1="226" y1="42" x2="282" y2="42" stroke="#854F0B" strokeWidth="0.5" opacity=".4"/>
    <rect x="226" y="50" width="56" height="20" rx="4" fill="#3B6D11" opacity=".85"/>
    <text x="254" y="63" textAnchor="middle" fontSize="8" fontWeight="500" fill="#EAF3DE">Research use</text>
    <rect x="226" y="74" width="56" height="20" rx="4" fill="#3B6D11" opacity=".7"/>
    <text x="254" y="87" textAnchor="middle" fontSize="8" fontWeight="500" fill="#EAF3DE">Biobanking</text>
    <rect x="226" y="98" width="56" height="28" rx="4" fill="#E24B4A" opacity=".8"/>
    <text x="254" y="109" textAnchor="middle" fontSize="8" fontWeight="500" fill="#FCEBEB">Recontact</text>
    <text x="254" y="121" textAnchor="middle" fontSize="7" fill="#FCEBEB">withdrawn</text>
    <rect x="226" y="130" width="56" height="20" rx="4" fill="#3B6D11" opacity=".55"/>
    <text x="254" y="143" textAnchor="middle" fontSize="8" fontWeight="500" fill="#EAF3DE">Seq. data</text>
    <rect x="226" y="154" width="56" height="20" rx="4" fill="#FAC775" opacity=".5"/>
    <text x="254" y="167" textAnchor="middle" fontSize="8" fill="#412402">pending...</text>
  </svg>
);

const USE_CASES: UseCase[] = [
  {
    title: "IDAT to Pseudonym",
    from: "Identifying Data (IDAT)",
    to: "Pseudonym (PID)",
    description:
      "Submit patient-identifying attributes such as name, date of birth, and address. Mainzelliste creates a globally unique pseudonym using probabilistic record linkage — even with incomplete or noisy data.",
    icon: idatToPseudonym,
  },
  {
    title: "Pseudonym to Pseudonym",
    from: "Local Pseudonym",
    to: "Cross-Site Pseudonym",
    description:
      "Translate a pseudonym issued by one site or study into a pseudonym valid in another context. Enables privacy-preserving data linkage across institutions without ever exposing identifying attributes.",
    icon: pseudonymToPseudonym,
  },
  {
    title: "Pseudonym to IDAT",
    from: "Pseudonym (PID)",
    to: "Identifying Data (IDAT)",
    description:
      "Authorised parties can resolve a pseudonym back to the original identifying attributes via a token-secured callback. Full audit trails ensure traceability and GDPR compliance.",
    icon: pseudonymToIdat,
  },
  {
    title: "Pseudonym to Consent",
    from: "Pseudonym (PID)",
    to: "Consent Status",
    description:
      "Query whether a patient has given consent for a specific study or data use purpose using only the pseudonym. Integrates with broad-consent infrastructure such as gICS without revealing IDAT.",
    icon: pseudonymToConsent,
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
          <button
            onClick={() => { setPaused(true); goto(active - 1); }}
            aria-label="Previous use case"
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-stroke bg-white text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-stroke-dark dark:bg-dark dark:text-body-color-dark"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div
            key={active}
            className="flex-1 rounded-xl border border-stroke bg-white shadow-two transition-all dark:border-stroke-dark dark:bg-dark dark:shadow-none"
            style={{ animation: "fadeSlideIn 0.3s ease both" }}
          >
            <div className="flex flex-col gap-0 sm:flex-row">
              <div className="flex w-full items-center justify-center p-4 sm:w-96 sm:flex-shrink-0 sm:border-r sm:border-stroke sm:dark:border-stroke-dark">
                <div className="h-64 w-full">
                  {uc.icon}
                </div>
              </div>
              <div className="flex-1 p-6">
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
