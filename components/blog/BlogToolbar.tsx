"use client";

import { useState } from "react";
import { Search, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

interface BlogToolbarProps {
  categories: { label: string; count: number }[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  onSearch: (query: string) => void;
  onSortChange: (sort: string) => void;
  sort: string;
}

const defaultCategories = [
  { label: "All", count: 24 },
  { label: "Income Tax", count: 8 },
  { label: "GST", count: 5 },
  { label: "IPO", count: 3 },
  { label: "FEMA", count: 2 },
  { label: "International", count: 3 },
  { label: "Business", count: 3 },
];

export default function BlogToolbar({
  categories = defaultCategories,
  activeCategory = "All",
  onCategoryChange,
  onSearch,
  onSortChange,
  sort = "latest",
}: Partial<BlogToolbarProps>) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOpen, setSortOpen] = useState(false);
  const [active, setActive] = useState(activeCategory);

  const handleCategoryClick = (label: string) => {
    setActive(label);
    onCategoryChange?.(label);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch?.(value);
  };

  const handleSort = (value: string) => {
    setSortOpen(false);
    onSortChange?.(value);
  };

  return (
    <div
      className="w-full bg-bg-2 border-b border-border-2 sticky top-0 z-30"
      style={{ height: "42px" }}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between gap-4">
        {/* Left: Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs shrink-0">
          <Link href="/" className="text-muted hover:text-gold transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-dim" />
          <span className="text-text font-medium">Blog</span>
        </nav>

        {/* Center: Category tabs */}
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => handleCategoryClick(cat.label)}
              className={`relative px-3 py-2 text-xs whitespace-nowrap transition-colors ${
                active === cat.label
                  ? "text-gold"
                  : "text-muted hover:text-text"
              }`}
            >
              {cat.label}
              <span className="ml-1 text-dim">({cat.count})</span>
              {active === cat.label && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gold rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Right: Search + Sort */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-dim" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-40 h-7 pl-7 pr-2 text-xs bg-bg-3 text-text rounded border border-border-2 focus:border-gold/30 focus:outline-none placeholder:text-dim transition-colors"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-1 h-7 px-2.5 text-xs text-muted bg-bg-3 rounded border border-border-2 hover:text-text transition-colors"
            >
              {sort === "latest" ? "Latest" : sort === "popular" ? "Popular" : "Oldest"}
              <ChevronDown className="w-3 h-3" />
            </button>
            {sortOpen && (
              <div className="absolute top-full right-0 mt-1 w-28 bg-card border border-border-2 rounded-md shadow-xl z-40 py-1">
                {["latest", "popular", "oldest"].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSort(option)}
                    className="w-full px-3 py-1.5 text-xs text-left text-muted hover:text-gold hover:bg-bg-3 transition-colors capitalize"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
