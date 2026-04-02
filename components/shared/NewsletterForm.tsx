"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
});

type FormData = z.infer<typeof schema>;

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(`Newsletter Subscription: ${data.email}`);
    window.open(`mailto:info@drspv.in?subject=${subject}`, "_blank");
    setStatus("success");
    setMessage("Thank you! We'll add you to our newsletter.");
    reset();
  };

  return (
    <div className="rounded-xl bg-card border border-stone-200 p-6 sm:p-8">
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-text mb-1">Stay Updated</h3>
        <p className="text-muted text-sm">
          Weekly insights on tax, compliance & business growth from our CAs.
        </p>
      </div>

      {status === "success" ? (
        <div className="flex items-start gap-3 rounded-lg bg-green/10 border border-green/20 p-4">
          <CheckCircle className="h-5 w-5 text-green shrink-0 mt-0.5" />
          <p className="text-sm text-green">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted pointer-events-none" />
              <input
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                {...register("email")}
                className={`w-full rounded-lg bg-bg-2 border ${
                  errors.email ? "border-red/50" : "border-stone-200"
                } py-3 pl-10 pr-4 text-sm text-text placeholder:text-dim outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/30`}
              />
            </div>
            {errors.email && (
              <p className="mt-1.5 text-xs text-red">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-lg bg-gold px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gold-2 hover:shadow-lg hover:shadow-gold/15 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
          >
            {status === "loading" ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Subscribing...
              </span>
            ) : (
              "Subscribe"
            )}
          </button>

          {status === "error" && (
            <div className="flex items-start gap-2 rounded-lg bg-red/10 border border-red/20 p-3">
              <AlertCircle className="h-4 w-4 text-red shrink-0 mt-0.5" />
              <p className="text-xs text-red">{message}</p>
            </div>
          )}

          <p className="text-[11px] text-dim text-center">
            No spam. Unsubscribe anytime.
          </p>
        </form>
      )}
    </div>
  );
}
