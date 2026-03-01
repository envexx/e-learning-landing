import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nilai.online"),
  title: {
    default: "Ujian Online Sekolah | Platform CBT Terbaik - nilai.online",
    template: "%s | nilai.online",
  },
  description:
    "Platform ujian online (CBT) terbaik untuk sekolah SD, SMP, SMA, dan SMK di Indonesia. Buat ujian online otomatis dengan auto-grading, bank soal, AI generate soal, analitik nilai real-time. Mulai gratis!",
  keywords: [
    "ujian online",
    "ujian online sekolah",
    "ujian online gratis",
    "CBT online",
    "computer based test",
    "aplikasi ujian online",
    "platform ujian online",
    "ujian online SD",
    "ujian online SMP",
    "ujian online SMA",
    "ujian online SMK",
    "ujian online Indonesia",
    "buat ujian online",
    "ujian online otomatis",
    "ujian online murah",
    "ujian online terbaik",
    "e-learning sekolah",
    "kuis online sekolah",
    "ulangan online",
    "PTS online",
    "PAS online",
    "ujian semester online",
    "ujian sekolah online",
    "bank soal online",
    "auto grading",
    "koreksi otomatis ujian",
    "nilai online",
    "rapor digital",
    "manajemen sekolah",
    "LMS sekolah Indonesia",
    "AI generate soal",
    "soal ujian otomatis",
  ],
  authors: [{ name: "nilai.online", url: "https://nilai.online" }],
  creator: "nilai.online",
  publisher: "nilai.online",
  category: "Education",
  openGraph: {
    title: "Ujian Online Sekolah | Platform CBT Terbaik - nilai.online",
    description:
      "Buat ujian online sekolah dengan mudah. Platform CBT lengkap dengan auto-grading, bank soal, AI generate soal, dan analitik nilai. Gratis untuk dicoba!",
    url: "https://nilai.online",
    siteName: "nilai.online",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ujian Online Sekolah | Platform CBT Terbaik - nilai.online",
    description:
      "Platform ujian online (CBT) terbaik untuk sekolah di Indonesia. Auto-grading, AI generate soal, bank soal, analitik real-time. Mulai gratis!",
  },
  alternates: {
    canonical: "https://nilai.online",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "EVxFrt2xtQk-uAqVHz15VcLWa9NRlWr8DsaP-u7PuBM",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/icon/logo-no-bg-png-blue.png" />
        <meta name="theme-color" content="#0221CD" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://storage.nilai.online" />
      </head>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
