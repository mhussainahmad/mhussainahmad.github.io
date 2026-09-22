import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Section } from "@/components/researcher/Section";
import { Emph, Highlight } from "@/components/ui/highlight";

type Project = {
  title: string;
  description: ReactNode;
  tags: string[];
  href: string;
  details?: ReactNode[];
  /** When set, title is plain text and this button is shown instead of a linked heading. */
  cta?: { label: string; href: string };
};

const projects: Project[] = [
  {
    title: "Gauntlet",
    description: (
      <>
        Owned evaluation harness that catches silent checkpoint regressions
        before deployment by scoring{" "}
        <Emph>OpenVLA / SmolVLA / diffusion / scripted</Emph> policies behind
        one adapter and reporting failure rate across{" "}
        <Highlight>7 perturbation axes</Highlight> instead of aggregate means.
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
    cta: { label: "Details", href: "/gauntlet" },
    details: [
      <>
        Diffs each checkpoint against the last on a fixed benchmark so
        regressions surface as <Highlight>axis-wise failure reports</Highlight>,
        not a single success-rate number.
      </>,
      <>
        Parallel rollout runner and plugin system over{" "}
        <Emph>4 simulators</Emph> (MuJoCo, PyBullet, Genesis, Isaac), OpenVLA
        &amp; SmolVLA adapters, ROS 2 publishing, and{" "}
        <Highlight>3,678 pytest cases</Highlight> gated per PR on GitHub
        Actions.
      </>,
      <>Shipped to PyPI with a full write-up and architecture diagrams.</>,
    ],
  },
  {
    title: "RGB-D Teleoperation Stack",
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
    description: (
      <>
        <Emph>CasADi QP retargeter</Emph> with null-space posture shaping that
        cut end-effector tracking error by{" "}
        <Highlight>43% vs RelaxedIK</Highlight>,{" "}
        <Highlight>59% vs TRAC-IK</Highlight>, and{" "}
        <Highlight>71% vs Cartesian impedance</Highlight> across{" "}
        <Highlight>1,080 trials</Highlight> (also vs DexPilot-style).
      </>
    ),
    tags: ["Optimization", "CasADi", "Inverse Kinematics", "HRI"],
    href: "https://www.linkedin.com/in/hussain-ai-robotics/",
  },
  {
    title: "Genesis Predictive Safety Twin",
    description: (
      <>
        Predictive safety gate driven by a <Emph>Genesis digital twin</Emph>{" "}
        that caught <Highlight>100% of simulated contact events</Highlight> a
        mean <Highlight>198 ms early</Highlight>, while holding the{" "}
        <Highlight>10 ms</Highlight> control budget at the 100 ms horizon (
        <Highlight>6.3 ms median / 8.0 ms p99</Highlight>). Online EKF /
        moving-horizon correction keeps residual{" "}
        <Highlight>≤ 0.57 mrad</Highlight> after payload changes.
      </>
    ),
    tags: ["Genesis", "Sim-to-Real", "Safety", "Digital Twin"],
    href: "https://github.com/mhussainahmad/Genesis",
  },
  {
    title: "Stable Diffusion XL Inference",
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
];

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ol className="space-y-8">
        {projects.map((project, index) => {
          const linkProps = project.href.startsWith("http")
            ? { target: "_blank" as const, rel: "noreferrer" }
            : {};

          return (
            <li key={project.title}>
              <div className="flex items-start justify-between gap-3">
                <h3 className="min-w-0 font-heading text-[1.05rem] font-bold leading-snug text-foreground">
                  {project.cta ? (
                    project.title
                  ) : (
                    <Button
                      variant="link"
                      className="h-auto px-0 text-[1.05rem] font-bold text-foreground hover:text-primary"
                      render={<a href={project.href} {...linkProps} />}
                    >
                      {project.title}
                    </Button>
                  )}
                </h3>
                {project.cta && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="shrink-0 rounded-full border-border bg-background font-serif text-primary shadow-none hover:bg-accent hover:text-accent-foreground"
                    render={<a href={project.cta.href} />}
                  >
                    {project.cta.label}
                  </Button>
                )}
              </div>
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
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              {index < projects.length - 1 && <Separator className="mt-8" />}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
