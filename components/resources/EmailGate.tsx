"use client";

import { Download } from "lucide-react";

/**
 * Previously gated downloads behind an email form.
 * Now provides a direct download button (no API needed for static export).
 */
export default function EmailGate() {
  return (
    <div className="mx-auto max-w-md rounded-xl border border-white/[0.06] bg-card p-8 text-center">
      <div className="mb-6 flex flex-col items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
          <Download className="h-5 w-5 text-gold" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-text">Free Download</h3>
          <p className="text-xs text-muted mt-1">
            Click the button below to download the resource.
          </p>
        </div>
      </div>

      <a
        href="/downloads"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-bg transition-all duration-200 hover:brightness-110"
      >
        <Download className="h-4 w-4" />
        Browse Downloads
      </a>
    </div>
  );
}
