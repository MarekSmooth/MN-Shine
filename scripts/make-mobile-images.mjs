// Vytvoří mobilní verze fotek galerie a před/po: foo.webp -> foo-sm.webp (delší strana max. 1000 px).
// Spouštět po přidání nových fotek: npm run images:mobile
// Existující -sm verze novější než originál se přeskakují.
import sharp from 'sharp';
import { readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOTS = ['public/galery', 'public/beforeafter'];
const MAX = 1000; // delší strana
const QUALITY = 72;

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (p.endsWith('.webp') && !p.endsWith('-sm.webp')) yield p;
  }
}

let made = 0, skipped = 0, before = 0, after = 0;
for (const root of ROOTS) {
  for (const src of walk(root)) {
    const out = src.replace(/\.webp$/, '-sm.webp');
    if (existsSync(out) && statSync(out).mtimeMs >= statSync(src).mtimeMs) { skipped++; continue; }
    await sharp(src).resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true }).webp({ quality: QUALITY }).toFile(out);
    before += statSync(src).size;
    after += statSync(out).size;
    made++;
  }
}
const mb = n => (n / 1e6).toFixed(1) + ' MB';
console.log(`Vytvořeno ${made}, přeskočeno ${skipped}. Originály ${mb(before)} -> mobilní ${mb(after)}`);
