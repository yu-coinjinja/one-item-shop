import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | フランクフルト林 Official Store',
  description: 'Terms of Service for フランクフルト林 Official Store',
}

export default function TermsOfService() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="pt-24 md:pt-32">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="pb-8 border-gray-500 border-b font-bold text-3xl md:text-4xl tracking-wide">
            Terms of Service
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <div className="space-y-8 text-gray-800">
          <section>
            <h2 className="mb-4 font-semibold text-xl">Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and
              provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Use License</h2>
            <p className="mb-4 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials on
              フランクフルト林 Official Store&apos;s website for personal, non-commercial transitory
              viewing only.
            </p>
            <p className="leading-relaxed">
              This is the grant of a license, not a transfer of title, and under this license you
              may not:
            </p>
            <ul className="space-y-2 mt-4 list-disc list-inside">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Product Information</h2>
            <p className="leading-relaxed">
              We strive to provide accurate product information, but we do not warrant that product
              descriptions or other content is accurate, complete, reliable, current, or error-free.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Orders and Payment</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>All orders are subject to acceptance and availability</li>
              <li>We reserve the right to refuse or cancel any order</li>
              <li>Payment must be received before shipment</li>
              <li>Prices are subject to change without notice</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Shipping and Returns</h2>
            <p className="leading-relaxed">
              Please refer to our shipping policy for detailed information about delivery times and
              costs. Returns are accepted within 7 days of delivery for unused items in original
              condition.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Limitation of Liability</h2>
            <p className="leading-relaxed">
              In no event shall フランクフルト林 Official Store or its suppliers be liable for any
              damages arising out of the use or inability to use the materials on the website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Governing Law</h2>
            <p className="leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws
              of Japan.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at
              info@frankfurtlin-store.com
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
