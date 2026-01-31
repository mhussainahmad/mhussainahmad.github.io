"use client";
import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { Highlight } from "./Highlight";

export const About = () => {
  return (
    <div id="about" className="mt-20">
      <Heading
        as="h2"
        className="mb-6"
      >
        About
      </Heading>
      <Paragraph className="max-w-2xl mt-4">
        I&apos;m an AI & Automation Systems Engineer specializing in building
        production-grade AI systems, automation infrastructure, and
        revenue-generating workflows. I combine deep technical expertise with
        business acumen to deliver measurable impact.
      </Paragraph>
      <Paragraph className="max-w-2xl mt-4">
        Delivered 100+ AI systems across sales, support, operations, fulfilment, and internal tooling
        over the last several years. I&apos;ve architected and deployed agentic systems, RAG pipelines,
        autonomous workflow engines, and revenue-driving automation used daily in production.
      </Paragraph>
      <div className="mt-6 p-6 bg-[#0a0a0a] rounded-lg border border-[#2d2d2d]">
        <h3 className="text-lg font-semibold text-white mb-4">Key Achievements</h3>
        <ul className="space-y-2 text-sm text-[#9ca3af]">
          <li>• Wombo AI: Saved $2M+ per year using AI-powered predictive models</li>
          <li>• Big Ben Foods: Reduced operational costs by $1M+ annually with automated Generative AI</li>
          <li>• Optimization Ventures: Saved $500k+ yearly with custom deep learning models</li>
          <li>• The Shade store: Optimized support channel hours by 43%, reducing costs by $100k+ annually</li>
          <li>• Multi-agent system: Auto-identifies prospects, scores intent, executes personalized outreach (70% reduction in manual qualification)</li>
        </ul>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-white leading-tight">
            Applied Generative AI
          </h3>
          <p className="text-sm text-[#9ca3af] leading-relaxed">
            LLMs, AI Assistants, RAG, LangChain, vector search, multi-agent orchestration, autonomous workflows
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-white leading-tight">
            ML & Deep Learning
          </h3>
          <p className="text-sm text-[#9ca3af] leading-relaxed">
            Transformers, CNNs, RNNs/LSTMs, GANs, PyTorch, TensorFlow, model fine-tuning, production deployment
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-white leading-tight">
            Cloud & MLOps
          </h3>
          <p className="text-sm text-[#9ca3af] leading-relaxed">
            AWS, Azure, GCP, Docker, Terraform, CI/CD, MLflow, scalable AI systems architecture
          </p>
        </div>
      </div>
    </div>
  );
};
