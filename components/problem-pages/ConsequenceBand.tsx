import { AlertTriangle } from "lucide-react";

interface ConsequenceBandProps {
  consequences: string[];
}

export default function ConsequenceBand({
  consequences,
}: ConsequenceBandProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Red-tinted background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red/[0.06] via-red/[0.03] to-red/[0.06]" />
      <div className="absolute inset-0 bg-bg-2" style={{ opacity: 0.92 }} />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mb-10 flex items-center justify-center gap-3">
          <AlertTriangle className="h-6 w-6 text-red" />
          <h2 className="text-xl font-bold text-text sm:text-2xl">
            What happens if you ignore it?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {consequences.map((c, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-red/10 bg-red/[0.04] p-5"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red/10 text-xs font-bold text-red">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-muted">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
