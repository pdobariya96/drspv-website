import type { Metadata } from "next";
import Link from "next/link";
import {
  FileWarning,
  Clock,
  Building2,
  TrendingUp,
  Receipt,
  Globe,
  FileText,
  MessageCircle,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "I Need Help With...",
  description:
    "Facing a tax notice, missed deadline, GST issue, or business challenge? DRSPV & Associates can help you resolve it fast. Talk to a qualified CA today.",
  keywords: [
    "tax notice help",
    "missed ITR deadline",
    "start a business India",
    "IPO consultant",
    "GST notice reply",
    "NRI taxation India",
    "ITR filing help",
  ],
};

const problems = [
  {
    slug: "tax-notice",
    title: "Tax Notice",
    description:
      "Received a notice under Section 143(1), 148, or 271? We draft precise replies and represent you before the Income Tax Department.",
    icon: FileWarning,
    color: "text-red",
    bg: "bg-red/10",
    border: "border-red/20",
  },
  {
    slug: "missed-deadline",
    title: "Missed Deadline",
    description:
      "Forgot to file your ITR, TDS return, or GST return on time? We help you file belated returns and minimise penalties under the law.",
    icon: Clock,
    color: "text-ipo-amber",
    bg: "bg-ipo-amber/10",
    border: "border-ipo-amber/20",
  },
  {
    slug: "starting-a-business",
    title: "Starting a Business",
    description:
      "Confused between Pvt Ltd, LLP, or OPC? We handle company incorporation, MSME registration, and initial compliance setup end to end.",
    icon: Building2,
    color: "text-gst-green",
    bg: "bg-gst-green/10",
    border: "border-gst-green/20",
  },
  {
    slug: "planning-an-ipo",
    title: "Planning an IPO",
    description:
      "Going public on BSE SME or NSE Emerge? We guide you from DRHP preparation to SEBI filing and post-listing compliance.",
    icon: TrendingUp,
    color: "text-ipo-amber",
    bg: "bg-ipo-amber/10",
    border: "border-ipo-amber/20",
  },
  {
    slug: "gst-notice",
    title: "GST Notice",
    description:
      "Received a GST show-cause notice, DRC-01, or ASMT-10? We prepare detailed replies and handle hearings with the GST authorities.",
    icon: Receipt,
    color: "text-gst-green",
    bg: "bg-gst-green/10",
    border: "border-gst-green/20",
  },
  {
    slug: "nri-taxes",
    title: "NRI Taxes",
    description:
      "NRI with Indian income, property, or investments? We handle DTAA claims, FEMA compliance, and NRI-specific ITR filing.",
    icon: Globe,
    color: "text-fema-purple",
    bg: "bg-fema-purple/10",
    border: "border-fema-purple/20",
  },
  {
    slug: "itr-filing",
    title: "ITR Filing",
    description:
      "Salaried, freelancer, or business owner? We file the right ITR form, maximise deductions, and ensure zero-error e-verification.",
    icon: FileText,
    color: "text-it-blue",
    bg: "bg-it-blue/10",
    border: "border-it-blue/20",
  },
];

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917777970565";
const PH = process.env.NEXT_PUBLIC_PHONE || WA;

export default function INeedHelpWithPage() {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hello DRSPV, I need help with..."
  )}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block rounded-full bg-gold/10 border border-gold/20 px-4 py-1.5 text-[11px] uppercase tracking-[2px] text-gold font-medium mb-6">
            Problem Solver
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text mb-4">
            Facing a Tax or Business{" "}
            <span className="gold-gradient-text">Challenge?</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us what you are dealing with. Our qualified CAs will guide you
            step-by-step toward the fastest, most compliant solution.
          </p>
        </div>
      </section>

      {/* Problem Cards Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <Link
              key={p.slug}
              href={`/i-need-help-with/${p.slug}`}
              className={`group rounded-xl bg-card border border-white/[0.06] p-6 transition-all duration-200 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-0.5`}
            >
              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg ${p.bg} border ${p.border}`}
              >
                <p.icon className={`h-5 w-5 ${p.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-gold transition-colors">
                {p.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {p.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-gold">
                Get Help
                <span className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="w-full bg-gradient-to-r from-[#0B1628] via-[#0F1E35] to-[#0B1628] border-y border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14 flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
            Not sure where to start? Just message us.
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl">
            Describe your situation on WhatsApp and our team will point you to
            the right CA within minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg bg-wa-green px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-wa-green/20 transition-all duration-200 hover:brightness-110 hover:shadow-wa-green/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
            <a
              href={`tel:+${PH}`}
              className="inline-flex items-center gap-2.5 rounded-lg border border-gold/40 bg-transparent px-7 py-3 text-sm font-semibold text-gold transition-all duration-200 hover:bg-gold/10 hover:border-gold/60 hover:scale-[1.02] active:scale-[0.98]"
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
