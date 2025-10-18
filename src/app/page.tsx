export default function Home() {
  return (
    <div id="home" style={{ maxWidth: 1040, margin: "0 auto", padding: "40px 20px" }}>
      <section style={{ padding: "60px 0" }}>
        <h1 style={{ fontSize: 36, lineHeight: 1.2, marginBottom: 12 }}>合同会社nowX</h1>
        <p style={{ fontSize: 18, opacity: 0.9 }}>Innovation Engineering Firm</p>
      </section>

      <section id="about" style={{ padding: "60px 0", borderTop: "1px solid var(--border-color)" }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>About</h2>
        <p style={{ lineHeight: 1.9 }}>
          合同会社nowXは、Web/アプリのシステム設計・開発や起業アイデアの壁打ち、イベント運営を行う学生起業のエンジニアリングファームです。
          スタートアップを中心に、スピード感が求められる開発全般をご支援します。
        </p>
      </section>

      <section id="works" style={{ padding: "60px 0", borderTop: "1px solid var(--border-color)" }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>Works</h2>
        <div className="cards">
          <div className="card">
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>Webシステム開発</h3>
            <p style={{ lineHeight: 1.9 }}>
              要件定義から設計、フロントエンド・バックエンド開発まで一気通貫で対応。
              フルスタックならではのスピードで提供します。
            </p>
          </div>
          <div className="card">
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>レンタルCTO</h3>
            <p style={{ lineHeight: 1.9 }}>
              事業に最適な開発方針の設計やナレッジの共有をCTOの役割としてご提供。
              技術担当者不在の学生起業チーム等に最適です。
            </p>
          </div>
          <div className="card">
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>起業アイデアの壁打ち</h3>
            <p style={{ lineHeight: 1.9 }}>
              起業アイデアの壁打ちを特に技術的な側面からエンジニアが支援します。
            </p>
          </div>
        </div>
      </section>

      <section id="team" style={{ padding: "60px 0", borderTop: "1px solid var(--border-color)" }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>Members</h2>
        <div style={{ display: "grid", gap: 16 }}>
            <span>代表</span><h3 style={{ fontSize: 18 }}>相澤 颯</h3>
        </div>
      </section>

      <section id="history" style={{ padding: "60px 0", borderTop: "1px solid var(--border-color)" }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>History</h2>
        <ul style={{ lineHeight: 1.9 }}>
          <li>2025.10 設立</li>
        </ul>
      </section>

      <section id="contact" style={{ padding: "60px 0", borderTop: "1px solid var(--border-color)" }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>Contact</h2>
        <p style={{ lineHeight: 1.9 }}>お問い合わせはメールにてご連絡ください。</p>
        <p>
          代表者メール:
          <a href="mailto:hayate-aizawa@nowx-llc.com">
            hayate-aizawa@nowx-llc.com
          </a>
        </p>
      </section>
    </div>
  );
}
