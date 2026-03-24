"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
] as const;

type SectionId = (typeof sections)[number]["id"];

export function SectionNav() {
  const [activeId, setActiveId] = useState<SectionId>(sections[0].id);

  useEffect(() => {
    const updateActive = () => {
      const viewportH = window.innerHeight;
      let bestId: SectionId = sections[0].id;
      let bestVisible = -1;
      let bestOrder = -1;

      for (let i = 0; i < sections.length; i++) {
        const { id } = sections[i];
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const visible = Math.min(rect.bottom, viewportH) - Math.max(rect.top, 0);
        const clamped = Math.max(0, visible);

        if (
          clamped > bestVisible ||
          (clamped === bestVisible && clamped > 0 && i > bestOrder)
        ) {
          bestVisible = clamped;
          bestId = id;
          bestOrder = i;
        }
      }

      setActiveId(bestId);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <>
      {/* Mobile: horizontal rail */}
      <nav aria-label="Sections" className="lg:hidden">
        {/* Extra vertical padding avoids clipping chip tops when the row scrolls horizontally */}
        <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {sections.map(({ id, label }) => {
            const isActive = activeId === id;
            return (
              <li key={id} className="min-w-0 shrink-0 snap-start py-0.5">
                <a
                  href={`#${id}`}
                  className={`inline-flex min-h-9 items-center justify-center rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide transition-colors motion-reduce:transition-none sm:min-h-10 sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-wider ${
                    isActive
                      ? "bg-[#5EEAD5]/20 text-[#5EEAD5] ring-1 ring-[#5EEAD5]/40 ring-offset-1 ring-offset-[#0f172a] sm:ring-offset-2"
                      : "bg-slate-800/80 text-slate-400 ring-1 ring-slate-700/80 ring-offset-1 ring-offset-[#0f172a] active:text-[#e2e8f0] sm:ring-offset-2"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Desktop: vertical rail */}
      <nav aria-label="Sections" className="hidden lg:block">
        <ul className="flex flex-col">
          {sections.map(({ id, label }) => {
            const isActive = activeId === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`group flex items-center py-3 ${isActive ? "active" : ""}`}
                >
                  <span
                    className={`mr-4 h-px shrink-0 bg-slate-600 transition-all motion-reduce:transition-none ${
                      isActive
                        ? "w-16 bg-white"
                        : "w-8 group-hover:w-16 group-hover:bg-[#e2e8f0] group-focus-visible:w-16 group-focus-visible:bg-[#e2e8f0]"
                    }`}
                  />
                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${
                      isActive
                        ? "text-[#e2e8f0]"
                        : "text-slate-500 group-hover:text-[#e2e8f0] group-focus-visible:text-[#e2e8f0]"
                    }`}
                  >
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
