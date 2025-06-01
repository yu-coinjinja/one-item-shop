'use client'

import BuyButton from '@/components/BuyButton'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

// Note: Since this is a client component, we'll need to handle SEO differently
// We'll add a separate metadata export or use next/head for dynamic SEO

export default function Home() {
  const { scrollY } = useScroll()
  const t = useTranslations('homepage')

  // Animation breakpoints
  const transitionStart = 200
  const transitionEnd = 600
  const releasePoint = 600

  // Monitor scroll to update image positioning

  // Transform scroll values to animation values
  const lineArtOpacity = useTransform(scrollY, [0, transitionStart, transitionEnd], [1, 1, 0])
  const realPhotoOpacity = useTransform(
    scrollY,
    [transitionStart, transitionEnd, transitionEnd + 200, transitionEnd + 300],
    [0, 1, 1, 0]
  )
  const imageScale = useTransform(
    scrollY,
    [0, transitionStart, transitionEnd, transitionEnd + 600],
    [1, 1.1, 1.1, 0.01]
  )

  // Scroll indicator should disappear when real image appears
  const scrollIndicatorOpacity = useTransform(
    scrollY,
    [0, transitionStart, transitionEnd],
    [1, 1, 0]
  )

  const finalContentOpacity = useTransform(
    scrollY,
    [releasePoint - 100, releasePoint + 100],
    [0, 1]
  )

  return (
    <main className="z-0 relative min-h-screen">
      <Navbar showOnScroll={true} scrollThreshold={transitionEnd + 300} />

      {/* Fixed Image Container - only fixed until real image is fully shown */}
      <motion.div className="-z-1 fixed flex justify-center items-center w-full h-full">
        {/* Line Art Image */}
        <motion.div
          className="top-1/2 left-1/2 absolute inset-0 flex justify-center items-center w-80 md:w-[600px] lg:w-[800px] h-80 md:h-[600px] lg:h-[800px] -translate-x-1/2 -translate-y-1/2"
          style={{ opacity: lineArtOpacity, scale: imageScale }}
        >
          <Image
            src="/line.jpg"
            alt="Taichi Hayashi Line Art"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </motion.div>

        {/* Real Photo */}
        <motion.div
          className="top-1/2 left-1/2 absolute inset-0 flex justify-center items-center w-80 md:w-[600px] lg:w-[800px] h-80 md:h-[600px] lg:h-[800px] -translate-x-1/2 -translate-y-1/2"
          style={{ opacity: realPhotoOpacity, scale: imageScale }}
        >
          <Image
            src="/real.jpg"
            alt="Taichi Hayashi"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </motion.div>

        {/* Scroll Indicator - disappears when real image appears */}
        <motion.div
          className="bottom-8 left-1/2 absolute -translate-x-1/2 transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          style={{ opacity: scrollIndicatorOpacity }}
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
      </motion.div>

      {/* Spacer for scroll effect - adjusted for new behavior */}
      <div style={{ height: `min(100vh, ${transitionEnd + 300}px)` }}></div>

      {/* Final Content */}
      <motion.div style={{ opacity: finalContentOpacity }}>
        {/* Name and Message - Reappears after transition */}
        <section className="px-4 sm:px-6 lg:px-8 pt-[80vh] pb-32 md:pb-64 text-center">
          <div className="flex flex-col items-center gap-3 mx-auto">
            <motion.h1
              className="mb-4 font-black text-black text-3xl md:text-7xl tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {t('hero.title')}
            </motion.h1>
            <motion.h2
              className="mb-6 font-light text-black text-xl md:text-3xl tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('hero.subtitle')}
            </motion.h2>
            <motion.p
              className="max-w-5xl font-light text-gray-700 text-sm md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t('hero.description')}
            </motion.p>
          </div>
        </section>

        {/* Merchandise Section */}
        <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">
          <div className="mx-auto max-w-6xl">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 font-black text-black text-4xl md:text-5xl tracking-wide">
                {t('collection.title')}
              </h2>
              <div className="bg-black mx-auto w-24 h-px"></div>
            </motion.div>

            {/* T-Shirt Showcase */}
            <div className="items-center gap-16 grid lg:grid-cols-2">
              {/* Product Image */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-white shadow-2xl rounded-lg overflow-hidden transition-transform duration-500 transform"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-square">
                    <Image
                      src="/item1.jpg"
                      alt={t('collection.productName')}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Product Details */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="inline-block bg-black mb-6 px-4 py-2 font-medium text-white text-sm tracking-wide">
                    {t('collection.limitedEdition')}
                  </div>

                  <h3 className="mb-4 font-light text-black text-3xl md:text-4xl tracking-wide">
                    {t('collection.productName')}
                  </h3>

                  <p className="mb-8 text-gray-600 text-lg leading-relaxed">
                    {t('collection.productDescription')}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {[
                    {
                      label: t('collection.features.material'),
                      value: t('collection.features.materialValue'),
                    },
                    {
                      label: t('collection.features.design'),
                      value: t('collection.features.designValue'),
                    },
                    {
                      label: t('collection.features.sizes'),
                      value: t('collection.features.sizesValue'),
                    },
                    {
                      label: t('collection.features.edition'),
                      value: t('collection.features.editionValue'),
                    },
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
                    {t('collection.shipping')}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <Footer />
      </motion.div>
    </main>
  )
}
