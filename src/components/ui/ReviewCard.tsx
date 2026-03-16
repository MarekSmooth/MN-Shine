interface ReviewCardProps {
  name: string;
  text: string;
  stars?: number;
  vehicle?: string;
}

export function ReviewCard({ name, text, stars = 5, vehicle }: ReviewCardProps) {
  return (
    <article style={{
      backgroundColor: '#1a1a1a',
      border: '1px solid rgba(200,169,126,0.15)',
      borderRadius: '8px',
      padding: '1.75rem',
    }}>
      <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} style={{ color: '#C8A97E', fontSize: '1rem' }}>★</span>
        ))}
      </div>
      <p style={{ color: '#9CA3AF', lineHeight: 1.7, marginBottom: '1.25rem', fontStyle: 'italic' }}>"{text}"</p>
      <div>
        <p style={{ color: '#FFFFFF', fontWeight: 600, margin: 0 }}>{name}</p>
        {vehicle && <p style={{ color: '#C8A97E', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>{vehicle}</p>}
      </div>
    </article>
  );
}
