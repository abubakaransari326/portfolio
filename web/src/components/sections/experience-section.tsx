import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 space-y-4"
    >
      <h2
        id="experience-heading"
        className="text-xs font-mono uppercase tracking-[0.18em] text-[#e2e8f0] lg:hidden"
      >
        Experience
      </h2>
      <div className="space-y-3">
        {experience.map((role) => (
          <article
            key={role.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs shadow-sm shadow-black/40"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="font-semibold text-[#e2e8f0]">
                  {role.title}
                </h3>
                <p className="text-[11px] text-[#94a3b8]">
                  {role.company}
                  {role.location ? ` · ${role.location}` : null}
                </p>
              </div>
              <p className="text-[11px] text-[#94a3b8]">
                {formatDate(role.startDate)} –{" "}
                {role.endDate === "Present"
                  ? "Present"
                  : formatDate(role.endDate)}
              </p>
            </div>
            <ul className="mt-3 space-y-1 text-[11px] text-[#94a3b8]">
              {role.bullets.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            {role.techStack && role.techStack.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1">
                {role.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-[#94a3b8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function formatDate(value: string) {
  const [year, month] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
  });
}

