import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Dubai Smart Logistics Platform",
    industry: "Logistics & Supply Chain",
    region: "🇦🇪 UAE",
    outcome: "40% faster order processing",
    tech: ["React", "Node.js", "AWS", "PostgreSQL"],
    description:
      "End-to-end logistics management platform handling 10,000+ daily shipments across UAE with real-time tracking and automated routing.",
    image: "/images/project-1.png",
  },
  {
    title: "Riyadh FinTech Mobile App",
    industry: "Financial Services",
    region: "🇸🇦 Saudi Arabia",
    outcome: "120K+ downloads in 6 months",
    tech: ["Flutter", "Firebase", "Stripe", "AI/ML"],
    description:
      "Digital wallet and payment app aligned with Saudi Vision 2030 fintech initiatives, supporting SAR, AED, and USD transactions.",
    image: "/images/project-2.png",
  },
  {
    title: "Qatar Healthcare Portal",
    industry: "Healthcare",
    region: "🇶🇦 Qatar",
    outcome: "60% reduced wait times",
    tech: ["Next.js", "TypeScript", "Azure", "HIPAA"],
    description:
      "Patient management system for a network of 12 clinics with appointment scheduling, telemedicine, and electronic health records.",
    image: "/images/project-1.png",
  },
  {
    title: "Kuwait Enterprise ERP",
    industry: "Manufacturing",
    region: "🇰🇼 Kuwait",
    outcome: "$2M annual cost savings",
    tech: ["Laravel", "Vue.js", "MySQL", "Docker"],
    description:
      "Custom ERP system replacing legacy software, unifying inventory, procurement, HR, and financial reporting in one platform.",
    image: "/images/project-2.png",
  },
];

export function FeaturedProjects() {
  return (
    <section className="section-padding bg-bg-surface">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">
                Our Work
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mt-4">
                Projects That{" "}
                <span className="gradient-text">Deliver Results</span>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-brand-blue transition-colors"
            >
              View All Projects
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.12}>
              <div className="glass-card overflow-hidden group cursor-pointer">
                {/* Project Visual */}
                <div className="h-48 relative flex items-center justify-center overflow-hidden bg-bg-deep">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent opacity-60" />
                  <div className="relative z-10 text-center">
                    <span className="text-xs text-text-dim bg-bg-deep/80 px-3 py-1 rounded-full backdrop-blur-md border border-border-subtle">
                      {project.region}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Project Info */}
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
                      className="text-text-dim group-hover:text-brand-blue transition-all mt-1"
                    />
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Outcome */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    <span className="text-sm font-medium text-success">
                      {project.outcome}
                    </span>
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
  );
}
