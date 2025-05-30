import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    en: 'Shipping Policy | TH Official Store',
    ja: '配送について | TH オフィシャルストア',
    'zh-cn': '配送政策 | TH 官方商店',
    'zh-tw': '配送政策 | TH 官方商店',
    ko: '배송정책 | TH 공식 스토어',
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
  }
}

export default async function ShippingPolicyPage({ params }: Props) {
  const { locale } = await params

  try {
    const Content = (await import(`./${locale}.mdx`)).default
    return (
      <main className="bg-white min-h-screen">
        <Navbar />
        <Breadcrumb />

        {/* Content */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
          <Content />
        </div>

        <Footer />
      </main>
    )
  } catch {
    notFound()
  }
}
