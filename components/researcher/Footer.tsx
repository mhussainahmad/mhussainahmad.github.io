export function Footer() {
  return (
    <footer className="mt-20 pt-6 border-t border-[var(--rule)] text-[0.85rem] text-[var(--ink-muted)] flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
      <span>Last updated April 2026.</span>
      <a
        href="https://github.com/mhussainahmad/mhussainahmad.github.io"
        target="_blank"
        rel="noreferrer"
      >
        Source
      </a>
    </footer>
  );
}
