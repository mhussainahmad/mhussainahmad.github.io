import { Emph, Highlight } from "@/components/ui/highlight";

export function Interests() {
  return (
    <div className="space-y-4">
      <p className="max-w-[70ch] leading-[1.75]">
        My research and engineering work focuses on{" "}
        <Emph>RGB-D perception</Emph>, <Emph>real-time robot control</Emph>,{" "}
        <Emph>sim-to-real transfer</Emph>, and high-performance ML inference.
        Recent focus areas include:
      </p>
      <ul className="list-disc space-y-2 pl-5 marker:text-primary">
        <li>
          <a href="/gauntlet" className="inline-link">
            Gauntlet
          </a>{" "}
          — evaluation harness for VLA / diffusion policies across MuJoCo,
          Genesis, Isaac Sim, and PyBullet with{" "}
          <Highlight>axis-wise failure breakdowns</Highlight>
        </li>
        <li>
          Markerless <Emph>RGB-D teleoperation</Emph> and pose-to-joint
          retargeting for manipulators (Kinova Gen3, MediaPipe, RealSense)
        </li>
        <li>
          Constrained optimization and <Emph>safety-gated control</Emph> stacks
          in ROS&nbsp;2
        </li>
        <li>
          Digital twins and predictive safety with <Emph>Genesis</Emph> / NVIDIA
          Isaac Sim
        </li>
        <li>
          <Emph>GPU-optimized inference</Emph> for diffusion and vision models
          in production
        </li>
      </ul>
    </div>
  );
}
