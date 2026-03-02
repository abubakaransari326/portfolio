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
          className="text-xs font-mono uppercase tracking-[0.18em] text-cyan-300"
        >
          Projects
        </h2>
        <p className="text-[11px] text-slate-400">
          Selected work — we’ll refine this with your resume.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm shadow-sm shadow-black/40 transition hover:border-cyan-400/80 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-50">
                {project.name}
              </h3>
              <p className="text-xs text-slate-300">
                {project.description}
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-300">
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
                    className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-200"
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
                    className="text-cyan-300 underline-offset-2 hover:text-cyan-200 hover:underline"
                  >
                    Live
                  </a>
                )}
                {project.sourceCodeUrl && (
                  <a
                    href={project.sourceCodeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-300 underline-offset-2 hover:text-cyan-200 hover:underline"
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

