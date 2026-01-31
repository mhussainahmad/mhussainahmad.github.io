import React from "react";
import Image from "next/image";

export const UpworkIcon = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/upwork.png"
      alt="Upwork"
      width={20}
      height={20}
      className={className || "h-5 w-5 flex-shrink-0"}
    />
  );
};
