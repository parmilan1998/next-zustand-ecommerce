'use client'
import useProductStore from '@/store/productStore'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const SingleProduct = () => {
  const product = useProductStore((state) => state.product)
  const fetchSingleProduct = useProductStore(
    (state) => state.fetchSingleProduct
  )
  const { id } = useParams()

  useEffect(() => {
    fetchSingleProduct(id)
  }, [])

  return (
    <div className='py-10 max-w-screen-xl md:px-12 px-4 mx-auto font-poppins'>
      SingleProduct
      {product(
        <div>
          <h2>{product.productName}</h2>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  )
}

export default SingleProduct
