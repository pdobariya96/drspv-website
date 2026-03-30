import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { getKnowledgeArticles, pillarConfig } from "@/lib/knowledge";

export const metadata: Metadata = {
  title: "Income Tax — Knowledge Bank",
  description: pillarConfig["income-tax"].description,
  keywords: [
    "income tax guide India",
    "IT Act explained",
    "capital gains tax",
    "TDS rates",
    "section 80C deductions",
    "income tax chapters",
  ],
};

const chapters = [
  {
    number: 1,
    title: "Basis of Charge",
    description:
      "Foundational concepts of income tax — charge of tax, residential status, scope of total income, and previous year vs assessment year.",
  },
  {
    number: 2,
    title: "Exempt Incomes — Sec 10",
    description:
      "Comprehensive guide to incomes exempt under Section 10 — agricultural income, HRA, LTA, gratuity, and other key exemptions.",
  },
  {
    number: 3,
    title: "Salaries — Sec 15-17",
    description:
      "Computation of salary income, allowances, perquisites, profits in lieu of salary, standard deduction, and TDS on salary.",
  },
  {
    number: 4,
    title: "House Property — Sec 22-27",
    description:
      "Annual value computation, municipal taxes, standard deduction under Section 24(a), and interest deduction under Section 24(b).",
  },
  {
    number: 5,
    title: "Business & Profession — Sec 28-44",
    description:
      "Allowable deductions, depreciation, presumptive taxation under 44AD/44ADA, disallowances under Section 40A, and deemed profits.",
  },
  {
    number: 6,
    title: "Capital Gains — Sec 45-55",
    description:
      "Short-term vs long-term gains, indexation, exemptions under 54/54EC/54F, grandfathering for pre-2018 equity, and Budget 2025 rates.",
  },
  {
    number: 7,
    title: "Other Sources — Sec 56-59",
    description:
      "Dividends, interest, gifts under Section 56(2)(x), clubbing provisions, and taxation of cryptocurrency/VDA under Section 115BBH.",
  },
  {
    number: 8,
    title: "Set Off & Carry Forward",
    description:
      "Inter-source and inter-head set off of losses, carry forward rules, restrictions on set off, and order of priority.",
  },
  {
    number: 9,
    title: "Deductions — 80C to 80U",
    description:
      "Section 80C, 80D, 80E, 80G, 80TTA/80TTB, and NPS deductions — eligibility, limits, and documentation required.",
  },
  {
    number: 10,
    title: "TDS, TCS & Advance Tax",
    description:
      "TDS rates and sections, TCS provisions, TDS on salary (192), professional fees (194J), property (194IA), and advance tax computation.",
  },
  {
    number: 11,
    title: "Assessment & Scrutiny — Sec 143-148",
    description:
      "Types of assessment (143(1), 143(3), 144), scrutiny selection criteria, reassessment under Section 148, and best judgement assessment.",
  },
  {
    number: 12,
    title: "Unexplained Income — Sec 68-69D",
    description:
      "Cash credits, unexplained investments, unexplained money, and deemed income provisions under Sections 68 to 69D with tax implications.",
  },
  {
    number: 13,
    title: "Penalties & Prosecution — Sec 270A-276",
    description:
      "Penalty for under-reporting and misreporting of income, prosecution provisions, compounding of offences, and immunity from penalties.",
  },
  {
    number: 14,
    title: "Appeals & Dispute Resolution",
    description:
      "Appeal process before CIT(A), ITAT, High Court, and Supreme Court — DRC, VSVS scheme, and alternative dispute resolution mechanisms.",
  },
  {
    number: 15,
    title: "Search, Survey & Investigation — Sec 132-133A",
    description:
      "Search and seizure under Section 132, survey under 133A, investigation procedures, and assessment of search cases under 153A/153C.",
  },
  {
    number: 16,
    title: "Returns & Filing — Sec 139-142",
    description:
      "ITR forms (ITR-1 to ITR-7), filing due dates, belated/revised/updated returns, Form 26AS, AIS/TIS verification, and self-assessment tax.",
  },
  {
    number: 17,
    title: "Clubbing of Income — Sec 60-65",
    description:
      "Transfer of income, revocable transfers, income of spouse, minor child clubbing, HUF provisions, and Section 64(1A) exceptions.",
  },
  {
    number: 18,
    title: "Tax Audit, MAT & AMT — Sec 44AB, 115JB, 115JC",
    description:
      "Tax audit thresholds, Form 3CA/3CB/3CD, MAT for companies (115JB), AMT for non-corporates (115JC), and MAT credit mechanism.",
  },
  {
    number: 19,
    title: "International Taxation & DTAA — Sec 90, 91, 195",
    description:
      "Double Taxation Avoidance Agreements, TDS on NR payments, Form 15CA/15CB, Tax Residency Certificate, and PE concepts.",
  },
  {
    number: 20,
    title: "Transfer Pricing — Sec 92-92F",
    description:
      "Arm's Length Price methods, APA, documentation (Master File, Local File, CbCR), Form 3CEB, thin capitalisation, and secondary adjustments.",
  },
  {
    number: 21,
    title: "GAAR & Anti-Avoidance — Sec 95-102",
    description:
      "General Anti-Avoidance Rules, impermissible avoidance arrangements, POEM, thin capitalisation (94B), and treaty override provisions.",
  },
  {
    number: 22,
    title: "Charitable Trusts — Sec 11-13",
    description:
      "Trust registration (12A/12AB), 85% application rule, accumulation, permitted investments, Section 80G donations, and Form 10B audit.",
  },
  {
    number: 23,
    title: "Special Tax Rates & New Regime — Sec 115",
    description:
      "New tax regime (115BAC), company rates (115BAA/BAB), crypto tax (115BBH), unexplained income (115BBE), rebate u/s 87A, and surcharge rates.",
  },
  {
    number: 24,
    title: "Cash Transaction Limits — Sec 269SS, 269T, 269ST",
    description:
      "Cash loan/deposit restrictions, cash receipt limits (Rs. 2 lakh), Section 40A(3) disallowance, 194N TDS on withdrawal, and SFT reporting.",
  },
  {
    number: 25,
    title: "Recovery, Refunds & Rectification — Sec 154, 220-245",
    description:
      "Rectification of mistakes, demand notices, garnishee orders, stay of recovery, refund claims, interest on refunds, and set-off of refunds.",
  },
  {
    number: 26,
    title: "CBDT Notifications, Circulars & Orders",
    description:
      "Practical reference to CBDT notifications, circulars, and orders — ITR form updates, TDS rate changes, faceless assessment, monetary limits for appeals.",
  },
];

export default function IncomeTaxPillarPage() {
  const articles = getKnowledgeArticles("income-tax");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-it-blue/[0.06] via-transparent to-transparent" />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-it-blue/10 border border-it-blue/20">
              <FileText className="h-5 w-5 text-it-blue" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[2px] text-it-blue font-medium">
                Knowledge Bank
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text">
                Income Tax
              </h1>
            </div>
          </div>
          <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
            {pillarConfig["income-tax"].description}
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs text-dim">
            <span>26 Chapters</span>
            <span className="h-1 w-1 rounded-full bg-dim" />
            <span>Updated for Budget 2025</span>
            <span className="h-1 w-1 rounded-full bg-dim" />
            <span>Written by CAs</span>
          </div>
        </div>
      </section>

      {/* Chapter Listing */}
      <section className="mx-auto max-w-4xl px-4 pb-20">
        <div className="space-y-3">
          {chapters.map((ch) => {
            const article = articles.find(
              (a) => a.frontmatter.chapter === ch.number
            );
            const href = article
              ? `/knowledge-bank/income-tax/${article.slug}`
              : `/knowledge-bank/income-tax`;

            return (
              <Link
                key={ch.number}
                href={href}
                className="group flex gap-5 rounded-xl bg-card border border-white/[0.06] p-5 sm:p-6 transition-all hover:border-gold/30 hover:-translate-y-0.5"
              >
                <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-it-blue/10 border border-it-blue/20 text-it-blue font-bold text-sm">
                  {String(ch.number).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-text group-hover:text-gold transition-colors">
                    {ch.title}
                  </h3>
                  <p className="text-sm text-muted mt-1 leading-relaxed">
                    {ch.description}
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
