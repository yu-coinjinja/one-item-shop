"use client";

import Image from "next/image";
import BuyButton from "@/components/BuyButton";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity for line art (fades out as user scrolls)
  const lineArtOpacity = Math.max(0, 1 - scrollY / 400);
  // Calculate opacity for real photo (fades in as user scrolls)
  const realPhotoOpacity = Math.min(1, scrollY / 400);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative flex justify-center items-center h-screen overflow-hidden">
        {/* Line Art Image */}
        <div
          className="absolute inset-0 flex justify-center items-center transition-opacity duration-300"
          style={{ opacity: lineArtOpacity }}
        >
          <div className="relative w-80 md:w-96 h-80 md:h-96">
            <Image
              src="/lineart.png"
              alt="Takashi Yamamura Line Art"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Real Photo */}
        <div
          className="absolute inset-0 flex justify-center items-center transition-opacity duration-300"
          style={{ opacity: realPhotoOpacity }}
        >
          <div className="relative w-80 md:w-96 h-80 md:h-96">
            <Image
              src="/real.jpg"
              alt="Takashi Yamamura"
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>

        {/* Name and Message */}
        <div
          className={`absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="mb-4 font-light text-black text-5xl md:text-7xl tracking-wide">
            Takashi Yamamura
          </h1>
          <p className="font-light text-gray-700 text-lg md:text-xl italic">
            Welcome to my store
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="bottom-8 left-1/2 absolute -translate-x-1/2 animate-bounce transform">
          <div className="flex justify-center border-2 border-black rounded-full w-6 h-10">
            <div className="bg-black mt-2 rounded-full w-1 h-3 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Merchandise Section */}
      <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-light text-black text-4xl md:text-5xl tracking-wide">
              Merchandise
            </h2>
            <div className="bg-black mx-auto w-24 h-px"></div>
          </div>

          {/* T-Shirt Showcase */}
          <div className="items-center gap-16 grid lg:grid-cols-2">
            {/* Product Image */}
            <div className="group relative">
              <div className="bg-white shadow-2xl rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500 transform">
                <div className="relative aspect-square">
                  <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-br from-gray-100 to-white">
                    <div className="text-gray-300 text-8xl">👕</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <div className="inline-block bg-black mb-6 px-4 py-2 font-medium text-white text-sm tracking-wide">
                  LIMITED EDITION
                </div>

                <h3 className="mb-4 font-light text-black text-3xl md:text-4xl tracking-wide">
                  Signature T-Shirt
                </h3>

                <p className="mb-8 text-gray-600 text-lg leading-relaxed">
                  Premium quality cotton t-shirt featuring exclusive designs.
                  Each piece is carefully crafted to represent my unique style
                  and aesthetic.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {[
                  { label: "Material", value: "100% Premium Cotton" },
                  { label: "Design", value: "Exclusive Artist Graphics" },
                  { label: "Sizes", value: "S, M, L, XL, XXL" },
                  { label: "Edition", value: "Limited Release" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-gray-200 border-b"
                  >
                    <span className="font-medium text-black">
                      {feature.label}
                    </span>
                    <span className="text-gray-600">{feature.value}</span>
                  </div>
                ))}
              </div>

              {/* Buy Button */}
              <div className="pt-8">
                <BuyButton />
                <p className="mt-4 text-gray-500 text-sm text-center">
                  Free worldwide shipping • Authentic merchandise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black py-16 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="gap-8 grid md:grid-cols-4">
            {/* Artist Name */}
            <div className="md:col-span-2">
              <h4 className="mb-4 font-light text-2xl tracking-wide">
                Takashi Yamamura
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Official merchandise store featuring exclusive designs and
                premium quality apparel.
              </p>
            </div>

            {/* Legal Links */}
            <div>
              <h5 className="mb-4 font-medium tracking-wide">Legal</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
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
                  <div className="flex space-x-2">
                    <div className="flex justify-center items-center bg-white rounded w-8 h-5 font-bold text-black text-xs">
                      💳
                    </div>
                    <div className="flex justify-center items-center bg-white rounded w-8 h-5 font-bold text-black text-xs">
                      🏦
                    </div>
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
              © 2024 Takashi Yamamura Official Store. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
