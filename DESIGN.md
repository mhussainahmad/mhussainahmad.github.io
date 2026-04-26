# DESIGN.md

## Theme

Light, paper-like. Reading scenario: a recruiter on a 14" laptop in office daylight, scrolling between LinkedIn tabs. The page should read like an academic homepage — sober, easy on the eyes, no chrome to distract from content.

Dark mode: not provided. Single light theme intentionally. Forced consistency with the academic register.

## Color (OKLCH)

Strategy: **restrained**. Tinted neutrals + one accent for links, used sparingly.

| Role | Token | OKLCH | Notes |
|---|---|---|---|
| Page background | `--bg` | `oklch(98.4% 0.004 85)` | Warm off-white, paper |
| Surface (subtle) | `--surface` | `oklch(96.5% 0.005 85)` | Inset blocks, code |
| Ink (body) | `--ink` | `oklch(22% 0.01 85)` | Near-black, warm-tinted |
| Ink muted | `--ink-muted` | `oklch(45% 0.012 85)` | Captions, dates, meta |
| Rule | `--rule` | `oklch(88% 0.005 85)` | Hairlines, dividers |
| Accent (links) | `--accent` | `oklch(42% 0.15 25)` | Muted academic red, ≤5% surface |
| Accent hover | `--accent-strong` | `oklch(36% 0.18 25)` | Darker on hover |

Never `#000` or `#fff`.

## Typography

**Body and headings: Times New Roman / Times / serif system stack.** Literal Times. No Google Font. Honors the "Times New Roman kinda font" request and avoids any external font load (faster, more academic, no FOUC).

```css
font-family: "Times New Roman", "Times", "Liberation Serif", serif;
```

For code/inline tech: `ui-monospace, "SF Mono", "JetBrains Mono", monospace`.

### Scale (modular, ratio ≈ 1.333)

| Use | Size | Weight | Line height |
|---|---|---|---|
| Name (h1) | 2.25rem | 400 | 1.15 |
| Section heading (h2) | 1.4rem, italic | 400 | 1.3 |
| Subheading (h3) | 1.1rem | 700 | 1.35 |
| Body | 1.0625rem (17px) | 400 | 1.65 |
| Meta / caption | 0.875rem | 400 | 1.5 |

Body capped at **70ch** width for readability. Headings can extend slightly wider.

## Layout

- **Single column**, max-width 720px (`44rem`), centered.
- Generous left/right gutter on mobile (`1.25rem`), comfortable air on desktop.
- Vertical rhythm: section margins use a varied scale (`4rem`, `3rem`, `2rem`) for breathing room — not uniform.
- Header is two-column on desktop (photo left ~160px, name+contact right). Stacks on mobile.
- Project entries: leading thumbnail (96px square) + title + 1-line description + meta chips. List, not grid. No card chrome.
- No bento. No icon walls. No card-grid sameness.

## Motion

Almost none. Anchor-jump only.

- Link color transitions: `200ms ease-out`.
- Image fade-in on load: `300ms ease-out-quart`.
- No scroll-jack, no parallax, no entrance animations.

## Components (custom, in `components/researcher/`)

- `Header` — photo + name + tagline + inline contact links
- `Section` — `<section>` with italic h2 + body
- `Prose` — body paragraph with serif rules
- `ExperienceItem` — role, company, dates, bullets
- `ProjectItem` — thumbnail + title + description + tags + repo link
- `SkillGroup` — labeled inline list of skills
- `Footer` — last-updated + view source

No shadcn / Aceternity / sidefolio components reused. Clean break.

## Image / asset rules

- Photo: square crop, 320px source served as 160px display. Subtle 1px hairline border, no shadow, no rounded corners larger than 4px.
- Project thumbnails: 192px source, 96px display, optional. If absent, use a typographic glyph block (project initial in serif, on tinted surface).

## A11y

- Min contrast 7:1 for body (well above AAA at chosen ink/bg).
- Visible focus rings: 2px outline in `--accent`, 2px offset.
- All interactive elements keyboard-reachable.
- Respect `prefers-reduced-motion` (cuts the only fade-in).
