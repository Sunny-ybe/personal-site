import { Carousel } from "@/components/Carousel";
import { FilmEmbed } from "@/components/FilmEmbed";
import { StatusBadge } from "@/components/StatusBadge";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { MoreProject } from "@/content/site-data";

export function MoreProjects({ projects }: { projects: MoreProject[] }) {
  // Wide cards, and a leftover odd last card, span both columns so the
  // grid never has an empty cell.
  const halfWidth = projects.filter((p) => !p.wide);
  const spansRow = (p: MoreProject) => p.wide || (halfWidth.length % 2 === 1 && p === halfWidth.at(-1));

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:items-start">
      {projects.map((p) => (
        <article key={p.name} className={`card p-5 sm:p-6 ${spansRow(p) ? "sm:col-span-2" : ""}`}>
          {/* A wide card puts its video or images beside the text. */}
          <div className={p.wide && hasMedia(p) ? "grid gap-6 md:grid-cols-2 md:gap-8" : undefined}>
            <div className="min-w-0 flex flex-col">
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

              {!p.wide && <Media project={p} />}

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
            </div>

            {p.wide && hasMedia(p) && (
              <div className="min-w-0">
                <Media project={p} />
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

function hasMedia(p: MoreProject) {
  return !!p.video || !!p.film || (!!p.images && p.images.length > 0);
}

function Media({ project: p }: { project: MoreProject }) {
  return (
    <>
      {p.video && (
        <div className="mb-4">
          <p className="eyebrow mb-2">{p.video.label}</p>
          <YouTubeEmbed id={p.video.youtubeId} title={`${p.name}: ${p.video.label}`} />
        </div>
      )}

      {p.film && (
        <div className="mb-4">
          <p className="eyebrow mb-2">{p.film.label}</p>
          <FilmEmbed src={p.film.src} title={`${p.name}: ${p.film.label}`} />
        </div>
      )}

      {p.images && p.images.length > 0 && (
        <div
          className="relative aspect-[16/9] mb-4 border overflow-hidden"
          style={{ borderColor: "var(--line-strong)", background: "var(--ink-raised)" }}
        >
          <Carousel images={p.images} alt={`${p.name} screenshot`} sizes="(min-width: 640px) 24rem, 100vw" />
        </div>
      )}
    </>
  );
}
