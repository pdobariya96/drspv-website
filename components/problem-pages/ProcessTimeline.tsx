interface Step {
  title: string;
  description: string;
  time: string;
}

interface ProcessTimelineProps {
  steps: Step[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <section className="w-full bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
            Our Process
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-4xl">
            How We Solve It
          </h2>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden sm:block">
          <div className="relative flex items-start justify-between">
            {/* Connecting line */}
            <div className="absolute left-[calc(12.5%)] right-[calc(12.5%)] top-5 h-[1px] bg-gold/20" />

            {steps.map((s, i) => (
              <div
                key={s.title}
                className="relative flex w-1/4 flex-col items-center px-4 text-center"
              >
                {/* Gold circle */}
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-bg text-sm font-bold text-gold">
                  {i + 1}
                </div>

                <h3 className="mt-4 text-sm font-semibold text-text">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {s.description}
                </p>
                <span className="mt-3 rounded-full bg-gold/10 px-3 py-1 text-[10px] font-semibold text-gold">
                  {s.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="sm:hidden">
          <div className="relative ml-5 border-l border-gold/20 pl-8">
            {steps.map((s, i) => (
              <div key={s.title} className="relative pb-10 last:pb-0">
                {/* Gold circle */}
                <div className="absolute -left-[calc(2rem+13px)] flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-gold bg-bg text-xs font-bold text-gold">
                  {i + 1}
                </div>

                <h3 className="text-sm font-semibold text-text">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {s.description}
                </p>
                <span className="mt-2 inline-block rounded-full bg-gold/10 px-3 py-1 text-[10px] font-semibold text-gold">
                  {s.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
