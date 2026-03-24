"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

export function SectionNav() {
  const [activeId, setActiveId] = useState<string | null>("about");

  useEffect(() => {
    const updateActive = () => {
      const viewportH = window.innerHeight;
      let bestId = sections[0].id;
      let bestVisible = -1;
      let bestOrder = -1;

      for (let i = 0; i < sections.length; i++) {
        const { id } = sections[i];
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const visible = Math.min(rect.bottom, viewportH) - Math.max(rect.top, 0);
        const clamped = Math.max(0, visible);

        if (clamped > bestVisible || (clamped === bestVisible && clamped > 0 && i > bestOrder)) {
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
    <nav aria-label="Sections">
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
  );
}
