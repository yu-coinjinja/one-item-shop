import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how we protect your privacy and handle your personal information at フランクフルト林 Official Store. GDPR compliant privacy policy.',
  keywords: [
    'privacy policy',
    'data protection',
    'personal information',
    'GDPR',
    'privacy rights',
    'data security',
    'customer privacy',
  ],
  openGraph: {
    title: 'Privacy Policy | フランクフルト林 Official Store',
    description: 'Learn how we protect your privacy and handle your personal information.',
    type: 'website',
  },
}

export default function PrivacyPolicy() {
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
          <h1 className="font-black text-4xl md:text-5xl tracking-wide">Privacy Policy</h1>
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
              Information We Collect
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We collect information you provide directly to us, such as when you create an account,
              make a purchase, or contact us for support. This may include:
            </p>
            <ul className="mb-6 ml-6 text-gray-700 list-disc">
              <li>Name and contact information</li>
              <li>Payment and billing information</li>
              <li>Shipping address</li>
              <li>Order history and preferences</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">
              How We Use Your Information
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="mb-6 ml-6 text-gray-700 list-disc">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your purchases</li>
              <li>Provide customer support</li>
              <li>Send you promotional materials (with your consent)</li>
              <li>Improve our products and services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">
              Information Sharing
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third
              parties without your consent, except as described in this policy. We may share
              information with:
            </p>
            <ul className="mb-6 ml-6 text-gray-700 list-disc">
              <li>Service providers who assist with our operations</li>
              <li>Payment processors for transaction processing</li>
              <li>Shipping companies for order fulfillment</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">Data Security</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We implement appropriate security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no
              method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">Your Rights</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">You have the right to:</p>
            <ul className="mb-6 ml-6 text-gray-700 list-disc">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@taichistore.com
              <br />
              Address: Tokyo, Japan
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
