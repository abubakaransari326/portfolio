import { HeroSection } from "@/components/sections/hero-section";
import { ContactIcons } from "@/components/contact-icons";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function Home() {
  return (
    <div className="space-y-12 lg:grid lg:grid-cols-[minmax(16rem,22.5rem)_minmax(0,1fr)] lg:gap-24 lg:space-y-0 xl:gap-32">
      {/* Left column: sticky profile / hero */}
      <div className="flex flex-col lg:-ml-[74px] lg:sticky lg:top-[5.9375rem] lg:min-h-[calc(100vh-5.9375rem)] lg:max-h-[calc(100vh-5.9375rem)] lg:overflow-y-auto lg:self-start">
        <HeroSection />
        <ContactIcons className="mt-8 pt-2 lg:mt-auto lg:mb-[100px] lg:pt-6" />
      </div>

      {/* Right column: main content sections */}
      <div className="space-y-16 sm:space-y-20 lg:ml-4">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <p className="text-xs leading-relaxed text-[#94a3b8] sm:text-sm">
          Layout and visual design take significant inspiration from{" "}
          <a
            href="https://brittanychiang.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[#5EEAD5] underline-offset-2 transition hover:underline"
          >
            brittanychiang.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
