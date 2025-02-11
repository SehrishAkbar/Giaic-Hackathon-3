'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, User, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from 'framer-motion'

const navItems: string[] = [
  'Plant pots',
  'Ceramics',
  'Tables',
  'Chairs',
  'Crockery',
  'Tableware',
  'Cutlery'
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side: Search Icon (hidden on small screens) */}
          <div className="hidden lg:flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-500 transition-colors duration-200">
                  <Search className="h-6 w-6" />
                  <span className="sr-only">Search</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <motion.div 
                  className="p-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input type="search" placeholder="Search..." className="w-full" />
                </motion.div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Center: Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center">
              <span className="font-serif text-2xl">Avion</span>
            </Link>
          </motion.div>

          {/* Right side: Cart & Profile Icons (hidden on small screens) */}
          <div className="hidden lg:flex items-center">
            <motion.a 
              href="/cart"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" size="icon" className="ml-4 text-gray-400 hover:text-gray-500 transition-colors duration-200">
                <ShoppingCart className="h-6 w-6" />
                <span className="sr-only">Shopping cart</span>
              </Button>
            </motion.a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="icon" className="ml-4 text-gray-400 hover:text-gray-500 transition-colors duration-200">
                    <User className="h-6 w-6" />
                    <span className="sr-only">User account</span>
                  </Button>
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/signin">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/login">Login</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu and search (visible on small screens) */}
          <div className="flex lg:hidden items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-500 transition-colors duration-200">
                  <Search className="h-6 w-6" />
                  <span className="sr-only">Search</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <motion.div 
                  className="p-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input type="search" placeholder="Search..." className="w-full" />
                </motion.div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-4 text-gray-400 hover:text-gray-500 transition-colors duration-200">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-4">
                  <AnimatePresence>
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                      >
                        <Link
                          href="products"
                          className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
                        >
                          {item}
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <motion.a 
                    href='/cart'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="ghost" size="sm" className="justify-start text-gray-400 hover:text-gray-500 transition-colors duration-200">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      <span>Cart</span>
                    </Button>
                  </motion.a>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="ghost" size="sm" className="justify-start text-gray-400 hover:text-gray-500 transition-colors duration-200">
                      <User className="h-5 w-5 mr-2" />
                      <span>Profile</span>
                    </Button>
                  </motion.div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex lg:items-center lg:justify-center flex-wrap gap-4 mt-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href="products"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

