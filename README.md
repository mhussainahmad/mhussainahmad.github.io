# M Hussain Ahmad - Portfolio

Personal portfolio website showcasing AI & Automation Systems Engineering work.

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

This site is configured to deploy automatically to GitHub Pages using GitHub Actions.

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

Your site will be available at: `https://mhussainahmad.github.io`

### Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# Build the site
pnpm build

# The out/ directory contains the static files
# You can commit and push the out/ directory to a gh-pages branch
```
