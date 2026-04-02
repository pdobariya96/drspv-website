import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  ShieldAlert,
  CheckCircle,
  ArrowRight,
  BookOpen,
  FileX,
  IndianRupee,
  Landmark,
  Home,
} from "lucide-react";

export const metadata: Metadata = {
  title: "NRI Taxes — Expert Help for Non-Resident Indians",
  description:
    "NRI with Indian income, property, or investments? DRSPV & Associates handles DTAA claims, FEMA compliance, TDS on property sales, and NRI ITR filing.",
  keywords: [
    "NRI tax filing India",
    "DTAA benefit claim",
    "NRI property sale tax",
    "FEMA compliance NRI",
    "NRI investment India",
    "TDS on NRI property",
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

export default function NRITaxesPage() {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hello DRSPV, I am an NRI and need tax help for my Indian income."
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
                t.slug === "nri-taxes"
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
        <div className="absolute inset-0 bg-gradient-to-b from-fema-purple/[0.06] via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-4xl px-4">
          <span className="inline-block rounded-full bg-fema-purple/10 border border-fema-purple/20 px-3 py-1 text-[11px] uppercase tracking-[2px] text-fema-purple font-medium mb-5">
            NRI Taxes
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text mb-4 text-balance">
            NRI with Indian Income?{" "}
            <span className="gold-gradient-text">We Handle Both Sides.</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            NRI taxation in India is complex — from residential status
            determination and DTAA treaty benefits to FEMA-compliant
            repatriation and TDS on property sales. Our team specialises in
            cross-border tax advisory for NRIs in the USA, UK, UAE, Australia,
            and Canada.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg bg-wa-green px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-wa-green/20 transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              Get NRI Tax Help
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
              "DTAA experts (US, UK, UAE)",
              "FEMA compliance",
              "NRO/NRE repatriation",
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
          Common NRI Tax Situations
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Property Sale — TDS & Capital Gains",
              severity: "Common",
              severityColor: "bg-ipo-amber/20 text-ipo-amber",
              barColor: "bg-ipo-amber",
              desc: "Buyer must deduct TDS at 20% (LTCG) or 30% (STCG) on NRI property sales under Section 195. We help obtain a lower TDS certificate under Section 197 and file Form 15CA/15CB for repatriation.",
            },
            {
              title: "DTAA Treaty Benefits",
              severity: "Complex",
              severityColor: "bg-fema-purple/20 text-fema-purple",
              barColor: "bg-fema-purple",
              desc: "India has DTAAs with 90+ countries. We help NRIs claim treaty benefits — reduced TDS rates on dividends, interest, royalties, and capital gains. We prepare Tax Residency Certificate (TRC) applications.",
            },
            {
              title: "FEMA & Repatriation Compliance",
              severity: "Regulatory",
              severityColor: "bg-it-blue/20 text-it-blue",
              barColor: "bg-it-blue",
              desc: "Repatriating funds from NRO account requires Form 15CA/15CB certification. LRS limits, gift taxation on NRI gifts, and NRE/NRO account rules — we ensure complete FEMA compliance.",
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
                icon: IndianRupee,
                title: "Double Taxation",
                desc: "Without proper DTAA claims and Form 67 filing, you end up paying full tax in India AND your country of residence — with no foreign tax credit.",
              },
              {
                icon: Home,
                title: "Property Sale Blocked",
                desc: "Buyers refuse to proceed without proper TDS compliance. Without Form 15CA/15CB, your bank will not allow repatriation of sale proceeds.",
              },
              {
                icon: Landmark,
                title: "FEMA Penalties",
                desc: "FEMA violations carry penalties up to 3x the amount involved. RBI can impose compounding penalties and restrict future forex transactions.",
              },
              {
                icon: FileX,
                title: "Black Money Act Scrutiny",
                desc: "Undeclared foreign assets can attract 30% tax + 90% penalty under the Black Money Act, plus prosecution with imprisonment up to 10 years.",
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
          How We Help NRIs
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Residential Status Check",
              desc: "We determine your residential status under Section 6 of the IT Act — NRI, RNOR, or Resident — based on your day count and India visits over the last 7 years.",
            },
            {
              step: "02",
              title: "Income Assessment",
              desc: "We map all your Indian-source income — rental income, capital gains, interest, dividends, ESOPs — and determine applicable tax rates and DTAA benefits.",
            },
            {
              step: "03",
              title: "ITR Filing & DTAA Claims",
              desc: "We file the correct ITR form (ITR-2 or ITR-3), claim DTAA relief under Section 90/91, file Form 67 for foreign tax credit, and obtain lower TDS certificates.",
            },
            {
              step: "04",
              title: "Repatriation & FEMA",
              desc: "We prepare Form 15CA/15CB for fund repatriation, ensure NRO/NRE compliance, handle LRS documentation, and advise on gift/inheritance taxation.",
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
                An NRI in the USA sold a property in Ahmedabad for Rs 1.8 crore.
                The buyer deducted 20% TDS (Rs 16 lakh) but the actual LTCG
                after indexation was only Rs 22 lakh, resulting in massive excess
                TDS deduction.
              </p>
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[2px] text-ipo-amber font-medium">
                What We Did
              </span>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                We filed an ITR-2 claiming DTAA benefit under the India-US
                treaty, applied for refund of excess TDS, prepared Form 15CA/15CB
                for repatriation, and filed Form 67 for US foreign tax credit.
              </p>
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[2px] text-gst-green font-medium">
                Result
              </span>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                The NRI received a TDS refund of Rs 11.6 lakh within 4 months.
                The property sale proceeds were repatriated to their US bank
                account with full FEMA compliance and CA certification.
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
              title: "NRI Taxation Guide",
              href: "/knowledge-bank/income-tax",
              tag: "Knowledge Bank",
            },
            {
              title: "DTAA Benefits Explained",
              href: "/knowledge-bank/fema",
              tag: "Guide",
            },
            {
              title: "Form 15CA/15CB — Step by Step",
              href: "/knowledge-bank/fema",
              tag: "Step-by-Step",
            },
            {
              title: "FEMA Rules for NRIs",
              href: "/knowledge-bank/fema",
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
            Living abroad? Your Indian taxes still need attention.
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl">
            Message us on WhatsApp from any timezone. We work with NRIs across
            the US, UK, UAE, Australia, and Canada.
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
