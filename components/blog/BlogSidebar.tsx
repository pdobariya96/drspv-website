"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, TrendingUp, CalendarClock, User } from "lucide-react";

interface MostReadItem {
  title: string;
  slug: string;
  views: string;
}

interface Deadline {
  title: string;
  date: string;
  color: string;
}

interface BlogSidebarProps {
  mostRead?: MostReadItem[];
  deadlines?: Deadline[];
  tags?: string[];
}

const defaultMostRead: MostReadItem[] = [
  { title: "New Tax Regime vs Old: Which Saves More in 2025?", slug: "new-vs-old-tax-regime-2025", views: "12.4K" },
  { title: "Section 80C Deductions: Complete Guide", slug: "section-80c-guide", views: "9.8K" },
  { title: "GST Input Credit: Common Mistakes to Avoid", slug: "gst-itc-mistakes", views: "7.2K" },
  { title: "ITR Filing Deadlines You Must Not Miss", slug: "itr-deadlines", views: "6.1K" },
];

const defaultDeadlines: Deadline[] = [
  { title: "Advance Tax - Q4 Payment", date: "15 Mar 2025", color: "bg-red" },
  { title: "GST Annual Return (GSTR-9)", date: "31 Mar 2025", color: "bg-gst-green" },
  { title: "ITR Filing - Non-Audit", date: "31 Jul 2025", color: "bg-it-blue" },
];

const defaultTags = [
  "Income Tax", "GST", "TDS", "HRA", "80C", "NRI Taxation",
  "Capital Gains", "ITR Filing", "Tax Planning", "FEMA",
  "Business Setup", "IPO Analysis", "Compliance",
];

export default function BlogSidebar({
  mostRead = defaultMostRead,
  deadlines = defaultDeadlines,
  tags = defaultTags,
}: BlogSidebarProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <aside className="w-[264px] shrink-0 space-y-5">
      {/* Newsletter Signup */}
      <div className="relative bg-card-2 rounded-lg border border-border-2 p-5 overflow-hidden">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <Mail className="w-4 h-4 text-gold" />
            <h3 className="text-sm font-semibold text-text">Tax Insights Weekly</h3>
          </div>
          <p className="text-xs text-muted mb-4 leading-relaxed">
            Get expert tax updates, compliance reminders, and planning tips delivered every Monday.
          </p>
          {subscribed ? (
            <p className="text-xs text-gst-green font-medium">
              Subscribed! Check your inbox.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full h-8 px-3 text-xs bg-bg-3 text-text rounded border border-border-2 focus:border-gold/30 focus:outline-none placeholder:text-dim"
              />
              <button
                type="submit"
                className="w-full h-8 text-xs font-semibold bg-gold text-bg rounded hover:bg-gold-2 transition-colors"
              >
                Subscribe Free
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Author Bio */}
      <div className="bg-card rounded-lg border border-border-2 p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-bg-3 flex items-center justify-center border border-border-2">
            <User className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text">CA Vrajkishor</h3>
            <p className="text-[10px] text-muted">DRSPV & Associates</p>
          </div>
        </div>
        <p className="text-xs text-muted leading-relaxed">
          Chartered Accountant with expertise in income tax, GST compliance, FEMA advisory, and business structuring. Simplifying complex tax laws for businesses and individuals.
        </p>
      </div>

      {/* Most Read */}
      <div className="bg-card rounded-lg border border-border-2 p-5">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-4 h-4 text-gold" />
          <h3 className="text-sm font-semibold text-text">Most Read</h3>
        </div>
        <div className="space-y-3">
          {mostRead.map((item, i) => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className="flex items-start gap-3 group"
            >
              <span className="shrink-0 w-5 h-5 flex items-center justify-center text-[10px] font-bold text-gold bg-gold/10 rounded">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="text-xs text-text group-hover:text-gold transition-colors leading-snug line-clamp-2">
                  {item.title}
                </p>
                <p className="text-[10px] text-dim mt-0.5">{item.views} reads</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tax Deadlines */}
      <div className="bg-card rounded-lg border border-border-2 p-5">
        <div className="flex items-center gap-2 mb-4">
          <CalendarClock className="w-4 h-4 text-gold" />
          <h3 className="text-sm font-semibold text-text">Upcoming Deadlines</h3>
        </div>
        <div className="space-y-3">
          {deadlines.map((d, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${d.color}`} />
              <div>
                <p className="text-xs text-text leading-snug">{d.title}</p>
                <p className="text-[10px] text-dim mt-0.5">{d.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Topic Tags */}
      <div className="bg-card rounded-lg border border-border-2 p-5">
        <h3 className="text-sm font-semibold text-text mb-3">Topics</h3>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="px-2.5 py-1 text-[10px] text-muted bg-bg-3 rounded-full border border-border-2 hover:text-gold hover:border-gold/20 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
