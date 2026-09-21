"use client";

import { FlaskConical, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GitHubIcon } from "@/components/icons/GitHubIcon";

const works = [
  {
    label: "Gauntlet",
    href: "/gauntlet",
  },
  {
    label: "RGB-D Teleoperation",
    href: "#projects",
  },
  {
    label: "Genesis Safety Twin",
    href: "https://github.com/mhussainahmad/Genesis",
  },
  {
    label: "SDXL Inference",
    href: "#projects",
  },
];

export function SiteNav() {
  return (
    <nav className="fixed top-4 right-4 z-50 flex items-center gap-2 sm:top-5 sm:right-6">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 rounded-full border-border bg-background/95 font-serif text-sm shadow-sm backdrop-blur"
            />
          }
        >
          <FlaskConical className="size-3.5 text-primary" />
          More Works
          <ChevronDown className="size-3.5 opacity-60" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-44 font-serif">
          {works.map((work) => (
            <DropdownMenuItem
              key={work.label}
              render={
                <a
                  href={work.href}
                  target={work.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    work.href.startsWith("http") ? "noreferrer" : undefined
                  }
                />
              }
            >
              {work.label}
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem render={<a href="#projects" />}>
            All projects on this page
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant="outline"
        size="icon-sm"
        className="rounded-full border-border bg-background/95 shadow-sm backdrop-blur"
        aria-label="GitHub profile"
        render={
          <a
            href="https://github.com/mhussainahmad"
            target="_blank"
            rel="noreferrer"
          />
        }
      >
        <GitHubIcon className="size-4" />
      </Button>
    </nav>
  );
}
