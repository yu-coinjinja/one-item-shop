'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

// Data layer - Navigation configuration
const navigationData = {
  brand: {
    name: 'フランクフルト林 Official Store',
    href: '/',
  },
  links: [
    { name: '配送条件', href: '/shipping-policy' },
    { name: 'プライバシー', href: '/privacy-policy' },
    { name: '利用規約', href: '/terms-of-service' },
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
    className="font-medium text-black hover:text-gray-500 text-xl md:text-2xl tracking-wide transition-colors duration-200"
  >
    TH オフィシャルストア
  </Link>
)

const NavigationLinks = ({ links }: { links: typeof navigationData.links }) => (
  <div className="hidden md:flex items-center space-x-8">
    {links.map(link => (
      <Link
        key={link.href}
        href={link.href}
        className="text-gray-700 hover:text-black transition-colors duration-200"
      >
        {link.name}
      </Link>
    ))}
  </div>
)

const MobileMenuButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <div className="md:hidden">
    <button
      className="text-gray-700 hover:text-black transition-colors duration-200"
      onClick={onClick}
      aria-label="Toggle mobile menu"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  </div>
)

const MobileMenu = ({
  links,
  isOpen,
  onLinkClick,
}: {
  links: typeof navigationData.links
  isOpen: boolean
  onLinkClick: () => void
}) => (
  <motion.div
    className="md:hidden bg-white/95 backdrop-blur-sm border-gray-100 border-t"
    initial={{ opacity: 0, height: 0 }}
    animate={{
      opacity: isOpen ? 1 : 0,
      height: isOpen ? 'auto' : 0,
    }}
    transition={{ duration: 0.3 }}
    style={{ overflow: 'hidden' }}
  >
    <div className="space-y-3 px-4 py-4">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
          onClick={onLinkClick}
        >
          {link.name}
        </Link>
      ))}
    </div>
  </motion.div>
)

export default function Navbar({ showOnScroll = false, scrollThreshold = 900 }: NavbarProps) {
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // For home page, show navbar only after scroll threshold
  const navbarOpacity = useTransform(scrollY, [scrollThreshold - 100, scrollThreshold], [0, 1])
  const navbarY = useTransform(scrollY, [scrollThreshold - 100, scrollThreshold], [-100, 0])

  // Determine if navbar should be visible immediately (not on home page or not using scroll behavior)
  const shouldShowImmediately = !isHomePage || !showOnScroll

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        className="top-0 right-0 left-0 z-50 fixed bg-white/90 backdrop-blur-sm border-gray-100 border-b"
        initial={{
          opacity: shouldShowImmediately ? 1 : 0,
          y: shouldShowImmediately ? 0 : -100,
        }}
        animate={{
          opacity: shouldShowImmediately ? 1 : undefined,
          y: shouldShowImmediately ? 0 : undefined,
        }}
        style={isHomePage && showOnScroll ? { opacity: navbarOpacity, y: navbarY } : {}}
        transition={{ duration: 0.3 }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex justify-between items-center h-16">
            <BrandLogo brand={navigationData.brand} />
            <NavigationLinks links={navigationData.links} />
            <MobileMenuButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
          </div>
        </div>

        <MobileMenu
          links={navigationData.links}
          isOpen={isMobileMenuOpen}
          onLinkClick={closeMobileMenu}
        />
      </motion.nav>
    </>
  )
}
