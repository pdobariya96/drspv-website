import Link from "next/link";
import {
  Calculator,
  ClipboardCheck,
  Receipt,
  Globe,
  Landmark,
  TrendingUp,
  Briefcase,
  Search,
  Rocket,
  Building2,
  ArrowUpRight,
  Monitor,
  Scale,
} from "lucide-react";

const services = [
  {
    num: "01",
    icon: Calculator,
    title: "Income Tax Advisory",
    desc: "Strategic tax planning, return filing, and litigation support for individuals and businesses.",
    color: "text-it-blue",
    bg: "bg-it-blue/10",
    slug: "income-tax-advisory",
  },
  {
    num: "02",
    icon: ClipboardCheck,
    title: "Audit & Assurance",
    desc: "Statutory audits, internal audits, and tax audits compliant with ICAI standards.",
    color: "text-gst-green",
    bg: "bg-gst-green/10",
    slug: "audit-assurance",
  },
  {
    num: "03",
    icon: Receipt,
    title: "GST Compliance",
    desc: "GST registration, return filing, refund claims, and notice handling across all states.",
    color: "text-gst-green",
    bg: "bg-gst-green/10",
    slug: "gst-compliance",
  },
  {
    num: "04",
    icon: Globe,
    title: "Global Accounting",
    desc: "Outsourced bookkeeping and financial reporting for international firms and NRIs.",
    color: "text-incorp-sky",
    bg: "bg-incorp-sky/10",
    slug: "global-accounting",
  },
  {
    num: "05",
    icon: Landmark,
    title: "FEMA Compliance",
    desc: "Foreign exchange advisory, ODI/FDI filings, and RBI compounding applications.",
    color: "text-fema-purple",
    bg: "bg-fema-purple/10",
    slug: "fema-compliance",
  },
  {
    num: "06",
    icon: TrendingUp,
    title: "IPO Consultancy",
    desc: "DRHP preparation, SEBI compliance, and end-to-end IPO readiness advisory.",
    color: "text-ipo-amber",
    bg: "bg-ipo-amber/10",
    slug: "ipo-consultancy",
  },
  {
    num: "07",
    icon: Briefcase,
    title: "CFO Services",
    desc: "Virtual CFO solutions including MIS reporting, budgeting, and fundraising support.",
    color: "text-cfo-teal",
    bg: "bg-cfo-teal/10",
    slug: "cfo-services",
  },
  {
    num: "08",
    icon: Search,
    title: "Due Diligence",
    desc: "Financial and tax due diligence for M&A transactions, investments, and partnerships.",
    color: "text-dd-indigo",
    bg: "bg-dd-indigo/10",
    slug: "due-diligence",
  },
  {
    num: "09",
    icon: Rocket,
    title: "Startup Advisory",
    desc: "Incorporation structuring, DPIIT registration, funding compliance, and ESOP schemes.",
    color: "text-startup-rose",
    bg: "bg-startup-rose/10",
    slug: "startup-advisory",
  },
  {
    num: "10",
    icon: Building2,
    title: "Company Incorporation",
    desc: "Private limited, LLP, OPC, and Section 8 company registrations across India.",
    color: "text-incorp-sky",
    bg: "bg-incorp-sky/10",
    slug: "company-incorporation",
  },
  {
    num: "11",
    icon: Monitor,
    title: "Information System Audit (DISA)",
    desc: "IT audits, system controls review, and cybersecurity assessments by DISA-qualified CAs.",
    color: "text-fema-purple",
    bg: "bg-fema-purple/10",
    slug: "information-system-audit",
  },
  {
    num: "12",
    icon: Scale,
    title: "Valuation Services (IBBI)",
    desc: "IBBI-registered valuers for business, securities, and financial asset valuations.",
    color: "text-startup-rose",
    bg: "bg-startup-rose/10",
    slug: "valuation-services",
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full bg-bg-2 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
            What We Do
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base">
            Comprehensive chartered accountancy services for businesses at every
            stage, from startup to IPO and beyond.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative flex flex-col gap-4 rounded-xl border border-stone-200 bg-card p-6 transition-all duration-300 hover:border-gold/30 hover:bg-card/80"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${s.bg}`}
                >
                  <s.icon className={`h-5 w-5 ${s.color}`} />
                </div>
                <span className="text-xl font-bold text-dim/30">{s.num}</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {s.desc}
                </p>
              </div>
              <ArrowUpRight className="absolute bottom-6 right-6 h-4 w-4 text-transparent transition-all duration-300 group-hover:text-gold" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
