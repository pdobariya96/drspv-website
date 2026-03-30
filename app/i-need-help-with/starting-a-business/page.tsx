import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  ShieldAlert,
  Ban,
  Scale,
  CheckCircle,
  ArrowRight,
  BookOpen,
  FileX,
  IndianRupee,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Starting a Business? Let Us Set You Up Right",
  description:
    "Confused between Pvt Ltd, LLP, and OPC? DRSPV & Associates handles company incorporation, MSME registration, and compliance setup from day one.",
  keywords: [
    "company incorporation India",
    "private limited registration",
    "LLP registration",
    "OPC registration",
    "MSME registration",
    "startup compliance",
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

export default function StartingABusinessPage() {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hello DRSPV, I want to start a business and need guidance."
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
                t.slug === "starting-a-business"
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
          <span className="inline-block rounded-full bg-gst-green/10 border border-gst-green/20 px-3 py-1 text-[11px] uppercase tracking-[2px] text-gst-green font-medium mb-5">
            Starting a Business
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text mb-4 text-balance">
            Starting a Business?{" "}
            <span className="gold-gradient-text">Get the Foundation Right.</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            Choosing the wrong entity structure can cost you lakhs in taxes and
            limit your growth. We help you pick the right structure — Pvt Ltd,
            LLP, OPC, or Proprietorship — and handle the entire registration
            process with MCA, GST, and MSME.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg bg-wa-green px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-wa-green/20 transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              Discuss Your Business Idea
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
              "MCA registered in 7 days",
              "GST + PAN + TAN included",
              "Post-incorporation compliance",
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
          Entity Structures We Help You Choose
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Private Limited Company",
              severity: "Most Popular",
              severityColor: "bg-it-blue/20 text-it-blue",
              barColor: "bg-it-blue",
              desc: "Best for startups seeking funding, FDI, or planning future IPO. Requires minimum 2 directors, 2 shareholders. Offers limited liability, separate legal entity, and easy equity transfer. Annual ROC compliance is mandatory.",
            },
            {
              title: "Limited Liability Partnership (LLP)",
              severity: "Cost-Effective",
              severityColor: "bg-gst-green/20 text-gst-green",
              barColor: "bg-gst-green",
              desc: "Ideal for professional firms, consultants, and small businesses. No minimum capital requirement, lower compliance burden than Pvt Ltd. Partners have limited liability. Cannot raise equity funding or go for IPO.",
            },
            {
              title: "One Person Company (OPC)",
              severity: "Solo Founders",
              severityColor: "bg-ipo-amber/20 text-ipo-amber",
              barColor: "bg-ipo-amber",
              desc: "Perfect for solo entrepreneurs who want limited liability without a partner. Only one director and one shareholder needed. Must be converted to Pvt Ltd if turnover exceeds Rs 2 crore or paid-up capital exceeds Rs 50 lakh.",
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
                title: "Higher Tax Liability",
                desc: "Running a business as a proprietorship means paying tax at your personal slab rate (up to 30%). A company pays 25% flat with surcharge benefits.",
              },
              {
                icon: Scale,
                title: "Unlimited Personal Liability",
                desc: "Without incorporation, your personal assets — home, car, savings — are at risk if the business faces legal action or debt recovery.",
              },
              {
                icon: Ban,
                title: "Cannot Raise Funding",
                desc: "Investors and VCs require a Pvt Ltd structure. You will miss out on angel funding, DPIIT benefits, and Startup India tax holidays.",
              },
              {
                icon: FileX,
                title: "Compliance Penalties Later",
                desc: "Starting compliance late means back-dated filings, penalties for non-registration under GST, and potential MCA strike-off proceedings.",
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
          How We Incorporate Your Business
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Structure Advisory",
              desc: "We analyse your business model, projected revenue, funding plans, and tax implications to recommend the optimal entity structure.",
            },
            {
              step: "02",
              title: "Name Reservation & DSC",
              desc: "We apply for name approval on MCA portal (RUN form), obtain Digital Signature Certificates for all directors, and prepare the MOA & AOA.",
            },
            {
              step: "03",
              title: "MCA Incorporation",
              desc: "We file SPICe+ form with MCA and obtain your Certificate of Incorporation, PAN, TAN, GSTIN, and EPFO/ESIC registration in one go.",
            },
            {
              step: "04",
              title: "Post-Incorporation Setup",
              desc: "We open your company bank account, set up accounting on Tally/Zoho, configure GST, TDS compliance, and schedule your first board meeting.",
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
                Two founders in Rajkot wanted to start a SaaS company but were
                confused between LLP and Pvt Ltd. They also needed DPIIT Startup
                India recognition for the 80-IAC tax exemption.
              </p>
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[2px] text-ipo-amber font-medium">
                What We Did
              </span>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                We recommended Pvt Ltd for future funding capability, incorporated
                the company within 8 days via SPICe+, obtained DPIIT recognition,
                and set up a ESOP pool for early employees in the Articles.
              </p>
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[2px] text-gst-green font-medium">
                Result
              </span>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                Company was incorporated, GST-registered, and DPIIT-recognized
                within 15 days. The founders raised Rs 50 lakh in angel funding
                within 3 months and claimed 80-IAC exemption on profits.
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
              title: "Pvt Ltd vs LLP vs OPC — Comparison",
              href: "/knowledge-bank/income-tax",
              tag: "Guide",
            },
            {
              title: "MSME Registration Benefits",
              href: "/knowledge-bank/income-tax",
              tag: "Knowledge Bank",
            },
            {
              title: "Startup India Tax Exemptions",
              href: "/knowledge-bank/income-tax",
              tag: "Tax Planning",
            },
            {
              title: "First-Year Compliance Checklist",
              href: "/knowledge-bank/gst",
              tag: "Checklist",
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
            Ready to incorporate? Let&apos;s get started.
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl">
            Tell us about your business idea on WhatsApp and we will recommend the
            best structure and start the paperwork today.
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
