'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from 'framer-motion'

export default function NewsletterSection() {
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
      className="relative text-white py-16 px-6 md:px-24 overflow-hidden mt-12 md:mt-20"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/gallery.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
      ></motion.div>
      <div className="absolute inset-0 bg-[#A65A2A] opacity-50 z-10"></div>
      <div className="max-w-4xl mx-auto text-center relative z-20">
        <motion.h2 
          className="font-clash text-3xl md:text-4xl font-medium mb-4"
          variants={itemVariants}
        >
          Join the club and get the benefits
        </motion.h2>
        <motion.p 
          className="text-lg mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Sign up for our newsletter and receive exclusive offers on
          new ranges, sales, pop-up stores, and more
        </motion.p>
        <motion.div 
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4 text-sm mb-4 md:mb-0">
            <motion.div 
              className="flex items-center gap-2"
              variants={itemVariants}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Exclusive offers</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              variants={itemVariants}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Free events</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              variants={itemVariants}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Large discounts</span>
            </motion.div>
          </div>
        </motion.div>
        <motion.form 
          className="flex flex-col md:flex-row gap-4 mt-8 max-w-xl mx-auto"
          variants={itemVariants}
        >
          <Input
            type="email"
            placeholder="your@email.com"
            className="bg-white text-black flex-grow transition-all duration-300 ease-in-out focus:ring-2 focus:ring-[#2A254B] focus:border-transparent"
          />
          <Button 
            type="submit" 
            className="bg-[#2A254B] hover:bg-[#2A254B]/90 text-white transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          >
            Sign up
          </Button>
        </motion.form>
      </div>
    </motion.section>
  )
}

