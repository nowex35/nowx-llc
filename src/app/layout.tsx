import type { Metadata } from "next";
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
            <a href="#home" style={{ fontWeight: 700, color: "var(--foreground)" }}>nowX</a>
            <div style={{ display: "flex", gap: 16, color: "var(--foreground)" }}>
              <a href="#about">About</a>
              <a href="#works">Works</a>
              <a href="#team">Members</a>
              <a href="#history">History</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer style={{
          marginTop: 80,
          borderTop: "1px solid var(--border-color)",
          padding: "24px 20px",
        }}>
          <div style={{ maxWidth: 1040, margin: "0 auto", color: "var(--foreground)" }}>
            <p style={{ fontWeight: 700 }}>合同会社nowX</p>
            <p>代表者：相澤颯</p>
            <p>〒305-0005 茨城県つくば市天久保3丁目14番地11 ヴィレッジコスモ101</p>
            <p style={{ marginTop: 8, fontSize: 12, opacity: 0.8 }}>© nowX LLC. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
