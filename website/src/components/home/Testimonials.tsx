import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "4F Studio delivered our logistics platform 2 weeks ahead of schedule. The quality exceeded our expectations — they truly understand Gulf business needs.",
    name: "Ahmed Al-Rashidi",
    role: "CTO",
    company: "Gulf Freight Solutions",
    flag: "🇦🇪",
    country: "Dubai, UAE",
  },
  {
    quote:
      "From day one, the team was professional, NDA-compliant, and available on our timezone. The fintech app they built has already processed over $5M in transactions.",
    name: "Fahad Al-Otaibi",
    role: "Founder & CEO",
    company: "PaySmart Arabia",
    flag: "🇸🇦",
    country: "Riyadh, KSA",
  },
  {
    quote:
      "We evaluated 8 software companies before choosing 4F Studio. Their design quality and attention to detail set them apart. Highly recommended for enterprise projects.",
    name: "Noor Al-Thani",
    role: "Director of Digital Transformation",
    company: "QatarBuild Group",
    flag: "🇶🇦",
    country: "Doha, Qatar",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">
              Client Voices
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-4">
              Trusted Across the{" "}
              <span className="gradient-text-gold">Gulf Region</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.12}>
              <div className="glass-card p-7 h-full flex flex-col">
                <Quote
                  size={20}
                  className="text-brand-gold/40 mb-4"
                  fill="currentColor"
                />
                <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-border-subtle pt-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-lg">
                      {t.flag}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">
                        {t.name}
                      </div>
                      <div className="text-xs text-text-dim">
                        {t.role}, {t.company}
                      </div>
                      <div className="text-xs text-text-dim mt-0.5">
                        {t.country}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
