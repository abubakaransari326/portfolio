import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 space-y-4"
    >
      <div className="flex items-baseline justify-between gap-2">
        <h2
          id="projects-heading"
          className="text-xs font-mono uppercase tracking-[0.18em] text-[#e2e8f0] lg:hidden"
        >
          Projects
        </h2>
      </div>
      <div className="space-y-10">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="group cursor-default rounded-2xl border border-transparent p-4 text-sm transition-[border-color,box-shadow] duration-200 motion-reduce:transition-none hover:border-[#5EEAD5] hover:shadow-[0_0_28px_-6px_rgba(94,234,213,0.18)]"
          >
            <div className="min-w-0 space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-[#e2e8f0] transition-colors duration-200 motion-reduce:transition-none sm:text-base group-hover:text-[#5EEAD5]">
                  {project.name}
                </h3>
                <p className="mt-0.5 text-xs leading-relaxed text-[#94a3b8] sm:text-sm">
                  {project.description}
                </p>
              </div>
              <ul className="space-y-1.5 text-xs leading-relaxed text-[#94a3b8] sm:text-sm">
                {project.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-[#5EEAD5] sm:text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {(project.link || project.sourceCodeUrl) && (
                  <div className="flex shrink-0 gap-3 text-xs font-medium sm:text-sm">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#94a3b8] underline-offset-2 hover:opacity-90 hover:underline"
                      >
                        Live
                      </a>
                    )}
                    {project.sourceCodeUrl && (
                      <a
                        href={project.sourceCodeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#94a3b8] underline-offset-2 hover:opacity-90 hover:underline"
                      >
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

