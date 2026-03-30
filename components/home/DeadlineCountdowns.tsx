"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import calendarData from "@/content/tax-calendar.json";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "911234567890";

interface CalendarEntry {
  id: string;
  dueDate: string;
  act: string;
  compliance: string;
  form: string;
  appliesTo: string;
  penalty: string;
  whatsappText: string;
  status: string;
}

const actColors: Record<string, { text: string; gradient: string }> = {
  GST: { text: "text-gst-green", gradient: "from-gst-green/60 to-gst-green/0" },
  "Income Tax": { text: "text-it-blue", gradient: "from-it-blue/60 to-it-blue/0" },
  "Companies Act": { text: "text-green", gradient: "from-green/60 to-green/0" },
  "TDS/TCS": { text: "text-ipo-amber", gradient: "from-ipo-amber/60 to-ipo-amber/0" },
  FEMA: { text: "text-fema-purple", gradient: "from-fema-purple/60 to-fema-purple/0" },
};

function getNextDeadlines(): CalendarEntry[] {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const upcoming = (calendarData as CalendarEntry[])
    .filter((d) => new Date(d.dueDate) >= now)
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());

  // Pick 3 deadlines with different act types for variety
  // Prioritize main Acts: GST, Income Tax, Companies Act
  const priorityActs = ["GST", "Income Tax", "Companies Act"];
  const picked: CalendarEntry[] = [];
  const seenActs = new Set<string>();

  // First pass: pick one from each priority act
  for (const act of priorityActs) {
    if (picked.length >= 3) break;
    const entry = upcoming.find((d) => d.act === act && !seenActs.has(d.act));
    if (entry) {
      seenActs.add(entry.act);
      picked.push(entry);
    }
  }

  // Fill remaining slots with other acts if needed
  for (const d of upcoming) {
    if (picked.length >= 3) break;
    if (!seenActs.has(d.act)) {
      seenActs.add(d.act);
      picked.push(d);
    }
  }

  // Sort picked by date
  picked.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());

  return picked;
}

function getTimeLeft(target: string) {
  const diff = new Date(target + "T23:59:59").getTime() - Date.now();
  if (diff <= 0) return { days: 0, hrs: 0, mins: 0, secs: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hrs: Math.floor((diff % 86400000) / 3600000),
    mins: Math.floor((diff % 3600000) / 60000),
    secs: Math.floor((diff % 60000) / 1000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function CountdownPanel({ entry }: { entry: CalendarEntry }) {
  const [time, setTime] = useState<{
    days: number;
    hrs: number;
    mins: number;
    secs: number;
  } | null>(null);

  useEffect(() => {
    setTime(getTimeLeft(entry.dueDate));
    const id = setInterval(() => setTime(getTimeLeft(entry.dueDate)), 1000);
    return () => clearInterval(id);
  }, [entry.dueDate]);

  const colors = actColors[entry.act] || actColors["GST"];

  const dueDateFormatted = new Date(entry.dueDate + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(entry.whatsappText)}`;

  return (
    <div className="relative flex flex-col items-center overflow-hidden rounded-xl border border-white/[0.06] bg-card p-6 text-center">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${colors.gradient}`} />

      <span className="mt-2 rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
        {entry.act}
      </span>

      <h3 className={`mt-2 text-lg font-bold ${colors.text}`}>{entry.form || entry.compliance.split(" ").slice(0, 3).join(" ")}</h3>
      <p className="mt-1 max-w-[260px] text-[11px] leading-relaxed text-muted">
        {entry.compliance}
      </p>
      <p className="mt-1 text-xs text-dim">Due: {dueDateFormatted}</p>

      <div className="mt-4 flex items-center gap-2">
        {(["days", "hrs", "mins", "secs"] as const).map((unit, i) => (
          <div key={unit} className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <span className="gold-gradient-text text-2xl font-bold tabular-nums sm:text-3xl">
                {time ? pad(time[unit]) : "--"}
              </span>
              <span className="mt-0.5 text-[10px] uppercase tracking-wider text-muted">
                {unit}
              </span>
            </div>
            {i < 3 && <span className="mb-4 text-lg text-dim">:</span>}
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-col items-center gap-1.5">
        <span className="text-[10px] text-dim">
          Applies to: {entry.appliesTo}
        </span>
        <span className="text-[10px] text-red/80">
          Penalty: {entry.penalty.length > 60 ? entry.penalty.slice(0, 57) + "..." : entry.penalty}
        </span>
      </div>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-xs font-semibold text-bg transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
      >
        <MessageCircle className="h-3.5 w-3.5" />
        Remind me on WhatsApp
      </a>
    </div>
  );
}

export default function DeadlineCountdowns() {
  const [deadlines, setDeadlines] = useState<CalendarEntry[]>([]);

  useEffect(() => {
    setDeadlines(getNextDeadlines());
  }, []);

  if (deadlines.length === 0) return null;

  return (
    <section className="w-full bg-bg py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
            Stay Compliant
          </span>
          <h2 className="text-2xl font-medium tracking-tight text-text sm:text-3xl">
            Upcoming Deadlines
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[13px] text-muted">
            Never miss a compliance deadline. These are the next 3 due dates — get WhatsApp reminders before each one.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {deadlines.map((d) => (
            <CountdownPanel key={d.id} entry={d} />
          ))}
        </div>

        <p className="mt-6 text-center text-[11px] text-dim">
          View all {calendarData.length} deadlines →{" "}
          <a href="/resources/tax-calendar" className="text-gold hover:underline">
            Full Tax Calendar
          </a>
        </p>
      </div>
    </section>
  );
}
