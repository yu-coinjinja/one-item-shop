import { Suspense } from 'react'
import Link from 'next/link'
import { CheckCircle, Package, Mail } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order Confirmed - Thank You!',
  description:
    'Your order has been successfully confirmed. Thank you for your purchase from フランクフルト林 Official Store.',
  robots: {
    index: false, // Don't index success pages
    follow: true,
  },
}

function SuccessContent() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-green-50 to-blue-50 p-4 min-h-screen">
      <div className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-md text-center">
        <div className="mb-6">
          <CheckCircle className="mx-auto mb-4 w-16 h-16 text-green-500" />
          <h1 className="mb-2 font-bold text-gray-900 text-2xl">Payment Successful!</h1>
          <p className="text-gray-600">
            Thank you for your purchase. Your order has been confirmed.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex justify-center items-center space-x-3 text-gray-600 text-sm">
            <Mail className="w-5 h-5 text-blue-500" />
            <span>Confirmation email sent</span>
          </div>
          <div className="flex justify-center items-center space-x-3 text-gray-600 text-sm">
            <Package className="w-5 h-5 text-orange-500" />
            <span>We&apos;ll notify you when your order ships</span>
          </div>
        </div>

        <div className="space-y-3">
          <Link
            href="/"
            className="block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg w-full font-medium text-white transition-colors"
          >
            Continue Shopping
          </Link>
          <p className="text-gray-500 text-xs">Questions? Contact us at support@yourstore.com</p>
        </div>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
          <div className="text-center">
            <div className="mx-auto mb-4 border-b-2 border-blue-600 rounded-full w-12 h-12 animate-spin"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  )
}
