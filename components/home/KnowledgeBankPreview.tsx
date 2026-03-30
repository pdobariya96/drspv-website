import Link from "next/link";
import {
  Calculator,
  Receipt,
  TrendingUp,
  Landmark,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: Calculator,
    title: "Income Tax",
    slug: "income-tax",
    color: "text-it-blue",
    bg: "bg-it-blue/10",
    hoverBg: "group-hover:bg-it-blue",
    borderColor: "group-hover:border-it-blue/30",
    chapters: 15,
    links: [
      "Basis of Charge",
      "Salaries — Sec 15-17",
      "Capital Gains — Sec 45-55",
      "Deductions — 80C to 80U",
    ],
  },
  {
    icon: Receipt,
    title: "GST",
    slug: "gst",
    color: "text-gst-green",
    bg: "bg-gst-green/10",
    hoverBg: "group-hover:bg-gst-green",
    borderColor: "group-hover:border-gst-green/30",
    chapters: 14,
    links: [
      "GST Registration Process",
      "Input Tax Credit (ITC) Rules",
      "E-Invoicing & E-Way Bill",
      "GST Return Filing Calendar",
    ],
  },
  {
    icon: TrendingUp,
    title: "IPO",
    slug: "ipo",
    color: "text-ipo-amber",
    bg: "bg-ipo-amber/10",
    hoverBg: "group-hover:bg-ipo-amber",
    borderColor: "group-hover:border-ipo-amber/30",
    chapters: 10,
    links: [
      "IPO Eligibility Criteria",
      "DRHP Drafting Essentials",
      "SEBI ICDR Regulations",
      "Post-IPO Compliance Guide",
    ],
  },
  {
    icon: Landmark,
    title: "FEMA",
    slug: "fema",
    color: "text-fema-purple",
    bg: "bg-fema-purple/10",
    hoverBg: "group-hover:bg-fema-purple",
    borderColor: "group-hover:border-fema-purple/30",
    chapters: 12,
    links: [
      "FEMA for NRIs",
      "ODI & FDI Compliance",
      "LRS Rules & Limits",
      "RBI Compounding Applications",
    ],
  },
];

export default function KnowledgeBankPreview() {
  return (
    <section className="w-full bg-bg-2 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
            Learn
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-4xl">
            Knowledge Bank
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base">
            Deep-dive guides and reference chapters on Income Tax, GST, IPO, and
            FEMA written by practising CAs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.slug}
              className={`group flex flex-col rounded-xl border border-white/[0.06] bg-card p-6 transition-all duration-300 ${p.borderColor}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${p.bg}`}
                >
                  <p.icon className={`h-5 w-5 ${p.color}`} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text">{p.title}</h3>
                  <span className="text-xs text-muted">
                    {p.chapters} chapters
                  </span>
                </div>
              </div>

              <ul className="mt-5 flex flex-col gap-2.5">
                {p.links.map((link) => (
                  <li key={link}>
                    <Link
                      href={`/knowledge/${p.slug}`}
                      className="text-xs text-muted transition-colors hover:text-text"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href={`/knowledge/${p.slug}`}
                className={`mt-6 inline-flex w-fit items-center gap-1.5 rounded-lg border border-white/[0.06] px-4 py-2 text-xs font-semibold text-text transition-all duration-300 ${p.hoverBg} group-hover:text-bg group-hover:border-transparent`}
              >
                Explore
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
