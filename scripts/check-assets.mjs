// Fails if src/ or index.html references a public file that doesn't exist.
// Run: npm run check:assets
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ASSET_RE = /(['"`])(\/[^'"`\s]+?\.(?:png|jpe?g|webp|gif|svg|ico|pdf|mp3|mp4|webmanifest))\1/gi;

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : /\.(tsx?|html)$/.test(e.name) ? [p] : [];
  });

const files = [...walk(path.join(root, 'src')), path.join(root, 'index.html')];
const missing = [];
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  for (const [, , ref] of text.matchAll(ASSET_RE)) {
    if (!fs.existsSync(path.join(root, 'public', ref))) missing.push(`${path.relative(root, file)}: ${ref}`);
  }
}

if (missing.length) {
  console.error(`Missing public assets (${missing.length}):\n  ` + missing.join('\n  '));
  process.exit(1);
}
console.log(`check:assets ok (${files.length} files scanned)`);
