'use client'

import { Navbar } from "@/components/Navbar"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Footer from "@/components/footer"
import News from "@/components/newsletter-section"
import { motion } from 'framer-motion'
import Link from "next/link"

export default function ProductPage() {
  const [amount, setAmount] = useState(1)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setAmount(value)
    }
  }

  const addToCart = () => {
    console.log(`Added ${amount} of The Dandy Chair to cart`)
  }

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
      <Navbar />

      <motion.div 
        className="container mx-auto px-4 py-8"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="grid md:grid-cols-2 gap-8 mb-16" variants={containerVariants}>
          {/* Image Section */}
          <motion.div 
            className="bg-gray-100"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/Image Left.png"
              alt="The Dandy Chair"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div className="self-start mt-6" variants={containerVariants}>
            <motion.h1 className="font-clash text-4xl font-medium mb-2" variants={itemVariants}>The Dandy Chair</motion.h1>
            <motion.p className="text-2xl font-medium mb-6" variants={itemVariants}>£250</motion.p>
            <motion.div className="mb-6" variants={itemVariants}>
              <h2 className="font-medium mb-2">Description</h2>
              <p className="text-gray-600">
                A timeless design, with premium materials features as one of our most
                popular and iconic pieces. The dandy chair is perfect for any stylish
                living space with beech legs and lambskin leather upholstery.
              </p>
            </motion.div>
            <motion.ul className="list-disc list-inside mb-6 text-gray-600" variants={itemVariants}>
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </motion.ul>
            <motion.div className="mb-6" variants={itemVariants}>
              <h2 className="font-medium mb-2">Dimensions</h2>
              <div className="grid grid-cols-3 gap-4 text-gray-600">
                <div>
                  <p className="font-medium">Height</p>
                  <p>110cm</p>
                </div>
                <div>
                  <p className="font-medium">Width</p>
                  <p>75cm</p>
                </div>
                <div>
                  <p className="font-medium">Depth</p>
                  <p>50cm</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="flex items-center gap-4 mb-6" variants={itemVariants}>
              <label htmlFor="amount" className="font-medium">Amount:</label>
              <Input
                type="number"
                id="amount"
                value={amount}
                onChange={handleAmountChange}
                className="w-20 transition-all duration-300 focus:ring-2 focus:ring-[#2A254B] focus:border-transparent"
                min="1"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href ="/cart">
              <Button
                onClick={addToCart}
                className="w-auto bg-[#2A254B] hover:bg-[#2A254B]/90 text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Add to cart
              </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div variants={containerVariants}>
          <motion.h2 className="font-clash text-2xl font-medium mb-6" variants={itemVariants}>You might also like</motion.h2>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" variants={containerVariants}>
            {relatedProducts.map((product) => (
              <motion.div key={product.id} className="group" variants={itemVariants}>
                <motion.div 
                  className="mb-4 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
                <h3 className="font-medium mb-1">{product.name}</h3>
                <p className="text-gray-600">£{product.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="text-center mt-12" variants={itemVariants}>
          <Link href ="/product-listing">
          <Button 
            variant="outline" 
            className="font-clash transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            View collection
          </Button>
          </Link>
        </motion.div>
      </motion.div>
      <News/>
      <Footer />
    </>
  )
}

const relatedProducts = [
  { id: 1, name: "The Dandy chair", price: "250", image: "/dandy-chair.png" },
  { id: 2, name: "Rustic Vase Set", price: "155", image: "/vase-set.png" },
  { id: 3, name: "The Silky Vase", price: "125", image: "/silky-vase.png" },
  { id: 4, name: "The Lucy Lamp", price: "399", image: "/lucy-lamp.png" },
]

