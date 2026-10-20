import type { ReactNode } from 'react';

export interface PriceVariant {
  label: string;
  price: string;
  desc: string;
}

// Cenové varianty služby – karta: popisek + cena vlevo (pevná šířka, aby popisy začínaly zarovnaně), popis vpravo.
export function PriceVariants({ variants, note }: { variants: PriceVariant[]; note?: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
      {variants.map(v => (
        <div key={v.label} style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '0', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ width: '240px', flexShrink: 0 }}>
            <p style={{ color: '#9CA3AF', fontSize: '0.85rem', margin: '0 0 0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{v.label}</p>
            <p style={{ color: '#FFFFFF', fontSize: '1.75rem', fontWeight: 700, fontFamily: "'Big Shoulders Display', sans-serif", margin: 0 }}>{v.price}</p>
          </div>
          <p style={{ color: '#9CA3AF', margin: 0, flex: 1, minWidth: '160px' }}>{v.desc}</p>
        </div>
      ))}
      {note && (
        <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{note}</p>
      )}
    </div>
  );
}
