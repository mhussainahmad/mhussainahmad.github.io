"use client";
import { navlinks, socials } from "@/lib/navlinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconX, IconMenu2 } from "@tabler/icons-react";
import { UpworkIcon } from "./UpworkIcon";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only set to open on desktop after mount (client-side only)
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      setOpen(true);
    }
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth >= 1024) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed lg:relative z-50 w-64 lg:w-64 h-screen bg-[#1a1a1a] border-r border-[#2d2d2d] flex flex-col shadow-lg lg:shadow-none"
          >
            <div className="flex-1 overflow-y-auto">
              {/* Header */}
              <div className="px-6 pt-8 pb-6 border-b border-[#2d2d2d]">
                <SidebarHeader />
              </div>

              {/* Navigation */}
              <div className="px-4 py-6">
                <Navigation setOpen={setOpen} />
              </div>
            </div>

            {/* Footer with CTA */}
            <div className="px-4 pb-6 pt-4 border-t border-[#2d2d2d]">
              <div
                onClick={() => {
                  if (typeof window !== "undefined" && window.innerWidth < 1024) {
                    setOpen(false);
                  }
                }}
              >
                <Badge href="/#case-studies" text="View Case Studies" />
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Mobile toggle button */}
      <button
        className="fixed lg:hidden bottom-6 right-6 h-12 w-12 rounded-full bg-[#14a800] text-white shadow-lg hover:bg-[#0f7d00] transition-colors flex items-center justify-center z-50"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? (
          <IconX className="h-5 w-5" />
        ) : (
          <IconMenu2 className="h-5 w-5" />
        )}
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href.startsWith("/#")) {
      // For hash links, check if we're on the home page
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="flex flex-col space-y-1">
      {/* Main Navigation */}
      <div className="space-y-1">
        {navlinks.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                if (typeof window !== "undefined" && window.innerWidth < 1024) {
                  setOpen(false);
                }
              }}
              className={twMerge(
                "group relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                active
                  ? "bg-[#14a800]/20 text-[#14a800]"
                  : "text-[#9ca3af] hover:bg-[#2d2d2d] hover:text-white"
              )}
            >
              {active && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-[#14a800] rounded-r-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <link.icon
                className={twMerge(
                  "h-5 w-5 flex-shrink-0 transition-colors",
                  active ? "text-[#14a800]" : "text-[#9ca3af] group-hover:text-white"
                )}
              />
              <span className="flex-1">{link.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Socials Section */}
      <div className="pt-8 mt-8 border-t border-[#2d2d2d]">
        <p className="px-3 mb-3 text-xs font-semibold text-[#9ca3af] uppercase tracking-wider">
          Connect
        </p>
        <div className="space-y-1">
          {socials.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#9ca3af] hover:bg-[#2d2d2d] hover:text-white transition-all duration-200"
            >
              {link.label === "Upwork" ? (
                <UpworkIcon className="h-5 w-5 flex-shrink-0" />
              ) : (
                <link.icon className="h-5 w-5 flex-shrink-0 text-[#9ca3af] group-hover:text-white transition-colors" />
              )}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="h-12 w-12 rounded-full bg-[#14a800] flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-sm">
        M
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-white text-sm truncate">M Hussain Ahmad</p>
        <p className="font-normal text-[#9ca3af] text-xs truncate">AI & Automation</p>
      </div>
    </div>
  );
};
