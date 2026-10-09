import { Carousel } from "@/components/Carousel";
import { person } from "@/content/site-data";

export function Hero() {
  return (
    <header className="pt-10 pb-14 lg:pt-6 flex flex-col sm:flex-row-reverse sm:items-start sm:justify-between gap-6 sm:gap-10">
      {person.photos.length > 0 && (
        <div
          className="relative w-28 sm:w-52 lg:w-60 shrink-0 aspect-[4/5] border overflow-hidden"
          style={{ borderColor: "var(--line-strong)", background: "var(--ink)" }}
        >
          <Carousel images={person.photos} alt={person.name} sizes="15rem" eager />
        </div>
      )}

      <div>
        <p className="font-mono text-[13px] mb-4" style={{ color: "var(--paper-faint)" }}>
          {person.location}
        </p>

        <h1 className="font-display tracking-tight text-[2.5rem] sm:text-[3.25rem] leading-[1.05] mb-3">
          {person.name}
        </h1>

        <p className="font-display text-xl mb-5" style={{ color: "var(--paper)" }}>
          {person.headline}
        </p>

        <p className="max-w-[44ch] leading-relaxed mb-5" style={{ color: "var(--paper-dim)" }}>
          {person.description}
        </p>

        <p className="flex items-center gap-2.5 font-mono text-[13px] mb-5">
          <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--paper)", boxShadow: "none" }} />
          {person.availability}
        </p>

        <ul className="flex flex-col gap-1 mb-7 font-mono text-xs" style={{ color: "var(--paper-faint)" }}>
          {person.proof.map((line) => (
            <li key={line}>
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-2.5">
          <a href="#featured" className="btn btn-primary">
            Explore Projects
          </a>
          {person.resumeHref && (
            <a href={person.resumeHref} target="_blank" rel="noopener noreferrer" className="btn">
              View Resume
            </a>
          )}
          {person.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="btn">
              {s.label}
            </a>
          ))}
          <a href={`mailto:${person.email}`} className="btn">
            Email
          </a>
        </div>
      </div>
    </header>
  );
}
