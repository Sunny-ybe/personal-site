import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Section } from "@/components/Section";
import { EntryRow } from "@/components/EntryRow";
import { ProjectGrid } from "@/components/ProjectGrid";
import { FieldNotes } from "@/components/FieldNotes";
import { Footer } from "@/components/Footer";
import {
  sweWork,
  dataWork,
  research,
  vibeProjects,
  community,
  fieldNotes,
} from "@/content/site-data";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 lg:px-10">
      <div className="lg:hidden">
        <Nav />
      </div>

      <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
        <div className="hidden lg:block">
          <Nav />
        </div>

        <main>
          <Hero />

          <Section
            id="work"
            title="Software engineering"
            intro="Where I build — roles and the systems I shipped."
          >
            {sweWork.map((e) => (
              <EntryRow key={e.code} entry={e} />
            ))}
          </Section>

          <Section
            id="data"
            title="Data work"
            intro="Analysis that answered a real question and drove a decision."
          >
            {dataWork.map((e) => (
              <EntryRow key={e.code} entry={e} />
            ))}
          </Section>

          <Section id="research" title="Research">
            {research.map((e) => (
              <EntryRow key={e.code} entry={e} />
            ))}
          </Section>

          <Section
            id="projects"
            title="Shipped & vibe-coded"
            intro="Things I built end to end, mostly for real users rather than a portfolio."
          >
            <ProjectGrid projects={vibeProjects} />
          </Section>

          <Section
            id="community"
            title="Community & ventures"
            intro="Efforts to build something outside of a job or a class."
          >
            {community.map((e) => (
              <EntryRow key={e.code} entry={e} />
            ))}
          </Section>

          <Section
            id="notes"
            title="Field notes"
            intro="Small, specific moments that say more than a bullet point."
          >
            <FieldNotes notes={fieldNotes} />
          </Section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
