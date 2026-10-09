"use client";

import { useEffect, useState } from "react";

export type NavSection = { id: string; label: string };

export function Nav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      {/* Desktop: sticky left rail */}
      <nav
        aria-label="Section index"
        className="hidden lg:flex flex-col gap-1 sticky top-16 self-start py-1"
      >
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center gap-3 py-1.5 font-mono text-[13px] transition-colors"
            style={{ color: active === s.id ? "var(--brass-light)" : "var(--paper-faint)" }}
          >
            <span
              className="h-px w-4 shrink-0 transition-all"
              style={{
                background: active === s.id ? "var(--brass)" : "var(--line-strong)",
                width: active === s.id ? "1.5rem" : "1rem",
              }}
            />
            {s.label}
          </a>
        ))}
      </nav>

      {/* Mobile / tablet: horizontal scroll bar */}
      <nav
        aria-label="Section index"
        className="lg:hidden flex gap-5 overflow-x-auto py-3 font-mono text-[13px] border-b"
        style={{ borderColor: "var(--line)" }}
      >
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="shrink-0 whitespace-nowrap"
            style={{ color: active === s.id ? "var(--brass-light)" : "var(--paper-faint)" }}
          >
            {s.label}
          </a>
        ))}
      </nav>
    </>
  );
}
