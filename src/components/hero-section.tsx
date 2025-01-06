'use client'

import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative bg-slate-500 min-h-200 mt-3 overflow-hidden">
      {/* Background "AW" text */}
      <div 
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
        style={{
          background: `
            repeating-linear-gradient(
              -45deg,
              #f8f9fa,
              #f8f9fa 10px,
              #ffffff 10px,
              #ffffff 20px
            )
          `,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black leading-none">
          AW
        </span>
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Crafting digital{" "}
            <span className="block text-[#4F46E5]">experiences</span>
            since 2004
          </h1>
        </motion.div>
      </div>
    </section>
  )
}

