import Link from "next/link";
import {
  FileWarning,
  Clock,
  Rocket,
  TrendingUp,
  Receipt,
  Globe,
  FileText,
  Building2,
  ArrowRight,
} from "lucide-react";

const problems = [
  {
    icon: FileWarning,
    title: "Got a Tax Notice?",
    description: "Expert handling of Income Tax notices and assessments.",
    color: "text-red",
    bg: "bg-red/10",
    slug: "tax-notice",
  },
  {
    icon: Clock,
    title: "Missed a Deadline?",
    description: "Late filing solutions with penalty minimization strategies.",
    color: "text-ipo-amber",
    bg: "bg-ipo-amber/10",
    slug: "missed-deadline",
  },
  {
    icon: Rocket,
    title: "Starting a Business?",
    description: "Company formation, compliance setup, and advisory from day one.",
    color: "text-green",
    bg: "bg-green/10",
    slug: "starting-a-business",
  },
  {
    icon: TrendingUp,
    title: "Planning an IPO?",
    description: "End-to-end IPO readiness, DRHP drafting, and SEBI compliance.",
    color: "text-it-blue",
    bg: "bg-it-blue/10",
    slug: "planning-an-ipo",
  },
  {
    icon: Receipt,
    title: "Got a GST Notice?",
    description: "GST audit defense, demand responses, and appellate support.",
    color: "text-fema-purple",
    bg: "bg-fema-purple/10",
    slug: "gst-notice",
  },
  {
    icon: Globe,
    title: "NRI Tax Confusion?",
    description: "Cross-border taxation, DTAA benefits, and FEMA advisory.",
    color: "text-cfo-teal",
    bg: "bg-cfo-teal/10",
    slug: "nri-taxes",
  },
  {
    icon: FileText,
    title: "Need ITR Filed?",
    description: "Accurate ITR preparation and filing for individuals and HUFs.",
    color: "text-biz-orange",
    bg: "bg-biz-orange/10",
    slug: "itr-filing",
  },
  {
    icon: Building2,
    title: "Global Accounting?",
    description: "Outsourced bookkeeping and financial reporting for overseas firms.",
    color: "text-incorp-sky",
    bg: "bg-incorp-sky/10",
    slug: "global-accounting",
    href: "/services/global-accounting",
  },
];

export default function ProblemGrid() {
  return (
    <section className="w-full bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
            How Can We Help
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-4xl">
            What brings you here?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base">
            Select the situation closest to yours and we will guide you to the
            right solution.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <Link
              key={p.slug}
              href={p.href ?? `/i-need-help-with/${p.slug}`}
              className="group relative flex flex-col gap-4 rounded-xl border border-stone-200 bg-card p-6 transition-all duration-300 hover:border-gold/30 hover:bg-card/80 hover:shadow-lg hover:shadow-gold/[0.03]"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full ${p.bg}`}
              >
                <p.icon className={`h-5 w-5 ${p.color}`} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text">{p.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {p.description}
                </p>
              </div>
              <ArrowRight className="absolute bottom-6 right-6 h-4 w-4 text-muted/40 transition-all duration-300 group-hover:text-gold group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
