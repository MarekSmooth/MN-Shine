// Oprava statického exportu Next.js 16: prohlížeč při přednačítání stránky žádá
//   sluzby/ochrana-laku-brno/__next.sluzby.ochrana-laku-brno.txt
// ale export ho uloží jako
//   sluzby/ochrana-laku-brno/__next.sluzby/ochrana-laku-brno.txt
// Ke každému takovému souboru vytvoří kopii s názvem, jaký prohlížeč čeká (jinak 404 a pomalejší přechody).
import { readdirSync, copyFileSync, existsSync } from 'node:fs';
import { join, sep } from 'node:path';

export function fixRscPaths(root) {
  const walk = d => readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]);
  let made = 0;
  for (const file of walk(root)) {
    if (!file.endsWith('.txt')) continue;
    const parts = file.slice(root.length + 1).split(sep);
    const i = parts.findIndex((p, idx) => p.startsWith('__next.') && idx < parts.length - 1);
    if (i === -1) continue;
    const dotted = join(root, ...parts.slice(0, i), parts.slice(i).join('.'));
    if (!existsSync(dotted)) { copyFileSync(file, dotted); made++; }
  }
  return made;
}
