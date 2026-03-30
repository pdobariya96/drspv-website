"use client";

import { useState, useEffect } from "react";

interface ArticleFeedbackProps {
  slug: string;
  type?: "blog" | "knowledge";
}

type VoteState = "default" | "yes" | "no";

export default function ArticleFeedback({ slug, type = "blog" }: ArticleFeedbackProps) {
  const [vote, setVote] = useState<VoteState>("default");
  const storageKey = `feedback_${slug}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved === "yes" || saved === "no") {
      setVote(saved);
    }
  }, [storageKey]);

  const handleVote = (choice: "yes" | "no") => {
    setVote(choice);
    localStorage.setItem(storageKey, choice);
  };

  return (
    <div
      className="bg-card-2 border border-gold/[0.08] px-6 py-5 text-center mx-auto max-w-md"
      style={{ borderWidth: "0.5px", borderRadius: "10px", padding: "20px 24px" }}
    >
      <p className="text-gold uppercase tracking-[0.12em] font-semibold mb-2" style={{ fontSize: "10px" }}>
        Quick Feedback
      </p>

      {vote === "default" && (
        <>
          <p className="text-text mb-4" style={{ fontSize: "14px" }}>
            Was this article helpful?
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => handleVote("yes")}
              className="flex items-center gap-1.5 px-5 py-2 text-sm rounded-lg bg-bg-3 border border-border-2 text-text hover:border-green/40 hover:bg-green/10 hover:text-green transition-all duration-200"
            >
              <span>👍</span> Yes
            </button>
            <button
              onClick={() => handleVote("no")}
              className="flex items-center gap-1.5 px-5 py-2 text-sm rounded-lg bg-bg-3 border border-border-2 text-text hover:border-red/40 hover:bg-red/10 hover:text-red transition-all duration-200"
            >
              <span>👎</span> No
            </button>
          </div>
        </>
      )}

      {vote === "yes" && (
        <p className="text-sm text-muted">
          Thank you! We&apos;re glad it helped.
        </p>
      )}

      {vote === "no" && (
        <p className="text-sm text-muted">
          Thanks for the feedback — we&apos;ll improve it.
        </p>
      )}
    </div>
  );
}
