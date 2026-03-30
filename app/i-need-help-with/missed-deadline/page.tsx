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
  CalendarX,
  IndianRupee,
  FileX,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Missed a Tax Deadline? We Can Still Help",
  description:
    "Missed your ITR, TDS, or GST filing deadline? DRSPV & Associates helps you file belated returns, apply for condonation of delay, and minimise penalties.",
  keywords: [
    "missed ITR deadline",
    "belated return filing",
    "condonation of delay",
    "late TDS return",
    "missed GST deadline",
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

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "911234567890";
const PH = process.env.NEXT_PUBLIC_PHONE || WA;

export default function MissedDeadlinePage() {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hello DRSPV, I missed a filing deadline and need help."
  )}`;

  return (
    <>
      {/* Breadcrumb Tabs */}
      <nav className="w-full border-b border-white/[0.06] bg-bg-2/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-4 flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
          {tabs.map((t) => (
            <Link
              key={t.slug}
              href={`/i-need-help-with/${t.slug}`}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                t.slug === "missed-deadline"
                  ? "bg-gold/15 text-gold border border-gold/30"
                  : "text-muted hover:text-text hover:bg-white/[0.04]"
              }`}
            >
              {t.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Problem Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-red/[0.06] via-transparent to-transparent" />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-4xl px-4">
          <span className="inline-block rounded-full bg-red/10 border border-red/20 px-3 py-1 text-[11px] uppercase tracking-[2px] text-red font-medium mb-5">
            Missed Deadline
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text mb-4 text-balance">
            Missed a Filing Deadline?{" "}
            <span className="gold-gradient-text">There&apos;s Still Time.</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            Whether it is an ITR, TDS return, or GST filing you missed — the law
            still allows remedies. We help you file belated or revised returns,
            apply for condonation of delay, and keep penalties to the legal
            minimum.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg bg-wa-green px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-wa-green/20 transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              Get Help Now
            </a>
            <a
              href={`tel:+${PH}`}
              className="inline-flex items-center gap-2.5 rounded-lg border border-gold/40 px-7 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold/10 hover:border-gold/60 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" />
              Speak to a CA
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Same-day filing available",
              "Penalty minimisation",
              "Condonation of delay experts",
            ].map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 rounded-full bg-card border border-white/[0.06] px-3 py-1 text-xs text-muted"
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
          Types of Deadlines We Help With
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "ITR — Belated Return (Section 139(4))",
              severity: "Common",
              severityColor: "bg-ipo-amber/20 text-ipo-amber",
              barColor: "bg-ipo-amber",
              desc: "Missed the 31 July deadline? You can still file a belated return by 31 December of the assessment year, with a late fee of Rs 5,000 under Section 234F. We ensure you do not lose any eligible deductions.",
            },
            {
              title: "TDS Return — Late Filing",
              severity: "High",
              severityColor: "bg-red/20 text-red",
              barColor: "bg-red",
              desc: "Late TDS returns attract a fee of Rs 200 per day under Section 234E plus penalty up to Rs 1 lakh under Section 271H. We file the return immediately and prepare grounds to waive the 271H penalty.",
            },
            {
              title: "GST Return — GSTR-3B / GSTR-1",
              severity: "Medium",
              severityColor: "bg-ipo-amber/20 text-ipo-amber",
              barColor: "bg-gst-green",
              desc: "Late GST returns attract interest at 18% p.a. plus a late fee of Rs 50/day (Rs 20 for NIL). Continued default can lead to GST registration cancellation. We file and apply for revocation if needed.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-xl bg-card border border-white/[0.06] overflow-hidden"
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
                icon: IndianRupee,
                title: "Late Fees Keep Accumulating",
                desc: "Under Section 234F, late fees of Rs 1,000 to Rs 5,000 apply. TDS late fees accrue daily at Rs 200/day with no upper limit.",
              },
              {
                icon: CalendarX,
                title: "Loss of Carry-Forward",
                desc: "Capital losses and business losses cannot be carried forward if the return is filed after the due date. This can cost you lakhs in future years.",
              },
              {
                icon: Ban,
                title: "GST Registration Cancellation",
                desc: "Failing to file GST returns for 6 consecutive months can lead to suo moto cancellation of your GST registration by the department.",
              },
              {
                icon: FileX,
                title: "Prosecution Risk",
                desc: "For wilful failure to file returns where tax exceeds Rs 25,000, prosecution under Section 276CC can lead to imprisonment up to 7 years.",
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
          Our Process to Fix It
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Assess the Situation",
              desc: "We check which deadlines were missed, compute the exact late fees and interest applicable, and identify the best remedy available.",
            },
            {
              step: "02",
              title: "Gather Documents",
              desc: "We provide a focused checklist — Form 16, Form 26AS, AIS, bank statements, and any other records needed for accurate filing.",
            },
            {
              step: "03",
              title: "File the Return",
              desc: "We prepare and file the belated/revised return immediately. For condonation cases, we draft the application under Section 119(2)(b) to CBDT.",
            },
            {
              step: "04",
              title: "Penalty Mitigation",
              desc: "We file rectification requests, penalty waiver applications, and track the case until the demand is reduced or dropped entirely.",
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
        <div className="rounded-xl bg-card border border-white/[0.06] overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[2px] text-red font-medium">
                Problem
              </span>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                A freelance developer missed the ITR deadline for AY 2023-24 and
                AY 2024-25. Both years had capital gains from ESOP sales and
                foreign income from US clients, making them ineligible for simple
                belated filing.
              </p>
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[2px] text-ipo-amber font-medium">
                What We Did
              </span>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                We filed belated returns for both years, applied for condonation
                of delay under Section 119(2)(b) for carry-forward of capital
                losses, and submitted a detailed computation with DTAA credit
                claims for US income.
              </p>
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[2px] text-gst-green font-medium">
                Result
              </span>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                Both returns were processed successfully. The condonation
                application was granted, preserving Rs 8.2 lakh in capital loss
                carry-forward. Late fees were limited to Rs 10,000 total.
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
              title: "ITR Due Dates for FY 2024-25",
              href: "/knowledge-bank/income-tax",
              tag: "Guide",
            },
            {
              title: "Section 234F — Late Fee Explained",
              href: "/knowledge-bank/income-tax",
              tag: "Knowledge Bank",
            },
            {
              title: "How to Apply for Condonation of Delay",
              href: "/knowledge-bank/income-tax",
              tag: "Step-by-Step",
            },
            {
              title: "GST Return Filing Calendar",
              href: "/knowledge-bank/gst",
              tag: "Reference",
            },
          ].map((r) => (
            <Link
              key={r.title}
              href={r.href}
              className="group rounded-lg bg-card border border-white/[0.06] p-5 transition-all hover:border-gold/30 hover:-translate-y-0.5"
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
      <section className="w-full bg-gradient-to-r from-[#0B1628] via-[#0F1E35] to-[#0B1628] border-y border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14 flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
            Every day you delay costs more. Act now.
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl">
            Late fees and interest keep compounding. The sooner you file, the less
            you pay. Reach out on WhatsApp and we will get started today.
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
