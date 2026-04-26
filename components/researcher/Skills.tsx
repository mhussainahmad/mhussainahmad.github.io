type Group = { label: string; items: string[] };

const groups: Group[] = [
  {
    label: "Languages",
    items: ["Python", "C++", "TypeScript"],
  },
  {
    label: "Machine learning",
    items: ["PyTorch", "OpenCV", "Transformers"],
  },
  {
    label: "Robotics",
    items: ["ROS", "Gazebo"],
  },
  {
    label: "Tooling",
    items: ["Docker", "Linux", "Git", "GitHub Actions"],
  },
];

export function Skills() {
  return (
    <dl className="space-y-4">
      {groups.map((g) => (
        <div key={g.label} className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-6">
          <dt className="text-[var(--ink-muted)]" style={{ fontStyle: "italic" }}>
            {g.label}
          </dt>
          <dd>{g.items.join(", ")}</dd>
        </div>
      ))}
    </dl>
  );
}
