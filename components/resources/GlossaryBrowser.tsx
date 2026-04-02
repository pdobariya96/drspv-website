"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

interface Term {
  name: string;
  definition: string;
  relatedLink?: string;
  relatedLabel?: string;
}

interface GlossaryBrowserProps {
  terms: Term[];
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryBrowser({ terms }: GlossaryBrowserProps) {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = terms;
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q)
      );
    }
    if (activeLetter) {
      result = result.filter((t) =>
        t.name.toUpperCase().startsWith(activeLetter)
      );
    }
    return result;
  }, [terms, search, activeLetter]);

  // Group by first letter
  const grouped = useMemo(() => {
    const map = new Map<string, Term[]>();
    for (const t of filtered) {
      const letter = t.name[0].toUpperCase();
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter)!.push(t);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <section className="w-full bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
            Reference
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-4xl">
            Glossary
          </h2>
        </div>

        {/* Search bar */}
        <div className="mx-auto mb-6 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search terms..."
              className="w-full rounded-lg border border-stone-200 bg-card py-2.5 pl-10 pr-4 text-sm text-text placeholder:text-muted/60 outline-none focus:border-gold/30 transition-colors"
            />
          </div>
        </div>

        {/* Alphabet bar */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-1">
          <button
            onClick={() => setActiveLetter(null)}
            className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
              activeLetter === null
                ? "bg-gold text-bg"
                : "text-muted hover:text-text"
            }`}
          >
            All
          </button>
          {alphabet.map((l) => (
            <button
              key={l}
              onClick={() => setActiveLetter(activeLetter === l ? null : l)}
              className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
                activeLetter === l
                  ? "bg-gold text-bg"
                  : "text-muted hover:text-text"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Terms grid */}
        {grouped.length === 0 ? (
          <p className="text-center text-sm text-muted">No terms found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {grouped.map(([letter, letterTerms]) => (
              <div key={letter}>
                <h3 className="mb-4 text-2xl font-bold gold-gradient-text">
                  {letter}
                </h3>
                <div className="flex flex-col gap-4">
                  {letterTerms.map((t) => (
                    <div key={t.name}>
                      <p className="text-sm font-semibold text-text">
                        {t.name}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {t.definition}
                      </p>
                      {t.relatedLink && (
                        <Link
                          href={t.relatedLink}
                          className="mt-1 inline-block text-[10px] font-medium text-gold hover:text-gold-2"
                        >
                          {t.relatedLabel || "Learn more"}
                        </Link>
                      )}
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
