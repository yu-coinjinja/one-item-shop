'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavbarProps {
  showOnScroll?: boolean
  scrollThreshold?: number
}

export default function Navbar({ showOnScroll = false, scrollThreshold = 900 }: NavbarProps) {
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  // For home page, show navbar only after scroll threshold
  const navbarOpacity = useTransform(scrollY, [scrollThreshold - 100, scrollThreshold], [0, 1])

  // Determine if navbar should be visible
  const shouldShow = !isHomePage || !showOnScroll

  return (
    <motion.nav
      className="top-0 right-0 left-0 z-50 fixed bg-black/90 backdrop-blur-sm border-gray-800 border-b"
      initial={{ opacity: shouldShow ? 1 : 0, y: shouldShow ? 0 : -100 }}
      animate={{
        opacity: shouldShow ? 1 : undefined,
        y: shouldShow ? 0 : undefined,
      }}
      style={isHomePage && showOnScroll ? { opacity: navbarOpacity } : {}}
      transition={{ duration: 0.3 }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="font-medium text-white hover:text-gray-300 text-xl md:text-2xl tracking-wide transition-colors duration-200"
          >
            フランクフルト林 Official Store
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              href="/shipping-policy"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Shipping
            </Link>
            <Link
              href="/tokutei-shoutorihiki"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              特定商取引法
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
