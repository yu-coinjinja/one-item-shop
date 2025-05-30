import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Breadcrumb from '@/components/Breadcrumb'
import { Metadata } from 'next'

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

        {/* Header */}
        <div className="py-8">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="pb-8 border-gray-500 border-b font-bold text-3xl md:text-4xl tracking-wide">
              Privacy Policy
            </h1>
          </div>
        </div>

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
