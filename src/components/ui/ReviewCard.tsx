interface ReviewCardProps {
  name: string;
  text: string;
  stars?: number;
  vehicle?: string;
  light?: boolean;
}

export function ReviewCard({ name, text, stars = 5, vehicle, light = false }: ReviewCardProps) {
  const cardBg = light ? '#EBEBEB' : '#1a1a1a';
  const cardBorder = light ? '1px solid rgba(0,0,0,0.10)' : '1px solid rgba(255,255,255,0.15)';
  const topLineLeft = light ? '#0a0a0a' : '#FFFFFF';
  const topLineRight = light ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.3)';
  const starColor = light ? '#0a0a0a' : '#FFFFFF';
  const bodyText = light ? '#555555' : '#9BA5AE';
  const nameColor = light ? '#0a0a0a' : '#FFFFFF';
  const vehicleColor = light ? '#555555' : '#FFFFFF';
  return (
    <article style={{
      backgroundColor: cardBg,
      border: cardBorder,
      borderRadius: '8px',
      padding: '1.75rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${topLineLeft} 0%, ${topLineRight} 60%, transparent 100%)` }} />
      <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} style={{ color: starColor, fontSize: '1rem' }}>★</span>
        ))}
      </div>
      <p style={{ color: bodyText, lineHeight: 1.7, marginBottom: '1.25rem', fontStyle: 'italic' }}>"{text}"</p>
      <div>
        <p style={{ color: nameColor, fontWeight: 600, margin: 0 }}>{name}</p>
        {vehicle && <p style={{ color: vehicleColor, fontSize: '0.85rem', margin: '0.25rem 0 0' }}>{vehicle}</p>}
      </div>
    </article>
  );
}
