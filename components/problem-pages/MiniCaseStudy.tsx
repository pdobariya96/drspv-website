interface MiniCaseStudyProps {
  problem: string;
  solution: string;
  result: string;
}

export default function MiniCaseStudy({
  problem,
  solution,
  result,
}: MiniCaseStudyProps) {
  return (
    <section className="w-full bg-bg-2 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
            Case Study
          </span>
          <h2 className="font-display text-2xl font-bold tracking-tight text-text sm:text-3xl">
            A Recent Win
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-stone-200 bg-card">
          {/* Gold top line */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/60 via-gold/30 to-gold/0" />

          <div className="grid grid-cols-1 divide-y divide-stone-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {/* Problem */}
            <div className="p-6 sm:p-8">
              <span className="mb-2 inline-block text-[10px] font-semibold uppercase tracking-[0.12em] text-red">
                Problem
              </span>
              <p className="text-sm leading-relaxed text-muted">{problem}</p>
            </div>

            {/* Solution */}
            <div className="p-6 sm:p-8">
              <span className="mb-2 inline-block text-[10px] font-semibold uppercase tracking-[0.12em] text-it-blue">
                Solution
              </span>
              <p className="text-sm leading-relaxed text-muted">{solution}</p>
            </div>

            {/* Result */}
            <div className="p-6 sm:p-8">
              <span className="mb-2 inline-block text-[10px] font-semibold uppercase tracking-[0.12em] text-green">
                Result
              </span>
              <p className="text-sm font-medium leading-relaxed text-green">
                {result}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
