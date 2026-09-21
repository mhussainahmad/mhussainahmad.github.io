import { GraduationCap, Mail, MapPin, Phone, FileText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Emph } from "@/components/ui/highlight";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/mhussainahmad",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hussain-ai-robotics/",
    icon: LinkedInIcon,
  },
  {
    label: "CV",
    href: "mailto:mhussainahmad@outlook.com?subject=CV%20request",
    icon: FileText,
  },
];

export function Header() {
  return (
    <header className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
      <div className="min-w-0 flex-1">
        <h1 className="font-heading text-[2rem] font-bold leading-tight tracking-tight sm:text-[2.35rem]">
          Muhammad Hussain Ahmad
        </h1>

        <p className="mt-3 flex items-start gap-2 text-[0.95rem] text-muted-foreground">
          <GraduationCap
            className="mt-0.5 size-4 shrink-0 text-primary"
            aria-hidden
          />
          <span>
            <Emph>M.Sc. Mechanical Engineering (Robotics)</Emph> @ University of
            Manitoba
          </span>
        </p>

        <p className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[0.95rem] text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 shrink-0 text-primary" aria-hidden />
            Winnipeg, MB
          </span>
          <span className="inline-flex items-center gap-2">
            <Mail className="size-4 shrink-0 text-primary" aria-hidden />
            <a
              href="mailto:mhussainahmad@outlook.com"
              className="inline-link no-underline hover:underline"
            >
              mhussainahmad@outlook.com
            </a>
          </span>
          <span className="inline-flex items-center gap-2">
            <Phone className="size-4 shrink-0 text-primary" aria-hidden />
            <a
              href="tel:+12042987998"
              className="inline-link no-underline hover:underline"
            >
              +1 (204) 298-7998
            </a>
          </span>
        </p>

        <nav className="mt-5 flex flex-wrap items-center gap-2">
          {links.map(({ label, href, icon: Icon }) => (
            <Button
              key={label}
              variant="outline"
              size="sm"
              className="gap-1.5 rounded-full border-border bg-background font-serif shadow-none"
              render={
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                />
              }
            >
              <Icon className="size-3.5 text-primary" />
              {label}
            </Button>
          ))}
        </nav>
      </div>

      <Avatar className="size-28 shrink-0 sm:size-32">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/68985613?v=4"
          alt="Muhammad Hussain Ahmad"
        />
        <AvatarFallback className="text-xl">MHA</AvatarFallback>
      </Avatar>
    </header>
  );
}
