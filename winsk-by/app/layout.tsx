import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { NeuralCursor } from '@/components/ui/NeuralCursor';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-jb-mono',
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Winsk — Full-Stack & AI Engineer',
    template: '%s | Winsk.by',
  },
  description:
    'Независимый Tech-эксперт: Enterprise SaaS, AI-автоматизация, CRM/ERP. Разработка сложных систем от архитектуры до продакшена.',
  metadataBase: new URL('https://winsk.by'),
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Winsk.by',
    images: [{ url: '/images/og/home.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <NeuralCursor />
        <div className="film-grain"></div>
        {children}
      </body>
    </html>
  );
}
