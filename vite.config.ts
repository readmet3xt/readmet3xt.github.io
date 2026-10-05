import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { visualizer } from 'rollup-plugin-visualizer';
import { ROUTES, DEFAULT_META, SITE_ORIGIN, pageTitle } from "./src/data/site";

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Replace exactly one match, or fail the build (a silent miss would ship wrong meta). */
const replaceOnce = (html: string, pattern: RegExp, value: string, label: string) => {
  const matches = html.match(new RegExp(pattern.source, 'g')) ?? [];
  if (matches.length !== 1) throw new Error(`staticRoutes: expected 1 ${label}, found ${matches.length}`);
  return html.replace(pattern, value);
};

const withMeta = (template: string, route: { path: string; title?: string; description: string; noindex?: boolean }) => {
  const title = escapeHtml(pageTitle(route.title));
  const description = escapeHtml(route.description);
  const url = route.path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${route.path}`;
  let html = template;
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`, 'title');
  html = replaceOnce(html, /<meta name="description" content="[^"]*"/, `<meta name="description" content="${description}"`, 'description');
  html = replaceOnce(html, /<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`, 'canonical');
  html = replaceOnce(html, /<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${title}"`, 'og:title');
  html = replaceOnce(html, /<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${description}"`, 'og:description');
  html = replaceOnce(html, /<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`, 'og:url');
  html = replaceOnce(html, /<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${title}"`, 'twitter:title');
  html = replaceOnce(html, /<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${description}"`, 'twitter:description');
  if (route.noindex) html = replaceOnce(html, /<meta name="theme-color"/, '<meta name="robots" content="noindex" />\n  <meta name="theme-color"', 'theme-color');
  return html;
};

/**
 * GitHub Pages serves /pebble from pebble.html with a 200, so each route gets its
 * own copy of index.html with the right meta. No 404 redirect, one document load.
 * Also writes a real 404.html and the sitemap from the same route list.
 */
const staticRoutes = (): Plugin => ({
  name: 'static-routes',
  apply: 'build',
  buildStart() {
    for (const route of ROUTES) {
      const slug = route.path.slice(1);
      if (slug && fs.existsSync(path.resolve(__dirname, 'public', slug))) {
        throw new Error(`staticRoutes: public/${slug} would shadow the /${slug} route on GitHub Pages`);
      }
    }
  },
  closeBundle() {
    const dist = path.resolve(__dirname, 'dist');
    const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
    for (const route of ROUTES) {
      const file = route.path === '/' ? 'index.html' : `${route.path.slice(1)}.html`;
      fs.writeFileSync(path.join(dist, file), withMeta(template, route));
    }
    const notFound = withMeta(template, { path: '/404', title: 'Page not found', description: DEFAULT_META.description, noindex: true });
    fs.writeFileSync(path.join(dist, '404.html'), notFound);
    const sitemap = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...ROUTES.filter((r) => !r.noindex).map((r) => `  <url><loc>${r.path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${r.path}`}</loc></url>`),
      '</urlset>',
      '',
    ].join('\n');
    fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
  },
});

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    staticRoutes(),
    // Bundle report only on request: ANALYZE=1 npm run build → stats.html (gitignored, not deployed).
    process.env.ANALYZE && visualizer({
      filename: './stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
      template: 'treemap',
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
  },
}));
