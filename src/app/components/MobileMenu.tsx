'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="mobile-menu-button"
        style={{
          display: 'none',
          flexDirection: 'column',
          justifyContent: 'space-around',
          width: '24px',
          height: '18px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
        aria-label="メニューを開く"
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

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="mobile-menu-overlay"
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            display: 'none',
          }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <nav
        className="mobile-menu"
        style={{
          position: 'fixed',
          top: '0',
          right: isOpen ? '0' : '-250px',
          width: '250px',
          height: '100%',
          background: 'var(--background)',
          borderLeft: '1px solid var(--border-color)',
          padding: '60px 20px 20px',
          transition: 'right 0.3s ease',
          zIndex: 1001,
          display: 'none',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <a 
          className="mobile-nav-link" 
          href="#about" 
          onClick={() => setIsOpen(false)}
          style={{
            padding: '12px 0',
            textDecoration: 'none',
            color: 'var(--foreground)',
            borderBottom: '1px solid var(--border-color)',
            fontSize: '16px',
          }}
        >
          About
        </a>
        <a 
          className="mobile-nav-link" 
          href="#works" 
          onClick={() => setIsOpen(false)}
          style={{
            padding: '12px 0',
            textDecoration: 'none',
            color: 'var(--foreground)',
            borderBottom: '1px solid var(--border-color)',
            fontSize: '16px',
          }}
        >
          Works
        </a>
        <a 
          className="mobile-nav-link" 
          href="#team" 
          onClick={() => setIsOpen(false)}
          style={{
            padding: '12px 0',
            textDecoration: 'none',
            color: 'var(--foreground)',
            borderBottom: '1px solid var(--border-color)',
            fontSize: '16px',
          }}
        >
          Members
        </a>
        <a 
          className="mobile-nav-link" 
          href="#history" 
          onClick={() => setIsOpen(false)}
          style={{
            padding: '12px 0',
            textDecoration: 'none',
            color: 'var(--foreground)',
            borderBottom: '1px solid var(--border-color)',
            fontSize: '16px',
          }}
        >
          History
        </a>
        <a 
          className="mobile-nav-link" 
          href="#contact" 
          onClick={() => setIsOpen(false)}
          style={{
            padding: '12px 0',
            textDecoration: 'none',
            color: 'var(--foreground)',
            fontSize: '16px',
          }}
        >
          Contact
        </a>
      </nav>
    </>
  );
}