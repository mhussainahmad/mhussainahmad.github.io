import React from "react";
import { twMerge } from "tailwind-merge";

export const Heading = ({
  className,
  children,
  as: Tag = "h1",
}: {
  className?: string;
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}) => {
  const baseSizes = {
    h1: "text-3xl md:text-4xl lg:text-5xl",
    h2: "text-2xl md:text-3xl lg:text-4xl",
    h3: "text-xl md:text-2xl lg:text-3xl",
    h4: "text-lg md:text-xl lg:text-2xl",
    h5: "text-base md:text-lg lg:text-xl",
    h6: "text-sm md:text-base lg:text-lg",
    p: "text-base",
  };

  return (
    <Tag
      className={twMerge(
        baseSizes[Tag],
        "font-semibold text-white leading-tight",
        className
      )}
    >
      {children}
    </Tag>
  );
};
