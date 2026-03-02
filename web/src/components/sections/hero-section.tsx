import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="scroll-mt-24 space-y-6"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-slate-300 shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
        <span>Software Engineer Portfolio</span>
      </div>
      <h1
        id="hero-heading"
        className="bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-balance text-3xl font-semibold tracking-tight text-transparent sm:text-4xl"
      >
        {profile.name || "Your Name"}
      </h1>
      <p className="max-w-2xl text-pretty text-xs font-mono uppercase tracking-[0.18em] text-slate-400">
        {profile.title}
        {profile.location ? ` · ${profile.location}` : null}
        {profile.currentRole ? ` · ${profile.currentRole}` : null}
      </p>
      <p className="max-w-2xl text-pretty text-sm text-slate-200/90 sm:text-base">
        {profile.summary}
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-sm transition hover:bg-cyan-400"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
        >
          Contact
        </a>
        <a
          href="/resume.pdf"
          className="inline-flex items-center justify-center rounded-full border border-dashed border-slate-700 px-5 py-2.5 text-[11px] font-mono uppercase tracking-[0.16em] text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
        >
          Download resume (place file as public/resume.pdf)
        </a>
      </div>
    </section>
  );
}

