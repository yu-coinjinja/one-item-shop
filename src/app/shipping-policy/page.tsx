import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipping Policy | フランクフルト林 Official Store',
  description: 'Shipping Policy for フランクフルト林 Official Store',
}

export default function ShippingPolicy() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="pt-24 md:pt-32">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="pb-8 border-gray-500 border-b font-bold text-3xl md:text-4xl tracking-wide">
            Shipping Policy
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <div className="space-y-8 text-gray-800">
          <section>
            <h2 className="mb-4 font-semibold text-xl">Shipping Methods</h2>
            <p className="mb-4 leading-relaxed">
              We offer worldwide shipping for all our exclusive merchandise. All orders are shipped
              via reliable courier services to ensure safe delivery.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Standard International Shipping (7-14 business days)</li>
              <li>Express International Shipping (3-7 business days)</li>
              <li>Domestic Japan Shipping (2-5 business days)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Shipping Costs</h2>
            <p className="mb-4 leading-relaxed">
              We are pleased to offer <strong>free worldwide shipping</strong> on all orders. There
              are no minimum order requirements.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Free standard shipping worldwide</li>
              <li>Free express shipping on orders over ¥10,000</li>
              <li>No additional customs fees for most destinations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Processing Time</h2>
            <p className="leading-relaxed">
              Orders are typically processed within 1-3 business days. During peak seasons or
              special releases, processing may take up to 5 business days. You will receive a
              confirmation email once your order has been shipped.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Delivery Timeframes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 font-medium text-lg">Japan Domestic</h3>
                <ul className="space-y-1 ml-4 list-disc list-inside">
                  <li>Standard: 2-5 business days</li>
                  <li>Express: 1-3 business days</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-medium text-lg">Asia Pacific</h3>
                <ul className="space-y-1 ml-4 list-disc list-inside">
                  <li>Standard: 5-10 business days</li>
                  <li>Express: 3-7 business days</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-medium text-lg">North America & Europe</h3>
                <ul className="space-y-1 ml-4 list-disc list-inside">
                  <li>Standard: 7-14 business days</li>
                  <li>Express: 5-10 business days</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-medium text-lg">Rest of World</h3>
                <ul className="space-y-1 ml-4 list-disc list-inside">
                  <li>Standard: 10-21 business days</li>
                  <li>Express: 7-14 business days</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Order Tracking</h2>
            <p className="leading-relaxed">
              Once your order is shipped, you will receive a tracking number via email. You can use
              this number to track your package on our shipping partner&apos;s website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Shipping Restrictions</h2>
            <p className="mb-4 leading-relaxed">
              We ship to most countries worldwide. However, some restrictions may apply:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Remote or rural areas may have extended delivery times</li>
              <li>Some countries may have import restrictions on certain materials</li>
              <li>Customs delays may occur and are beyond our control</li>
              <li>PO Box addresses may not be accepted for international shipments</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Damaged or Lost Packages</h2>
            <p className="leading-relaxed">
              If your package arrives damaged or goes missing during transit, please contact us
              immediately at info@frankfurtlin-store.com. We will work with our shipping partners to
              resolve the issue and ensure you receive your merchandise.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Contact Us</h2>
            <p className="leading-relaxed">
              For any shipping-related questions or concerns, please contact us at
              info@frankfurtlin-store.com
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
