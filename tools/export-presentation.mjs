import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';

const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1800, height: 1320 }, deviceScaleFactor: 1 });
  await page.goto('http://127.0.0.1:4173/tools/presentation.html', { waitUntil: 'networkidle' });
  await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(i => i.decode())); });
  await page.screenshot({ path: 'artifacts/features-overview.png' });
  const offline = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const external = [];
  await offline.route('http*/**', route => { external.push(route.request().url()); return route.abort(); });
  await offline.goto(pathToFileURL(path.resolve('index.html')).href, { waitUntil: 'load' });
  await offline.evaluate(async () => { for (const image of document.images) image.loading = 'eager'; await Promise.all([...document.images].map(image => image.decode())); await document.fonts.ready; });
  assert.equal(await offline.locator('.project-card').count(), 4);
  assert.deepEqual(external, []);
  assert.equal(await offline.locator('html').getAttribute('dir'), 'rtl');
  await offline.locator('[data-project="studyflow"]').click();
  assert.equal(await offline.locator('#project-dialog').evaluate(dialog => dialog.open), true);
  console.log('PASS: features presentation exported; direct file:// opening works offline, including all images, fonts, project rendering and dialog.');
} finally { await browser.close(); }
