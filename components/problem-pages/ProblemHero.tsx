import { Phone, MessageCircle } from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917777970565";

interface ProblemHeroProps {
  type: string;
  title: string;
  description: string;
  stats: string[];
}

export default function ProblemHero({
  type,
  title,
  description,
  stats,
}: ProblemHeroProps) {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    `Hello DRSPV, I need help with: ${type}`
  )}`;

  return (
    <section className="relative overflow-hidden bg-bg">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Red-tinted radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-red/[0.06] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-28 text-center sm:pb-24 sm:pt-36">
        {/* Problem type badge */}
        <span className="mb-6 inline-block rounded-full bg-red/10 px-4 py-1.5 text-xs font-semibold text-red">
          {type}
        </span>

        <h1 className="text-3xl font-bold leading-tight tracking-tight text-text sm:text-5xl">
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base text-muted sm:text-lg">
          {description}
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`tel:+${WA}`}
            className="inline-flex items-center gap-2.5 rounded-lg bg-gold px-7 py-3.5 text-sm font-semibold text-bg shadow-lg shadow-gold/20 transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone className="h-4.5 w-4.5" />
            Talk to a CA Now
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg bg-wa-green px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-wa-green/20 transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us
          </a>
        </div>

        {/* Trust stats pills */}
        {stats.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {stats.map((stat) => (
              <div
                key={stat}
                className="rounded-full border border-white/[0.06] bg-card/50 px-4 py-2 text-xs font-medium text-muted"
              >
                {stat}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
