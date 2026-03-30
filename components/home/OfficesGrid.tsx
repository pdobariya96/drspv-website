import { MapPin, ExternalLink, Globe } from "lucide-react";

const offices = [
  {
    name: "Rajkot HQ",
    badge: "Headquarters",
    address: [
      "301, Shalin Complex",
      "Dr. Yagnik Road, Rajkot",
      "Gujarat 360001, India",
    ],
    mapUrl:
      "https://maps.google.com/?q=Shalin+Complex+Dr+Yagnik+Road+Rajkot+Gujarat",
    highlight: true,
  },
  {
    name: "Ahmedabad",
    badge: null,
    address: [
      "612, Privilon",
      "Ambli BRT Road, Ahmedabad",
      "Gujarat 380058, India",
    ],
    mapUrl:
      "https://maps.google.com/?q=Privilon+Ambli+BRT+Road+Ahmedabad+Gujarat",
    highlight: false,
  },
  {
    name: "International Virtual Office",
    badge: null,
    address: [
      "Serving clients across",
      "UAE, USA, UK & Singapore",
      "Virtual consultations available",
    ],
    mapUrl: null,
    highlight: false,
    isVirtual: true,
  },
];

export default function OfficesGrid() {
  return (
    <section className="w-full bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
            Our Offices
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-4xl">
            Where to Find Us
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((o) => (
            <div
              key={o.name}
              className={`relative flex flex-col rounded-xl border bg-card p-6 transition-all duration-300 hover:border-gold/20 ${
                o.highlight
                  ? "border-gold/30"
                  : "border-white/[0.06]"
              }`}
            >
              {o.badge && (
                <span className="absolute right-4 top-4 rounded-full bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold text-gold">
                  {o.badge}
                </span>
              )}

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                {o.isVirtual ? (
                  <Globe className="h-5 w-5 text-gold" />
                ) : (
                  <MapPin className="h-5 w-5 text-gold" />
                )}
              </div>

              <h3 className="text-base font-bold text-text">{o.name}</h3>

              <div className="mt-3 flex flex-col gap-0.5">
                {o.address.map((line) => (
                  <p key={line} className="text-xs text-muted">
                    {line}
                  </p>
                ))}
              </div>

              {o.mapUrl ? (
                <a
                  href={o.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-gold transition-colors hover:text-gold-2"
                >
                  Open in Google Maps
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <p className="mt-5 text-xs text-gold/60">
                  Available via video conference
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
