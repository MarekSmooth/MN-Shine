// Fotky galerie a před/po mají mobilní verzi foo-sm.webp (generuje `npm run images:mobile`).
// Mobil (do 768 px) dostane -sm verzi, větší obrazovky vždy originál.
export const MOBILE_QUERY = '(max-width: 768px)';

export function mobileSrc(src: string): string {
  return /^\/(galery|beforeafter)\/.+\.webp$/.test(src) ? src.replace(/\.webp$/, '-sm.webp') : src;
}

// Pro přednačítání přes new Image() – vybere stejnou verzi, jakou pak zobrazí <picture>.
export function pickSrc(src: string): string {
  return typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches ? mobileSrc(src) : src;
}
