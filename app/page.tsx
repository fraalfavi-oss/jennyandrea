import { AboutSection } from "@/components/about-section";
import { ApproachSection } from "@/components/approach-section";
import { ContactSection } from "@/components/contact-section";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { MethodologySection } from "@/components/methodology-section";
import { ResourcesSection } from "@/components/resources-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <ApproachSection />
        <ServicesSection />
        <AboutSection />
        <MethodologySection />
        <ResourcesSection />
        <TestimonialsSection />
        <ContactSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
