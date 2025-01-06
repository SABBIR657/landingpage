'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

interface Testimonial {
  quote: string
  author: string
  company: string
  logo: string
}

const testimonials: Testimonial[] = [
  {
    quote: "We have worked with Artistsweb to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I'd highly recommend them.",
    author: "Steven Glibberg",
    company: "TGA Mobility",
    logo: "/placeholder.svg"
  },
  {
    quote: "The team at Artistsweb delivered beyond our expectations. Their attention to detail and creative solutions helped transform our digital presence.",
    author: "Sarah Johnson",
    company: "Luxe Collective",
    logo: "/placeholder.svg"
  },
  {
    quote: "Outstanding service and exceptional results. They understood our vision perfectly and executed it flawlessly.",
    author: "Michael Chang",
    company: "Elite Brands",
    logo: "/placeholder.svg"
  },
  {
    quote: "A game-changing partnership that has revolutionized our online platform. Their expertise in both design and technology is unmatched.",
    author: "Emma Roberts",
    company: "Global Ventures",
    logo: "/placeholder.svg"
  }
]

export function FeedbackSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity1 = useTransform(scrollYProgress, [0, 0.25], [0, 1])
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.5], [0, 1])
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.75], [0, 1])
  const opacity4 = useTransform(scrollYProgress, [0.75, 1], [0, 1])

  const y1 = useTransform(scrollYProgress, [0, 0.25], [100, 0])
  const y2 = useTransform(scrollYProgress, [0.25, 0.5], [100, 0])
  const y3 = useTransform(scrollYProgress, [0.5, 0.75], [100, 0])
  const y4 = useTransform(scrollYProgress, [0.75, 1], [100, 0])

  const opacityArray = [opacity1, opacity2, opacity3, opacity4]
  const yArray = [y1, y2, y3, y4]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1a1a3d] to-black px-4 py-24 text-white md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-5xl font-bold md:text-6xl lg:text-7xl">
              Client Feedback
            </h2>
            <p className="mt-8 text-xl text-white/60">
              We're collaborators - We build tight-knit partnerships with our clients.
            </p>
          </div>

          <div className="flex items-center gap-3 text-white/60">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="flex h-6 w-6 items-center justify-center"
            >
              <div className="h-full w-full rounded-full border-2 border-white/60 border-t-transparent" />
            </motion.div>
            Keep scrolling
          </div>
        </div>

        <div 
          ref={containerRef}
          className="mt-16 space-y-4"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              style={{ opacity: opacityArray[index], y: yArray[index] }}
              className="rounded-3xl bg-white/5 p-8 backdrop-blur-sm"
            >
              <p className="text-2xl font-medium leading-relaxed md:text-3xl">
                "{testimonial.quote}"
              </p>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.logo}
                      alt={`${testimonial.company} logo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-white/60">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-[#4F46E5]">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

