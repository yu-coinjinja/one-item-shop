'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import LanguageSwitcher from './LanguageSwitcher'

type NavLink = {
  name: string
  href: '/shipping-policy' | '/privacy-policy' | '/terms-of-service'
}

interface NavbarProps {
  showOnScroll?: boolean
  scrollThreshold?: number
}

// Visual layer - Navigation components
const BrandLogo = ({ brandName }: { brandName: string }) => (
  <Link
    href="/"
    className="flex items-center space-x-2 font-bold text-gray-900 hover:text-gray-700 text-xl transition-colors"
  >
    <span>{brandName}</span>
  </Link>
)

const NavigationLinks = ({ links }: { links: NavLink[] }) => (
  <div className="hidden md:flex items-center space-x-8">
    {links.map(link => (
      <Link
        key={link.href}
        href={link.href}
        className="px-3 py-2 rounded-md font-medium text-gray-700 hover:text-gray-900 text-sm transition-colors"
      >
        {link.name}
      </Link>
    ))}
  </div>
)

const MobileMenuButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="md:hidden inline-flex justify-center items-center hover:bg-gray-100 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset text-gray-700 hover:text-gray-900"
    aria-expanded="false"
  >
    <span className="sr-only">Open main menu</span>
    <svg
      className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
    <svg
      className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
)

const MobileMenu = ({
  links,
  isOpen,
  onLinkClick,
}: {
  links: NavLink[]
  isOpen: boolean
  onLinkClick: () => void
}) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{
      opacity: isOpen ? 1 : 0,
      height: isOpen ? 'auto' : 0,
    }}
    transition={{ duration: 0.3 }}
    className="md:hidden bg-white border-gray-200 border-t overflow-hidden"
  >
    <div className="space-y-1 px-2 pt-2 pb-3">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className="block hover:bg-gray-50 px-3 py-2 rounded-md font-medium text-gray-700 hover:text-gray-900 text-base"
        >
          {link.name}
        </Link>
      ))}
    </div>
  </motion.div>
)

// Main component
export default function Navbar({ showOnScroll = false, scrollThreshold = 100 }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const t = useTranslations('navigation')

  // Create navigation data using translations
  const navigationData = {
    brand: {
      name: 'TH オフィシャルストア',
    },
    links: [
      { name: t('shipping'), href: '/shipping-policy' as const },
      { name: t('privacy'), href: '/privacy-policy' as const },
      { name: t('terms'), href: '/terms-of-service' as const },
    ],
  }

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  // Check if we're on the home page
  const isHomePage = pathname === '/' || pathname.match(/^\/[a-z]{2}(-[a-z]{2})?$/)

  // Animation values for scroll-based navbar
  const navbarOpacity = useTransform(scrollY, [0, scrollThreshold], [0, 1])
  const navbarY = useTransform(scrollY, [0, scrollThreshold], [-100, 0])

  // Determine if navbar should show immediately (not on home page or when showOnScroll is false)
  const shouldShowImmediately = !isHomePage || !showOnScroll

  return (
    <>
      <motion.nav
        className="top-0 right-0 left-0 z-50 fixed bg-white/90 backdrop-blur-md border-gray-200 border-b"
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
            <BrandLogo brandName={navigationData.brand.name} />
            <div className="flex items-center space-x-4">
              <NavigationLinks links={navigationData.links} />
              <LanguageSwitcher />
            </div>
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
