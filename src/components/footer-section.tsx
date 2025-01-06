'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function FooterSection() {
  return (
    <footer className="bg-white px-4 py-24 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Content */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold text-black md:text-5xl lg:text-6xl">
              We love crafting unforgettable digital experiences, brands and websites with people like you.
            </h2>
            <div className="space-y-4 ">
              <p className="text-black/60">Get in touch</p>
              <p className="text-xl text-black  font-medium">+44 207 112 82 85</p>
              <p className="text-xl text-black font-medium">contact@artistsweb.com</p>
              <p className="text-xl text-black font-medium">
                Artistsweb, 18 Soho Square, London, W1D 3QL, United Kingdom
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {/* Contact Info */}
           

            {/* Get Started Card */}
            <div className="rounded-3xl bg-[#F8F9FC] p-8">
              <h3 className="text-3xl font-medium text-black">Let's get started</h3>
              <p className="mt-2 text-black/60">
                We'd love to hear about your project.
              </p>
              <Button 
                size="lg"
                className="mt-6 w-full bg-[#4F46E5] text-white hover:bg-[#4338CA] sm:w-auto"
              >
                Get in touch
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-24 flex flex-col items-start justify-between gap-8 border-t border-gray-200 pt-8 md:flex-row md:items-center">
          <p className="text-sm text-black/60">
            © 2025 Artistsweb Ltd · All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <p className="text-black">Follow us</p>
              <Link href="https://instagram.com" className="text-black hover:text-[#4F46E5]">
                Instagram
              </Link>
              <Link href="https://facebook.com" className="text-black hover:text-[#4F46E5]">
                Facebook
              </Link>
              <Link href="https://twitter.com" className="text-black hover:text-[#4F46E5]">
                Twitter
              </Link>
              <Link href="https://awwwards.com" className="text-black hover:text-[#4F46E5]">
                Awwwards
              </Link>
            </div>

            <div className="flex gap-4 text-sm text-black/60">
              <Link href="/privacy" className="hover:text-black">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-black">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
