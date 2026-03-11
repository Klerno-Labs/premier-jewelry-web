"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { images } from "@/config/images";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Now accepting new clients for Q4
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.15]">
              Elevating Business Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Innovation</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              We provide the strategic clarity and operational expertise your business needs to scale. From digital transformation to brand development, we are your partners in growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Start Your Project <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              priority={true}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <a href="#about" aria-label="Scroll down">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}