import Image from "next/image";
import { ScreenshotProject } from "@/content/site-data";

export function ProjectGrid({ projects }: { projects: ScreenshotProject[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: "var(--line)" }}>
      {projects.map((p) => (
        <ProjectTile key={p.title} project={p} />
      ))}
    </div>
  );
}

function ProjectTile({ project }: { project: ScreenshotProject }) {
  return (
    <div className="p-6" style={{ background: "var(--ink)" }}>
      <div
        className="relative aspect-[16/10] mb-4 border overflow-hidden flex items-center justify-center"
        style={{ borderColor: "var(--line-strong)", background: "var(--ink-raised)" }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
          />
        ) : (
          <span className="font-display text-sm" style={{ color: "var(--paper-faint)" }}>
            Screenshot pending
          </span>
        )}
      </div>

      <div className="flex items-baseline justify-between gap-4 mb-1">
        <h3 className="font-display font-semibold">{project.title}</h3>
        <span className="font-mono text-xs" style={{ color: "var(--paper-faint)" }}>
          {project.period}
        </span>
      </div>

      <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--paper-dim)" }}>
        {project.description}
      </p>

      {project.stack && project.stack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {project.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      )}

      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-5">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs pb-0.5 border-b"
              style={{ borderColor: "var(--line-strong)", color: "var(--paper)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
