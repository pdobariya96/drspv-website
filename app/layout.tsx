import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import CookieBanner from "@/components/layout/CookieBanner";
import SearchOverlay from "@/components/layout/SearchOverlay";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://drspv.in"),
  title: {
    default: "DRSPV & Associates — Chartered Accountants | Tax, Audit & IPO Consultancy",
    template: "%s | DRSPV & Associates",
  },
  description:
    "DRSPV & Associates is a leading CA firm in Rajkot, Gujarat offering Income Tax Advisory, GST Compliance, Audit & Assurance, FEMA, IPO Consultancy, CFO Services and Global Accounting across India, USA, UK & Australia.",
  keywords: [
    "CA firm Rajkot",
    "chartered accountant Gujarat",
    "IPO consultant India",
    "accounting outsourcing India",
    "tax advisory Rajkot",
    "GST compliance",
    "FEMA consultant",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drspv.in",
    siteName: "DRSPV & Associates",
    title: "DRSPV & Associates — Chartered Accountants",
    description:
      "Trusted CA firm in Rajkot for Tax Advisory, Audit, GST, FEMA, IPO Consultancy & Global Accounting.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DRSPV & Associates — Chartered Accountants",
    description: "CA firm in Rajkot for Tax, Audit, GST, FEMA & IPO Consultancy.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://drspv.in" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              name: "DRSPV & Associates",
              alternateName: "DRSPV Chartered Accountants",
              url: "https://drspv.in",
              logo: "https://drspv.in/images/ca-logo.png",
              description:
                "Chartered Accountant firm offering Tax Advisory, Audit, GST, FEMA, IPO Consultancy & Global Accounting.",
              foundingDate: "2023",
              address: {
                "@type": "PostalAddress",
                streetAddress: "510, RK World Tower, Sheetal Park, 150 Ft. Ring Road",
                addressLocality: "Rajkot",
                addressRegion: "Gujarat",
                postalCode: "360006",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi", "Gujarati"],
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "21:00",
              },
              areaServed: ["India", "United States", "United Kingdom", "Australia"],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-bg text-text min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <CookieBanner />
        <SearchOverlay />
      </body>
    </html>
  );
}
