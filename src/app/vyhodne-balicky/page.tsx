import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { getPackageServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import {
  packages, packagesIntro, oziveniVsRenovace, vehicleCategories, vehicleCategoriesNote,
  packageConditions, packagesCta, formatCzk, orderHref, PACKAGES_PATH,
} from '@/data/packages';

const URL = `https://mnshine.cz${PACKAGES_PATH}`;

export const metadata: Metadata = {
  title: { absolute: 'Výhodné balíčky – vosk, keramika, oživení laku | MN Shine Detailing Brno' },
  description: 'Balíčky péče o lak v Brně: mytí a tuhý vosk od 4 499 Kč, keramická ochrana Gyeon CanCoat EVO od 5 499 Kč, oživení laku od 4 999 Kč.',
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    url: URL,
    title: 'Výhodné balíčky – vosk, keramika, oživení laku | MN Shine Detailing',
    description: 'Mytí a tuhý vosk od 4 499 Kč, keramická ochrana od 5 499 Kč, oživení laku od 4 999 Kč. Vojkovice u Brna.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Výhodné balíčky – MN Shine' }],
  },
};

const H2 = { fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' } as const;
const H3 = { color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '1.75rem 0 0.75rem' } as const;
const TEXT = { color: '#9CA3AF', lineHeight: 1.8 } as const;
const CELL = { padding: '0.85rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' } as const;
const TH = { textAlign: 'left', color: '#FFFFFF', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.3)' } as const;
const BTN_PRIMARY = { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FFFFFF', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none' } as const;

function CheckList({ items }: { items: string[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      {items.map(item => (
        <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
          <CheckCircle size={18} style={{ color: '#FFFFFF', marginTop: '3px', flexShrink: 0 }} />
          <span style={{ color: '#9CA3AF', lineHeight: 1.6 }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default function VyhodneBalickyPage() {
  const schemas = [
    ...packages.map(p => getPackageServiceSchema(p, `${URL}#${p.slug}`)),
    getBreadcrumbSchema([
      { name: 'Domů', url: 'https://mnshine.cz' },
      { name: 'Výhodné balíčky', url: URL },
    ]),
  ];

  return (
    <div className="page-pt" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* Hero */}
      <div style={{ backgroundColor: '#111111', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: '#FFFFFF', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Zvýhodněné ceny · Brno</div>
          <h1 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFFFFF', lineHeight: 1, marginBottom: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            Výhodné balíčky<br /><span style={{ color: '#FFFFFF' }}>vosk, keramika, oživení laku</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>{packagesIntro}</p>

          {/* Rychlý přehled – odkazy na balíčky */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {packages.map(p => (
              <a key={p.slug} href={`#${p.slug}`} style={{ display: 'block', backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.2)', padding: '1.25rem', textDecoration: 'none' }}>
                <div style={{ color: '#9CA3AF', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>{p.shortName}</div>
                <div style={{ color: '#FFFFFF', fontSize: '1.6rem', fontWeight: 700, fontFamily: "'Big Shoulders Display', sans-serif" }}>od {formatCzk(p.priceFrom)}</div>
                <div style={{ color: '#9CA3AF', fontSize: '0.85rem', marginTop: '0.35rem' }}>{p.protection ? `Výdrž ochrany ${p.protection}` : p.duration}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem' }}>

        {packages.map((p, idx) => (
          <section key={p.slug} id={p.slug} style={{ marginBottom: '4rem', scrollMarginTop: '110px' }}>
            <div style={{ color: '#9CA3AF', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Balíček {idx + 1}</div>
            <h2 style={{ ...H2, marginBottom: '0.75rem' }}>{p.name}</h2>
            <p style={{ color: '#FFFFFF', fontWeight: 600, margin: '0 0 1rem' }}>
              Cena od {formatCzk(p.priceFrom)}{p.protection && <> <span style={{ color: '#9CA3AF' }}>|</span> Výdrž ochrany {p.protection}</>}
            </p>
            <p style={{ ...TEXT, margin: 0 }}>{p.description}</p>

            <h3 style={H3}>Co služba zahrnuje</h3>
            <CheckList items={p.includes} />

            <p style={{ ...TEXT, marginTop: '1.25rem', marginBottom: 0 }}>
              {p.result && <><strong style={{ color: '#FFFFFF' }}>Výsledek:</strong> {p.result} </>}
              <strong style={{ color: '#FFFFFF' }}>Doba realizace:</strong> {p.duration}.
            </p>
            {p.notes.length > 0 && (
              <p style={{ ...TEXT, marginTop: '0.75rem', marginBottom: 0 }}>
                <strong style={{ color: '#FFFFFF' }}>Důležité:</strong> {p.notes.join(' ')}
              </p>
            )}

            <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '320px' }}>
                <thead>
                  <tr><th style={TH}>Kategorie vozidla</th><th style={TH}>Cena</th></tr>
                </thead>
                <tbody>
                  {vehicleCategories.map(c => (
                    <tr key={c.key} style={{ backgroundColor: '#111111' }}>
                      <td style={{ ...CELL, color: '#FFFFFF' }}>{c.label}</td>
                      <td style={{ ...CELL, color: '#FFFFFF', fontWeight: 700, whiteSpace: 'nowrap' }}>{formatCzk(p.prices[c.key])}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {p.slug === 'oziveni' && (
              <>
                <h3 style={H3}>{oziveniVsRenovace.title}</h3>
                <p style={{ ...TEXT, margin: 0 }}>
                  {oziveniVsRenovace.text}{' '}
                  <Link href="/sluzby/renovace-laku-brno" style={{ color: '#FFFFFF' }}>Více o renovaci laku</Link>.
                </p>
              </>
            )}

            {p.addons && (
              <>
                <h3 style={H3}>Volitelná dlouhodobější ochrana po rozjasnění</h3>
                <CheckList items={p.addons.map(a => `${a.name} (${a.protection}): příplatek +${formatCzk(a.price)}.`)} />
                {p.addonsNote && <p style={{ ...TEXT, fontSize: '0.9rem', marginTop: '0.75rem', marginBottom: 0 }}>{p.addonsNote}</p>}
              </>
            )}

            <div style={{ marginTop: '1.75rem' }}>
              <Link href={orderHref(p.slug)} style={BTN_PRIMARY}>Objednat <ArrowRight size={16} /></Link>
            </div>
          </section>
        ))}

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={H2}>Rozdělení vozidel do cenových kategorií</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '320px' }}>
              <thead>
                <tr><th style={TH}>Kategorie vozidla</th><th style={TH}>Příklady</th></tr>
              </thead>
              <tbody>
                {vehicleCategories.map(c => (
                  <tr key={c.key} style={{ backgroundColor: '#111111' }}>
                    <td style={{ ...CELL, color: '#FFFFFF', fontWeight: 600 }}>{c.label}</td>
                    <td style={{ ...CELL, color: '#9CA3AF' }}>{c.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...TEXT, fontSize: '0.9rem', marginTop: '0.75rem' }}>{vehicleCategoriesNote}</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={H2}>Podmínky nabídky</h2>
          <CheckList items={packageConditions} />
        </section>

        <div style={{ backgroundColor: '#111111', padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
          <h2 style={{ ...H2, fontSize: '1.75rem', marginBottom: '1rem', marginTop: 0 }}>{packagesCta.title}</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>{packagesCta.text}</p>
          <Link href="/kontakt#kontakt" style={BTN_PRIMARY}>{packagesCta.button}</Link>
        </div>
      </div>
    </div>
  );
}
