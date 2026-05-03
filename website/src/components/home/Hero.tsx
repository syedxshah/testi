"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid">
      {/* Ambient Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-gold/4 blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10 pt-32 md:pt-48 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/20 bg-brand-gold/5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-xs font-medium text-brand-gold tracking-wide uppercase">
              Trusted by Gulf Enterprises
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-6"
          >
            We Build Software{" "}
            <span className="gradient-text">That Moves</span>
            <br />
            <span className="text-text-secondary">Gulf Businesses Forward</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10"
          >
            Custom web apps, mobile platforms, AI solutions, and enterprise
            systems — engineered for UAE, Saudi Arabia, and the entire GCC
            region. Delivered with precision. Backed by real results.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-blue-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              Start Your Project
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
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 flex flex-wrap gap-8 md:gap-14"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "6", label: "GCC Countries" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-heading font-bold text-text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-text-dim mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-deep to-transparent pointer-events-none" />
    </section>
  );
}
