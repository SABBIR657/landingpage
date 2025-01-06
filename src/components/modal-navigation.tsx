'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavLink } from '@/components/nav-link'
import { SocialLink } from '@/components/social-link'

interface ModalNavigationProps {
  isOpen: boolean
  onClose: () => void
}

export function ModalNavigation({ isOpen, onClose }: ModalNavigationProps) {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize() // Set initial width
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { type: "spring", damping: 25, stiffness: 200 }
            }}
            exit={{ opacity: 0, y: -100 }}
            style={{ width: Math.min(windowWidth * 0.9, 800) }} // 90% of screen width, max 800px
            className="fixed left-1/2 top-4 z-50 max-h-[calc(100vh-2rem)] -translate-x-1/2 overflow-y-auto rounded-3xl bg-black p-8"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between bg-black pb-4">
              <h2 className="text-xl font-normal text-white">Navigation</h2>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onClose}
                className="text-white hover:text-white/80"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            <nav className="mt-8 flex flex-col gap-6">
              <NavLink href="/case-studies" count={13}>
                Case Studies
              </NavLink>
              <NavLink href="/agency">Our Agency</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
              <NavLink href="/news">News</NavLink>
            </nav>

            <div className="mt-8">
              <p className="mb-4 text-sm text-white/60">Follow us</p>
              <div className="flex gap-4">
                <SocialLink href="https://instagram.com">Instagram</SocialLink>
                <SocialLink href="https://facebook.com">Facebook</SocialLink>
                <SocialLink href="https://twitter.com">Twitter</SocialLink>
                <SocialLink href="https://awwwards.com">Awwwards</SocialLink>
              </div>
              <Button 
                className="mt-8 w-full bg-[#4F46E5] text-white hover:bg-[#4338CA]"
              >
                Get in touch
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

