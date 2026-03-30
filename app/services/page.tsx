import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  UserCheck,
  Trophy,
  Zap,
  Globe,
  CheckCircle2,
} from "lucide-react";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore comprehensive CA services from DRSPV & Associates including Income Tax Advisory, Audit & Assurance, GST Compliance, FEMA, IPO Consultancy, CFO Services, Due Diligence, Startup Advisory, Company Incorporation and Global Accounting.",
  alternates: { canonical: "https://drspv.in/services" },
  openGraph: {
    title: "Our Services | DRSPV & Associates",
    description:
      "Comprehensive CA services for every business need. Tax, Audit, GST, FEMA, IPO, CFO, and more.",
    url: "https://drspv.in/services",
  },
};

const services = [
  {
    number: "01",
    title: "Income Tax Advisory",
    slug: "income-tax-advisory",
    description:
      "Strategic tax planning and compliance for individuals, HNIs, and businesses. We help minimise tax liability while ensuring full compliance with the Income Tax Act.",
    bullets: [
      "Tax planning & return filing",
      "Advance tax computation",
      "Assessment & appeal representation",
      "TDS/TCS compliance management",
    ],
    whoFor: "Businesses, HNIs, Salaried Professionals",
    color: "#F59E0B",
  },
  {
    number: "02",
    title: "Audit & Assurance",
    slug: "audit-assurance",
    description:
      "Statutory, internal, and tax audits conducted with thoroughness and independence. We ensure your financial statements reflect a true and fair view.",
    bullets: [
      "Statutory audit under Companies Act",
      "Tax audit u/s 44AB",
      "Internal audit & controls review",
      "Concurrent & stock audits",
    ],
    whoFor: "Companies, LLPs, Trusts, Co-operatives",
    color: "#EF4444",
  },
  {
    number: "03",
    title: "GST Compliance",
    slug: "gst-compliance",
    description:
      "End-to-end GST services from registration to annual returns. We handle multi-state compliance, e-invoicing, and refund claims with precision.",
    bullets: [
      "GST registration & migration",
      "Monthly/quarterly return filing",
      "E-invoicing & e-way bill setup",
      "GST audit & annual return (GSTR-9/9C)",
    ],
    whoFor: "Traders, Manufacturers, E-commerce, Service Providers",
    color: "#A855F7",
  },
  {
    number: "04",
    title: "Global Accounting",
    slug: "global-accounting",
    description:
      "Outsourced bookkeeping and accounting services for businesses in the USA, UK, and Australia. We work in your timezone and on your preferred software.",
    bullets: [
      "Bookkeeping on QuickBooks, Xero, MYOB",
      "Monthly financial statements (US GAAP / IFRS)",
      "Payroll processing & compliance",
      "Accounts receivable & payable management",
    ],
    whoFor: "US/UK/AU CPAs, SMBs, Accounting Firms",
    color: "#22C55E",
  },
  {
    number: "05",
    title: "FEMA Compliance",
    slug: "fema-compliance",
    description:
      "Expert advisory on foreign exchange regulations, RBI filings, and cross-border transaction compliance under FEMA for NRIs and foreign investors.",
    bullets: [
      "FDI & ODI compliance filings",
      "FC-GPR, FC-TRS, ECB returns",
      "FEMA advisory for NRIs & OCIs",
      "Compounding applications for contraventions",
    ],
    whoFor: "NRIs, Foreign Investors, Companies with FDI/ODI",
    color: "#C9A84C",
  },
  {
    number: "06",
    title: "IPO Consultancy",
    slug: "ipo-consultancy",
    description:
      "Comprehensive IPO readiness and support services for companies planning to list on BSE SME, NSE Emerge, or the main board. From restated financials to DRHP review.",
    bullets: [
      "IPO readiness assessment",
      "Restated financial statements",
      "DRHP/RHP review & compliance",
      "Post-listing compliance support",
    ],
    whoFor: "SMEs Planning IPO, Growth-stage Companies",
    color: "#3B82F6",
  },
  {
    number: "07",
    title: "Virtual CFO Services",
    slug: "cfo-services",
    description:
      "On-demand CFO expertise without the full-time cost. We provide MIS, cash flow management, fundraising support, and strategic financial advisory to growing businesses.",
    bullets: [
      "Monthly MIS & dashboards",
      "Cash flow & working capital management",
      "Fundraising & investor deck support",
      "Board meeting & compliance calendar",
    ],
    whoFor: "Startups, MSMEs, Scaling Businesses",
    color: "#0D9488",
  },
  {
    number: "08",
    title: "Due Diligence",
    slug: "due-diligence",
    description:
      "Financial, tax, and legal due diligence for mergers, acquisitions, and investments. We deliver clear, actionable reports that protect your interests.",
    bullets: [
      "Financial due diligence",
      "Tax due diligence & exposure analysis",
      "Compliance health check",
      "Valuation support & deal structuring",
    ],
    whoFor: "Investors, Acquirers, PE/VC Funds",
    color: "#6366F1",
  },
  {
    number: "09",
    title: "Startup Advisory",
    slug: "startup-advisory",
    description:
      "End-to-end advisory for startups covering entity selection, funding compliance, ESOP structuring, and government registrations like Startup India and DPIIT.",
    bullets: [
      "Entity selection & incorporation",
      "Startup India / DPIIT registration",
      "ESOP design & compliance",
      "Angel tax & Section 56(2)(viib) advisory",
    ],
    whoFor: "Founders, Early-stage Startups, Incubators",
    color: "#F43F5E",
  },
  {
    number: "10",
    title: "Company Incorporation",
    slug: "company-incorporation",
    description:
      "Quick and compliant company, LLP, and OPC registration with the MCA. We handle everything from DSC and DIN to post-incorporation compliance.",
    bullets: [
      "Private Ltd / OPC / LLP registration",
      "DSC, DIN & name reservation",
      "MOA, AOA drafting & filing",
      "Post-incorporation compliance setup",
    ],
    whoFor: "Entrepreneurs, NRIs, Foreign Nationals",
    color: "#0EA5E9",
  },
  {
    number: "11",
    title: "Information System Audit (DISA)",
    slug: "information-system-audit",
    description:
      "Certified DISA professionals conducting IT audits, system controls review, and cybersecurity assessments. We evaluate IT infrastructure, ERP systems, and data integrity for regulatory compliance.",
    bullets: [
      "IT general controls & application controls audit",
      "ERP system review (SAP, Tally, Oracle)",
      "Cybersecurity risk assessment",
      "Data integrity & business continuity audit",
    ],
    whoFor: "Banks, NBFCs, Listed Companies, Enterprises",
    color: "#8B5CF6",
  },
  {
    number: "12",
    title: "Valuation Services (IBBI Registered)",
    slug: "valuation-services",
    description:
      "IBBI-registered valuers providing independent valuation of businesses, securities, financial assets, and intangibles under Companies Act, SEBI regulations, Income Tax Act, and IBC.",
    bullets: [
      "Business & enterprise valuation",
      "Valuation of shares & securities",
      "Valuation under IBC / NCLT proceedings",
      "Fair value assessment for M&A and tax purposes",
    ],
    whoFor: "Companies, Investors, NCLT Cases, M&A Transactions",
    color: "#EC4899",
  },
];

const whyCards = [
  {
    icon: UserCheck,
    title: "Direct CA Access",
    desc: "Work directly with qualified Chartered Accountants, not juniors or intermediaries.",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    desc: "500+ clients served, 10+ IPOs handled, and presence across 4 countries.",
  },
  {
    icon: Zap,
    title: "48hr Response",
    desc: "Every query, document request, or consultation gets a response within 48 hours.",
  },
  {
    icon: Globe,
    title: "Global Capabilities",
    desc: "Clients in India, USA, UK and Australia with multi-timezone service delivery.",
  },
];

const processSteps = [
  { step: "01", title: "Discovery Call", desc: "Understand your business and compliance needs" },
  { step: "02", title: "Scope & Proposal", desc: "Clear engagement scope with fixed pricing" },
  { step: "03", title: "Onboarding", desc: "Document collection and system setup" },
  { step: "04", title: "Execution", desc: "Dedicated CA team delivers on every milestone" },
  { step: "05", title: "Ongoing Support", desc: "Continuous advisory beyond compliance" },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-bg">
        <div className="absolute inset-0 grid-bg" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gold/[0.06] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 pt-28 pb-16 sm:pt-36 sm:pb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold/20 bg-gold/[0.08] px-4 py-1.5">
            <span className="text-xs font-medium text-gold tracking-wide">Our Services</span>
          </div>

          <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight text-text sm:text-4xl lg:text-5xl">
            Comprehensive CA Services for{" "}
            <span className="gold-gradient-text">Every Business Need</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg leading-relaxed">
            From income tax planning to IPO readiness, our qualified Chartered Accountants
            deliver precise, timely, and business-focused solutions across 12 practice areas.
          </p>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="bg-bg-2">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <div
                key={svc.slug}
                className="group rounded-2xl border border-white/[0.06] bg-card overflow-hidden transition-all hover:border-white/[0.12] hover:shadow-lg hover:shadow-black/20"
              >
                {/* Colored top line */}
                <div className="h-[3px]" style={{ backgroundColor: svc.color }} />

                <div className="p-6 flex flex-col h-full">
                  {/* Number */}
                  <span className="text-xs font-mono text-dim mb-3">{svc.number}</span>

                  <h3 className="text-lg font-semibold text-text mb-2">{svc.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{svc.description}</p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2
                          className="h-3.5 w-3.5 shrink-0 mt-0.5"
                          style={{ color: svc.color }}
                        />
                        <span className="text-xs text-muted">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="border-t border-white/[0.06] pt-4 flex items-center justify-between">
                    <span className="text-[10px] text-dim uppercase tracking-wider">
                      {svc.whoFor}
                    </span>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-gold transition-colors hover:text-gold-2 group-hover:translate-x-0.5 transition-transform"
                    >
                      Get started
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── Why DRSPV ─── */}
      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="text-center mb-12">
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-gold/20 bg-gold/[0.08] px-4 py-1.5">
              <span className="text-xs font-medium text-gold tracking-wide">Why DRSPV</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-white/[0.06] bg-card p-6 text-center transition-colors hover:border-gold/20"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                  <card.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-sm font-semibold text-text mb-2">{card.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── Process Timeline ─── */}
      <section className="bg-bg-2">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="text-center mb-14">
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-gold/20 bg-gold/[0.08] px-4 py-1.5">
              <span className="text-xs font-medium text-gold tracking-wide">Our Process</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
              How We Work With You
            </h2>
          </div>

          {/* Desktop horizontal timeline */}
          <div className="hidden md:block">
            <div className="relative flex items-start justify-between">
              {/* Connecting line */}
              <div className="absolute top-5 left-[10%] right-[10%] h-px bg-gold/20" />

              {processSteps.map((s) => (
                <div key={s.step} className="relative flex flex-col items-center text-center w-1/5">
                  {/* Circle */}
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-bg-2">
                    <span className="text-xs font-bold text-gold">{s.step}</span>
                  </div>
                  <h4 className="mt-4 text-sm font-semibold text-text">{s.title}</h4>
                  <p className="mt-1 text-xs text-muted max-w-[140px]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden space-y-6">
            {processSteps.map((s) => (
              <div key={s.step} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-bg-2">
                  <span className="text-xs font-bold text-gold">{s.step}</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text">{s.title}</h4>
                  <p className="mt-1 text-xs text-muted">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── WhatsApp CTA ─── */}
      <WhatsAppCTA />
    </>
  );
}
