'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Domů' },
  { href: '/sluzby', label: 'Služby' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/o-nas', label: 'O nás' },
  { href: '/faq', label: 'FAQ' },
  { href: '/kontakt', label: 'Kontakt' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background-color 0.3s, box-shadow 0.3s',
        backgroundColor: scrolled ? '#0a0a0a' : 'transparent',
        boxShadow: scrolled ? '0 1px 0 rgba(200,169,126,0.2)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.5rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.02em' }}>
            MN <span style={{ color: '#C8A97E' }}>Shine</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Hlavní navigace" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s', letterSpacing: '0.03em' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C8A97E')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="btn-gold"
            style={{ padding: '0.5rem 1.25rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.9rem' }}
          >
            Objednat termín
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Otevřít menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#FFFFFF', padding: '0.5rem' }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(200,169,126,0.2)', padding: '1rem 1.5rem' }} className="md:hidden">
          <nav aria-label="Mobilní navigace" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="btn-gold"
              style={{ padding: '0.75rem 1.25rem', borderRadius: '4px', textDecoration: 'none', fontSize: '1rem', textAlign: 'center', marginTop: '0.5rem' }}
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
