'use client'

import { useEffect, useState, useRef } from 'react'
import { Truck, Medal, CreditCard, Recycle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { product } from '../../types/products'
import client from '@/sanity/lib/client'
import { allproducts } from '@/sanity/lib/queries'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { addToCart } from '@/app/actions/action'
import Swal from 'sweetalert2';

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [products, setProducts] = useState<product[]>([]) 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProducts: product[] = await client.fetch(allproducts)
        setProducts(fetchedProducts)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
    fetchProduct()
  }, [])

  const handleAddToCart = (e: React.MouseEvent, product: product) => {
    e.preventDefault();

    Swal.fire({
        position: "top-right",
        icon: "success",
        title: `${product.name} added to cart!`,
        showConfirmButton: false,
        timer: 1000,
    });

    addToCart(product);
   
  };
 
  const features = [
    { icon: <Truck className="w-8 h-8" />, title: "Next day as standard", description: "Order before 3pm and get your order the next day as standard" },
    { icon: <Medal className="w-8 h-8" />, title: "Made by true artisans", description: "Handmade crafted goods made with real passion and craftsmanship" },
    { icon: <CreditCard className="w-8 h-8" />, title: "Unbeatable prices", description: "For our materials and quality you won't find better prices anywhere" },
    { icon: <Recycle className="w-8 h-8" />, title: "Recycled packaging", description: "We use 100% recycled materials to ensure our footprint is more manageable" }
  ]

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <h2 className={`text-3xl md:text-4xl font-serif text-center mb-16 font-clash transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        What makes our brand different
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {features.map((feature, index) => (
          <div key={feature.title} className={`space-y-3 bg-gray-200 p-6 rounded-lg transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
            <div className="transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-3">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold font-clash">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className={`text-center mt-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
        <Link href="/product-listing">
          <Button variant="outline" size="lg" className="font-clash transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground active:scale-95">
            View collection
          </Button>
        </Link>
      </div>

      {/* ✅ Products Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Our latest Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div  
                key={product._id}
                className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
              >
                <Link href={`/product/${product.slug?.current || ''}`}>
                  {product.image ? (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name || "Product Image"}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                      No Image Available
                    </div>
                  )}  
                  <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
                  <p className="text-gray-500 mt-2">
                    {product.price ? `£${product.price}` : "Price not available"}
                  </p>
                  <p className="text-gray-600">{product.description}</p>

                  <button
                  className="gradiant-to-r from-blue-500 to bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md 
                  hover:scale-110 transition-transform duration-300 ease-in-out"
                  onClick={(e) => handleAddToCart(e, product)}
                  >
                    Add To Cart
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Loading products...</p>
          )}
        </div>
      </div>
    </section>
  )
}

