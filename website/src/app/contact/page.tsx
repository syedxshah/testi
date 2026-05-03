"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  Shield,
} from "lucide-react";

const serviceOptions = [
  "Custom Web Development",
  "Mobile App Development",
  "Enterprise Software",
  "AI & Automation",
  "UI/UX Design",
  "Cloud & DevOps",
  "Other / Not Sure",
];

const budgetRanges = [
  "$5K – $15K",
  "$15K – $50K",
  "$50K – $100K",
  "$100K+",
  "Not sure yet",
];

const countries = [
  "🇦🇪 UAE",
  "🇸🇦 Saudi Arabia",
  "🇶🇦 Qatar",
  "🇰🇼 Kuwait",
  "🇧🇭 Bahrain",
  "🇴🇲 Oman",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-grid relative">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">
              Contact Us
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 max-w-3xl">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Exceptional</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
              Whether you have a detailed brief or just an idea — we&apos;re
              here to listen. Reach out through the form, WhatsApp, or email.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                {submitted ? (
                  <div className="glass-card p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} className="text-success" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl mb-3">
                      Message Received!
                    </h3>
                    <p className="text-text-secondary max-w-md mx-auto">
                      Thank you for reaching out. We&apos;ll review your
                      message and respond within 4 business hours during Gulf
                      timezone working hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-text-secondary mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all placeholder:text-text-dim"
                          placeholder="Ahmed Al-Rashidi"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-text-secondary mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all placeholder:text-text-dim"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    {/* Email & Country */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-text-secondary mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all placeholder:text-text-dim"
                          placeholder="ahmed@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-text-secondary mb-2">
                          Country *
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all appearance-none"
                        >
                          <option value="" className="text-text-dim">
                            Select country
                          </option>
                          {countries.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Service & Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-text-secondary mb-2">
                          Service Needed
                        </label>
                        <select className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all appearance-none">
                          <option value="">Select a service</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-text-secondary mb-2">
                          Budget Range
                        </label>
                        <select className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all appearance-none">
                          <option value="">Select budget range</option>
                          {budgetRanges.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm text-text-secondary mb-2">
                        Project Details *
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all resize-none placeholder:text-text-dim"
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-blue-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                    >
                      Send Message
                      <Send
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={0.1}>
                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/923197081824?text=Hi%204F%20Studio!%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-xl border border-[#25D366]/20 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                      <MessageCircle
                        size={20}
                        className="text-white"
                        fill="white"
                      />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-text-primary">
                        WhatsApp Us
                      </p>
                      <p className="text-xs text-text-dim">
                        Fastest way to connect
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary">
                    Prefer chatting on WhatsApp? Send us a message directly —
                    we&apos;re active during Gulf business hours.
                  </p>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                {/* Email */}
                <div className="p-6 rounded-xl border border-border-subtle bg-bg-card">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail size={18} className="text-brand-blue" />
                    <p className="font-heading font-semibold text-sm text-text-primary">
                      Email
                    </p>
                  </div>
                  <a
                    href="mailto:syedansaroffical@gmail.com"
                    className="text-sm text-brand-blue hover:underline"
                  >
                    syedansaroffical@gmail.com
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                {/* Response Time */}
                <div className="p-6 rounded-xl border border-brand-gold/20 bg-brand-gold/5">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock size={18} className="text-brand-gold" />
                    <p className="font-heading font-semibold text-sm text-text-primary">
                      Response Time
                    </p>
                  </div>
                  <p className="text-sm text-text-secondary">
                    We respond within{" "}
                    <span className="text-brand-gold font-medium">
                      4 business hours
                    </span>{" "}
                    during Gulf timezone (GST/PKT) business hours.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                {/* Timezone */}
                <div className="p-6 rounded-xl border border-border-subtle bg-bg-card">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin size={18} className="text-brand-blue" />
                    <p className="font-heading font-semibold text-sm text-text-primary">
                      Location & Timezone
                    </p>
                  </div>
                  <p className="text-sm text-text-secondary">
                    Gulf Standard Time (GST) & Pakistan Standard Time (PKT)
                    coverage. Remote-first team serving all 6 GCC countries.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                {/* NDA */}
                <div className="p-6 rounded-xl border border-border-subtle bg-bg-card">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield size={18} className="text-brand-gold" />
                    <p className="font-heading font-semibold text-sm text-text-primary">
                      NDA Available
                    </p>
                  </div>
                  <p className="text-sm text-text-secondary">
                    We sign enterprise-grade NDAs before the first meeting. Your
                    project details remain strictly confidential.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
