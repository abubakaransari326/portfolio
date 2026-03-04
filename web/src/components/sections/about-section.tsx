import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 space-y-3">
      <h2
        id="about-heading"
        className="text-xs font-mono uppercase tracking-[0.18em] text-[#e2e8f0] lg:hidden"
      >
        About
      </h2>
      <p className="max-w-2xl whitespace-pre-line text-pretty text-sm text-[#94a3b8] sm:text-base">
        {profile.fullSummary}
      </p>
    </section>
  );
}

