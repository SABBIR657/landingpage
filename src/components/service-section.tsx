'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface Service {
  title: string
  caseStudy?: {
    title: string
    image: string
  }
}

const services: Service[] = [
  {
    title: "E-commerce",
    caseStudy: {
      title: "Alveena Casa",
      image: "/images/background2.jpg"
    }
  },
  {
    title: "Website Design",
    caseStudy: {
      title: "Romans & Partners",
      image: "/images/background1.jpg"
    }
  },
  {
    title: "Digital Products",
    caseStudy: {
      title: "Fudli App",
      image: "/images/background4.jpg"
    }
  },
  {
    title: "Brand Identities",
    caseStudy: {
      title: "Tech SuperPower",
      image: "/images/background2.jpg"
    }
  }
]

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-black px-4 py-24 text-white md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-16 text-xl text-white/60">
          Our team of experts can help you with...
        </p>

        <div className="relative space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative cursor-pointer"
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
            >
              <h3 className="text-5xl font-bold leading-tight transition-colors duration-300 hover:text-[#4F46E5] md:text-6xl lg:text-7xl">
                {service.title}
              </h3>
              
              <AnimatePresence>
                {activeIndex === index && service.caseStudy && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-4"
                  >
                    <div className="text-right">
                      <p className="text-sm text-white/60">Latest Case Study</p>
                      <p className="text-lg font-medium">{service.caseStudy.title}</p>
                    </div>
                    <div className="relative h-24 w-24 overflow-hidden rounded-lg">
                      <Image
                        src={service.caseStudy.image}
                        alt={service.caseStudy.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <ArrowRight className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <hr className="border-t border-white/10 mt-24 mb-24" />
        
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold text-[#4F46E5] md:text-6xl lg:text-7xl">
              Creative Agency
            </h2>
            <p className="mt-8 text-xl text-white/80 leading-relaxed">
              We are an award-winning creative agency based in London, focused on E-Commerce, Web Design London, Digital Products, Branding and SEO.
            </p>
          </div>

          <div className="flex gap-8">
            <div className="rounded-full border border-[#4F46E5] px-8 py-4">
              <span className="text-2xl font-bold">300+ Projects</span>
            </div>
            <div className="rounded-full border border-[#4F46E5] px-8 py-4">
              <span className="text-2xl font-bold">15 Awards</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mx-auto max-w-7xl">
        <hr className="border-t border-white/10 mt-24 mb-24" />
        
   
      </div> */}
    </section>
  )
}

