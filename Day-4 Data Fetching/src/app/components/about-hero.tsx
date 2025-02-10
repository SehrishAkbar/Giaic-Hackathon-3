'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function AboutHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center font-serif text-4xl font-normal leading-tight tracking-tight text-gray-900 sm:text-5xl"
      >
        {"A brand built on the love of craftmanship, quality and outstanding customer service"}
      </motion.h1>

      <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12 lg:mr-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-normal text-gray-900 mt-28"
          >
            From a studio in London to a global brand with over 400 outlets
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="space-y-4 text-gray-600"
          >
            <p>
              {"When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market."}
            </p>
            <p>
              {"Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community."}
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button 
              variant="outline" 
              className="rounded-none px-8 mt-24 transition-transform hover:scale-105"
            >
              Get in touch
            </Button>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          className="relative aspect-square w-full overflow-hidden bg-[#DCE5E5] mt-10"
        >
          <Image
            src="/corner.png"
            alt="Modern living room setup"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      <div className=" grid gap-8 lg:grid-cols-2 lg:gap-12 lg:ml-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          className="relative aspect-square w-full overflow-hidden bg-[#F5F5F5] lg:order-1"
        >
          <Image
            src="/corner2.png"
            alt="Minimal room interior"
            fill
            className="object-cover "
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="order-1 space-y-6 lg:order-2"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-normal text-gray-900 mt-28"
          >
            {"Our service isn't just personal, it's actually hyper personally exquisite"}
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="space-y-4 text-gray-600"
          >
            <p>
              {"When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market."}
            </p>
            <p>
              {" Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community."}
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button 
              variant="outline" 
              className="rounded-none px-8 transition-transform hover:scale-105"
            >
              Get in touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

