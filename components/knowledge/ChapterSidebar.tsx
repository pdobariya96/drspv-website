import Link from "next/link";
import { Check, MessageCircle, ArrowUpRight } from "lucide-react";

interface ChapterItem {
  title: string;
  slug: string;
  status: "done" | "active" | "pending";
}

interface CrossLink {
  title: string;
  href: string;
  pillar: string;
}

interface ChapterSidebarProps {
  chapters: ChapterItem[];
  currentSlug: string;
  pillar: string;
  crossLinks?: CrossLink[];
}

const pillarColors: Record<string, string> = {
  "income-tax": "#3B82F6",
  gst: "#10B981",
  fema: "#A855F7",
  business: "#F97316",
  ipo: "#F59E0B",
  international: "#6366F1",
};

export default function ChapterSidebar({
  chapters,
  currentSlug,
  pillar,
  crossLinks = [],
}: ChapterSidebarProps) {
  const accentColor = pillarColors[pillar] || "#C9A84C";

  return (
    <aside className="w-[260px] shrink-0 sticky top-20 space-y-5">
      {/* Chapter list */}
      <div className="bg-card rounded-lg border border-border-2 p-4">
        <h4 className="text-xs font-semibold text-text uppercase tracking-wider mb-3">
          Chapters
        </h4>
        <ul className="space-y-0.5">
          {chapters.map((ch, i) => {
            const isActive = ch.slug === currentSlug;
            const isDone = ch.status === "done";

            return (
              <li key={ch.slug}>
                <Link
                  href={`/knowledge-bank/${pillar}/${ch.slug}`}
                  className={`flex items-start gap-2.5 px-2.5 py-2 rounded-md text-xs transition-all ${
                    isActive
                      ? "bg-bg-3 font-medium"
                      : "hover:bg-bg-3/50"
                  }`}
                  style={isActive ? { color: accentColor } : undefined}
                >
                  <span className="shrink-0 mt-0.5">
                    {isDone ? (
                      <Check className="w-3.5 h-3.5 text-gst-green" />
                    ) : isActive ? (
                      <span
                        className="block w-2 h-2 rounded-full mt-0.5"
                        style={{ backgroundColor: accentColor }}
                      />
                    ) : (
                      <span className="block w-2 h-2 rounded-full mt-0.5 bg-dim/40" />
                    )}
                  </span>
                  <span className={isDone ? "text-muted" : isActive ? "" : "text-muted"}>
                    <span className="text-dim mr-1">{i + 1}.</span>
                    {ch.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Cross-pillar links */}
      {crossLinks.length > 0 && (
        <div className="bg-card rounded-lg border border-border-2 p-4">
          <h4 className="text-xs font-semibold text-text uppercase tracking-wider mb-3">
            Related Topics
          </h4>
          <div className="space-y-2">
            {crossLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="flex items-center justify-between gap-2 text-xs text-muted hover:text-text transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: pillarColors[link.pillar] || "#C9A84C" }}
                  />
                  {link.title}
                </span>
                <ArrowUpRight className="w-3 h-3 shrink-0 text-dim" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* WhatsApp our CA */}
      <a
        href="https://wa.me/919999999999?text=Hi%2C%20I%20have%20a%20question"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-wa-green rounded-lg hover:brightness-110 transition-all"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp our CA
      </a>
    </aside>
  );
}
