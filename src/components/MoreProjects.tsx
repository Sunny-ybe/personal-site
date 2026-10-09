import { Carousel } from "@/components/Carousel";
import { StatusBadge } from "@/components/StatusBadge";
import { MoreProject } from "@/content/site-data";

export function MoreProjects({ projects }: { projects: MoreProject[] }) {
  return (
    // An odd last card spans both columns, so the grid never has an empty cell.
    <div className="grid gap-4 sm:grid-cols-2 sm:items-start">
      {projects.map((p) => (
        <article key={p.name} className="card p-5 sm:p-6 flex flex-col sm:last:odd:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mb-1">
            <h3 className="font-display text-lg leading-snug">{p.name}</h3>
            {p.status && <StatusBadge status={p.status} />}
          </div>

          {p.tagline && (
            <p className="text-sm mb-3" style={{ color: "var(--paper-dim)" }}>
              {p.tagline}
            </p>
          )}

          <p className="text-[0.94rem] leading-relaxed mt-2 mb-4" style={{ color: "var(--paper-dim)" }}>
            {p.description}
          </p>

          {p.images && p.images.length > 0 && (
            <div
              className="relative aspect-[16/9] mb-4 border overflow-hidden"
              style={{ borderColor: "var(--line-strong)", background: "var(--ink-raised)" }}
            >
              <Carousel images={p.images} alt={`${p.name} screenshot`} sizes="(min-width: 640px) 24rem, 100vw" />
            </div>
          )}

          {((p.stack && p.stack.length > 0) || (p.links && p.links.length > 0)) && (
            <div className="flex flex-wrap items-center gap-2 mt-auto">
              {p.stack?.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
              {p.links?.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn ml-auto">
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
