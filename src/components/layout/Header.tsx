'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const allLinks = [
  { href: '/', label: 'Domů' },
  { href: '/sluzby', label: 'Služby' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/o-nas', label: 'O nás' },
  { href: '/faq', label: 'FAQ' },
  { href: '/kontakt', label: 'Kontakt' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: '0 1px 0 rgba(0,0,0,0.08)',
      }}
    >
      {/* Row 1: Logo centered + CTA right */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '72px' }}>
        {/* Logo centered */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Image
            src="/mnlogo.png"
            alt="MN Shine Detailing logo"
            width={350}
            height={109}
            style={{ height: '56px', width: 'auto', display: 'block' }}
            priority
          />
        </Link>

        {/* CTA top right */}
        <div style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '0.75rem', alignItems: 'center' }} className="hidden md:flex">
          <Link
            href="/kontakt"
            style={{ padding: '0.5rem 1.4rem', backgroundColor: '#111111', color: '#FFFFFF', textDecoration: 'none', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#C8A97E')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#111111')}
          >
            Objednat termín
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          style={{ position: 'absolute', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#111111', padding: '0.5rem' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Otevřít menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Thin divider */}
      <div style={{ height: '1px', backgroundColor: 'rgba(0,0,0,0.1)' }} />

      {/* Row 2: Nav links centered */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }} className="hidden md:block">
        <nav aria-label="Hlavní navigace" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', height: '44px', alignItems: 'center' }}>
          {allLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ color: '#555555', textDecoration: 'none', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C8A97E')}
              onMouseLeave={e => (e.currentTarget.style.color = '#555555')}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.08)', padding: '1rem 1.5rem' }} className="md:hidden">
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {allLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: '#333333', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              style={{ padding: '0.75rem 1.25rem', backgroundColor: '#111111', color: '#FFFFFF', textDecoration: 'none', fontSize: '0.8rem', textAlign: 'center', marginTop: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              onClick={() => setMenuOpen(false)}
            >
              Objednat termín
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
