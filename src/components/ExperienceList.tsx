import { Carousel } from "@/components/Carousel";
import { Experience } from "@/content/site-data";

export function ExperienceList({ entries }: { entries: Experience[] }) {
  return (
    <div className="flex flex-col gap-6">
      {entries.map((e) => (
        <ExperienceCard key={`${e.role} ${e.org}`} entry={e} />
      ))}
    </div>
  );
}

function ExperienceCard({ entry }: { entry: Experience }) {
  return (
    <article className="card p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-1">
        <h3 className="font-display text-xl leading-snug">{entry.role}</h3>
        <span className="font-mono text-xs" style={{ color: "var(--paper-faint)" }}>
          {entry.period}
        </span>
      </div>
      <p className="text-sm mb-5" style={{ color: "var(--paper-dim)" }}>
        {entry.org}
      </p>

      {entry.description && (
        <p className="max-w-[64ch] leading-relaxed mb-6" style={{ color: "var(--paper-dim)" }}>
          {entry.description}
        </p>
      )}

      {entry.caseStudies && entry.caseStudies.length > 0 && (
        <div className="grid gap-px md:grid-cols-2 mb-6">
          {entry.caseStudies.map((c) => (
            <div key={c.title} className="p-5" style={{ outline: "1px solid var(--line)" }}>
              <h4 className="font-display text-base leading-snug mb-3">{c.title}</h4>
              <ul className="points text-[0.94rem]">
                {c.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {entry.highlights && entry.highlights.length > 0 && (
        <ul className="points max-w-[68ch] mb-6">
          {entry.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}

      {entry.images && entry.images.length > 0 && (
        <div
          className="relative aspect-[16/10] mb-6 border overflow-hidden"
          style={{ borderColor: "var(--line-strong)", background: "var(--ink-raised)" }}
        >
          <Carousel images={entry.images} alt={`${entry.role} work sample`} sizes="(min-width: 1024px) 50rem, 100vw" fit="contain" />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <span className="eyebrow mr-1">{entry.toolsLabel}</span>
        {entry.tools.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
