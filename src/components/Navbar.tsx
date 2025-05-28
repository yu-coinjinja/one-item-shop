'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Data layer - Navigation configuration
const navigationData = {
  brand: {
    name: 'フランクフルト林 Official Store',
    href: '/',
  },
  links: [
    { name: 'Home', href: '/' },
    { name: 'Privacy', href: '/privacy-policy' },
    { name: 'Terms', href: '/terms-of-service' },
    { name: 'Shipping', href: '/shipping-policy' },
    { name: '特定商取引法', href: '/tokutei-shoutorihiki' },
  ],
}

interface NavbarProps {
  showOnScroll?: boolean
  scrollThreshold?: number
}

// Visual layer - Navigation components
const BrandLogo = ({ brand }: { brand: typeof navigationData.brand }) => (
  <Link
    href={brand.href}
    className="font-medium text-white hover:text-gray-300 text-xl md:text-2xl tracking-wide transition-colors duration-200"
  >
    {brand.name}
  </Link>
)

const NavigationLinks = ({ links }: { links: typeof navigationData.links }) => (
  <div className="hidden md:flex items-center space-x-8">
    {links.map(link => (
      <Link
        key={link.href}
        href={link.href}
        className="text-gray-300 hover:text-white transition-colors duration-200"
      >
        {link.name}
      </Link>
    ))}
  </div>
)

const MobileMenuButton = () => (
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
)

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
          <BrandLogo brand={navigationData.brand} />
          <NavigationLinks links={navigationData.links} />
          <MobileMenuButton />
        </div>
      </div>
    </motion.nav>
  )
}
