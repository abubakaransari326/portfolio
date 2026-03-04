import { HeroSection } from "@/components/sections/hero-section";
import { ContactIcons } from "@/components/contact-icons";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="space-y-10 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] lg:gap-24 lg:space-y-0 xl:gap-32">
      {/* Left column: sticky profile / hero */}
      <div className="flex flex-col lg:-ml-[74px] lg:sticky lg:top-[5.9375rem] lg:min-h-[calc(100vh-5.9375rem)] lg:max-h-[calc(100vh-5.9375rem)] lg:overflow-y-auto lg:self-start">
        <HeroSection />
        <ContactIcons className="mt-auto mb-[100px] pt-6" />
      </div>

      {/* Right column: main content sections */}
      <div className="space-y-20 lg:ml-4">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </div>
    </div>
  );
}
