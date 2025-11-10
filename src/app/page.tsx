'use client';

import { useScrollAnimation, useScrollProgress } from './components/useScrollAnimation';
import { useEffect, useState } from 'react';
import TypewriterText from './components/TypewriterText';

export default function Home() {
  const heroAnimation = useScrollAnimation(0.1);
  const aboutAnimation = useScrollAnimation(0.3);
  const worksAnimation = useScrollAnimation(0.3);
  const teamAnimation = useScrollAnimation(0.3);
  const historyAnimation = useScrollAnimation(0.3);
  const contactAnimation = useScrollAnimation(0.3);
  const scrollProgress = useScrollProgress();
  
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setParallaxY(scrolled * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="home" className="container" style={{ maxWidth: 1040, margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>合同会社nowX - つくば市のweb開発企業</h1>
      
      <section 
        className="section"
        style={{ 
          padding: "60px 0",
        }}
      >
        <div style={{ fontSize: 36, lineHeight: 1.2, marginBottom: 12, fontWeight: "bold" }}>
          <TypewriterText text="合同会社nowX" speed={150} />
        </div>
        <p style={{ fontSize: 18, opacity: 0.9 }}>
          <TypewriterText text="Engineering Firm at Tsukuba" delay={2000} speed={100} />
        </p>
      </section>

      <section 
        id="about" 
        ref={aboutAnimation.ref as any}
        className={`section fade-in-up ${aboutAnimation.isVisible ? 'visible' : ''}`}
        style={{ padding: "60px 0", borderTop: "1px solid var(--border-color)" }}
      >
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          {aboutAnimation.isVisible && <TypewriterText text="About" speed={100} />}
        </h2>
        <p style={{ lineHeight: 1.9 }}>
          {aboutAnimation.isVisible && (
            <TypewriterText 
              text="合同会社nowXは、Web/アプリのシステム設計・開発や起業アイデアの壁打ちを行うつくば市のエンジニアリングファームです。学生起業・スタートアップを中心に、スピード感が求められる開発全般をご支援します。" 
              delay={500} 
              speed={30} 
            />
          )}
        </p>
      </section>

      <section 
        id="works" 
        ref={worksAnimation.ref as any}
        className={`section fade-in-up ${worksAnimation.isVisible ? 'visible' : ''}`}
        style={{ padding: "60px 0", borderTop: "1px solid var(--border-color)" }}
      >
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          {worksAnimation.isVisible && <TypewriterText text="Works" speed={100} />}
        </h2>
        <div style={{ display: "grid", gap: 24 }}>
          <div style={{ marginBottom: 16 }}>
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>
              {worksAnimation.isVisible && <TypewriterText text="Webシステム開発" delay={500} speed={80} />}
            </h3>
            <p style={{ lineHeight: 1.9 }}>
              {worksAnimation.isVisible && (
                <TypewriterText 
                  text="要件定義から設計、フロントエンド・バックエンド開発まで一気通貫で対応。フルスタックならではのスピードで提供します。" 
                  delay={1500} 
                  speed={25} 
                />
              )}
            </p>
          </div>
          <div style={{ marginBottom: 16 }}>
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>
              {worksAnimation.isVisible && <TypewriterText text="レンタルCTO" delay={3000} speed={80} />}
            </h3>
            <p style={{ lineHeight: 1.9 }}>
              {worksAnimation.isVisible && (
                <TypewriterText 
                  text="事業に最適な開発方針の設計やナレッジの共有をCTOの役割としてご提供。技術担当者不在の学生起業チーム等に最適です。" 
                  delay={4000} 
                  speed={25} 
                />
              )}
            </p>
          </div>
          <div style={{ marginBottom: 16 }}>
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>
              {worksAnimation.isVisible && <TypewriterText text="起業アイデアの壁打ち" delay={6000} speed={80} />}
            </h3>
            <p style={{ lineHeight: 1.9 }}>
              {worksAnimation.isVisible && (
                <TypewriterText 
                  text="起業アイデアの壁打ちを特に技術的な側面からエンジニアが支援します。" 
                  delay={7500} 
                  speed={25} 
                />
              )}
            </p>
          </div>
        </div>
      </section>

      <section 
        id="team" 
        ref={teamAnimation.ref as any}
        className={`section fade-in-up ${teamAnimation.isVisible ? 'visible' : ''}`}
        style={{ padding: "60px 0", borderTop: "1px solid var(--border-color)" }}
      >
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          {teamAnimation.isVisible && <TypewriterText text="Members" speed={100} />}
        </h2>
        <div style={{ display: "grid", gap: 16 }}>
          <span>{teamAnimation.isVisible && <TypewriterText text="代表" delay={500} speed={100} />}</span>
          <h3 style={{ fontSize: 18 }}>
            {teamAnimation.isVisible && <TypewriterText text="相澤 颯" delay={1000} speed={100} />}
          </h3>
        </div>
      </section>

      <section 
        id="history" 
        ref={historyAnimation.ref as any}
        className={`section fade-in-up ${historyAnimation.isVisible ? 'visible' : ''}`}
        style={{ padding: "60px 0", borderTop: "1px solid var(--border-color)" }}
      >
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          {historyAnimation.isVisible && <TypewriterText text="History" speed={100} />}
        </h2>
        <ul style={{ lineHeight: 1.9 }}>
          <li>
            {historyAnimation.isVisible && <TypewriterText text="2025.10 設立" delay={500} speed={80} />}
          </li>
        </ul>
      </section>

      <section 
        id="contact" 
        ref={contactAnimation.ref as any}
        className={`section fade-in-up ${contactAnimation.isVisible ? 'visible' : ''}`}
        style={{ padding: "60px 0", borderTop: "1px solid var(--border-color)" }}
      >
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          {contactAnimation.isVisible && <TypewriterText text="Contact" speed={100} />}
        </h2>
        <p style={{ lineHeight: 1.9 }}>
          {contactAnimation.isVisible && <TypewriterText text="お問い合わせはメールにてご連絡ください。" delay={500} speed={50} />}
        </p>
        <p>
          {contactAnimation.isVisible && <TypewriterText text="代表者メール:" delay={2000} speed={80} />}
          <a href="mailto:hayate-aizawa@nowx-llc.com">
            {contactAnimation.isVisible && <TypewriterText text="hayate-aizawa@nowx-llc.com" delay={3000} speed={60} />}
          </a>
        </p>
      </section>
    </div>
  );
}
