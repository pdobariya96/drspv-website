import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  ShieldAlert,
  Ban,
  CheckCircle,
  ArrowRight,
  BookOpen,
  FileX,
  IndianRupee,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Planning an IPO? We Guide You End-to-End",
  description:
    "Going public on BSE SME or NSE Emerge? DRSPV & Associates guides you from DRHP preparation to SEBI filing and post-listing compliance.",
  keywords: [
    "SME IPO consultant India",
    "BSE SME IPO",
    "NSE Emerge listing",
    "DRHP preparation",
    "IPO compliance CA",
    "SEBI listing requirements",
  ],
};

const tabs = [
  { slug: "tax-notice", label: "Tax Notice" },
  { slug: "missed-deadline", label: "Missed Deadline" },
  { slug: "starting-a-business", label: "Starting a Business" },
  { slug: "planning-an-ipo", label: "Planning an IPO" },
  { slug: "gst-notice", label: "GST Notice" },
  { slug: "nri-taxes", label: "NRI Taxes" },
  { slug: "itr-filing", label: "ITR Filing" },
];

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917777970565";
const PH = process.env.NEXT_PUBLIC_PHONE || WA;

export default function PlanningAnIPOPage() {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hello DRSPV, we are planning an IPO and need guidance."
  )}`;

  return (
    <>
      {/* Breadcrumb Tabs */}
      <nav className="w-full border-b border-stone-200 bg-bg-2/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-4 flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
          {tabs.map((t) => (
            <Link
              key={t.slug}
              href={`/i-need-help-with/${t.slug}`}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                t.slug === "planning-an-ipo"
                  ? "bg-gold/15 text-gold border border-gold/30"
                  : "text-muted hover:text-text hover:bg-stone-100/70"
              }`}
            >
              {t.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Problem Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-ipo-amber/[0.06] via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-4xl px-4">
          <span className="inline-block rounded-full bg-ipo-amber/10 border border-ipo-amber/20 px-3 py-1 text-[11px] uppercase tracking-[2px] text-ipo-amber font-medium mb-5">
            IPO Planning
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text mb-4 text-balance">
            Planning an IPO?{" "}
            <span className="gold-gradient-text">We Make It Happen.</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            Taking your company public is the biggest financial milestone for any
            promoter. From restructuring financials and preparing the DRHP to SEBI
            observations and post-listing compliance — our IPO team handles it all.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg bg-wa-green px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-wa-green/20 transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              Discuss Your IPO
            </a>
            <a
              href={`tel:+${PH}`}
              className="inline-flex items-center gap-2.5 rounded-lg border border-gold/40 px-7 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold/10 hover:border-gold/60 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" />
              Speak to IPO Team
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "15+ IPOs guided",
              "BSE SME & NSE Emerge",
              "End-to-end support",
            ].map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 rounded-full bg-card border border-stone-200 px-3 py-1 text-xs text-muted"
              >
                <CheckCircle className="h-3 w-3 text-gst-green" />
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Types */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl font-bold text-text mb-8">
          IPO Pathways We Support
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "BSE SME IPO",
              severity: "Popular",
              severityColor: "bg-ipo-amber/20 text-ipo-amber",
              barColor: "bg-ipo-amber",
              desc: "For companies with post-issue paid-up capital up to Rs 25 crore. Requires 3 years of financials, positive net worth, and net tangible assets of Rs 1.5 crore. Market-making for 3 years post-listing is mandatory.",
            },
            {
              title: "NSE Emerge IPO",
              severity: "Growth",
              severityColor: "bg-it-blue/20 text-it-blue",
              barColor: "bg-it-blue",
              desc: "NSE's SME platform with similar eligibility. Requires minimum application size of Rs 1 lakh, at least 50 allottees, and promoter lock-in of 3 years. We coordinate with merchant bankers and registrars.",
            },
            {
              title: "Mainboard Migration",
              severity: "Scale-up",
              severityColor: "bg-gst-green/20 text-gst-green",
              barColor: "bg-gst-green",
              desc: "SME-listed companies with paid-up capital exceeding Rs 25 crore must migrate to mainboard. We handle the migration application, enhanced disclosures, and corporate governance requirements.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-xl bg-card border border-stone-200 overflow-hidden"
            >
              <div className={`h-1 ${card.barColor}`} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-text">
                    {card.title}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${card.severityColor}`}
                  >
                    {card.severity}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consequence Band */}
      <section className="w-full bg-gradient-to-r from-red/[0.06] via-red/[0.03] to-red/[0.06] border-y border-red/10 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-2 mb-6">
            <ShieldAlert className="h-5 w-5 text-red" />
            <h2 className="text-xl font-bold text-text">
              What happens if you ignore it?
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: FileX,
                title: "SEBI Observations Rejected",
                desc: "Incomplete or inconsistent DRHP leads to SEBI returning the document with observations. This delays the IPO by 3-6 months and damages merchant banker confidence.",
              },
              {
                icon: IndianRupee,
                title: "Financial Restatement Costs",
                desc: "If your restated financials under Ind AS do not tie with MCA filings, you face costly re-audits, potential qualifications, and delayed SEBI clearance.",
              },
              {
                icon: Ban,
                title: "Listing Non-Compliance",
                desc: "Post-listing, failure to comply with LODR regulations leads to fines up to Rs 25 lakh per violation, trading suspension, and potential delisting.",
              },
              {
                icon: Clock,
                title: "Market Window Missed",
                desc: "IPO market windows are short. Poor preparation means you miss bullish market conditions, resulting in lower valuations and weak subscription numbers.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="shrink-0 mt-1">
                  <item.icon className="h-5 w-5 text-red/70" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl font-bold text-text mb-10">
          Our IPO Roadmap
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "IPO Readiness Audit",
              desc: "We assess your financials, corporate governance, related-party transactions, and SEBI eligibility. We prepare a gap analysis and remediation roadmap.",
            },
            {
              step: "02",
              title: "Financial Restructuring",
              desc: "We restate 3-5 years of financials under Ind AS, resolve auditor qualifications, clean up related-party balances, and prepare the restated financial statements.",
            },
            {
              step: "03",
              title: "DRHP & SEBI Filing",
              desc: "We work with your merchant banker to prepare the DRHP, draft risk factors, management discussion, and file with SEBI/Exchange. We respond to all SEBI observations.",
            },
            {
              step: "04",
              title: "Post-Listing Compliance",
              desc: "We handle quarterly results filing, LODR compliance, board meeting support, insider trading compliance, and corporate governance advisory on an ongoing basis.",
            },
          ].map((s) => (
            <div key={s.step} className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 border border-gold/30 text-gold text-sm font-bold">
                  {s.step}
                </div>
                <div className="hidden lg:block flex-1 h-px bg-gold/20" />
              </div>
              <h3 className="text-base font-semibold text-text mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mini Case Study */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl font-bold text-text mb-8">
          From Our Case Files
        </h2>
        <div className="rounded-xl bg-card border border-stone-200 overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200">
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[2px] text-red font-medium">
                Problem
              </span>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                A Rajkot-based manufacturing company with Rs 80 crore revenue
                wanted to list on BSE SME but had auditor qualifications in 2 of
                3 restated years and multiple related-party loans outstanding.
              </p>
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[2px] text-ipo-amber font-medium">
                What We Did
              </span>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                We restructured related-party transactions, resolved auditor
                qualifications through corrective entries and board resolutions,
                restated financials under Ind AS, and coordinated with the
                merchant banker on DRHP drafting.
              </p>
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[2px] text-gst-green font-medium">
                Result
              </span>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                The IPO was subscribed 42x on BSE SME. SEBI cleared the DRHP
                with zero observations. Post-listing, the stock appreciated 180%
                within 6 months, and the company is now preparing for mainboard
                migration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl font-bold text-text mb-8">
          Related Resources
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Complete SME IPO Handbook",
              href: "/knowledge-bank/ipo-handbook",
              tag: "Knowledge Bank",
            },
            {
              title: "SEBI LODR Compliance Checklist",
              href: "/knowledge-bank/ipo-handbook",
              tag: "Checklist",
            },
            {
              title: "Ind AS Restatement Guide",
              href: "/knowledge-bank/ipo-handbook",
              tag: "Guide",
            },
            {
              title: "Post-Listing Compliance Calendar",
              href: "/knowledge-bank/ipo-handbook",
              tag: "Reference",
            },
          ].map((r) => (
            <Link
              key={r.title}
              href={r.href}
              className="group rounded-lg bg-card border border-stone-200 p-5 transition-all hover:border-gold/30 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-3.5 w-3.5 text-gold" />
                <span className="text-[10px] uppercase tracking-[2px] text-gold font-medium">
                  {r.tag}
                </span>
              </div>
              <h3 className="text-sm font-medium text-text group-hover:text-gold transition-colors">
                {r.title}
              </h3>
              <span className="inline-flex items-center gap-1 text-xs text-muted mt-2 group-hover:text-gold transition-colors">
                Read <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="w-full bg-gradient-to-r from-[#0B1628] via-[#0F1E35] to-[#0B1628] border-y border-stone-200">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14 flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
            Your listing journey starts with one conversation.
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl">
            Share your company details on WhatsApp and our IPO team will schedule
            a free eligibility assessment within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg bg-wa-green px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-wa-green/20 transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
            <a
              href={`tel:+${PH}`}
              className="inline-flex items-center gap-2.5 rounded-lg border border-gold/40 px-7 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold/10 hover:border-gold/60 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
