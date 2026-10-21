// Připraví složku ftp-upload/ pro nahrání na Wedos FTP: kopie out/ bez souborů,
// na které web neodkazuje (zdrojové JPEG fotky, výchozí ikony Next.js, testovací soubory).
// Spouštět přes: npm run ftp:prepare (nejdřív udělá build)
import { cpSync, rmSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, basename, sep } from 'node:path';

const SRC = 'out';
const DEST = 'ftp-upload';
const EXCLUDE = [
  /^(file|globe|next|vercel|window)\.svg$/,                // výchozí ikony z create-next-app
  /^section-transition(-example\.html|\.css)$/,            // testovací ukázka
  /^mnlogodark\.png$/,                                     // nepoužité logo
];

if (!existsSync(join(SRC, 'index.html'))) {
  console.error('Chybí out/index.html – nejdřív spusť build.');
  process.exit(1);
}

rmSync(DEST, { recursive: true, force: true });
let skipped = 0;
cpSync(SRC, DEST, {
  recursive: true,
  filter: src => {
    // zdrojové JPEG fotky před/po – web používá jejich .webp verze (og-image.jpg zůstává)
    const sourcePhoto = src.split(sep).includes('beforeafter') && /\.jpe?g$/i.test(src);
    const skip = sourcePhoto || EXCLUDE.some(re => re.test(basename(src)));
    if (skip) skipped++;
    return !skip;
  },
});

const walk = d => readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]);
const files = walk(DEST);
const size = files.reduce((s, f) => s + statSync(f).size, 0);
console.log(`ftp-upload/ připraveno: ${files.length} souborů, ${(size / 1e6).toFixed(1)} MB (vynecháno ${skipped}).`);
console.log('Nahrát CELÝ OBSAH složky (včetně skrytého .htaccess) do kořene webu na FTP.');
