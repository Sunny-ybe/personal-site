import { Entry } from "@/content/site-data";

export function EntryRow({ entry }: { entry: Entry }) {
  return (
    <article className="grid grid-cols-1 sm:grid-cols-[88px_1fr] gap-x-6 gap-y-2">
      <div className="entry-code pt-1">{entry.code}</div>

      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
          <h3 className="font-display font-semibold text-lg">{entry.title}</h3>
          <span className="font-mono text-xs" style={{ color: "var(--paper-faint)" }}>
            {entry.period}
          </span>
        </div>

        {entry.org && (
          <p className="text-sm mb-2" style={{ color: "var(--brass-light)" }}>
            {entry.org}
          </p>
        )}

        <p className="max-w-[62ch] leading-relaxed mb-3" style={{ color: "var(--paper-dim)" }}>
          {entry.summary}
        </p>

        {entry.stack && entry.stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {entry.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        )}

        {entry.links && entry.links.length > 0 && (
          <div className="flex flex-wrap gap-5">
            {entry.links.map((l) => (
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
    </article>
  );
}
