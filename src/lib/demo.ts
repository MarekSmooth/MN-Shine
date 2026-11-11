// Ukázkový build pro GitHub Pages (npm run demo:build) – na ostrém webu je vždy false.
// V ukázce: noindex, bez Google tagu a cookie lišty. Jinak vše funguje jako na ostrém webu (odkazy, formulář).
export const IS_DEMO = process.env.NEXT_PUBLIC_DEMO === '1';
