type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    title: "roskortex",
    description: "ROS-based robotics experiments.",
    tags: ["ROS", "Python", "Robotics"],
    href: "https://github.com/mhussainahmad/roskortex",
  },
  {
    title: "hri",
    description: "Human-robot interaction prototypes.",
    tags: ["Python", "HRI"],
    href: "https://github.com/mhussainahmad/hri",
  },
  {
    title: "robotcpp",
    description: "C++ utilities for robotics work.",
    tags: ["C++", "Robotics"],
    href: "https://github.com/mhussainahmad/robotcpp",
  },
  {
    title: "Genesis",
    description:
      "Working with the Genesis simulator for general-purpose robotics and embodied AI.",
    tags: ["Simulation", "Embodied AI", "Python"],
    href: "https://github.com/mhussainahmad/Genesis",
  },
];

function Glyph({ letter }: { letter: string }) {
  return (
    <div
      aria-hidden="true"
      className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 grid place-items-center text-2xl sm:text-3xl text-[var(--ink-muted)] bg-[var(--surface)] border border-[var(--rule)]"
      style={{ borderRadius: 2, fontStyle: "italic" }}
    >
      {letter}
    </div>
  );
}

export function Projects() {
  return (
    <ol className="space-y-6">
      {projects.map((p) => (
        <li key={p.title} className="flex gap-4 sm:gap-5">
          <Glyph letter={p.title.charAt(0).toUpperCase()} />
          <div className="min-w-0 flex-1">
            <h3 className="leading-snug">
              <a href={p.href} target="_blank" rel="noreferrer">
                {p.title}
              </a>
            </h3>
            <p className="mt-1">{p.description}</p>
            <p className="mt-2 text-[0.85rem] text-[var(--ink-muted)]">
              {p.tags.join("  ·  ")}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
