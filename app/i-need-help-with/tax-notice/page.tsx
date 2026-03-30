import type { Metadata } from "next";
import Link from "next/link";
import {
  FileWarning,
  MessageCircle,
  Phone,
  ShieldAlert,
  AlertTriangle,
  Ban,
  Landmark,
  CheckCircle,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Got a Tax Notice? We Can Help",
  description:
    "Received an income tax notice under Section 143(1), 148, or 271? DRSPV & Associates prepares expert replies and represents you before the IT Department.",
  keywords: [
    "income tax notice reply",
    "section 143(1) notice",
    "section 148 notice",
    "tax demand notice India",
    "CA for tax notice",
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

export default function TaxNoticePage() {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hello DRSPV, I received a tax notice and need help."
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
                t.slug === "tax-notice"
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
            Tax Notice
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text mb-4 text-balance">
            Got a Tax Notice?{" "}
            <span className="gold-gradient-text">Don&apos;t Panic.</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            Every year, the Income Tax Department issues lakhs of notices — many
            are routine. Our CAs will review your notice, explain what it means
            in plain language, and draft a response that protects your interests.
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
              Speak to a CA
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Response within 24 hrs",
              "10+ years IT litigation",
              "500+ notices handled",
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
          Common Tax Notices We Handle
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Section 143(1) — Intimation",
              severity: "Low",
              severityColor: "bg-gst-green/20 text-gst-green",
              barColor: "bg-gst-green",
              desc: "An auto-generated intimation showing the IT Department's computation versus yours. Mismatch may lead to a demand. We reconcile differences and file a rectification request under Section 154 if needed.",
            },
            {
              title: "Section 148 — Reassessment",
              severity: "High",
              severityColor: "bg-red/20 text-red",
              barColor: "bg-red",
              desc: "The department believes income has escaped assessment. This reopens your old return — a serious matter. We prepare detailed objections citing landmark tribunal decisions and file a response within the deadline.",
            },
            {
              title: "Section 271 — Penalty",
              severity: "Medium",
              severityColor: "bg-ipo-amber/20 text-ipo-amber",
              barColor: "bg-ipo-amber",
              desc: "Penalty notices for concealment of income or inaccurate particulars. Penalties can range from 50% to 200% of tax evaded. We build a reasonable-cause defence with documentary evidence.",
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
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${card.severityColor}`}
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
                icon: AlertTriangle,
                title: "Tax Demand Becomes Final",
                desc: "If you don't respond within 30 days, the demand in the notice is treated as accepted. The department can initiate recovery proceedings.",
              },
              {
                icon: Ban,
                title: "Bank Account Attachment",
                desc: "Under Section 226(3), the IT Department can attach your bank accounts and direct your bank to remit the outstanding demand.",
              },
              {
                icon: Landmark,
                title: "Prosecution Proceedings",
                desc: "For serious cases like Section 276C, non-compliance can lead to prosecution with imprisonment of up to 7 years.",
              },
              {
                icon: FileWarning,
                title: "Higher Penalties",
                desc: "Delay attracts interest under Section 234A/B/C and penalties under Section 271. The longer you wait, the more you pay.",
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
          How We Resolve Your Notice
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Send Us the Notice",
              desc: "WhatsApp or email a photo/PDF of your notice. We review it within 24 hours and explain it to you in plain language.",
            },
            {
              step: "02",
              title: "Document Collection",
              desc: "We send you a checklist of documents needed — Form 16, AIS, bank statements, investment proofs — and help you gather them.",
            },
            {
              step: "03",
              title: "Draft Response",
              desc: "Our CAs draft a legally sound reply referencing applicable sections, circulars, and tribunal rulings in your favour.",
            },
            {
              step: "04",
              title: "Filing & Follow-Up",
              desc: "We file the response on the IT e-filing portal, track the status, and handle any follow-up queries from the department.",
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
                A salaried professional received a Section 148A notice for AY
                2019-20 alleging undisclosed capital gains of Rs 12 lakh from
                mutual fund redemptions that were already reported in the original
                return.
              </p>
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[2px] text-ipo-amber font-medium">
                What We Did
              </span>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                We prepared a detailed reply under Section 148A(b) with
                cross-references to the original ITR, AIS data, and CAMS
                statement. We cited the Supreme Court decision in Ashish Agarwal
                to challenge procedural lapses.
              </p>
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[2px] text-gst-green font-medium">
                Result
              </span>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                The Assessing Officer dropped the proceedings and issued an order
                under Section 148A(d) confirming no escapement of income. Total
                tax saved: Rs 3.74 lakh including interest and penalty avoided.
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
              title: "Section 143(1) Explained",
              href: "/knowledge-bank/income-tax",
              tag: "Knowledge Bank",
            },
            {
              title: "How to Read Your AIS",
              href: "/knowledge-bank/income-tax",
              tag: "Guide",
            },
            {
              title: "Responding to Section 148",
              href: "/knowledge-bank/income-tax",
              tag: "Knowledge Bank",
            },
            {
              title: "Penalty Provisions Under IT Act",
              href: "/knowledge-bank/income-tax",
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
            Don&apos;t let a notice escalate. Talk to us today.
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl">
            Send us a photo of your notice on WhatsApp. We will review it and
            call you back within 24 hours with a clear action plan.
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
