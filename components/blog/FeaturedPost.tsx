import Link from "next/link";
import { Clock, Calendar } from "lucide-react";

interface FeaturedPostProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

const categoryColors: Record<string, string> = {
  "Income Tax": "bg-it-blue/15 text-it-blue",
  GST: "bg-gst-green/15 text-gst-green",
  IPO: "bg-ipo-amber/15 text-ipo-amber",
  FEMA: "bg-fema-purple/15 text-fema-purple",
  International: "bg-dd-indigo/15 text-dd-indigo",
  Business: "bg-biz-orange/15 text-biz-orange",
};

export default function FeaturedPost({
  title,
  excerpt,
  category,
  date,
  readTime,
  slug,
  featured = true,
}: FeaturedPostProps) {
  const tagColor = categoryColors[category] || "bg-gold/15 text-gold";

  return (
    <Link href={`/blog/${slug}`} className="block group">
      <article className="relative bg-card rounded-xl overflow-hidden border border-border-2 hover:border-gold/20 transition-all duration-300">
        {/* Gold top accent line */}
        <div className="h-[3px] bg-gradient-to-r from-gold via-gold-2 to-gold/40" />

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full ${tagColor}`}>
              {category}
            </span>
            {featured && (
              <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-gold/15 text-gold">
                Featured
              </span>
            )}
          </div>

          <h2
            className="font-semibold text-text group-hover:text-gold transition-colors duration-200 mb-3 leading-snug"
            style={{ fontSize: "22px" }}
          >
            {title}
          </h2>

          <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">
            {excerpt}
          </p>

          <div className="flex items-center gap-4 text-xs text-dim">
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
      </article>
    </Link>
  );
}
