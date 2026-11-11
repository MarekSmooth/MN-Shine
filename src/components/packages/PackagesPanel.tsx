'use client';

import Link from 'next/link';
import type { Ref } from 'react';
import { X } from 'lucide-react';
import { packages, formatCzk, orderHref, PACKAGES_PATH } from '@/data/packages';
import { trackEvent } from '@/lib/track';

interface Props {
  id?: string;
  isModal?: boolean;
  isClosing?: boolean;
  onClose?: () => void;
  /** Klik na odkaz v panelu (zavře panel bez vracení focusu). */
  onNavigate?: () => void;
  closeRef?: Ref<HTMLButtonElement>;
  panelRef?: Ref<HTMLDivElement>;
}

export function PackagesPanel({ id, isModal, isClosing, onClose, onNavigate, closeRef, panelRef }: Props) {
  const titleId = id ? `${id}-title` : undefined;
  return (
    <div
      ref={panelRef}
      id={id}
      className={`pkb-panel${isClosing ? ' is-closing' : ''}`}
      role="dialog"
      aria-modal={isModal}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <div className="pkb-head">
        <span className="pkb-tag__pct" aria-hidden="true">%</span>
        <p className="pkb-head__title" id={titleId}>Výhodné balíčky</p>
        <button ref={closeRef} type="button" className="pkb-close" onClick={onClose} aria-label="Zavřít výhodné balíčky">
          <X size={20} />
        </button>
      </div>

      <div className="pkb-cards">
        {packages.map(p => (
          <div key={p.slug} className="pkb-card">
            <p className="pkb-card__name">{p.shortName}</p>
            <p className="pkb-card__price">od {formatCzk(p.priceFrom)}</p>
            <p className="pkb-card__meta">{p.protection ? `Výdrž ochrany ${p.protection}` : `Doba realizace ${p.duration}`}</p>
            <p className="pkb-card__text">{p.summary}</p>
            <div className="pkb-card__btns">
              <Link href={`${PACKAGES_PATH}#${p.slug}`} className="pkb-btn pkb-btn--ghost" onClick={() => { trackEvent('balicky_more', { balicek: p.slug }); onNavigate?.(); }}>
                Zjistit víc
              </Link>
              <Link href={orderHref(p.slug)} className="pkb-btn pkb-btn--primary" onClick={() => { trackEvent('balicky_order', { balicek: p.slug }); onNavigate?.(); }}>
                Objednat službu
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="pkb-foot">
        <Link href={PACKAGES_PATH} onClick={() => { trackEvent('balicky_more', { balicek: 'vse' }); onNavigate?.(); }}>Všechny podrobnosti a ceny podle velikosti vozu →</Link>
      </div>
    </div>
  );
}
