"use client";

import { useState } from "react";
import {
  Search,
  ChevronDown,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917777970565";

export default function FAQClient({ faqs }: { faqs: FAQ[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState<number | null>(null);

  const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

  const categoryCounts = categories.reduce(
    (acc, cat) => {
      acc[cat] =
        cat === "All" ? faqs.length : faqs.filter((f) => f.category === cat).length;
      return acc;
    },
    {} as Record<string, number>
  );

  const filtered = faqs.filter((f) => {
    const matchesCategory =
      activeCategory === "All" || f.category === activeCategory;
    const matchesSearch =
      !search ||
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-bg-2 py-12 px-4 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl">
        {/* Search + Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="w-full rounded-lg bg-card border border-white/[0.06] pl-10 pr-4 py-2.5 text-sm text-text placeholder:text-dim focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gold text-bg"
                    : "bg-card border border-white/[0.06] text-muted hover:text-text hover:border-gold/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-col Layout */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* FAQ Accordion */}
          <div className="space-y-3">
            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted text-sm">
                  No questions found. Try a different search term.
                </p>
              </div>
            )}
            {filtered.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl bg-card border transition-all duration-200 ${
                    isOpen
                      ? "border-it-blue/30 border-l-2 border-l-it-blue"
                      : "border-white/[0.06]"
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-start gap-3 p-5 text-left"
                  >
                    <div className="flex-1">
                      <span className="text-[10px] uppercase tracking-wider text-muted font-medium">
                        {faq.category}
                      </span>
                      <h3 className="text-sm font-semibold text-text mt-1 leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-muted shrink-0 mt-1 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="border-t border-white/[0.06] pt-4">
                        <p className="text-sm text-muted leading-relaxed">
                          {faq.answer}
                        </p>
                        <a
                          href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hello DRSPV, I have a question about: ${faq.question}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-wa-green hover:text-wa-green/80 transition-colors"
                        >
                          Have a complex case? WhatsApp us
                          <ArrowRight className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Topic Counts */}
            <div className="rounded-xl bg-card border border-white/[0.06] p-5">
              <h3 className="text-sm font-bold text-text mb-4">
                Browse by Topic
              </h3>
              <div className="space-y-2">
                {categories
                  .filter((c) => c !== "All")
                  .map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                        activeCategory === cat
                          ? "bg-gold/10 text-gold"
                          : "text-muted hover:bg-card hover:text-text"
                      }`}
                    >
                      <span>{cat}</span>
                      <span className="text-xs bg-bg-2 px-2 py-0.5 rounded-full">
                        {categoryCounts[cat]}
                      </span>
                    </button>
                  ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="rounded-xl bg-wa-green/5 border border-wa-green/20 p-5">
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle className="h-5 w-5 text-wa-green" />
                <h3 className="text-sm font-bold text-text">
                  Can&apos;t find your answer?
                </h3>
              </div>
              <p className="text-xs text-muted mb-4 leading-relaxed">
                Ask our CAs directly on WhatsApp. Most queries are answered
                within 15 minutes during business hours.
              </p>
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent("Hello DRSPV, I have a question about...")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center rounded-lg bg-wa-green px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
