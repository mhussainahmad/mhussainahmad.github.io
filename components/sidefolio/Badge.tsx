import Link from "next/link";
import React from "react";

export const Badge = ({
  href,
  text,
}: {
  href: string;
  text: string;
}) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition bg-[#14a800] hover:bg-[#0f7d00] text-white shadow-sm group-hover/button:scale-105 focus-visible:ring-2 focus-visible:ring-[#14a800] focus-visible:ring-offset-2 text-sm font-semibold px-4 py-2 mt-auto origin-left"
    >
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
      >
        <path d="M5 12l14 0"></path>
        <path d="M13 18l6 -6"></path>
        <path d="M13 6l6 6"></path>
      </svg>
    </Link>
  );
};
