import type { NextConfig } from "next";
import path from "path";

const root = process.cwd();

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Turbopack can mis-resolve CSS @imports when multiple lockfiles exist;
  // pin bare CSS package imports to this project's node_modules.
  turbopack: {
    resolveAlias: {
      tailwindcss: path.join(root, "node_modules/tailwindcss"),
      "tw-animate-css": path.join(root, "node_modules/tw-animate-css"),
      "shadcn/tailwind.css": path.join(
        root,
        "node_modules/shadcn/dist/tailwind.css"
      ),
    },
  },
};

export default nextConfig;
