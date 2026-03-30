import { Scale } from "lucide-react";

interface LandmarkJudgementProps {
  caseName: string;
  court: string;
  year: string;
  ruling: string;
  impact: string;
}

export default function LandmarkJudgement({
  caseName,
  court,
  year,
  ruling,
  impact,
}: LandmarkJudgementProps) {
  return (
    <div className="bg-card rounded-lg border-l-[3px] border-fema-purple overflow-hidden my-6">
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Scale className="w-4 h-4 text-fema-purple" />
          <span className="text-[10px] text-fema-purple uppercase tracking-wider font-semibold">
            Landmark Judgement
          </span>
        </div>

        <h4 className="text-sm font-bold text-text mb-1.5">{caseName}</h4>

        <p className="text-xs text-dim mb-3">
          {court} &middot; {year}
        </p>

        <p className="text-sm text-muted leading-relaxed mb-4">{ruling}</p>

        <div className="bg-fema-purple/8 rounded-md p-3.5 border border-fema-purple/15">
          <p className="text-[10px] text-fema-purple uppercase tracking-wider font-semibold mb-1.5">
            Practical Impact
          </p>
          <p className="text-xs text-muted leading-relaxed">{impact}</p>
        </div>
      </div>
    </div>
  );
}
