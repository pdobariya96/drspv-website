"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[+\d\s()-]+$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  "Income Tax Advisory & Filing",
  "GST Registration & Compliance",
  "Audit & Assurance",
  "Company Incorporation",
  "FEMA & NRI Advisory",
  "IPO & Capital Markets",
  "Startup Advisory",
  "CFO Services",
  "Global Accounting & Outsourcing",
  "Due Diligence & Valuations",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    setServerError("");
    const text = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service: ${data.service}`,
      `Message: ${data.message}`,
    ].join("\n");
    window.open(
      `https://wa.me/917777970565?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-14 h-14 rounded-full bg-green/10 flex items-center justify-center mb-4">
          <CheckCircle2 className="h-7 w-7 text-green" />
        </div>
        <h3 className="text-lg font-bold text-text mb-1">Message Sent!</h3>
        <p className="text-sm text-muted max-w-xs">
          We&apos;ve received your enquiry and will get back to you within 24
          hours. Check your email for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-muted mb-1.5">
            Full Name *
          </label>
          <input
            {...register("name")}
            placeholder="Rajesh Patel"
            className="w-full rounded-lg bg-bg-2 border border-white/[0.06] px-4 py-2.5 text-sm text-text placeholder:text-dim focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-colors"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-medium text-muted mb-1.5">
            Phone Number *
          </label>
          <input
            {...register("phone")}
            placeholder="+91 98765 43210"
            className="w-full rounded-lg bg-bg-2 border border-white/[0.06] px-4 py-2.5 text-sm text-text placeholder:text-dim focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-colors"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-muted mb-1.5">
          Email Address *
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-lg bg-bg-2 border border-white/[0.06] px-4 py-2.5 text-sm text-text placeholder:text-dim focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-colors"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-medium text-muted mb-1.5">
          Service Required *
        </label>
        <select
          {...register("service")}
          className="w-full rounded-lg bg-bg-2 border border-white/[0.06] px-4 py-2.5 text-sm text-text focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-colors appearance-none"
          defaultValue=""
        >
          <option value="" disabled className="text-dim">
            Select a service
          </option>
          {services.map((s) => (
            <option key={s} value={s} className="bg-card text-text">
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1 text-xs text-red">{errors.service.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-medium text-muted mb-1.5">
          Your Message *
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us about your requirements..."
          className="w-full rounded-lg bg-bg-2 border border-white/[0.06] px-4 py-2.5 text-sm text-text placeholder:text-dim focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-colors resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red">{errors.message.message}</p>
        )}
      </div>

      {serverError && (
        <p className="text-sm text-red text-center">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-bg transition-all duration-200 hover:bg-gold-2 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
