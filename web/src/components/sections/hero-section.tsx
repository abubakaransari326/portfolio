import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="scroll-mt-24 space-y-4"
    >
      <h1
        id="hero-heading"
        className="text-balance text-4xl font-bold tracking-tight text-[#e2e8f0] sm:text-5xl"
      >
        {profile.name || "Your Name"}
      </h1>
      <p className="max-w-2xl text-pretty text-base font-medium text-[#e2e8f0] sm:text-lg">
        {profile.title}
      </p>
      <p className="max-w-xs text-pretty text-sm text-[#e2e8f0] sm:text-base">
        {profile.summary}
      </p>
      <div className="flex flex-wrap gap-3 pt-1">
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 shadow-sm transition hover:bg-slate-200"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-[#e2e8f0] transition hover:border-slate-500 hover:text-[#e2e8f0]/90"
        >
          Contact
        </a>
        <a
          href="/resume.pdf"
          className="inline-flex items-center justify-center rounded-full border border-dashed border-slate-700 px-5 py-2.5 text-[11px] font-mono uppercase tracking-[0.16em] text-[#e2e8f0] transition hover:border-slate-500 hover:text-[#e2e8f0]"
        >
          Download resume (place file as public/resume.pdf)
        </a>
      </div>
    </section>
  );
}

