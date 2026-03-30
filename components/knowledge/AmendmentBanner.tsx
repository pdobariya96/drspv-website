import { FileWarning, Calendar } from "lucide-react";

interface AmendmentBannerProps {
  title: string;
  content: string;
  effectiveDate: string;
}

export default function AmendmentBanner({
  title,
  content,
  effectiveDate,
}: AmendmentBannerProps) {
  return (
    <div className="bg-biz-orange/[0.06] border border-biz-orange/20 rounded-lg overflow-hidden my-6">
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <FileWarning className="w-4 h-4 text-biz-orange" />
          <span className="text-[10px] text-biz-orange uppercase tracking-wider font-semibold">
            Amendment
          </span>
        </div>

        <h4 className="text-sm font-semibold text-text mb-2">{title}</h4>

        <p className="text-sm text-muted leading-relaxed mb-3">{content}</p>

        <div className="flex items-center gap-1.5 text-xs text-biz-orange">
          <Calendar className="w-3.5 h-3.5" />
          <span>Effective from {effectiveDate}</span>
        </div>
      </div>
    </div>
  );
}
