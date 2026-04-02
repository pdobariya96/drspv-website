import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917777970565";

const heroStats = [
  { value: "500+", label: "Clients Served" },
  { value: "15",   label: "Practice Areas" },
  { value: "4",    label: "Countries" },
  { value: "3+",   label: "Years of Excellence" },
];

export default function Hero() {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hello DRSPV, I'd like to schedule a consultation."
  )}`;

  return (
    <section className="relative overflow-hidden bg-ink min-h-[88vh] flex items-center">

      {/* Subtle warm grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Warm amber glow — top right */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[700px] h-[700px]"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(184,115,10,0.14) 0%, transparent 65%)",
        }}
      />

      {/* Left signature line */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-gold/60 to-transparent" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-bg" />

      <div className="relative mx-auto max-w-7xl w-full px-6 sm:px-10 lg:px-14 py-32 sm:py-40">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-gold-3" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-3">
              Chartered Accountants · Rajkot · Est. 2023
            </span>
          </div>

          {/* Headline — monumental serif */}
          <h1 className="font-display font-bold text-stone-50 leading-[1.04] tracking-[-0.02em] mb-7"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)" }}>
            Where Numbers<br />
            <span
              style={{
                background: "linear-gradient(100deg, #F2B53C 0%, #D4890E 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Meet Integrity.
            </span>
          </h1>

          {/* Service tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Tax Advisory", "Audit", "GST", "IPO Consultancy", "FEMA", "Global Accounting"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[11px] font-medium text-stone-400 border border-stone-700/70 bg-stone-800/40"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Sub-headline */}
          <p className="text-[16px] sm:text-[17px] leading-relaxed text-stone-400 max-w-lg mb-12">
            A full-service CA firm trusted by 500+ businesses across India and abroad — precise, deadline-driven, and always qualified.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:+917777970565`}
              className="inline-flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-semibold text-stone-900 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: "linear-gradient(135deg, #F2B53C, #B8730A)" }}
            >
              <Phone className="h-4 w-4" />
              Schedule a Call
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-wa-green px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-stone-400 hover:text-stone-200 transition-colors"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 pt-8 border-t border-stone-700/40 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl">
          {heroStats.map((s) => (
            <div key={s.label}>
              <div
                className="font-display text-3xl sm:text-4xl font-bold leading-none"
                style={{
                  background: "linear-gradient(135deg, #F2B53C, #D4890E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </div>
              <div className="text-[11px] text-stone-500 mt-1.5 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative large monogram — right side */}
      <div
        className="pointer-events-none select-none absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block"
        aria-hidden="true"
      >
        <span
          className="font-display font-bold leading-[0.85] tracking-tight"
          style={{
            fontSize: "clamp(8rem, 14vw, 160px)",
            color: "rgba(255,255,255,0.025)",
            letterSpacing: "-0.04em",
          }}
        >
          DR<br />SP<br />V
        </span>
      </div>
    </section>
  );
}
