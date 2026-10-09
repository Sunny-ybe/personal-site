import { FieldNote } from "@/content/site-data";

export function FieldNotes({ notes }: { notes: FieldNote[] }) {
  return (
    <div className="flex flex-col gap-6">
      {notes.map((n) => (
        <article key={n.title} className="card p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-3">
            <h3 className="font-display text-lg leading-snug">{n.title}</h3>
            {n.date && (
              <span className="font-mono text-xs" style={{ color: "var(--paper-faint)" }}>
                {n.date}
              </span>
            )}
          </div>

          <p className="max-w-[64ch] leading-relaxed" style={{ color: "var(--paper-dim)" }}>
            {n.story}
          </p>

          {n.lesson && (
            <div className="mt-5">
              <h4 className="eyebrow mb-2">Lesson</h4>
              <p className="max-w-[64ch] leading-relaxed">{n.lesson}</p>
            </div>
          )}

          {n.link && (
            <a href={n.link.href} target="_blank" rel="noopener noreferrer" className="btn mt-5">
              {n.link.label} ↗
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
