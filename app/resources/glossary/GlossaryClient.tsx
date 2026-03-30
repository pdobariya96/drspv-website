"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

interface Term {
  term: string;
  definition: string;
  related: string;
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryClient({ terms }: { terms: Term[] }) {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const filtered = terms.filter((t) => {
    const matchesSearch =
      !search ||
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.definition.toLowerCase().includes(search.toLowerCase());
    const matchesLetter =
      !activeLetter || t.term.charAt(0).toUpperCase() === activeLetter;
    return matchesSearch && matchesLetter;
  });

  // Group by letter
  const grouped = filtered.reduce(
    (acc, t) => {
      const letter = t.term.charAt(0).toUpperCase();
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(t);
      return acc;
    },
    {} as Record<string, Term[]>
  );

  const sortedLetters = Object.keys(grouped).sort();

  // Letters that have terms
  const availableLetters = new Set(terms.map((t) => t.term.charAt(0).toUpperCase()));

  return (
    <section className="bg-bg-2 py-12 px-4 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl">
        {/* Search Bar */}
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setActiveLetter(null);
            }}
            placeholder="Search terms..."
            className="w-full rounded-lg bg-card border border-white/[0.06] pl-10 pr-4 py-2.5 text-sm text-text placeholder:text-dim focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-colors"
          />
        </div>

        {/* Alphabet Bar */}
        <div className="flex flex-wrap gap-1 mb-8">
          <button
            onClick={() => setActiveLetter(null)}
            className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all ${
              !activeLetter
                ? "bg-gold text-bg"
                : "bg-card border border-white/[0.06] text-muted hover:text-text hover:border-gold/30"
            }`}
          >
            All
          </button>
          {ALPHABET.map((letter) => {
            const hasTerms = availableLetters.has(letter);
            return (
              <button
                key={letter}
                onClick={() => {
                  if (hasTerms) {
                    setActiveLetter(activeLetter === letter ? null : letter);
                    setSearch("");
                  }
                }}
                disabled={!hasTerms}
                className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all ${
                  activeLetter === letter
                    ? "bg-gold text-bg"
                    : hasTerms
                      ? "bg-card border border-white/[0.06] text-muted hover:text-text hover:border-gold/30"
                      : "bg-card/30 text-dim/30 cursor-not-allowed"
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Terms Grid */}
        {sortedLetters.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted text-sm">
              No terms found. Try a different search.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedLetters.map((letter) => (
              <div key={letter} id={`letter-${letter}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-gold">{letter}</span>
                  <div className="flex-1 h-px bg-gold/20" />
                </div>
                <div className="space-y-3">
                  {grouped[letter].map((t) => (
                    <div
                      key={t.term}
                      className="rounded-lg bg-card border border-white/[0.06] p-4 transition-all hover:border-gold/20"
                    >
                      <h3 className="text-sm font-bold text-text mb-1">
                        {t.term}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed mb-2">
                        {t.definition}
                      </p>
                      <Link
                        href={t.related}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold text-gold hover:text-gold-2 transition-colors"
                      >
                        Learn more <ArrowRight className="h-2.5 w-2.5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
