"use client";

import { MessageCircle, Phone } from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "911234567890";
const PH = process.env.NEXT_PUBLIC_PHONE || WA;

export default function WhatsAppCTA() {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hello DRSPV, I need help with..."
  )}`;
  const callLink = `tel:+${PH}`;

  return (
    <section className="w-full bg-gradient-to-r from-[#0B1628] via-[#0F1E35] to-[#0B1628] border-y border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14 flex flex-col items-center gap-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
          Stop worrying. Talk to us today.
        </h2>
        <p className="text-muted text-sm sm:text-base max-w-xl">
          Our qualified CAs are ready to help you navigate taxes, compliance, and
          business growth. Reach out now.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg bg-wa-green px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-wa-green/20 transition-all duration-200 hover:brightness-110 hover:shadow-wa-green/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us
          </a>
          <a
            href={callLink}
            className="inline-flex items-center gap-2.5 rounded-lg border border-gold/40 bg-transparent px-7 py-3 text-sm font-semibold text-gold transition-all duration-200 hover:bg-gold/10 hover:border-gold/60 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone className="h-4.5 w-4.5" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
