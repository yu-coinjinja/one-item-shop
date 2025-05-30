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
    en: 'Terms of Service | TH Official Store',
    ja: '利用規約 | TH オフィシャルストア',
    'zh-cn': '服务条款 | TH 官方商店',
    'zh-tw': '服務條款 | TH 官方商店',
    ko: '이용약관 | TH 공식 스토어',
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
  }
}

export default async function TermsOfServicePage({ params }: Props) {
  const { locale } = await params

  // Dynamically import the locale-specific MDX content
  let MDXContent
  try {
    const mdxModule = await import(`./${locale}.mdx`)
    MDXContent = mdxModule.default
  } catch {
    // Fallback to English if locale-specific content doesn't exist
    try {
      const mdxModule = await import('./en.mdx')
      MDXContent = mdxModule.default
    } catch {
      notFound()
    }
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Breadcrumb />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <MDXContent />
      </div>

      <Footer />
    </main>
  )
}
