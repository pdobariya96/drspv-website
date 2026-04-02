interface NoticeType {
  title: string;
  description: string;
  severity: "low" | "medium" | "high";
}

interface NoticeTypesProps {
  types: NoticeType[];
}

const severityConfig = {
  low: {
    label: "Usually simple",
    badge: "bg-green/10 text-green",
    bar: "bg-green",
  },
  medium: {
    label: "Needs expert",
    badge: "bg-ipo-amber/10 text-ipo-amber",
    bar: "bg-ipo-amber",
  },
  high: {
    label: "Act immediately",
    badge: "bg-red/10 text-red",
    bar: "bg-red",
  },
};

export default function NoticeTypes({ types }: NoticeTypesProps) {
  return (
    <section className="w-full bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
            Know Your Notice
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-4xl">
            Common Notice Types
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((t, i) => {
            const s = severityConfig[t.severity];
            return (
              <div
                key={t.title}
                className="relative flex flex-col rounded-xl border border-stone-200 bg-card p-6 pt-8"
              >
                {/* Colored top bar */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 rounded-t-xl ${s.bar}`}
                />

                <span className="mb-3 text-2xl font-bold text-dim/30">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="text-sm font-bold text-text">{t.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">
                  {t.description}
                </p>

                <span
                  className={`mt-4 inline-block w-fit rounded-full px-2.5 py-1 text-[10px] font-semibold ${s.badge}`}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
