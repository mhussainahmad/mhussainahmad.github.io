import { Emph, Highlight } from "@/components/ui/highlight";

export function About() {
  return (
    <p className="text-[1.02rem] leading-[1.75]">
      Hi! I am a <Emph>Robotics Control Engineer</Emph> with 4+ years of
      experience across robotics and AI, delivering{" "}
      <Emph>low-level control</Emph> at the joint and actuator level on real
      hardware. I develop and deploy control systems on physical robots, from{" "}
      <Highlight>1 kHz real-time C++ torque control</Highlight> and state
      estimation to motion control, safety supervision, and perception-driven
      manipulation. My core strengths are real-time C++, ROS&nbsp;2 and
      ros2_control, impedance and torque control, rigid-body dynamics, and
      robot safety, backed by a production machine learning background in
      PyTorch, RGB-D perception, and GPU-optimized inference.
    </p>
  );
}
