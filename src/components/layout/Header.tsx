'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const leftLinks = [
  { href: '/', label: 'Domů' },
  { href: '/sluzby', label: 'Služby' },
  { href: '/galerie', label: 'Galerie' },
];

const rightLinks = [
  { href: '/o-nas', label: 'O nás' },
  { href: '/faq', label: 'FAQ' },
  { href: '/kontakt', label: 'Kontakt' },
];

const allLinks = [...leftLinks, ...rightLinks];

const navLinkStyle = {
  color: '#555555',
  textDecoration: 'none',
  fontSize: '0.68rem',
  fontWeight: 500,
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
  transition: 'color 0.2s',
  whiteSpace: 'nowrap' as const,
};

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
      {/* Desktop: split-nav — left links | logo center | right links + CTA */}
      <div
        className="hidden md:grid"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          height: '130px',
        }}
      >
        {/* Left nav */}
        <nav aria-label="Levá navigace" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', justifyContent: 'flex-end' }}>
          {leftLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={navLinkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = '#C8A97E')}
              onMouseLeave={e => (e.currentTarget.style.color = '#555555')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo center */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', padding: '0 2.5rem' }}>
          <Image
            src="/mnlogo.png"
            alt="MN Shine Detailing logo"
            width={350}
            height={109}
            style={{ height: '64px', width: 'auto', display: 'block' }}
            priority
          />
        </Link>

        {/* Right nav + CTA */}
        <nav aria-label="Pravá navigace" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', justifyContent: 'flex-start' }}>
          {rightLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={navLinkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = '#C8A97E')}
              onMouseLeave={e => (e.currentTarget.style.color = '#555555')}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            style={{ padding: '0.5rem 1.4rem', backgroundColor: '#111111', color: '#FFFFFF', textDecoration: 'none', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'background 0.2s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#C8A97E')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#111111')}
          >
            Objednat termín
          </Link>
        </nav>
      </div>

      {/* Mobile: logo centered + hamburger */}
      <div
        className="flex md:hidden"
        style={{ alignItems: 'center', justifyContent: 'center', height: '100px', position: 'relative', padding: '0 1.5rem' }}
      >
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Image
            src="/mnlogo.png"
            alt="MN Shine Detailing logo"
            width={350}
            height={109}
            style={{ height: '52px', width: 'auto', display: 'block' }}
            priority
          />
        </Link>
        <button
          style={{ position: 'absolute', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#111111', padding: '0.5rem' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Otevřít menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.08)', padding: '1rem 1.5rem' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {allLinks.map(link => (
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
