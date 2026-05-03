import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Globe,
  Smartphone,
  Building2,
  Bot,
  Palette,
  Cloud,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Web Development",
    description:
      "High-performance web applications built with React, Next.js, and Node.js — optimized for speed and scale.",
    href: "/services#web",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps for iOS and Android using Flutter and React Native — pixel-perfect, performant.",
    href: "/services#mobile",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Building2,
    title: "Enterprise Software",
    description:
      "ERP, CRM, and custom business platforms that streamline operations and scale with your enterprise.",
    href: "/services#enterprise",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Intelligent chatbots, data pipelines, and LLM integrations that automate workflows and drive insights.",
    href: "/services#ai",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Product design, design systems, and interactive prototyping that turn complex ideas into intuitive interfaces.",
    href: "/services#design",
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "AWS, Azure, GCP infrastructure with CI/CD pipelines — built for 99.9% uptime and seamless scaling.",
    href: "/services#cloud",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
];

export function ServicesOverview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">
              What We Do
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-4">
              Full-Stack Software{" "}
              <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              End-to-end engineering for Gulf businesses — from concept to
              deployment and beyond.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <Link href={service.href} className="block group">
                <div className="glass-card p-7 h-full">
                  <div
                    className={`w-11 h-11 rounded-xl ${service.bgColor} flex items-center justify-center mb-5`}
                  >
                    <service.icon
                      size={22}
                      className={service.color}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-semibold text-lg text-text-primary">
                      {service.title}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="text-text-dim group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1"
                    />
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
