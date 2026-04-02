import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  HelpCircle,
  BookOpen,
  Download,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free tax resources, compliance calendars, FAQ hub, finance glossary, downloadable guides and case studies from DRSPV & Associates, Chartered Accountants.",
  alternates: { canonical: "https://drspv.in/resources" },
};

const resources = [
  {
    icon: CalendarDays,
    title: "Tax Calendar",
    description:
      "Never miss a deadline. Complete FY 2025-26 calendar with GST, Income Tax, TDS and Companies Act due dates with countdown timers.",
    count: "34 deadlines",
    href: "/resources/tax-calendar",
    color: "group-hover:border-t-it-blue",
    iconBg: "bg-it-blue/10 text-it-blue",
  },
  {
    icon: HelpCircle,
    title: "FAQ Hub",
    description:
      "Answers to the most common tax and business questions — from ITR filing and GST registration to company compliance and FEMA rules.",
    count: "18 questions",
    href: "/resources/faq",
    color: "group-hover:border-t-gst-green",
    iconBg: "bg-gst-green/10 text-gst-green",
  },
  {
    icon: BookOpen,
    title: "Glossary",
    description:
      "Plain-English definitions of tax, finance, and compliance terms. From Advance Tax to Zero-Rated Supply — all the jargon decoded.",
    count: "30 terms",
    href: "/resources/glossary",
    color: "group-hover:border-t-gold",
    iconBg: "bg-gold/10 text-gold",
  },
  {
    icon: Download,
    title: "Free Downloads",
    description:
      "Downloadable checklists, rate charts, compliance calendars and guides — curated by our CA team for professionals and businesses.",
    count: "6 resources",
    href: "/resources/downloads",
    color: "group-hover:border-t-fema-purple",
    iconBg: "bg-fema-purple/10 text-fema-purple",
  },
  {
    icon: TrendingUp,
    title: "Case Studies",
    description:
      "See how we helped real businesses save taxes, resolve compliance issues, and structure their operations for growth.",
    count: "4 studies",
    href: "/resources/case-studies",
    color: "group-hover:border-t-ipo-amber",
    iconBg: "bg-ipo-amber/10 text-ipo-amber",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-16 sm:py-24 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-[10px] uppercase tracking-[3px] text-gold font-medium mb-4">
            Knowledge Bank
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight leading-tight">
            Free Resources for Tax & Business
          </h1>
          <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Compliance calendars, FAQs, glossaries, downloadable guides and real
            case studies — everything you need to stay on top of your tax and
            business obligations.
          </p>
        </div>
      </section>

      {/* Resource Cards Grid */}
      <section className="bg-bg-2 py-16 px-4 border-y border-stone-200">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r) => (
            <Link
              key={r.title}
              href={r.href}
              className={`group rounded-2xl bg-card border border-stone-200 border-t-2 border-t-transparent ${r.color} p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:border-stone-300`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${r.iconBg} flex items-center justify-center mb-4`}
              >
                <r.icon className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-bold text-text mb-2">{r.title}</h2>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {r.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-dim font-medium">{r.count}</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-transform duration-200 group-hover:translate-x-1">
                  View <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
