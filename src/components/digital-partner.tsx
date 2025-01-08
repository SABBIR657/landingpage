import Image from 'next/image'
import { motion } from 'framer-motion'

export function DigitalPartner() {
  return (
    <>
      <section className="bg-white px-4 py-24 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-5xl font-bold text-black md:text-6xl lg:text-7xl">
                  Your Digital Partner
                </h2>
                <p className="mt-8 text-xl text-black/70 leading-relaxed max-w-xl">
                  We partner with companies of all sizes to solve complex business challenges and define their digital strategies and objectives that deliver results. We help bring ideas to life and create brands, websites & digital products that work.
                </p>

                <div className="mt-12 flex items-center gap-4">
                  <div className="flex -space-x-4">
                    <Image
                      src="/images/BBC.jpg"
                      alt="BBC"
                      width={48}
                      height={48}
                      className="rounded-full border-2 border-white bg-white"
                    />
                    <Image
                      src="/images/BMW.jpeg"
                      alt="BMW"
                      width={48}
                      height={48}
                      className="rounded-full border-2 border-white bg-white"
                    />
                    <Image
                      src="/images/costa.png"
                      alt="Costa"
                      width={48}
                      height={48}
                      className="rounded-full border-2 border-white bg-white"
                    />
                  </div>
                  <span className="text-black/60">Brands who have trusted us...</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#ecf1f4] rounded-3xl p-8 max-w-md ml-auto"
            >
              <div className="flex flex-col divide-y divide-black/10">
                <div className="pb-8 text-center">
                  <p className="text-6xl font-bold text-black">20</p>
                  <p className="mt-2 text-black/60">Years on the market</p>
                </div>
                <div className="pt-8 text-center">
                  <p className="text-6xl font-bold text-black">500</p>
                  <p className="mt-2 text-black/60">Satisfied Customers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Developer Image Section */}
      <section className="relative w-full h-[800px]">
        <Image
          src="/images/laptop.jpg"
          alt="Developer workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Optional overlay */}
      </section>
    </>
  )
}