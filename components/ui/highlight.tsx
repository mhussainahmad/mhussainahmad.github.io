import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Soft marker wash — use sparingly on the highest-signal phrases. */
export function Highlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <mark className={cn("highlight font-semibold text-primary", className)}>
      {children}
    </mark>
  );
}

/** Colored emphasis without the marker wash. */
export function Emph({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <strong className={cn("font-semibold text-primary", className)}>
      {children}
    </strong>
  );
}
