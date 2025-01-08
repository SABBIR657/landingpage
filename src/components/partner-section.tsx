'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: "Jaeger-LeCoultre", logo: "/logos/logo1.jpeg" },
  { name: "TGA", logo: "/logos/logo2.jpg"},
  { name: "Luxe Collective", logo: "/logos/logo3.jpg" },
  { name: "Richemont", logo: "/logos/logo4.png" },
  { name: "IPC Capital Markets", logo: "/logos/logo5.png" },
  { name: "Swiss Luxury", logo: "/logos/logo6.jpg" },
  { name: "Global Ventures", logo: "/logos/logo7.png" },
  { name: "Elite Brands", logo: "/logos/logo8.png" },
  { name: "Premium Group", logo: "/logos/logo9.jpg" },
  { name: "Luxury Holdings", logo: "/logos/logo10.png" },
  { name: "First Class", logo: "/logos/logo11.jpg" },
  { name: "Royal Investments", logo: "/logos/logo12.jpg" },
  { name: "Crown Jewels", logo: "/logos/logo13.png" },
  { name: "Diamond Group", logo: "/logos/logo14.jpg" },
  { name: "Prestige Partners", logo: "/logos/logo15.png" },
]

export function PartnersSection() {
  const [currentGroup, setCurrentGroup] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % Math.ceil(partners.length / 5))
    }, 4000) // Change every 4 seconds

    return () => clearInterval(timer)
  }, [])

  const getCurrentGroup = () => {
    const start = (currentGroup * 5) % partners.length
    return partners.slice(start, start + 5)
  }

//   const getNextGroup = () => {
//     const start = ((currentGroup + 1) * 5) % partners.length
//     return partners.slice(start, start + 5)
//   }

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6 lg:px-8">
      <h2 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-black">
        From ambitious startups to global companies, we partner with great businesses and industry leaders.
      </h2>

      <div className="relative mt-16">
        <div className="flex justify-center w-full overflow-hidden">
          <div className="relative h-40 w-full max-w-5xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentGroup}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="absolute inset-0 flex justify-between"
              >
                {getCurrentGroup().map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { delay: index * 0.1 }
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.8,
                      transition: { duration: 0.2 }
                    }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="relative h-28 w-40">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-lg font-medium text-gray-600 text-center">
                      {partner.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

