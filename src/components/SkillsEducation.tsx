import { education, skills } from "@/content/site-data";

export function SkillsEducation() {
  return (
    <div className="flex flex-col gap-6">
      <article className="card p-6 sm:p-8">
        <h3 className="eyebrow mb-5">Skills</h3>
        <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-[11rem_minmax(0,1fr)]">
          {skills.map((group) => (
            <div key={group.label} className="contents">
              <dt className="font-display text-[0.94rem] leading-relaxed">{group.label}</dt>
              <dd className="text-[0.94rem] leading-relaxed" style={{ color: "var(--paper-dim)" }}>
                {group.items.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </article>

      <article className="card p-6 sm:p-8">
        <h3 className="eyebrow mb-5">Education & Activities</h3>

        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-1">
          <p className="font-display text-xl leading-snug">{education.school}</p>
          <span className="font-mono text-xs" style={{ color: "var(--paper-faint)" }}>
            {education.expected}
          </span>
        </div>
        <p className="mb-4" style={{ color: "var(--paper-dim)" }}>
          {education.degree} · {education.gpa}
        </p>

        <p className="text-[0.94rem] mb-4" style={{ color: "var(--paper-dim)" }}>
          {education.honors.join(" · ")}
        </p>

        <p className="text-[0.94rem]" style={{ color: "var(--paper-dim)" }}>
          {education.activities.map((a) => `${a.label}: ${a.items.join(", ")}`).join(" · ")}
        </p>
      </article>
    </div>
  );
}
