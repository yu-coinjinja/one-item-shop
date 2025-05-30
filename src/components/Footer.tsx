'use client'

import { motion } from 'framer-motion'
import { PaymentIcon } from 'react-svg-credit-card-payment-icons'

// Data layer - Footer configuration
const footerData = {
  artist: {
    name: 'フランクフルト林 (Taichi Hayashi)',
    description:
      'Official merchandise store featuring exclusive designs and premium quality apparel.',
  },
  legal: {
    title: 'リーガル',
    links: [
      { name: '特定商取引法に基づく表記', href: '/tokutei-shoutorihiki' },
      { name: 'プライバシー', href: '/privacy-policy' },
      { name: '利用規約', href: '/terms-of-service' },
      { name: '配送条件', href: '/shipping-policy' },
    ],
  },
  payment: {
    title: '支払い方法',
    methods: ['Visa', 'Mastercard'] as const,
  },
  social: {
    title: 'SNS',
    links: [
      { name: 'Instagram', href: 'https://www.instagram.com', icon: 'instagram' },
      { name: 'MyFans', href: 'http://myfans.jp/dekkai_chimpo', icon: 'myfans' },
      { name: 'OnlyFans', href: 'https://onlyfans.com/ffhys', icon: 'onlyfans' },
      { name: 'X', href: 'https://x.com/dekkai_chimpo', icon: 'x' },
    ],
  },
  copyright: '© 2025 フランクフルト林 (Taichi Hayashi) Official Store. All rights reserved.',
}

// Custom SVG Icons
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const MyFansIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 157 217" fill="currentColor">
    <g>
      <path d="M59.216,84.146 L33.449,84.146 L33.449,45.367 C33.449,20.527 53.659,0.319 78.499,0.319 C103.328,0.319 123.538,20.527 123.538,45.367 L123.538,47.258 L97.783,47.258 L97.783,45.367 C97.783,34.727 89.128,26.083 78.499,26.083 C67.859,26.083 59.216,34.727 59.216,45.367 L59.216,84.146 Z" />
      <path d="M78.499,61.165 C35.456,61.165 0.562,96.058 0.562,139.09 C0.562,182.124 35.456,217.015 78.499,217.015 C121.532,217.015 156.413,182.124 156.413,139.09 C156.413,96.058 121.532,61.165 78.499,61.165 Z M50.643,173.982 L65.843,147.67 C60.243,143.544 56.59,136.916 56.59,129.416 C56.59,116.906 66.734,106.75 79.256,106.75 C91.776,106.75 101.922,116.906 101.922,129.416 C101.922,136.916 98.276,143.544 92.669,147.67 L107.867,173.982 L50.643,173.982 Z" />
    </g>
  </svg>
)

const OnlyFansIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 375 250" fill="currentColor">
    <path
      className="opacity-80"
      d="M125,0C56,0,0,56,0,125c0,69,56,125,125,125,69,0,125-56,125-125C250,56,194,0,125,0ZM125,162.5c-20.75,0-37.5-16.75-37.5-37.5,0-20.75,16.75-37.5,37.5-37.5,20.75,0,37.5,16.75,37.5,37.5,0,20.75-16.75,37.5-37.5,37.5Z"
    />
    <path d="M265.5,93.75c31.76,9.14,69.25,0,69.25,0-10.88,47.5-45.38,77.25-95.13,80.87-19.12,44.38-63.25,75.38-114.62,75.38l37.5-119.19C201.05,8.3,220.81,0,312.23,0h62.77c-10.5,46.25-46.69,81.58-109.5,93.75Z" />
  </svg>
)

// Icon mapping
const iconMap = {
  instagram: InstagramIcon,
  x: XIcon,
  myfans: MyFansIcon,
  onlyfans: OnlyFansIcon,
}

// Visual layer - Footer components
const ArtistSection = ({ artist }: { artist: typeof footerData.artist }) => (
  <div className="md:col-span-2">
    <h4 className="mb-4 font-light text-lg md:text-2xl tracking-wide">{artist.name}</h4>
    <p className="text-gray-400 leading-relaxed">{artist.description}</p>
  </div>
)

const LegalSection = ({
  legal,
  payment,
}: {
  legal: typeof footerData.legal
  payment: typeof footerData.payment
}) => (
  <div>
    <h5 className="mb-4 font-medium tracking-wide">{legal.title}</h5>
    <ul className="space-y-2 mb-6 text-gray-400">
      {legal.links.map(link => (
        <li key={link.href}>
          <a href={link.href} className="hover:text-white transition-colors duration-200">
            {link.name}
          </a>
        </li>
      ))}
    </ul>

    <div>
      <p className="mb-4 font-medium tracking-wide">{payment.title}</p>
      <div className="flex space-x-2 h-6">
        {payment.methods.map(method => (
          <PaymentIcon key={method} type={method} format="flatRounded" />
        ))}
      </div>
    </div>
  </div>
)

const SocialSection = ({ social }: { social: typeof footerData.social }) => (
  <div>
    <h5 className="mb-4 font-medium tracking-wide">{social.title}</h5>
    <div className="flex flex-col space-y-3">
      {social.links.map(link => {
        const IconComponent = iconMap[link.icon as keyof typeof iconMap]
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <IconComponent className="w-5 h-5" />
            <span>{link.name}</span>
          </a>
        )
      })}
    </div>
  </div>
)

const CopyrightSection = ({ copyright }: { copyright: string }) => (
  <div className="mt-12 pt-8 border-gray-800 border-t font-sans text-center">
    <p className="text-gray-400 text-sm">{copyright}</p>
  </div>
)

export default function Footer() {
  return (
    <motion.footer
      className="bg-black py-16 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
          <ArtistSection artist={footerData.artist} />
          <LegalSection legal={footerData.legal} payment={footerData.payment} />
          <SocialSection social={footerData.social} />
        </div>
        <CopyrightSection copyright={footerData.copyright} />
      </div>
    </motion.footer>
  )
}
