import { ReactNode } from "react";

interface ArticleLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

export default function ArticleLayout({ children, sidebar }: ArticleLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8 items-start">
        {/* Sidebar */}
        <div className="hidden lg:block shrink-0">{sidebar}</div>

        {/* Main content */}
        <main className="min-w-0 flex-1">
          <article className="prose prose-invert prose-sm max-w-none prose-headings:text-text prose-p:text-muted prose-a:text-gold prose-strong:text-text prose-code:text-gold-2 prose-code:bg-bg-3 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-li:text-muted">
            {children}
          </article>
        </main>
      </div>
    </div>
  );
}
