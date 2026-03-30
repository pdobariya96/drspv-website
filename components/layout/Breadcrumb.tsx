import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full bg-bg-2 border-b border-white/[0.06]"
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center h-[40px] overflow-x-auto">
        <ol className="flex items-center gap-1.5 text-[13px] whitespace-nowrap">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight className="h-3 w-3 text-dim shrink-0" />
                )}
                {isLast || !item.href ? (
                  <span className="text-text font-medium truncate max-w-[200px]">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-muted hover:text-gold transition-colors truncate max-w-[200px]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
