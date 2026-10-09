import { Hero } from "@/components/Hero";
import { Nav, NavSection } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function Home() {
  // A section only gets a nav entry when it has something published.
  const sections: NavSection[] = [{ id: "contact", label: "Contact" }];

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
          <Footer />
        </main>
      </div>
    </div>
  );
}
