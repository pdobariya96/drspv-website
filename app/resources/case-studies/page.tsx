import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how DRSPV & Associates helped businesses save taxes, resolve compliance issues, and achieve growth through expert CA advisory.",
  alternates: { canonical: "https://drspv.in/resources/case-studies" },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917777970565";

const caseStudies = [
  {
    tag: "Tax Restructuring",
    title: "Manufacturing Firm Saves Rs 47 Lakh in Annual Tax Through Entity Restructuring",
    problem:
      "A Rajkot-based manufacturing company with Rs 12 Cr turnover was paying excessive taxes due to an inefficient business structure. Multiple proprietorship firms were running under different family members without proper consolidation.",
    solution:
      "We restructured the business into a Private Limited Company with proper holding structure, implemented Section 80-IAC benefits for the new R&D division, optimised depreciation claims, and set up proper inter-company transfer pricing.",
    result: "Rs 47 lakh annual tax savings with full compliance",
    industry: "Manufacturing",
    color: "#3B82F6",
  },
  {
    tag: "GST Recovery",
    title: "Textile Exporter Recovers Rs 23 Lakh Blocked ITC Through Proper Documentation",
    problem:
      "A textile exporter was unable to claim Rs 23 lakh of Input Tax Credit that had been blocked due to mismatches in GSTR-2A/2B reconciliation. Multiple vendor invoices were not reflecting in the GST portal.",
    solution:
      "We conducted a complete vendor-wise ITC reconciliation, identified 47 vendors with filing discrepancies, coordinated with each vendor for corrections, filed rectification applications, and established an automated monthly ITC matching system.",
    result: "Full Rs 23 lakh ITC recovered within 4 months",
    industry: "Textile & Export",
    color: "#10B981",
  },
  {
    tag: "Startup Advisory",
    title: "EdTech Startup Secures DPIIT Recognition and Rs 1.2 Cr Angel Tax Exemption",
    problem:
      "A Ahmedabad-based edtech startup had raised Rs 2.5 Cr from angel investors but faced an angel tax demand of Rs 1.2 Cr under Section 56(2)(viib) due to valuation disputes. The founders also lacked proper compliance structure.",
    solution:
      "We obtained DPIIT recognition for the startup, prepared a DCF valuation report supporting the share premium, filed for angel tax exemption under the Startup India scheme, set up proper board governance, and implemented a cap table management system.",
    result: "Complete Rs 1.2 Cr angel tax exemption secured",
    industry: "Technology / EdTech",
    color: "#F43F5E",
  },
  {
    tag: "FEMA Compliance",
    title: "NRI Family Regularises Rs 3.8 Cr in Non-Compliant Property Transactions",
    problem:
      "An NRI family based in the USA had acquired agricultural land in Gujarat through family members and made several property transactions over 8 years without proper FEMA compliance. They faced potential penalties of up to 3x the transaction value.",
    solution:
      "We conducted a complete audit of all property transactions, prepared a voluntary disclosure and compounding application to RBI, restructured property holdings to comply with FEMA Section 6(5), and set up a compliant repatriation structure for rental income.",
    result: "Full regularisation with minimal compounding fee of Rs 4.5 lakh",
    industry: "NRI / Real Estate",
    color: "#A855F7",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-16 sm:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-[10px] uppercase tracking-[3px] text-gold font-medium mb-4">
            Results That Speak
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight">
            Case Studies
          </h1>
          <p className="mt-4 text-muted text-base sm:text-lg max-w-xl mx-auto">
            Real results for real businesses. See how our CA team helped clients
            save taxes, resolve compliance issues, and structure for growth.
          </p>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="bg-bg-2 py-12 px-4 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-card border border-white/[0.06] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
            >
              <div className="h-1" style={{ backgroundColor: cs.color }} />
              <div className="p-6">
                {/* Tag */}
                <span
                  className="inline-block text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded mb-4"
                  style={{
                    backgroundColor: `${cs.color}15`,
                    color: cs.color,
                  }}
                >
                  {cs.tag}
                </span>

                {/* Title */}
                <h2 className="text-base font-bold text-text mb-5 leading-snug">
                  {cs.title}
                </h2>

                {/* 3-col Body */}
                <div className="grid grid-cols-3 gap-4 mb-5">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-muted font-semibold mb-2">
                      Problem
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      {cs.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-muted font-semibold mb-2">
                      Solution
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-muted font-semibold mb-2">
                      Result
                    </h4>
                    <p className="text-xs text-green font-semibold leading-relaxed">
                      {cs.result}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <span className="text-[10px] uppercase tracking-wider text-dim font-medium">
                    {cs.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-r from-[#0B1628] via-[#111F38] to-[#0B1628] border-y border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-text mb-1">
              Have a similar challenge?
            </h3>
            <p className="text-muted text-sm">
              Let our CAs analyse your situation and recommend the best approach.
            </p>
          </div>
          <a
            href={`https://wa.me/${WA}?text=${encodeURIComponent("Hello DRSPV, I have a tax/compliance challenge I need help with...")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg bg-wa-green px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-wa-green/20 transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="h-5 w-5" />
            Discuss Your Case
          </a>
        </div>
      </section>
    </>
  );
}
