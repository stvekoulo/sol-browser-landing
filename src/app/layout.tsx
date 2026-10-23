import type { Metadata, Viewport } from 'next';
import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://solbrowser.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
};

const DESCRIPTION =
  'Sol is an everyday web browser for Windows, built for normal daily browsing without draining your computer’s resources, with a clean, refined design.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Sol Browser',
  title: {
    default: 'Sol | More than a browser. Your web workspace.',
    template: '%s | Sol Browser',
  },
  description: DESCRIPTION,
  keywords: [
    'Sol Browser',
    'Windows web browser',
    'everyday browser',
    'fast browser for Windows',
    'low memory browser',
    'clean browser design',
    'minimalist browser',
  ],
  authors: [{ name: 'Sol Browser' }],
  creator: 'Sol Browser',
  publisher: 'Sol Browser',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Sol Browser',
    title: 'Sol | More than a browser. Your web workspace.',
    description: DESCRIPTION,
    images: [
      {
        url: '/wallpaper.png',
        width: 1672,
        height: 941,
        alt: 'Sol — a new perspective on the web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sol | More than a browser. Your web workspace.',
    description: DESCRIPTION,
    images: ['/wallpaper.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Sol Browser',
  operatingSystem: 'Windows 10, Windows 11 (x64, ARM64, x86)',
  applicationCategory: 'BrowserApplication',
  description: DESCRIPTION,
  downloadUrl: 'https://gitlab.com/stevencrdkoulo/sol-browser/-/releases',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#f8f8f8] text-[#111111]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
