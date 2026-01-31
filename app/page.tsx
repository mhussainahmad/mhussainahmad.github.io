import { Container } from "@/components/sidefolio/Container";
import { Heading } from "@/components/sidefolio/Heading";
import { Highlight } from "@/components/sidefolio/Highlight";
import { Paragraph } from "@/components/sidefolio/Paragraph";
import { Products } from "@/components/sidefolio/Products";
import { About } from "@/components/sidefolio/About";
import { CaseStudies } from "@/components/sidefolio/CaseStudies";
import { Contact } from "@/components/sidefolio/Contact";
import { TechStack } from "@/components/sidefolio/TechStack";
import { Achievements } from "@/components/sidefolio/Achievements";
import { WhyHireMe } from "@/components/sidefolio/WhyHireMe";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <Heading as="h1" className="mb-6">Hello there! I&apos;m M Hussain Ahmad</Heading>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#14a800]/20 text-[#14a800] text-sm font-semibold mb-4">
          Saved over $5M through automations
        </div>
        <Paragraph className="max-w-4xl mt-4 mb-4">
          Acting like your{" "}
          <Highlight>AI co-founder</Highlight>. I build, scale, and optimize production-grade AI systems
          that deliver measurable business impact.
        </Paragraph>
        <Paragraph className="max-w-4xl mt-4 mb-12">
          Delivered 100+ AI systems across sales, support, operations, fulfilment, and internal tooling.
          Most freelancers deliver code.{" "}
          <Highlight>I deliver systems</Highlight> that produce ROI.
        </Paragraph>
      </div>
      <Heading
        as="h2"
        className="mt-16 mb-6"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <About />
      <Achievements />
      <CaseStudies />
      <TechStack />
      <WhyHireMe />
      <Contact />
    </Container>
  );
}
