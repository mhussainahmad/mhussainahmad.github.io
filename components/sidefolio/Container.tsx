import React from "react";
import { twMerge } from "tailwind-merge";

export const Container = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main className={twMerge("w-full py-12 md:py-16 px-4 md:px-6 lg:px-8", className)}>
      {children}
    </main>
  );
};
