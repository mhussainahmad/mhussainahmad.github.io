import type { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
  spacing = "lg",
}: {
  id?: string;
  title: string;
  children: ReactNode;
  spacing?: "lg" | "md" | "sm";
}) {
  const top = spacing === "lg" ? "mt-16" : spacing === "md" ? "mt-12" : "mt-9";
  return (
    <section id={id} className={top}>
      <h2 className="mb-5">{title}</h2>
      {children}
    </section>
  );
}
