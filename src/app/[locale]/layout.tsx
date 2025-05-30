import type { Metadata } from 'next'
import {
  Shippori_Mincho,
  Noto_Sans_JP,
  Playfair_Display,
  Noto_Sans,
  Noto_Serif_SC,
  Noto_Sans_SC,
  Noto_Serif_TC,
  Noto_Sans_TC,
  Noto_Serif_KR,
  Noto_Sans_KR,
} from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'

// Japanese fonts
const shipporiMincho = Shippori_Mincho({
  variable: '--font-serif',
  weight: ['400', '700'],
  subsets: ['latin'],
})

const notoSansJP = Noto_Sans_JP({
  variable: '--font-sans',
  weight: ['400', '700'],
  subsets: ['latin'],
})

// English and other Latin script fonts
const playfairDisplay = Playfair_Display({
  variable: '--font-serif',
  weight: ['400', '700'],
  subsets: ['latin'],
})

const notoSans = Noto_Sans({
  variable: '--font-sans',
  weight: ['400', '700'],
  subsets: ['latin'],
})

// Chinese Simplified fonts
const notoSerifSC = Noto_Serif_SC({
  variable: '--font-serif',
  weight: ['400', '700'],
  subsets: ['latin'],
})

const notoSansSC = Noto_Sans_SC({
  variable: '--font-sans',
  weight: ['400', '700'],
  subsets: ['latin'],
})

// Chinese Traditional fonts
const notoSerifTC = Noto_Serif_TC({
  variable: '--font-serif',
  weight: ['400', '700'],
  subsets: ['latin'],
})

const notoSansTC = Noto_Sans_TC({
  variable: '--font-sans',
  weight: ['400', '700'],
  subsets: ['latin'],
})

// Korean fonts
const notoSerifKR = Noto_Serif_KR({
  variable: '--font-serif',
  weight: ['400', '700'],
  subsets: ['latin'],
})

const notoSansKR = Noto_Sans_KR({
  variable: '--font-sans',
  weight: ['400', '700'],
  subsets: ['latin'],
})

// Function to get fonts based on locale
function getFontsForLocale(locale: string) {
  switch (locale) {
    case 'ja':
      return `${shipporiMincho.variable} ${notoSansJP.variable}`
    case 'zh-cn':
      return `${notoSerifSC.variable} ${notoSansSC.variable}`
    case 'zh-tw':
      return `${notoSerifTC.variable} ${notoSansTC.variable}`
    case 'ko':
      return `${notoSerifKR.variable} ${notoSansKR.variable}`
    default: // en and fallback
      return `${playfairDisplay.variable} ${notoSans.variable}`
  }
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    en: 'TH Official Store | Exclusive Merchandise',
    ja: 'TH オフィシャルストア | 限定グッズ',
    'zh-cn': 'TH 官方商店 | 独家商品',
    'zh-tw': 'TH 官方商店 | 獨家商品',
    ko: 'TH 공식 스토어 | 독점 상품',
  }

  const descriptions = {
    en: "Discover exclusive merchandise from Japan's most captivating idol. Limited edition items that reflect elegance and sophistication.",
    ja: '日本で最も魅力的なアイドルの限定グッズをご覧ください。エレガンスと洗練を反映した限定アイテム。',
    'zh-cn': '探索来自日本最迷人偶像的独家商品。体现优雅与精致的限量版商品。',
    'zh-tw': '探索來自日本最迷人偶像的獨家商品。體現優雅與精緻的限量版商品。',
    ko: '일본에서 가장 매력적인 아이돌의 독점 상품을 만나보세요. 우아함과 세련미를 반영한 한정판 아이템.',
  }

  return {
    title: {
      default: titles[locale as keyof typeof titles] || titles.en,
      template: `%s | ${titles[locale as keyof typeof titles] || titles.en}`,
    },
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: [
      'フランクフルト林',
      'Taichi Hayashi',
      'Japanese idol',
      'exclusive merchandise',
      'limited edition',
      'premium clothing',
      'Japanese fashion',
      'idol merchandise',
      'official store',
    ],
    authors: [{ name: 'フランクフルト林 (Taichi Hayashi)' }],
    creator: 'フランクフルト林 (Taichi Hayashi)',
    publisher: 'TH オフィシャルストア',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_STORE_DOMAIN || 'http://localhost:3000'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        ja: '/ja',
        'zh-CN': '/zh-cn',
        'zh-TW': '/zh-tw',
        ko: '/ko',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: `/${locale}`,
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      siteName: 'TH オフィシャルストア',
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: 'Taichi Hayashi Official Merchandise',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      images: ['/og.png'],
      creator: '@takashi_yamamura',
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
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: 'TH オフィシャルストア',
    description:
      "Discover exclusive merchandise from Japan's most captivating idol. Limited edition items that reflect elegance and sophistication.",
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
    currenciesAccepted: 'USD, EUR, JPY, GBP, CAD, AUD, CNY, TWD, KRW',
    priceRange: '$20-$100',
  }

  return (
    <html lang={locale}>
      <body className={`${getFontsForLocale(locale)} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
