import type { Metadata } from "next";
import downloadsData from "@/data/downloads.json";
import DownloadsClient from "./DownloadsClient";

export const metadata: Metadata = {
  title: "Free Downloads",
  description:
    "Download free tax checklists, GST compliance calendars, TDS rate charts, startup guides and FEMA resources from DRSPV & Associates, Chartered Accountants.",
  alternates: { canonical: "https://drspv.in/resources/downloads" },
};

export default function DownloadsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-16 sm:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-[10px] uppercase tracking-[3px] text-gold font-medium mb-4">
            Free Resources
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight">
            Free Downloads
          </h1>
          <p className="mt-4 text-muted text-base sm:text-lg max-w-xl mx-auto">
            Curated checklists, rate charts, compliance calendars, and guides
            prepared by our CA team. Download instantly.
          </p>
        </div>
      </section>

      <DownloadsClient downloads={downloadsData} />
    </>
  );
}
