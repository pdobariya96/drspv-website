import Link from "next/link";

interface Problem {
  label: string;
  href: string;
  active: boolean;
}

interface ProblemSwitcherProps {
  problems: Problem[];
}

export default function ProblemSwitcher({ problems }: ProblemSwitcherProps) {
  return (
    <div className="w-full border-b border-stone-200 bg-bg-2">
      <div className="mx-auto max-w-6xl px-4">
        <nav className="hide-scrollbar flex h-[38px] items-center gap-0 overflow-x-auto">
          {problems.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className={`relative flex h-full shrink-0 items-center px-4 text-xs font-medium transition-colors whitespace-nowrap ${
                p.active
                  ? "text-gold"
                  : "text-muted hover:text-text"
              }`}
            >
              {p.label}
              {p.active && (
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gold rounded-t-full" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
