"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, CalendarClock } from "lucide-react";

interface RelatedPost {
  title: string;
  slug: string;
  category: string;
}

interface Deadline {
  title: string;
  date: string;
  color: string;
}

interface ArticleSidebarProps {
  relatedPosts?: RelatedPost[];
  deadlines?: Deadline[];
}

const defaultRelated: RelatedPost[] = [
  { title: "Understanding Section 80C Deductions", slug: "section-80c-guide", category: "Income Tax" },
  { title: "GST Return Filing: Step by Step", slug: "gst-return-filing", category: "GST" },
  { title: "Tax Planning for Salaried Employees", slug: "tax-planning-salaried", category: "Income Tax" },
];

const defaultDeadlines: Deadline[] = [
  { title: "Advance Tax - Q4", date: "15 Mar 2025", color: "bg-red" },
  { title: "GSTR-9 Annual Return", date: "31 Mar 2025", color: "bg-gst-green" },
  { title: "ITR Filing (Non-Audit)", date: "31 Jul 2025", color: "bg-it-blue" },
];

export default function ArticleSidebar({
  relatedPosts = defaultRelated,
  deadlines = defaultDeadlines,
}: ArticleSidebarProps) {
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
    <aside className="w-[220px] shrink-0 sticky top-20 space-y-5">
      {/* Mini Newsletter */}
      <div className="bg-card-2 rounded-lg border border-border-2 p-4">
        <div className="flex items-center gap-1.5 mb-2">
          <Mail className="w-3.5 h-3.5 text-gold" />
          <h4 className="text-xs font-semibold text-text">Stay Updated</h4>
        </div>
        {subscribed ? (
          <p className="text-[10px] text-gst-green">Subscribed!</p>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full h-7 px-2.5 text-[11px] bg-bg-3 text-text rounded border border-border-2 focus:border-gold/30 focus:outline-none placeholder:text-dim"
            />
            <button
              type="submit"
              className="w-full h-7 text-[11px] font-semibold bg-gold text-bg rounded hover:bg-gold-2 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>

      {/* Related Posts */}
      <div className="bg-card rounded-lg border border-border-2 p-4">
        <h4 className="text-xs font-semibold text-text mb-3">Related Articles</h4>
        <div className="space-y-3">
          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <span className="text-[10px] text-dim uppercase tracking-wider">
                {post.category}
              </span>
              <p className="text-[11px] text-muted group-hover:text-gold transition-colors leading-snug mt-0.5">
                {post.title}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Deadlines */}
      <div className="bg-card rounded-lg border border-border-2 p-4">
        <div className="flex items-center gap-1.5 mb-3">
          <CalendarClock className="w-3.5 h-3.5 text-gold" />
          <h4 className="text-xs font-semibold text-text">Deadlines</h4>
        </div>
        <div className="space-y-2.5">
          {deadlines.map((d, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className={`mt-1 w-2 h-2 rounded-full shrink-0 ${d.color}`} />
              <div>
                <p className="text-[11px] text-text leading-snug">{d.title}</p>
                <p className="text-[10px] text-dim">{d.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
