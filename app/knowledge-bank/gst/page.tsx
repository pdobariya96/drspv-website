import type { Metadata } from "next";
import Link from "next/link";
import { Receipt, ArrowRight } from "lucide-react";
import { getKnowledgeArticles, pillarConfig } from "@/lib/knowledge";

export const metadata: Metadata = {
  title: "GST — Knowledge Bank",
  description: pillarConfig.gst.description,
  keywords: [
    "GST guide India",
    "GST registration",
    "input tax credit",
    "GSTR-3B filing",
    "e-invoicing GST",
    "GST audit",
  ],
};

const modules = [
  {
    number: 1,
    title: "GST Registration & Threshold",
    description:
      "Who needs to register, threshold limits (Rs 20L/40L), voluntary registration benefits, and the GST registration process on the portal.",
  },
  {
    number: 2,
    title: "GST Returns — GSTR-1, 3B, 9, 9C",
    description:
      "Filing calendar, due dates, reconciliation between GSTR-1 and GSTR-3B, annual return in GSTR-9, and reconciliation statement GSTR-9C.",
  },
  {
    number: 3,
    title: "Input Tax Credit (ITC)",
    description:
      "ITC eligibility under Section 16, blocked credits under Section 17(5), reversal rules, GSTR-2B matching, and ITC on capital goods.",
  },
  {
    number: 4,
    title: "E-Invoicing & E-Way Bill",
    description:
      "E-invoicing threshold (Rs 5 crore), IRN generation, QR code requirements, e-way bill rules, validity periods, and common errors.",
  },
  {
    number: 5,
    title: "Composition Scheme",
    description:
      "Eligibility (Rs 1.5 crore turnover), tax rates, quarterly filing, restrictions on ITC and inter-state supply, and when to opt out.",
  },
  {
    number: 6,
    title: "GST on Services & RCM",
    description:
      "Place of supply rules for services, reverse charge mechanism (RCM) under Section 9(3) and 9(4), and import of services taxation.",
  },
  {
    number: 7,
    title: "GST Audit & Assessment",
    description:
      "Audit under Section 65/66, scrutiny assessment, best judgement assessment, and how to prepare for a GST audit with complete documentation.",
  },
  {
    number: 8,
    title: "Penalties, Appeals & Advance Rulings",
    description:
      "Penalty provisions under Sections 122-138, interest rates, appeal process before GST Appellate Authority, and advance ruling mechanism.",
  },
];

export default function GSTPillarPage() {
  const articles = getKnowledgeArticles("gst");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gst-green/[0.06] via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gst-green/10 border border-gst-green/20">
              <Receipt className="h-5 w-5 text-gst-green" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[2px] text-gst-green font-medium">
                Knowledge Bank
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text">
                GST
              </h1>
            </div>
          </div>
          <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
            {pillarConfig.gst.description}
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs text-dim">
            <span>8 Modules</span>
            <span className="h-1 w-1 rounded-full bg-dim" />
            <span>Updated for GST Council 53rd Meeting</span>
            <span className="h-1 w-1 rounded-full bg-dim" />
            <span>Written by CAs</span>
          </div>
        </div>
      </section>

      {/* Module Listing */}
      <section className="mx-auto max-w-4xl px-4 pb-20">
        <div className="space-y-3">
          {modules.map((mod) => {
            const article = articles.find(
              (a) => a.frontmatter.chapter === mod.number
            );
            const href = article
              ? `/knowledge-bank/gst/${article.slug}`
              : `/knowledge-bank/gst`;

            return (
              <Link
                key={mod.number}
                href={href}
                className="group flex gap-5 rounded-xl bg-card border border-stone-200 p-5 sm:p-6 transition-all hover:border-gold/30 hover:-translate-y-0.5"
              >
                <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gst-green/10 border border-gst-green/20 text-gst-green font-bold text-sm">
                  {String(mod.number).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-text group-hover:text-gold transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-muted mt-1 leading-relaxed">
                    {mod.description}
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
