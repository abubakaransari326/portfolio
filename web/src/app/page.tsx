import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="space-y-12 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] lg:gap-16 lg:space-y-0 xl:gap-24">
      {/* Left column: sticky profile / hero */}
      <div className="lg:sticky lg:top-10 lg:self-start">
        <HeroSection />
      </div>

      {/* Right column: main content sections */}
      <div className="space-y-16">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
}
