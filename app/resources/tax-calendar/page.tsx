import type { Metadata } from "next";
import deadlines from "@/data/tax-calendar.json";
import TaxCalendarClient from "./TaxCalendarClient";

export const metadata: Metadata = {
  title: "Tax Calendar FY 2025-27",
  description:
    "Complete tax compliance calendar for FY 2025-27 with GST, Income Tax, TDS and Companies Act deadlines, countdown timers, and penalty information.",
  alternates: { canonical: "https://drspv.in/resources/tax-calendar" },
};

export default function TaxCalendarPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-16 sm:py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block text-[10px] uppercase tracking-[3px] text-gold font-medium mb-4">
            Compliance Calendar
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight">
            Tax Calendar FY 2025-27
          </h1>
          <p className="mt-4 text-muted text-base sm:text-lg max-w-xl mx-auto">
            Never miss a deadline. Track every GST, Income Tax, TDS and
            Companies Act due date with live countdown timers and penalty
            details.
          </p>
        </div>
      </section>

      {/* Client interactive section */}
      <TaxCalendarClient deadlines={deadlines} />
    </>
  );
}
