import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  tag: string;
  tagColor: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  industry: string;
  href?: string;
}

export default function CaseStudyCard({
  tag,
  tagColor,
  title,
  problem,
  solution,
  result,
  industry,
  href = "#",
}: CaseStudyCardProps) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-card transition-all duration-300 hover:border-gold/20">
      {/* Colored top line */}
      <div className={`h-1 w-full ${tagColor}`} />

      <div className="p-6">
        <span
          className={`mb-3 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${tagColor.replace("bg-", "bg-")}/15 text-text`}
        >
          {tag}
        </span>

        <h3 className="text-base font-bold text-text">{title}</h3>

        {/* 3-col body */}
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.12em] text-red">
              Problem
            </span>
            <p className="text-xs leading-relaxed text-muted">{problem}</p>
          </div>
          <div>
            <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.12em] text-it-blue">
              Solution
            </span>
            <p className="text-xs leading-relaxed text-muted">{solution}</p>
          </div>
          <div>
            <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.12em] text-green">
              Result
            </span>
            <p className="text-xs font-medium leading-relaxed text-green">
              {result}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-stone-200 pt-4">
          <span className="rounded-full bg-stone-100/70 px-2.5 py-0.5 text-[10px] font-medium text-muted">
            {industry}
          </span>
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-xs font-medium text-gold transition-colors hover:text-gold-2"
          >
            Read full story
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
