import { Separator } from "@/components/ui/separator";
import { Emph } from "@/components/ui/highlight";

const schools = [
  {
    name: "University of Manitoba",
    detail: (
      <>
        <Emph>M.Sc., Mechanical Engineering (Robotics Specialization)</Emph> ·
        Winnipeg, Canada
      </>
    ),
    period: "May 2024 – Dec 2026 (Expected)",
  },
  {
    name: "National University of Sciences and Technology (NUST)",
    detail: (
      <>
        <Emph>B.S., Mechanical Engineering</Emph> · Islamabad, Pakistan
      </>
    ),
    period: "Sep 2019 – June 2023",
  },
];

export function Education() {
  return (
    <ol className="space-y-6">
      {schools.map((school, index) => (
        <li key={school.name}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="font-heading text-[1.05rem] font-bold leading-snug">
                {school.name}
              </h3>
              <p className="mt-1 text-[0.95rem] text-muted-foreground">
                {school.detail}
              </p>
            </div>
            <p className="shrink-0 text-sm tabular-nums text-muted-foreground">
              {school.period}
            </p>
          </div>
          {index < schools.length - 1 && <Separator className="mt-6" />}
        </li>
      ))}
    </ol>
  );
}
