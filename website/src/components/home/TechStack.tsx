import { ScrollReveal } from "@/components/ui/ScrollReveal";

const techCategories = [
  {
    label: "Frontend",
    techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    techs: ["Node.js", "Laravel", "Python", "Go", "GraphQL"],
  },
  {
    label: "Mobile",
    techs: ["Flutter", "React Native", "iOS (Swift)", "Android (Kotlin)"],
  },
  {
    label: "Cloud & DevOps",
    techs: ["AWS", "Azure", "GCP", "Docker", "CI/CD"],
  },
  {
    label: "Data & AI",
    techs: ["TensorFlow", "OpenAI", "LangChain", "PostgreSQL", "MongoDB"],
  },
];

export function TechStack() {
  return (
    <section className="section-padding bg-bg-surface">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">
              Technology
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-4">
              Built With{" "}
              <span className="gradient-text">Modern Technology</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              We choose the right tools for each project — never one-size-fits-all.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {techCategories.map((cat, i) => (
            <ScrollReveal key={cat.label} delay={i * 0.08}>
              <div className="text-center">
                <h4 className="text-xs uppercase tracking-[0.15em] text-brand-blue font-semibold mb-4">
                  {cat.label}
                </h4>
                <div className="flex flex-col gap-2">
                  {cat.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm text-text-secondary py-2 px-3 rounded-lg bg-bg-card border border-border-subtle hover:border-brand-blue/20 hover:text-text-primary transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
