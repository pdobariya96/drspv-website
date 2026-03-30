import { MapPin, ExternalLink } from "lucide-react";

const offices = [
  {
    name: "Head Office – Rajkot, India",
    badge: "Headquarters",
    address: [
      "510, RK World Tower,",
      "Near Sheetal Park, 150 Ft. Ring Road,",
      "Rajkot – 360006, Gujarat",
    ],
    mapUrl:
      "https://maps.google.com/?q=510+RK+World+Tower+Sheetal+Park+150+Ft+Ring+Road+Rajkot+Gujarat+360006",
    highlight: true,
  },
  {
    name: "Dubai, UAE",
    badge: "International",
    address: [
      "Office #1904, Tamani Arts,",
      "Business Bay,",
      "Dubai – UAE",
    ],
    mapUrl:
      "https://maps.google.com/?q=Tamani+Arts+Business+Bay+Dubai+UAE",
    highlight: false,
  },
  {
    name: "Surat, India",
    badge: null,
    address: [
      "423, Laxmi Enclave 2,",
      "Katargam,",
      "Surat – 395004, Gujarat",
    ],
    mapUrl:
      "https://maps.google.com/?q=Laxmi+Enclave+2+Katargam+Surat+Gujarat+395004",
    highlight: false,
  },
  {
    name: "Gondal, India",
    badge: null,
    address: [
      "1st Floor, Tulsi Plaza,",
      "Sant Nagar,",
      "Gondal – 360311, Gujarat",
    ],
    mapUrl:
      "https://maps.google.com/?q=Tulsi+Plaza+Sant+Nagar+Gondal+Gujarat+360311",
    highlight: false,
  },
  {
    name: "Ahmedabad, India",
    badge: null,
    address: [
      "421, Shivalik Shilp 2,",
      "Near ITC Narmada, Judges Bunglow Road,",
      "Ahmedabad – 380015, Gujarat",
    ],
    mapUrl:
      "https://maps.google.com/?q=Shivalik+Shilp+2+Judges+Bunglow+Road+Ahmedabad+Gujarat+380015",
    highlight: false,
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
                <MapPin className="h-5 w-5 text-gold" />
              </div>

              <h3 className="text-base font-bold text-text">{o.name}</h3>

              <div className="mt-3 flex flex-col gap-0.5">
                {o.address.map((line) => (
                  <p key={line} className="text-xs text-muted">
                    {line}
                  </p>
                ))}
              </div>

              {o.mapUrl && (
                <a
                  href={o.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-gold transition-colors hover:text-gold-2"
                >
                  Open in Google Maps
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
