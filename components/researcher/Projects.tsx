import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  Target,
  Camera,
  Move3d,
  Shield,
  Sparkles,
  Brain,
  Cpu,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Section } from "@/components/researcher/Section";
import { Emph, Highlight } from "@/components/ui/highlight";

type Project = {
  title: string;
  description: ReactNode;
  tags: string[];
  href: string;
  icon: LucideIcon;
  details?: ReactNode[];
};

const projects: Project[] = [
  {
    title: "Gauntlet",
    icon: Target,
    description: (
      <>
        Evaluation harness for learned robot policies — answers how a{" "}
        <Emph>VLA / diffusion / scripted policy</Emph> fails, and whether the
        latest checkpoint{" "}
        <Highlight>regressed against the last one</Highlight>.
      </>
    ),
    tags: [
      "MuJoCo",
      "Genesis",
      "Isaac Sim",
      "PyBullet",
      "OpenVLA",
      "ROS 2",
      "Python",
    ],
    href: "/gauntlet",
    details: [
      <>
        Wraps any policy behind a uniform adapter and runs it across
        parameterized simulator perturbations, producing{" "}
        <Highlight>axis-wise failure reports</Highlight> instead of aggregate
        means.
      </>,
      <>
        Phases 1–3: <Emph>MuJoCo / PyBullet / Genesis / Isaac</Emph> backends,
        OpenVLA &amp; SmolVLA adapters, drift monitoring, ROS 2, and fleet
        aggregation.
      </>,
      <>
        Full write-up with architecture diagrams → open the{" "}
        <a href="/gauntlet" className="inline-link">
          Gauntlet page
        </a>
        .
      </>,
    ],
  },
  {
    title: "RGB-D Teleoperation Stack",
    icon: Camera,
    description: (
      <>
        End-to-end markerless RGB-D teleoperation in ROS 2 driving a{" "}
        <Emph>7-DoF Kinova Gen3</Emph> from MediaPipe pose estimation.
        Perception, retargeting, safety, and command lanes run at{" "}
        <Highlight>100 Hz</Highlight> with a{" "}
        <Highlight>2.59 ms p99 control tick</Highlight> over 30k+ live ticks and
        zero deadline violations.
      </>
    ),
    tags: ["ROS 2", "Kinova Gen3", "RealSense", "MediaPipe", "C++", "Python"],
    href: "https://www.linkedin.com/in/hussain-ai-robotics/",
  },
  {
    title: "Constrained Motion Retargeting",
    icon: Move3d,
    description: (
      <>
        <Emph>CasADi QP retargeter</Emph> with null-space posture shaping that
        maps noisy wrist estimates to joint commands under anatomical disparity.
        Benchmarked against TRAC-IK, RelaxedIK, DexPilot, and Cartesian impedance
        across <Highlight>1,080 trials</Highlight>.
      </>
    ),
    tags: ["Optimization", "CasADi", "Inverse Kinematics", "HRI"],
    href: "https://www.linkedin.com/in/hussain-ai-robotics/",
  },
  {
    title: "Genesis Predictive Safety Twin",
    icon: Shield,
    description: (
      <>
        Predictive safety gate driven by a <Emph>Genesis digital twin</Emph>{" "}
        running ahead of the physical arm,{" "}
        <Highlight>halving peak obstacle penetration</Highlight> from 3.82 mm to
        1.87 mm with no increase in task completion time. Paired with online
        sim-to-real EKF / moving-horizon correction at control rate.
      </>
    ),
    tags: ["Genesis", "Sim-to-Real", "Safety", "Digital Twin"],
    href: "https://github.com/mhussainahmad/Genesis",
  },
  {
    title: "Stable Diffusion XL Inference",
    icon: Sparkles,
    description: (
      <>
        Production PyTorch inference optimization for SDXL at Wombo: cut
        end-to-end latency from <Highlight>2.5s to 0.7s</Highlight> and raised
        1024×1024 throughput by <Highlight>3×</Highlight> via dynamic batching,
        VRAM tuning, and attention-path improvements.
      </>
    ),
    tags: ["PyTorch", "Diffusion", "GPU Optimization", "Serving"],
    href: "https://www.linkedin.com/in/hussain-ai-robotics/",
  },
  {
    title: "Emotion Recognition (CNN + ViT)",
    icon: Brain,
    description: (
      <>
        Hybrid CNN + Vision Transformer trained on <Emph>1M images</Emph> for
        7-class emotion recognition —{" "}
        <Highlight>90% top-1 accuracy</Highlight>, +12% mAP over a CNN baseline,
        and +18% minority-class F1 via focal loss and targeted augmentation.
      </>
    ),
    tags: ["PyTorch", "Transformers", "Computer Vision"],
    href: "https://github.com/mhussainahmad/ClassImbalanceAwareTransformer",
  },
  {
    title: "roskortex",
    icon: Cpu,
    description:
      "ROS-based robotics experiments spanning perception, control, and system integration.",
    tags: ["ROS", "Python", "Robotics"],
    href: "https://github.com/mhussainahmad/roskortex",
  },
  {
    title: "robotcpp",
    icon: Code2,
    description:
      "C++ utilities and low-level helpers for robotics work where performance matters.",
    tags: ["C++", "Robotics"],
    href: "https://github.com/mhussainahmad/robotcpp",
  },
];

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ol className="space-y-8">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <li key={project.title}>
              <div className="flex gap-4 sm:gap-5">
                <div
                  className="flex size-16 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-primary sm:size-[4.5rem]"
                  aria-hidden
                >
                  <Icon className="size-7 sm:size-8" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="font-heading text-[1.05rem] font-bold leading-snug">
                    <Button
                      variant="link"
                      className="h-auto px-0 text-[1.05rem] font-bold text-foreground hover:text-primary"
                      render={
                        <a
                          href={project.href}
                          {...(project.href.startsWith("http")
                            ? { target: "_blank", rel: "noreferrer" }
                            : {})}
                        />
                      }
                    >
                      {project.title}
                    </Button>
                  </h3>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-foreground/90">
                    {project.description}
                  </p>
                  {project.details && (
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.92rem] leading-relaxed marker:text-primary">
                      {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.tags.join(" · ")}
                  </p>
                </div>
              </div>
              {index < projects.length - 1 && <Separator className="mt-8" />}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
