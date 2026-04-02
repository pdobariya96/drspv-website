import Hero from "@/components/home/Hero";
import ProblemGrid from "@/components/home/ProblemGrid";
import ServicesGrid from "@/components/home/ServicesGrid";
import DeadlineCountdowns from "@/components/home/DeadlineCountdowns";
import BlogPreview from "@/components/home/BlogPreview";
import OfficesGrid from "@/components/home/OfficesGrid";
import NewsletterForm from "@/components/shared/NewsletterForm";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";

const trustBadges = [
  { label: "ICAI Registered Firm", sub: "Institute of Chartered Accountants of India" },
  { label: "IBBI Registered Valuers", sub: "Insolvency & Bankruptcy Board of India" },
  { label: "DISA Certified", sub: "Diploma in Information Systems Audit (ICAI)" },
  { label: "Est. 2023", sub: "Rajkot, Gujarat — Headquarters" },
  { label: "4 Countries", sub: "India · UAE · USA · UK · Australia" },
  { label: "15 Practice Areas", sub: "Tax · Audit · IPO · FEMA · CFO & More" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="section-divider" />

      {/* ── Trust Badges ── */}
      <section className="bg-bg py-10 px-4">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-[10px] uppercase tracking-[0.16em] text-muted mb-6 font-medium">
            Credentials &amp; Recognitions
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {trustBadges.map((b) => (
              <div
                key={b.label}
                className="rounded-xl border border-stone-200 bg-card px-4 py-4 text-center shadow-subtle hover:border-gold/20 transition-colors"
              >
                <p className="text-xs font-semibold text-text leading-tight">{b.label}</p>
                <p className="mt-1 text-[10px] text-muted leading-snug">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />
      <ProblemGrid />
      <div className="section-divider" />
      <ServicesGrid />
      <div className="section-divider" />
      <DeadlineCountdowns />
      <div className="section-divider" />
      <BlogPreview />
      <div className="section-divider" />
      <section className="bg-bg-2 py-12 px-7">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                <span className="text-gold text-sm">✉</span>
              </div>
              <span className="text-[10px] uppercase tracking-[2px] text-gold font-medium">Newsletter</span>
            </div>
            <h2 className="text-[22px] font-medium tracking-tight text-text mb-2">
              Weekly Tax & Finance Insights
            </h2>
            <p className="text-muted text-[14px] leading-relaxed">
              Join 2,000+ professionals who receive our weekly digest on income tax, GST, FEMA and IPO updates — written by our qualified CAs.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>
      <div className="section-divider" />
      <OfficesGrid />
      <div className="section-divider" />

      {/* Local SEO — Rajkot */}
      <section className="py-14 px-6 bg-bg-2">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-[10px] uppercase tracking-[2px] text-gold font-medium">Rajkot · Gujarat · India</span>
            <h2 className="text-[22px] sm:text-[26px] font-semibold text-text mt-1 tracking-tight">
              Your Trusted CA Firm in Rajkot
            </h2>
          </div>
          <div className="space-y-4 text-[14px] sm:text-[15px] text-muted leading-relaxed">
            <p>
              Searching for a reliable <strong className="text-text font-medium">CA in Rajkot</strong>? DRSPV &amp; Associates is a full-service <strong className="text-text font-medium">chartered accountant in Rajkot</strong> trusted by 500+ businesses, MSMEs, and individuals across Gujarat. From tax planning to IPO readiness, we deliver precise, timely compliance across 15 practice areas — all handled by qualified CAs, not juniors.
            </p>
            <p>
              As a leading <strong className="text-text font-medium">income tax consultant in Rajkot</strong>, we handle ITR filing, assessment notices, advance tax, and HNI tax planning. Our team is also a preferred <strong className="text-text font-medium">GST consultant in Rajkot</strong> — managing registrations, GSTR filings, e-invoicing, refund claims, and GST demand responses for traders, manufacturers, and service providers across Gujarat.
            </p>
            <p>
              Need <strong className="text-text font-medium">company registration in Rajkot</strong>? We incorporate private limited companies, LLPs, OPCs, and Section 8 entities — handling DSC, DIN, MOA/AOA drafting, and post-registration compliance in one smooth process. We are also a trusted <strong className="text-text font-medium">MSME loan consultant in Rajkot</strong>, assisting businesses with PMEGP, CMEGP, CGTMSE collateral-free loans, and Gujarat state subsidy applications.
            </p>
            <p>
              For a thorough <strong className="text-text font-medium">tax audit in Rajkot</strong> under Section 44AB, our ICAI-qualified CAs deliver independent, deadline-compliant reports. Whether you are an MSME, a manufacturer in GIDC, a trader on Rajkot&apos;s 150 Ft. Ring Road, or a startup scaling across Gujarat — DRSPV &amp; Associates is the <strong className="text-text font-medium">best CA firm in Rajkot</strong> to have in your corner.
            </p>
          </div>
        </div>
      </section>
      <div className="section-divider" />
      <WhatsAppCTA />
    </>
  );
}
