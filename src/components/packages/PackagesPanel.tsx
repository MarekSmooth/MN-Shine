'use client';

import Link from 'next/link';
import type { Ref } from 'react';
import { X } from 'lucide-react';
import { packages, formatCzk, orderHref, PACKAGES_PATH, type BadgeVariant } from '@/data/packages';
import { trackEvent } from '@/lib/track';
import { PanelHeadArt } from './BadgeArt';

interface Props {
  variant: BadgeVariant;
  id?: string;
  /** 'row' = 3 karty vedle sebe (desktop), 'column' = pod sebou (mobil, náhled) */
  layout?: 'row' | 'column';
  /** Statické vykreslení pro náhledovou stránku (bez fixed pozice). */
  isStatic?: boolean;
  isModal?: boolean;
  /** Panel otevřený z cedulky – animace podle varianty. */
  isLive?: boolean;
  isClosing?: boolean;
  /** Ukázka: tlačítka a odkazy nejsou klikatelné. */
  demo?: boolean;
  onClose?: () => void;
  /** Klik na odkaz v panelu (zavře panel bez vracení focusu). */
  onNavigate?: () => void;
  closeRef?: Ref<HTMLButtonElement>;
  panelRef?: Ref<HTMLDivElement>;
}

export function PackagesPanel({ variant, id, layout = 'row', isStatic, isModal, isLive, isClosing, demo, onClose, onNavigate, closeRef, panelRef }: Props) {
  const titleId = id ? `${id}-title` : undefined;
  const cls = ['pkb-panel', `pkb-panel--${variant}`, isStatic && 'is-static', isLive && 'is-live', isClosing && 'is-closing', layout === 'column' && 'is-column'].filter(Boolean).join(' ');
  return (
    <div
      ref={panelRef}
      id={id}
      className={cls}
      role={isStatic ? undefined : 'dialog'}
      aria-modal={isStatic ? undefined : isModal}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      {isLive && <span className="pkb-fx-line" aria-hidden="true" />}
      <div className={`pkb-head pkb-head--${variant}`}>
        <PanelHeadArt variant={variant} />
        <div>
          <p className="pkb-head__title" id={titleId}>Výhodné balíčky</p>
          <p className="pkb-head__sub">Nabídka platí dlouhodobě, bez časového omezení.</p>
        </div>
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
              {demo ? (
                <>
                  <span className="pkb-btn pkb-btn--ghost is-demo" aria-disabled="true">Zjistit víc</span>
                  <span className="pkb-btn pkb-btn--primary is-demo" aria-disabled="true">Objednat službu</span>
                </>
              ) : (
                <>
                  <Link href={`${PACKAGES_PATH}#${p.slug}`} className="pkb-btn pkb-btn--ghost" onClick={() => { trackEvent('balicky_more', { balicek: p.slug }); onNavigate?.(); }}>
                    Zjistit víc
                  </Link>
                  <Link href={orderHref(p.slug)} className="pkb-btn pkb-btn--primary" onClick={() => { trackEvent('balicky_order', { balicek: p.slug }); onNavigate?.(); }}>
                    Objednat službu
                  </Link>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="pkb-foot">
        {demo
          ? <span className="is-demo">Všechny podrobnosti a ceny podle velikosti vozu →</span>
          : <Link href={PACKAGES_PATH} onClick={() => { trackEvent('balicky_more', { balicek: 'vse' }); onNavigate?.(); }}>Všechny podrobnosti a ceny podle velikosti vozu →</Link>}
      </div>
    </div>
  );
}
