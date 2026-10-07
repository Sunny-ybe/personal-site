"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "work", label: "Experience" },
  { id: "data", label: "Data work" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Shipped & vibe-coded" },
  { id: "community", label: "Community & ventures" },
  { id: "notes", label: "Field notes" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);

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

    for (const section of SECTIONS) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop: sticky left rail */}
      <nav
        aria-label="Section index"
        className="hidden lg:flex flex-col gap-1 sticky top-16 self-start py-1"
      >
        {SECTIONS.map((s) => (
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
        {SECTIONS.map((s) => (
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
