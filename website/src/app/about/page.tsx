import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/home/CTABanner";
import { MetricsBar } from "@/components/home/MetricsBar";
import { Target, Heart, Lock, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind 4F Studio. We build premium custom software for Gulf enterprises — with precision, transparency, and long-term partnership in mind.",
};

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    description:
      "Every line of code is intentional. We don't ship 'good enough' — we ship software that performs flawlessly under real-world conditions.",
  },
  {
    icon: Lock,
    title: "Absolute Confidentiality",
    description:
      "Enterprise-grade NDAs. Secure infrastructure. Your intellectual property and business data are protected at every stage of the engagement.",
  },
  {
    icon: Heart,
    title: "Relentless Innovation",
    description:
      "We stay ahead of the technology curve so our clients don't have to. From AI to cloud-native architecture, we bring the latest to every project.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We don't disappear after launch. Our clients become partners. We provide ongoing support, iteration, and strategic technical guidance.",
  },
];

const team = [
  {
    name: "Muhammad Ansar",
    role: "Founder & Lead Engineer",
    bio: "Full-stack architect with 8+ years building enterprise platforms. Specialises in scalable systems for high-growth Gulf businesses.",
    initial: "MA",
  },
  {
    name: "Ali Hassan",
    role: "Senior Mobile Developer",
    bio: "Flutter and React Native expert. Has shipped 15+ mobile apps across fintech, healthcare, and logistics verticals for GCC clients.",
    initial: "AH",
  },
  {
    name: "Sara Ahmed",
    role: "UI/UX Design Lead",
    bio: "Product designer with deep expertise in Arabic RTL interfaces. Creates design systems that scale across web and mobile platforms.",
    initial: "SA",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-grid relative">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">
              About Us
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 max-w-3xl">
              Built for the Gulf.{" "}
              <span className="gradient-text">Driven by Craft.</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
              4F Studio is a premium software development house focused
              exclusively on delivering world-class digital solutions for
              businesses across the GCC region.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-bg-surface">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">
                Our Story
              </h2>
              <div className="space-y-5 text-text-secondary leading-relaxed">
                <p>
                  4F Studio was founded with a clear mission: to bridge the gap
                  between world-class software engineering and the unique
                  demands of Gulf businesses. We saw too many GCC companies
                  settling for generic solutions that didn&apos;t understand their
                  market, their users, or their regulatory environment.
                </p>
                <p>
                  We decided to change that. Every project we take on is
                  engineered with Gulf-first thinking — from Arabic RTL support
                  to Vision 2030 compliance, from WhatsApp-integrated workflows
                  to multi-currency transaction handling.
                </p>
                <p>
                  Today, we serve enterprises, startups, and government
                  contractors across the UAE, Saudi Arabia, Qatar, Kuwait,
                  Bahrain, and Oman. Our team combines deep technical expertise
                  with genuine understanding of how business is done in the
                  Gulf.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">
                Our Values
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mt-4">
                What <span className="gradient-text">Defines Us</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="glass-card p-7 h-full">
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-5">
                    <value.icon
                      size={22}
                      className="text-brand-gold"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-text-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-bg-surface">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">
                The Team
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mt-4">
                The People Behind{" "}
                <span className="gradient-text">4F Studio</span>
              </h2>
              <p className="text-text-secondary mt-4 max-w-xl mx-auto">
                A lean, senior team of engineers and designers who take
                ownership of every project from day one.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.12}>
                <div className="glass-card p-7 text-center h-full">
                  <div className="w-20 h-20 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mx-auto mb-5">
                    <span className="font-heading font-bold text-xl text-brand-blue">
                      {member.initial}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-text-primary">
                    {member.name}
                  </h3>
                  <p className="text-sm text-brand-blue mt-1 mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                Gulf Timezone Coverage
              </h2>
              <p className="text-text-secondary mb-8">
                We operate on Gulf Standard Time (GST/AST) with full coverage
                during GCC business hours. Remote-first, globally distributed,
                locally available.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "🇦🇪 UAE",
                  "🇸🇦 KSA",
                  "🇶🇦 Qatar",
                  "🇰🇼 Kuwait",
                  "🇧🇭 Bahrain",
                  "🇴🇲 Oman",
                ].map((country) => (
                  <span
                    key={country}
                    className="px-4 py-2 rounded-lg bg-bg-card border border-border-subtle text-sm text-text-secondary"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <MetricsBar />
      <CTABanner />
    </>
  );
}
