'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false); // アニメーション用マウント制御
  const closeTimerRef = useRef<number | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [closeRect, setCloseRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);

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

  // マウント制御（入退場アニメーション）
  useEffect(() => {
    if (isOpen) {
      // 開くときは即マウント
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setShouldRender(true);
      // ハンバーガー位置を取得
      const updatePos = () => {
        if (btnRef.current) {
          const r = btnRef.current.getBoundingClientRect();
          setCloseRect({ top: r.top, left: r.left, width: r.width, height: r.height });
        }
      };
      updatePos();
      window.addEventListener('resize', updatePos);
      window.addEventListener('scroll', updatePos, { passive: true });
      return () => {
        window.removeEventListener('resize', updatePos);
        window.removeEventListener('scroll', updatePos);
      };
    } else if (shouldRender) {
      // 閉じるときはアニメーション時間だけ残す
      closeTimerRef.current = window.setTimeout(() => {
        setShouldRender(false);
        closeTimerRef.current = null;
      }, 280); // panelのtransitionに合わせる
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
        onClick={() => setIsOpen(v => !v)}
        className="mobile-menu-button"
        style={{
          flexDirection: 'column',
          justifyContent: 'space-around',
          width: '24px',
          height: '18px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
      >
        <span style={{
          display: 'block',
          height: '2px',
          width: '100%',
          background: 'var(--foreground)',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
        }} />
        <span style={{
          display: 'block',
          height: '2px',
          width: '100%',
          background: 'var(--foreground)',
          transition: 'all 0.3s ease',
          opacity: isOpen ? '0' : '1',
        }} />
        <span style={{
          display: 'block',
          height: '2px',
          width: '100%',
          background: 'var(--foreground)',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none',
        }} />
      </button>
      {portalEl && shouldRender && createPortal(
        <>
          {/* オーバーレイ（ヘッダーの外で描画） */}
          <div
            className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9998,
            }}
            onClick={() => setIsOpen(false)}
          />
          {/* 画面上のハンバーガー位置に重ねた固定のクローズボタン */}
          {isOpen && closeRect && (
            <button
              onClick={() => setIsOpen(false)}
              aria-label="メニューを閉じる"
              style={{
                position: 'fixed',
                top: `${closeRect.top}px`,
                left: `${closeRect.left}px`,
                width: `${closeRect.width}px`,
                height: `${closeRect.height}px`,
                zIndex: 10000,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--foreground)',
                fontSize: '22px',
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          )}

          {/* メニュー本体（不透明白） */}
          <nav
            className={`mobile-menu ${isOpen ? 'open' : ''}`}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '260px',
              height: '100%',
              background: '#ffffff',
              borderLeft: '1px solid var(--border-color)',
              boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.25)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              zIndex: 9999,
            }}
            aria-label="モバイルメニュー"
          >
            {/* 内部のクローズボタンは削除（ハンバーガー位置の固定ボタンで閉じる） */}
            {[
              { href: '#about', label: 'About' },
              { href: '#works', label: 'Works' },
              { href: '#team', label: 'Members' },
              { href: '#history', label: 'History' },
              { href: '#contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.href}
                className="mobile-nav-link"
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{
                  padding: '12px 0',
                  textDecoration: 'none',
                  color: 'var(--foreground)',
                  borderBottom: '1px solid var(--border-color)',
                  fontSize: '16px',
                }}
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