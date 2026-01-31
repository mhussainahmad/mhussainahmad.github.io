import React from "react";
import { twMerge } from "tailwind-merge";

export const Highlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className={twMerge("bg-[#14a800]/20 text-[#14a800] px-1 py-0.5 font-medium", className)} style={{ wordBreak: 'keep-all', whiteSpace: 'nowrap' }}>
      {children}
    </span>
  );
};
