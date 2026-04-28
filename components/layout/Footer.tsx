import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917777970565";

const SERVICES = [
  { label: "Income Tax Advisory", href: "/services/income-tax-advisory" },
  { label: "Audit & Assurance", href: "/services/audit-assurance" },
  { label: "GST Compliance", href: "/services/gst-compliance" },
  { label: "Global Accounting", href: "/services/global-accounting" },
  { label: "FEMA Compliance", href: "/services/fema-compliance" },
  { label: "IPO Consultancy", href: "/services/ipo-consultancy" },
  { label: "Virtual CFO Services", href: "/services/cfo-services" },
  { label: "Due Diligence", href: "/services/due-diligence" },
  { label: "Startup Advisory", href: "/services/startup-advisory" },
  { label: "Company Incorporation", href: "/services/company-incorporation" },
  { label: "Valuation Services", href: "/services/valuation-services" },
  { label: "Debt Funding Advisory", href: "/services/debt-funding-advisory" },
];

const QUICK = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Knowledge Bank", href: "/knowledge-bank" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/resources/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-stone-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1: Brand + Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold tracking-wide text-stone-100">
                  DRSPV <span className="font-normal text-gold-3">&</span> Associates
                </span>
                <span className="text-[9px] font-medium tracking-[0.12em] uppercase text-stone-500">
                  Chartered Accountants &middot; Est. 2023
                </span>
              </div>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed mb-6 max-w-[240px]">
              Trusted advisors in taxation, compliance, and business growth across India and internationally.
            </p>
            <div className="space-y-2.5">
              <a href="mailto:info@drspv.in" className="flex items-center gap-2 text-xs text-stone-400 hover:text-stone-200 transition-colors">
                <Mail className="h-3.5 w-3.5 text-gold-3" />
                info@drspv.in
              </a>
              <a href="tel:+917777970565" className="flex items-center gap-2 text-xs text-stone-400 hover:text-stone-200 transition-colors">
                <Phone className="h-3.5 w-3.5 text-gold-3" />
                +91 77779 70565
              </a>
              <div className="flex items-start gap-2 text-xs text-stone-400">
                <MapPin className="h-3.5 w-3.5 text-gold-3 mt-0.5 shrink-0" />
                510, RK World Tower, Sheetal Park, Rajkot – 360006
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.12em] text-gold-3 mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-stone-400 hover:text-stone-200 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.12em] text-gold-3 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {QUICK.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-stone-400 hover:text-stone-200 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Offices */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.12em] text-gold-3 mb-4">
              Our Offices
            </h4>
            <ul className="space-y-3 text-xs text-stone-400">
              {[
                { city: "Rajkot (HQ)", detail: "510, RK World Tower, 150 Ft. Ring Road" },
                { city: "Dubai, UAE", detail: "Office #1904, Tamani Arts, Business Bay" },
                { city: "Ahmedabad", detail: "421, Shivalik Shilp 2, Judges Bunglow Rd" },
                { city: "Surat", detail: "423, Laxmi Enclave 2, Katargam" },
                { city: "Gondal", detail: "1st Floor, Tulsi Plaza, Sant Nagar" },
              ].map((o) => (
                <li key={o.city}>
                  <span className="font-medium text-stone-300">{o.city}</span>
                  <br />
                  <span>{o.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-stone-500">
          <span>&copy; 2026 DRSPV &amp; Associates. All Rights Reserved. ICAI Registered CA Firm.</span>
          <span>Mon&ndash;Sat &nbsp;9 AM – 9 PM IST</span>
        </div>
      </div>
    </footer>
  );
}
