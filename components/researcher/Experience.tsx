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
    title: "Research Assistant (Robot Control & Safety)",
    org: "University of Manitoba",
    period: "May 2024 – Present",
    location: "Winnipeg, Canada",
    bullets: [
      <>
        Shipped a <Highlight>1 kHz real-time C++ torque controller</Highlight>{" "}
        for a <Emph>7-DoF Kinova Gen3</Emph> with cyclic UDP and lock-free
        state, and implemented effort command handling and per-actuator torque
        mode switching in Kinova&apos;s <Emph>ros2_control</Emph> plugin.
      </>,
      <>
        Resolved a <Highlight>26.7 N·m torque error</Highlight> that no
        simulation reproduced by finding the Kinova API&apos;s torque sign
        reversed against the <Emph>URDF and Pinocchio model</Emph>, and traced
        a 198 ms torque-mode feedback gap to seven blocking mode-set round
        trips, proving it was not the fall cause with{" "}
        <Highlight>0.07 N·m torque tracking</Highlight>.
      </>,
      <>
        Built and tuned a <Highlight>200 Hz Cartesian impedance controller</Highlight>{" "}
        on hardware with gravity and friction <Emph>feedforward</Emph>,
        null-space regulation, barrier terms in joint and task space, and 12 Hz
        torque filtering.
      </>,
      <>
        Designed the <Emph>actuator-level safety layer</Emph>, with torque
        saturation and slew limits inside the 1 kHz loop and a 200 Hz supervisor
        for E-stop, watchdog, and position-mode handover, and replaced a
        latched-fault path that free-fell the arm{" "}
        <Highlight>7.45 degrees</Highlight> with controlled fault handling.
      </>,
      <>
        Added whole-arm self-collision avoidance over 26 URDF-mesh link pairs
        with barriers projected through <Emph>Jacobians</Emph> at{" "}
        <Highlight>0.39 ms p99</Highlight>.
      </>,
      <>
        Identified payloads online with an{" "}
        <Emph>Extended Kalman Filter</Emph>, 0.96 kg at a 97 mm wrist offset,
        holding joint residual within <Highlight>0.57 mrad</Highlight> at{" "}
        0.45 ms median per step over 448k live steps, while an offline baseline
        never recovered.
      </>,
      <>
        Predicted contact <Highlight>198 ms ahead at 100% TPR</Highlight> with a{" "}
        <Emph>Genesis digital twin</Emph>, holding the 10 ms real-time budget at
        the 100 ms horizon (6.3 ms median, 8.0 ms p99).
      </>,
      <>
        Held a 15-node 1 kHz to 100 Hz <Emph>ROS 2</Emph> stack on schedule
        after the OS denied <Emph>SCHED_FIFO</Emph> by sequencing bring-up
        around a 250 ms <Emph>DDS discovery</Emph> stall and capping the
        watchdog below 0.25 s.
      </>,
      <>
        Cut end-effector tracking error <Highlight>57% on average</Highlight>{" "}
        (43% vs RelaxedIK, 59% vs TRAC-IK, 71% vs Cartesian impedance) over{" "}
        <Highlight>1,080</Highlight> markerless camera teleoperation trials
        with a <Emph>CasADi QP-based numerical IK</Emph> retargeter at{" "}
        <Highlight>2.59 ms p99</Highlight> and zero missed deadlines.
      </>,
      <>
        Engineered a camera-only intent channel with dwell-time gating, cutting
        false grip activations to <Highlight>0.16 per minute</Highlight> across
        195 minutes by discarding <Highlight>97.3%</Highlight> of 1,323
        spurious requests.
      </>,
      <>
        Developed a browser-based (HTML and JavaScript){" "}
        <Emph>hardware debugging console</Emph> with live torque, tracking,
        fault, and mode-control telemetry.
      </>,
    ],
  },
  {
    title: "Robotics Engineer",
    org: "Teleworker AI",
    period: "Feb 2026 – Sep 2026",
    location: "Winnipeg, Canada",
    bullets: [
      <>
        Operated a <Emph>ROS 2</Emph> scanning pipeline on a{" "}
        <Emph>Unitree Go2 EDU</Emph>&apos;s onboard Jetson Orin for daily
        4-hour runs on a construction site, with a Leica BLK360 and Insta360 on
        a custom 3D-printed mount.
      </>,
      <>
        Delivered Scan-to-BIM point clouds at{" "}
        <Highlight>95% export success</Highlight> by clearing robot, sensor,
        and embedded-compute failures on site.
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
        Owned PyTorch inference for <Emph>Stable Diffusion XL</Emph>, reducing
        end-to-end latency from <Highlight>2.5 s to 0.7 s</Highlight> with
        LCM-LoRA, execution-order changes, and GPU scheduling.
      </>,
      <>
        Tripled 1024×1024 generation throughput via{" "}
        <Highlight>dynamic batching and VRAM tuning</Highlight>, cutting
        per-step compute time by 30%.
      </>,
      <>
        Cut <Emph>Flux</Emph> VRAM from{" "}
        <Highlight>28 GB to 13 GB</Highlight> with BF16 and TensorRT.
      </>,
    ],
  },
  {
    title: "Freelance Machine Learning Engineer",
    org: "Self-employed",
    period: "2022 – Jul 2024",
    location: "Remote",
    bullets: [
      <>
        Shipped a virtual staging pipeline with <Emph>SDXL</Emph>, ControlNet,
        and Depth Anything, and cut its Docker builds from{" "}
        <Highlight>2.5 min to 40 s</Highlight>.
      </>,
      <>
        Owned production <Emph>Llama 3 8B</Emph> inference for Optimization
        Ventures, cutting latency by <Highlight>35%</Highlight> with INT8
        quantization and execution-graph optimization while preserving model
        accuracy.
      </>,
      <>
        Improved serving stability under concurrency by reducing p95 latency
        variance by <Highlight>40%</Highlight> through execution-path cleanup
        and removal of redundant ops in the inference pipeline.
      </>,
      <>
        Trained a <Emph>Siamese face-verification CNN</Emph> in TensorFlow with
        L1 distance scoring and a real-time OpenCV webcam verification
        pipeline.
      </>,
      <>
        Trained a hybrid CNN + Vision Transformer on <Emph>1M images</Emph> for
        7-class emotion recognition, achieving{" "}
        <Highlight>90% top-1 accuracy</Highlight> and improving mAP by 12% over
        a CNN baseline, with <Highlight>18%</Highlight> higher minority-class
        F1 from focal-loss tuning and targeted augmentation.
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
