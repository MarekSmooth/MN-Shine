import type { BadgeImage } from '@/data/packages';

/** Obsah zavřené cedulky – % a text, nebo dodaný rastrový obrázek. */
export function BadgeTagContent({ image }: { image?: BadgeImage | null }) {
  if (image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="pkb-tag__img" src={image.src} width={image.width} height={image.height} alt="" />;
  }
  return (
    <>
      <span className="pkb-tag__pct" aria-hidden="true">%</span>
      <span className="pkb-tag__title">Výhodné balíčky</span>
    </>
  );
}
