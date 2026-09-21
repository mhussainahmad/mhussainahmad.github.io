import type { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function Section({
  id,
  title,
  children,
  spacing = "lg",
  action,
}: {
  id?: string;
  title: string;
  children: ReactNode;
  spacing?: "lg" | "md" | "sm";
  action?: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        spacing === "lg" && "mt-12",
        spacing === "md" && "mt-10",
        spacing === "sm" && "mt-8"
      )}
    >
      <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
        <h2 className="font-heading text-xl font-bold tracking-tight sm:text-[1.35rem]">
          {title}
        </h2>
        {action}
      </div>
      <Separator className="mb-5" />
      {children}
    </section>
  );
}
