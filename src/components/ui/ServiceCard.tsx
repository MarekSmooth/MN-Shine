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
      backgroundColor: '#1a1a1a',
      border: '1px solid rgba(200,169,126,0.15)',
      borderRadius: '8px',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      transition: 'border-color 0.2s, transform 0.2s',
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,169,126,0.5)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,169,126,0.15)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
    >
      <div style={{ color: '#C8A97E', width: '48px', height: '48px' }}>{icon}</div>
      <h3 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>{title}</h3>
      <p style={{ color: '#9CA3AF', lineHeight: 1.6, margin: 0, flex: 1 }}>{description}</p>
      <Link href={href} style={{ color: '#C8A97E', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>
        Zjistit více <ArrowRight size={16} />
      </Link>
    </article>
  );
}
