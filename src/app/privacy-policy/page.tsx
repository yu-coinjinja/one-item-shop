import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Breadcrumb from '@/components/Breadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | フランクフルト林 Official Store',
  description: 'Privacy Policy for フランクフルト林 Official Store',
}

export default function PrivacyPolicy() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Breadcrumb />

      {/* Header */}
      <div className="py-8 pt-16 md:pt-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="pb-8 border-gray-500 border-b font-bold text-3xl md:text-4xl tracking-wide">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <div className="space-y-8 text-gray-800">
          <section>
            <h2 className="mb-4 font-semibold text-xl">Information We Collect</h2>
            <p className="leading-relaxed">
              We collect information you provide directly to us, such as when you create an account,
              make a purchase, or contact us for support. This may include your name, email address,
              shipping address, and payment information.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">How We Use Your Information</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your purchases</li>
              <li>Provide customer support</li>
              <li>Send you promotional materials (with your consent)</li>
              <li>Improve our services and website</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Information Sharing</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third
              parties without your consent, except as described in this policy. We may share
              information with trusted service providers who assist us in operating our website and
              conducting business.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Your Rights</h2>
            <p className="leading-relaxed">
              You have the right to access, update, or delete your personal information. You may
              also opt out of receiving promotional communications from us.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at
              info@frankfurtlin-store.com
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
