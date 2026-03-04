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
    const handleScroll = () => {
      const threshold = 120;
      let current: string | null = null;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold) {
          current = sections[i].id;
          break;
        }
      }

      setActiveId(current ?? sections[0].id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
