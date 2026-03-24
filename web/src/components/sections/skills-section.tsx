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
        className="text-xs font-mono uppercase tracking-[0.18em] text-[#e2e8f0] lg:hidden"
      >
        Skills
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.id}
            className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs shadow-sm shadow-black/40 transition-[border-color,box-shadow] duration-200 motion-reduce:transition-none hover:border-[#5EEAD5] hover:shadow-[0_0_28px_-6px_rgba(94,234,213,0.22)]"
          >
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[#e2e8f0] transition-colors duration-200 motion-reduce:transition-none group-hover:text-[#5EEAD5]">
              {group.label}
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`rounded-full px-2 py-0.5 text-[10px] text-[#5EEAD5] ${
                    skill.highlight
                      ? "bg-[#5EEAD5]/20"
                      : "bg-slate-800"
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

