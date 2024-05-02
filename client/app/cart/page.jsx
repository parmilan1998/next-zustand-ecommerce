'use client'
import useCartStore from '@/store/cartStore'
import Image from 'next/image'
import React from 'react'

const CartScreen = () => {
  const cart = useCartStore((state) => state.cart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const addCount = useCartStore((state) => state.addCount)
  const reduceCount = useCartStore((state) => state.reduceCount)
  const clearCart = useCartStore((state) => state.clearCart)

  const handleRemoveFromCart = (id) => {
    removeFromCart(id)
  }

  const handleAddCount = (id) => {
    addCount(id)
  }

  const handleReduceCount = (id) => {
    reduceCount(id)
  }

  return (
    <div className='py-10 max-w-screen-xl md:px-12 px-4 mx-auto font-poppins'>
      <h1 className='text-2xl text-sky-500 py-4 font-semibold'>
        Shopping Cart
      </h1>
      {cart.map((product) => (
        <div className='flex items-center gap-8' key={product.id}>
          <div>
            <Image
              className='flex justify-center mx-auto py-1 rounded-xl'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeoynDZ13S3RZD6MXu1fXsNZmZyM4bzk3wLGNnc6ZVgA&s'
              alt='Image'
              width={80}
              height={80}
            />
          </div>
          <div className='w-64'>
            <h1>{product.productName}</h1>
          </div>
          <div className='flex items-center gap-8'>
            <button
              className='bg-red-500 px-2 rounded-full text-white'
              onClick={() => handleReduceCount(product._id)}
            >
              -
            </button>
            <h1>{1}</h1>
            <button
              className='bg-green-500 px-1.5 rounded-full text-white'
              onClick={() => handleAddCount(product._id)}
            >
              +
            </button>
          </div>
          <div>
            <button onClick={() => handleRemoveFromCart(product._id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className='py-5'>
        {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      </div>
    </div>
  )
}

export default CartScreen
