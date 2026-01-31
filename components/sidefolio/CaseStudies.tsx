"use client";
import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Link from "next/link";
import { motion } from "framer-motion";
import { caseStudies } from "@/lib/case-studies";

export const CaseStudies = () => {
  const allCaseStudies = caseStudies;

  return (
    <div id="case-studies" className="mt-20">
      <Heading
        as="h2"
        className="mb-6"
      >
        Case Studies
      </Heading>
      <Paragraph className="max-w-xl mb-6">
        Detailed insights into projects that delivered measurable impact
      </Paragraph>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCaseStudies.map((study, idx: number) => (
          <motion.div
            key={study.slug}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={`/case-studies/${study.slug}`}
              className="group flex flex-col h-full hover:bg-[#2d2d2d] rounded-lg transition-all duration-200 p-6 border border-[#2d2d2d] hover:border-[#14a800]/30 hover:shadow-sm"
            >
              <div className="w-full h-[180px] bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4 border border-[#2d2d2d] group-hover:border-[#14a800]/20 transition-colors">
                <span className="text-5xl font-bold text-[#14a800]">
                  {study.title.charAt(0)}
                </span>
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-[#14a800]/20 px-2.5 py-1 rounded-md text-[#14a800] font-semibold border border-[#14a800]/30">
                    {study.category}
                  </span>
                </div>
                  <Heading
                    as="h4"
                    className="mb-2 group-hover:text-[#14a800] transition-colors"
                  >
                    {study.title}
                  </Heading>
                <Paragraph className="text-sm mb-3 line-clamp-2">
                  {study.subtitle}
                </Paragraph>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#14a800]/20 text-[#14a800] text-xs font-semibold mb-4">
                  {study.highlight}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {study.tags.slice(0, 3).map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs bg-[#0a0a0a] px-2.5 py-1 rounded-md text-[#9ca3af] border border-[#2d2d2d] font-medium"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
