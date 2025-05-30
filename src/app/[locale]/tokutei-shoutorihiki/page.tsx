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
    en: 'Commercial Transaction Act | TH Official Store',
    ja: '特定商取引法に基づく表記 | TH オフィシャルストア',
    'zh-cn': '特定商业交易法 | TH 官方商店',
    'zh-tw': '特定商業交易法 | TH 官方商店',
    ko: '특정상거래법 | TH 공식 스토어',
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
  }
}

export default async function TokuteiShoutorihikiPage({ params }: Props) {
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
