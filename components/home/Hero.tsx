import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, Shield, Globe, Users, Clock } from "lucide-react";

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
    <section className="relative overflow-hidden bg-ink">

      {/* Subtle dot texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Bottom fade to page bg */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-bg" />

      <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-28 sm:pb-28 sm:pt-36 text-center">

        {/* Live badge */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-green/20 bg-green/10 px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
          </span>
          <span className="text-xs font-medium text-green">
            Now accepting new clients across India &amp; abroad
          </span>
        </div>

        {/* Serif heading */}
        <h1 className="font-display mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight text-stone-100 sm:text-5xl lg:text-6xl">
          CA Firm You Can Trust for{" "}
          <span className="gold-gradient-text">
            Tax, Audit &amp; IPO Consultancy
          </span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-stone-400 sm:text-lg leading-relaxed">
          DRSPV &amp; Associates — a modern Chartered Accountancy firm delivering income tax advisory,
          statutory audits, IPO consultancy, and global compliance for businesses across India and abroad.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`tel:+${WA}`}
            className="inline-flex items-center gap-2.5 rounded-lg bg-gold px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-gold-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" />
            Schedule a Quick Call
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg bg-wa-green px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us Now
          </a>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-stone-600 bg-transparent px-7 py-3.5 text-sm font-semibold text-stone-300 transition-all duration-200 hover:border-stone-400 hover:text-stone-100 hover:scale-[1.02] active:scale-[0.98]"
          >
            View Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Trust pills */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {trustPills.map((pill) => (
            <div
              key={pill.label}
              className="flex items-center gap-2 rounded-full border border-stone-700 bg-stone-800/60 px-4 py-2"
            >
              <pill.icon className="h-3.5 w-3.5 text-gold-3" />
              <span className="text-xs font-medium text-stone-300">{pill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
