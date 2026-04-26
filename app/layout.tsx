import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Hussain Ahmad",
  description:
    "Machine Learning, AI, and Robotics engineer. Four years of experience building production ML systems, robotic perception, and applied AI.",
  metadataBase: new URL("https://mhussainahmad.github.io"),
  openGraph: {
    title: "Muhammad Hussain Ahmad",
    description:
      "Machine Learning, AI, and Robotics engineer. Four years of experience building production ML systems, robotic perception, and applied AI.",
    url: "https://mhussainahmad.github.io",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
