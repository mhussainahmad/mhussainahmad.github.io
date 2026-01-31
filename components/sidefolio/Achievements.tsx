"use client";
import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

const achievements = [
  {
    client: "Wombo AI",
    impact: "$2M+ saved per year",
    description: "AI-powered predictive models",
  },
  {
    client: "Big Ben Foods",
    impact: "$1M+ saved annually",
    description: "Automated Generative AI automation",
  },
  {
    client: "Optimization Ventures",
    impact: "$500k+ saved yearly",
    description: "Custom deep learning models",
  },
  {
    client: "The Shade store",
    impact: "43% reduction, $100k+ saved",
    description: "Optimized support channel hours",
  },
  {
    client: "Multi-Agent System",
    impact: "70% workload reduction",
    description: "Auto-identifies prospects, scores intent, executes personalized outreach",
  },
];

export const Achievements = () => {
  return (
    <div className="mt-20">
      <Heading
        as="h2"
        className="mb-6"
      >
        Impact & Results
      </Heading>
      <Paragraph className="max-w-2xl mb-6">
        Quantified ROI from AI systems that materially move revenue or reduce costs
      </Paragraph>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, idx) => (
          <div
            key={idx}
            className="p-6 bg-[#0a0a0a] rounded-lg border border-[#2d2d2d] hover:border-[#14a800]/30 hover:shadow-sm transition-all"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#14a800]/20 text-[#14a800] text-xs font-semibold mb-3">
              {achievement.impact}
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              {achievement.client}
            </h3>
            <p className="text-sm text-[#9ca3af]">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
