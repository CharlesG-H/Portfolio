# Portfolio

The personal portfolio site of Charles G-H — Product Manager. Built to show the work: real problems, the decisions behind them, and what changed after shipping.

## Tech stack

- **[Next.js 16](https://nextjs.org)** (App Router, Turbopack)
- **[React 19](https://react.dev)** + **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com)** for styling
- **[Framer Motion](https://www.framer.com/motion/)** for animation
- **[Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)** via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it. The page auto-updates as you edit files.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── app/          # App Router pages — / (home), /about, /projects
│   ├── layout.tsx
│   ├── globals.css
│   └── page.tsx
├── components/   # Reusable UI (cards, sections, animations, icons)
└── lib/          # Data and helpers (e.g. project content)
```

## Continuous integration

Every pull request into `main` runs lint and build via [GitHub Actions](.github/workflows/ci.yml). A red check means something is broken — keep `main` green and deployable.

## Deployment

Optimised for deployment on [Vercel](https://vercel.com), which builds and serves the Next.js app directly from the `main` branch.
