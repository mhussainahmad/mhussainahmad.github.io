export function Header() {
  return (
    <header className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-7 sm:gap-10 items-start mb-16">
      <div className="shrink-0">
        <img
          src="https://avatars.githubusercontent.com/u/68985613?v=4"
          alt="Muhammad Hussain Ahmad"
          width={160}
          height={160}
          loading="eager"
          className="w-40 h-40 object-cover border border-[var(--rule)]"
          style={{ borderRadius: 2 }}
        />
      </div>

      <div>
        <h1>Muhammad Hussain Ahmad</h1>
        <p className="mt-3 text-[var(--ink-muted)]" style={{ fontStyle: "italic" }}>
          Machine Learning, AI, and Robotics engineer.
        </p>
        <p className="mt-1 text-[var(--ink-muted)]">
          Four years of experience. Based in Islamabad, Pakistan.{" "}
          <span className="whitespace-nowrap">NUST alumnus.</span>
        </p>

        <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[0.95rem]">
          <a href="mailto:emhussain25@gmail.com">Email</a>
          <a href="https://github.com/mhussainahmad" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
