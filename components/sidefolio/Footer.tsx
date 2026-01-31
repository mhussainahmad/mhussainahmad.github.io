"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-xs text-[#9ca3af] border-t border-[#2d2d2d]">
      <span className="font-semibold text-white">{new Date().getFullYear()} </span>
      &#8212; Built with Next.js & Tailwind CSS
    </div>
  );
};
