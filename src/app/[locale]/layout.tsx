import { routing } from '@/i18n/routing'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import {
  Noto_Sans,
  Noto_Sans_KR,
  Noto_Sans_SC,
  Noto_Sans_TC,
  Noto_Serif_KR,
  Noto_Serif_SC,
  Noto_Serif_TC,
  Playfair_Display,
  M_PLUS_Rounded_1c, 
  Kosugi_Maru
} from 'next/font/google'
import { notFound } from 'next/navigation'

// Japanese fonts
const kosugiMaru = Kosugi_Maru({
  subsets: ['latin'], 
  weight: '400',
  variable: '--font-sans' 
})

const MPlusRounded1c = M_PLUS_Rounded_1c({
  variable: '--font-serif',
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
      return `${MPlusRounded1c.variable} ${kosugiMaru.variable}`
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
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`,
    },
    description: t('description'),
    keywords: t('keywords').split(','),
    authors: [{ name: 'フランクフルト林 (Taichi Hayashi)' }],
    creator: 'フランクフルト林 (Taichi Hayashi)',
    publisher: t('siteName'),
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_STORE_DOMAIN || 'http://localhost:3000'),
    alternates: {
      canonical: `/${locale === 'ja' ? '' : locale}`,
      languages: {
        en: '/en',
        ja: '/',
        'zh-CN': '/zh-cn',
        'zh-TW': '/zh-tw',
        ko: '/ko',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: `/${locale === 'ja' ? '' : locale}`,
      title: t('title'),
      description: t('description'),
      siteName: t('siteName'),
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
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
  const t = await getTranslations({ locale, namespace: 'metadata' })

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: t('siteName'),
    description: t('description'),
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
