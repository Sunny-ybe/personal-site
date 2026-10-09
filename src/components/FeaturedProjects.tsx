import { Carousel } from "@/components/Carousel";
import { StatusBadge } from "@/components/StatusBadge";
import { FeaturedProject, ProjectDetails } from "@/content/site-data";

export function FeaturedProjects({ projects }: { projects: FeaturedProject[] }) {
  return (
    <div className="flex flex-col gap-6">
      {projects.map((p) => (
        <FeaturedCard key={p.name} project={p} />
      ))}
    </div>
  );
}

function FeaturedCard({ project }: { project: FeaturedProject }) {
  const hasMedia = project.images && project.images.length > 0;

  return (
    <article className="card p-6 sm:p-8">
      <div className={hasMedia ? "grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start" : undefined}>
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
            <StatusBadge status={project.status} note={project.statusNote} />
            <span className="font-mono text-xs" style={{ color: "var(--paper-faint)" }}>
              {project.category}
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-[1.7rem] leading-tight">{project.name}</h3>
          <p className="font-display mb-4" style={{ color: "var(--paper-dim)" }}>
            {project.tagline}
          </p>

          <p className="max-w-[62ch] leading-relaxed mb-5" style={{ color: "var(--paper-dim)" }}>
            {project.summary}
          </p>

          {project.stat && (
            <p className="mb-5 pl-3 border-l-2 font-display text-lg leading-snug" style={{ borderColor: "var(--paper)" }}>
              {project.stat}
            </p>
          )}

          <ul className="points max-w-[62ch] mb-6">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>

        {hasMedia && (
          <div
            className="relative w-full max-w-[17rem] md:w-[17rem] mx-auto border overflow-hidden"
            style={{
              aspectRatio: project.mediaAspect ?? "16 / 10",
              borderColor: "var(--line-strong)",
              background: "var(--ink-raised)",
            }}
          >
            <Carousel
              images={project.images!}
              alt={`${project.name} screenshot`}
              sizes="(min-width: 768px) 17rem, 80vw"
              fit="contain"
            />
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-start gap-2.5 mt-7">
        {project.links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn">
            {l.label} ↗
          </a>
        ))}
        {project.details && <TechnicalDetails name={project.name} details={project.details} links={project.links} />}
      </div>
    </article>
  );
}

/** Expandable case study. Every subsection is optional and is skipped
 *  when the data has nothing for it. */
function TechnicalDetails({
  name,
  details,
  links,
}: {
  name: string;
  details: ProjectDetails;
  links: FeaturedProject["links"];
}) {
  return (
    <details className="details basis-full">
      <summary className="btn" aria-label={`Technical details for ${name}`}>
        Technical Details
      </summary>

      <div className="mt-6 pt-6 rule grid gap-7 md:grid-cols-2">
        {details.problem && (
          <DetailBlock title="Problem" wide>
            <p className="max-w-[62ch]" style={{ color: "var(--paper-dim)" }}>
              {details.problem}
            </p>
          </DetailBlock>
        )}

        {details.built && (
          <DetailBlock title="What I Built" wide>
            <p className="max-w-[62ch]" style={{ color: "var(--paper-dim)" }}>
              {details.built}
            </p>
          </DetailBlock>
        )}

        {details.architecture && details.architecture.length > 0 && (
          <DetailBlock title="Architecture" wide>
            <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[9rem_minmax(0,1fr)]">
              {details.architecture.map((row) => (
                <div key={row.part} className="contents">
                  <dt className="font-mono text-xs pt-1" style={{ color: "var(--paper)" }}>
                    {row.part}
                  </dt>
                  <dd className="leading-relaxed" style={{ color: "var(--paper-dim)" }}>
                    {row.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </DetailBlock>
        )}

        {details.challenges && details.challenges.length > 0 && (
          <DetailBlock title="Engineering Challenges & Trade-offs" wide>
            <ul className="points">
              {details.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </DetailBlock>
        )}

        {details.outcome && (
          <DetailBlock title="Outcome">
            <p style={{ color: "var(--paper-dim)" }}>{details.outcome}</p>
          </DetailBlock>
        )}

        {links.length > 0 && (
          <DetailBlock title="Demo / Source">
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="link [overflow-wrap:anywhere]">
                    {l.label}: {l.href.replace(/^https:\/\/(www\.)?/, "")}
                  </a>
                </li>
              ))}
            </ul>
          </DetailBlock>
        )}
      </div>
    </details>
  );
}

function DetailBlock({ title, wide, children }: { title: string; wide?: boolean; children: React.ReactNode }) {
  return (
    <div className={wide ? "min-w-0 md:col-span-2" : "min-w-0"}>
      <h4 className="eyebrow mb-2.5">{title}</h4>
      {children}
    </div>
  );
}
