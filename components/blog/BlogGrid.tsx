import Link from "next/link";
import { Clock, Calendar } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  tags?: string[];
}

interface BlogGridProps {
  posts: BlogPost[];
}

const categoryColors: Record<string, string> = {
  "Income Tax": "bg-it-blue/15 text-it-blue",
  GST: "bg-gst-green/15 text-gst-green",
  IPO: "bg-ipo-amber/15 text-ipo-amber",
  FEMA: "bg-fema-purple/15 text-fema-purple",
  International: "bg-dd-indigo/15 text-dd-indigo",
  Business: "bg-biz-orange/15 text-biz-orange",
};

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {posts.map((post) => {
        const tagColor = categoryColors[post.category] || "bg-gold/15 text-gold";

        return (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <article className="h-full bg-card rounded-lg border border-border-2 hover:border-gold/20 transition-all duration-300 p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full ${tagColor}`}>
                  {post.category}
                </span>
              </div>

              <h3 className="text-[15px] font-semibold text-text group-hover:text-gold transition-colors duration-200 mb-2 leading-snug">
                {post.title}
              </h3>

              <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs text-dim mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] text-dim bg-bg-3 rounded border border-border-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </Link>
        );
      })}
    </div>
  );
}
