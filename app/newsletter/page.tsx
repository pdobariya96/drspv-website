import type { Metadata } from "next";
import {
  Mail,
  CheckCircle,
  FileText,
  TrendingUp,
  Bell,
  Shield,
  MessageCircle,
  Phone,
} from "lucide-react";
import NewsletterForm from "@/components/shared/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Subscribe to the DRSPV weekly newsletter for tax updates, GST changes, compliance deadlines, and expert CA insights delivered to your inbox every Monday.",
  keywords: [
    "tax newsletter India",
    "GST updates newsletter",
    "CA newsletter",
    "tax compliance updates",
    "weekly tax digest",
  ],
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "911234567890";
const PH = process.env.NEXT_PUBLIC_PHONE || WA;

const benefits = [
  {
    icon: FileText,
    title: "Weekly Tax Digest",
    description:
      "Every Monday, get a concise summary of the week's most important tax and GST developments — written in plain language by our CAs.",
  },
  {
    icon: Bell,
    title: "Deadline Alerts",
    description:
      "Never miss a filing deadline. We send timely reminders for ITR, TDS, GST, and ROC due dates 7 days before they are due.",
  },
  {
    icon: TrendingUp,
    title: "Budget & Policy Updates",
    description:
      "Instant analysis of Union Budget changes, CBDT circulars, GST Council decisions, and SEBI notifications that affect your business.",
  },
  {
    icon: Shield,
    title: "Practical Tips",
    description:
      "Tax-saving strategies, deduction maximisation guides, and compliance checklists that you can implement immediately.",
  },
];

export default function NewsletterPage() {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hello DRSPV, I want to subscribe to your newsletter."
  )}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-2xl px-4 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 border border-gold/20">
            <Mail className="h-7 w-7 text-gold" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text mb-4">
            Weekly Tax & Finance{" "}
            <span className="gold-gradient-text">Insights</span>
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed mb-8">
            Join 2,000+ professionals and business owners who receive our weekly
            digest on income tax, GST, FEMA, and IPO updates — written by our
            qualified Chartered Accountants.
          </p>

          {/* Newsletter Form */}
          <div className="mx-auto max-w-md">
            <NewsletterForm />
          </div>

          {/* Trust Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {[
              "No spam, ever",
              "Unsubscribe anytime",
              "Written by CAs",
              "100% free",
            ].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 text-xs text-muted"
              >
                <CheckCircle className="h-3 w-3 text-gst-green" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-4xl px-4 pb-16">
        <h2 className="text-2xl font-bold text-text text-center mb-10">
          What You Get Every Week
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-xl bg-card border border-white/[0.06] p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 border border-gold/20">
                <b.icon className="h-5 w-5 text-gold" />
              </div>
              <h3 className="text-base font-semibold text-text mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="w-full bg-gradient-to-r from-[#0B1628] via-[#0F1E35] to-[#0B1628] border-y border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14 flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
            Prefer WhatsApp updates?
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl">
            We also share key updates on our WhatsApp broadcast list. Message us
            to get added — same content, delivered where you already are.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg bg-wa-green px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-wa-green/20 transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              Join WhatsApp Updates
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
