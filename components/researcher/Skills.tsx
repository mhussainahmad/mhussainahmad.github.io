import { Badge } from "@/components/ui/badge";

const skills = [
  "Python",
  "PyTorch",
  "ROS 2",
  "C++",
  "NVIDIA Isaac Sim",
  "Intel RealSense D455",
  "Kinova Gen3",
  "OpenCV",
  "MediaPipe",
  "RGB-D Perception",
  "3D Pose Estimation",
  "Sensor Fusion",
  "Real-Time Control",
  "Sim-to-Real",
  "Transformers",
  "Diffusion Models",
  "Distributed Training",
  "GPU Optimization",
  "Quantization",
  "Docker",
  "AWS",
  "CI/CD",
];

export function Skills() {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge key={skill} variant="outline" className="font-serif font-normal">
          {skill}
        </Badge>
      ))}
    </div>
  );
}
