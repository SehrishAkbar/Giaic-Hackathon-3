'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from 'framer-motion'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.section
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 mb-12 md:mb-20"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div 
        className="bg-[#2A254B] text-white p-12 md:p-24 flex flex-col justify-center"
        variants={itemVariants}
      >
        <motion.h1 
          className="font-clash text-4xl md:text-5xl font-medium mb-6"
          variants={itemVariants}
        >
          It started with a small idea
        </motion.h1>
        <motion.p 
          className="text-lg mb-8 max-w-md"
          variants={itemVariants}
        >
          A global brand with local beginnings, our story began in a
          small studio in South London in early 2014
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link href="/product-listing">
            <Button 
              className="self-start border-white bg-gray-300 hover:bg-white hover:text-[#2A254B] text-black transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              View collection
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div 
        className="bg-gray-200 aspect-square md:aspect-auto overflow-hidden"
        variants={itemVariants}
      >
        <motion.img
          src="/Image Block.png"
          alt="Interior design showcase"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>
    </motion.section>
  )
}

