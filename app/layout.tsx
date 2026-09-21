import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

const description =
  "Machine Learning Engineer with 4+ years of experience in perception, real-time control, and high-performance inference. M.Sc. Robotics @ University of Manitoba.";

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
