type Role = {
  title: string;
  org: string;
  period: string;
  summary: string;
  bullets?: string[];
};

const roles: Role[] = [
  {
    title: "Machine Learning Engineer",
    org: "[Current Company]",
    period: "2024 – Present",
    summary:
      "Building and operating production ML systems. End-to-end ownership of model development, evaluation, deployment, and monitoring.",
    bullets: [
      "Designed and shipped [feature / system] used by [scale]",
      "Reduced [metric] by [x%] through [approach]",
      "Owned model lifecycle: data pipeline, training, eval harness, serving",
    ],
  },
  {
    title: "ML / AI Engineer",
    org: "[Previous Company]",
    period: "2022 – 2024",
    summary:
      "Applied deep learning to [domain]. Led delivery of [project] from prototype to production.",
    bullets: [
      "[Concrete impact bullet 1]",
      "[Concrete impact bullet 2]",
    ],
  },
  {
    title: "Machine Learning Engineer",
    org: "[Earlier Company]",
    period: "2021 – 2022",
    summary:
      "First engineering role. Built foundational data and model tooling, contributed across the stack.",
  },
];

export function Experience() {
  return (
    <ol className="space-y-7">
      {roles.map((r) => (
        <li key={r.title + r.org}>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3>
              {r.title}
              <span className="font-normal text-[var(--ink-muted)]">
                {", "}
                {r.org}
              </span>
            </h3>
            <span className="text-[0.9rem] text-[var(--ink-muted)] tabular-nums shrink-0">
              {r.period}
            </span>
          </div>
          <p className="mt-2">{r.summary}</p>
          {r.bullets && (
            <ul className="mt-2 list-disc pl-5 marker:text-[var(--ink-muted)] space-y-1">
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
