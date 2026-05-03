import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShieldCheck, Lock, Headphones, Zap } from "lucide-react";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Gulf-Ready Delivery",
    description:
      "We understand the GCC market. From Vision 2030 alignment to Arabic RTL support, we build with Gulf businesses in mind.",
  },
  {
    icon: Lock,
    title: "NDA & Confidentiality",
    description:
      "Enterprise-grade NDAs signed before the first meeting. Your intellectual property is protected at every stage.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Direct access to your project lead. Gulf timezone coverage. 4-hour response guarantee during business hours.",
  },
  {
    icon: Zap,
    title: "Speed Without Compromise",
    description:
      "Agile sprints with weekly demos. Most MVPs delivered in 6–8 weeks. Enterprise projects in 3–4 months.",
  },
];

export function WhySection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">
              Why Choose Us
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-4">
              Why Gulf Leaders{" "}
              <span className="gradient-text">Trust 4F Studio</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              We don&apos;t just write code — we build partnerships with
              businesses who demand reliability and excellence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {differentiators.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="glass-card p-7 h-full">
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5">
                  <item.icon
                    size={22}
                    className="text-brand-blue"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
