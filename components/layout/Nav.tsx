"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Phone, MessageCircle, Menu, X } from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "911234567890";
const PH = process.env.NEXT_PUBLIC_PHONE || WA;

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "I Need Help", href: "/i-need-help-with" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openSearch = () => {
    window.dispatchEvent(new CustomEvent("openSearch"));
  };

  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hello DRSPV, I need help with..."
  )}`;
  const callLink = `tel:+${PH}`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center transition-colors duration-300 ${
          scrolled
            ? "bg-bg/95 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-bg/80 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4">
          {/* Left: Logo */}
          <Link href="/" className="shrink-0 group">
            <div className="flex flex-col leading-tight">
              <span className="text-[15px] sm:text-base font-bold tracking-wide text-text group-hover:text-gold transition-colors">
                DRSPV{" "}
                <span className="font-normal text-gold">&</span>{" "}
                Associates
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.12em] uppercase text-muted">
                Chartered Accountants &middot; Est. 2023
              </span>
            </div>
          </Link>

          {/* Center: Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-[13px] font-medium text-muted hover:text-text transition-colors rounded-md hover:bg-white/[0.04]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={openSearch}
              aria-label="Search"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted hover:text-text hover:bg-white/[0.06] transition-colors"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>

            <a
              href={callLink}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-gold/30 px-3.5 py-1.5 text-xs font-semibold text-gold hover:bg-gold/10 hover:border-gold/50 transition-all"
            >
              <Phone className="h-3.5 w-3.5" />
              Call Now
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-wa-green px-3.5 py-1.5 text-xs font-semibold text-white hover:brightness-110 transition-all"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="xl:hidden flex h-9 w-9 items-center justify-center rounded-lg text-muted hover:text-text hover:bg-white/[0.06] transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm xl:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-[300px] bg-bg-2 border-l border-white/[0.06] shadow-2xl transform transition-transform duration-300 ease-out xl:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-[60px] border-b border-white/[0.06]">
          <span className="text-sm font-semibold text-text">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:text-text hover:bg-white/[0.06] transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col py-4 px-3 gap-0.5 overflow-y-auto h-[calc(100%-60px)]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-muted hover:text-text hover:bg-white/[0.04] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-6 px-3 flex flex-col gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-wa-green px-4 py-3 text-sm font-semibold text-white hover:brightness-110 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
            <a
              href={callLink}
              className="flex items-center justify-center gap-2 rounded-lg border border-gold/40 px-4 py-3 text-sm font-semibold text-gold hover:bg-gold/10 transition-all"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
