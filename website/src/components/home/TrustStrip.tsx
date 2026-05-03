import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Shield,
  Award,
  Cpu,
  Layers,
  Blocks,
  Paintbrush,
} from "lucide-react";

const certifications = [
  { icon: Shield, label: "NDA Protected" },
  { icon: Award, label: "ISO Compliant" },
  { icon: Cpu, label: "AWS Partner" },
  { icon: Layers, label: "Flutter Experts" },
  { icon: Blocks, label: "React Certified" },
  { icon: Paintbrush, label: "Design Systems" },
];

export function TrustStrip() {
  return (
    <section className="py-12 border-y border-border-subtle bg-bg-surface">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {certifications.map((cert) => (
              <div
                key={cert.label}
                className="flex items-center gap-2.5 text-text-dim hover:text-text-secondary transition-colors"
              >
                <cert.icon size={18} strokeWidth={1.5} />
                <span className="text-sm font-medium tracking-wide">
                  {cert.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
