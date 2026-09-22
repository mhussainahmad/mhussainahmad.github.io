import { SiteNav } from "@/components/researcher/SiteNav";
import { Header } from "@/components/researcher/Header";
import { Section } from "@/components/researcher/Section";
import { About } from "@/components/researcher/About";
import { Interests } from "@/components/researcher/Interests";
import { Experience } from "@/components/researcher/Experience";
import { Education } from "@/components/researcher/Education";
import { Publications } from "@/components/researcher/Publications";
import { Skills } from "@/components/researcher/Skills";
import { Projects } from "@/components/researcher/Projects";
import { Footer } from "@/components/researcher/Footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-svh w-full bg-background">
      <SiteNav />
      <main className="mx-auto w-full max-w-[48rem] px-5 pt-20 pb-12 sm:px-8 sm:pt-16 sm:pb-16">
        <Header />
        <Separator className="my-8" />
        <About />
        <Section title="Experience" spacing="lg">
          <Experience />
        </Section>
        <Section title="Research Interest" spacing="lg">
          <Interests />
        </Section>
        <Section id="publications" title="Publications" spacing="lg">
          <Publications />
        </Section>
        <Projects />
        <Section title="Education" spacing="lg">
          <Education />
        </Section>
        <Section title="Skills" spacing="lg">
          <Skills />
        </Section>
        <Footer />
      </main>
    </div>
  );
}
