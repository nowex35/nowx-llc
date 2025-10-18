import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "合同会社nowX | Innovation Engineering Firm",
  description:
    "合同会社nowXは、Web/アプリのシステム設計・開発や起業アイデアの壁打ち、イベント運営を行う学生起業のエンジニアリングファームです。",
};

export const viewport: Viewport = {
  themeColor: "#3D3D99",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "var(--background)",
          borderBottom: "1px solid var(--border-color)",
        }}>
          <nav style={{
            maxWidth: 1040,
            margin: "0 auto",
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <a
              href="#home"
              aria-label="nowX ホーム"
              style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}
            >
              <Image
                src="/nowX_logo_opa.svg"
                alt="nowX ロゴ"
                width={120}
                height={28}
                priority
                style={{ height: "28px", width: "auto" }}
              />
            </a>
            <div style={{ display: "flex", gap: 12, color: "var(--foreground)", alignItems: "center" }}>
              <a className="nav-link" href="#about">About</a>
              <a className="nav-link" href="#works">Works</a>
              <a className="nav-link" href="#team">Members</a>
               <a className="nav-link" href="#history">History</a>
              <a className="btn-cta" href="#contact">Contact</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer style={{
          marginTop: 80,
          borderTop: "1px solid var(--border-color)",
          padding: "32px 20px",
        }}>
          <div style={{ maxWidth: 1040, margin: "0 auto", color: "var(--foreground)" }}>
            <p style={{ fontWeight: 700 }}>合同会社nowX</p>
            <p>代表者：相澤颯</p>
            <p>〒305-0005 茨城県つくば市天久保3丁目14番地11 ヴィレッジコスモ101</p>
            <p style={{ marginTop: 12, fontSize: 12, opacity: 0.8 }}>© nowX LLC. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
