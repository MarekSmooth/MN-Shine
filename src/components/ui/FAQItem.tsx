'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      overflow: 'hidden',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.25rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem',
        }}
        aria-expanded={open}
      >
        <span style={{ color: '#FFFFFF', fontWeight: 500, fontSize: '1rem', lineHeight: 1.4 }}>{question}</span>
        <span style={{ color: '#C8A97E', flexShrink: 0 }}>
          {open ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div style={{
        maxHeight: open ? '1000px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease',
      }}>
        <p style={{ color: '#9CA3AF', lineHeight: 1.7, paddingBottom: '1.25rem', margin: 0 }}>{answer}</p>
      </div>
    </div>
  );
}
