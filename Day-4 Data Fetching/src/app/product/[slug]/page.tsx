import Image from 'next/image'
import { groq } from 'next-sanity'
import { urlFor } from '@/sanity/lib/image'
import client from '@/sanity/lib/client'

interface Product {
  _id: string;
  name: string;
  image: any;
  price: number;
  description: string;
}

interface ProductPageProps {
  params: { slug: string }
}

// Fetch product data from Sanity
async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      image,
      price,
      description
    }`,
    { slug }
  )
}

// Generate dynamic routes (for static generation)
export async function generateStaticParams() {
  const products = await client.fetch(
    groq`*[_type == "product"]{ "slug": slug.current }`
  )

  return products.map((product: { slug: string }) => ({
    slug: product.slug,
  }))
}

// Page Component
export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug)


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
          {product.image && (
            <Image
              src={urlFor(product.image).width(500).height(500).url()}
              alt="image"
              fill
              className="object-cover"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-muted-foreground mb-3">£{product.price}</p>
          <p className="text-muted-foreground mb-3">{product.description}</p>
        </div>
      </div>
    </div>
  )
}
