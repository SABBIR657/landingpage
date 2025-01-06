'use client'

import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section className="bg-[#fff]  px-4 py-24 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <div>
            <p className="text-sm font-medium text-black/60">Services</p>
            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-medium text-black">E-Commerce</h3>
              <h3 className="text-2xl font-medium text-black">Website Design</h3>
              <h3 className="text-2xl font-medium text-black">Web Development</h3>
              <h3 className="text-2xl font-medium text-black">Digital Products</h3>
              <h3 className="text-2xl font-medium text-black">Brand Identities</h3>
              <h3 className="text-2xl font-medium text-black">SEO Optimisation</h3>
            </div>
          </div>

          {/* Right Column */}
          <div className="rounded-3xl bg-[#4F46E5]  p-8 lg:p-12">
            <h2 className="text-3xl font-medium text-white lg:text-4xl">
              Let's start with a conversation about how we can help you! Get in touch, we're a nice bunch.
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-[#fff] text-black hover:bg-[#4338CA]">
                Let's talk
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#fff]  bg-transparent text-[#fff] hover:bg-[#4F46E5] hover:text-white"   
              >
                0207 112 82 85
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
