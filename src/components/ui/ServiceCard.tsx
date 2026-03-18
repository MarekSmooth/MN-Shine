'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <article style={{
      backgroundColor: 'transparent',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '2.5rem 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      transition: 'border-color 0.3s',
      position: 'relative',
      cursor: 'default',
    }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = '#C8A97E';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(255,255,255,0.1)';
      }}
    >
      <div style={{ color: '#C8A97E', width: '40px', height: '40px', marginBottom: '0.5rem' }}>{icon}</div>
      <h3 style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '1.4rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>{title}</h3>
      <p style={{ color: '#A09890', lineHeight: 1.7, margin: 0, flex: 1, fontSize: '0.95rem' }}>{description}</p>
      <Link href={href} style={{ color: '#C8A97E', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.5rem' }}>
        Zjistit více <ArrowRight size={16} />
      </Link>
    </article>
  );
}
