import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Link2,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import NewsletterForm from "@/components/shared/NewsletterForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    keywords: post.frontmatter.keywords,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author || "DRSPV & Associates"],
      images: post.frontmatter.ogImage
        ? [{ url: post.frontmatter.ogImage }]
        : undefined,
    },
  };
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="border-l-[3px] border-gold pl-3 text-xl font-medium tracking-tight text-text mt-8 mb-4"
      id={
        typeof props.children === "string"
          ? props.children.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")
          : undefined
      }
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-[17px] font-medium text-text mt-6 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-muted leading-[1.88] mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="text-muted pl-5 mb-4 space-y-1 list-disc" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="text-muted pl-5 mb-4 space-y-1 list-decimal" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-muted" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-text font-medium" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-gold hover:underline" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-[3px] border-gold/40 pl-4 italic text-muted my-6" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-4">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="bg-bg-3 text-text text-xs font-medium uppercase tracking-wider p-3 text-left border-b border-white/[0.06]" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="p-3 text-sm text-muted border-b border-white/[0.06]" {...props} />
  ),
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917777970565";

const categoryColors: Record<string, string> = {
  "Income Tax": "text-it-blue bg-it-blue/10 border-it-blue/20",
  GST: "text-gst-green bg-gst-green/10 border-gst-green/20",
  IPO: "text-ipo-amber bg-ipo-amber/10 border-ipo-amber/20",
  FEMA: "text-fema-purple bg-fema-purple/10 border-fema-purple/20",
  Business: "text-biz-orange bg-biz-orange/10 border-biz-orange/20",
  General: "text-muted bg-white/5 border-white/10",
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllBlogPosts();
  const recentPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 5);

  const shareUrl = `https://drspv.in/blog/${slug}`;
  const shareText = encodeURIComponent(post.frontmatter.title);
  const catStyle =
    categoryColors[post.frontmatter.category || "General"] ||
    categoryColors.General;

  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    `Hello DRSPV, I have a question about: ${post.frontmatter.title}`
  )}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    datePublished: post.frontmatter.date,
    author: {
      "@type": "Organization",
      name: "DRSPV & Associates",
      url: "https://drspv.in",
    },
    publisher: {
      "@type": "Organization",
      name: "DRSPV & Associates",
      logo: { "@type": "ImageObject", url: "https://drspv.in/images/ca-logo.png" },
    },
    mainEntityOfPage: `https://drspv.in/blog/${slug}`,
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article Toolbar */}
      <div className="border-b border-white/[0.06] bg-bg-2/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted">
            <Link href="/blog" className="hover:text-gold transition-colors flex items-center gap-1">
              <ArrowLeft className="h-3 w-3" />
              Blog
            </Link>
            <span>/</span>
            <span className="text-text line-clamp-1 max-w-[200px] sm:max-w-none">
              {post.frontmatter.title}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-dim hover:text-text hover:bg-white/[0.04] transition-colors"
              aria-label="Share on Twitter"
            >
              <Share2 className="h-4 w-4" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-dim hover:text-text hover:bg-white/[0.04] transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Link2 className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 lg:grid lg:grid-cols-[200px_1fr_260px] lg:gap-8">
        {/* TOC (left sidebar) */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <h4 className="text-[10px] uppercase tracking-[2px] text-dim font-medium mb-3">
              On this page
            </h4>
            <p className="text-xs text-muted italic">
              Table of contents is generated from article headings.
            </p>
          </div>
        </aside>

        {/* Article Body */}
        <article className="min-w-0">
          <span
            className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider mb-4 ${catStyle}`}
          >
            {post.frontmatter.category || "General"}
          </span>

          <h1 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-3">
            {post.frontmatter.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-dim mb-8">
            {post.frontmatter.author && <span>By {post.frontmatter.author}</span>}
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

          <div className="prose max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          {/* Tags */}
          {post.frontmatter.keywords && post.frontmatter.keywords.length > 0 && (
            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <div className="flex flex-wrap gap-2">
                {post.frontmatter.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-full bg-bg-3 border border-white/[0.06] px-3 py-1 text-xs text-muted"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Article Feedback */}
          <div className="mt-10 rounded-xl bg-card border border-white/[0.06] p-6 text-center">
            <p className="text-sm text-text font-medium mb-3">
              Was this article helpful?
            </p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <button className="inline-flex items-center gap-2 rounded-lg bg-gst-green/10 border border-gst-green/20 px-4 py-2 text-sm text-gst-green hover:bg-gst-green/20 transition-colors">
                <ThumbsUp className="h-4 w-4" /> Yes
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-red/10 border border-red/20 px-4 py-2 text-sm text-red hover:bg-red/20 transition-colors">
                <ThumbsDown className="h-4 w-4" /> No
              </button>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-muted hover:text-gold transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Have a question? Ask our CAs on WhatsApp
            </a>
          </div>
        </article>

        {/* Right Sidebar */}
        <aside className="hidden lg:block space-y-6">
          <div className="sticky top-24 space-y-6">
            <NewsletterForm />

            {/* Recent Posts */}
            {recentPosts.length > 0 && (
              <div className="rounded-xl bg-card border border-white/[0.06] p-5">
                <h3 className="text-sm font-semibold text-text mb-4 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-gold" />
                  Recent Articles
                </h3>
                <div className="space-y-3">
                  {recentPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group block"
                    >
                      <span className="text-xs text-muted group-hover:text-gold transition-colors line-clamp-2">
                        {p.frontmatter.title}
                      </span>
                      <span className="text-[10px] text-dim">
                        {p.frontmatter.date}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </>
  );
}
