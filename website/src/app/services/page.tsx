import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/home/CTABanner";
import {
  Globe,
  Smartphone,
  Building2,
  Bot,
  Palette,
  Cloud,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom web development, mobile apps, enterprise software, AI & automation, UI/UX design, and cloud infrastructure for Gulf businesses.",
};

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Custom Web Development",
    description:
      "We build high-performance web applications that handle real-world scale. From internal dashboards to customer-facing platforms, every product is engineered for speed, security, and seamless user experience across devices.",
    includes: [
      "Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)",
      "Admin dashboards & portals",
      "E-commerce platforms",
      "API development & integration",
      "Performance optimization",
    ],
    technologies: ["React", "Next.js", "Node.js", "Laravel", "TypeScript", "PostgreSQL"],
    timeline: "4–8 weeks for MVP · 10–16 weeks for full platform",
    engagement: "Fixed-price or dedicated team",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native-quality mobile apps for iOS and Android built with cross-platform frameworks. We deliver pixel-perfect designs with smooth 60fps animations and offline-first architecture for Gulf markets where connectivity varies.",
    includes: [
      "iOS & Android native apps",
      "Cross-platform (Flutter / React Native)",
      "Offline-first architecture",
      "Push notifications & real-time",
      "App Store & Play Store deployment",
      "Post-launch maintenance & updates",
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Supabase"],
    timeline: "6–10 weeks for MVP · 12–20 weeks for full product",
    engagement: "Fixed-price with milestone payments",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    id: "enterprise",
    icon: Building2,
    title: "Enterprise Software",
    description:
      "Custom ERP, CRM, and business management platforms that replace outdated legacy systems. We build enterprise software that your team actually wants to use — intuitive, fast, and integrated with your existing workflow.",
    includes: [
      "Custom ERP systems",
      "CRM platforms",
      "Inventory & supply chain management",
      "HR & payroll systems",
      "Business intelligence dashboards",
      "Legacy system migration",
    ],
    technologies: ["Laravel", "Vue.js", "React", "Python", "MySQL", "Docker"],
    timeline: "12–20 weeks · phased rollout recommended",
    engagement: "Dedicated team with weekly sprints",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI & Automation",
    description:
      "Intelligent solutions that automate repetitive workflows, extract insights from your data, and enhance customer interactions. From GPT-powered chatbots to custom ML pipelines — we make AI practical for Gulf enterprises.",
    includes: [
      "AI chatbots & virtual assistants",
      "Document processing & OCR",
      "Data pipeline automation",
      "LLM integration (OpenAI, custom)",
      "Predictive analytics",
      "Workflow automation (RPA)",
    ],
    technologies: ["Python", "TensorFlow", "OpenAI", "LangChain", "FastAPI", "AWS SageMaker"],
    timeline: "4–6 weeks for chatbot · 8–14 weeks for custom ML",
    engagement: "Fixed-price or retainer",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Product design that turns complex business problems into intuitive, beautiful interfaces. We create design systems, interactive prototypes, and user-tested experiences that drive adoption and delight users across the Gulf.",
    includes: [
      "Product & UX strategy",
      "Wireframing & prototyping",
      "Design systems & component libraries",
      "User research & testing",
      "Responsive & adaptive design",
      "Arabic RTL design support",
    ],
    technologies: ["Figma", "Framer", "Storybook", "Tailwind CSS", "Adobe Creative Suite"],
    timeline: "2–4 weeks for design · 4–6 weeks for design system",
    engagement: "Project-based or embedded designer",
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Infrastructure that scales with your business. We design, deploy, and manage cloud architectures on AWS, Azure, and GCP with CI/CD pipelines, monitoring, and 99.9% uptime guarantees for mission-critical Gulf operations.",
    includes: [
      "Cloud architecture design",
      "CI/CD pipeline setup",
      "Container orchestration (Docker/K8s)",
      "Monitoring & alerting",
      "Security hardening & compliance",
      "Cost optimization",
    ],
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
    timeline: "2–4 weeks for setup · ongoing management",
    engagement: "Retainer with SLA",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-grid relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full" />
        </div>
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">
              Our Services
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 max-w-3xl">
              Full-Stack{" "}
              <span className="gradient-text">Software Engineering</span>
              <br />
              for the Gulf
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
              Six core capabilities. One dedicated team. From concept to
              production — we handle the entire software lifecycle so you can
              focus on growing your business.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${i % 2 === 0 ? "" : "bg-bg-surface"}`}
        >
          <div className="container-custom">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Left: Info */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center`}
                    >
                      <service.icon
                        size={24}
                        className={service.color}
                        strokeWidth={1.5}
                      />
                    </div>
                    <h2 className="font-heading font-bold text-2xl md:text-3xl">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-8 max-w-2xl">
                    {service.description}
                  </p>

                  {/* What's included */}
                  <h3 className="text-sm uppercase tracking-wider text-text-dim font-semibold mb-4">
                    What&apos;s Included
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.includes.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-brand-blue mt-0.5 shrink-0"
                        />
                        <span className="text-sm text-text-secondary">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white text-sm font-medium rounded-lg hover:bg-brand-blue-light transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                  >
                    Discuss This Service
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>

                {/* Right: Meta */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Technologies */}
                  <div className={`p-6 rounded-xl border ${service.borderColor} bg-bg-card`}>
                    <h4 className="text-xs uppercase tracking-wider text-text-dim font-semibold mb-4">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1.5 rounded-md bg-bg-surface border border-border-subtle text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="p-6 rounded-xl border border-border-subtle bg-bg-card">
                    <h4 className="text-xs uppercase tracking-wider text-text-dim font-semibold mb-2">
                      Typical Timeline
                    </h4>
                    <p className="text-sm text-text-primary">
                      {service.timeline}
                    </p>
                  </div>

                  {/* Engagement */}
                  <div className="p-6 rounded-xl border border-border-subtle bg-bg-card">
                    <h4 className="text-xs uppercase tracking-wider text-text-dim font-semibold mb-2">
                      Engagement Model
                    </h4>
                    <p className="text-sm text-text-primary">
                      {service.engagement}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      <CTABanner />
    </>
  );
}
