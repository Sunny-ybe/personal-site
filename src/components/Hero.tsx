import { person } from "@/content/site-data";

export function Hero() {
  return (
    <header className="pt-14 pb-16 lg:pt-6">
      <p className="font-mono text-[13px] mb-5" style={{ color: "var(--paper-faint)" }}>
        {person.location}
      </p>

      <h1 className="font-display font-semibold tracking-tight text-[2.75rem] sm:text-[3.5rem] leading-[1.05] mb-6">
        {person.name}
      </h1>

      <p
        className="max-w-[38ch] text-lg leading-relaxed mb-8"
        style={{ color: "var(--paper-dim)" }}
      >
        {person.tagline}
      </p>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href={`mailto:${person.email}`}
          className="font-mono text-sm pb-0.5 border-b"
          style={{ borderColor: "var(--brass)", color: "var(--paper)" }}
        >
          {person.email}
        </a>
        <a
          href={person.resumeHref}
          className="font-mono text-sm"
          style={{ color: "var(--paper-dim)" }}
        >
          Resume
        </a>
        {person.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="font-mono text-sm"
            style={{ color: "var(--paper-dim)" }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </header>
  );
}
