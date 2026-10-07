import { person } from "@/content/site-data";

export function Footer() {
  return (
    <section id="contact" className="scroll-mt-20 py-14 lg:py-16 rule">
      <h2 className="font-display font-semibold text-2xl mb-4">Get in touch</h2>
      <p className="max-w-[50ch] mb-8" style={{ color: "var(--paper-dim)" }}>
        Open to internships and coffee chats. The fastest way to reach me is
        email.
      </p>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-16">
        <a
          href={`mailto:${person.email}`}
          className="font-mono text-base pb-0.5 border-b"
          style={{ borderColor: "var(--brass)", color: "var(--paper)" }}
        >
          {person.email}
        </a>
        <a href={person.resumeHref} className="font-mono text-sm" style={{ color: "var(--paper-dim)" }}>
          Resume
        </a>
        {person.socials.map((s) => (
          <a key={s.label} href={s.href} className="font-mono text-sm" style={{ color: "var(--paper-dim)" }}>
            {s.label}
          </a>
        ))}
      </div>

      <p className="font-mono text-xs" style={{ color: "var(--paper-faint)" }}>
        © {new Date().getFullYear()} {person.name}
      </p>
    </section>
  );
}
