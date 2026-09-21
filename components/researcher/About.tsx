import { Emph, Highlight } from "@/components/ui/highlight";

export function About() {
  return (
    <p className="max-w-[70ch] text-[1.02rem] leading-[1.75]">
      Hi! I am a <Emph>Machine Learning Engineer</Emph> with 4+ years of
      experience building production ML systems for <Emph>perception</Emph>,{" "}
      <Emph>real-time control</Emph>, and high-performance inference. Strong
      Python and PyTorch background across RGB-D perception, sensor fusion,
      transformer and diffusion-based models, distributed training, and GPU
      optimization. Experienced in simulation-driven validation, large-scale
      model evaluation, and deploying{" "}
      <Highlight>perception-to-control pipelines</Highlight> on physical robotic
      systems.
    </p>
  );
}
