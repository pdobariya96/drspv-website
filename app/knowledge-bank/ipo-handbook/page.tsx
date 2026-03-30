import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, ArrowRight } from "lucide-react";
import { getKnowledgeArticles, pillarConfig } from "@/lib/knowledge";

export const metadata: Metadata = {
  title: "IPO Handbook — Knowledge Bank",
  description: pillarConfig["ipo-handbook"].description,
  keywords: [
    "IPO guide India",
    "SME IPO process",
    "DRHP preparation",
    "SEBI listing requirements",
    "post-listing compliance",
    "IPO handbook",
  ],
};

const parts = [
  {
    number: 1,
    title: "IPO Landscape in India",
    description:
      "Overview of BSE SME, NSE Emerge, and mainboard IPOs. Market trends, subscription data, and why SME IPOs have surged since 2022.",
  },
  {
    number: 2,
    title: "Eligibility Criteria",
    description:
      "SEBI eligibility for SME and mainboard IPOs — net worth, profitability track record, minimum allottees, and promoter contribution requirements.",
  },
  {
    number: 3,
    title: "Pre-IPO Preparation",
    description:
      "Corporate restructuring, related-party cleanup, auditor appointment, Ind AS conversion, internal controls, and board composition requirements.",
  },
  {
    number: 4,
    title: "DRHP Preparation",
    description:
      "Drafting the Draft Red Herring Prospectus — business description, risk factors, financial statements, management discussion, and legal disclosures.",
  },
  {
    number: 5,
    title: "SEBI Filing & Observations",
    description:
      "Filing process, SEBI observation letter timeline, responding to observations, common SEBI queries, and obtaining final clearance.",
  },
  {
    number: 6,
    title: "Book Building & Pricing",
    description:
      "Price band determination, book building process, anchor investor allocation, basis of allotment, and listing day mechanics.",
  },
  {
    number: 7,
    title: "Post-Listing Compliance (LODR)",
    description:
      "Quarterly results, corporate governance norms, board meeting requirements, related-party transaction approvals, and insider trading regulations.",
  },
  {
    number: 8,
    title: "Market Making & Liquidity",
    description:
      "Mandatory market making for SME IPOs, market maker obligations, spread requirements, and transition from SME to mainboard.",
  },
  {
    number: 9,
    title: "Case Studies — Successful IPOs",
    description:
      "Real examples of SME companies that went public — from pre-IPO financials to listing day performance and post-listing growth trajectory.",
  },
];

export default function IPOHandbookPillarPage() {
  const articles = getKnowledgeArticles("ipo-handbook");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-ipo-amber/[0.06] via-transparent to-transparent" />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ipo-amber/10 border border-ipo-amber/20">
              <TrendingUp className="h-5 w-5 text-ipo-amber" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[2px] text-ipo-amber font-medium">
                Knowledge Bank
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text">
                IPO Handbook
              </h1>
            </div>
          </div>
          <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
            {pillarConfig["ipo-handbook"].description}
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs text-dim">
            <span>9 Parts</span>
            <span className="h-1 w-1 rounded-full bg-dim" />
            <span>BSE SME & NSE Emerge</span>
            <span className="h-1 w-1 rounded-full bg-dim" />
            <span>Written by IPO Consultants</span>
          </div>
        </div>
      </section>

      {/* Part Listing */}
      <section className="mx-auto max-w-4xl px-4 pb-20">
        <div className="space-y-3">
          {parts.map((part) => {
            const article = articles.find(
              (a) => a.frontmatter.chapter === part.number
            );
            const href = article
              ? `/knowledge-bank/ipo-handbook/${article.slug}`
              : `/knowledge-bank/ipo-handbook`;

            return (
              <Link
                key={part.number}
                href={href}
                className="group flex gap-5 rounded-xl bg-card border border-white/[0.06] p-5 sm:p-6 transition-all hover:border-gold/30 hover:-translate-y-0.5"
              >
                <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-ipo-amber/10 border border-ipo-amber/20 text-ipo-amber font-bold text-sm">
                  {String(part.number).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-text group-hover:text-gold transition-colors">
                    {part.title}
                  </h3>
                  <p className="text-sm text-muted mt-1 leading-relaxed">
                    {part.description}
                  </p>
                </div>
                <ArrowRight className="hidden sm:block h-5 w-5 text-dim shrink-0 mt-1 group-hover:text-gold transition-colors" />
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
