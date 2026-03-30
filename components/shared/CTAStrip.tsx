"use client";

import { MessageCircle, Phone } from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "911234567890";
const PH = process.env.NEXT_PUBLIC_PHONE || WA;

interface CTAStripProps {
  heading: string;
  subtext: string;
}

export default function CTAStrip({ heading, subtext }: CTAStripProps) {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hello DRSPV, I need help with..."
  )}`;
  const callLink = `tel:+${PH}`;

  return (
    <section className="w-full bg-gradient-to-r from-[#0B1628] via-[#111F38] to-[#0B1628] border-y border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-text mb-1">
            {heading}
          </h3>
          <p className="text-muted text-sm">{subtext}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-wa-green px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-wa-green/20 transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={callLink}
            className="inline-flex items-center gap-2 rounded-lg border border-gold/40 px-6 py-2.5 text-sm font-semibold text-gold transition-all duration-200 hover:bg-gold/10 hover:border-gold/60 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
        </div>
      </div>
    </section>
  );
}
