"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/home/CTABanner";
import { ArrowUpRight } from "lucide-react";

const filters = ["All", "Web", "Mobile", "Enterprise", "AI", "Design"];

const projects = [
  {
    title: "Dubai Smart Logistics Platform",
    industry: "Logistics & Supply Chain",
    region: "🇦🇪 UAE",
    category: "Web",
    outcome: "40% faster order processing",
    tech: ["React", "Node.js", "AWS", "PostgreSQL"],
    description:
      "End-to-end logistics management platform handling 10,000+ daily shipments across UAE with real-time tracking, automated routing, and driver management.",
    image: "/images/project-1.png",
    challenge: "Manual dispatch processes causing 6-hour delays",
    solution: "Automated routing engine with real-time GPS tracking",
    result: "Processing time reduced from 6 hours to 45 minutes",
  },
  {
    title: "Riyadh FinTech Mobile App",
    industry: "Financial Services",
    region: "🇸🇦 Saudi Arabia",
    category: "Mobile",
    outcome: "120K+ downloads in 6 months",
    tech: ["Flutter", "Firebase", "Stripe", "AI/ML"],
    description:
      "Digital wallet and payment app aligned with Saudi Vision 2030 fintech initiatives, supporting SAR, AED, and USD transactions with biometric security.",
    image: "/images/project-2.png",
    challenge: "No local digital wallet supporting multi-currency GCC transfers",
    solution: "Cross-border payment system with instant currency conversion",
    result: "120,000 downloads and $5M+ processed in first 6 months",
  },
  {
    title: "Qatar Healthcare Portal",
    industry: "Healthcare",
    region: "🇶🇦 Qatar",
    category: "Web",
    outcome: "60% reduced wait times",
    tech: ["Next.js", "TypeScript", "Azure", "HIPAA"],
    description:
      "Patient management system for a network of 12 clinics with appointment scheduling, telemedicine, and electronic health records — fully HIPAA compliant.",
    image: "/images/project-1.png",
    challenge: "Paper-based patient records causing scheduling conflicts",
    solution: "Unified digital health platform with real-time availability",
    result: "Patient wait times reduced by 60%, NPS increased to 87",
  },
  {
    title: "Kuwait Enterprise ERP",
    industry: "Manufacturing",
    region: "🇰🇼 Kuwait",
    category: "Enterprise",
    outcome: "$2M annual cost savings",
    tech: ["Laravel", "Vue.js", "MySQL", "Docker"],
    description:
      "Custom ERP system replacing legacy software, unifying inventory, procurement, HR, and financial reporting for a 500-employee manufacturing firm.",
    image: "/images/project-2.png",
    challenge: "5 disconnected legacy systems with manual data entry",
    solution: "Unified ERP platform with automated data synchronization",
    result: "$2M annual savings, 70% reduction in manual data entry",
  },
  {
    title: "Bahrain AI Customer Service Bot",
    industry: "Banking",
    region: "🇧🇭 Bahrain",
    category: "AI",
    outcome: "85% query resolution without human",
    tech: ["Python", "OpenAI", "LangChain", "FastAPI"],
    description:
      "GPT-powered customer service chatbot for a Bahraini bank handling 50,000+ monthly queries in English and Arabic with seamless human handoff.",
    image: "/images/project-1.png",
    challenge: "24/7 customer support with only a 12-person team",
    solution: "Bilingual AI chatbot trained on 3 years of support data",
    result: "85% automated resolution rate, 40% cost reduction",
  },
  {
    title: "Oman Real Estate Platform",
    industry: "Real Estate",
    region: "🇴🇲 Oman",
    category: "Design",
    outcome: "3x increase in property inquiries",
    tech: ["Figma", "Next.js", "Tailwind CSS", "Supabase"],
    description:
      "Complete redesign and rebuild of a real estate listing platform with virtual tour integration, advanced search, and Arabic RTL support.",
    image: "/images/project-2.png",
    challenge: "Outdated design with 80% bounce rate on mobile",
    solution: "Mobile-first redesign with virtual tour integration",
    result: "3x more inquiries, bounce rate dropped to 35%",
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-grid relative">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">
              Our Work
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 max-w-3xl">
              Projects That{" "}
              <span className="gradient-text">Prove Results</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
              Real software. Real outcomes. Every project below was delivered
              for a Gulf client with measurable business impact.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-brand-blue text-white border-brand-blue"
                    : "bg-transparent text-text-secondary border-border-subtle hover:border-brand-blue/30 hover:text-text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.08}>
                <div className="glass-card overflow-hidden group">
                  {/* Visual Header */}
                  <div className="h-48 relative flex items-center justify-center overflow-hidden bg-bg-deep">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent opacity-60" />
                    <div className="relative z-10 text-center space-y-2">
                      <span className="text-xs text-text-dim bg-bg-deep/80 px-3 py-1 rounded-full backdrop-blur-md border border-border-subtle">
                        {project.region}
                      </span>
                      <div className="text-xs text-text-dim bg-bg-deep/80 px-3 py-1 rounded-full backdrop-blur-md border border-border-subtle">
                        {project.category}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-xs text-text-dim mb-1">
                          {project.industry}
                        </p>
                        <h3 className="font-heading font-semibold text-lg text-text-primary group-hover:text-brand-blue-light transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="text-text-dim group-hover:text-brand-blue transition-all mt-1 shrink-0"
                      />
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Problem → Solution → Outcome */}
                    <div className="space-y-3 mb-5">
                      <div className="flex gap-3">
                        <span className="text-xs font-semibold text-red-400 uppercase tracking-wider w-20 shrink-0 pt-0.5">
                          Challenge
                        </span>
                        <span className="text-xs text-text-secondary">
                          {project.challenge}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider w-20 shrink-0 pt-0.5">
                          Solution
                        </span>
                        <span className="text-xs text-text-secondary">
                          {project.solution}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-xs font-semibold text-success uppercase tracking-wider w-20 shrink-0 pt-0.5">
                          Result
                        </span>
                        <span className="text-xs text-text-primary font-medium">
                          {project.result}
                        </span>
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-md bg-bg-card border border-border-subtle text-text-dim"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
