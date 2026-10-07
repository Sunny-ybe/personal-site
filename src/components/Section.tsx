import { ReactNode } from "react";

export function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-14 lg:py-16 rule first:border-t-0">
      <h2 className="font-display font-semibold text-2xl mb-2">{title}</h2>
      {intro ? (
        <p className="max-w-[55ch] mb-8" style={{ color: "var(--paper-dim)" }}>
          {intro}
        </p>
      ) : (
        <div className="mb-8" />
      )}
      <div className="flex flex-col gap-10">{children}</div>
    </section>
  );
}
