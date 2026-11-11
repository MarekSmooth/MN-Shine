'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import { badgeConfig, BADGE_HIDDEN_PATHS, type BadgeImage } from '@/data/packages';
import { trackEvent } from '@/lib/track';
import { BadgeTagContent } from './BadgeArt';
import { PackagesPanel } from './PackagesPanel';
import './packages-badge.css';

const HIDDEN_KEY = 'mn-balicky-hidden';
const CALM_KEY = 'mn-balicky-calm';     // po prvním otevření panelu už se cedulka nehýbe
const SHOW_DELAY_MS = 1800;
const ENTER_MS = 2200;        // délka úvodní animace (zhoupnutí, razítko %, zavlnění)
const REMIND_MS = 2400;       // délka jednoho připomenutí
const REMIND_EVERY_MS = 15000;
const REMIND_MAX = 3;         // pak už se cedulka nehýbe
const CLOSE_MS = 380;         // zavírací animace panelu
const PANEL_ID = 'vyhodne-balicky-panel';
const MOBILE_QUERY = '(max-width: 768px)';

function subscribeMobile(cb: () => void) {
  const mq = window.matchMedia(MOBILE_QUERY);
  mq.addEventListener('change', cb);
  return () => mq.removeEventListener('change', cb);
}
const getMobile = () => window.matchMedia(MOBILE_QUERY).matches;

interface Props {
  image?: BadgeImage | null;
}

type Phase = 'entering' | 'idle' | 'reminding';
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function PackagesBadge({ image = badgeConfig.image }: Props) {
  const pathname = usePathname();
  const isMobile = useSyncExternalStore(subscribeMobile, getMobile, () => false);
  const [shown, setShown] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [phase, setPhase] = useState<Phase>('entering');
  const [calm, setCalm] = useState(false);
  const openRef = useRef(false);
  const calmRef = useRef(false);
  const tagRef = useRef<HTMLButtonElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Vstup cca 1,8 s po načtení stránky; cedulka se nikdy neotevírá sama.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const start = () => {
      timer = setTimeout(() => {
        try {
          if (sessionStorage.getItem(HIDDEN_KEY)) setHidden(true);
          if (sessionStorage.getItem(CALM_KEY)) setCalm(true);
        } catch { /* bez storage */ }
        setShown(true);
      }, SHOW_DELAY_MS);
    };
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
    return () => { clearTimeout(timer); window.removeEventListener('load', start); };
  }, []);

  useEffect(() => { openRef.current = open; }, [open]);
  useEffect(() => { calmRef.current = calm; }, [calm]);

  // Po úvodní animaci klid, pak nanejvýš 3 krátká připomenutí (jen když je stránka vidět a panel zavřený)
  useEffect(() => {
    if (!shown) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setPhase('idle'), ENTER_MS));
    if (!reducedMotion()) {
      for (let i = 1; i <= REMIND_MAX; i++) {
        timers.push(setTimeout(() => {
          if (document.hidden || openRef.current || calmRef.current) return;
          setPhase('reminding');
          timers.push(setTimeout(() => setPhase('idle'), REMIND_MS));
        }, ENTER_MS + i * REMIND_EVERY_MS));
      }
    }
    return () => timers.forEach(clearTimeout);
  }, [shown]);

  // Zavření: panel se animací vrátí do cedulky (při navigaci nebo bez animací hned)
  const close = useCallback((returnFocus = true, animate = true) => {
    clearTimeout(closeTimer.current);
    if (!animate || reducedMotion()) {
      setOpen(false);
      setClosing(false);
    } else {
      setClosing(true);
      closeTimer.current = setTimeout(() => { setOpen(false); setClosing(false); }, CLOSE_MS);
    }
    if (returnFocus) tagRef.current?.focus();
  }, []);
  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // Otevření: zjistit, jestli je cedulka vedle panelu (desktop) nebo nad ním (mobil, tablet) – panel se
  // vysune z její strany. Proměnné a data-atributy se zapisují přímo do DOM ještě před vykreslením.
  useLayoutEffect(() => {
    const panel = panelRef.current, tag = tagRef.current;
    if (!open || !panel || !tag) return;
    // rozměry cedulky pro naklopení do svislé záložky (desktop) – nastavit dřív, než se poprvé přepočítá styl
    wrapRef.current?.style.setProperty('--tag-w', `${tag.offsetWidth}px`);
    wrapRef.current?.style.setProperty('--tag-h', `${tag.offsetHeight}px`);
    const t = tag.getBoundingClientRect(), p = panel.getBoundingClientRect();
    panel.dataset.dir = t.bottom <= p.top + 4 ? 'top' : 'side';
    panel.dataset.fx = 'in';
  }, [open]);

  // Esc, klik mimo panel, držení focusu v panelu
  useEffect(() => {
    if (!open || closing) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const f = panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t) || tagRef.current?.contains(t)) return;
      close(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open, closing, close]);

  // Bottom sheet na mobilu: zamknout scroll stránky pod ním
  useEffect(() => {
    if (!open || !isMobile) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open, isMobile]);

  if (BADGE_HIDDEN_PATHS.includes(pathname)) return null;
  if (!shown || hidden) return null;

  const toggle = () => {
    if (open && !closing) { close(); return; }
    clearTimeout(closeTimer.current);
    setClosing(false);
    setOpen(true);
    if (!calm) {
      setCalm(true);
      try { sessionStorage.setItem(CALM_KEY, '1'); } catch { /* bez storage */ }
    }
    trackEvent('balicky_open');
  };
  const hide = () => {
    try { sessionStorage.setItem(HIDDEN_KEY, '1'); } catch { /* bez storage */ }
    clearTimeout(closeTimer.current);
    setOpen(false);
    setClosing(false);
    setHidden(true);
  };

  return (
    <>
      <div ref={wrapRef} className={`pkb-wrap ${phase === 'idle' ? (calm ? '' : 'is-idle') : `is-${phase}`}${open && !closing ? ' is-open' : ''}`}>
        <button
          ref={tagRef}
          type="button"
          className="pkb-tag"
          aria-expanded={open && !closing}
          aria-controls={PANEL_ID}
          aria-label={image ? 'Výhodné balíčky' : undefined}
          onClick={toggle}
        >
          <BadgeTagContent image={image} />
        </button>
        <button type="button" className="pkb-hide" onClick={hide} aria-label="Skrýt výhodné balíčky do konce návštěvy">
          skrýt
        </button>
      </div>

      {open && (
        <>
          {isMobile && <div className={`pkb-overlay${closing ? ' is-closing' : ''}`} aria-hidden="true" />}
          <PackagesPanel
            id={PANEL_ID}
            isModal={isMobile}
            isClosing={closing}
            onClose={() => close()}
            onNavigate={() => close(false, false)}
            closeRef={closeRef}
            panelRef={panelRef}
          />
        </>
      )}
    </>
  );
}
