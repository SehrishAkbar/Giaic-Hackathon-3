"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronDown } from 'lucide-react'
import {Navbar} from "@/components/Navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const products = [
  {
    id: 1,
    name: "The Dandy chair",
    price: "£250",
    image: "/dandy-chair.png"
  },
  {
    id: 2,
    name: "Rustic Vase Set",
    price: "£155",
    image: "/vase-set.png"
  },
  {
    id: 3,
    name: "The Lucy Lamp",
    price: "£399",
    image: "/stool.png"
  },
  {
    id: 4,
    name: "The Silky Vase",
    price: "£125",
    image: "/silky-vase.png"
  },
  // Repeat products for grid
  {
    id: 5,
    name: "The Dandy chair",
    price: "£250",
    image: "/lucy-lamp.png"
  },
  {
    id: 6,
    name: "Rustic Vase Set",
    price: "£155",
    image: "/darkchair.png"
  },
  {
    id: 7,
    name: "The Lucy Lamp",
    price: "£399",
    image: "/lamps.png"
  },
  {
    id: 8,
    name: "The Silky Vase",
    price: "£125",
    image: "/whitevase.png"
  },
  {
    id: 9,
    name: "The Dandy Chair",
    price: "£125",
    image: "/2chair.png"
  },
]

const filters = {
  "Product type": ["Furniture", "Homeware", "Sofas", "Light fittings", "Accessories"],
  "Price": ["0 - 100", "101 - 250", "250 +"],
  "Designer": ["Robert Smith", "Liam Gallagher", "Biggie Smalls", "Thom Yorke"]
}

export default function ProductListing() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
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
    <>
      <Navbar/>
      <motion.div 
        className="min-h-screen bg-white"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Hero Section */}
        <motion.div 
          className="relative h-[300px] w-full"
          variants={itemVariants}
        >
          <Image
            src="/Frame 143.png"
            alt="All Products"
            fill
            className="object-cover brightness-75"
          />
          <motion.h1 
            className="absolute bottom-8 left-4 text-3xl font-normal text-white sm:left-8 lg:left-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            All products
          </motion.h1>
        </motion.div>

        <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[240px,1fr] lg:gap-x-8">
            {/* Filters - Desktop */}
            <motion.div 
              className="hidden lg:block"
              variants={itemVariants}
            >
              <Accordion type="single" collapsible className="w-full">
                {Object.entries(filters).map(([category, options]) => (
                  <AccordionItem key={category} value={category}>
                    <AccordionTrigger className="text-base font-normal">
                      {category}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        {options.map((option) => (
                          <div key={option} className="flex items-center space-x-2">
                            <Checkbox id={option} />
                            <label
                              htmlFor={option}
                              className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            {/* Filters - Mobile */}
            <motion.div 
              className="flex items-center justify-between gap-4 lg:hidden"
              variants={itemVariants}
            >
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Filters
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <Accordion type="single" collapsible className="w-full">
                    {Object.entries(filters).map(([category, options]) => (
                      <AccordionItem key={category} value={category}>
                        <AccordionTrigger className="text-base font-normal">
                          {category}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            {options.map((option) => (
                              <div key={option} className="flex items-center space-x-2">
                                <Checkbox id={`mobile-${option}`} />
                                <label
                                  htmlFor={`mobile-${option}`}
                                  className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {option}
                                </label>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </SheetContent>
              </Sheet>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Sorting
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Sort by</SheetTitle>
                  </SheetHeader>
                  {/* Add sorting options here */}
                </SheetContent>
              </Sheet>
            </motion.div>

            {/* Product Grid */}
            <motion.div 
              className="mt-6 lg:mt-0"
              variants={containerVariants}
            >
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-3 lg:gap-x-8">
                {products.map((product) => (
                  <motion.div 
                    key={product.id} 
                    className="group"
                    variants={itemVariants}
                  >
                    <motion.div 
                      className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-100"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="object-cover object-center"
                      />
                    </motion.div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm font-normal text-gray-900">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="mt-8 text-center lg:hidden"
                variants={itemVariants}
              >
                <Button 
                  variant="outline" 
                  className="w-full transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  View collection
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Footer/>
    </>
  )
}

