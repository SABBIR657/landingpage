'use client'

import { useInView } from 'react-intersection-observer'
import { motion, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

function AnimatedNumber({ value }: { value: number }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  const springConfig = {
    damping: 30,
    stiffness: 200,
  }

  const spring = useSpring(0, springConfig)

  useEffect(() => {
    if (inView) {
      spring.set(value)
    }
  }, [spring, value, inView])

  const display = useTransform(spring, (current) => Math.round(current))

  return (
    <motion.span ref={ref} className="tabular-nums">
      {display}
    </motion.span>
  )
}

export function StatsSection() {
  return (
    <section className="container mx-auto px-4 py-24 md:px-6 text-black">
      <div className="flex flex-col gap-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Let our experienced team elevate your digital goals
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-row justify-start gap-16">
            <div className="space-y-4">
              <div className="text-6xl font-bold md:text-7xl lg:text-8xl">
                <AnimatedNumber value={250} />
              </div>
              <p className="text-xl font-medium">Five-Star Reviews</p>
            </div>

            <div className="space-y-4">
              <div className="text-6xl font-bold md:text-7xl lg:text-8xl">
                <AnimatedNumber value={10} />
              </div>
              <p className="text-xl font-medium">In-House Experts</p>
            </div>
          </div>

          <p className="text-xl text-muted-foreground">
            We have successfully completed over 300+ projects from a variety of industries. In our team,
            designers work alongside developers and digital strategists, we believe this is our winning
            recipe for creating digital products that make an impact.
          </p>
        </div>
      </div>
    </section>
  )
}

