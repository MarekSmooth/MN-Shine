import { packages, formatCzk, type BadgeVariant, type BadgeImage } from '@/data/packages';

const MIN_PRICE = Math.min(...packages.map(p => p.priceFrom));

/** Znak % ve zlatém kruhu (varianta A). Kruh i znak mají třídy pro animaci. */
function PercentCircle({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" style={{ flexShrink: 0, overflow: 'visible' }}>
      <circle className="pkb-ring" pathLength={1} cx="20" cy="20" r="18.5" fill="none" stroke="#C9A45C" strokeWidth="1.5" transform="rotate(-90 20 20)" />
      <g className="pkb-pct-sym">
        <circle cx="14" cy="14" r="3.2" fill="none" stroke="#C9A45C" strokeWidth="2" />
        <circle cx="26" cy="26" r="3.2" fill="none" stroke="#C9A45C" strokeWidth="2" />
        <line x1="27" y1="12" x2="13" y2="28" stroke="#C9A45C" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/** Kapka s leskem a jiskrou (varianta C). */
function ShineDrop({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" style={{ flexShrink: 0, overflow: 'visible' }}>
      <g className="pkb-drop">
        <path d="M14 3C14 3 6 13 6 19a8 8 0 0 0 16 0C22 13 14 3 14 3Z" fill="#0a0a0a" />
        <path d="M10.5 19.5a3.5 3.5 0 0 0 3.5 3.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </g>
      <path className="pkb-spark" d="M25 4v6M22 7h6" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** Zlatá linka, která cedulku při nástupu obtáhne (varianta A). */
function Trace() {
  return (
    <svg className="pkb-trace" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <rect x="0" y="0" width="100" height="100" pathLength={1} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function Text({ sub }: { sub: string }) {
  return <span><span className="pkb-tag__title">Výhodné balíčky</span><span className="pkb-tag__sub">{sub}</span></span>;
}

/** Obsah zavřené cedulky – grafika podle varianty, nebo dodaný rastrový obrázek. */
export function BadgeTagContent({ variant, image }: { variant: BadgeVariant; image?: BadgeImage | null }) {
  if (image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="pkb-tag__img" src={image.src} width={image.width} height={image.height} alt="" />;
  }
  const sub = `od ${formatCzk(MIN_PRICE)}`;
  if (variant === 'b') {
    return (
      <>
        <span className="pkb-tag__pct" aria-hidden="true">%</span>
        <Text sub={sub} />
      </>
    );
  }
  if (variant === 'c') {
    return (
      <>
        <ShineDrop />
        <Text sub={sub} />
      </>
    );
  }
  return (
    <>
      <PercentCircle />
      <Text sub={sub} />
      <Trace />
    </>
  );
}

/** Ikona v hlavičce panelu podle varianty. */
export function PanelHeadArt({ variant }: { variant: BadgeVariant }) {
  if (variant === 'b') return <span className="pkb-tag__pct" aria-hidden="true">%</span>;
  if (variant === 'c') return <ShineDrop size={34} />;
  return <PercentCircle size={44} />;
}
