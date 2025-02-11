'use client'

import { useEffect, useRef, useState } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    )

    if (bannerRef.current) {
      observer.observe(bannerRef.current)
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current)
      }
    }
  }, [])

  return (
   
    <div ref={bannerRef} className="relative min-h-[700px] md:min-h-[600px] lg:min-h-[700px] flex flex-col md:block overflow-hidden">
      {/* White Box - On top for mobile, overlaid for larger screens */}
      <div className={`bg-white p-8 md:p-12 md:max-w-lg lg:max-w-xl xl:max-w-2xl md:absolute md:top-1/2 md:right-20 md:transform md:-translate-y-1/2 z-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 md:translate-x-0' : 'opacity-0 md:translate-x-full'}`}>
        <h1 className={`text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          Luxury homeware for people who love timeless design quality
        </h1>
        <p className={`text-gray-600 mb-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          Shop the new Spring 2022 collection today
        </p>
        <Link href="/product-listing">
          <Button
            variant="outline"
            className={`text-[#2A254B] hover:bg-gray-100 bg-gray-300 lg:mt-32 font-serif transition-all duration-300 hover:scale-105 active:scale-95 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            View collection
          </Button>
        </Link>
      </div>

      {/* Background Image - Below div on mobile, full-size background on larger screens */}
      <div className={`relative flex-grow md:absolute md:inset-0 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
        <Image
          src="/banner.png"
          alt="Luxury homeware showcase"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
      </div>
    </div>
  )
}

