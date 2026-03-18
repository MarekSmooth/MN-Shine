interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  goldLine?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true, goldLine = true }: SectionHeaderProps) {
  return (
    <div style={{ textAlign: centered ? 'center' : 'left', marginBottom: '3rem' }}>
      {goldLine && (
        <div style={{
          width: '60px',
          height: '2px',
          backgroundColor: '#C8A97E',
          margin: centered ? '0 auto 1.5rem' : '0 0 1.5rem',
        }} />
      )}
      <h2 style={{
        fontFamily: 'var(--font-playfair, serif)',
        fontSize: 'clamp(2rem, 3.5vw, 3rem)',
        fontWeight: 700,
        color: '#FFFFFF',
        lineHeight: 1.15,
        marginBottom: subtitle ? '1rem' : 0,
        letterSpacing: '-0.01em',
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          color: '#9CA3AF',
          fontSize: '1.05rem',
          lineHeight: 1.7,
          maxWidth: centered ? '600px' : 'none',
          margin: centered ? '0 auto' : 0,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
