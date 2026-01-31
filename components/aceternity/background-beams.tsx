"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="absolute left-0 right-0 top-0 h-[500px] bg-gradient-to-b from-white via-white/0 to-transparent dark:from-black dark:via-black/0" />
      <div className="absolute left-0 right-0 bottom-0 h-[500px] bg-gradient-to-t from-white via-white/0 to-transparent dark:from-black dark:via-black/0" />
    </div>
  );
};
