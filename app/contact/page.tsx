import type { Metadata } from "next";
import {
  MessageCircle,
  Phone,
  Mail,
  CalendarClock,
  ArrowRight,
  MapPin,
  Globe,
  Clock,
  Building2,
} from "lucide-react";
import LiveDot from "@/components/shared/LiveDot";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with DRSPV & Associates, Chartered Accountants in Rajkot. Reach us via WhatsApp, phone, email or schedule a consultation for tax, audit, GST, and business advisory services.",
  alternates: { canonical: "https://drspv.in/contact" },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "911234567890";
const PH = process.env.NEXT_PUBLIC_PHONE || WA;

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp Us",
    subtitle: "Fastest response — usually within 15 minutes",
    href: `https://wa.me/${WA}?text=${encodeURIComponent("Hello DRSPV, I need help with...")}`,
    external: true,
    accent: "bg-wa-green/10 text-wa-green",
  },
  {
    icon: Phone,
    title: "Call Us",
    subtitle: "+91 12345 67890 — Mon to Sat, 9 AM - 9 PM",
    href: `tel:+${PH}`,
    external: false,
    accent: "bg-it-blue/10 text-it-blue",
  },
  {
    icon: Mail,
    title: "Email Us",
    subtitle: "info@drspv.in — Response within 24 hours",
    href: "mailto:info@drspv.in",
    external: false,
    accent: "bg-gold/10 text-gold",
  },
  {
    icon: CalendarClock,
    title: "Schedule a Call",
    subtitle: "Book a free 15-minute consultation",
    href: "#contact-form",
    external: false,
    accent: "bg-fema-purple/10 text-fema-purple",
  },
];

const infoCards = [
  {
    icon: Building2,
    label: "Office Address",
    value: "510, RK World Tower, Sheetal Park, 150 Ft. Ring Road, Rajkot - 360006, Gujarat",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91 12345 67890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@drspv.in",
  },
  {
    icon: Globe,
    label: "International Enquiries",
    value: "info@drspv.in",
  },
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 9:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
  { day: "Sunday", hours: "Closed" },
  { day: "Public Holidays", hours: "By appointment only" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-bg py-16 sm:py-24 px-4">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div>
            <LiveDot label="Accepting new enquiries" />
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight leading-tight">
              Let&apos;s Discuss Your Requirements
            </h1>
            <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed max-w-lg">
              Whether you need help with tax filing, GST compliance, company
              incorporation, or any financial advisory — our team of qualified
              Chartered Accountants is ready to assist you.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {contactMethods.map((m) => (
                <a
                  key={m.title}
                  href={m.href}
                  {...(m.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-start gap-4 rounded-xl bg-card/60 border border-white/[0.06] p-4 transition-all duration-200 hover:bg-card hover:border-gold/20"
                >
                  <div
                    className={`shrink-0 w-10 h-10 rounded-lg ${m.accent} flex items-center justify-center`}
                  >
                    <m.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-text">{m.title}</p>
                    <p className="text-xs text-muted mt-0.5 leading-relaxed">
                      {m.subtitle}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted shrink-0 mt-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gold" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div id="contact-form">
            <div className="rounded-2xl bg-card border border-white/[0.06] overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-gold to-gold-2" />
              <div className="p-6 sm:p-8">
                <h2 className="text-xl font-bold text-text mb-1">
                  Send us a message
                </h2>
                <p className="text-sm text-muted mb-6">
                  Fill in the details below and we&apos;ll get back to you within 24
                  hours.
                </p>
                <ContactForm />
                <p className="mt-4 text-xs text-muted text-center">
                  Or{" "}
                  <a
                    href={`https://wa.me/${WA}?text=${encodeURIComponent("Hello DRSPV, I need help with...")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wa-green hover:underline font-medium"
                  >
                    WhatsApp us
                  </a>{" "}
                  for a faster response
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="bg-bg-2 py-12 px-4 border-y border-white/[0.06]">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {infoCards.map((c) => (
            <div
              key={c.label}
              className="rounded-xl bg-card/60 border border-white/[0.06] p-5"
            >
              <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center mb-3">
                <c.icon className="h-4.5 w-4.5 text-gold" />
              </div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">
                {c.label}
              </p>
              <p className="text-sm text-text font-medium leading-relaxed">
                {c.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Map + Office Hours */}
      <section className="bg-bg py-16 px-4">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="rounded-2xl bg-card border border-white/[0.06] overflow-hidden flex flex-col items-center justify-center min-h-[350px] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
            <div className="relative z-10 text-center p-8">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-text mb-2">
                DRSPV & Associates
              </h3>
              <p className="text-sm text-muted mb-4 max-w-xs mx-auto">
                510, RK World Tower, Sheetal Park,
                <br />
                150 Ft. Ring Road, Rajkot - 360006
              </p>
              <a
                href="https://maps.google.com/?q=RK+World+Tower+Rajkot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-2 transition-colors"
              >
                <MapPin className="h-4 w-4" />
                View on Google Maps
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Office Hours */}
          <div className="rounded-2xl bg-card border border-white/[0.06] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text">Office Hours</h3>
                <p className="text-xs text-muted">
                  IST (Indian Standard Time, UTC+5:30)
                </p>
              </div>
            </div>
            <div className="space-y-0 divide-y divide-white/[0.06]">
              {officeHours.map((row) => (
                <div
                  key={row.day}
                  className="flex items-center justify-between py-4"
                >
                  <span className="text-sm text-muted">{row.day}</span>
                  <span
                    className={`text-sm font-medium ${
                      row.hours === "Closed" ? "text-red" : "text-text"
                    }`}
                  >
                    {row.hours}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-wa-green/5 border border-wa-green/20 p-4 flex items-start gap-3">
              <MessageCircle className="h-5 w-5 text-wa-green shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-text">
                  Available 24/7 on WhatsApp
                </p>
                <p className="text-xs text-muted mt-0.5">
                  Send your query anytime. We respond on the next business day
                  for after-hours messages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Strip */}
      <section className="w-full bg-gradient-to-r from-[#0B1628] via-[#111F38] to-[#0B1628] border-y border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-text mb-1">
              Prefer a quick chat?
            </h3>
            <p className="text-muted text-sm">
              Most clients get a response within 15 minutes on WhatsApp.
            </p>
          </div>
          <a
            href={`https://wa.me/${WA}?text=${encodeURIComponent("Hello DRSPV, I need help with...")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg bg-wa-green px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-wa-green/20 transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </>
  );
}
