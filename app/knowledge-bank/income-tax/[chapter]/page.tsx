import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FileText, ArrowLeft, ArrowRight, ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react";
import { getKnowledgeArticles, getKnowledgeArticle } from "@/lib/knowledge";

interface PageProps {
  params: Promise<{ chapter: string }>;
}

export async function generateStaticParams() {
  const articles = getKnowledgeArticles("income-tax");
  return articles.map((a) => ({ chapter: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { chapter } = await params;
  const article = getKnowledgeArticle("income-tax", chapter);
  if (!article) return { title: "Not Found" };
  return {
    title: article.frontmatter.title,
    description: article.frontmatter.excerpt || article.frontmatter.description,
    keywords: article.frontmatter.keywords,
  };
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="border-l-[3px] border-gold pl-3 text-xl font-medium tracking-tight text-text mt-8 mb-4" {...props} />
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
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-4">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="bg-bg-3 text-text text-xs font-medium uppercase tracking-wider p-3 text-left border-b border-stone-200" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="p-3 text-sm text-muted border-b border-stone-200" {...props} />
  ),
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917777970565";

export default async function IncomeTaxChapterPage({ params }: PageProps) {
  const { chapter } = await params;
  const article = getKnowledgeArticle("income-tax", chapter);
  if (!article) notFound();

  const articles = getKnowledgeArticles("income-tax");
  const currentIndex = articles.findIndex((a) => a.slug === chapter);
  const prev = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const next = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    `Hello DRSPV, I have a question about: ${article.frontmatter.title}`
  )}`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:grid lg:grid-cols-[260px_1fr] lg:gap-10">
      {/* Sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-4 w-4 text-it-blue" />
            <span className="text-xs font-medium text-it-blue uppercase tracking-wider">
              Income Tax
            </span>
          </div>
          <nav className="space-y-1">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/knowledge-bank/income-tax/${a.slug}`}
                className={`block rounded-lg px-3 py-2 text-xs transition-colors ${
                  a.slug === chapter
                    ? "bg-gold/10 text-gold border border-gold/20"
                    : "text-muted hover:text-text hover:bg-stone-100/70"
                }`}
              >
                <span className="font-medium">
                  Ch {a.frontmatter.chapter}.
                </span>{" "}
                {a.frontmatter.title}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Article Content */}
      <article className="min-w-0">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted mb-6">
          <Link href="/knowledge-bank" className="hover:text-gold transition-colors">
            Knowledge Bank
          </Link>
          <span>/</span>
          <Link href="/knowledge-bank/income-tax" className="hover:text-gold transition-colors">
            Income Tax
          </Link>
          <span>/</span>
          <span className="text-text">Chapter {article.frontmatter.chapter}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-2">
          {article.frontmatter.title}
        </h1>
        <div className="flex items-center gap-4 text-xs text-dim mb-8">
          {article.frontmatter.readTime && (
            <span>{article.frontmatter.readTime} read</span>
          )}
          {article.frontmatter.author && (
            <>
              <span className="h-1 w-1 rounded-full bg-dim" />
              <span>By {article.frontmatter.author}</span>
            </>
          )}
          {article.frontmatter.date && (
            <>
              <span className="h-1 w-1 rounded-full bg-dim" />
              <span>Updated {article.frontmatter.date}</span>
            </>
          )}
        </div>

        {/* MDX Content */}
        <div className="prose max-w-none">
          <MDXRemote source={article.content} components={mdxComponents} />
        </div>

        {/* Prev / Next */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 border-t border-stone-200 pt-8">
          {prev ? (
            <Link
              href={`/knowledge-bank/income-tax/${prev.slug}`}
              className="group rounded-lg bg-card border border-stone-200 p-4 transition-all hover:border-gold/30"
            >
              <span className="text-[10px] uppercase tracking-[2px] text-dim flex items-center gap-1">
                <ArrowLeft className="h-3 w-3" /> Previous
              </span>
              <span className="text-sm font-medium text-text mt-1 block group-hover:text-gold transition-colors">
                {prev.frontmatter.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next && (
            <Link
              href={`/knowledge-bank/income-tax/${next.slug}`}
              className="group rounded-lg bg-card border border-stone-200 p-4 text-right transition-all hover:border-gold/30"
            >
              <span className="text-[10px] uppercase tracking-[2px] text-dim flex items-center justify-end gap-1">
                Next <ArrowRight className="h-3 w-3" />
              </span>
              <span className="text-sm font-medium text-text mt-1 block group-hover:text-gold transition-colors">
                {next.frontmatter.title}
              </span>
            </Link>
          )}
        </div>

        {/* Article Feedback */}
        <div className="mt-10 rounded-xl bg-card border border-stone-200 p-6 text-center">
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
    </div>
  );
}
