import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhySection } from "@/components/home/WhySection";
import { MetricsBar } from "@/components/home/MetricsBar";
import { Testimonials } from "@/components/home/Testimonials";
import { TechStack } from "@/components/home/TechStack";
import { CTABanner } from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <FeaturedProjects />
      <WhySection />
      <MetricsBar />
      <Testimonials />
      <TechStack />
      <CTABanner />
    </>
  );
}
