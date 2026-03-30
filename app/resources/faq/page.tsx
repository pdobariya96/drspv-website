import type { Metadata } from "next";
import faqData from "@/data/faq.json";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Income Tax, GST, TDS, Audit, FEMA, and business compliance in India from DRSPV & Associates, Chartered Accountants.",
  alternates: { canonical: "https://drspv.in/resources/faq" },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-bg py-16 sm:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-[10px] uppercase tracking-[3px] text-gold font-medium mb-4">
            FAQ Hub
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-muted text-base sm:text-lg max-w-xl mx-auto">
            Clear answers to the most common tax, GST, business, and compliance
            questions. Written by qualified Chartered Accountants.
          </p>
        </div>
      </section>

      <FAQClient faqs={faqData} />
    </>
  );
}
