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
  Calculator,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ITR Filing — Expert CA-Assisted Filing",
  description:
    "Salaried, freelancer, or business owner? DRSPV & Associates files the right ITR form, maximises deductions, and ensures zero-error e-verification.",
  keywords: [
    "ITR filing online",
    "income tax return filing",
    "CA for ITR filing",
    "ITR-1 ITR-2 ITR-3 filing",
    "tax return salaried",
    "freelancer ITR filing",
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

export default function ITRFilingPage() {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hello DRSPV, I need help filing my ITR."
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
                t.slug === "itr-filing"
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
        <div className="absolute inset-0 bg-gradient-to-b from-it-blue/[0.06] via-transparent to-transparent" />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-4xl px-4">
          <span className="inline-block rounded-full bg-it-blue/10 border border-it-blue/20 px-3 py-1 text-[11px] uppercase tracking-[2px] text-it-blue font-medium mb-5">
            ITR Filing
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text mb-4 text-balance">
            Need to File Your ITR?{" "}
            <span className="gold-gradient-text">We Make It Effortless.</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            Whether you are salaried with HRA and capital gains, a freelancer
            with 44ADA presumptive income, or a business owner with audit
            requirements — we pick the right ITR form, maximise every deduction,
            and handle e-verification.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg bg-wa-green px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-wa-green/20 transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              File My ITR
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
              "Old vs New regime comparison",
              "AIS/TIS reconciliation",
              "Zero-error filing guarantee",
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
          ITR Filing For Every Situation
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Salaried Individuals (ITR-1 / ITR-2)",
              severity: "Popular",
              severityColor: "bg-it-blue/20 text-it-blue",
              barColor: "bg-it-blue",
              desc: "Form 16 based filing with HRA, LTA, 80C/80D deductions, old vs new regime comparison, and capital gains from mutual funds, stocks, and property. We reconcile AIS/TIS data before filing.",
            },
            {
              title: "Freelancers & Consultants (ITR-3 / ITR-4)",
              severity: "Growing",
              severityColor: "bg-gst-green/20 text-gst-green",
              barColor: "bg-gst-green",
              desc: "Presumptive taxation under 44ADA (50% deemed profit) or regular books-based filing. We advise on optimal scheme selection, advance tax planning, and GST registration threshold for professional income.",
            },
            {
              title: "Business Owners & Companies (ITR-5 / ITR-6)",
              severity: "Complex",
              severityColor: "bg-ipo-amber/20 text-ipo-amber",
              barColor: "bg-ipo-amber",
              desc: "Partnership firms, LLPs, and companies require detailed P&L, balance sheet, and audit reports. We prepare financial statements, handle tax audit under Section 44AB, and file ITR with all schedules.",
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
                title: "Late Fee of Rs 5,000",
                desc: "Under Section 234F, filing after the due date attracts a late fee of Rs 5,000 (Rs 1,000 if income is below Rs 5 lakh). This is on top of any tax due.",
              },
              {
                icon: Calculator,
                title: "Interest Under 234A/B/C",
                desc: "Interest at 1% per month accrues on unpaid tax under Sections 234A (delay in filing), 234B (advance tax shortfall), and 234C (deferment of advance tax).",
              },
              {
                icon: Ban,
                title: "Loss of Deductions",
                desc: "Certain deductions under Chapter VI-A (80C, 80D, 80G) and loss carry-forward benefits are forfeited if the return is not filed by the due date.",
              },
              {
                icon: FileX,
                title: "Refund Delayed or Lost",
                desc: "If you have excess TDS deducted, you cannot claim the refund without filing ITR. Delayed filing means delayed refund processing — sometimes by 6-12 months.",
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
          Our ITR Filing Process
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Document Collection",
              desc: "We send you a simple checklist — Form 16, AIS, bank statements, investment proofs, capital gains statements. Upload on WhatsApp or email.",
            },
            {
              step: "02",
              title: "Regime Comparison",
              desc: "We compute your tax under both Old and New regime, factoring in all deductions, exemptions, and surcharge thresholds. You pick the one that saves more.",
            },
            {
              step: "03",
              title: "Filing & E-Verification",
              desc: "We prepare and file the ITR on the e-filing portal, reconcile with AIS/TIS, and complete e-verification via Aadhaar OTP or EVC. You get a confirmation within hours.",
            },
            {
              step: "04",
              title: "Post-Filing Support",
              desc: "We track your ITR processing status, handle any defective return notice, assist with refund reissue if needed, and provide the computation sheet for your records.",
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
                A salaried IT professional had Rs 18 lakh salary, Rs 4.2 lakh
                STCG from F&O trading, Rs 1.8 lakh LTCG from mutual funds, and
                rental income from 2 properties. They were confused about which
                ITR form to use and whether old or new regime was better.
              </p>
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[2px] text-ipo-amber font-medium">
                What We Did
              </span>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                We filed ITR-3 (required due to F&O income), compared both
                regimes showing Rs 42,000 savings under old regime with 80C,
                80D, HRA, and NPS deductions. We reconciled all AIS entries and
                reported F&O turnover correctly under Section 44AB threshold.
              </p>
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[2px] text-gst-green font-medium">
                Result
              </span>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                Total tax saved: Rs 42,000 by choosing old regime. ITR processed
                within 15 days with zero defects. TDS refund of Rs 28,000
                credited to bank account within 30 days of e-verification.
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
              title: "Old vs New Regime Calculator",
              href: "/knowledge-bank/income-tax",
              tag: "Tool",
            },
            {
              title: "Section 80C Deductions Guide",
              href: "/knowledge-bank/income-tax",
              tag: "Knowledge Bank",
            },
            {
              title: "Capital Gains Tax Rates 2025",
              href: "/knowledge-bank/income-tax",
              tag: "Reference",
            },
            {
              title: "How to Read Your AIS/TIS",
              href: "/knowledge-bank/income-tax",
              tag: "Guide",
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
            File your ITR with a qualified CA. No stress, no errors.
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl">
            Send us your Form 16 and documents on WhatsApp. We will file your
            return and send you the acknowledgement within 48 hours.
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
