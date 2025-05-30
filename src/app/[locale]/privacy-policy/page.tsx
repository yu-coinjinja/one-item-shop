import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Privacy Policy | フランクフルト林 Official Store',
  description: 'Privacy Policy for フランクフルト林 Official Store',
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
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
