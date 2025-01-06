'use client'

import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { WorkCard } from './work-card'

const works = [
  {
    title: "Romans & Partners",
    tags: ["UI/UX Design", "Property Portal"],
    imageUrl: "/images/background1.jpg",
    isLatest: true
  },
  {
    title: "Alveena Casa",
    tags: ["UI/UX Design", "E-commerce"],
    imageUrl: "/images/background2.jpg"
  },
  {
    title: "Fudli App",
    tags: ["E-commerce", "Digital Product"],
    imageUrl: "/images/background4.jpg"
  },
  {
    title: "Re-Core Pilates",
    tags: ["UI/UX Design", "Development"],
    imageUrl: "/images/background3.jpg"
  },
  {
    title: "Tech SuperPower",
    tags: ["UI/UX Design", "Development"],
    imageUrl: "/images/background2.jpg"
  }
]

export function WorkSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="mx-auto max-w-[100vw] px-4 py-24 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start lg:mb-24">
          <div className="flex items-center gap-4">
            <h2 className="text-5xl text-black font-bold">Work</h2>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200">
              <span className="text-lg text-black">13</span>
            </div>
          </div>
          
          <p className="mt-8 text-xl text-black">
            A selection of our crafted work, built from scratch by our talented in-house team.
          </p>

          <Button 
            variant="outline" 
            size="lg" 
            className="mt-8 bg-transparent text-black rounded-full border-blue-500"
            
          >
            Case Studies
          </Button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="no-scrollbar flex w-full gap-4 overflow-x-auto scroll-smooth pl-4 md:pl-[calc((100vw-1280px)/2)]"
      >
        {works.map((work) => (
          <WorkCard
            key={work.title}
            {...work}
          />
        ))}
      </div>
    </section>
  )
}

