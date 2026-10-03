# readmet3xt.github.io

Amaan Khan's portfolio: service and product design case studies, at https://readmet3xt.github.io.

## Run it

```sh
npm install
npm run dev      # local server
npm run build    # production build in dist/ (also writes a page per route, 404.html and sitemap.xml)
```

## How it's built

- Vite, React 18, TypeScript and Tailwind. Deploys to GitHub Pages from `main` (`.github/workflows/deploy.yml`).
- Dark by default, with a light theme from the sidebar. Type: Geist and Geist Mono.
- Motion graphics live in `src/motion`: original compositions authored in Remotion (`Projects/amaan-motion`), played on the site by a small runtime (`src/motion/core.tsx`) instead of Remotion's player. They follow the visitor's reduced-motion setting.
- Images: `scripts/optimize-images.py` writes WebP files and their sizes; `npm run check:assets` checks every referenced file exists.
