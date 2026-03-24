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
      <div className="space-y-10">
        {experience.map((role) => (
          <article
            key={role.id}
            className="group cursor-default rounded-2xl border border-transparent p-4 text-sm transition-[border-color,box-shadow] duration-200 motion-reduce:transition-none hover:border-[#5EEAD5] hover:shadow-[0_0_28px_-6px_rgba(94,234,213,0.18)]"
          >
            <div className="grid gap-4 sm:grid-cols-[minmax(0,8rem)_minmax(0,1fr)] sm:items-start sm:gap-6">
              <div className="sm:pt-0.5">
                <p className="whitespace-nowrap text-xs font-medium tabular-nums text-[#94a3b8] sm:whitespace-normal sm:text-sm">
                  {formatDateRange(role)}
                </p>
              </div>
              <div className="min-w-0 space-y-3">
                <div>
                  <h3 className="text-sm font-semibold text-[#e2e8f0] transition-colors duration-200 motion-reduce:transition-none sm:text-base group-hover:text-[#5EEAD5]">
                    {role.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-[#94a3b8] sm:text-sm">
                    {role.company}
                    {role.location ? ` · ${role.location}` : null}
                  </p>
                </div>
                <ul className="space-y-1.5 text-xs leading-relaxed text-[#94a3b8] sm:text-sm">
                  {role.bullets.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                {role.techStack && role.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {role.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-[#5EEAD5] sm:text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="pt-5">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-2xl border border-transparent px-4 py-3 text-xs font-semibold text-[#e2e8f0] transition-[border-color,box-shadow,color] duration-200 motion-reduce:transition-none hover:border-[#5EEAD5] hover:text-[#5EEAD5] hover:shadow-[0_0_28px_-6px_rgba(94,234,213,0.18)] sm:text-sm"
        >
          View Full Resume
          <span aria-hidden="true" className="ml-1">
            →
          </span>
        </a>
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

function formatDateRange(role: (typeof experience)[number]) {
  const end =
    role.endDate === "Present" ? "Present" : formatDate(role.endDate);
  return `${formatDate(role.startDate)} – ${end}`;
}

