"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Amazon EDI Automation System",
    description:
      "Built a fully automated Amazon Vendor Central EDI system handling 10,000+ ASINs and 600-700 SKUs weekly. Replaced week-long manual ASN workflows with sub-60-second automated pipeline, resulting in $1M+ savings in one year and zero ASN rejections.",
    tags: ["X12 EDI", "Python", "Automation", "Amazon Vendor Central", "Inventory Sync"],
    highlight: "$1M+ saved",
    category: "automation",
    slug: "amazon-edi-automation",
  },
  {
    title: "Enterprise RAG System",
    description:
      "Designed and deployed an enterprise RAG system using LangChain and Pinecone for hundreds of users. Indexed thousands of frequently updated PDFs, SOPs, and contracts. Achieved 85% improvement in retrieval accuracy and 60% reduction in token usage.",
    tags: ["RAG", "LangChain", "Pinecone", "Python", "Vector Search", "Hybrid Search"],
    highlight: "60% cost reduction",
    category: "ai",
    slug: "enterprise-rag-system",
  },
  {
    title: "Stable Diffusion XL Optimization",
    description:
      "Optimized Stable Diffusion XL using latent consistency modeling, reducing inference time by 73% (2.58s → 0.7s) at 1024×1024 while preserving visual quality. Resulted in ~$100K/month GPU cost savings for high-volume deployments.",
    tags: ["Stable Diffusion", "ML Optimization", "Python", "PyTorch", "Latent Consistency"],
    highlight: "73% faster, $100K/month saved",
    category: "ai",
    slug: "stable-diffusion-optimization",
  },
  {
    title: "Instantly Outreach Automation",
    description:
      "Built a high-scale Instantly outreach system managing 200+ inboxes, generating ~300 meetings/week and $100K+ in recurring revenue pipeline within 3 months. Achieved ~10% reply rates at scale with CRM integrations and enrichment tools.",
    tags: ["Instantly", "Cold Outreach", "CRM Integration", "Automation", "Lead Generation"],
    highlight: "300 meetings/week",
    category: "automation",
    slug: "instantly-outreach-automation",
  },
  {
    title: "AI Voice Coach (Athena)",
    description:
      "Built a production STT/TTS voice backend for a fitness app's AI coach, supporting audio + text messages, cloud audio storage, schema-level multimodal chat, and cost-optimized LLM integration.",
    tags: ["STT/TTS", "Voice AI", "LLM", "Python", "DigitalOcean Spaces", "Conversational AI"],
    highlight: "Production voice AI",
    category: "ai",
    slug: "ai-voice-coach",
  },
  {
    title: "HelpScout AI Support Agents",
    description:
      "Built a multi-agent AI support system for a beauty brand, including a specialized colorist helper. Achieved 4.0+ helpfulness scores across 7 specialized agents, significantly reducing human support load.",
    tags: ["AI Agents", "HelpScout", "Customer Support", "LLM", "Multi-Agent Systems"],
    highlight: "4.0+ helpfulness score",
    category: "ai",
    slug: "helpscout-ai-agents",
  },
  {
    title: "SOC2 & GDPR Compliance Automation",
    description:
      "Automated a SOC2/GDPR compliance intake and booking system, replacing manual qualification with a 100% automated decision-based funnel that routes leads to certification or advisory calls.",
    tags: ["Automation", "Compliance", "SOC2", "GDPR", "Lead Qualification", "Workflow"],
    highlight: "100% automated",
    category: "automation",
    slug: "compliance-automation",
  },
  {
    title: "AI Podcast Research Chatbot",
    description:
      "Built a hallucination-safe AI podcast research assistant that generates structured, source-quoted guest research from transcripts and long-form content. Automates research time from hours to minutes.",
    tags: ["RAG", "AI Research", "Podcast", "Hallucination Prevention", "Source Attribution"],
    highlight: "Hallucination-safe",
    category: "ai",
    slug: "podcast-research-chatbot",
  },
  {
    title: "GoHighLevel & Retell AI Automation",
    description:
      "Designed and deployed AI automation workflows for home-care operations, integrating voice AI, CRM automation, and multi-channel outreach for VA patient and caregiver recruitment.",
    tags: ["GoHighLevel", "Retell AI", "Voice AI", "CRM", "Automation", "Healthcare"],
    highlight: "Multi-channel automation",
    category: "automation",
    slug: "gohighlevel-retell-automation",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selected work delivering measurable business impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={project.slug ? `/case-studies/${project.slug}` : "#"} className="group block h-full">
                <div className="h-full p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 bg-card">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    {project.slug && (
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {project.highlight && (
                    <div className="mb-4 text-sm font-medium text-primary">
                      {project.highlight}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
