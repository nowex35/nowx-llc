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
  title: "合同会社nowX",
  description:
    "合同会社nowXは、Web/アプリのシステム設計・開発や起業アイデアの壁打ち、イベント運営を行う学生起業のエンジニアリングファームです。スタートアップを中心に、スピード感が求められる開発全般をご支援します。",
  authors: [{ name: "合同会社nowX" }],
  creator: "合同会社nowX",
  publisher: "合同会社nowX",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://www.nowx-llc.com",
    siteName: "合同会社nowX",
    title: "合同会社nowX",
    description: "合同会社nowXは、Web/アプリのシステム設計・開発や起業アイデアの壁打ち、イベント運営を行う学生起業のエンジニアリングファームです。",
    images: [
      {
        url: "/nowX_logo_opa.svg",
        width: 1200,
        height: 630,
        alt: "合同会社nowX ロゴ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "合同会社nowX",
    description: "合同会社nowXは、Web/アプリのシステム設計・開発や起業アイデアの壁打ち、イベント運営を行う学生起業のエンジニアリングファームです。",
    images: ["/nowX_logo_opa.svg"],
  },
  alternates: {
    canonical: "https://www.nowx-llc.com",
  },
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
                title="nowX ロゴ"
                width={120}
                height={28}
                loading="eager"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "合同会社nowX",
              "alternateName": "nowX LLC",
              "url": "https://www.nowx-llc.com",
              "logo": "https://www.nowx-llc.com/nowX_logo_opa.svg",
              "description": "合同会社nowXは、Web/アプリのシステム設計・開発や起業アイデアの壁打ち、イベント運営を行う学生起業のエンジニアリングファームです。",
              "founder": {
                "@type": "Person",
                "name": "相澤颯",
                "jobTitle": "代表"
              },
              "foundingDate": "2025-10",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "JP",
                "addressRegion": "茨城県",
                "addressLocality": "つくば市",
                "streetAddress": "天久保3丁目14番地11 ヴィレッジコスモ101",
                "postalCode": "305-0005"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hayate-aizawa@nowx-llc.com",
                "contactType": "customer service"
              },
              "sameAs": [],
              "knowsAbout": [
                "Web開発",
                "アプリ開発",
                "システム設計",
                "スタートアップ支援",
                "レンタルCTO",
                "起業支援"
              ],
              "serviceType": [
                "Webシステム開発",
                "レンタルCTO",
                "起業アイデアの壁打ち"
              ]
            })
          }}
        />
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
