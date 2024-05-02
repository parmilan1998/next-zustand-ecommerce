'use client'
import React, { useEffect } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import useProductStore from '@/store/productStore'
import Image from 'next/image'
import { MdShoppingCart } from 'react-icons/md'
import useCartStore from '@/store/cartStore'
import Link from 'next/link'

const ProductPage = () => {
  const products = useProductStore((state) => state.products)
  const getProducts = useProductStore((state) => state.getProducts)
  const addToCart = useCartStore((state) => state.addToCart)

  useEffect(() => {
    getProducts()
  }, [])

  const handleAddToCart = ({ id, productName }) => {
    addToCart({ id, productName })
  }

  return (
    <div className='py-10 max-w-screen-xl md:px-12 px-4 mx-auto font-poppins'>
      <h1 className='text-3xl font-semibold py-4 text-sky-500 text-center italic tracking-wider'>
        Amazing Products Shop Now
      </h1>

      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 py-8'>
        {products.map((product, index) => (
          <Card>
            <CardHeader>
              <CardTitle className='text-lg text-center tracking-wide'>
                {product.productName}
              </CardTitle>
            </CardHeader>
            <Link href={`/product/${product._id}`}>
              <CardContent>
                <Image
                  className='flex justify-center mx-auto py-1'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeoynDZ13S3RZD6MXu1fXsNZmZyM4bzk3wLGNnc6ZVgA&s'
                  alt='Image'
                  width={120}
                  height={120}
                />
                <CardDescription>
                  {product.productDescription.slice(0, 55)}...
                </CardDescription>
              </CardContent>
            </Link>
            <CardFooter className='flex justify-between'>
              <span className='text-gray-500'>Rs.{product.productPrice}</span>
              <button
                onClick={handleAddToCart}
                className=' bg-gray-800 p-2 text-white hover:bg-gray-500 ease-in duration-200 flex z-50'
                style={{ borderRadius: '20px 0' }}
              >
                <MdShoppingCart size={20} />
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ProductPage
