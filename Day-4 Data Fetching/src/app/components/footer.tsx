'use client'

import { useEffect, useRef, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, PinIcon as Pinterest, WebcamIcon as Skype } from 'lucide-react'
import Link from "next/link"
import { motion } from 'framer-motion'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

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

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.footer
      ref={footerRef}
      className="bg-[#2A254B] text-white px-6 py-16 md:px-12"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Menu Column */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-base font-normal">Menu</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-sm hover:underline transition-colors duration-300">New arrivals</Link>
              <Link href="#" className="text-sm hover:underline transition-colors duration-300">Best sellers</Link>
              <Link href="#" className="text-sm hover:underline transition-colors duration-300">Recently viewed</Link>
              <Link href="#" className="text-sm hover:underline transition-colors duration-300">Popular this week</Link>
              <Link href="#" className="text-sm hover:underline transition-colors duration-300">All products</Link>
            </nav>
          </motion.div>

          {/* Categories Column */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-base font-normal">Categories</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-sm hover:underline transition-colors duration-300">Crockery</Link>
              <Link href="#" className="text-sm hover:underline transition-colors duration-300">Furniture</Link>
              <Link href="#" className="text-sm hover:underline transition-colors duration-300">Homeware</Link>
              <Link href="#" className="text-sm hover:underline transition-colors duration-300">Plant pots</Link>
              <Link href="#" className="text-sm hover:underline transition-colors duration-300">Chairs</Link>
              <Link href="#" className="text-sm hover:underline transition-colors duration-300">Crockery</Link>
            </nav>
          </motion.div>

          {/* Our Company Column */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-base font-normal">Our company</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="/about" className="text-sm hover:underline transition-colors duration-300">About us</Link>
              <Link href="/products" className="text-sm hover:underline transition-colors duration-300">Vacancies</Link>
              <Link href="/contact" className="text-sm hover:underline transition-colors duration-300">Contact us</Link>
              <Link href="/product-listing" className="text-sm hover:underline transition-colors duration-300">Privacy</Link>
              <Link href="/" className="text-sm hover:underline transition-colors duration-300">Returns policy</Link>
            </nav>
          </motion.div>

          {/* Join Mailing List */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-base font-normal">Join our mailing list</h3>
            <div className="flex gap-2 w-full">
              <Input 
                type="email" 
                placeholder="your@email.com" 
                className="bg-[#393653] border-none text-white placeholder:text-gray-400 h-12 w-full transition-all duration-300 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <Button 
                className="bg-white text-black hover:bg-gray-100 h-12 px-6 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Sign up
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-[#4E4D93]"
          variants={itemVariants}
        >
          <p className="text-sm mb-6 md:mb-0">Copyright 2022 Avion LTD</p>
          <div className="flex items-center space-x-6">
            <Link href="https://www.linkedin.com/" className="hover:text-gray-300 transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors duration-300">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors duration-300">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors duration-300">
              <Skype className="w-5 h-5" />
              <span className="sr-only">Skype</span>
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors duration-300">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors duration-300">
              <Pinterest className="w-5 h-5" />
              <span className="sr-only">Pinterest</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

