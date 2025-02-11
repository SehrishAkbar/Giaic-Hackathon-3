"use client"

import * as React from "react"
import Link from "next/link"
import { Search, ShoppingCart } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const categories = [
  "All products",
  "Plant pots",
  "Ceramics",
  "Tables",
  "Chairs",
  "Crockery",
  "Tableware",
  "Cutlery",
]

export function Navbar2() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top Banner */}
      <motion.div 
        className="w-full bg-[#2A254B] py-2 px-4 text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p className="text-sm">{"Free delivery on all orders over £50 with code easter checkout"}</p>
      </motion.div>

      {/* Main Navigation */}
      <div className="border-b">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="font-serif text-2xl">
              Avion
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 md:flex">
            <AnimatePresence>
              {["About us", "Contact", "Blog"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-600 hover:text-gray-900">
                    {item}
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <motion.span 
                    className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    {"0"}
                  </motion.span>
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4">
                  <AnimatePresence>
                    {["About us", "Contact", "Blog"].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm" onClick={() => setIsOpen(false)}>
                          {item}
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </nav>
              </SheetContent>
            </Sheet>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <motion.span 
                    className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    {"0"}
                  </motion.span>
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="border-b">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="hidden space-x-8 md:flex">
              {categories.map((category, index) => (
                <NavigationMenuItem key={category}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <NavigationMenuLink
                      href="/products"
                      className={cn(
                        "group inline-flex h-14 w-max items-center justify-center text-sm font-medium transition-colors hover:text-gray-900",
                        "text-gray-600 hover:text-gray-900"
                      )}
                    >
                      {category}
                    </NavigationMenuLink>
                  </motion.div>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Categories */}
          <motion.div 
            className="scrollbar-none flex overflow-x-auto py-4 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link
                  href="/products"
                  className="whitespace-nowrap px-4 text-sm text-gray-600 hover:text-gray-900"
                >
                  {category}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

