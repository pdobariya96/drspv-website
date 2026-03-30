"use client";

import { MessageCircle } from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "911234567890";

export default function FloatingWhatsApp() {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hello DRSPV, I need help with..."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 group">
      {/* Tooltip */}
      <span className="absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg bg-card px-3 py-1.5 text-xs font-medium text-text shadow-xl border border-white/[0.06] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
        Chat with us on WhatsApp
      </span>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-wa-green text-white shadow-lg shadow-wa-green/30 transition-all duration-200 hover:scale-110 hover:shadow-wa-green/40 active:scale-95 animate-bounce-slow"
      >
        <MessageCircle className="h-5 w-5" />
      </a>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
