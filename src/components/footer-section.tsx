'use client'

import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    href: '#',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    href: '#',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: '#',
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-white py-16">
      <div className="container grid gap-8 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-black leading-tight md:text-5xl lg:text-6xl lg:leading-[1.1]">
            We love crafting unforgettable digital experiences, brands and websites with people like you.
          </h2>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-black">Get in touch</h3>
            <div className="space-y-2">
              <p className="text-xl font-medium text-black">+44 207 112 82 85</p>
              <p className="text-xl">
                <Link href="mailto:contact@artistsweb.com" className="hover:underline text-black">
                  contact@artistsweb.com
                </Link>
              </p>
            </div>
            <p className="text-xl text-black">
              Artistsweb, 18 Soho Square, London,<br />W1D 3QL, United Kingdom
            </p>
          </div>
        </div>

        <div className="space-y-8 md:ml-auto md:text-right">
          <div className="flex justify-between items-center bg-black p-4 rounded-lg border border-gray-800">
            <p className="text-lg font-medium text-white">Follow us</p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative flex h-10 w-10 items-center justify-center"
                >
                  <span className="absolute inset-0 scale-50 rounded-full bg-gray-100 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100" />
                  <link.icon className="relative h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-2xl bg-[#ecf1f4] p-8 flex flex-col items-center text-center">
            <h3 className="text-3xl font-bold text-black">Let&apos;s get started</h3>
            <p className="text-lg text-black">We&apos;d love to hear about your project.</p>
            <Button size="lg" className="rounded-full bg-blue-600 px-8 hover:bg-blue-700 w-[80%]">
              Get in touch
            </Button>
          </div>
        </div>
      </div>

      <div className="container mt-16 flex flex-col justify-between gap-4 px-4 text-sm text-gray-500 md:flex-row md:items-center md:px-6">
        <p>© 2025 Artistweb Ltd · All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}

