import { FieldNote } from "@/content/site-data";

export function FieldNotes({ notes }: { notes: FieldNote[] }) {
  return (
    <div className="flex flex-col gap-8">
      {notes.map((n) => (
        <article key={n.title} className="max-w-[62ch]">
          <h3 className="font-display font-semibold text-lg mb-2">{n.title}</h3>
          <p className="leading-relaxed" style={{ color: "var(--paper-dim)" }}>
            {n.body}
          </p>
        </article>
      ))}
    </div>
  );
}
