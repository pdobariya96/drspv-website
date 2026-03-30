import { Lightbulb } from "lucide-react";

interface ExpertTipProps {
  content: string;
}

export default function ExpertTip({ content }: ExpertTipProps) {
  return (
    <div className="bg-gold/[0.06] border border-gold/20 rounded-lg overflow-hidden my-6">
      <div className="p-5">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4 text-gold" />
          </div>
          <div>
            <p className="text-[10px] text-gold uppercase tracking-wider font-semibold mb-1.5">
              Expert Tip
            </p>
            <p className="text-sm text-muted leading-relaxed">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
