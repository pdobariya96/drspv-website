import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  Shield,
  Globe,
  Users,
  Clock,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917777970565";

const trustPills = [
  { icon: Shield, label: "Est. 2023" },
  { icon: Globe, label: "4 Countries" },
  { icon: Users, label: "500+ Clients" },
  { icon: Clock, label: "48hr Response" },
];

export default function Hero() {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hello DRSPV, I'd like to schedule a consultation."
  )}`;

  return (
    <section className="relative overflow-hidden bg-bg">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Dual radial glow */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gold glow top center */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gold/[0.06] blur-[120px]" />
        {/* Blue glow left */}
        <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-it-blue/[0.04] blur-[100px]" />
        {/* Blue glow right */}
        <div className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-it-blue/[0.04] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-28 sm:pb-28 sm:pt-36 text-center">
        {/* Live badge */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-green/20 bg-green/[0.08] px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
          </span>
          <span className="text-xs font-medium text-green">
            Now accepting new clients across India &amp; abroad
          </span>
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
          CA Firm You Can Trust for{" "}
          <span className="gold-gradient-text">
            Tax Advisory, Audit &amp; IPO Consultancy
          </span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
          DRSPV &amp; Associates is a modern Chartered Accountancy firm
          delivering tax advisory, statutory audits, IPO consultancy, and global
          compliance solutions for businesses across India and abroad.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`tel:+${WA}`}
            className="inline-flex items-center gap-2.5 rounded-lg bg-gold px-7 py-3.5 text-sm font-semibold text-bg shadow-lg shadow-gold/20 transition-all duration-200 hover:brightness-110 hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone className="h-4.5 w-4.5" />
            Schedule a Quick Call
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg bg-wa-green px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-wa-green/20 transition-all duration-200 hover:brightness-110 hover:shadow-wa-green/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us Now
          </a>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-transparent px-7 py-3.5 text-sm font-semibold text-text transition-all duration-200 hover:border-white/20 hover:bg-white/[0.04] hover:scale-[1.02] active:scale-[0.98]"
          >
            View Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Trust pills */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          {trustPills.map((pill) => (
            <div
              key={pill.label}
              className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-card/50 px-4 py-2"
            >
              <pill.icon className="h-3.5 w-3.5 text-gold" />
              <span className="text-xs font-medium text-muted">
                {pill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
