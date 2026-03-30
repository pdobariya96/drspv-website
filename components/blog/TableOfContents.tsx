"use client";

import { useState, useEffect } from "react";
import { List, MessageCircle } from "lucide-react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-20 space-y-5">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <List className="w-4 h-4 text-gold" />
          <h4 className="text-xs font-semibold text-text uppercase tracking-wider">
            In This Article
          </h4>
        </div>

        <ul className="space-y-1">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            const indent = heading.level === 3 ? "pl-4" : heading.level === 4 ? "pl-7" : "";

            return (
              <li key={heading.id}>
                <button
                  onClick={() => scrollTo(heading.id)}
                  className={`relative w-full text-left py-1.5 pr-2 text-xs leading-snug transition-colors ${indent} ${
                    isActive
                      ? "text-gold font-medium"
                      : "text-muted hover:text-text"
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-4 bg-it-blue rounded-full" />
                  )}
                  <span className={isActive ? "pl-2" : ""}>{heading.text}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Ask our CA WhatsApp button */}
      <a
        href="https://wa.me/919999999999?text=Hi%2C%20I%20have%20a%20question%20about%20an%20article"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-wa-green rounded-lg hover:brightness-110 transition-all"
      >
        <MessageCircle className="w-4 h-4" />
        Ask our CA
      </a>
    </nav>
  );
}
