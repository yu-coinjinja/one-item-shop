'use client'

import { motion } from 'framer-motion'
import { ArrowLeftIcon, HomeIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbProps {
  customTitle?: string
  showBackButton?: boolean
}

// Visual layer - Breadcrumb components
const BackButton = () => {
  const locale = useLocale()

  return (
    <Link
      href={`/${locale}`}
      className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-200"
    >
      <ArrowLeftIcon className="w-4 h-4" />
      <span className="font-medium text-sm">{useTranslations('navigation')('home')}</span>
    </Link>
  )
}

const BreadcrumbPath = ({ pathname, customTitle }: { pathname: string; customTitle?: string }) => {
  const t = useTranslations('navigation')
  const locale = useLocale()

  // Remove locale from pathname and filter out empty segments
  const pathSegments = pathname.split('/').filter(Boolean)
  const nonLocaleSegments = pathSegments.filter(segment => segment !== locale)

  // Mapping of route segments to translation keys
  const routeToTranslationKey: Record<string, string> = {
    'privacy-policy': 'privacy',
    'terms-of-service': 'terms',
    'shipping-policy': 'shipping',
    'tokutei-shoutorihiki': 'tokutei',
    success: 'success',
  }

  return (
    <nav className="flex items-center space-x-2 text-sm">
      <Link
        href={`/${locale}`}
        className="text-gray-500 hover:text-black transition-colors duration-200"
      >
        <HomeIcon className="w-4 h-4" />
      </Link>

      {nonLocaleSegments.map((segment, index) => {
        // Build the full path including locale for navigation
        const fullPath = `/${locale}/${nonLocaleSegments.slice(0, index + 1).join('/')}`
        const isLast = index === nonLocaleSegments.length - 1

        // Get the translated title
        const translationKey = routeToTranslationKey[segment]
        const title =
          customTitle && isLast ? customTitle : translationKey ? t(translationKey) : segment

        return (
          <div key={fullPath} className="flex items-center space-x-2">
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
                href={fullPath}
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
  const locale = useLocale()

  // Don't show breadcrumb on home page
  if (pathname === `/${locale}` || pathname === '/') {
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
