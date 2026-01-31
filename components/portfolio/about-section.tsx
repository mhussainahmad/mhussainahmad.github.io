"use client";
import React from "react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section
      id="about"
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
            About
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Engineering solutions that deliver measurable business impact
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I&apos;m an AI & Automation Systems Engineer specializing in building
              production-grade AI systems, automation infrastructure, and
              revenue-generating workflows. I combine deep technical expertise with
              business acumen to deliver measurable impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              My work spans enterprise RAG systems, voice AI, outreach automation,
              and compliance workflows. I&apos;ve helped clients save millions in
              costs, automate complex operations, and scale their businesses through
              intelligent automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center space-y-2">
              <h4 className="font-semibold text-lg">AI Systems & RAG</h4>
              <p className="text-sm text-muted-foreground">
                Hallucination-safe RAG systems, ML optimization, production AI agents
              </p>
            </div>
            <div className="text-center space-y-2">
              <h4 className="font-semibold text-lg">Automation</h4>
              <p className="text-sm text-muted-foreground">
                End-to-end workflows, system integration, revenue automation
              </p>
            </div>
            <div className="text-center space-y-2">
              <h4 className="font-semibold text-lg">Full-Stack</h4>
              <p className="text-sm text-muted-foreground">
                Scalable backends, modern frontends, seamless integrations
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
