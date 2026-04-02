import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "DRSPV helped us restructure our tax strategy before the IPO. Their team was incredibly thorough with SEBI filings and ensured zero compliance gaps during the listing process.",
    name: "Rajesh Mehta",
    role: "CFO, Meridian Textiles Ltd.",
    initials: "RM",
  },
  {
    quote:
      "We received an aggressive GST demand of 42 lakhs. The DRSPV team analysed the notice, prepared our response within 48 hours, and got the demand fully quashed at the appellate level.",
    name: "Priya Sharma",
    role: "Director, Nexgen Exports Pvt. Ltd.",
    initials: "PS",
  },
  {
    quote:
      "As an NRI running a business in India, FEMA compliance was a nightmare. DRSPV simplified everything from ODI filings to DTAA benefit claims. Highly reliable and always reachable.",
    name: "Amit Patel",
    role: "Founder, Skybridge Ventures (Dubai)",
    initials: "AP",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-bg-2 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
            Client Trust
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group flex flex-col rounded-xl border border-stone-200 bg-card p-6 transition-all duration-300 hover:border-gold/20"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <Quote className="mb-2 h-5 w-5 text-gold/30" />
              <p className="flex-1 text-sm italic leading-relaxed text-muted">
                {t.quote}
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 border-t border-stone-200 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
