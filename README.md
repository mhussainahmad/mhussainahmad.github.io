# mhussainahmad.github.io

[![Deploy to GitHub Pages](https://github.com/mhussainahmad/mhussainahmad.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/mhussainahmad/mhussainahmad.github.io/actions/workflows/deploy.yml)

Personal site of **Muhammad Hussain Ahmad** — a machine learning engineer working on perception, real-time control, and high-performance inference. Static Next.js site deployed to GitHub Pages.

**Live:** [hussain1.me](https://hussain1.me) · [mhussainahmad.github.io](https://mhussainahmad.github.io)

## Tech stack

- [Next.js](https://nextjs.org/) 16 with static export (`output: "export"`)
- React 19 and TypeScript
- Tailwind CSS 4
- pnpm

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

To create a production build:

```bash
pnpm build
```

The static files will be generated in the `out/` directory.

## Deploy to GitHub Pages

This site deploys automatically to GitHub Pages from [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Pushes to `main` (and manual `workflow_dispatch` runs) install dependencies with pnpm, build the static site, and publish `out/`. The custom domain in [`public/CNAME`](public/CNAME) is `hussain1.me`.

### Automatic Deployment

1. Push your changes to the `main` branch
2. The GitHub Actions workflow will automatically:
   - Build the Next.js static site
   - Deploy it to GitHub Pages

### Manual Setup (First Time)

1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select **GitHub Actions**
4. The workflow will run automatically on every push to `main`

Your site will be available at [https://hussain1.me](https://hussain1.me) (and [https://mhussainahmad.github.io](https://mhussainahmad.github.io)).

### Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# Build the site
pnpm build

# The out/ directory contains the static files
# You can commit and push the out/ directory to a gh-pages branch
```
