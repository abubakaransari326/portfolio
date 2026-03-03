import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 space-y-4"
    >
      <h2
        id="skills-heading"
        className="text-xs font-mono uppercase tracking-[0.18em] text-[#e2e8f0]"
      >
        Skills
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm shadow-sm shadow-black/40"
          >
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[#e2e8f0]">
              {group.label}
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`rounded-full border px-2 py-0.5 text-[11px] ${
                    skill.highlight
                      ? "border-slate-400 bg-slate-700/50 text-[#e2e8f0]"
                      : "border-slate-700 bg-slate-800 text-[#e2e8f0]"
                  }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

