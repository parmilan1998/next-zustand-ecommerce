'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import useProductStore from '@/store/productStore'
// import { useForm } from 'react-hook-form'

const CreateProduct = () => {
  const [message, setMessage] = useState()
  const addProduct = useProductStore((state) => state.addProduct)
  const products = useProductStore((state) => state.products)

  const [formData, setFormData] = useState({
    productName: '',
    count: '',
    brand: '',
    price: '',
    description: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }
  const handleSubmit = async ({ e, formData }) => {
    e.preventDefault()
    await addProduct(formData)
    console.log('Form data:', formData)
  }

  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm()

  // Create a new product
  // const onSubmit = async () => {
  //   await addProduct(products)
  //   setMessage('Form submission successfully!')
  // }

  return (
    <div className='py-10 max-w-screen-xl md:px-12 px-4 mx-auto font-poppins'>
      <Link href='/dashboard'>
        <Button>Go Back</Button>
      </Link>
      <div className='font-poppins py-12'>
        <form
          // onSubmit={handleSubmit(onSubmit)}
          onSubmit={handleSubmit}
          action='#'
          className='py-6 rounded-lg max-w-lg md:mx-auto mx-4 bg-white px-6'
        >
          {message && (
            <p className='text-green-500 text-center py-2 text-lg'>{message}</p>
          )}
          <dir className='py-2 md:px-10 px-4'>
            <h1 className='text-center text-xl text-black font-bold '>
              Create a product
            </h1>
          </dir>
          <div className='space-y-2 mb-5 mx-4'>
            <Label htmlFor='productName'>Product Name</Label>
            <Input
              // {...register('productName', {
              //   required: 'Product Name is required!',
              // })}
              type='text'
              name='productName'
              onChange={handleChange}
              value={formData.productName}
            />{' '}
            {/* {errors.productName && (
              <p className='text-red-500 py-1'>{errors.productName.message}</p>
            )} */}
          </div>

          <div className='space-y-2 mb-5 mx-4'>
            <Label htmlFor='brand'>Brand</Label>
            <Input
              type='text'
              name='brand'
              onChange={handleChange}
              value={formData.brand}
              // {...register('brand', {
              //   required: 'Brand is required!',
              // })}
            />
            {/* {errors.brand && (
              <p className='text-red-500 py-1'>{errors.brand.message}</p>
            )} */}
          </div>
          <div className='space-y-2 mb-5 mx-4'>
            <Label htmlFor='count'>Count </Label>
            <Input
              type='number'
              name='count'
              onChange={handleChange}
              value={formData.count}
              // {...register('count', {
              //   required: 'Product count is required!',
              // })}
            />
            {/* {errors.count && (
              <p className='text-red-500 py-1'>{errors.count.message}</p>
            )} */}
          </div>
          <div className='space-y-2 mb-5 mx-4'>
            <Label htmlFor='price'>Product Price</Label>
            <Input
              type='number'
              name='price'
              onChange={handleChange}
              value={formData.price}
              // {...register('price', {
              //   required: 'Product price is required!',
              // })}
            />
            {/* {errors.price && (
              <p className='text-red-500 py-1'>{errors.price.message}</p>
            )} */}
          </div>
          <div className='space-y-2 mb-5 mx-4'>
            <Label htmlFor='description'>Description </Label>
            <Textarea
              type='text'
              name='description'
              onChange={handleChange}
              value={formData.description}
              // {...register('description', {
              //   required: 'Product description is required!',
              // })}
            />
            {/* {errors.description && (
              <p className='text-red-500 py-1'>{errors.description.message}</p>
            )} */}
          </div>
          <div className='space-y-2 mb-6  mx-4'>
            <Button
              type='submit'
              className='w-full bg-blue-500 hover:bg-blue-700 ease-in duration-200'
            >
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateProduct
