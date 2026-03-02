import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 space-y-3"
    >
      <h2
        id="about-heading"
        className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300"
      >
        About
      </h2>
      <p className="max-w-2xl text-pretty text-sm text-slate-200/90 sm:text-base">
        {profile.summary}
      </p>
    </section>
  );
}

