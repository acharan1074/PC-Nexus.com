import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Script from 'next/script'


export const metadata: Metadata = {
  title: {
    default: 'PC Nexus Technologies | Custom Web, Mobile & AI Solutions',
    template: '%s | PC Nexus Technologies',
  },
  description: 'PC Nexus Technologies delivers premium website development, full-stack web applications, iOS/Android mobile apps, custom software, and artificial intelligence solutions for businesses. Contact us for a free quote.',
  keywords: ['software development', 'web development', 'mobile apps', 'AI solutions', 'PC Nexus Technologies', 'custom software', 'Kalwakurthy', 'Telangana', 'India'],
  authors: [{ name: 'Alligaskhanpet Charan' }],
  metadataBase: new URL('https://pc-nexus.com'),
  openGraph: {
    title: 'PC Nexus Technologies | Custom Web, Mobile & AI Solutions',
    description: 'Transforming businesses with custom software development. We build responsive websites, scalable web applications, mobile apps, and machine learning models.',
    url: 'https://pc-nexus.com',
    siteName: 'PC Nexus Technologies',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563eb' },
    { media: '(prefers-color-scheme: dark)', color: '#FF6B35' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-K3L9E1JZ4R'
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="font-sans antialiased bg-background text-foreground flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
