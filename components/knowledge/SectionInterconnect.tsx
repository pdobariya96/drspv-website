import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SectionLink {
  title: string;
  href: string;
  pillar: string;
}

interface SectionInterconnectProps {
  links: SectionLink[];
}

const pillarColors: Record<string, string> = {
  "income-tax": "#3B82F6",
  gst: "#10B981",
  fema: "#A855F7",
  business: "#F97316",
  ipo: "#F59E0B",
  international: "#6366F1",
};

export default function SectionInterconnect({ links }: SectionInterconnectProps) {
  return (
    <div className="my-8">
      <h4 className="text-xs font-semibold text-text uppercase tracking-wider mb-3">
        Related Sections
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((link, i) => {
          const color = pillarColors[link.pillar] || "#C9A84C";

          return (
            <Link
              key={i}
              href={link.href}
              className="group flex items-center justify-between gap-3 bg-card rounded-lg border border-border-2 hover:border-border p-4 transition-all duration-200"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: color }}
                />
                <span className="text-sm text-muted group-hover:text-text transition-colors truncate">
                  {link.title}
                </span>
              </div>
              <ArrowUpRight
                className="w-4 h-4 shrink-0 text-dim group-hover:text-text transition-colors"
                style={{ color: undefined }}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
