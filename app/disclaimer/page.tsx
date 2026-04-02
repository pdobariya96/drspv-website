import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer for DRSPV & Associates website — limitations on legal and professional advice published online.",
  alternates: { canonical: "https://drspv.in/disclaimer" },
};

const sections = [
  {
    title: "1. General Information Only",
    body: `The content published on this website — including articles, Knowledge Bank entries, blog posts, FAQs, and service descriptions — is provided for general informational purposes only. It does not constitute professional legal, tax, financial, or accounting advice. Laws and regulations change frequently; information on this site may not reflect the most recent amendments or judicial interpretations.`,
  },
  {
    title: "2. No Client-Advisor Relationship",
    body: `Reading or interacting with content on this website does not create a client-advisor relationship between you and DRSPV & Associates. A formal engagement relationship is established only through a signed engagement letter and the payment of agreed professional fees. Until such an engagement is formalised, any information exchanged through this website should not be relied upon as professional advice specific to your circumstances.`,
  },
  {
    title: "3. No Reliance on Website Content",
    body: `While we endeavour to ensure the accuracy of all content published on this site, DRSPV & Associates makes no representations or warranties — express or implied — as to the completeness, accuracy, reliability, suitability, or availability of the information. Any reliance you place on such information is strictly at your own risk. You should always seek independent professional advice before taking any action based on information found on this website.`,
  },
  {
    title: "4. Income Tax, GST, and Regulatory Information",
    body: `Tax laws in India, including the Income Tax Act 1961 (and the new Income Tax Act 2025 when in force), GST laws, FEMA, Companies Act, SEBI regulations, and other applicable statutes are complex and subject to frequent change through Finance Acts, CBDT circulars, CBIC notifications, and judicial decisions. Information on this website regarding such laws is intended to provide a general overview only and must not be treated as definitive legal or tax advice for your specific situation.`,
  },
  {
    title: "5. Third-Party Links and Resources",
    body: `This website may contain links to external websites including government portals, regulatory authority websites, and other professional resources. DRSPV & Associates does not endorse or accept responsibility for the content, accuracy, or availability of any linked external websites. The inclusion of any link does not imply endorsement by us.`,
  },
  {
    title: "6. Limitation of Liability",
    body: `To the fullest extent permitted by applicable law, DRSPV & Associates shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of, or inability to use, this website or any information published herein. This includes, without limitation, any loss of profits, business interruption, or loss of data resulting from any use of or reliance on material found on this site.`,
  },
  {
    title: "7. Professional Regulation",
    body: `DRSPV & Associates is a registered Chartered Accountancy firm operating under the regulations of the Institute of Chartered Accountants of India (ICAI). Our practice is governed by ICAI's Code of Ethics and professional standards. Nothing on this website should be construed as a violation of ICAI's advertising guidelines, and we do not make any claim of superiority over other CA firms.`,
  },
  {
    title: "8. Jurisdiction",
    body: `This website is operated from Rajkot, Gujarat, India. Any dispute arising from the use of this website shall be subject to the exclusive jurisdiction of the courts at Rajkot, Gujarat, and shall be governed by Indian law.`,
  },
];

export default function DisclaimerPage() {
  return (
    <main className="bg-bg min-h-screen">
      <div className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:pt-36">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-muted">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text">Disclaimer</span>
        </div>

        <div className="mb-2 inline-block h-1 w-10 rounded-full bg-gold" />
        <h1 className="font-display text-3xl font-bold text-text mb-2 sm:text-4xl">Disclaimer</h1>
        <p className="text-sm text-muted mb-10">Effective Date: 1 January 2025 &nbsp;·&nbsp; Last Updated: 2 April 2026</p>

        <p className="text-sm text-muted leading-relaxed mb-10">
          Please read this Disclaimer carefully before using the <strong className="text-text">drspv.in</strong> website
          operated by DRSPV &amp; Associates. By accessing or using any part of this website, you agree to be
          bound by the terms set out below.
        </p>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-base font-semibold text-text mb-3 border-l-2 border-gold pl-3">{s.title}</h2>
              {s.body.split("\n\n").map((para, i) => (
                <p key={i} className="text-sm text-muted leading-relaxed mb-3">{para}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-stone-200 bg-bg-2 p-6">
          <p className="text-xs text-muted leading-relaxed">
            <strong className="text-text">Questions?</strong> If you have any questions about this Disclaimer, please contact
            DRSPV &amp; Associates at <a href="mailto:info@drspv.in" className="text-gold hover:underline">info@drspv.in</a> or
            call <a href="tel:+917777970565" className="text-gold hover:underline">+91 77779 70565</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
