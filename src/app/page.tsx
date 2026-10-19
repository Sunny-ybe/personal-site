import { Hero } from "@/components/Hero";
import { Nav, NavSection } from "@/components/Nav";
import { Section } from "@/components/Section";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ExperienceList } from "@/components/ExperienceList";
import { ResearchList } from "@/components/ResearchList";
import { MoreProjects } from "@/components/MoreProjects";
import { SkillsEducation } from "@/components/SkillsEducation";
import { FieldNotes } from "@/components/FieldNotes";
import { Footer } from "@/components/Footer";
import { experience, featuredProjects, fieldNotes, moreProjects, research } from "@/content/site-data";

export default function Home() {
  const featured = featuredProjects.filter((p) => p.published);
  const roles = experience.filter((e) => e.published);
  const papers = research.filter((r) => r.published);
  const more = moreProjects.filter((p) => p.published);
  const notes = fieldNotes.filter((n) => n.published);

  // A section only renders, and only gets a nav entry, when it has
  // something published.
  const sections: NavSection[] = [
    featured.length > 0 && { id: "featured", label: "Projects" },
    roles.length > 0 && { id: "experience", label: "Experience" },
    papers.length > 0 && { id: "research", label: "Research & Analysis" },
    more.length > 0 && { id: "more", label: "More Projects" },
    { id: "skills", label: "Skills & Education" },
    notes.length > 0 && { id: "notes", label: "Field Notes" },
    { id: "contact", label: "Contact" },
  ].filter((s) => !!s);

  return (
    <div className="mx-auto w-full max-w-[70rem] px-5 sm:px-6 lg:px-10">
      <div className="lg:hidden">
        <Nav sections={sections} />
      </div>

      <div className="lg:grid lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-14">
        <div className="hidden lg:block">
          <Nav sections={sections} />
        </div>

        <main className="content">
          <Hero />

          {featured.length > 0 && (
            <Section id="featured" title="Projects" intro="Selected software I've built and shipped.">
              <FeaturedProjects projects={featured} />
            </Section>
          )}

          {roles.length > 0 && (
            <Section id="experience" title="Experience" intro="Systems built for real organizational workflows.">
              <ExperienceList entries={roles} />
            </Section>
          )}

          {papers.length > 0 && (
            <Section
              id="research"
              title="Research & Analysis"
              intro="Research, experiments, and data-driven investigations."
            >
              <ResearchList entries={papers} />
            </Section>
          )}

          {more.length > 0 && (
            <Section
              id="more"
              title="More Things I've Built"
              intro="Experiments and products beyond my main engineering work."
            >
              <MoreProjects projects={more} />
            </Section>
          )}

          <Section id="skills" title="Skills & Education">
            <SkillsEducation />
          </Section>

          {notes.length > 0 && (
            <Section id="notes" title="Field Notes" intro="Observations from building, working, and learning.">
              <FieldNotes notes={notes} />
            </Section>
          )}

          <Footer />
        </main>
      </div>
    </div>
  );
}
