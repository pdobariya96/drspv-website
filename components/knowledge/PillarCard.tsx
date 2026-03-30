import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Chapter {
  name: string;
  link: string;
}

interface PillarCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  chapterCount: number;
  chapters: Chapter[];
  color: string;
  href: string;
}

export default function PillarCard({
  title,
  description,
  icon: Icon,
  chapterCount,
  chapters,
  color,
  href,
}: PillarCardProps) {
  return (
    <div className="group bg-card rounded-xl border border-border-2 overflow-hidden hover:border-border transition-all duration-300">
      {/* Colored top gradient bar */}
      <div
        className="h-[3px]"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}88, ${color}33)` }}
      />

      <div className="p-6">
        {/* Icon + title */}
        <div className="flex items-start gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${color}15` }}
          >
            <Icon className="w-5 h-5" style={{ color }} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-text leading-snug">{title}</h3>
            <span className="text-[10px] text-dim flex items-center gap-1 mt-0.5">
              <BookOpen className="w-3 h-3" />
              {chapterCount} chapters
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed mb-4">
          {description}
        </p>

        {/* Chapter links */}
        <div className="space-y-1.5 mb-5">
          {chapters.map((ch, i) => (
            <Link
              key={i}
              href={ch.link}
              className="flex items-center gap-2 text-xs text-muted hover:text-text transition-colors py-0.5"
            >
              <span
                className="w-1 h-1 rounded-full shrink-0"
                style={{ backgroundColor: color }}
              />
              {ch.name}
            </Link>
          ))}
        </div>

        {/* Explore button */}
        <Link
          href={href}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border transition-all duration-300"
          style={{
            color,
            borderColor: `${color}33`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = color;
            e.currentTarget.style.color = "#07101E";
            e.currentTarget.style.borderColor = color;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = color;
            e.currentTarget.style.borderColor = `${color}33`;
          }}
        >
          Explore
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
