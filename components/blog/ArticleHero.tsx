import { Clock, Calendar, User, Share2, Link2, MessageCircle } from "lucide-react";

interface ArticleHeroProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  author?: string;
  hasBudgetUpdate?: boolean;
}

const categoryColors: Record<string, string> = {
  "Income Tax": "bg-it-blue/15 text-it-blue",
  GST: "bg-gst-green/15 text-gst-green",
  IPO: "bg-ipo-amber/15 text-ipo-amber",
  FEMA: "bg-fema-purple/15 text-fema-purple",
  International: "bg-dd-indigo/15 text-dd-indigo",
  Business: "bg-biz-orange/15 text-biz-orange",
};

export default function ArticleHero({
  title,
  category,
  date,
  readTime,
  excerpt,
  author = "CA Vrajkishor",
  hasBudgetUpdate = false,
}: ArticleHeroProps) {
  const tagColor = categoryColors[category] || "bg-gold/15 text-gold";

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-8 items-start">
      {/* Left: Article header info */}
      <div>
        <div className="flex items-center gap-2.5 mb-4 flex-wrap">
          <span className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full ${tagColor}`}>
            {category}
          </span>
          {hasBudgetUpdate && (
            <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-ipo-amber/15 text-ipo-amber">
              Budget 2025 Updated
            </span>
          )}
        </div>

        <p className="text-xs text-muted mb-3">
          <time dateTime={date}>{date}</time>
        </p>

        <h1
          className="font-bold text-text leading-tight mb-4"
          style={{ fontSize: "23px" }}
        >
          {title}
        </h1>

        <p className="text-muted text-sm leading-relaxed mb-6 max-w-2xl">
          {excerpt}
        </p>

        <div className="flex items-center gap-5 text-xs text-dim">
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-gold" />
            <span className="text-text font-medium">{author}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {readTime}
          </span>
        </div>
      </div>

      {/* Right: Share buttons */}
      <div className="flex flex-col items-center gap-2 pt-2">
        <span className="text-[10px] uppercase tracking-wider text-dim mb-1 flex items-center gap-1">
          <Share2 className="w-3 h-3" />
          Share
        </span>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-lg bg-bg-3 border border-border-2 text-muted hover:text-[#1DA1F2] hover:border-[#1DA1F2]/30 transition-colors"
          aria-label="Share on Twitter"
        >
          <Share2 className="w-4 h-4" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-lg bg-bg-3 border border-border-2 text-muted hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Link2 className="w-4 h-4" />
        </a>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-lg bg-bg-3 border border-border-2 text-muted hover:text-wa-green hover:border-wa-green/30 transition-colors"
          aria-label="Share on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
        <button
          className="w-9 h-9 flex items-center justify-center rounded-lg bg-bg-3 border border-border-2 text-muted hover:text-gold hover:border-gold/30 transition-colors"
          aria-label="Copy link"
        >
          <Link2 className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
