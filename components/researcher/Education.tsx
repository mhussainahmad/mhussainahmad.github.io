export function Education() {
  return (
    <div className="space-y-1">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3>
          National University of Sciences and Technology
          <span className="font-normal text-[var(--ink-muted)]">, NUST</span>
        </h3>
        <span className="text-[0.9rem] text-[var(--ink-muted)] tabular-nums shrink-0">
          [Years]
        </span>
      </div>
      <p>[Degree], [Department]. Coursework in machine learning, robotics, and systems.</p>
    </div>
  );
}
