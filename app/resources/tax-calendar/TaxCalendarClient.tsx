"use client";

import { useState, useEffect } from "react";
import { CalendarDays, AlertTriangle, Filter } from "lucide-react";

interface Deadline {
  date: string;
  act: string;
  name: string;
  appliesTo: string;
  penalty: string;
}

const filters = ["All", "GST", "Income Tax", "Companies Act", "TDS"];

const actColors: Record<string, string> = {
  GST: "bg-gst-green/10 text-gst-green border-gst-green/30",
  "Income Tax": "bg-it-blue/10 text-it-blue border-it-blue/30",
  "Companies Act": "bg-dd-indigo/10 text-dd-indigo border-dd-indigo/30",
  TDS: "bg-ipo-amber/10 text-ipo-amber border-ipo-amber/30",
};

function getStatus(dateStr: string): "passed" | "urgent" | "soon" | "upcoming" {
  const now = new Date();
  const d = new Date(dateStr + "T00:00:00");
  const diff = d.getTime() - now.getTime();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  if (days < 0) return "passed";
  if (days <= 3) return "urgent";
  if (days <= 14) return "soon";
  return "upcoming";
}

function statusDot(status: string) {
  switch (status) {
    case "passed":
      return "bg-dim";
    case "urgent":
      return "bg-red animate-pulse";
    case "soon":
      return "bg-ipo-amber";
    case "upcoming":
      return "bg-green";
    default:
      return "bg-dim";
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function DeadlineCountdown({ deadline }: { deadline: Deadline }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const target = new Date(deadline.date + "T23:59:59").getTime();
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [deadline.date]);

  const status = getStatus(deadline.date);
  const borderColor =
    status === "urgent"
      ? "border-red/40"
      : status === "soon"
        ? "border-ipo-amber/30"
        : "border-green/30";

  return (
    <div
      className={`rounded-xl bg-card border ${borderColor} p-5 transition-all`}
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className={`text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded border ${actColors[deadline.act] || "bg-dim/10 text-dim border-dim/30"}`}
        >
          {deadline.act}
        </span>
        <span className="text-xs text-muted">{formatDate(deadline.date)}</span>
      </div>
      <h3 className="text-sm font-bold text-text mb-3 leading-snug">
        {deadline.name}
      </h3>
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hrs", value: timeLeft.hours },
          { label: "Min", value: timeLeft.mins },
          { label: "Sec", value: timeLeft.secs },
        ].map((unit) => (
          <div
            key={unit.label}
            className="text-center rounded-lg bg-bg-2 py-2"
          >
            <div className="text-lg font-bold text-text tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-[10px] text-muted uppercase tracking-wider">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TaxCalendarClient({
  deadlines,
}: {
  deadlines: Deadline[];
}) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showPassed, setShowPassed] = useState(false);

  const filtered = (activeFilter === "All"
    ? deadlines
    : deadlines.filter((d) => d.act === activeFilter)
  ).filter((d) => showPassed || getStatus(d.date) !== "passed");

  const now = new Date();
  const upcoming = deadlines
    .filter((d) => new Date(d.date + "T23:59:59") >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  return (
    <>
      {/* Countdown Panels */}
      <section className="bg-bg-2 py-12 px-4 border-y border-stone-200">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="h-4 w-4 text-ipo-amber" />
            <h2 className="text-sm font-semibold text-text">
              Next Upcoming Deadlines
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcoming.map((d, i) => (
              <DeadlineCountdown key={i} deadline={d} />
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar + Table */}
      <section className="bg-bg py-12 px-4">
        <div className="mx-auto max-w-7xl">
          {/* Filter Bar */}
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            <Filter className="h-4 w-4 text-muted" />
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-gold text-bg"
                    : "bg-card border border-stone-200 text-muted hover:text-text hover:border-gold/30"
                }`}
              >
                {f}
              </button>
            ))}
            <button
              onClick={() => setShowPassed(!showPassed)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                showPassed
                  ? "bg-dim/20 border border-dim/40 text-text"
                  : "bg-card border border-stone-200 text-muted hover:text-text hover:border-gold/30"
              }`}
            >
              {showPassed ? "Hide Past" : "Show Past"}
            </button>
            <span className="ml-auto text-xs text-dim">
              {filtered.length} deadline{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Table */}
          <div className="rounded-xl border border-stone-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-card/80 border-b border-stone-200">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider w-8">
                      &nbsp;
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider">
                      Date
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider">
                      Act
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider">
                      Compliance
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider hidden lg:table-cell">
                      Applies To
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider hidden md:table-cell">
                      Penalty
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {filtered.map((d, i) => {
                    const status = getStatus(d.date);
                    return (
                      <tr
                        key={i}
                        className={`transition-colors hover:bg-card/40 ${status === "passed" ? "opacity-40" : ""}`}
                      >
                        <td className="px-4 py-3">
                          <span
                            className={`inline-block w-2.5 h-2.5 rounded-full ${statusDot(status)}`}
                          />
                        </td>
                        <td className="px-4 py-3 text-text font-medium whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-3.5 w-3.5 text-muted" />
                            {formatDate(d.date)}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-block text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded border ${actColors[d.act] || "bg-dim/10 text-dim border-dim/30"}`}
                          >
                            {d.act}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-text max-w-xs">
                          {d.name}
                        </td>
                        <td className="px-4 py-3 text-muted text-xs hidden lg:table-cell max-w-xs">
                          {d.appliesTo}
                        </td>
                        <td className="px-4 py-3 text-muted text-xs hidden md:table-cell max-w-xs">
                          {d.penalty}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-muted">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green" /> Upcoming
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-ipo-amber" /> Due
              Soon (14 days)
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red animate-pulse" />{" "}
              Urgent (3 days)
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-dim" /> Passed
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
