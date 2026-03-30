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
  IndianRupee,
  Lock,
  XCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Got a GST Notice? We Handle It",
  description:
    "Received a GST show-cause notice, DRC-01, or ASMT-10? DRSPV & Associates prepares replies and represents you before GST authorities.",
  keywords: [
    "GST notice reply",
    "DRC-01 notice",
    "ASMT-10 notice",
    "GST show cause notice",
    "GST demand order",
    "CA for GST notice",
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

export default function GSTNoticePage() {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hello DRSPV, I received a GST notice and need help."
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
                t.slug === "gst-notice"
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
            GST Notice
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text mb-4 text-balance">
            GST Notice Received?{" "}
            <span className="gold-gradient-text">We Know the Playbook.</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            From ITC mismatch notices to show-cause orders under Section 73/74,
            our GST specialists have handled hundreds of notices. We prepare
            watertight replies with reconciliation statements, supporting invoices,
            and case-law references.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg bg-wa-green px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-wa-green/20 transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              Send Us Your Notice
            </a>
            <a
              href={`tel:+${PH}`}
              className="inline-flex items-center gap-2.5 rounded-lg border border-gold/40 px-7 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold/10 hover:border-gold/60 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" />
              Speak to a GST Expert
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "DRC-01 / DRC-07 specialists",
              "ITC reconciliation experts",
              "400+ GST notices resolved",
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
          Common GST Notices We Handle
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "ASMT-10 — Scrutiny Notice",
              severity: "Common",
              severityColor: "bg-ipo-amber/20 text-ipo-amber",
              barColor: "bg-ipo-amber",
              desc: "Issued when the officer finds discrepancies in your GSTR-3B vs GSTR-1, or turnover mismatch with ITR. You must respond in ASMT-11 within 30 days. We prepare detailed reconciliation statements.",
            },
            {
              title: "DRC-01 — Show Cause Notice (Section 73/74)",
              severity: "High",
              severityColor: "bg-red/20 text-red",
              barColor: "bg-red",
              desc: "Issued for demand of tax not paid, short paid, or ITC wrongly availed. Section 73 covers non-fraud cases (3-year period), Section 74 covers fraud/suppression (5-year period with 100% penalty). We draft legal submissions.",
            },
            {
              title: "DRC-07 — Demand Order",
              severity: "Critical",
              severityColor: "bg-red/20 text-red",
              barColor: "bg-red",
              desc: "This is the final order after adjudication. If you did not respond to DRC-01, the demand becomes final. We file appeals before the GST Appellate Authority within 3 months and apply for pre-deposit waiver.",
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
                title: "Tax + Interest + Penalty",
                desc: "Under Section 73, penalty is 10% of tax or Rs 10,000. Under Section 74 (fraud), penalty is 100% of tax. Interest accrues at 18% p.a. from the due date.",
              },
              {
                icon: Lock,
                title: "E-Way Bill Blocked",
                desc: "If you have unpaid GST demands, your e-way bill generation can be blocked, effectively halting your goods transportation and business operations.",
              },
              {
                icon: XCircle,
                title: "ITC Reversal",
                desc: "The department can reverse your entire ITC claim for the period in question, plus demand interest at 24% if the ITC was wrongly availed and utilised.",
              },
              {
                icon: Ban,
                title: "GST Registration Cancellation",
                desc: "Persistent non-compliance or suppression can lead to cancellation of your GST registration under Section 29, making it illegal to collect or claim GST.",
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
          How We Handle Your GST Notice
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Notice Review",
              desc: "We analyse the notice type (ASMT-10, DRC-01, DRC-07), determine the demand period, and identify the key issues — ITC mismatch, turnover difference, or classification dispute.",
            },
            {
              step: "02",
              title: "Data Reconciliation",
              desc: "We reconcile your GSTR-1, GSTR-3B, GSTR-2B, e-invoice data, and books of accounts. We prepare a detailed reconciliation statement identifying every difference.",
            },
            {
              step: "03",
              title: "Reply Drafting",
              desc: "We draft the reply in ASMT-11 or DRC-06 format with supporting documents, case-law references, and advance ruling citations. Every claim is backed by documentary evidence.",
            },
            {
              step: "04",
              title: "Filing & Hearing",
              desc: "We file the reply on the GST portal, attend personal hearings on your behalf, and follow up until the order is passed. If unfavorable, we file the appeal with pre-deposit.",
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
                A textile trader received a DRC-01 notice under Section 74
                demanding Rs 28 lakh for alleged ITC fraud based on 3 supplier
                GSTINs flagged as non-existent by the department.
              </p>
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[2px] text-ipo-amber font-medium">
                What We Did
              </span>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                We proved the supplier GSTINs were active at the time of
                transaction using GST portal screenshots, bank payment proofs,
                e-way bills, and lorry receipts. We cited the Madras HC ruling
                that ITC cannot be denied to a bona fide buyer for supplier defaults.
              </p>
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[2px] text-gst-green font-medium">
                Result
              </span>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                The adjudicating authority dropped the demand entirely and passed
                an order in favour of the taxpayer. Total demand saved: Rs 28
                lakh tax + Rs 28 lakh penalty + Rs 8.4 lakh interest.
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
              title: "GST Notice Types Explained",
              href: "/knowledge-bank/gst",
              tag: "Knowledge Bank",
            },
            {
              title: "ITC Reconciliation Guide",
              href: "/knowledge-bank/gst",
              tag: "Guide",
            },
            {
              title: "Section 73 vs 74 — Key Differences",
              href: "/knowledge-bank/gst",
              tag: "Knowledge Bank",
            },
            {
              title: "Filing GST Appeal — Step by Step",
              href: "/knowledge-bank/gst",
              tag: "Step-by-Step",
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
            GST demands compound fast. Respond before it gets worse.
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl">
            Share your GST notice on WhatsApp. We will review it free of charge
            and tell you exactly what needs to be done.
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
