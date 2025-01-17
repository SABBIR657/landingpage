'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import { ModalNavigation } from "@/components/modal-navigation"
import { WorkSection } from "@/components/work-section"
import { ServicesSection } from "@/components/service-section"
import { DigitalPartner } from "@/components/digital-partner"
import { PartnersSection } from "@/components/partner-section"
import { FeedbackSection } from "@/components/feedback-section"
import { LoadingScreen } from "@/components/loading-screen"
import { HeroSection } from "@/components/hero-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer-section"
import { SignInModal } from "@/components/sign-in-modal"
import { StatsSection } from "@/components/stats-section"

interface AwardProps {
  count: number
  label: string
}

const Award: React.FC<AwardProps> = ({ count, label }) => (
  <div className="flex items-center gap-4 animate-fade-in">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#000] text-white">
      <span className="text-lg font-medium">{count}</span>
    </div>
    <span className="text-lg text-black">{label}</span>
  </div>
)

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [currentAwardIndex, setCurrentAwardIndex] = useState(0)

  const awards = [
    { count: 15, label: "Website Awards" },
    { count: 500, label: "Satisfied Customers" },
    { count: 20, label: "Years on the Market" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAwardIndex((prev) => (prev + 1) % awards.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [awards.length])

  return (
    <>
    <LoadingScreen/>
    <div className="min-h-screen bg-white px-4 py-8 md:px-6 lg:px-8">
      <header className="flex items-center justify-between">
        <div className="text-xl font-bold text-black">AW</div>
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="border-[#4F46E5] bg-transparent text-black hover:bg-[#4F46E5] hover:text-white"
          >
            Get in touch
          </Button>
          <Button 
              variant ="secondary"
              onClick={() => setIsSignInOpen(true)}
             className="border-[#4F46E5] bg-transparent text-black hover:bg-[#4F46E5] hover:text-white"
            >
              Sign In
            </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsOpen(true)}
            className="text-black"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      <main className="mx-auto mt-24 max-w-7xl">
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-black md:text-6xl lg:[font-size:119.04px]">
          Crafting{" "}
          <span className="text-[#4F46E5]">Digital</span>
          <br />
          Experiences
        </h1>




        <div className="mt-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="h-[48px]">
            <Award 
              count={awards[currentAwardIndex].count} 
              label={awards[currentAwardIndex].label} 
            />
          </div>
          
          <p className="text-xl text-black md:max-w-md lg:max-w-lg">
            We build engaging websites, brands & innovative e-commerce solutions.
          </p>

          <Button size="lg" className="bg-[#4F46E5] hover:bg-[#4338CA]">
            Case Studies
          </Button>
        </div>
      </main>

      <WorkSection/>
      <ServicesSection/>
      <DigitalPartner/>
     
      <PartnersSection/>
      <StatsSection/>
      <HeroSection/>
      <ContactSection/>
    <FeedbackSection/>
    <Footer/>
  

      <ModalNavigation 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
       <SignInModal
          isOpen={isSignInOpen}
          onClose={() => setIsSignInOpen(false)}
        />
    </div>
    </>
  )
}

