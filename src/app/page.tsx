import { Hero } from "@/components/Hero";
import { Nav, NavSection } from "@/components/Nav";
import { Section } from "@/components/Section";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ExperienceList } from "@/components/ExperienceList";
import { ResearchList } from "@/components/ResearchList";
import { Footer } from "@/components/Footer";
import { experience, featuredProjects, research } from "@/content/site-data";

export default function Home() {
  const featured = featuredProjects.filter((p) => p.published);
  const roles = experience.filter((e) => e.published);
  const papers = research.filter((r) => r.published);

  // A section only renders, and only gets a nav entry, when it has
  // something published.
  const sections: NavSection[] = [
    featured.length > 0 && { id: "featured", label: "Featured Work" },
    roles.length > 0 && { id: "experience", label: "Experience" },
    papers.length > 0 && { id: "research", label: "Research & Analysis" },
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
            <Section id="featured" title="Featured Work" intro="Selected software I've built and shipped.">
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

          <Footer />
        </main>
      </div>
    </div>
  );
}
