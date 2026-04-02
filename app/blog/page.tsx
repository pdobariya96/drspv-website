import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Tag, Bell, TrendingUp } from "lucide-react";
import { getAllBlogPosts, getFeaturedPosts, getBlogCategories } from "@/lib/blog";
import NewsletterForm from "@/components/shared/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog — Tax & Finance Insights",
  description:
    "Expert articles on income tax, GST, FEMA, IPO compliance, and business advisory — written by qualified CAs at DRSPV & Associates.",
  keywords: [
    "tax blog India",
    "GST articles",
    "income tax insights",
    "CA blog",
    "finance blog",
    "FEMA updates",
  ],
};

const categoryColors: Record<string, string> = {
  "Income Tax": "text-it-blue bg-it-blue/10 border-it-blue/20",
  GST: "text-gst-green bg-gst-green/10 border-gst-green/20",
  IPO: "text-ipo-amber bg-ipo-amber/10 border-ipo-amber/20",
  FEMA: "text-fema-purple bg-fema-purple/10 border-fema-purple/20",
  Business: "text-biz-orange bg-biz-orange/10 border-biz-orange/20",
  General: "text-muted bg-white/5 border-stone-200",
};

function getCategoryStyle(cat: string) {
  return categoryColors[cat] || categoryColors.General;
}

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const featured = getFeaturedPosts().slice(0, 3);
  const categories = getBlogCategories();

  const mostRead = allPosts.slice(0, 5);
  const deadlines = [
    { date: "31 Jul 2025", label: "ITR Due Date (Non-Audit)" },
    { date: "31 Oct 2025", label: "ITR Due Date (Audit Cases)" },
    { date: "20th Monthly", label: "GSTR-3B Filing" },
    { date: "11th Monthly", label: "GSTR-1 Filing" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        
        <div className="relative mx-auto max-w-7xl px-4">
          <span className="inline-block rounded-full bg-gold/10 border border-gold/20 px-4 py-1.5 text-[11px] uppercase tracking-[2px] text-gold font-medium mb-4">
            Blog
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text mb-3">
            Tax & Finance{" "}
            <span className="gold-gradient-text">Insights</span>
          </h1>
          <p className="text-muted text-base max-w-xl leading-relaxed">
            Practical articles on income tax, GST, FEMA, and business advisory —
            written by our qualified CAs for professionals and business owners.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-20 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10">
        {/* Main Content */}
        <div>
          {/* Featured Section */}
          {featured.length > 0 && (
            <section className="mb-12">
              <h2 className="text-lg font-semibold text-text mb-6 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-gold" />
                Featured
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Large featured */}
                {featured[0] && (
                  <Link
                    href={`/blog/${featured[0].slug}`}
                    className="group rounded-xl bg-card border border-stone-200 p-6 transition-all hover:border-gold/30 hover:-translate-y-0.5 sm:col-span-2"
                  >
                    <span
                      className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider mb-3 ${getCategoryStyle(
                        featured[0].frontmatter.category || "General"
                      )}`}
                    >
                      {featured[0].frontmatter.category || "General"}
                    </span>
                    <h3 className="text-xl font-bold text-text mb-2 group-hover:text-gold transition-colors">
                      {featured[0].frontmatter.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-3 line-clamp-2">
                      {featured[0].frontmatter.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-dim">
                      {featured[0].frontmatter.date && (
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {featured[0].frontmatter.date}
                        </span>
                      )}
                      {featured[0].frontmatter.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {featured[0].frontmatter.readTime}
                        </span>
                      )}
                    </div>
                  </Link>
                )}
                {/* Two smaller featured */}
                {featured.slice(1, 3).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-xl bg-card border border-stone-200 p-5 transition-all hover:border-gold/30 hover:-translate-y-0.5"
                  >
                    <span
                      className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider mb-2 ${getCategoryStyle(
                        post.frontmatter.category || "General"
                      )}`}
                    >
                      {post.frontmatter.category || "General"}
                    </span>
                    <h3 className="text-sm font-semibold text-text mb-1 group-hover:text-gold transition-colors line-clamp-2">
                      {post.frontmatter.title}
                    </h3>
                    <p className="text-xs text-muted line-clamp-2 mb-2">
                      {post.frontmatter.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-[10px] text-dim">
                      {post.frontmatter.date && <span>{post.frontmatter.date}</span>}
                      {post.frontmatter.readTime && <span>{post.frontmatter.readTime}</span>}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* All Posts Grid */}
          <section>
            <h2 className="text-lg font-semibold text-text mb-6">
              All Articles
            </h2>
            {allPosts.length === 0 ? (
              <div className="rounded-xl bg-card border border-stone-200 p-10 text-center">
                <p className="text-muted text-sm">
                  No blog posts yet. Check back soon for expert articles on tax
                  and finance.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {allPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-xl bg-card border border-stone-200 p-5 transition-all hover:border-gold/30 hover:-translate-y-0.5"
                  >
                    <span
                      className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider mb-2 ${getCategoryStyle(
                        post.frontmatter.category || "General"
                      )}`}
                    >
                      {post.frontmatter.category || "General"}
                    </span>
                    <h3 className="text-base font-semibold text-text mb-1 group-hover:text-gold transition-colors line-clamp-2">
                      {post.frontmatter.title}
                    </h3>
                    <p className="text-sm text-muted line-clamp-2 mb-3">
                      {post.frontmatter.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-dim">
                      {post.frontmatter.date && (
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.frontmatter.date}
                        </span>
                      )}
                      {post.frontmatter.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.frontmatter.readTime}
                        </span>
                      )}
                    </div>
                    {post.frontmatter.keywords && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {post.frontmatter.keywords.slice(0, 3).map((kw) => (
                          <span
                            key={kw}
                            className="rounded-full bg-bg-3 px-2 py-0.5 text-[10px] text-dim"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block space-y-6 mt-12 lg:mt-0">
          {/* Newsletter */}
          <NewsletterForm />

          {/* Most Read */}
          <div className="rounded-xl bg-card border border-stone-200 p-5">
            <h3 className="text-sm font-semibold text-text mb-4 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-gold" />
              Most Read
            </h3>
            <div className="space-y-3">
              {mostRead.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex gap-3 items-start"
                >
                  <span className="shrink-0 text-xs font-bold text-dim mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-muted group-hover:text-gold transition-colors line-clamp-2">
                    {post.frontmatter.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Deadlines */}
          <div className="rounded-xl bg-card border border-stone-200 p-5">
            <h3 className="text-sm font-semibold text-text mb-4 flex items-center gap-2">
              <Bell className="h-4 w-4 text-red" />
              Upcoming Deadlines
            </h3>
            <div className="space-y-3">
              {deadlines.map((d) => (
                <div key={d.label} className="flex items-center justify-between">
                  <span className="text-xs text-muted">{d.label}</span>
                  <span className="text-[10px] font-medium text-gold bg-gold/10 rounded-full px-2 py-0.5">
                    {d.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          {categories.length > 0 && (
            <div className="rounded-xl bg-card border border-stone-200 p-5">
              <h3 className="text-sm font-semibold text-text mb-4 flex items-center gap-2">
                <Tag className="h-4 w-4 text-gold" />
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <span
                    key={cat.name}
                    className="rounded-full bg-bg-3 border border-stone-200 px-3 py-1 text-xs text-muted"
                  >
                    {cat.name}{" "}
                    <span className="text-dim">({cat.count})</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}
