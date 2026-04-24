interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  goldLine?: boolean;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true, goldLine = false, light = false }: SectionHeaderProps) {
  const titleColor = light ? '#0a0a0a' : '#FFFFFF';
  const subtitleColor = light ? '#555555' : '#9CA3AF';
  const lineColor = light ? '#0a0a0a' : '#FFFFFF';
  return (
    <div style={{ textAlign: centered ? 'center' : 'left', marginBottom: '1.75rem' }}>
      {goldLine && (
        <div style={{
          width: '60px',
          height: '2px',
          backgroundColor: lineColor,
          margin: centered ? '0 auto 1.5rem' : '0 0 1.5rem',
        }} />
      )}
      <h2 style={{
        fontFamily: 'var(--font-inter, sans-serif)',
        fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
        fontWeight: 600,
        color: titleColor,
        lineHeight: 1.15,
        marginBottom: subtitle ? '1rem' : 0,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          color: subtitleColor,
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
