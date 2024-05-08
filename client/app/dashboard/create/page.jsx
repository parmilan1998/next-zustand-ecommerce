'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import useProductStore from '@/store/productStore'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const CreateProduct = () => {
  const [message, setMessage] = useState('')
  const addProduct = useProductStore((state) => state.addProduct)
  const updateCreateProductForm = useProductStore(
    (state) => state.updateCreateProductForm
  )
  const createProductForm = useProductStore((state) => state.createProductForm)
  const router = useRouter()

  const handleSubmit = async () => {
    await addProduct(products)
    setMessage('Product added successfully!')
    toast.success('Product Created Successfully!', {
      duration: 4000,
    })
  }

  return (
    <div className='py-10 max-w-screen-xl md:px-12 px-4 mx-auto font-poppins'>
      <Link href='/dashboard'>
        <Button>Go Back</Button>
      </Link>
      <div className='font-poppins py-12'>
        <form
          onSubmit={handleSubmit}
          className='py-6 rounded-lg max-w-lg md:mx-auto mx-4 bg-white px-6'
        >
          {message && (
            <p className='text-green-500 text-center py-2 text-lg'>{message}</p>
          )}
          <div className='py-2 md:px-10 px-4'>
            <h1 className='text-center text-xl text-black font-bold'>
              Create a Product
            </h1>
          </div>
          <div className='space-y-2 mb-5 mx-4 flex flex-col'>
            <Label htmlFor='productName'>Product Name</Label>
            <Input
              value={createProductForm.productName}
              onChange={updateCreateProductForm}
              name='productName'
              type='text'
            />
          </div>
          <div className='space-y-2 mb-5 mx-4 flex flex-col'>
            <Label htmlFor='brand'>Brand</Label>
            <Input
              value={createProductForm.brand}
              onChange={updateCreateProductForm}
              name='brand'
              type='text'
            />
          </div>
          <div className='space-y-2 mb-5 mx-4 flex flex-col'>
            <Label htmlFor='count'>Count</Label>
            <Input
              value={createProductForm.count}
              onChange={updateCreateProductForm}
              type='number'
              name='count'
            />
          </div>
          <div className='space-y-2 mb-5 mx-4 flex flex-col'>
            <Label htmlFor='price'>Product Price</Label>
            <Input
              value={createProductForm.price}
              onChange={updateCreateProductForm}
              type='number'
              name='price'
            />
          </div>
          <div className='space-y-2 mb-5 mx-4 flex flex-col'>
            <Label htmlFor='description'>Description</Label>
            <Textarea
              value={createProductForm.description}
              onChange={updateCreateProductForm}
              name='description'
              type='text'
            />
          </div>
          <div className='space-y-2 mb-6 mx-4 flex flex-col'>
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
