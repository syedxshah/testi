import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTABanner() {
  return (
    <section className="pt-24 pb-32">
      <div className="container-custom">
        <ScrollReveal>
          <div className="relative rounded-2xl overflow-hidden border border-border-subtle">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-bg-card to-brand-gold/5" />
            <div className="absolute inset-0 bg-grid opacity-20" />

            {/* Glow effects */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/8 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-gold/5 blur-[80px] rounded-full" />

            <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 text-center">
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">
                Let&apos;s Build Together
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mt-4 mb-4 max-w-2xl mx-auto">
                Ready to Start Your Next{" "}
                <span className="gradient-text">Project?</span>
              </h2>
              <p className="text-text-secondary max-w-lg mx-auto mb-10">
                Whether it&apos;s a mobile app, enterprise platform, or AI
                solution — we&apos;ll turn your vision into production-ready
                software.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-blue-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                >
                  Start a Conversation
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="https://wa.me/923197081824?text=Hi%204F%20Studio!%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border-subtle text-text-primary font-medium rounded-lg hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all duration-300"
                >
                  <MessageCircle size={18} className="text-[#25D366]" />
                  WhatsApp Us
                </a>
              </div>
              <p className="text-xs text-text-dim mt-6">
                🕐 We respond within 4 business hours · Gulf timezone coverage
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
