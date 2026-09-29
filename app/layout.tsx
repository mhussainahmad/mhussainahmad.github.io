import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

const description =
  "Robotics Control Engineer with 4+ years across robotics and AI, delivering low-level torque control, impedance control, and robot safety on real hardware. M.Sc. Mechanical Engineering @ University of Manitoba.";

export const metadata: Metadata = {
  title: "Muhammad Hussain Ahmad",
  description,
  metadataBase: new URL("https://mhussainahmad.github.io"),
  openGraph: {
    title: "Muhammad Hussain Ahmad",
    description,
    url: "https://mhussainahmad.github.io",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-serif", lora.variable)}>
      <body>{children}</body>
    </html>
  );
}
