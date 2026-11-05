import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { BadgeTagContent } from '@/components/packages/BadgeArt';
import { PackagesPanel } from '@/components/packages/PackagesPanel';
import { LiveBadgeDemo } from '@/components/packages/LiveBadgeDemo';
import type { BadgeVariant } from '@/data/packages';
import '@/components/packages/packages-badge.css';

// Interní náhled grafických variant cedulky pro majitele – neindexovat, není v sitemapě.
export const metadata: Metadata = {
  title: 'Náhled cedulky Výhodné balíčky',
  robots: { index: false, follow: false },
};

const VARIANTS: { v: BadgeVariant; name: string }[] = [
  { v: 'a', name: 'A' },
  { v: 'b', name: 'B' },
  { v: 'c', name: 'C' },
];

const LABEL = { color: '#9CA3AF', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 0.75rem' } as const;

/** Výřez stránky – cedulka přilepená k pravému okraji (desktop). */
function DesktopEdge({ children }: { children: ReactNode }) {
  return (
    <div style={{ position: 'relative', height: '180px', background: 'repeating-linear-gradient(135deg, #151515 0 12px, #121212 12px 24px)', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>{children}</div>
    </div>
  );
}

/** Rámeček telefonu 360 × 640. */
function Phone({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div>
      <p style={LABEL}>{label}</p>
      <div style={{ position: 'relative', width: '360px', maxWidth: '100%', height: '640px', border: '8px solid #2a2a2a', borderRadius: '28px', overflow: 'hidden', background: 'repeating-linear-gradient(135deg, #151515 0 12px, #121212 12px 24px)' }}>
        {children}
      </div>
    </div>
  );
}

export default function BalickyNahledPage() {
  return (
    <div className="page-pt" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <h1 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', fontWeight: 800, textTransform: 'uppercase', margin: '0 0 1rem' }}>
          Náhled cedulky „Výhodné balíčky“
        </h1>
        <p style={{ color: '#9CA3AF', lineHeight: 1.7, maxWidth: '760px' }}>
          Interní stránka pro výběr grafické varianty. Není v sitemapě a vyhledávače ji neindexují.
          Varianta se na webu nastavuje v <code>src/data/packages.ts</code> (<code>badgeConfig.variant</code>).
        </p>

        <section style={{ margin: '2.5rem 0 3.5rem', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.2)', background: '#111111' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: '1.2rem', margin: '0 0 0.5rem' }}>Živá ukázka</h2>
          <p style={{ color: '#9CA3AF', margin: '0 0 1rem', lineHeight: 1.6 }}>
            Cedulka se objeví asi 1,8 s po načtení (na desktopu vpravo, na mobilu vlevo dole). Vyzkoušejte otevření kliknutím,
            zavření tlačítkem ×, klávesou Esc i kliknutím mimo panel. Zobrazení na mobilu otestujete zúžením okna pod 768 px.
          </p>
          <LiveBadgeDemo />
        </section>

        {VARIANTS.map(({ v, name }) => (
          <section key={v} style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', fontWeight: 700, textTransform: 'uppercase', margin: '0 0 1.5rem' }}>Varianta {name}</h2>

            <p style={LABEL}>Zavřený stav – desktop (pravý okraj)</p>
            <DesktopEdge>
              <span className={`pkb-tag pkb-tag--${v}`}><BadgeTagContent variant={v} /></span>
            </DesktopEdge>

            <p style={{ ...LABEL, marginTop: '2rem' }}>Otevřený stav – desktop</p>
            <PackagesPanel variant={v} layout="row" isStatic />

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <Phone label="Zavřený stav – mobil (v hlavičce)">
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100px', background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/mnlogo.png" alt="" style={{ height: '72px', width: 'auto' }} />
                  <span aria-hidden="true" style={{ position: 'absolute', right: '1.5rem', width: '44px', height: '44px', border: '1px solid rgba(255,255,255,0.28)', transform: 'skewX(-8deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '1.1rem' }}>☰</span>
                  <span style={{ position: 'absolute', left: '1.5rem', top: '28px' }}>
                    <span className={`pkb-tag pkb-tag--${v} is-header`}><BadgeTagContent variant={v} /></span>
                  </span>
                </div>
              </Phone>
              <Phone label="Otevřený stav – mobil (bottom sheet)">
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, maxHeight: '85%', overflowY: 'auto' }}>
                  <PackagesPanel variant={v} layout="column" isStatic />
                </div>
              </Phone>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
