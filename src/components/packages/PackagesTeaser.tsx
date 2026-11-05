import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { packages, formatCzk, PACKAGES_PATH, type PackageSlug } from '@/data/packages';

// Krátký odkaz na výhodné balíčky ze stránek služeb (ochrana laku, renovace laku).
export function PackagesTeaser({ slugs }: { slugs: PackageSlug[] }) {
  const items = packages.filter(p => slugs.includes(p.slug));
  return (
    <aside style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.3)', padding: '1.5rem', marginBottom: '3rem' }}>
      <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '1.4rem', color: '#FFFFFF', margin: '0 0 0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
        Hledáte zvýhodněnou variantu?
      </h2>
      <p style={{ color: '#9CA3AF', margin: '0 0 1rem', lineHeight: 1.7 }}>
        Nabízíme výhodné balíčky, které spojují důkladné mytí a dekontaminaci s péčí o lak.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
        {items.map(p => (
          <Link key={p.slug} href={`${PACKAGES_PATH}#${p.slug}`} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', color: '#FFFFFF', textDecoration: 'none', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <span>{p.name}</span>
            <span style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>od {formatCzk(p.priceFrom)}</span>
          </Link>
        ))}
      </div>
      <Link href={PACKAGES_PATH} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#FFFFFF', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}>
        Zobrazit výhodné balíčky <ArrowRight size={14} />
      </Link>
    </aside>
  );
}
