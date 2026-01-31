"use client";
import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Link from "next/link";
import { motion } from "framer-motion";
import { caseStudies } from "@/lib/case-studies";

export const Projects = () => {
  const featuredProjects = caseStudies.slice(0, 3);

  return (
    <div id="projects" className="mt-20">
      <Heading
        as="h2"
        className="mb-6"
      >
        Featured Projects
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project, idx: number) => (
          <motion.div
            key={project.slug}
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
              href={`/case-studies/${project.slug}`}
              className="group flex flex-col h-full hover:bg-[#fafafa] rounded-lg transition-all duration-200 p-6 border border-[#e0e0e0] hover:border-[#14a800]/30 hover:shadow-sm"
            >
              <div className="w-full h-[180px] bg-[#f5f5f5] rounded-lg flex items-center justify-center mb-4 border border-[#e0e0e0] group-hover:border-[#14a800]/20 transition-colors">
                <span className="text-5xl font-bold text-[#14a800]">
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="flex flex-col flex-1">
                  <Heading
                    as="h4"
                    className="mb-2 group-hover:text-[#14a800] transition-colors"
                  >
                    {project.title}
                  </Heading>
                <Paragraph className="text-sm mb-3 line-clamp-2">
                  {project.subtitle}
                </Paragraph>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#e6f7e0] text-[#14a800] text-xs font-semibold mb-4">
                  {project.highlight}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs bg-[#f5f5f5] px-2.5 py-1 rounded-md text-[#6b6b6b] border border-[#e0e0e0] font-medium"
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
