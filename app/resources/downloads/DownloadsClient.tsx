"use client";

import {
  FileText,
  Download,
} from "lucide-react";

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  format: string;
  pages: number;
  size: string;
  category: string;
  color: string;
}

function DownloadCard({ item }: { item: DownloadItem }) {
  const downloadUrl = `/downloads/${item.id}.pdf`;

  return (
    <div className="rounded-2xl bg-card border border-white/[0.06] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:border-white/[0.1]">
      <div className="h-1" style={{ backgroundColor: item.color }} />
      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${item.color}15` }}
          >
            <FileText className="h-5 w-5" style={{ color: item.color }} />
          </div>
          <div>
            <span
              className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded"
              style={{
                backgroundColor: `${item.color}15`,
                color: item.color,
              }}
            >
              {item.category}
            </span>
          </div>
        </div>

        <h3 className="text-sm font-bold text-text mb-2 leading-snug">
          {item.title}
        </h3>
        <p className="text-xs text-muted leading-relaxed mb-3">
          {item.description}
        </p>

        <div className="flex items-center gap-3 text-[10px] text-dim mb-4">
          <span>{item.format}</span>
          <span className="w-1 h-1 rounded-full bg-dim" />
          <span>{item.pages} pages</span>
          <span className="w-1 h-1 rounded-full bg-dim" />
          <span>{item.size}</span>
        </div>

        <a
          href={downloadUrl}
          download
          className="w-full flex items-center justify-center gap-1.5 rounded-lg border border-gold/40 px-3 py-2.5 text-xs font-semibold text-gold transition-all hover:bg-gold/10 hover:border-gold/60"
        >
          <Download className="h-3 w-3" />
          Download Free
        </a>
      </div>
    </div>
  );
}

export default function DownloadsClient({
  downloads,
}: {
  downloads: DownloadItem[];
}) {
  return (
    <section className="bg-bg-2 py-12 px-4 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((item) => (
            <DownloadCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
