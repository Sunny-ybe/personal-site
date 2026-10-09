import { person } from "@/content/site-data";

export function Footer() {
  return (
    <section id="contact" className="scroll-mt-20 py-14 lg:py-16 rule">
      <h2 className="font-display text-2xl mb-3">Let&apos;s Connect</h2>
      <p className="max-w-[58ch] mb-8" style={{ color: "var(--paper-dim)" }}>
        I&apos;m interested in software engineering and AI internships, ambitious early-stage teams, and
        conversations with people building interesting things.
      </p>

      <div className="flex flex-wrap items-center gap-2.5 mb-16">
        <a href={`mailto:${person.email}`} className="btn btn-primary">
          {person.email}
        </a>
        {person.socials
          .toReversed()
          .map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="btn">
              {s.label}
            </a>
          ))}
        {person.resumeHref && (
          <a href={person.resumeHref} target="_blank" rel="noopener noreferrer" className="btn">
            Resume
          </a>
        )}
      </div>

      <p className="font-mono text-xs" style={{ color: "var(--paper-faint)" }}>
        © 2026 {person.name}
      </p>
    </section>
  );
}
