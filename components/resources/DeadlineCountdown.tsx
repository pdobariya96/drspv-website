"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "911234567890";

interface DeadlineCountdownProps {
  name: string;
  dueDate: string; // ISO date
  act: string;
  color: string; // tailwind color class like "text-gst-green"
}

function getTimeLeft(target: string) {
  const diff = new Date(target).getTime() - Date.now();
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

// Map color classes to gradient classes
function colorToGradient(color: string): string {
  if (color.includes("gst-green")) return "from-gst-green/60 to-gst-green/0";
  if (color.includes("it-blue")) return "from-it-blue/60 to-it-blue/0";
  if (color.includes("ipo-amber")) return "from-ipo-amber/60 to-ipo-amber/0";
  if (color.includes("fema-purple"))
    return "from-fema-purple/60 to-fema-purple/0";
  if (color.includes("green")) return "from-green/60 to-green/0";
  if (color.includes("red")) return "from-red/60 to-red/0";
  return "from-gold/60 to-gold/0";
}

export default function DeadlineCountdown({
  name,
  dueDate,
  act,
  color,
}: DeadlineCountdownProps) {
  const [time, setTime] = useState<{ days: number; hrs: number; mins: number; secs: number } | null>(null);

  useEffect(() => {
    setTime(getTimeLeft(dueDate));
    const id = setInterval(() => setTime(getTimeLeft(dueDate)), 1000);
    return () => clearInterval(id);
  }, [dueDate]);

  const dueDateFormatted = new Date(dueDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    `Hi DRSPV, please remind me about ${name} (${act}) deadline on ${dueDateFormatted}.`
  )}`;

  const gradient = colorToGradient(color);

  return (
    <div className="relative flex flex-col items-center overflow-hidden rounded-xl border border-white/[0.06] bg-card p-6 text-center">
      {/* Top gradient bar */}
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradient}`}
      />

      <span className="mt-2 rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-semibold text-muted">
        {act}
      </span>

      <h3 className={`mt-3 text-lg font-bold ${color}`}>{name}</h3>
      <p className="mt-1 text-xs text-muted">Due: {dueDateFormatted}</p>

      {/* Countdown */}
      <div className="mt-5 flex items-center gap-2">
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
            {i < 3 && (
              <span className="mb-4 text-lg text-dim">:</span>
            )}
          </div>
        ))}
      </div>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-xs font-semibold text-bg transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
      >
        <MessageCircle className="h-3.5 w-3.5" />
        Remind me on WhatsApp
      </a>
    </div>
  );
}
