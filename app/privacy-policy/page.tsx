import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of DRSPV & Associates — how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://drspv.in/privacy-policy" },
};

const sections = [
  {
    title: "1. Information We Collect",
    body: `When you contact us through our website, we may collect personal information including your name, email address, phone number, and details about your query or service requirement. We also collect non-personally identifiable information such as browser type, pages visited, and time spent on the site through standard web analytics tools.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `Information you provide is used solely to respond to your enquiry, provide the services you request, and improve the quality of our offerings. We do not sell, trade, or rent your personal information to any third party. We may use your contact details to send you relevant updates about tax compliance deadlines or our services — you may opt out of such communications at any time by writing to info@drspv.in.`,
  },
  {
    title: "3. Data Security",
    body: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration, or destruction. All data transmitted through our website is protected using standard encryption protocols. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "4. Cookies",
    body: `Our website may use cookies to enhance your browsing experience. Cookies are small data files stored on your device that help us understand how you interact with our site. You may disable cookies through your browser settings; however, some features of the website may not function correctly if cookies are disabled.`,
  },
  {
    title: "5. Third-Party Links",
    body: `Our website may contain links to third-party websites including government portals (Income Tax Department, GSTN, MCA), regulatory bodies (SEBI, RBI, IBBI), and other external resources. We are not responsible for the privacy practices or content of such external sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: "6. Data Retention",
    body: `We retain personal information only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law. Client engagement data is retained in accordance with the professional obligations of Chartered Accountants under the Institute of Chartered Accountants of India (ICAI) guidelines.`,
  },
  {
    title: "7. Your Rights",
    body: `You have the right to request access to, correction of, or deletion of your personal information held by us. You may also withdraw consent to any communication at any time. To exercise any of these rights, please contact us at info@drspv.in or call +91 77779 70565.`,
  },
  {
    title: "8. Changes to This Policy",
    body: `We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date. Continued use of our website following any changes constitutes your acceptance of the revised policy.`,
  },
  {
    title: "9. Contact Us",
    body: `If you have any questions about this Privacy Policy or how we handle your data, please contact:\n\nDRSPV & Associates\n510, RK World Tower, Near Sheetal Park, 150 Ft. Ring Road, Rajkot – 360006, Gujarat\nEmail: info@drspv.in\nPhone: +91 77779 70565`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-bg min-h-screen">
      <div className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:pt-36">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-muted">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text">Privacy Policy</span>
        </div>

        <div className="mb-2 inline-block h-1 w-10 rounded-full bg-gold" />
        <h1 className="font-display text-3xl font-bold text-text mb-2 sm:text-4xl">Privacy Policy</h1>
        <p className="text-sm text-muted mb-10">Effective Date: 1 January 2025 &nbsp;·&nbsp; Last Updated: 2 April 2026</p>

        <p className="text-sm text-muted leading-relaxed mb-10">
          DRSPV &amp; Associates (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and safeguard information you provide when you
          visit <strong className="text-text">drspv.in</strong> or contact us for professional services.
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
      </div>
    </main>
  );
}
