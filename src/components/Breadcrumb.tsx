'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Data layer - Page mapping
const pageMapping = {
  '/': 'Home',
  '/privacy-policy': 'Privacy Policy',
  '/terms-of-service': 'Terms of Service',
  '/shipping-policy': 'Shipping Policy',
  '/tokutei-shoutorihiki': '特定商取引法',
  '/success': 'Order Success',
}

interface BreadcrumbProps {
  customTitle?: string
  showBackButton?: boolean
}

// Visual layer - Breadcrumb components
const BackButton = () => (
  <Link
    href="/"
    className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-200"
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
    <span className="font-medium text-sm">Back to Home</span>
  </Link>
)

const BreadcrumbPath = ({ pathname, customTitle }: { pathname: string; customTitle?: string }) => {
  const pathSegments = pathname.split('/').filter(Boolean)

  return (
    <nav className="flex items-center space-x-2 text-sm">
      <Link href="/" className="text-gray-500 hover:text-black transition-colors duration-200">
        Home
      </Link>

      {pathSegments.map((segment, index) => {
        const path = '/' + pathSegments.slice(0, index + 1).join('/')
        const isLast = index === pathSegments.length - 1
        const title =
          customTitle && isLast
            ? customTitle
            : pageMapping[path as keyof typeof pageMapping] || segment

        return (
          <div key={path} className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {isLast ? (
              <span className="font-medium text-gray-900">{title}</span>
            ) : (
              <Link
                href={path}
                className="text-gray-500 hover:text-black transition-colors duration-200"
              >
                {title}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}

export default function Breadcrumb({ customTitle, showBackButton = true }: BreadcrumbProps) {
  const pathname = usePathname()

  // Don't show breadcrumb on home page
  if (pathname === '/') {
    return null
  }

  return (
    <motion.div
      className="bg-gray-50 py-4 pt-20 border-gray-200 border-b"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-4">
          {showBackButton && <BackButton />}
          <BreadcrumbPath pathname={pathname} customTitle={customTitle} />
        </div>
      </div>
    </motion.div>
  )
}
