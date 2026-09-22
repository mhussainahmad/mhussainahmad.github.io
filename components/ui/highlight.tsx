import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Primary-colored emphasis for high-signal phrases. */
export function Highlight({
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

/** Colored emphasis without extra weight beyond semibold. */
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
