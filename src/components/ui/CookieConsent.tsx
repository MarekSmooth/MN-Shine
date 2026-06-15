"use client";

import { useState, useEffect } from "react";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "mn-shine-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Small delay so the page loads first
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function savePreferences(prefs: CookiePreferences) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setVisible(false);
    setSettingsOpen(false);
  }

  function acceptAll() {
    savePreferences({ necessary: true, analytics: true, marketing: true });
  }

  function saveSettings() {
    savePreferences({ necessary: true, analytics, marketing });
  }

  if (!visible) return null;

  return (
    <>
      {/* Soft backdrop — dims page while banner is visible, non-blocking */}
      <div className="fixed inset-0 bg-black/40 z-[997] pointer-events-none transition-opacity duration-500" />

      {/* Backdrop for settings panel (clickable to close) */}
      {settingsOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[998]"
          onClick={() => setSettingsOpen(false)}
        />
      )}

      {/* Settings panel */}
      {settingsOpen && (
        <div className="fixed inset-x-0 bottom-0 z-[999] flex justify-center pb-4 px-4">
          <div
            className="w-full max-w-lg bg-[#111111] border border-white/10 rounded-none shadow-2xl p-6 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-white font-semibold text-lg mb-1 tracking-wide" style={{ fontFamily: "'Big Shoulders Display', sans-serif" }}>
              Nastavení cookies
            </h2>
            <p className="text-[#9BA5AE] text-sm mb-5 leading-relaxed">
              Zvolte, které kategorie cookies chcete povolit. Vaše volbu můžete
              kdykoli změnit.
            </p>

            {/* Nezbytné */}
            <div className="flex items-start justify-between gap-4 py-4 border-t border-white/8">
              <div>
                <p className="text-white text-sm font-medium">Nezbytné</p>
                <p className="text-[#9BA5AE] text-xs mt-0.5 leading-relaxed">
                  Zajišťují základní funkce webu – bez těchto cookies by stránky
                  nefungovaly správně.
                </p>
              </div>
              <span className="shrink-0 text-xs text-[#9BA5AE] bg-white/8 rounded-none px-3 py-1 mt-0.5 whitespace-nowrap">
                Vždy aktivní
              </span>
            </div>

            {/* Analytické */}
            <div className="flex items-start justify-between gap-4 py-4 border-t border-white/8">
              <div>
                <p className="text-white text-sm font-medium">Analytické</p>
                <p className="text-[#9BA5AE] text-xs mt-0.5 leading-relaxed">
                  Pomáhají nám pochopit, jak návštěvníci web používají, abychom
                  ho mohli neustále vylepšovat.
                </p>
              </div>
              <button
                role="switch"
                aria-checked={analytics}
                onClick={() => setAnalytics((v) => !v)}
                className={`shrink-0 relative mt-0.5 w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                  analytics ? "bg-white" : "bg-white/20"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-[#111111] shadow transition-transform duration-200 ${
                    analytics ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Marketingové */}
            <div className="flex items-start justify-between gap-4 py-4 border-t border-white/8">
              <div>
                <p className="text-white text-sm font-medium">Marketingové</p>
                <p className="text-[#9BA5AE] text-xs mt-0.5 leading-relaxed">
                  Umožňují měřit výsledky reklam (Google Ads) a přizpůsobit
                  nabídku těm, kteří web již navštívili.
                </p>
              </div>
              <button
                role="switch"
                aria-checked={marketing}
                onClick={() => setMarketing((v) => !v)}
                className={`shrink-0 relative mt-0.5 w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                  marketing ? "bg-white" : "bg-white/20"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-[#111111] shadow transition-transform duration-200 ${
                    marketing ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-5">
              <button
                onClick={saveSettings}
                className="flex-1 py-2.5 rounded-none bg-white text-[#0a0a0a] text-sm font-semibold tracking-wide hover:bg-white/90 transition-colors"
              >
                Uložit nastavení
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 py-2.5 rounded-none border border-white/20 text-white text-sm font-semibold tracking-wide hover:bg-white/8 transition-colors"
              >
                Přijmout vše
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main banner */}
      {!settingsOpen && (
        <div className="fixed inset-x-0 bottom-0 z-[999] flex justify-center pb-4 px-4">
          <div className="w-full max-w-2xl bg-[#111111] border border-white/10 rounded-none shadow-2xl px-5 py-4 animate-slide-up">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-[#9BA5AE] text-sm leading-relaxed flex-1">
                Na našich stránkách používáme cookies. Některé jsou nezbytné pro
                správný chod webu, jiné nám pomáhají zlepšovat váš zážitek z
                návštěvy.{" "}
                <span className="text-white/70">
                  Souhlasíte s jejich použitím?
                </span>
              </p>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => setSettingsOpen(true)}
                  className="px-4 py-2 rounded-none border border-white/15 text-white/70 text-sm font-medium hover:bg-white/6 hover:text-white transition-colors whitespace-nowrap"
                >
                  Nastavení
                </button>
                <button
                  onClick={acceptAll}
                  className="px-5 py-2 rounded-none bg-white text-[#0a0a0a] text-sm font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
                >
                  Souhlasím
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
    </>
  );
}
