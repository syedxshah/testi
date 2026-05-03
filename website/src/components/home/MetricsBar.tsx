"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CountUp } from "@/components/ui/CountUp";

const metrics = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 6, suffix: "", label: "GCC Countries Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 4, suffix: "hrs", label: "Avg. Response Time" },
];

export function MetricsBar() {
  return (
    <section className="py-16 border-y border-border-subtle bg-bg-surface relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-brand-blue/3 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl text-text-primary mb-2">
                  <CountUp end={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-sm text-text-secondary">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
