import Link from 'next/link'

export default function ShippingPolicy() {
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
          <h1 className="font-black text-4xl md:text-5xl tracking-wide">Shipping Policy</h1>
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
              Shipping Information
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We offer worldwide shipping for all our exclusive merchandise. All orders are
              carefully packaged and shipped with tracking information provided.
            </p>
            <div className="bg-gray-50 mb-6 p-6 rounded-lg">
              <p className="mb-2 font-medium text-black">Free Worldwide Shipping</p>
              <p className="text-gray-700">
                We provide complimentary shipping on all orders, regardless of destination or order
                value.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">Processing Time</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Orders are processed within 1-3 business days after payment confirmation. During peak
              seasons or for limited edition releases, processing may take up to 5 business days.
            </p>
            <ul className="mb-6 ml-6 text-gray-700 list-disc">
              <li>Order confirmation: Immediate</li>
              <li>Payment processing: 1-2 business days</li>
              <li>Item preparation: 1-3 business days</li>
              <li>Shipping dispatch: Same day as preparation completion</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">Delivery Times</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Delivery times vary by destination. All shipments include tracking information sent to
              your email address.
            </p>

            <div className="overflow-x-auto">
              <table className="mb-6 border border-gray-300 w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 border border-gray-300 font-medium text-black text-left">
                      Region
                    </th>
                    <th className="px-4 py-3 border border-gray-300 font-medium text-black text-left">
                      Delivery Time
                    </th>
                    <th className="px-4 py-3 border border-gray-300 font-medium text-black text-left">
                      Shipping Method
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 text-gray-700">Japan</td>
                    <td className="px-4 py-3 border border-gray-300 text-gray-700">
                      1-3 business days
                    </td>
                    <td className="px-4 py-3 border border-gray-300 text-gray-700">
                      Express Domestic
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 text-gray-700">Asia Pacific</td>
                    <td className="px-4 py-3 border border-gray-300 text-gray-700">
                      5-10 business days
                    </td>
                    <td className="px-4 py-3 border border-gray-300 text-gray-700">
                      International Express
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 text-gray-700">
                      North America
                    </td>
                    <td className="px-4 py-3 border border-gray-300 text-gray-700">
                      7-14 business days
                    </td>
                    <td className="px-4 py-3 border border-gray-300 text-gray-700">
                      International Express
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 text-gray-700">Europe</td>
                    <td className="px-4 py-3 border border-gray-300 text-gray-700">
                      7-14 business days
                    </td>
                    <td className="px-4 py-3 border border-gray-300 text-gray-700">
                      International Express
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-300 text-gray-700">
                      Other Regions
                    </td>
                    <td className="px-4 py-3 border border-gray-300 text-gray-700">
                      10-21 business days
                    </td>
                    <td className="px-4 py-3 border border-gray-300 text-gray-700">
                      International Standard
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">Packaging</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Every item is carefully packaged to ensure it arrives in perfect condition:
            </p>
            <ul className="mb-6 ml-6 text-gray-700 list-disc">
              <li>Premium protective packaging materials</li>
              <li>Moisture-resistant wrapping for clothing items</li>
              <li>Branded packaging that reflects our aesthetic</li>
              <li>Eco-friendly materials whenever possible</li>
              <li>Special handling for limited edition items</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">
              Tracking Your Order
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Once your order ships, you will receive:
            </p>
            <ul className="mb-6 ml-6 text-gray-700 list-disc">
              <li>Shipping confirmation email with tracking number</li>
              <li>Direct link to track your package</li>
              <li>Estimated delivery date</li>
              <li>Updates on delivery status</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">Customs and Duties</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              For international orders, customers are responsible for any customs duties, taxes, or
              fees imposed by their country. These charges are not included in our pricing and vary
              by destination.
            </p>
            <div className="bg-yellow-50 mb-6 p-4 border-yellow-400 border-l-4">
              <p className="text-yellow-800">
                <strong>Note:</strong> Delivery times may be extended due to customs processing. We
                recommend checking with your local customs office for specific requirements.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">Delivery Issues</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              If you experience any issues with your delivery:
            </p>
            <ul className="mb-6 ml-6 text-gray-700 list-disc">
              <li>Contact us immediately if your package appears damaged</li>
              <li>Report missing packages within 48 hours of expected delivery</li>
              <li>Provide photos of any damaged items or packaging</li>
              <li>Keep all original packaging until issue is resolved</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-bold text-black text-2xl tracking-wide">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              For shipping inquiries or issues, please contact us at:
              <br />
              Email: shipping@taichistore.com
              <br />
              Response time: Within 24 hours
              <br />
              Address: Tokyo, Japan
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
