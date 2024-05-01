'use client'
import useCartStore from '@/store/cartStore'
import Image from 'next/image'
import React from 'react'

const CartScreen = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCartStore(
    (state) => ({
      cart: state.cart,
      addToCart: state.addToCart,
      removeFromCart: state.removeFromCart,
      clearCart: state.clearCart,
    })
  )

  return (
    <div className='py-10 max-w-screen-xl md:px-12 px-4 mx-auto font-poppins'>
      <h1 className='text-xl text-sky-500 py-3 font-semibold'>Shopping Cart</h1>
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
          <div>
            <h1>{product.productName}</h1>
          </div>
          <div className='flex items-center gap-8'>
            <button>-</button>
            <h1>{1}</h1>
            <button>+</button>
          </div>
          <div>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div>
        {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      </div>
    </div>
  )
}

export default CartScreen
