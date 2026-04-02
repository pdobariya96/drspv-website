"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917777970565";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
            FAQs
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-it-blue/30 bg-card"
                    : "border-stone-200 bg-card"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    {isOpen && (
                      <span className="h-full w-[3px] shrink-0 self-stretch rounded-full bg-it-blue" />
                    )}
                    <span className="text-sm font-semibold text-text">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-stone-200 px-6 pb-5 pt-4">
                    <div className="flex gap-3">
                      <span className="mt-0.5 h-full w-[3px] shrink-0 rounded-full bg-it-blue" />
                      <div>
                        <p className="text-sm leading-relaxed text-muted">
                          {faq.answer}
                        </p>
                        <a
                          href={`https://wa.me/${WA}?text=${encodeURIComponent(
                            `Hi DRSPV, I have a question about: ${faq.question}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-wa-green transition-colors hover:text-wa-green/80"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                          Have a complex case? WhatsApp us
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
