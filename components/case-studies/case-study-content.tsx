"use client";
import React from "react";
import { motion } from "framer-motion";
import { CaseStudy } from "@/lib/case-studies";
import { Heading } from "@/components/sidefolio/Heading";
import { Paragraph } from "@/components/sidefolio/Paragraph";
import { Highlight } from "@/components/sidefolio/Highlight";

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      <article className="py-8">
        {/* Header - Upwork Blog Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-block mb-4">
            <span className="text-xs uppercase tracking-wide bg-[#14a800]/20 px-3 py-1.5 rounded-md text-[#14a800] font-semibold">
              {caseStudy.category}
            </span>
          </div>
          <Heading as="h1" className="text-[#14a800] mb-4">
            {caseStudy.title}
          </Heading>
          <Paragraph className="text-lg mb-6">
            {caseStudy.subtitle}
          </Paragraph>
          
          {/* Review Section - Replaces Author */}
          {caseStudy.review && (
            <div className="mb-8 pb-8 border-b border-[#2d2d2d]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#14a800] flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                  {caseStudy.review.author.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <p className="font-semibold text-white text-base">
                      {caseStudy.review.author}
                    </p>
                    {(caseStudy.review.role || caseStudy.review.company) && (
                      <p className="text-sm text-[#9ca3af]">
                        {caseStudy.review.role}
                        {caseStudy.review.role && caseStudy.review.company && ", "}
                        {caseStudy.review.company}
                      </p>
                    )}
                  </div>
                  <Paragraph className="text-base italic text-[#9ca3af] leading-relaxed">
                    &ldquo;{caseStudy.review.text}&rdquo;
                  </Paragraph>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-[#0a0a0a] px-3 py-1.5 rounded-md text-[#9ca3af] border border-[#2d2d2d]"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Client Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <Heading as="h2" className="mb-4">Client Context</Heading>
          <div className="space-y-3">
            <Paragraph>
              <span className="font-semibold text-white">Type:</span> {caseStudy.clientContext.type}
            </Paragraph>
            <Paragraph>
              <span className="font-semibold text-white">Scale:</span> {caseStudy.clientContext.scale}
            </Paragraph>
            {caseStudy.clientContext.industry && (
              <Paragraph>
                <span className="font-semibold text-white">Industry:</span>{" "}
                {caseStudy.clientContext.industry}
              </Paragraph>
            )}
          </div>
        </motion.div>

        {/* Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <Heading as="h2" className="mb-6">{caseStudy.problem.title}</Heading>
          <ul className="space-y-4">
            {caseStudy.problem.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#14a800] mt-1.5 font-bold flex-shrink-0">•</span>
                <Paragraph>{point}</Paragraph>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10"
        >
          <Heading as="h2" className="mb-4">Solution</Heading>
          <Paragraph className="mb-8">
            {caseStudy.solution.overview}
          </Paragraph>
          <div className="space-y-8">
            <div>
              <Heading as="h3" className="mb-4">Architecture & Implementation</Heading>
              <ul className="space-y-3">
                {caseStudy.solution.architecture.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#14a800] mt-1 font-bold flex-shrink-0">✓</span>
                    <Paragraph>{item}</Paragraph>
                  </li>
                ))}
              </ul>
            </div>
            {caseStudy.solution.keyDecisions.length > 0 && (
              <div>
                <Heading as="h3" className="mb-4">Key Decisions</Heading>
                <ul className="space-y-3">
                  {caseStudy.solution.keyDecisions.map((decision, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#14a800] mt-1 font-bold flex-shrink-0">→</span>
                      <Paragraph>{decision}</Paragraph>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-10"
        >
          <Heading as="h2" className="mb-6">Results & Impact</Heading>
          <div className="space-y-8">
            <div>
              <Heading as="h3" className="mb-4">Key Metrics</Heading>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.results.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg border border-[#2d2d2d] bg-[#0a0a0a]"
                  >
                    <div className="text-sm text-[#9ca3af] mb-2">
                      {metric.label}
                    </div>
                    <div className="text-3xl font-bold text-[#14a800]">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Heading as="h3" className="mb-4">Impact</Heading>
              <ul className="space-y-3">
                {caseStudy.results.impact.map((impact, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#14a800] mt-1 flex-shrink-0">★</span>
                    <Paragraph>{impact}</Paragraph>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Ideal Client */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-10"
        >
          <Heading as="h2" className="mb-4">Ideal Client Match</Heading>
          <Paragraph className="mb-6">
            This project is ideal for organizations facing similar challenges
          </Paragraph>
          <div className="flex flex-wrap gap-2">
            {caseStudy.idealClient.map((client, index) => (
              <span
                key={index}
                className="text-sm bg-[#0a0a0a] px-3 py-1.5 rounded-md text-[#9ca3af] border border-[#2d2d2d]"
              >
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </article>
    </div>
  );
}
