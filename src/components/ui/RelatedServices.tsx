import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RelatedService {
  href: string;
  title: string;
  text: string;
}

export function RelatedServices({ items, title = 'Související služby' }: { items: RelatedService[]; title?: string }) {
  return (
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{title}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
        {items.map(item => (
          <Link key={item.href} href={item.href} style={{ display: 'block', backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.2)', padding: '1.5rem', textDecoration: 'none' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{item.title}</h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 1rem' }}>{item.text}</p>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#FFFFFF', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Více o službě <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
