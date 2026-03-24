import { profile } from "@/data/profile";
import { SectionNav } from "@/components/section-nav";

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="scroll-mt-24 space-y-4"
    >
      <h1
        id="hero-heading"
        className="text-4xl font-bold tracking-tight text-[#e2e8f0] sm:text-5xl"
      >
        <a href="#top">{profile.name || "Your Name"}</a>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-[#e2e8f0] sm:text-xl">
        {profile.title}
      </h2>
      <p className="mt-4 max-w-prose leading-normal text-[#e2e8f0] sm:max-w-xs">
        {profile.summary}
      </p>
      <div className="mt-8 lg:mt-[80px]">
        <SectionNav />
      </div>
    </section>
  );
}

