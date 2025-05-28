import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read our terms of service for purchasing from フランクフルト林 Official Store. Learn about our policies, returns, and customer rights.',
  keywords: [
    'terms of service',
    'terms and conditions',
    'purchase terms',
    'customer rights',
    'return policy',
    'legal terms',
    'store policies',
  ],
  openGraph: {
    title: 'Terms of Service | フランクフルト林 Official Store',
    description: 'Read our terms of service for purchasing from フランクフルト林 Official Store.',
    type: 'website',
  },
}

export default function TermsOfService() {
  return (
    <main className="bg-white min-h-screen" style={{ fontFamily: 'var(--font-shippori-mincho)' }}>
      {/* Header */}
      <header className="bg-black py-8 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link
            href="/"
            className="inline-block mb-4 text-gray-400 hover:text-white transition-colors duration-200"
          >
            ← Back to Store
          </Link>
          <h1 className="font-black text-4xl md:text-5xl tracking-wide">Terms of Service</h1>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <div className="max-w-none prose prose-lg">
          <p className="mb-8 text-gray-600 leading-relaxed">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">
              Acceptance of Terms
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not
              use this service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">
              Product Information
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We strive to provide accurate product descriptions and images. However, we do not
              warrant that product descriptions or other content is accurate, complete, reliable,
              current, or error-free.
            </p>
            <ul className="mb-6 ml-6 text-gray-700 list-disc">
              <li>All products are subject to availability</li>
              <li>Prices are subject to change without notice</li>
              <li>Limited edition items are available while supplies last</li>
              <li>Colors may vary slightly from images due to monitor settings</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">Orders and Payment</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              By placing an order, you agree to provide current, complete, and accurate purchase and
              account information for all purchases made at our store.
            </p>
            <ul className="mb-6 ml-6 text-gray-700 list-disc">
              <li>Payment must be received before order processing</li>
              <li>We reserve the right to refuse or cancel orders</li>
              <li>Order confirmation does not guarantee product availability</li>
              <li>All sales are final unless otherwise stated</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">
              Intellectual Property
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              All content on this website, including but not limited to text, graphics, logos,
              images, and designs, is the property of Taichi Hayashi and is protected by
              international copyright laws.
            </p>
            <ul className="mb-6 ml-6 text-gray-700 list-disc">
              <li>Unauthorized use of any content is prohibited</li>
              <li>Products are for personal use only</li>
              <li>Commercial reproduction is strictly forbidden</li>
              <li>All designs are original and exclusive</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">
              Returns and Exchanges
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Due to the limited and exclusive nature of our merchandise, all sales are final. We do
              not accept returns or exchanges except in cases of:
            </p>
            <ul className="mb-6 ml-6 text-gray-700 list-disc">
              <li>Defective or damaged items upon arrival</li>
              <li>Incorrect items shipped</li>
              <li>Manufacturing defects</li>
            </ul>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Claims must be made within 7 days of delivery with photographic evidence.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">
              Limitation of Liability
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              In no event shall Taichi Hayashi Official Store be liable for any indirect,
              incidental, special, consequential, or punitive damages, including without limitation,
              loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">Governing Law</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws
              of Japan, and you irrevocably submit to the exclusive jurisdiction of the courts in
              that state or location.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">
              Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
              <br />
              Email: legal@taichistore.com
              <br />
              Address: Tokyo, Japan
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
