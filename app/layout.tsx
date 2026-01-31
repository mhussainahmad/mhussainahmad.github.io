import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Sidebar } from "@/components/sidefolio/Sidebar";
import { Footer } from "@/components/sidefolio/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "M Hussain Ahmad - AI & Automation Systems Engineer",
  description: "Saved over $5M through automations. Acting like your AI co-founder. I build, scale, and optimize production-grade AI systems that deliver measurable business impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-[#0a0a0a]"
        )}
      >
        <Sidebar />
        <div className="lg:pl-0 lg:pt-0 bg-[#0a0a0a] flex-1 overflow-y-auto">
          <div className="flex-1 bg-[#1a1a1a] min-h-screen overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
