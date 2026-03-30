import type { Metadata } from "next";
import Image from "next/image";
// next/link used via child components
import {
  Shield,
  Globe,
  Users,
  Clock,
  Building2,
  Scale,
  Lock,
  MapPin,
  Phone,
  Mail,
  Award,
  Briefcase,
  Target,
  Zap,
} from "lucide-react";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about DRSPV & Associates, a trusted Chartered Accountancy firm in Rajkot, Gujarat offering expert tax advisory, audit, GST, FEMA, IPO consultancy and global accounting services across India and abroad.",
  alternates: { canonical: "https://drspv.in/about" },
  openGraph: {
    title: "About DRSPV & Associates — Chartered Accountants",
    description:
      "Trusted CA firm built on expertise and integrity. 500+ clients served across 4 countries.",
    url: "https://drspv.in/about",
  },
};

const trustPills = [
  { icon: Shield, label: "ICAI Registered" },
  { icon: Globe, label: "4 Countries Served" },
  { icon: Users, label: "500+ Clients" },
  { icon: Clock, label: "48hr Response" },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "IPOs Handled" },
  { value: "4", label: "Countries" },
];

const storySections = [
  {
    title: "How It Began",
    text: "DRSPV & Associates was founded with a clear mission: to provide businesses with accessible, high-quality chartered accountancy services that go beyond mere compliance. Our founding partners, each with over a decade of experience across taxation, audit, and corporate advisory, came together to build a firm rooted in technical depth, client-first thinking, and a commitment to timely delivery. Based in Rajkot with a growing footprint across Gujarat, we serve clients ranging from early-stage startups to publicly listed companies.",
  },
  {
    title: "Where We Stand Today",
    text: "Today, DRSPV & Associates is recognised as one of the most responsive and technically proficient CA firms in the region. We have expanded our practice across income tax advisory, GST compliance, statutory audits, FEMA advisory, IPO consultancy, and global accounting outsourcing. Our team supports clients in India, the USA, the UK, and Australia, blending deep Indian regulatory expertise with international standards of service delivery.",
  },
];

const values = [
  {
    icon: Target,
    title: "Client-First",
    desc: "Every engagement starts with understanding your business before advising on compliance.",
  },
  {
    icon: Scale,
    title: "Compliance-Driven",
    desc: "We stay ahead of regulatory changes so your business never falls behind.",
  },
  {
    icon: Zap,
    title: "48hr Response",
    desc: "Every query gets a substantive response within 48 hours, guaranteed.",
  },
  {
    icon: Lock,
    title: "Confidential",
    desc: "Strict data protection protocols and NDA-backed engagement for every client.",
  },
];

const teamMembers = [
  {
    initials: "PD",
    name: "Mr. Prashant D. Dobariya",
    credentials: "CA (ICAI), B.Com, NISM (Derivatives)",
    role: "Principal",
    photo: "/images/team/prashant-dobariya.jpg",
    description:
      "Expert in the field of Consulting & Advisory Services, Statutory Auditor, Internal Auditor.",
    skills: ["Consulting & Advisory", "Statutory Audit", "Internal Audit"],
    color: "gold",
  },
  {
    initials: "VC",
    name: "Mr. Vrajkishor R. Changani",
    credentials: "CA (ICAI), B.Com, NISM (Derivatives)",
    role: "Principal",
    photo: "/images/team/vrajkishor-changani.jpg",
    description:
      "Investment Planner, Services in the field of Audit and Assurance, Taxation and its related matters.",
    skills: ["Investment Planning", "Audit & Assurance", "Taxation"],
    color: "it-blue",
  },
  {
    initials: "SV",
    name: "Mr. Sreekunj N. Vasoya",
    credentials: "CA (ICAI), DISA (ICAI), B.Com, NISM (Derivatives)",
    role: "Principal",
    photo: "/images/team/sreekunj-vasoya.jpg",
    description:
      "Expert in the field of Consulting & Advisory Services and Bank Audit.",
    skills: ["Consulting & Advisory", "Bank Audit"],
    color: "gst-green",
  },
];

const offices = [
  {
    city: "Rajkot",
    label: "Headquarters",
    address: "510, RK World Tower, Sheetal Park, 150 Ft. Ring Road, Rajkot 360006, Gujarat",
    phone: "+91-XXX-XXX-XXXX",
    email: "info@drspv.in",
    highlight: true,
  },
  {
    city: "Ahmedabad",
    label: "Branch Office",
    address: "Ahmedabad, Gujarat",
    phone: "+91-XXX-XXX-XXXX",
    email: "info@drspv.in",
    highlight: false,
  },
  {
    city: "International",
    label: "Virtual Office",
    address: "Serving clients in USA, UK & Australia remotely",
    phone: "Via WhatsApp",
    email: "info@drspv.in",
    highlight: false,
  },
];

const colorMap: Record<string, string> = {
  gold: "border-gold bg-gold/10 text-gold",
  "it-blue": "border-it-blue bg-it-blue/10 text-it-blue",
  "gst-green": "border-gst-green bg-gst-green/10 text-gst-green",
};

const topColorMap: Record<string, string> = {
  gold: "bg-gold",
  "it-blue": "bg-it-blue",
  "gst-green": "bg-gst-green",
};

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-bg">
        <div className="absolute inset-0 grid-bg" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gold/[0.06] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-16 sm:pt-36 sm:pb-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Left column */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-gold/20 bg-gold/[0.08] px-4 py-1.5">
                <span className="text-xs font-medium text-gold tracking-wide">
                  About DRSPV &amp; Associates
                </span>
              </div>

              <h1 className="text-3xl font-bold leading-tight tracking-tight text-text sm:text-4xl lg:text-5xl">
                Trusted CA Firm Built on{" "}
                <span className="gold-gradient-text">
                  Expertise &amp; Integrity
                </span>
              </h1>

              <p className="mt-6 text-base text-muted leading-relaxed">
                DRSPV &amp; Associates is a full-service Chartered Accountancy firm headquartered in
                Rajkot, Gujarat. We provide end-to-end financial, tax, and advisory services to
                businesses of all sizes, from bootstrapped startups to companies preparing for public
                listing. Our practice spans income tax, GST, audit, FEMA, IPO consultancy, and
                global accounting outsourcing.
              </p>

              <p className="mt-4 text-base text-muted leading-relaxed">
                What sets us apart is our commitment to direct partner involvement in every
                engagement, rapid turnaround times, and a deep understanding of both Indian
                regulations and international compliance standards. We believe every business
                deserves a CA who is responsive, technically sound, and genuinely invested in their
                growth.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {trustPills.map((pill) => (
                  <div
                    key={pill.label}
                    className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-card/50 px-4 py-2"
                  >
                    <pill.icon className="h-3.5 w-3.5 text-gold" />
                    <span className="text-xs font-medium text-muted">{pill.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Firm details card */}
            <div className="rounded-2xl border border-gold/20 bg-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 border border-gold/20">
                  <Award className="h-7 w-7 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text">DRSPV &amp; Associates</h3>
                  <p className="text-sm text-muted">Chartered Accountants</p>
                </div>
              </div>

              <div className="space-y-4 border-t border-white/[0.06] pt-6">
                <div className="flex items-start gap-3">
                  <Briefcase className="h-4 w-4 text-gold mt-0.5" />
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">Firm Type</p>
                    <p className="text-sm text-text">Partnership Firm, ICAI Registered</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="h-4 w-4 text-gold mt-0.5" />
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">Established</p>
                    <p className="text-sm text-text">2023</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-4 w-4 text-gold mt-0.5" />
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">Jurisdictions</p>
                    <p className="text-sm text-text">India, USA, UK, Australia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-4 w-4 text-gold mt-0.5" />
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">Practice Areas</p>
                    <p className="text-sm text-text">
                      Tax, Audit, GST, FEMA, IPO, CFO Services, Global Accounting
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-gold mt-0.5" />
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">Head Office</p>
                    <p className="text-sm text-text">Rajkot, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-bg-2 border-y border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <span className="gold-gradient-text text-3xl font-bold tracking-tight sm:text-4xl">
                  {s.value}
                </span>
                <p className="mt-1 text-xs text-muted uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Our Story ─── */}
      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-gold/20 bg-gold/[0.08] px-4 py-1.5">
            <span className="text-xs font-medium text-gold tracking-wide">Our Story</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl mb-12">
            Building a Modern CA Practice
          </h2>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left - Story sections */}
            <div className="space-y-10">
              {storySections.map((section) => (
                <div key={section.title} className="border-l-2 border-gold/40 pl-6">
                  <h3 className="text-lg font-semibold text-text mb-3">{section.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{section.text}</p>
                </div>
              ))}
            </div>

            {/* Right - Values grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-xl border border-white/[0.06] bg-card p-6 transition-colors hover:border-gold/20"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                    <v.icon className="h-5 w-5 text-gold" />
                  </div>
                  <h4 className="text-sm font-semibold text-text mb-1">{v.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── Team ─── */}
      <section className="bg-bg-2">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-gold/20 bg-gold/[0.08] px-4 py-1.5">
            <span className="text-xs font-medium text-gold tracking-wide">Our Team</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl mb-4">
            Meet the Partners
          </h2>
          <p className="text-muted text-sm max-w-2xl mb-12">
            Every client works directly with a qualified Chartered Accountant. No layers, no delays
            &#8212; just expert advice from experienced professionals.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-white/[0.06] bg-card overflow-hidden transition-colors hover:border-white/[0.1]"
              >
                {/* Partner Photo */}
                <div className="relative w-full aspect-[3/4] bg-bg-2">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className={`flex h-full w-full items-center justify-center border-b border-white/[0.06] ${colorMap[member.color]}`}>
                      <span className="text-4xl font-bold">{member.initials}</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-text">{member.name}</h3>
                  <p className="text-xs text-gold font-medium mt-0.5">{member.credentials}</p>
                  <p className="text-sm text-muted mt-1 mb-3">{member.role}</p>
                  <p className="text-xs text-muted leading-relaxed mb-4">{member.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-[10px] font-medium text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── Offices ─── */}
      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-gold/20 bg-gold/[0.08] px-4 py-1.5">
            <span className="text-xs font-medium text-gold tracking-wide">Our Offices</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl mb-12">
            Where to Find Us
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offices.map((office) => (
              <div
                key={office.city}
                className={`rounded-2xl border bg-card p-6 ${
                  office.highlight
                    ? "border-gold/30"
                    : "border-white/[0.06]"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      office.highlight ? "bg-gold/10" : "bg-white/[0.04]"
                    }`}
                  >
                    <MapPin
                      className={`h-5 w-5 ${office.highlight ? "text-gold" : "text-muted"}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text">{office.city}</h3>
                    <p className="text-xs text-muted">{office.label}</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Building2 className="h-3.5 w-3.5 text-dim mt-0.5 shrink-0" />
                    <span className="text-xs text-muted leading-relaxed">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-dim shrink-0" />
                    <span className="text-xs text-muted">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-dim shrink-0" />
                    <span className="text-xs text-muted">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── WhatsApp CTA ─── */}
      <WhatsAppCTA />
    </>
  );
}
