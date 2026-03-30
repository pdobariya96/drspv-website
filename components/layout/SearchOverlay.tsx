"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Search,
  X,
  FileText,
  BookOpen,
  HelpCircle,
  BookA,
  Briefcase,
  Clock,
  ArrowRight,
} from "lucide-react";

type ResultType = "blog" | "knowledge" | "faq" | "glossary" | "service";

interface SearchResult {
  type: ResultType;
  title: string;
  excerpt: string;
  href: string;
  category?: string;
}

const TYPE_META: Record<ResultType, { icon: typeof FileText; label: string; color: string }> = {
  blog:      { icon: FileText,  label: "Blog",      color: "text-it-blue" },
  knowledge: { icon: BookOpen,  label: "Knowledge", color: "text-gst-green" },
  faq:       { icon: HelpCircle, label: "FAQ",       color: "text-ipo-amber" },
  glossary:  { icon: BookA,     label: "Glossary",  color: "text-fema-purple" },
  service:   { icon: Briefcase, label: "Service",   color: "text-biz-orange" },
};

const STORAGE_KEY = "drspv_recent_searches";
const MAX_RECENT = 5;

function getRecent(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveRecent(q: string) {
  const recent = getRecent().filter((r) => r !== q);
  recent.unshift(q);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recent.slice(0, MAX_RECENT)));
}

export default function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();
  const cardRef = useRef<HTMLDivElement>(null);

  const openOverlay = useCallback(() => {
    setOpen(true);
    setRecentSearches(getRecent());
  }, []);

  const closeOverlay = useCallback(() => {
    setOpen(false);
    setQuery("");
    setResults([]);
  }, []);

  // Listen for custom event and Cmd/Ctrl+K
  useEffect(() => {
    const handleCustom = () => openOverlay();
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (open) closeOverlay();
        else openOverlay();
      }
      if (e.key === "Escape" && open) {
        closeOverlay();
      }
    };

    window.addEventListener("openSearch", handleCustom);
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("openSearch", handleCustom);
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, openOverlay, closeOverlay]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Load search index once
  const searchIndexRef = useRef<Array<{ title: string; excerpt: string; slug: string; type: string; url: string }> | null>(null);

  useEffect(() => {
    if (!searchIndexRef.current) {
      fetch("/search-index.json")
        .then((r) => r.json())
        .then((data) => { searchIndexRef.current = data; })
        .catch(() => {});
    }
  }, []);

  // Debounced search (client-side)
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    debounceRef.current = setTimeout(() => {
      try {
        const index = searchIndexRef.current || [];
        const q = query.trim().toLowerCase();
        const matches = index.filter(
          (item) =>
            item.title.toLowerCase().includes(q) ||
            item.excerpt.toLowerCase().includes(q)
        );

        const TYPE_MAP: Record<string, ResultType> = {
          blogs: "blog", knowledge: "knowledge", faqs: "faq", glossary: "glossary", services: "service",
        };

        const flat: SearchResult[] = matches.slice(0, 10).map((item) => ({
          type: TYPE_MAP[item.type] || (item.type as ResultType),
          title: item.title,
          excerpt: item.excerpt,
          href: item.url,
        }));

        setResults(flat);
        saveRecent(query.trim());
        setRecentSearches(getRecent());
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 200);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  // Click outside card to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
      closeOverlay();
    }
  };

  // Group results by type
  const grouped = results.reduce<Record<ResultType, SearchResult[]>>((acc, r) => {
    if (!acc[r.type]) acc[r.type] = [];
    acc[r.type].push(r);
    return acc;
  }, {} as Record<ResultType, SearchResult[]>);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center pt-[12vh] px-4"
      style={{ backgroundColor: "rgba(7,16,30,0.96)" }}
      onClick={handleBackdropClick}
    >
      <div
        ref={cardRef}
        className="w-full max-w-[680px] rounded-xl bg-card border border-white/[0.06] shadow-2xl overflow-hidden animate-in fade-in"
      >
        {/* Search input */}
        <div className="relative flex items-center border-b border-white/[0.06]">
          <Search className="absolute left-4 h-5 w-5 text-muted pointer-events-none" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, FAQs, glossary, services..."
            className="w-full bg-transparent py-4 pl-12 pr-12 text-base text-text placeholder:text-dim outline-none focus:ring-0"
          />
          <div className="absolute right-3 flex items-center gap-2">
            <kbd className="hidden sm:inline-flex h-5 items-center rounded border border-white/[0.08] bg-white/[0.04] px-1.5 text-[10px] font-medium text-dim">
              ESC
            </kbd>
            <button
              onClick={closeOverlay}
              aria-label="Close search"
              className="flex h-7 w-7 items-center justify-center rounded-md text-muted hover:text-text hover:bg-white/[0.06] transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Content area */}
        <div className="max-h-[60vh] overflow-y-auto">
          {loading && (
            <div className="flex items-center justify-center py-10">
              <div className="h-5 w-5 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
            </div>
          )}

          {!loading && !query.trim() && recentSearches.length > 0 && (
            <div className="p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-dim mb-3 flex items-center gap-1.5">
                <Clock className="h-3 w-3" />
                Recent Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="rounded-full bg-white/[0.04] border border-white/[0.06] px-3 py-1 text-xs text-muted hover:text-text hover:bg-white/[0.08] transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!loading && query.trim() && results.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted text-sm">
                No results found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-dim text-xs mt-1">
                Try different keywords or browse our services
              </p>
            </div>
          )}

          {!loading &&
            (Object.keys(grouped) as ResultType[]).map((type) => {
              const meta = TYPE_META[type];
              const Icon = meta.icon;
              return (
                <div key={type} className="px-4 py-3">
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.1em] mb-2 ${meta.color}`}
                  >
                    {meta.label}
                  </p>
                  <div className="space-y-1">
                    {grouped[type].map((r, idx) => (
                      <a
                        key={idx}
                        href={r.href}
                        onClick={closeOverlay}
                        className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-white/[0.04] transition-colors group"
                      >
                        <Icon
                          className={`h-4 w-4 mt-0.5 shrink-0 ${meta.color} opacity-60`}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-text truncate group-hover:text-gold transition-colors">
                            {r.title}
                          </p>
                          <p className="text-xs text-dim line-clamp-1 mt-0.5">
                            {r.excerpt}
                          </p>
                        </div>
                        {r.category && (
                          <span className="text-[9px] font-semibold uppercase tracking-wider text-dim bg-white/[0.04] rounded px-1.5 py-0.5 shrink-0 mt-0.5">
                            {r.category}
                          </span>
                        )}
                        <ArrowRight className="h-3.5 w-3.5 text-dim opacity-0 group-hover:opacity-100 shrink-0 mt-1 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>

        {/* Footer hint */}
        <div className="border-t border-white/[0.06] px-4 py-2.5 flex items-center justify-between">
          <p className="text-[11px] text-dim">
            Type to search across all content
          </p>
          <kbd className="hidden sm:inline-flex h-5 items-center rounded border border-white/[0.08] bg-white/[0.04] px-1.5 text-[10px] font-medium text-dim">
            {typeof navigator !== "undefined" &&
            /Mac/.test(navigator.userAgent)
              ? "\u2318"
              : "Ctrl"}
            +K
          </kbd>
        </div>
      </div>
    </div>
  );
}
