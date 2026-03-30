"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917777970565";

type Act = "GST" | "IT" | "Companies Act" | "TDS";

interface Deadline {
  date: string;
  act: Act;
  name: string;
  appliesTo: string;
  penalty: string;
  status: "urgent" | "upcoming" | "normal" | "passed";
}

interface TaxCalendarProps {
  deadlines: Deadline[];
}

const filters: ("All" | Act)[] = ["All", "GST", "IT", "Companies Act", "TDS"];

const actBadge: Record<Act, string> = {
  GST: "bg-gst-green/15 text-gst-green",
  IT: "bg-it-blue/15 text-it-blue",
  "Companies Act": "bg-green/15 text-green",
  TDS: "bg-fema-purple/15 text-fema-purple",
};

const statusDot: Record<Deadline["status"], string> = {
  urgent: "bg-red animate-pulse",
  upcoming: "bg-ipo-amber",
  normal: "bg-green",
  passed: "bg-dim",
};

export default function TaxCalendar({ deadlines }: TaxCalendarProps) {
  const [filter, setFilter] = useState<"All" | Act>("All");

  const filtered =
    filter === "All" ? deadlines : deadlines.filter((d) => d.act === filter);

  return (
    <section className="w-full bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
            Compliance
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-4xl">
            Tax &amp; Compliance Calendar
          </h2>
        </div>

        {/* Filter bar */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                filter === f
                  ? "bg-gold text-bg"
                  : "border border-white/[0.06] bg-card text-muted hover:text-text"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-white/[0.06] bg-bg-3">
                <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted">
                  Act
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted">
                  Compliance
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted">
                  Applies To
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted">
                  Penalty
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted">
                  Remind
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((d, i) => (
                <tr
                  key={`${d.name}-${i}`}
                  className="border-b border-white/[0.04] transition-colors hover:bg-white/[0.02]"
                >
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block h-2.5 w-2.5 rounded-full ${statusDot[d.status]}`}
                    />
                  </td>
                  <td className="px-4 py-3 text-xs font-medium text-text whitespace-nowrap">
                    {d.date}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${actBadge[d.act]}`}
                    >
                      {d.act}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-text">{d.name}</td>
                  <td className="px-4 py-3 text-xs text-muted">
                    {d.appliesTo}
                  </td>
                  <td className="px-4 py-3 text-xs text-red">{d.penalty}</td>
                  <td className="px-4 py-3">
                    <a
                      href={`https://wa.me/${WA}?text=${encodeURIComponent(
                        `Hi DRSPV, please remind me about: ${d.name} due ${d.date}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-medium text-wa-green hover:underline"
                    >
                      <MessageCircle className="h-3 w-3" />
                      Remind
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-sm text-muted">
            No deadlines found for this filter.
          </p>
        )}
      </div>
    </section>
  );
}
