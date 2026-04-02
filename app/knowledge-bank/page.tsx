import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  FileText,
  Receipt,
  TrendingUp,
  Globe,
  BookOpen,
  ArrowRight,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Knowledge Bank — Free Tax & Finance Guides",
  description:
    "Free, in-depth guides on Income Tax, GST, IPO, and FEMA — written by qualified CAs. No signup required. Updated for Budget 2025.",
  keywords: [
    "income tax guide",
    "GST guide India",
    "IPO handbook",
    "FEMA guide NRI",
    "tax knowledge base",
    "free CA guides",
  ],
};

const pillars = [
  {
    slug: "income-tax",
    title: "Income Tax",
    shortTitle: "IT",
    description:
      "Complete guide to the Income Tax Act — deductions, exemptions, capital gains, TDS, advance tax, and landmark judgements.",
    icon: FileText,
    color: "text-it-blue",
    bg: "bg-it-blue/10",
    border: "border-it-blue/20",
    gradient: "from-it-blue/10 to-transparent",
    chapters: "15 Chapters",
  },
  {
    slug: "gst",
    title: "GST",
    shortTitle: "GST",
    description:
      "Everything about GST — registration, ITC, returns, e-invoicing, composition scheme, audits, and penalty provisions.",
    icon: Receipt,
    color: "text-gst-green",
    bg: "bg-gst-green/10",
    border: "border-gst-green/20",
    gradient: "from-gst-green/10 to-transparent",
    chapters: "8 Modules",
  },
  {
    slug: "ipo-handbook",
    title: "IPO Handbook",
    shortTitle: "IPO",
    description:
      "From pre-IPO preparation to post-listing compliance — the complete guide to SME and mainboard IPOs in India.",
    icon: TrendingUp,
    color: "text-ipo-amber",
    bg: "bg-ipo-amber/10",
    border: "border-ipo-amber/20",
    gradient: "from-ipo-amber/10 to-transparent",
    chapters: "9 Parts",
  },
  {
    slug: "fema",
    title: "FEMA",
    shortTitle: "FEMA",
    description:
      "Foreign Exchange Management Act decoded — FDI, LRS, NRI banking, ODI, ECB, and export-import regulations simplified.",
    icon: Globe,
    color: "text-fema-purple",
    bg: "bg-fema-purple/10",
    border: "border-fema-purple/20",
    gradient: "from-fema-purple/10 to-transparent",
    chapters: "8 Modules",
  },
];

const popularTags = [
  "Section 80C",
  "Capital Gains",
  "ITC Claims",
  "GSTR-3B",
  "SME IPO",
  "NRI Taxation",
  "LRS Limits",
  "TDS Rates",
];

const mostRead = [
  {
    title: "Old vs New Tax Regime — Which Saves More?",
    pillar: "Income Tax",
    pillarColor: "text-it-blue",
    href: "/knowledge-bank/income-tax",
    readTime: "8 min",
  },
  {
    title: "ITC Reconciliation — GSTR-2B vs Books",
    pillar: "GST",
    pillarColor: "text-gst-green",
    href: "/knowledge-bank/gst",
    readTime: "12 min",
  },
  {
    title: "SME IPO Eligibility Criteria on BSE & NSE",
    pillar: "IPO",
    pillarColor: "text-ipo-amber",
    href: "/knowledge-bank/ipo-handbook",
    readTime: "10 min",
  },
  {
    title: "LRS Limits and Reporting Under FEMA",
    pillar: "FEMA",
    pillarColor: "text-fema-purple",
    href: "/knowledge-bank/fema",
    readTime: "7 min",
  },
  {
    title: "Section 148 Reassessment — Complete Guide",
    pillar: "Income Tax",
    pillarColor: "text-it-blue",
    href: "/knowledge-bank/income-tax",
    readTime: "15 min",
  },
  {
    title: "E-Invoicing Under GST — Threshold & Process",
    pillar: "GST",
    pillarColor: "text-gst-green",
    href: "/knowledge-bank/gst",
    readTime: "9 min",
  },
];

export default function KnowledgeBankPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block rounded-full bg-gold/10 border border-gold/20 px-4 py-1.5 text-[11px] uppercase tracking-[2px] text-gold font-medium mb-6">
            Free &middot; No signup &middot; Written by CAs
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text mb-4">
            The{" "}
            <span className="gold-gradient-text">Knowledge Bank</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            In-depth guides on Income Tax, GST, IPO compliance, and FEMA — written
            by practising Chartered Accountants. Updated for Budget 2025.
          </p>

          {/* Search Bar (visual, links to search) */}
          <Link
            href="/resources"
            className="mx-auto flex max-w-lg items-center gap-3 rounded-xl bg-card border border-stone-200 px-5 py-3.5 transition-all hover:border-gold/30"
          >
            <Search className="h-5 w-5 text-muted shrink-0" />
            <span className="text-sm text-muted">
              Search articles, guides, and judgements...
            </span>
          </Link>

          {/* Popular Tags */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {popularTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-bg-3 border border-stone-200 px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-stone-200 bg-bg-2/50">
        <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
          {[
            { value: "70+", label: "Articles" },
            { value: "25+", label: "Landmark Judgements" },
            { value: "40+", label: "Worked Examples" },
            { value: "2025", label: "Budget Updated" },
            { value: "100%", label: "Free" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-xl sm:text-2xl font-bold text-gold">
                {s.value}
              </div>
              <div className="text-xs text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillar Cards */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl font-bold text-text mb-8 text-center">
          Choose a Pillar
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {pillars.map((p) => (
            <Link
              key={p.slug}
              href={`/knowledge-bank/${p.slug}`}
              className={`group relative rounded-xl bg-card border border-stone-200 overflow-hidden p-6 sm:p-8 transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-0.5`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-50`}
              />
              <div className="relative">
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${p.bg} border ${p.border}`}
                >
                  <p.icon className={`h-6 w-6 ${p.color}`} />
                </div>
                <h3 className="text-xl font-bold text-text mb-2 group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-dim">{p.chapters}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-gold">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Most Read */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="flex items-center gap-2 mb-8">
          <Star className="h-5 w-5 text-gold" />
          <h2 className="text-2xl font-bold text-text">Most Read</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mostRead.map((article) => (
            <Link
              key={article.title}
              href={article.href}
              className="group rounded-xl bg-card border border-stone-200 p-5 transition-all hover:border-gold/30 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="h-3.5 w-3.5 text-gold" />
                <span className={`text-[10px] uppercase tracking-[2px] font-medium ${article.pillarColor}`}>
                  {article.pillar}
                </span>
                <span className="ml-auto text-[10px] text-dim">
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-sm font-medium text-text leading-snug group-hover:text-gold transition-colors">
                {article.title}
              </h3>
              <span className="inline-flex items-center gap-1 text-xs text-muted mt-3 group-hover:text-gold transition-colors">
                Read <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
