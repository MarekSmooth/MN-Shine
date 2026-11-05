// Ukázka webu pro GitHub Pages (https://mareksmooth.github.io/MN-Shine/) – npm run demo:build
// Postaví web v ukázkovém režimu (noindex, bez gtagu a cookie lišty, neodesílající formulář,
// neklikatelný panel balíčků, přepínač variant cedulky) do složky demo-out/.
// Ostrý web se staví dál přes npm run ftp:prepare – tento skript ho neovlivňuje.
import { spawnSync } from 'node:child_process';
import { cpSync, rmSync, readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'node:fs';
import { join, basename, sep } from 'node:path';
import { fixRscPaths } from './fix-rsc-paths.mjs';

const BASE = '/MN-Shine';
const DEST = 'demo-out';

const res = spawnSync('npx', ['next', 'build'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, NEXT_PUBLIC_DEMO: '1', DEMO_BASE_PATH: BASE },
});
if (res.status !== 0) process.exit(res.status ?? 1);

rmSync(DEST, { recursive: true, force: true });
cpSync('out', DEST, {
  recursive: true,
  filter: src => {
    const name = basename(src);
    if (src.split(sep).includes('beforeafter') && /\.jpe?g$/i.test(name)) return false;
    return !/^(file|globe|next|vercel|window)\.svg$|^section-transition|^mnlogodark\.png$|^\.htaccess$|^sitemap\.xml$/.test(name);
  },
});
rmSync('out', { recursive: true, force: true }); // ať v out/ nezůstane ukázka

// Odkazy na soubory z public/ (/galery/…, /icons/…, /mnlogo.png …) dostanou předponu /MN-Shine.
// Trasy (/kontakt, /_next) předponuje Next sám přes basePath.
const publicNames = readdirSync('public').filter(n => n !== '.htaccess').map(n => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
const re = new RegExp(`(?<=["'(\\s,=])/(${publicNames.join('|')})(?=[/"'?)\\s,\\\\])`, 'g');
const walk = d => readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]);
let changed = 0;
for (const f of walk(DEST)) {
  if (!/\.(html|txt|js|css|json)$/.test(f)) continue;
  const s = readFileSync(f, 'utf8');
  const out = s.replace(re, `${BASE}/$1`);
  if (out !== s) { writeFileSync(f, out); changed++; }
}

const rscFixed = fixRscPaths(DEST);
writeFileSync(join(DEST, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
writeFileSync(join(DEST, '.nojekyll'), '');

const files = walk(DEST);
const size = files.reduce((n, f) => n + statSync(f).size, 0);
console.log(`\ndemo-out/ připraveno: ${files.length} souborů, ${(size / 1e6).toFixed(1)} MB, předpona doplněna v ${changed} souborech, opraveno ${rscFixed} cest přednačítání.`);
console.log(existsSync(join(DEST, 'index.html')) ? 'Nahrát do větve gh-pages (kořen).' : 'CHYBA: chybí index.html');
