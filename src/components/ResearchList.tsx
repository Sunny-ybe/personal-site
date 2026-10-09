import { Carousel } from "@/components/Carousel";
import { ResearchEntry } from "@/content/site-data";

export function ResearchList({ entries }: { entries: ResearchEntry[] }) {
  return (
    <div className="flex flex-col gap-6">
      {entries.map((r) => (
        <article key={r.title} className="card p-6 sm:p-8">
          <h3 className="font-display text-xl leading-snug mb-5">{r.title}</h3>

          <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-[7rem_minmax(0,1fr)] mb-6">
            {[
              ["Question", r.question],
              ["Method", r.method],
              ["Findings", r.findings],
            ].map(([label, text]) => (
              <div key={label} className="contents">
                <dt className="eyebrow pt-1.5">{label}</dt>
                <dd className="max-w-[62ch] leading-relaxed" style={{ color: "var(--paper-dim)" }}>
                  {text}
                </dd>
              </div>
            ))}
          </dl>

          {r.images && r.images.length > 0 && (
            <div
              className="relative aspect-[16/10] mb-6 border overflow-hidden"
              style={{ borderColor: "var(--line-strong)", background: "var(--ink-raised)" }}
            >
              <Carousel images={r.images} alt={`${r.title} figure`} sizes="(min-width: 1024px) 50rem, 100vw" fit="contain" />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2">
            {r.technologies?.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
            {r.pdf && (
              <a href={r.pdf} target="_blank" rel="noopener noreferrer" className="btn ml-auto">
                Read the PDF ↗
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
