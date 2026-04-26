import { Header } from "@/components/researcher/Header";
import { Section } from "@/components/researcher/Section";
import { About } from "@/components/researcher/About";
import { Projects } from "@/components/researcher/Projects";
import { Skills } from "@/components/researcher/Skills";
import { Footer } from "@/components/researcher/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-[44rem] px-5 sm:px-6 py-10 sm:py-16">
      <Header />

      <Section title="About" spacing="md">
        <About />
      </Section>

      <Section title="Selected projects">
        <Projects />
      </Section>

      <Section title="Skills">
        <Skills />
      </Section>

      <Footer />
    </main>
  );
}
