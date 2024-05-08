'use client'
import Image from 'next/image'
import React from 'react'

const CartScreen = () => {
  return (
    <div className='py-10 max-w-screen-xl md:px-12 px-4 mx-auto font-poppins'>
      <h1 className='text-2xl text-sky-500 py-4 font-semibold'>
        Shopping Cart
      </h1>
      {cart.map((item, index) => (
        <div className='flex items-center gap-8' key={index}>
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
            <h1>{item.productName}</h1>
          </div>
          <div className='flex items-center gap-8'>
            <button className='bg-red-500 px-2 rounded-full text-white'>
              -
            </button>
            <h1>{1}</h1>
            <button className='bg-green-500 px-1.5 rounded-full text-white'>
              +
            </button>
          </div>
          <div>
            <button>Remove</button>
          </div>
        </div>
      ))}
      <div className='py-5'>
        {cart.length > 0 && <button>Clear Cart</button>}
      </div>
    </div>
  )
}

export default CartScreen
