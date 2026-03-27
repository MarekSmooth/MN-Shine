import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: ReactNode;
}

const styles = {
  primary: {
    backgroundColor: '#FFFFFF',
    color: '#0a0a0a',
    border: '1px solid #FFFFFF',
  },
  secondary: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    border: '1px solid #FFFFFF',
  },
  ghost: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    border: '1px solid rgba(255,255,255,0.2)',
  },
};

const sizes = {
  sm: { padding: '0.4rem 1rem', fontSize: '0.85rem' },
  md: { padding: '0.6rem 1.5rem', fontSize: '0.95rem' },
  lg: { padding: '0.85rem 2rem', fontSize: '1rem' },
};

export function Button({ variant = 'primary', size = 'md', href, children, ...props }: ButtonProps) {
  const style = {
    ...styles[variant],
    ...sizes[size],
    borderRadius: '4px',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.2s',
    letterSpacing: '0.02em',
  };

  if (href) {
    return (
      <Link href={href} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button style={style} {...props}>
      {children}
    </button>
  );
}
