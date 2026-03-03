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
          className="text-xs font-mono uppercase tracking-[0.18em] text-[#e2e8f0]"
        >
          Projects
        </h2>
        <p className="text-[11px] text-[#e2e8f0]">
          Selected work — we’ll refine this with your resume.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm shadow-sm shadow-black/40 transition hover:border-slate-600 hover:shadow-lg"
          >
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-[#e2e8f0]">
                {project.name}
              </h3>
              <p className="text-xs text-[#e2e8f0]">
                {project.description}
              </p>
              <ul className="mt-2 space-y-1 text-xs text-[#e2e8f0]">
                {project.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-[#e2e8f0]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 text-[11px] font-medium">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#e2e8f0] underline-offset-2 hover:opacity-90 hover:underline"
                  >
                    Live
                  </a>
                )}
                {project.sourceCodeUrl && (
                  <a
                    href={project.sourceCodeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#e2e8f0] underline-offset-2 hover:opacity-90 hover:underline"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

