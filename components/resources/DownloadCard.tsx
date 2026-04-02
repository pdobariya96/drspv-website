import { FileText, Download, ArrowRight } from "lucide-react";
import Link from "next/link";

interface DownloadCardProps {
  title: string;
  description: string;
  pages: number;
  updated: string;
  category: string;
  gated: boolean;
  downloadHref?: string;
  gateHref?: string;
}

export default function DownloadCard({
  title,
  description,
  pages,
  updated,
  category,
  gated,
  downloadHref = "#",
  gateHref = "#",
}: DownloadCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-stone-200 bg-card p-6 transition-all duration-300 hover:border-gold/20">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red/10">
          <FileText className="h-5 w-5 text-red" />
        </div>
        <span className="rounded-full bg-gold/10 px-2 py-0.5 text-[10px] font-semibold text-gold">
          PDF
        </span>
      </div>

      <h3 className="text-sm font-bold text-text">{title}</h3>
      <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">
        {description}
      </p>

      <div className="mt-4 flex items-center gap-3 text-[10px] text-muted">
        <span>{pages} pages</span>
        <span className="h-1 w-1 rounded-full bg-dim" />
        <span>Updated {updated}</span>
        <span className="h-1 w-1 rounded-full bg-dim" />
        <span className="rounded-full bg-stone-100/70 px-2 py-0.5 text-[10px] font-medium">
          {category}
        </span>
      </div>

      {gated ? (
        <Link
          href={gateHref}
          className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-gold px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
        >
          Get free
          <ArrowRight className="h-3 w-3" />
        </Link>
      ) : (
        <a
          href={downloadHref}
          className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-gold transition-colors hover:text-gold-2"
        >
          <Download className="h-3.5 w-3.5" />
          Download PDF
        </a>
      )}
    </div>
  );
}
