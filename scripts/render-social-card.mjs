// Renders scripts/social-card.html to public/social-card.png (1200×630). Run: node scripts/render-social-card.mjs
import puppeteer from 'puppeteer';
import { pathToFileURL, fileURLToPath } from 'url';
import path from 'path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const browser = await puppeteer.launch({ channel: 'chrome' });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630 });
await page.goto(pathToFileURL(path.join(dir, 'social-card.html')).href, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: path.join(dir, '..', 'public', 'social-card.png'), clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();
console.log('Wrote public/social-card.png');
