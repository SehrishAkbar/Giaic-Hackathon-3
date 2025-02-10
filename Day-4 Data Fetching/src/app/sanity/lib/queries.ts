import { groq } from "next-sanity";


export const allproducts = groq`*[_type =="product"]`;
export const five = groq `*[_type == "product"][0...4]`;
export const getProductsQuery = `*[_type == "product"]{
  _id,
  name,
  description,
  price,
  quantity
          "categoryName": category->name,
          "slug": slug.current,
          "imageUrl": image.asset->url,
          rating
           }`;