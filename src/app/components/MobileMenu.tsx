'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { NAVIGATION_LINKS, ANIMATION_DURATION, Z_INDEX, LAYOUT_CONSTANTS } from '../constants';
import type { MobileMenuState } from '../types';

export default function MobileMenu() {
  const [menuState, setMenuState] = useState<MobileMenuState>({
    isOpen: false,
    shouldRender: false,
    closeRect: null,
  });
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const { isOpen, shouldRender, closeRect } = menuState;

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setPortalEl(document.body);
    }
  }, []);

  // 背景スクロールロック（任意だがUX向上）
  useEffect(() => {
    if (!portalEl) return;
    const original = portalEl.style.overflow;
    if (isOpen) {
      portalEl.style.overflow = 'hidden';
    } else {
      portalEl.style.overflow = original;
    }
    return () => {
      portalEl.style.overflow = original;
    };
  }, [isOpen, portalEl]);

  const updateCloseButtonPosition = () => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setMenuState(prev => ({
        ...prev,
        closeRect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height }
      }));
    }
  };

  // マウント制御（入退場アニメーション）
  useEffect(() => {
    if (isOpen) {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setMenuState(prev => ({ ...prev, shouldRender: true }));
      updateCloseButtonPosition();
      window.addEventListener('resize', updateCloseButtonPosition);
      window.addEventListener('scroll', updateCloseButtonPosition, { passive: true });
      return () => {
        window.removeEventListener('resize', updateCloseButtonPosition);
        window.removeEventListener('scroll', updateCloseButtonPosition);
      };
    } else if (shouldRender) {
      closeTimerRef.current = window.setTimeout(() => {
        setMenuState(prev => ({ ...prev, shouldRender: false }));
        closeTimerRef.current = null;
      }, ANIMATION_DURATION.MOBILE_MENU);
    }
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
    };
  }, [isOpen, shouldRender]);

  return (
    <>
      {/* Hamburger Button（ヘッダー内に配置される） */}
      <button
        ref={btnRef}
        onClick={() => setMenuState(prev => ({ ...prev, isOpen: !prev.isOpen }))}
        className="mobile-menu-button hamburger-icon"
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
      >
        <span className={`hamburger-line ${isOpen ? 'active' : ''}`} />
        <span className={`hamburger-line ${isOpen ? 'active' : ''}`} />
        <span className={`hamburger-line ${isOpen ? 'active' : ''}`} />
      </button>
      {portalEl && shouldRender && createPortal(
        <>
          {/* オーバーレイ（ヘッダーの外で描画） */}
          <div
            className={`mobile-menu-overlay mobile-overlay ${isOpen ? 'open' : ''}`}
            onClick={() => setMenuState(prev => ({ ...prev, isOpen: false }))}
          />
          {/* 画面上のハンバーガー位置に重ねた固定のクローズボタン */}
          {isOpen && closeRect && (
            <button
              onClick={() => setMenuState(prev => ({ ...prev, isOpen: false }))}
              aria-label="メニューを閉じる"
              className="close-button"
              style={{
                top: `${closeRect.top}px`,
                left: `${closeRect.left}px`,
                width: `${closeRect.width}px`,
                height: `${closeRect.height}px`,
                zIndex: Z_INDEX.MOBILE_MENU_CLOSE_BTN,
              }}
            >
              ✕
            </button>
          )}

          {/* メニュー本体（不透明白） */}
          <nav
            className={`mobile-menu mobile-nav ${isOpen ? 'open' : ''}`}
            style={{
              width: `${LAYOUT_CONSTANTS.MOBILE_MENU_WIDTH}px`,
              zIndex: Z_INDEX.MOBILE_MENU,
            }}
            aria-label="モバイルメニュー"
          >
            {NAVIGATION_LINKS.map((item) => (
              <a
                key={item.href}
                className="mobile-nav-link"
                href={item.href}
                onClick={() => setMenuState(prev => ({ ...prev, isOpen: false }))}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </>,
        portalEl
      )}
    </>
  );
}