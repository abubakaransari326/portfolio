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
        className="text-xs font-mono uppercase tracking-[0.18em] text-cyan-300"
      >
        Experience
      </h2>
      <div className="space-y-3">
        {experience.map((role) => (
          <article
            key={role.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm shadow-sm shadow-black/40"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="font-semibold text-slate-50">
                  {role.title}
                </h3>
                <p className="text-xs text-slate-300">
                  {role.company}
                  {role.location ? ` · ${role.location}` : null}
                </p>
              </div>
              <p className="text-xs text-slate-400">
                {formatDate(role.startDate)} –{" "}
                {role.endDate === "Present"
                  ? "Present"
                  : formatDate(role.endDate)}
              </p>
            </div>
            <ul className="mt-3 space-y-1 text-xs text-slate-300">
              {role.bullets.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            {role.techStack && role.techStack.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1">
                {role.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-200"
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

