import Link from "next/link";
import { Mail } from "lucide-react";

const SERVICES = [
  { label: "Income Tax Advisory", href: "/services/income-tax-advisory" },
  { label: "Audit & Assurance", href: "/services/audit-assurance" },
  { label: "GST Compliance", href: "/services/gst-compliance" },
  { label: "Global Accounting", href: "/services/global-accounting" },
  { label: "FEMA Compliance", href: "/services/fema-compliance" },
  { label: "IPO Consultancy", href: "/services/ipo-consultancy" },
  { label: "CFO Services", href: "/services/cfo-services" },
  { label: "Due Diligence", href: "/services/due-diligence" },
  { label: "Startup Advisory", href: "/services/startup-advisory" },
  { label: "Company Incorporation", href: "/services/company-incorporation" },
  { label: "Information System Audit (DISA)", href: "/services/information-system-audit" },
  { label: "Valuation Services (IBBI)", href: "/services/valuation-services" },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "FAQ", href: "/resources/faq" },
  { label: "Glossary", href: "/resources/glossary" },
  { label: "Downloads", href: "/resources/downloads" },
];

const SOCIALS = [
  { icon: Mail, href: "mailto:info@drspv.in", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold tracking-wide text-text">
                  DRSPV <span className="font-normal text-gold">&</span> Associates
                </span>
                <span className="text-[9px] font-medium tracking-[0.12em] uppercase text-muted">
                  Chartered Accountants &middot; Est. 2023
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-5 max-w-[260px]">
              Trusted advisors in taxation, compliance, and business growth.
              Our qualified CAs bring clarity to complex financial matters.
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] text-muted hover:text-gold hover:bg-white/[0.08] transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-gold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-text transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-gold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {COMPANY.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-text transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-dim">
          <span>&copy; 2026 DRSPV &amp; Associates. All Rights Reserved.</span>
          <span>Mon&ndash;Sat 09AM&ndash;09PM IST</span>
        </div>
      </div>
    </footer>
  );
}
