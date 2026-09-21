import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-16">
      <Separator className="mb-6" />
      <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-baseline sm:justify-between">
        <span>Last updated April 2026.</span>
        <Button
          variant="link"
          className="h-auto justify-start px-0 text-sm text-primary"
          render={
            <a
              href="https://github.com/mhussainahmad/mhussainahmad.github.io"
              target="_blank"
              rel="noreferrer"
            />
          }
        >
          Source
        </Button>
      </div>
    </footer>
  );
}
