"use client";
import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

const reasons = [
  {
    title: "Move Fast, Communicate Clearly",
    description: "I move fast, communicate clearly, and tell you what not to build.",
  },
  {
    title: "Quantify ROI Upfront",
    description: "I quantify ROI upfront and only accept engagements where the value is undeniable.",
  },
  {
    title: "Full Ownership",
    description: "From architecture to deployment, I take full ownership of systems that materially move revenue or cost.",
  },
];

export const WhyHireMe = () => {
  return (
    <div className="mt-20">
      <Heading
        as="h2"
        className="mb-6"
      >
        Why Teams Hire Me
      </Heading>
      <div className="grid md:grid-cols-3 gap-6">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="p-6 bg-[#0a0a0a] rounded-lg border border-[#2d2d2d]"
          >
            <h3 className="text-base font-semibold text-white mb-2">
              {reason.title}
            </h3>
            <p className="text-sm text-[#9ca3af] leading-relaxed">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-[#14a800]/20 rounded-lg border border-[#14a800]/30">
        <p className="text-sm text-[#14a800] font-semibold">
          If you need AI systems that deliver defensible, bottom-line and top-line outcomes, send me a message and let&apos;s get started.
        </p>
      </div>
    </div>
  );
};
