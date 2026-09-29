import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    name: "Control",
    skills: [
      "Impedance Control",
      "Admittance Control",
      "Torque Control",
      "PID",
      "State Feedback",
      "Observers",
      "EKF",
      "Feedforward Compensation",
      "Null-Space Control",
      "Control Barrier Functions",
      "Potential Fields",
      "Filter Design",
      "System Identification",
    ],
  },
  {
    name: "Real-Time and Systems",
    skills: [
      "Real-Time-Safe C++",
      "Object-Oriented C++",
      "Lock-Free Programming",
      "Multithreading",
      "RAII",
      "ROS 2 Jazzy",
      "ros2_control",
      "Hardware Interfaces",
      "UDP",
      "TCP/IP",
      "DDS",
      "Real-Time Linux",
      "SCHED_FIFO",
      "Watchdogs",
      "Fault Handling",
    ],
  },
  {
    name: "Modeling and Simulation",
    skills: [
      "Pinocchio",
      "CasADi",
      "Rigid-Body Dynamics",
      "Inverse Kinematics",
      "Jacobians",
      "URDF",
      "Xacro",
      "MuJoCo",
      "MJCF",
      "Genesis",
      "NVIDIA Isaac Sim",
      "Gazebo",
      "MATLAB",
    ],
  },
  {
    name: "Sensors and Perception",
    skills: [
      "Joint Torque Sensing",
      "Load Cells",
      "Calibration",
      "Intel RealSense D455",
      "RGB-D Perception",
      "3D Pose Estimation",
      "MediaPipe",
      "OpenCV",
      "Sensor Fusion",
    ],
  },
  {
    name: "Machine Learning",
    skills: [
      "PyTorch",
      "TensorRT",
      "Quantization",
      "Transformers",
      "Diffusion Models",
      "Distributed Training",
      "GPU Optimization",
      "Sim-to-Real",
    ],
  },
  {
    name: "Tooling",
    skills: [
      "CMake",
      "colcon",
      "Python",
      "pytest",
      "Docker",
      "Git",
      "HTML",
      "JavaScript",
      "AWS",
      "CI/CD",
    ],
  },
];

export function Skills() {
  return (
    <dl className="space-y-4">
      {skillGroups.map((group) => (
        <div key={group.name}>
          <dt className="font-heading text-[0.95rem] font-bold">
            {group.name}
          </dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="font-serif font-normal"
              >
                {skill}
              </Badge>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
