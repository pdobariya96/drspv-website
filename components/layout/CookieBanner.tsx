"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "drspv_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // Small delay for page load
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[55] transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Gold top border */}
      <div
        className="h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, #C9A84C 0%, #E8C55A 40%, #F5D98A 70%, #E8C55A 100%)",
        }}
      />

      <div className="bg-card border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Left: Text */}
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="h-5 w-5 text-gold shrink-0 mt-0.5" />
            <p className="text-sm text-muted leading-relaxed">
              We use cookies to improve your experience and analyze site traffic.
              By continuing, you agree to our{" "}
              <Link
                href="/about"
                className="text-gold underline underline-offset-2 hover:text-gold-2 transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleDecline}
              className="rounded-lg border border-white/[0.1] px-5 py-2 text-sm font-medium text-muted hover:text-text hover:bg-white/[0.04] transition-all"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="rounded-lg bg-gold px-5 py-2 text-sm font-semibold text-bg hover:bg-gold-2 transition-all active:scale-[0.97]"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
