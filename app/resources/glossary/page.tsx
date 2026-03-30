import type { Metadata } from "next";
import glossaryData from "@/data/glossary.json";
import GlossaryClient from "./GlossaryClient";

export const metadata: Metadata = {
  title: "Tax & Finance Glossary",
  description:
    "Plain-English definitions of Indian tax, finance, GST, FEMA, and business compliance terms. From Advance Tax to Zero-Rated Supply.",
  alternates: { canonical: "https://drspv.in/resources/glossary" },
};

export default function GlossaryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-16 sm:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-[10px] uppercase tracking-[3px] text-gold font-medium mb-4">
            Reference
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight">
            Tax & Finance Glossary
          </h1>
          <p className="mt-4 text-muted text-base sm:text-lg max-w-xl mx-auto">
            Every tax, finance and compliance term you need to know — explained
            in plain English by our Chartered Accountant team.
          </p>
        </div>
      </section>

      <GlossaryClient terms={glossaryData} />
    </>
  );
}
