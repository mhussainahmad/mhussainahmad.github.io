import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/case-studies";
import { Container } from "@/components/sidefolio/Container";
import { CaseStudyContent } from "@/components/case-studies/case-study-content";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <Container>
      <Link
        href="/#case-studies"
        className="inline-flex items-center gap-2 text-sm text-[#9ca3af] hover:text-[#14a800] transition-colors mb-8 font-medium"
      >
        <IconArrowLeft className="h-4 w-4" />
        Back to Case Studies
      </Link>
      <CaseStudyContent caseStudy={caseStudy} />
    </Container>
  );
}
