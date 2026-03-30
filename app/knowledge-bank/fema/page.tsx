import type { Metadata } from "next";
import Link from "next/link";
import { Globe, ArrowRight } from "lucide-react";
import { getKnowledgeArticles, pillarConfig } from "@/lib/knowledge";

export const metadata: Metadata = {
  title: "FEMA — Knowledge Bank",
  description: pillarConfig.fema.description,
  keywords: [
    "FEMA guide India",
    "FDI regulations",
    "LRS limits",
    "NRI banking rules",
    "ODI regulations",
    "ECB guidelines",
  ],
};

const modules = [
  {
    number: 1,
    title: "FEMA Overview & Structure",
    description:
      "Understanding the Foreign Exchange Management Act, 1999 — its scope, applicability, current account vs capital account transactions, and RBI's role.",
  },
  {
    number: 2,
    title: "Foreign Direct Investment (FDI)",
    description:
      "FDI policy routes (automatic vs approval), sector-specific caps, pricing guidelines, reporting requirements (FC-GPR, FC-TRS), and downstream investment rules.",
  },
  {
    number: 3,
    title: "Liberalised Remittance Scheme (LRS)",
    description:
      "LRS limit of USD 250,000 per year, permitted purposes, TCS under Section 206C(1G), reporting requirements, and common compliance errors.",
  },
  {
    number: 4,
    title: "NRI Banking & Accounts",
    description:
      "NRE, NRO, and FCNR accounts — opening rules, permissible credits/debits, repatriation limits, taxation of interest, and joint account rules.",
  },
  {
    number: 5,
    title: "Overseas Direct Investment (ODI)",
    description:
      "ODI regulations under FEMA, automatic and approval routes, financial commitment limits, annual performance report (APR), and disinvestment reporting.",
  },
  {
    number: 6,
    title: "External Commercial Borrowings (ECB)",
    description:
      "ECB framework — eligible borrowers, recognised lenders, all-in-cost ceiling, end-use restrictions, and reporting through ECB-2 return.",
  },
  {
    number: 7,
    title: "Export & Import Regulations",
    description:
      "Export of goods and services — realisation period, softex forms, write-off procedures. Import regulations — advance remittance, import evidence, and EDPMS/IDPMS.",
  },
  {
    number: 8,
    title: "FEMA Penalties & Compounding",
    description:
      "Penalty provisions under Section 13, compounding of contraventions, ED investigation process, and voluntary disclosure under the compounding framework.",
  },
];

export default function FEMAPillarPage() {
  const articles = getKnowledgeArticles("fema");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-fema-purple/[0.06] via-transparent to-transparent" />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-fema-purple/10 border border-fema-purple/20">
              <Globe className="h-5 w-5 text-fema-purple" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[2px] text-fema-purple font-medium">
                Knowledge Bank
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text">
                FEMA
              </h1>
            </div>
          </div>
          <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
            {pillarConfig.fema.description}
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs text-dim">
            <span>8 Modules</span>
            <span className="h-1 w-1 rounded-full bg-dim" />
            <span>RBI Master Directions Updated</span>
            <span className="h-1 w-1 rounded-full bg-dim" />
            <span>Written by FEMA Experts</span>
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
              ? `/knowledge-bank/fema/${article.slug}`
              : `/knowledge-bank/fema`;

            return (
              <Link
                key={mod.number}
                href={href}
                className="group flex gap-5 rounded-xl bg-card border border-white/[0.06] p-5 sm:p-6 transition-all hover:border-gold/30 hover:-translate-y-0.5"
              >
                <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-fema-purple/10 border border-fema-purple/20 text-fema-purple font-bold text-sm">
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
