"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface ChapterFAQProps {
  faqs: FAQ[];
}

export default function ChapterFAQ({ faqs }: ChapterFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="my-8">
      <h4 className="text-xs font-semibold text-text uppercase tracking-wider mb-4">
        Frequently Asked Questions
      </h4>
      <div className="space-y-2">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className="bg-card rounded-lg border border-border-2 overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-3 px-5 py-3.5 text-left"
              >
                <span className="text-sm text-text font-medium leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 text-dim transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-4 text-sm text-muted leading-relaxed border-t border-border-2 pt-3">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
