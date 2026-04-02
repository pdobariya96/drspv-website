import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const featured = {
  slug: "got-income-tax-notice-what-to-do",
  title: "Got an Income Tax Notice? Step-by-Step Guide on What to Do",
  excerpt:
    "Received an income tax notice? Do not panic. Learn the types of notices, deadlines, and how to respond correctly to avoid penalties.",
  category: "Income Tax",
  categoryColor: "bg-it-blue/15 text-it-blue",
  date: "Mar 19, 2026",
  readTime: "8 min read",
};

const sidePosts = [
  {
    slug: "gstr-9-common-mistakes",
    title: "10 Common Mistakes in GSTR-9 Annual Return Filing (and How to Avoid Them)",
    category: "GST",
    categoryColor: "bg-gst-green/15 text-gst-green",
    date: "Mar 11, 2026",
    readTime: "7 min read",
  },
  {
    slug: "what-is-drhp-ipo-explained",
    title: "What Is DRHP in IPO? The Draft Red Herring Prospectus Explained Simply",
    category: "IPO",
    categoryColor: "bg-ipo-amber/15 text-ipo-amber",
    date: "Mar 15, 2026",
    readTime: "7 min read",
  },
];

export default function BlogPreview() {
  return (
    <section className="w-full bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14 flex items-end justify-between">
          <div>
            <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
              Insights
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-text sm:text-4xl">
              From Our Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-gold-2 sm:inline-flex"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Magazine layout */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
          {/* Featured large card */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group col-span-1 flex flex-col justify-end rounded-xl border border-stone-200 bg-card-2 p-7 lg:col-span-3 lg:min-h-[340px]"
          >
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r from-gold/60 to-gold/0" />
            <span
              className={`mb-4 inline-block w-fit rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${featured.categoryColor}`}
            >
              {featured.category}
            </span>
            <h3 className="text-lg font-bold leading-snug text-text transition-colors group-hover:text-gold sm:text-xl">
              {featured.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
              {featured.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs text-muted">
              <span>{featured.date}</span>
              <span className="h-1 w-1 rounded-full bg-dim" />
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {featured.readTime}
              </span>
            </div>
          </Link>

          {/* Side stacked cards */}
          <div className="col-span-1 flex flex-col gap-5 lg:col-span-2">
            {sidePosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-1 flex-col justify-end rounded-xl border border-stone-200 bg-card p-6"
              >
                <span
                  className={`mb-3 inline-block w-fit rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${post.categoryColor}`}
                >
                  {post.category}
                </span>
                <h3 className="text-sm font-semibold leading-snug text-text transition-colors group-hover:text-gold">
                  {post.title}
                </h3>
                <div className="mt-3 flex items-center gap-3 text-xs text-muted">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-dim" />
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile view all */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gold"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
