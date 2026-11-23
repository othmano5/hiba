// Optional static-hosting preparation. The source also runs directly as index.html.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist');
await fs.mkdir(output, { recursive: true });
for (const file of ['index.html', 'styles.css', 'script.js']) await fs.copyFile(path.join(root, file), path.join(output, file));
await fs.cp(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true, force: true });
console.log('Static output ready: dist/');
