'use client'

import BuyButton from '@/components/BuyButton'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PaymentIcon } from 'react-svg-credit-card-payment-icons'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Animation breakpoints
  const transitionStart = 200
  const transitionEnd = 600
  const releasePoint = 800

  // Transform scroll values to animation values
  const lineArtOpacity = useTransform(scrollY, [0, transitionStart, transitionEnd], [1, 1, 0])
  const realPhotoOpacity = useTransform(scrollY, [transitionStart, transitionEnd], [0, 1])
  const imageScale = useTransform(scrollY, [0, transitionStart], [1, 1.1])

  // Content animations
  const initialContentOpacity = useTransform(
    scrollY,
    [0, transitionStart - 50, transitionStart],
    [1, 1, 0]
  )
  const finalContentOpacity = useTransform(scrollY, [releasePoint, releasePoint + 200], [0, 1])
  const finalContentY = useTransform(scrollY, [releasePoint, releasePoint + 200], [50, 0])

  return (
    <main className="bg-white min-h-screen" style={{ fontFamily: 'var(--font-shippori-mincho)' }}>
      {/* Fixed Image Container */}
      <motion.div
        className="top-1/2 left-1/2 z-10 fixed flex justify-center items-center"
        style={{
          x: '-50%',
          y: '-50%',
          scale: imageScale,
        }}
        animate={{
          opacity: scrollY.get() < releasePoint ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Line Art Image */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          style={{ opacity: lineArtOpacity }}
        >
          <div className="relative w-80 md:w-128 h-80 md:h-128">
            <Image
              src="/line.png"
              alt="Taichi Hayashi Line Art"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Real Photo */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          style={{ opacity: realPhotoOpacity }}
        >
          <div className="relative w-80 md:w-128 h-80 md:h-128">
            <Image
              src="/real.png"
              alt="Taichi Hayashi"
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Initial Content */}
      <motion.section
        className="relative h-screen overflow-hidden"
        style={{
          opacity: initialContentOpacity,
        }}
      >
        {/* Name and Message */}
        <motion.div
          className="bottom-32 left-1/2 absolute text-center -translate-x-1/2 transform"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            y: isLoaded ? 0 : 30,
          }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="mb-4 font-black text-black text-5xl md:text-7xl tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            フランクフルト林
          </motion.h1>
          <motion.h2
            className="mb-6 font-light text-black text-2xl md:text-3xl tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Taichi Hayashi
          </motion.h2>
          <motion.p
            className="max-w-4xl font-light text-gray-700 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            日本で最も魅力的な俳優からの限定グッズをご覧ください。エレガンスと洗練さを反映した限定アイテム。
          </motion.p>
          <motion.p
            className="mb-4 max-w-4xl font-light text-gray-700 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            Discover exclusive merchandise from Japan&apos;s most captivating actor. Limited edition
            items that reflect elegance and sophistication.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="bottom-8 left-1/2 absolute -translate-x-1/2 transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            className="flex justify-center border-2 border-black rounded-full w-6 h-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="bg-black mt-2 rounded-full w-1 h-3"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Spacer for scroll effect */}
      <div style={{ height: `${releasePoint}px` }}></div>

      {/* Final Content */}
      <motion.div
        style={{
          opacity: finalContentOpacity,
          y: finalContentY,
        }}
      >
        {/* Name and Message - Reappears after transition */}
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <motion.h1
              className="mb-4 font-black text-black text-5xl md:text-7xl tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              フランクフルト林
            </motion.h1>
            <motion.h2
              className="mb-6 font-light text-black text-2xl md:text-3xl tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Taichi Hayashi
            </motion.h2>
            <motion.p
              className="max-w-4xl font-light text-gray-700 text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              日本で最も魅力的な俳優からの限定グッズをご覧ください。エレガンスと洗練さを反映した限定アイテム。
            </motion.p>
            <motion.p
              className="mb-4 max-w-4xl font-light text-gray-700 text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Discover exclusive merchandise from Japan&apos;s most captivating actor. Limited
              edition items that reflect elegance and sophistication.
            </motion.p>
          </div>
        </section>

        {/* Merchandise Section */}
        <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-20">
          <div className="mx-auto max-w-6xl">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 font-black text-black text-4xl md:text-5xl tracking-wide">
                Exclusive Collection
              </h2>
              <div className="bg-black mx-auto w-24 h-px"></div>
            </motion.div>

            {/* T-Shirt Showcase */}
            <div className="items-center gap-16 grid lg:grid-cols-2">
              {/* Product Image */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-white shadow-2xl rounded-lg overflow-hidden transition-transform duration-500 transform"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-square">
                    <Image src="/item1.jpg" alt="Signature T-Shirt" fill className="object-cover" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Product Details */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="inline-block bg-black mb-6 px-4 py-2 font-medium text-white text-sm tracking-wide">
                    LIMITED EDITION
                  </div>

                  <h3 className="mb-4 font-light text-black text-3xl md:text-4xl tracking-wide">
                    Signature T-Shirt
                  </h3>

                  <p className="mb-8 text-gray-600 text-lg leading-relaxed">
                    Premium quality cotton t-shirt featuring exclusive designs. Each piece is
                    carefully crafted to represent my unique style and aesthetic.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {[
                    { label: 'Material', value: '100% Premium Cotton' },
                    { label: 'Design', value: 'Exclusive Artist Graphics' },
                    { label: 'Sizes', value: 'S, M, L, XL, XXL' },
                    { label: 'Edition', value: 'Limited Release' },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between items-center py-3 border-gray-200 border-b"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="font-medium text-black">{feature.label}</span>
                      <span className="text-gray-600">{feature.value}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Buy Button */}
                <motion.div
                  className="pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <BuyButton />
                  <p className="mt-4 text-gray-500 text-sm text-center">
                    Free worldwide shipping • Authentic merchandise
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <motion.footer
          className="bg-black py-16 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="gap-8 grid md:grid-cols-4">
              {/* Artist Name */}
              <div className="md:col-span-2">
                <h4 className="mb-4 font-light text-2xl tracking-wide">
                  フランクフルト林 (Taichi Hayashi)
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  Official merchandise store featuring exclusive designs and premium quality
                  apparel.
                </p>
              </div>

              {/* Legal Links */}
              <div>
                <h5 className="mb-4 font-medium tracking-wide">Legal</h5>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="/privacy-policy"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms-of-service"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="/shipping-policy"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Shipping Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Payment & Social */}
              <div>
                <h5 className="mb-4 font-medium tracking-wide">Connect</h5>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2 text-gray-400 text-sm">Payment Methods</p>
                    <div className="flex space-x-2 h-6">
                      <PaymentIcon type="Visa" format="flatRounded" />
                      <PaymentIcon type="Mastercard" format="flatRounded" />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-gray-400 text-sm">Social Media</p>
                    <div className="flex space-x-3">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        Instagram
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="mt-12 pt-8 border-gray-800 border-t text-center">
              <p className="text-gray-400 text-sm">
                © 2025 フランクフルト林 (Taichi Hayashi) Official Store. All rights reserved.
              </p>
            </div>
          </div>
        </motion.footer>
      </motion.div>
    </main>
  )
}
