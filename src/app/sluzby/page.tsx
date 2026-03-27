import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Naše služby',
  description: 'Přehled všech služeb MN Shine Detailing – čištění interiéru, čištění exteriéru, renovace laku, renovace kůže a doplňkové služby.',
  alternates: {
    canonical: 'https://mnshine.cz/sluzby',
  },
  openGraph: {
    type: 'website',
    url: 'https://mnshine.cz/sluzby',
    title: 'Naše služby | MN Shine Detailing',
    description: 'Přehled všech služeb MN Shine Detailing – čištění interiéru, exteriéru, renovace laku, renovace kůže a doplňkové služby.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Služby MN Shine Detailing' }],
  },
};

const serviceCategories = [
  {
    id: 'cisteni-interieru',
    name: 'Čištění interiéru',
    description: 'Komplexní čištění interiéru zahrnuje odstranění nečistot, skvrn, pachů a bakterií z každého koutu vašeho vozidla. Používáme profesionální parní čistič a prémiové přípravky bezpečné pro všechny materiály.',
    features: ['Čištění sedadel (látka i kůže)', 'Hloubkové čištění koberců', 'Čištění plastů a palubní desky', 'Čištění stropu', 'Odstranění pachů', 'Dezinfekce'],
    price: 'od 2 500 Kč',
    href: '/sluzby/cisteni-interieru-brno',
  },
  {
    id: 'cisteni-exterieru',
    name: 'Čištění exteriéru',
    description: 'Profesionální ruční mytí a dekontaminace exteriéru vozidla s použitím šetrných přípravků. Dokonalá čistota bez rizika poškození laku.',
    features: ['Ruční mytí karoserie', 'Čištění ráfků a pneumatik', 'Mytí skel a zrcátek', 'Ošetření vnějších plastů', 'Čištění podběhů', 'Sušení mikrofibrovou utěrkou'],
    price: 'od 1 500 Kč',
    href: null,
  },
  {
    id: 'renovace-laku',
    name: 'Renovace laku',
    description: 'Strojní leštění a korekce laku odstraní škrábance, víry a oxidaci. Vrátí vašemu vozidlu dokonalý lesk jako z výroby.',
    features: ['Korekce laku (1-step / 2-step)', 'Strojní leštění', 'Odstranění škrábanců a vírů', 'Finální polish', 'Ochranný vosk nebo sealant'],
    price: 'od 4 500 Kč',
    href: '/sluzby/renovace-laku-brno',
  },
  {
    id: 'renovace-kuze',
    name: 'Renovace kůže',
    description: 'Obnovíme kožené čalounění vašeho vozidla – od hloubkového čištění přes výživu a regeneraci až po obnovu barvy a ochranný nátěr.',
    features: ['Hloubkové čištění kůže', 'Odstraňování skvrn a nečistot', 'Regenerace a výživa kůže', 'Obnova barvy', 'Ochranný nátěr kůže'],
    price: 'od 3 000 Kč',
    href: null,
  },
  {
    id: 'doplnkove-sluzby',
    name: 'Doplňkové služby',
    description: 'Kompletní péče o vozidlo zahrnuje i řadu specializovaných doplňkových služeb – od keramické ochrany laku přes renovaci světlometů až po ošetření skel.',
    features: ['Keramická ochrana laku', 'Ochranná fólie PPF', 'Renovace světlometů', 'Ošetření a hydrofobizace skel', 'Odorizace interiéru'],
    price: null,
    href: '/sluzby/ochrana-laku-brno',
  },
];

export default function ServicesPage() {
  return (
    <div className="page-pt" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeader
          title="Naše služby"
          subtitle="Profesionální péče o vaše vozidlo. Vyberte si ze spektra prémiových detailing služeb."
        />

        {/* Quick category nav */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '4rem', justifyContent: 'center' }}>
          {serviceCategories.map(cat => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '100px',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#FFFFFF',
                backgroundColor: 'transparent',
                fontSize: '0.85rem',
                textDecoration: 'none',
                fontWeight: 500,
                letterSpacing: '0.05em',
              }}
            >
              {cat.name}
            </a>
          ))}
        </div>

        {/* Category sections */}
        {serviceCategories.map((cat, idx) => (
          <section
            key={cat.id}
            id={cat.id}
            style={{
              marginBottom: '5rem',
              scrollMarginTop: '140px',
              borderLeft: '3px solid #FFFFFF',
              paddingLeft: '2rem',
              paddingBottom: '3rem',
              borderBottom: idx < serviceCategories.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <h2 style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', color: '#FFFFFF', margin: 0 }}>
                {cat.name}
              </h2>
            </div>
            <p style={{ color: '#9CA3AF', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '680px' }}>
              {cat.description}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.6rem 2rem', marginBottom: '1.5rem' }}>
              {cat.features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#D1D5DB' }}>
                  <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1rem', lineHeight: 1 }}>✓</span>
                  <span style={{ fontSize: '0.9rem' }}>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              {cat.price && (
                <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>
                  {cat.price}
                </p>
              )}
              <Link href={cat.href || '/kontakt'} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#FFFFFF', textDecoration: 'none', fontWeight: 500 }}>
                Zjistit více <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        ))}

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/kontakt" style={{
            backgroundColor: '#FFFFFF', color: '#0a0a0a', fontWeight: 700,
            padding: '0.875rem 2rem', borderRadius: '4px', textDecoration: 'none',
          }}>
            Nezávazná poptávka
          </Link>
        </div>
      </div>
    </div>
  );
}
