import type { Metadata } from 'next'
import { Shippori_Mincho, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const shipporiSans = Shippori_Mincho({
  variable: '--font-shippori-mincho',
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'フランクフルト林 Official Store | Exclusive Merchandise',
    template: '%s | フランクフルト林 Official Store',
  },
  description:
    "Discover exclusive merchandise from Japan's most captivating actor. Limited edition items that reflect elegance and sophistication. Free worldwide shipping.",
  keywords: [
    'フランクフルト林',
    'Taichi Hayashi',
    'Japanese actor',
    'exclusive merchandise',
    'limited edition',
    'premium clothing',
    'Japanese fashion',
    'actor merchandise',
    'official store',
  ],
  authors: [{ name: 'フランクフルト林 (Taichi Hayashi)' }],
  creator: 'フランクフルト林 (Taichi Hayashi)',
  publisher: 'フランクフルト林 Official Store',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_STORE_DOMAIN || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'フランクフルト林 Official Store | Exclusive Merchandise',
    description:
      "Discover exclusive merchandise from Japan's most captivating actor. Limited edition items that reflect elegance and sophistication.",
    siteName: 'フランクフルト林 Official Store',
    images: [
      {
        url: '/item1.jpg',
        width: 1200,
        height: 630,
        alt: 'フランクフルト林 Official Merchandise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'フランクフルト林 Official Store | Exclusive Merchandise',
    description:
      "Discover exclusive merchandise from Japan's most captivating actor. Limited edition items that reflect elegance and sophistication.",
    images: ['/item1.jpg'],
    creator: '@frankfurtlin', // Replace with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: 'フランクフルト林 Official Store',
    description:
      "Discover exclusive merchandise from Japan's most captivating actor. Limited edition items that reflect elegance and sophistication.",
    url: process.env.NEXT_PUBLIC_STORE_DOMAIN || 'http://localhost:3000',
    logo: `${process.env.NEXT_PUBLIC_STORE_DOMAIN || 'http://localhost:3000'}/item1.jpg`,
    image: `${process.env.NEXT_PUBLIC_STORE_DOMAIN || 'http://localhost:3000'}/item1.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'JP',
      addressLocality: 'Tokyo',
      addressRegion: 'Tokyo',
    },
    openingHours: 'Mo-Su 00:00-23:59',
    acceptedPaymentMethod: [
      'http://purl.org/goodrelations/v1#ByBankTransferInAdvance',
      'http://purl.org/goodrelations/v1#PayPal',
    ],
    currenciesAccepted: 'USD, EUR, JPY, GBP, CAD, AUD',
    priceRange: '$20-$100',
  }

  return (
    <html lang="en">
      <body className={`${shipporiSans.variable} ${notoSansJP.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  )
}
