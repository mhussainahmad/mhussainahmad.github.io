import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Emph, Highlight } from "@/components/ui/highlight";

type Role = {
  title: string;
  org: string;
  period: string;
  location: string;
  bullets: ReactNode[];
};

const roles: Role[] = [
  {
    title: "Research Assistant (Robotics & Perception)",
    org: "University of Manitoba",
    period: "May 2024 – Present",
    location: "Winnipeg, Canada",
    bullets: [
      <>
        Built an end-to-end markerless RGB-D teleoperation stack in{" "}
        <Emph>ROS 2</Emph> that drives a <Emph>7-DoF Kinova Gen3</Emph> from
        MediaPipe pose estimation, running at <Highlight>100 Hz</Highlight> with
        a <Highlight>2.59 ms p99</Highlight> control tick over 30,203 live ticks
        against a 10 ms limit, with zero violations.
      </>,
      <>
        Designed a <Emph>CasADi QP retargeter</Emph> with null-space posture
        shaping; benchmarked against four literature baselines across{" "}
        <Highlight>1,080 trials</Highlight>.
      </>,
      <>
        Engineered a camera-only intent channel with dwell-time gating, cutting
        false grip activations to <Highlight>0.16 / min</Highlight> across 195
        minutes by discarding <Highlight>97.3%</Highlight> of 1,323 spurious
        requests.
      </>,
      <>
        Implemented a predictive safety gate driven by a{" "}
        <Emph>Genesis digital twin</Emph>,{" "}
        <Highlight>halving peak obstacle penetration</Highlight> (3.82 mm → 1.87
        mm) with no cost in task completion time.
      </>,
      <>
        Developed an online sim-to-real parameter estimator running on the
        physical arm at <Highlight>0.45 ms / step</Highlight> with{" "}
        <Emph>0.65 mrad</Emph> joint residual through payload changes.
      </>,
      <>
        Built torque-mode safety architecture with a reactive chain{" "}
        <Highlight>halting within 260 ms</Highlight> of a fault.
      </>,
    ],
  },
  {
    title: "Machine Learning Engineer",
    org: "Wombo",
    period: "Aug 2024 – Dec 2024",
    location: "USA (Remote)",
    bullets: [
      <>
        Optimized PyTorch inference for <Emph>Stable Diffusion XL</Emph>,
        reducing end-to-end latency from{" "}
        <Highlight>2.5s → 0.7s</Highlight> through execution-order changes, GPU
        scheduling, and memory-allocation tuning.
      </>,
      <>
        Increased 1024×1024 generation throughput by{" "}
        <Highlight>3×</Highlight> via dynamic batching and VRAM optimization,
        cutting per-step compute time by 30%.
      </>,
    ],
  },
  {
    title: "Freelance Machine Learning Engineer",
    org: "Self-employed",
    period: "Jan 2022 – Jul 2024",
    location: "Remote",
    bullets: [
      <>
        Reduced production autoregressive model inference latency by{" "}
        <Highlight>35%</Highlight> using <Emph>INT8 quantization</Emph> and
        execution-graph optimization while preserving accuracy.
      </>,
      <>
        Improved serving stability under concurrency by reducing P95 latency
        variance by <Highlight>40%</Highlight> through execution-path cleanup.
      </>,
      <>
        Trained a hybrid CNN + Vision Transformer on <Emph>1M images</Emph> for
        7-class emotion recognition, achieving{" "}
        <Highlight>90% top-1 accuracy</Highlight> and improving mAP by 12% over
        a CNN baseline.
      </>,
      <>
        Improved minority-class F1 scores by <Highlight>18%</Highlight> using
        focal-loss tuning and targeted augmentation.
      </>,
    ],
  },
];

export function Experience() {
  return (
    <ol className="space-y-8">
      {roles.map((role, index) => (
        <li key={role.org + role.title}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-heading text-[1.05rem] font-bold leading-snug">
              {role.org}
              <span className="font-normal text-muted-foreground">
                {" · "}
                {role.title}
              </span>
            </h3>
            <Badge variant="secondary" className="w-fit shrink-0 tabular-nums">
              {role.period}
            </Badge>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{role.location}</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.95rem] leading-relaxed marker:text-primary">
            {role.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
          {index < roles.length - 1 && <Separator className="mt-8" />}
        </li>
      ))}
    </ol>
  );
}
