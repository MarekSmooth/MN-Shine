import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ceník služeb | MN Shine Detailing Brno',
  description: 'Ceník auto detailingu MN Shine Brno. Čištění interiéru, exteriéru, keramická ochrana laku, renovace a leštění. Ceny od 500 Kč.',
};

type Variant = { name: string; price: string; items: string[]; recommended?: boolean; note?: string };
type ServiceGroup = { id: string; name: string; href: string; priceNote: string; miniVariant?: { name: string; price: string; items: string[]; note: string }; variants: Variant[] };

const priceCategories: ServiceGroup[] = [
  {
    id: 'cisteni-interieru',
    name: 'Čištění interiéru',
    href: '/sluzby/cisteni-interieru-brno',
    priceNote: 'Přesná cena závisí na velikosti vozu a míře znečištění interiéru.',
    miniVariant: {
      name: 'Rychlý refresh',
      price: 'od 799 Kč',
      items: ['Setření prachu v interiéru', 'Základní vysátí interiéru', 'Čištění vnitřní strany skel', 'Provonění interiéru'],
      note: 'Do 1 hodiny — určené pouze pro pravidelně udržované vozy',
    },
    variants: [
      {
        name: 'Varianta 1 – Základní',
        price: 'od 1 999 Kč',
        items: ['Detailní vysátí celého vozidla a zavazadlového prostoru', 'Výživa a impregnace plastů s UV blokátory', 'Hloubkové čištění plastových částí interiéru', 'Čištění vnitřní strany skel', 'Provonění interiéru'],
      },
      {
        name: 'Varianta 2 – Kompletní',
        price: 'od 2 999 Kč',
        items: ['Vše z Varianty 1', 'Hloubkové čištění koberečků','Hloubkové čištění sedadel mokrou cestou (tepování)', 'Hloubkové čištění kožených sedadel včetně následné výživy a impregnace'],
        recommended: true,
      },
      {
        name: 'Varianta 3 – Detailní',
        price: 'od 4 999 Kč',
        items: ['Vše z Varianty 1 a 2', 'Čištění mezidveřních prostorů včetně vnitřních rámů dveří', 'Hloubkové čištění všech koberců mokrou cestou', 'Čištění kolejnic sedadel', 'Dezinfekce interiéru ozonem', 'Impregnace gumových těsnění dveří'],
        note: 'SUV, MPV, VAN příplatek 20 %',
      },
    ],
  },
  {
    id: 'cisteni-exterieru',
    name: 'Čištění exteriéru',
    href: '/sluzby/cisteni-exterieru-brno',
    priceNote: 'Přesná cena závisí na velikosti vozu a stupni znečištění a zanesení laku.',
    variants: [
      {
        name: 'Důkladné mytí s ochranou laku',
        price: 'od 3 999 Kč',
        items: ['Předmytí aktivní pěnou', 'Čištění disků', 'Šetrné ruční mytí karoserie', 'Chemická dekontaminace laku', 'Šetrné sušení', 'Zbavení laku zbytků mastnoty', 'Nanesení ochrany laku (vosk nebo keramika)'],
        note: 'Časová náročnost 1–2 dny',
      },
    ],
  },
  {
    id: 'renovace-laku',
    name: 'Renovace laku',
    href: '/sluzby/renovace-laku-brno',
    priceNote: 'Přesná cena závisí na velikosti vozu a rozsahu defektů a poškození laku.',
    variants: [
      {
        name: 'Jednokroková renovace',
        price: 'od 7 999 Kč',
        items: ['Ruční mytí a příprava na dekontaminaci laku', 'Chemická i mechanická dekontaminace', 'Jednokrokové strojní leštění', 'Odstranění lehčích defektů a mikroškrábanců', 'Sjednocení lesku po celé karoserii'],
        note: 'Časová náročnost 2–3 dny',
      },
      {
        name: 'Vícekroková renovace',
        price: 'od 11 999 Kč',
        items: ['Ruční mytí a dekontaminace laku', 'Chemická i mechanická dekontaminace', 'Vícekrokové strojní leštění', 'Maximální korekce škrábanců a defektů', 'Dosažení maximálního lesku a hloubky laku'],
        recommended: true,
        note: 'Časová náročnost 3–5 dní',
      },
    ],
  },
  {
    id: 'ochrana-laku',
    name: 'Ochrana laku',
    href: '/sluzby/ochrana-laku-brno',
    priceNote: 'Přesná cena závisí na velikosti vozu a zvolené metodě ochrany laku.',
    variants: [
      {
        name: 'Voskování',
        price: 'od 2 500 Kč',
        items: ['Aplikace prémiového tuhého vosku', 'Ochrana po dobu až 12 měsíců', 'Přirozený lesk a hloubka laku', 'Hydrofobní efekt', 'Cenově dostupná sezónní péče'],
      },
      {
        name: 'Keramický povlak',
        price: 'od 4 999 Kč',
        items: ['Trvalá chemická vazba s povrchem laku', 'Ochrana dle zvolené varianty 1 až 5 let', 'Výrazný hydrofobní efekt', 'UV ochrana a odolnost vůči chemii', 'Výrazně snazší každodenní údržba'],
        recommended: true,
      },
    ],
  },
  {
    id: 'renovace-svetel',
    name: 'Renovace světlometů',
    href: '/sluzby/renovace-svetel-brno',
    priceNote: 'Přesná cena závisí na míře zakalenosti a aktuálním stavu světlometů.',
    variants: [
      {
        name: 'Renovace světlometů',
        price: '1 000 Kč / kus',
        items: ['Odstranění zakalenosti a žloutnutí krytu', 'Strojní leštění plastového krytu', 'Aplikace ochranného povlaku', 'Výrazné zlepšení prostupnosti světla', 'Prodloužení životnosti světlometů'],
      },
    ],
  },
  {
    id: 'oprava-kuze',
    name: 'Oprava kůže',
    href: '/sluzby/renovace-kuze-brno',
    priceNote: 'Přesná cena závisí na rozsahu poškození a celkové ploše kožených povrchů.',
    variants: [
      {
        name: 'Oprava a renovace kůže',
        price: 'od 2 500 Kč',
        items: ['Hloubkové čištění kůže', 'Odstraňování skvrn a zašlých nečistot', 'Ošetření regeneračním kondicionérem', 'Obnova barvy dle potřeby', 'Ochranný nátěr kůže'],
        note: 'Cena dle míry a druhu poškození',
      },
    ],
  },
];

const additionalServices = [
  { name: 'Drobné leštění', price: '1 100 Kč' },
  { name: 'Dezinfekce ozonem', price: '500 Kč' },
  { name: 'Tekuté stěrače', price: 'od 500 Kč' },
  { name: 'Oprava škrábanců', price: '500 – 4 999 Kč', note: 'Dle velikosti a hloubky škrábance' },
];

export default function CenikPage() {
  return (
    <div className="page-pt" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ color: '#FFFFFF', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Transparentní ceny
          </div>
          <h1 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFFFFF', marginBottom: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            Ceník služeb
          </h1>
          <p style={{ color: '#9CA3AF', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
            Ceny jsou orientační a liší se podle velikosti, stavu a typu vozidla. Přesnou kalkulaci připravíme po osobní prohlídce.
          </p>
        </div>

        {/* Service categories with variants */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', marginBottom: '4rem' }}>
          {priceCategories.map((cat) => (
            <div key={cat.id}>
              {/* Category heading */}
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '1.6rem', color: '#FFFFFF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>
                  {cat.name}
                </h2>
                <Link href={cat.href} style={{ color: '#9CA3AF', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '1px' }}>
                  Detail služby ›
                </Link>
              </div>

              {/* Mini variant strip */}
              {cat.miniVariant && (
                <div style={{ marginBottom: '1rem', padding: '0.5rem 1.25rem', border: '1px dashed rgba(255,255,255,0.15)', backgroundColor: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem 1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', flexShrink: 0 }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{cat.miniVariant.name}</span>
                    <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem', fontFamily: "'Big Shoulders Display', sans-serif", whiteSpace: 'nowrap' }}>{cat.miniVariant.price}</span>
                  </div>
                  {cat.miniVariant.items.map(item => (
                    <span key={item} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>✓ {item}</span>
                  ))}
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', fontStyle: 'italic', whiteSpace: 'nowrap', flexShrink: 0 }}>{cat.miniVariant.note}</span>
                </div>
              )}

              {/* Variants grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                {cat.variants.map((v) => (
                  <div
                    key={v.name}
                    style={{
                      backgroundColor: v.recommended ? '#FFFFFF' : '#111111',
                      border: v.recommended ? 'none' : '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '0',
                      padding: '1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      position: 'relative',
                    }}
                  >
                    {v.recommended && (
                      <div style={{ position: 'absolute', top: '-1px', right: '1.25rem', backgroundColor: '#0a0a0a', color: '#FFFFFF', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '0.25rem 0.7rem', borderRadius: '0' }}>
                        Doporučeno
                      </div>
                    )}
                    <div>
                      <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: v.recommended ? '#555555' : '#9CA3AF', marginBottom: '0.4rem' }}>
                        {v.name}
                      </div>
                      <div style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '1.75rem', fontWeight: 800, color: v.recommended ? '#0a0a0a' : '#FFFFFF', letterSpacing: '0.01em' }}>
                        {v.price}
                      </div>
                      {v.note && (
                        <div style={{ fontSize: '0.75rem', color: v.recommended ? '#777777' : 'rgba(255,255,255,0.4)', marginTop: '0.35rem' }}>
                          {v.note}
                        </div>
                      )}
                    </div>
                    <div style={{ width: '100%', height: '1px', backgroundColor: v.recommended ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.08)' }} />
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {v.items.map(item => (
                        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: v.recommended ? '#333333' : '#CCCCCC', fontSize: '0.85rem', lineHeight: 1.5 }}>
                          <span style={{ color: v.recommended ? '#0a0a0a' : '#FFFFFF', fontWeight: 700, fontSize: '0.7rem', lineHeight: '1.8', flexShrink: 0 }}>?</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
                      <Link
                        href="/kontakt"
                        style={{
                          display: 'block',
                          textAlign: 'center',
                          padding: '0.75rem',
                          borderRadius: '0',
                          textDecoration: 'none',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          backgroundColor: v.recommended ? '#0a0a0a' : 'transparent',
                          color: v.recommended ? '#FFFFFF' : '#9CA3AF',
                          border: v.recommended ? 'none' : '1px solid rgba(255,255,255,0.2)',
                        }}
                      >
                        Mám zájem
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              {/* Price note */}
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', letterSpacing: '0.05em', marginTop: '0.6rem', marginBottom: 0 }}>
                * {cat.priceNote}
              </p>
            </div>
          ))}
        </div>

        {/* Additional services */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '1.6rem', color: '#FFFFFF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            Doplňkové služby
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {additionalServices.map((s, idx) => (
              <div key={s.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0', borderBottom: idx < additionalServices.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div>
                  <span style={{ color: '#CCCCCC', fontSize: '0.95rem' }}>{s.name}</span>
                  {'note' in s && s.note && (
                    <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', marginTop: '0.2rem' }}>{s.note}</div>
                  )}
                </div>
                <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem', whiteSpace: 'nowrap' }}>{s.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Note + CTA */}
        <div style={{
          backgroundColor: '#111111',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '0',
          padding: '2.5rem',
          textAlign: 'center',
        }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Nejste si jisti, co váš vůz potřebuje?
          </h2>
          <p style={{ color: '#9CA3AF', marginBottom: '1.75rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 1.75rem' }}>
            Napište nám nebo zavolejte. Provedeme bezplatnou diagnostiku stavu vozidla a navrhneme optimální řešení za férovou cenu.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontakt" style={{ backgroundColor: '#FFFFFF', color: '#0a0a0a', fontWeight: 700, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Nezávazná poptávka
            </Link>
            <a href="tel:+420702852852" style={{ border: '1px solid rgba(255,255,255,0.35)', color: '#FFFFFF', fontWeight: 600, padding: '0.875rem 2rem', borderRadius: '0', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              +420 702 852 852
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
