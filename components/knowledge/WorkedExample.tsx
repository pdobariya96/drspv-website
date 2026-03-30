import { Calculator } from "lucide-react";
import { ReactNode } from "react";

interface WorkedExampleProps {
  title: string;
  content: ReactNode;
}

export default function WorkedExample({ title, content }: WorkedExampleProps) {
  return (
    <div className="bg-card-2 border border-border-2 rounded-lg overflow-hidden my-6">
      <div className="px-5 py-3 border-b border-border-2 flex items-center gap-2">
        <Calculator className="w-4 h-4 text-gold" />
        <span className="text-[10px] text-gold uppercase tracking-wider font-semibold">
          Worked Example
        </span>
      </div>
      <div className="p-5">
        <h4 className="text-sm font-semibold text-text mb-3">{title}</h4>
        <div className="text-sm text-muted leading-relaxed font-mono space-y-1">
          {typeof content === "string" ? (
            <pre className="whitespace-pre-wrap text-xs text-muted">{content}</pre>
          ) : (
            content
          )}
        </div>
      </div>
    </div>
  );
}
