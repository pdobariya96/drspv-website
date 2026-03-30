import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ProblemGrid from "@/components/home/ProblemGrid";
import ServicesGrid from "@/components/home/ServicesGrid";
import DeadlineCountdowns from "@/components/home/DeadlineCountdowns";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";

import OfficesGrid from "@/components/home/OfficesGrid";
import NewsletterForm from "@/components/shared/NewsletterForm";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <div className="section-divider" />
      <ProblemGrid />
      <div className="section-divider" />
      <ServicesGrid />
      <div className="section-divider" />
      <DeadlineCountdowns />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <BlogPreview />
      <div className="section-divider" />
      <section className="bg-bg-2 py-12 px-7">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                <span className="text-gold text-sm">✉</span>
              </div>
              <span className="text-[10px] uppercase tracking-[2px] text-gold font-medium">Newsletter</span>
            </div>
            <h2 className="text-[22px] font-medium tracking-tight text-text mb-2">
              Weekly Tax & Finance Insights
            </h2>
            <p className="text-muted text-[14px] leading-relaxed">
              Join 2,000+ professionals who receive our weekly digest on income tax, GST, FEMA and IPO updates — written by our qualified CAs.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>
      <div className="section-divider" />
      <OfficesGrid />
      <div className="section-divider" />
      <WhatsAppCTA />
    </>
  );
}
