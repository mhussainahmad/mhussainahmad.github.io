"use client";
import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

const techCategories = [
  {
    category: "Applied Generative AI",
    skills: ["LLMs", "RAG", "LangChain", "LlamaIndex", "Vector Search", "Embeddings", "GPT-4o", "Claude", "Gemini", "LLaMA-3", "Mistral", "Multi-Agent Systems", "Autonomous Workflows", "Fine-tuning", "Hugging Face"],
  },
  {
    category: "ML & Deep Learning",
    skills: ["Transformers", "CNNs", "RNNs/LSTMs", "GANs", "VAEs", "GNNs", "PyTorch", "TensorFlow", "scikit-learn", "Bayesian Methods", "Ensemble Methods"],
  },
  {
    category: "Cloud & MLOps",
    skills: ["AWS", "Azure", "GCP", "Docker", "Terraform", "CI/CD", "MLflow", "DVC", "GitHub Actions", "Model Deployment", "Monitoring"],
  },
  {
    category: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "C#", "SQL", "React", "Next.js"],
  },
  {
    category: "Data Science",
    skills: ["Data Pipelines", "Feature Engineering", "Regression", "Classification", "Clustering", "Statistical Inference", "Exploratory Analysis"],
  },
  {
    category: "Edge & Performance",
    skills: ["Edge AI", "GPU/TPU Acceleration", "Real-time Streaming", "Video Processing", "H.264", "H.265", "AV1"],
  },
];

export const TechStack = () => {
  return (
    <div className="mt-20">
      <Heading
        as="h2"
        className="mb-6"
      >
        Tech Stack
      </Heading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((category) => (
          <div key={category.category} className="space-y-2">
            <Heading as="h3" className="text-base">
              {category.category}
            </Heading>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs bg-[#0a0a0a] px-2 py-1 rounded-md text-[#9ca3af] border border-[#2d2d2d]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
