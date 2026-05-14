import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import SectionTransition from '@/components/ui/SectionTransition';

export const metadata: Metadata = {
  title: 'Naše služby',
  description: 'Přehled všech služeb MN Shine Detailing – čištění interiéru, čištění exteriéru, renovace laku, ochrana laku, renovace světel, kůže a opravy škrábanců.',
  alternates: { canonical: 'https://mnshine.cz/sluzby' },
  openGraph: {
    type: 'website',
    url: 'https://mnshine.cz/sluzby',
    title: 'Naše služby | MN Shine Detailing',
    description: 'Přehled všech služeb MN Shine Detailing.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Služby MN Shine Detailing' }],
  },
};

type Variant = { name: string; price: string; items: string[]; recommended?: boolean };

type ServiceCategory = {
  id: string;
  name: string;
  tagline: string;
  priceNote: string;
  href: string;
  image: string;
  forWho: string;
  miniVariant?: { name: string; price: string; items: string[]; note: string };
  variants: Variant[];
};

const serviceCategories: ServiceCategory[] = [
  {
    id: 'cisteni-interieru',
    name: 'Čištění interiéru',
    tagline: 'Svěží a dezinfikovaný interiér',
    priceNote: 'Přesná cena závisí na velikosti vozu a míře znečištění interiéru',
    href: '/sluzby/cisteni-interieru-brno',
    image: '/icons/interier.webp',
    forWho: 'Chcete osvěžit interiér vozu, zbavit se pachů, skvrn nebo bakterií? Ideální volba před prodejem nebo po zimní sezóně.',
    miniVariant: {
      name: 'Rychlý refresh',
      price: '800 Kč',
      items: ['Setření prachu z plastů a povrchů', 'Kompletní vysátí interiéru', 'Umýtí oken zevnitř'],
      note: 'Do 1 hodiny — ideální pro pravidelně udržované vozy',
    },
    variants: [
      { name: 'Varianta 1 – Základní', price: 'od 1 999 Kč', items: ['Kompletní vysátí celého interiéru', 'Hloubkové čištění plastů a palubní desky', 'Výživa a impregnace plastů s UV blokátory', 'Čištění vnitřní strany skel'] },
      { name: 'Varianta 2 – Kompletní', price: 'od 2 999 Kč', items: ['Vše z Varianty 1', 'Tepování sedadel (látka i kůže)', 'Výživa a impregnace kožených sedadel', 'Hloubkové čištění koberečků', 'Impregnace gumových těsnění dveří'], recommended: true },
      { name: 'Varianta 3 – Hloubkové', price: 'od 4 999 Kč', items: ['Vše z Varianty 2', 'Čištění mezidveřních prostorů a rámů', 'Hloubkové čištění všech koberců mokrou cestou', 'Čištění kolejnic sedadel', 'Čištění vnější strany skel', 'Dezinfekce ozonem'] },
    ],
  },
  {
    id: 'cisteni-exterieru',
    name: 'Čištění exteriéru',
    tagline: 'Ruční mytí a dekontaminace laku',
    priceNote: 'Přesná cena závisí na velikosti vozu a stupni znečištění exteriéru',
    href: '/sluzby/cisteni-exterieru-brno',
    image: '/icons/exterier.webp',
    forWho: 'Základ péče o každý vůz. Doporučujeme po zimní sezóně nebo před aplikací ochrany laku.',
    variants: [
      { name: 'Důkladné mytí s ochranou laku', price: 'od 3 999 Kč', items: ['Předmytí aktivní pěnou', 'Šetrné ruční mytí karoserie', 'Chemická dekontaminace laku', 'Čištění disků a kol', 'Sušení mikrofibrovou utěrkou', 'Zbavení laku zbytků mastnoty', 'Nanesení ochranného vosku nebo keramické ochrany'] },
    ],
  },
  {
    id: 'renovace-laku',
    name: 'Renovace laku',
    tagline: 'Strojní leštění a korekce defektů',
    priceNote: 'Přesná cena závisí na velikosti vozu a rozsahu defektů a poškození laku',
    href: '/sluzby/renovace-laku-brno',
    image: '/icons/renovacelak.webp',
    forWho: 'Trápí vás swirlmarks nebo zakalený lak? Strojní leštění vrátí laku původní hloubku a lesk.',
    variants: [
      { name: 'Jednokroková renovace', price: 'od 6 999 Kč', items: ['Ruční mytí a dekontaminace laku', 'Chemická i mechanická dekontaminace', 'Jednokrokové strojní leštění', 'Odstranění lehčích defektů a swirlmarks', 'Sjednocení lesku po celé karoserii'] },
      { name: 'Vícekroková renovace', price: 'od 11 999 Kč', items: ['Ruční mytí a dekontaminace laku', 'Chemická i mechanická dekontaminace', 'Vícekolové strojní leštění', 'Maximální korekce škrábanců a defektů', 'Dosažení maximálního lesku a hloubky laku'], recommended: true },
    ],
  },
  {
    id: 'ochrana-laku',
    name: 'Ochrana laku',
    tagline: 'Vosk, keramika nebo PPF fólie',
    priceNote: 'Přesná cena závisí na velikosti vozu a zvolené metodě ochrany laku',
    href: '/sluzby/ochrana-laku-brno',
    image: '/icons/ochrana.webp',
    forWho: 'Chcete zachovat lak v perfektním stavu a snížit nároky na každodenní údržbu?',
    variants: [
      { name: 'Voskování', price: 'od 2 500 Kč', items: ['Aplikace prémiového tuhého vosku', 'Ochrana po dobu až 12 měsíců', 'Přirozený lesk a hloubka laku', 'Hydrofobní efekt – voda se slévá', 'Cenově dostupná sezónní péče'] },
      { name: 'Keramický povlak', price: 'od 4 999 Kč', items: ['Trvalá chemická vazba s povrchem laku', 'Ochrana na 2–5 let', 'Výrazný hydrofobní efekt', 'UV ochrana a odolnost vůči chemii', 'Výrazně snazší každodenní údržba'], recommended: true },
    ],
  },
  {
    id: 'renovace-svetel',
    name: 'Renovace světel',
    tagline: 'Průhlednost a bezpečnost jízdy',
    priceNote: 'Přesná cena závisí na míře zakalenosti a aktuálním stavu světlometů',
    href: '/sluzby/renovace-svetel-brno',
    image: '/icons/svetla.webp',
    forWho: 'Zakalené světlomety kazí vzhled i bezpečnost. Renovací ušetříte oproti výměně.',
    variants: [
      { name: 'Renovace světlometů', price: '1 000 Kč / kus', items: ['Odstranění zakalenosti a žloutnutí krytu', 'Strojní leštění plastového krytu', 'Aplikace ochranného povlaku', 'Výrazné zlepšení prostupnosti světla', 'Prodloužení životnosti světlometů'] },
    ],
  },
  {
    id: 'renovace-kuze',
    name: 'Renovace kůže',
    tagline: 'Obnova luxusního interiéru',
    priceNote: 'Přesná cena závisí na rozsahu poškození a celkové ploše kožených povrchů',
    href: '/sluzby/renovace-kuze-brno',
    image: '/icons/kuze.webp',
    forWho: 'Kůže popraskala nebo vybledla? Renovace ji vrátí do původního stavu za zlomek ceny výměny.',
    variants: [
      { name: 'Renovace kožených sedadel', price: 'od 2 500 Kč', items: ['Hloubkové čištění kůže', 'Odstraňování skvrn a zašlých nečistot', 'Ošetření regeneračním kondicionérem', 'Obnova barvy dle potřeby', 'Ochranný nátěr kůže'] },
    ],
  },
  {
    id: 'oprava-skrabancu',
    name: 'Oprava škrábanců',
    tagline: 'Bez nutnosti lakovny',
    priceNote: 'Přesná cena závisí na počtu, hloubce a rozsahu poškozených míst',
    href: '/sluzby/oprava-skrabancu-brno',
    image: '/icons/skrabance.webp',
    forWho: 'Škrábanec od klíče nebo parkovacího manévru? Minimálně invazivní metody zvládnou většinu povrchových poškození.',
    variants: [
      { name: 'Oprava škrábanců', price: '500 – 4 999 Kč', items: ['Diagnostika hloubky poškození', 'Leštění povrchových rýh a škrábanců', 'Lokální touch-up opravy', 'Příprava a sjednocení povrchu', 'Barevné sjednocení ošetřeného místa'] },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="page-pt" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>

      {/* Page header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 0' }}>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          MN Shine Detailing
        </p>
        <h1 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: '#FFFFFF', fontWeight: 800, margin: '0 0 1.25rem', lineHeight: 1, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
          Naše služby
        </h1>
        <p style={{ color: '#9CA3AF', fontSize: '1rem', lineHeight: 1.75, maxWidth: '560px', margin: '0 0 3rem' }}>
          Každý vůz je jiný. Najděte péči, která mu skutečně sedí – nebo nás kontaktujte a poradíme.
        </p>

        {/* Quick nav */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingBottom: '3rem' }}>
          {serviceCategories.map(cat => (
            <a key={cat.id} href={`#${cat.id}`} style={{ padding: '0.4rem 1rem', borderRadius: '0', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.55)', backgroundColor: 'transparent', fontSize: '0.78rem', textDecoration: 'none', fontWeight: 500, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
              {cat.name}
            </a>
          ))}
        </div>
      </div>

      {/* Service blocks */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 6rem' }}>
        {serviceCategories.map((cat, idx) => (
          <React.Fragment key={cat.id}>
          <section
            id={cat.id}
            style={{ scrollMarginTop: '120px', paddingTop: '5rem', paddingBottom: '5rem' }}
          >
            {/* Two-column layout: image left, content right (alternating) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>

              {/* Image panel */}
              <div
                style={{
                  order: idx % 2 === 0 ? 0 : 1,
                  position: 'relative',
                  borderRadius: '0',
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  backgroundColor: '#111111',
                }}
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  style={{ objectFit: 'cover', opacity: 0.75 }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 100%)' }} />
                {/* Price note — full-width bottom strip */}
                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', backgroundColor: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(6px)', borderTop: '1px solid rgba(255,255,255,0.10)', padding: '0.45rem 1rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.6rem', letterSpacing: '0.07em', textTransform: 'uppercase', fontWeight: 500 }}>{cat.priceNote}</span>
                </div>
              </div>

              {/* Content panel */}
              <div style={{ order: idx % 2 === 0 ? 1 : 0 }}>
                <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#FFFFFF', fontWeight: 800, margin: '0 0 0.75rem', lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  {cat.name}
                </h2>
                <p style={{ color: '#9CA3AF', lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.9rem' }}>
                  {cat.forWho}
                </p>

                {/* Mini variant strip */}
                {cat.miniVariant && (
                  <div style={{ marginBottom: '0.75rem', padding: '0.5rem 1rem', border: '1px dashed rgba(255,255,255,0.15)', backgroundColor: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem 1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', flexShrink: 0 }}>
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{cat.miniVariant.name}</span>
                      <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.85rem', fontFamily: "'Big Shoulders Display', sans-serif", whiteSpace: 'nowrap' }}>{cat.miniVariant.price}</span>
                    </div>
                    {cat.miniVariant.items.map(item => (
                      <span key={item} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', whiteSpace: 'nowrap' }}>✓ {item}</span>
                    ))}
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.68rem', fontStyle: 'italic', whiteSpace: 'nowrap', flexShrink: 0 }}>{cat.miniVariant.note}</span>
                  </div>
                )}

                {/* Variant cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {cat.variants.map(variant => (
                    <div key={variant.name} style={{ position: 'relative', backgroundColor: variant.recommended ? '#161616' : '#0f0f0f', border: variant.recommended ? '1px solid rgba(255,255,255,0.18)' : '1px solid rgba(255,255,255,0.06)', borderRadius: '0', padding: '1.1rem 1.25rem' }}>
                      {variant.recommended && (
                        <span style={{ position: 'absolute', top: '-1px', right: '1rem', backgroundColor: '#FFFFFF', color: '#0a0a0a', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.15rem 0.6rem', borderRadius: '0 0 5px 5px' }}>
                          Doporučeno
                        </span>
                      )}
                      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', margin: '0 0 0.65rem', flexWrap: 'wrap' }}>
                        <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.04em', margin: 0, textTransform: 'uppercase' }}>{variant.name}</p>
                        <span style={{ color: variant.recommended ? '#FFFFFF' : '#9CA3AF', fontWeight: 700, fontSize: '0.88rem', whiteSpace: 'nowrap', fontFamily: "'Big Shoulders Display', sans-serif", letterSpacing: '0.02em' }}>{variant.price}</span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.3rem 1.5rem' }}>
                        {variant.items.map(item => (
                          <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#9CA3AF', fontSize: '0.82rem', lineHeight: 1.5 }}>
                            <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.7rem', lineHeight: '1.7', flexShrink: 0 }}>✓</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Link href={cat.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FFFFFF', color: '#0a0a0a', fontWeight: 700, padding: '0.75rem 1.75rem', borderRadius: '0', textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Detail služby <ArrowRight size={13} />
                  </Link>
                  <Link href="/kontakt" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'transparent', color: '#FFFFFF', fontWeight: 600, padding: '0.75rem 1.75rem', borderRadius: '0', textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.25)' }}>
                    Mám zájem
                  </Link>
                </div>
              </div>

            </div>
          </section>
          {idx < serviceCategories.length - 1 && <SectionTransition variant="subtle" />}
          </React.Fragment>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Nejste si jistí?</p>
        <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#FFFFFF', fontWeight: 800, margin: '0 0 1rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
          Poradíme vám zdarma
        </h2>
        <p style={{ color: '#9CA3AF', maxWidth: '440px', margin: '0 auto 2.5rem', lineHeight: 1.75, fontSize: '0.9rem' }}>
          Pošlete nám zprávu nebo zavolejte – připravíme nabídku na míru bez závazků.
        </p>
        <Link href="/kontakt" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FFFFFF', color: '#0a0a0a', fontWeight: 700, padding: '0.9rem 2.5rem', borderRadius: '0', textDecoration: 'none', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Nezávazná poptávka <ArrowRight size={14} />
        </Link>
      </div>

    </div>
  );
}
